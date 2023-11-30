# V8是如何实现对象继承的

## 什么是继承
- 简单地理解，继承就是一个对象可以访问另外一个对象中的属性和方法，比如我有一个 B 对象，该对象继承了 A 对象，那么 B 对象便可以直接访问 A 对象中的属性和方法
- 不同的语言实现继承的方式是不同的，其中最典型的两种方式是基于类的设计和基于原型继承的设计。

## 不同语言的继承
- C++、Java、C# 这些语言都是基于经典的类继承的设计模式，这种模式最大的特点就是提供了非常复杂的规则，并提供了非常多的关键字，诸如 class、friend、protected、private、interface 等，通过组合使用这些关键字，就可以实现继承。
- 使用基于类的继承时，如果业务复杂，那么你需要创建大量的对象，然后需要维护非常复杂的继承关系，这会导致代码过度复杂和臃肿，另外引入了这么多关键字也给设计带来了更大的复杂度。
- 而 JavaScript 的继承方式和其他面向对象的继承方式有着很大差别，JavaScript 本身不提供一个 class 实现。虽然标准委员会在 ES2015/ES6 中引入了 class 关键字，但那只是语法糖，
- JavaScript 的继承依然和基于类的继承没有一点关系。所以当你看到 JavaScript 出现了 class 关键字时，不要以为 JavaScript 也是面向对象语言了。
- JavaScript 仅仅在对象中引入了一个原型的属性，就实现了语言的继承机制，基于原型的继承省去了很多基于类继承时的繁文缛节，简洁而优美。

## 原型继承是如何实现的
- 有一个对象 C，它包含了一个属性“type”，那么对象 C 是可以直接访问它自己的属性 type 的，这点毫无疑问。
- 怎样让 C 对象像访问自己的属性一样，访问 B 对象呢？
- 我们从 V8 的内存快照看到，JavaScript 的每个对象都包含了一个隐藏属性 `__proto__` ，我们就把该隐藏属性 `__proto__` 称之为该对象的原型 (prototype)，`__proto__` 指向了内存中的另外一个对象，我们就把 `__proto__` 指向的对象称为该对象的原型对象，那么该对象就可以直接访问其原型对象的方法或者属性。
    - 比如我让 C 对象的原型指向 B 对象，那么便可以利用 C 对象来直接访问 B 对象中的属性或者方法了
- 当 C 对象将它的 `__proto__` 属性指向了 B 对象后，那么通过对象 C 来访问对象 B 中的 name 属性时，V8 会先从对象 C 中查找，但是并没有查找到，接下来 V8 继续在其原型对象 B 中查找，因为对象 B 中包含了 name 属性，那么 V8 就直接返回对象 B 中的 name 属性值，虽然 C 和 B 是两个不同的对象，但是使用的时候，B 的属性看上去就像是 C 的属性一样。
- 同样的方式，B 也是一个对象，它也有自己的 `__proto__` 属性，比如它的属性指向了内存中另外一块对象 A
- 对象 A 有个属性是 color，那么通过 C.color 访问 color 属性时，V8 会先在 C 对象内部查找，但是没有查找到，接着继续在 C 对象的原型对象 B 中查找，但是依然没有查找到，那么继续去对象 B 的原型对象 A 中查找，因为 color 在对象 A 中，那么 V8 就返回该属性值。
- 我们看到使用 C.name 和 C.color 时，给人的感觉属性 name 和 color 都是对象 C 本身的属性，但实际上这些属性都是位于原型对象上，我们把这个查找属性的路径称为原型链，它像一个链条一样，将几个原型链接了起来。
- 在这里还要注意一点，不要将原型链接和作用域链搞混淆了，作用域链是沿着函数的作用域一级一级来查找变量的，而原型链是沿着对象的原型一级一级来查找属性的，虽然它们的实现方式是类似的，但是它们的用途是不同的
- 关于继承，还有一种情况，如果我有另外一个对象 D，它可以和 C 共同拥有同一个原型对象 B
- 因为对象 C 和对象 D 的原型都指向了对象 B，所以它们共同拥有同一个原型对象，当我通过 D 去访问 name 属性或者 color 属性时，返回的值和使用对象 C 访问 name 属性和 color 属性是一样的，因为它们是同一个数据。
- 我们再来回顾下继承的概念：继承就是一个对象可以访问另外一个对象中的属性和方法，在JavaScript 中，我们通过原型和原型链的方式来实现了继承特性。
- 通过上面的分析，你可以看到在 JavaScript 中的继承非常简洁，就是每个对象都有一个原型属性，该属性指向了原型对象，查找属性的时候，JavaScript 虚拟机会沿着原型一层一层向上查找，直至找到正确的属性

