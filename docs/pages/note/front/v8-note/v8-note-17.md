# V8是怎么通过内联缓存来提升函数执行效率的

## 问题
- 接上一章思考题
```js
function loadX(o) { 
    return o.x
}
var o = { x: 1,y:3}
var o1 = { x: 3 ,y:6}
for (var i = 0; i < 90000; i++) {
    loadX(o)
    loadX(o1)
}
```
- 我们定义了一个 loadX 函数，它有一个参数 o，该函数只是返回了 o.x。
- 通常 V8 获取 o.x 的流程是这样的：查找对象 o 的隐藏类，再通过隐藏类查找 x 属性偏移量，然后根据偏移量获取属性值，在这段代码中 loadX 函数会被反复执行，那么获取 o.x 流程也需要反复被执行。我们有没有办法再度简化这个查找过程，最好能一步到位查找到 x 的属性值呢？答案是，有的。
- 其实这是一个关于内联缓存的思考题。我们可以看到，函数 loadX 在一个 for 循环里面被重复执行了很多次，因此 V8 会想尽一切办法来压缩这个查找过程，以提升对象的查找效率。这个加速函数执行的策略就是内联缓存 (Inline Cache)，简称为 IC。
- 下面我们就来解答下，V8 是怎么通过 IC，来加速函数 loadX 的执行效率的。

## 什么是内联缓存
- 要回答这个问题，我们需要知道 IC 的工作原理。其实 IC 的原理很简单，直观地理解，就是在 V8 执行函数的过程中，会观察函数中一些调用点 (CallSite) 上的关键的中间数据，然后将这些数据缓存起来，当下次再次执行该函数的时候，V8 就可以直接利用这些中间数据，节省了再次获取这些数据的过程，因此 V8 利用 IC，可以有效提升一些重复代码的执行效率。
- IC 会为每个函数维护一个反馈向量 (FeedBack Vector)，反馈向量记录了函数在执行过程中的一些关键的中间数据。关于函数和反馈向量的关系你可以参看下图：
![](https://zmx2321.github.io/vite-blog/images/note/front/v8-note/17/17-1.png)
- 反馈向量其实就是一个表结构，它由很多项组成的，每一项称为一个插槽 (Slot)，V8 会依次将执行 loadX 函数的中间数据写入到反馈向量的插槽中。
- 比如下面这段函数：
```js
function loadX(o) { 
 o.y = 4
 return o.x
}
```
- 当 V8 执行这段函数的时候，它会判断 o.y = 4 和 return o.x 这两段是调用点 (CallSite)，因为它们使用了对象和属性，那么 V8 会在 loadX 函数的反馈向量中为每个调用点分配一个插槽。
- 每个插槽中包括了插槽的索引 (slot index)、插槽的类型 (type)、插槽的状态 (state)、隐藏类 (map) 的地址、还有属性的偏移量，比如上面这个函数中的两个调用点都使用了对象 o，那么反馈向量两个插槽中的 map 属性也都是指向同一个隐藏类的，因此这两个插槽的 map 地址是一样的。
![](https://zmx2321.github.io/vite-blog/images/note/front/v8-note/17/17-2.png)
- 了解了反馈向量的大致结构，我们再来看下当 V8 执行 loadX 函数时，loadX 函数中的关键数据是如何被写入到反馈向量中。
- loadX 的代码如下所示：
```js
function loadX(o) { 
    return o.x
}
loadX({x:1})
```
- 我们将 loadX 转换为字节码：
```js
StackCheck
LdaNamedProperty a0, [0], [0]
Return
```
- loadX 函数的这段字节码很简单，就三句：
    - 第一句是检查栈是否溢出；
    - 第二句是 LdaNamedProperty，它的作用是取出参数 a0 的第一个属性值，并将属性值放到累加器中；
    - 第三句是返回累加器中的属性值。
- 这里我们重点关注 LdaNamedProperty 这句字节码，我们看到它有三个参数。a0 就是 loadX 的第一个参数；第二个参数[0]表示取出对象 a0 的第一个属性值，这两个参数很好理解。第三个参数就和反馈向量有关了，它表示将 LdaNamedProperty 操作的中间数据写入到反馈向量中，方括号中间的 0 表示写入反馈向量的第一个插槽中。具体你可以参看下图：
![](https://zmx2321.github.io/vite-blog/images/note/front/v8-note/17/17-3.png)
- 观察上图，我们可以看出，在函数 loadX 的反馈向量中，已经缓存了数据：
    - 在 map 栏，缓存了 o 的隐藏类的地址；
    - 在 offset 一栏，缓存了属性 x 的偏移量；
    - 在 type 一栏，缓存了操作类型，这里是 LOAD 类型。在反馈向量中，我们把这种通过 o.x 来访问对象属性值的操作称为 LOAD 类型。
- V8 除了缓存 o.x 这种 LOAD 类型的操作以外，还会缓存存储 (STORE) 类型和函数调用 (CALL) 类型的中间数据。
- 为了分析后面两种存储形式，我们再来看下面这段代码：
```js
function foo(){}
function loadX(o) { 
    o.y = 4
    foo()
    return o.x
}
loadX({x:1,y:4})
```
- 相应的字节码如下所示：
```js
StackCheck
LdaSmi [4]
StaNamedProperty a0, [0], [0]
LdaGlobal [1], [2]
Star r0
CallUndefinedReceiver0 r0, [4]
LdaNamedProperty a0, [2], [6]
Return
```
- 下图是这段字节码的执行流程：
![](https://zmx2321.github.io/vite-blog/images/note/front/v8-note/17/17-4.png)
- 从图中可以看出，o.y = 4 对应的字节码是：
```js
LdaSmi [4]
StaNamedProperty a0, [0], [0]
```
- 这段代码是先使用 LdaSmi [4]，将常数 4 加载到累加器中，然后通过 StaNamedProperty 的字节码指令，将累加器中的 4 赋给 o.y，这是一个存储 (STORE) 类型的操作，V8 会将操作的中间结果存放到反馈向量中的第一个插槽中。
- 调用 foo 函数的字节码是：
```js
LdaGlobal [1], [2]
Star r0
CallUndefinedReceiver0 r0, [4]
```
- 解释器首先加载 foo 函数对象的地址到累加器中，这是通过 LdaGlobal 来完成的，然后 V8 会将加载的中间结果存放到反馈向量的第 3 个插槽中，这是一个存储类型的操作。接下来执行 CallUndefinedReceiver0，来实现 foo 函数的调用，并将执行的中间结果放到反馈向量的第 5 个插槽中，这是一个调用 (CALL) 类型的操作。
- 最后就是返回 o.x，return o.x 仅仅是加载对象中的 x 属性，所以这是一个加载 (LOAD) 类型的操作，我们在上面介绍过的。最终生成的反馈向量如下图所示：
![](https://zmx2321.github.io/vite-blog/images/note/front/v8-note/17/17-5.png)
- 现在有了反馈向量缓存的数据，那 V8 是如何利用这些数据的呢？
- 当 V8 再次调用 loadX 函数时，比如执行到 loadX 函数中的 return o.x 语句时，它就会在对应的插槽中查找 x 属性的偏移量，之后 V8 就能直接去内存中获取 o.x 的属性值了。这样就大大提升了 V8 的执行效率。

## 多态和超态




## V8内联缓存(IC)知识关系思维导图
<img-viewer :src="'https://zmx2321.github.io/vite-blog/images/note/front/v8-note/17/17-0.png'" :alt="'V8内联缓存(IC)知识关系思维导图'" />