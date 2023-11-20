# Vue3.0中新特性及Compiler原理

## 1. vue3与vue2x性能对比
### 1-1. 执行层面
> 在执行层面带来的性能提升

![vite](https://zmx2321.github.io/vite-blog/images/note/front/vue3-note/vitexn.png)
- 在纯js部分执行的效率对比
    - 从挂载、更新、内存三个角度进行对比

### 1-2. 代码层面
> 对核心代码进行了压缩

- 核心代码 + Composition Api：13.5kb, 最小11.75kb
- 所有Runtime：22.5kb(Vue2是32kb)
    - 所有Runtime都没有vue2大

## 2. vue3带来的变化
### 2-1. 按需加载 & 组合API
> - vue2中使用的是生命周期的方法，结合data、props、computed、watch这一系列绑定在vue实例上的方法来控制整个代码
> - 这样会带来一个问题，就是代码在非常冗长或者逻辑非常复杂的时候，组件是不可读的
> - 虽然说有一些比如说filter、directive、mixin带来一些便利和灵活，它最终没有去解决组件之间如果去共用逻辑，而且又想这个逻辑比较容易去阅读和理解的问题

#### 2-1-1. 按需加载
- 基础：Virtual Dom, 响应式算法
    - vue3中至少会加载这两个方法
- 非常用功能，按需加载，e.g.v-model，Transition
    - 这样做就可以很好地压缩了应用的体积
    - 有的时候我们应用里面没有使用到过渡动画，这时候就可以不去引用Transition

#### 2-1-2. 组合API
> Compiler原理篇

通过几个案例可以大体上了解vue3是在哪些地方进行了优化

**
优化案例1：
**<br />
![Compiler](https://zmx2321.github.io/vite-blog/images/note/front/vue3-note/virxr.png)
![Compiler](https://zmx2321.github.io/vite-blog/images/note/front/vue3-note/virxr2.png)
![Compiler](https://zmx2321.github.io/vite-blog/images/note/front/vue3-note/virxr3.png)

- 左边是vue3的源码中template的源码，右边是template编译成的代码
- 当使用了div元素的时候，页面上会引用_createVNode，这个其实就是virtualDom的节点
- 如何如体现它的优势呢？
    - 如果它套了很多span，里面是静态的东西，它会创建_createTextVNode
    - 如果有动态的东西，比如说模板语法{{msg}}，它在创建TextVNode的时候，会接上一个数字，这个数字后面会接上一段注释，这个注释就是模板消息的类型，在Compiler去处理应用的时候，他就会着重注意后面这段注释。相当于就是给这个节点打上了标识。
    - 其他没有变化的静态节点，他是不会进行处理的，着重处理的是带*号的部分，这样就对整个编译或处理的过程进行了优化，以达到对整个js处理流程的优化
    - 如果加一个id的话，它其实是当做静态的数据做处理，如果前面加个冒号，即当做动态数据的话，就会出现注释，类型为props
    - 在选择了hoist static之后，所有静态的东西，就会被抽离出来
    - 如果静态节点非常多的话，他还会去做优化处理，直接编译成静态的字符串
    - 这些都是在前端，即浏览器中完成的，它提升了js的处理速度

**
优化案例2：
**<br />
![Compiler](https://zmx2321.github.io/vite-blog/images/note/front/vue3-note/virxr4.png)
![Compiler](https://zmx2321.github.io/vite-blog/images/note/front/vue3-note/virxr5.png)

- 在没开启cacheHandlers之前，他是绑定在上下文的，开启cacheHandlers之后，在全局进行了注册
- 在单个节点里的单个单个事件可能还体现不出来，但在自定义的组件中，在某些组件里面我们会引用它，这时候会挂载到整个virtualDom上面去，就会对他进行实例化，多次进行实例化的话，按照原先处理的逻辑，可能就会每次都会去创建它对应的click指向。
- 现在cacheHandlers之后，组件的事件，或者行内的方法，也是可以进行缓存的，这样在组件重复创建的时候，他就不会多次实例化，它对内存的优化是非常好的 。
- 类似享元模式——减少创建对象的数量
    - 减少创建对象的数量，来减少内存占用和提高性能，这种设计模式属于结构型的模式，提供了减少对象数量，从而改善应用所需的结构的方式
- ssr也有很大的性能提升(第二张图)
    - 把静态的字符串转变成静态的字符串，后面使用template的方法将他注入进来，这里借助到编译器的打包hint，然后对更新进行分析，最后抽离了那些静态和动态需要更新的东西，最终达到提升性能的目的
<br />

**
总结：
**<br />

1. 静态Node不再作更新处理(hoistStatic -> SSR优化)
2. 静态绑定的class，id不再作更新处理
3. 结合打包Hint，进行更新分析(动态绑定)
    - Compiler会结合打包Hint，进行更新分析，以达到提升性能的目的
4. 事件监听Cache缓存处理(cacheHandlers)
    - 事件绑定及缓存处理的机制，有些重复创建的组件，比如说在组件中传递事件的时候，实际上提升了等级(从绑定在上下文到作用在全局)，然后把它缓存起来了，这时候在需要重复创建组件的时候,这些方法不会重复进行实例化，这样就达到了优化内存的使用
    - hoistStatic自动针对多静态节点进行优化，输出字符串
- 按需加载（最重要）
    - 如果没有任何内容，直接就输出了render函数
    - 如果加上了一个div，他就会引入createVNode
    - 如果加上input，加上了一个v-model，会自动引入一个vModelText,将type设置为checkbox，右边内容就变成了vModelCheckbox,如果type是一个动态类型，就会引入vModelDynamic类型
    - 如果使用transition，右边就会引入transition
    - 官方把这些api都封装成一个一个的函数，这样的好处就是方便类型检查，也方便了动态的加载。
<br />

**
compiler总结：
**<br />

- Virtual Dom机制调整
- 内存优化，更少的占用
- 按需加载，更灵活的组件化
    - vue3中的api全部都可以按需加载，这样也提供了更灵活的组件化开发的方式

### 2-2. TS支持，新增：Fragment、Teleport、Suspense
- 对ts有了更好的支持
- vue3是用ts改写了整个框架
- 采用函数式的编程，比较方便理解整个应用执行的过程
- Fragment(碎片)、Teleport(相当于全局组件)、Suspense(相当于异步加载)
- 有的时候有些组件是需要异步取的某些组件返回来的结果，渲染dom结构的，有了Suspense就可以在组件里面异步调取其他组件
- 有些报警弹窗需要全局使用，可以用Teleport
- 经常我们写vue2的时候，template必须有一个root节点，不能有多个节点，有了Fragment支持之后，不用去关心template中必须要有一个根节点，随便什么内容都可以加入进来，比如说字符串、组件，这种情况下，vue的Rumtime会把它们处理成Fragment

### 2-3. 性能提升
- 1.3倍 到 2倍