## 利用 `__proto__` 实现继承
```js
var animal = {
    type: "Default",
    color: "Default",
    getInfo: function () {
        return `Type is: ${this.type}，color is ${this.color}.`
    }
}
var dog = {
    type: "Dog",
    color: "Black",
}
```
- 在这段代码中，我创建了两个对象 animal 和 dog，我想让 dog 对象继承于 animal 对象，那么最直接的方式就是将 dog 的原型指向对象 animal，应该怎么操作呢？
- 我们可以通过设置 dog 对象中的 `__proto__` 属性，将其指向 animal，代码是这样的：
    - `dog.__proto__ = animal`
- 还有一点我们要注意，通常隐藏属性是不能使用 JavaScript 来直接与之交互的。虽然现代浏览器都开了一个口子，让 JavaScript 可以访问隐藏属性 _proto_，但是在实际项目中，我们不应该直接通过 _proto_ 来访问或者修改该属性，其主要原因有两个：
    - 首先，这是隐藏属性，并不是标准定义的 ;
    - 其次，使用该属性会造成严重的性能问题。
- 我们可以使用构造函数来创建对象

## 构造函数是怎么创建对象的
- 比如我们要创建一个 dog 对象，我可以先创建一个 DogFactory 的函数，属性通过参数进行传递，在函数体内，通过 this 设置属性值。代码如下所示：
```js
function DogFactory(type,color){
    this.type = type
    this.color = color
}
```
- 然后再结合关键字“new”就可以创建对象了，创建对象的代码如下所示：
    - `var dog = new DogFactory('Dog','Black')`
- 通过这种方式，我们就把后面的函数称为构造函数，因为通过执行 new 配合一个函数，JavaScript 虚拟机便会返回一个对象。如果没有详细研究过这个问题，很可能对这种操作感到迷惑，为什么通过 new 关键字配合一个函数，就会返回一个对象呢？
- 先来看看这段代码的深层含义。
- 其实当 V8 执行上面这段代码时，V8 会在背后悄悄地做了以下几件事情，模拟代码如下所示：
```js
var dog = {}  
dog.__proto__ = DogFactory.prototype
DogFactory.call(dog,'Dog','Black')
```
- 可以参考这段代码的执行流程图：
![函数声明的调用](https://zmx2321.github.io/vite-blog/images/note/front/v8-note/6/6-1.png)
- 观察上图，我们可以看到执行流程分为三步：
    - 首先，创建了一个空白对象 dog；
    - 然后，将 DogFactory 的 prototype 属性设置为 dog 的原型对象，这就是给 dog 对象设置原型对象的关键一步
    - 最后，再使用 dog 来调用 DogFactory，这时候 DogFactory 函数中的 this 就指向了对象 dog，然后在 DogFactory 函数中，利用 this 对对象 dog 执行属性填充操作，最终就创建了对象 dog。

## 构造函数怎么实现继承
- 现在我们可以通过构造函数来创建对象了，接下来我们就看看构造函数是如何实现继承的，先看看这段代码
```js
function DogFactory(type,color){
    this.type = type
    this.color = color
    //Mammalia
    //恒温
    this.constant_temperature = 1
}
var dog1 = new DogFactory('Dog','Black')
var dog2 = new DogFactory('Dog','Black')
var dog3 = new DogFactory('Dog','Black')
```
- 利用上面这段代码创建了三个 dog 对象，每个对象都占用了一块空间
- 以看出来，对象 dog1 到 dog3 中的 constant_temperature 属性都占用了一块空间，但是这是一个通用的属性，表示所有的 dog 对象都是恒温动物，所以没有必要在每个对象中都为该属性分配一块空间，我们可以将该属性设置公用的
- 其实函数还有另外一个隐藏属性，那就是 prototype，刚才介绍构造函数时我们也提到过。一个函数有以下几个隐藏属性：
    - name 、 code 、 prototype
- 每个函数对象中都有一个公开的 prototype 属性，当你将这个函数作为构造函数来创建一个新的对象时，新创建对象的原型对象就指向了该函数的 prototype 属性。当然了，如果你只是正常调用该函数，那么 prototype 属性将不起作用。
- 现在我们知道了新对象的原型对象指向了构造函数的 prototype 属性，当你通过一个构造函数创建多个对象的时候，这几个对象的原型都指向了该函数的 prototype 属性
- 这时候我们可以将 constant_temperature 属性添加到 DogFactory 的 prototype 属性上，代码如下所示：
```js
function DogFactory(type,color){
    this.type = type
    this.color = color
    //Mammalia
}
DogFactory. prototype.constant_temperature = 1
var dog1 = new DogFactory('Dog','Black')
var dog2 = new DogFactory('Dog','Black')
var dog3 = new DogFactory('Dog','Black')
```
- 这样我们三个 dog 对象的原型对象都指向了 prototype，而 prototype 又包含了 constant_temperature 属性，这就是我们实现继承的正确方式。

## 一段关于 new 的历史
- 现在我们知道 new 关键字结合构造函数，就能生成一个对象，不过这种方式很怪异，为什么要这样呢？要了解这背后的原因，我们需要了解一段关于关于 JavaScript 的历史。
- JavaScript 是 Brendan Eich 发明的，那是个“战乱”的时代，各种大公司相互争霸，有 Sun、微软、网景、甲骨文等公司，它们都有推出自己的语言，其中最炙手可热的编程语言是 Sun 的 Java，而 JavaScript 就是这个时候诞生的。当时创造 JavaScript 的目的仅仅是为了让浏览器页面可以动起来，所以尽可能采用简化的方式来设计 JavaScript，所以本质上来说，Java 和 JavaScript 的关系就像雷锋和雷峰塔的关系。
- 那么之所以叫 JavaScript 是出于市场原因考量的，因为一门新的语言需要吸引新的开发者，而当时最大的开发者群体就是 Java，于是 JavaScript 就蹭了 Java 的热度，事后，这一招被证明的确有效果。
- 虽然叫 JavaScript，但是其编程方式和 Java 比起来，依然存在着非常大的差异，其中 Java 中使用最频繁的代码就是创建一个对象，如下所示：
    - `CreateInstance instance = new CreateInstance();`
- 当时 JavaScript 并没有使用这种方式来创建对象，因为 JavaScript 中的对象和 Java 中的对象是完全不一样的，因此，完全没有必要使用关键字 new 来创建一个新对象的，但是为了进一步吸引 Java 程序员，依然需要在语法层面去蹭 Java 热点，所以 JavaScript 中就被硬生生地强制加入了非常不协调的关键字 new，然后使用 new 来创造对象就变成这样了：
    - `var bar = new Foo()`
- Java 程序员看到这段代码时，当然会感到倍感亲切，觉得 Java 和 JavaScript 非常相似，那么使用 JavaScript 也就天经地义了。不过代码形式只是表象，其背后原理是完全不同的。
- 了解了这段历史之后，我们知道 JavaScript 的 new 关键字设计并不合理，但是站在市场角度来说，它的出现又是非常成功的，成功地推广了 JavaScript。

## 总结
- JavaScript 中的继承机制，涉及到了原型继承机制，
- 每个对象中都有的隐含属性 `__proto__`
- V8 为每个对象都设置了一个 `__proto__` 属性，该属性直接指向了该对象的原型对象，原型对象也有自己的 `__proto__` 属性，这些属性串连在一起就成了原型链。
- 不过在 JavaScript 中，并不建议直接使用 `__proto__` 属性，主要有两个原因。
    1. 这是隐藏属性，并不是标准定义的；
    2. 使用该属性会造成严重的性能问题。
- 所以，在 JavaScript 中，是使用 new 加上构造函数的这种组合来创建对象和实现对象的继承。不过使用这种方式隐含的语义过于隐晦，所以理解起来有点难度。
- 为什么 JavaScript 中要使用这种怪异的方式来创建对象？为了理解这个问题，我们回顾了一段 JavaScript 的历史。由于当前的 Java 非常流行，基于市场推广的考虑，JavaScript 采取了蹭 Java 热度的策略，在语言命名上使用了 Java 字样，在语法形式上也模仿了 Java。事实上通过这些策略，确实为 JavaScript 带来了市场上的成功。不过依然要记住，JavaScript 和 Java 是完全两种不同的语言。

## 思考
> DogFactory 是一个函数，那么“DogFactory.prototype”和“DogFactory._proto_”这两个属性之间有关联吗

- DogFactory 是 Function 构造函数的一个实例，所以 `DogFactory.__proto__ === Function.prototype`
- DogFactory.prototype 是调用 Object 构造函数的一个实例，所以 `DogFactory.prototype.__proto__ === Object.prototype`
- 因此 DogFactory._proto_ 和 DogFactory.prototype 没有直接关系

## JavaScript中的对象继承思维导图
<img-viewer :src="'https://zmx2321.github.io/vite-blog/images/note/front/v8-note/5/5-0.png'" :alt="'JavaScript中的对象继承'" />