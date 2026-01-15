<!-- CSS/HTML 面试题
1、 如何理解html语义化
让人更容易读懂(代码可读性)
让机器(搜索引擎)更容易读懂(搜索引擎优化=>SEO),即更容易被爬虫识别
2、 默认情况下，哪些html标签是块级元素，哪些是内联元素
块级元素 => display:block/table => 独占一行div、h1、h2、table、ul、ol、p等
内联元素 => display:inline/inline-block、span、img、input、button等
3、 offsetWidth的宽度如何计算
无外边距 => 内容宽度+内边距+边框
4、margin纵向重叠的问题
  相邻元素的margin-top和margin-bottom会发生重叠
  空白内容的`<p></p>`也会重叠
5、对margin的top/left/right/bottom设置负值，有何效果
  margin-top和margin-left负值，元素向上，向左移动
  margin-right负值，右侧元素左移，自身不受影响
  margin-bottom负值，下方元素上移，自身不受影响
6、BFC的理解和应用(常考)
Block format context即块级格式化上下文，是一块独立渲染区域，内部元素的渲染不会影响边界以外的元素
形成BFC的常见条件 => 即能实现BFC的方式：
1、float不是none
2、position是absolute或fixed
3、overflow不是visible
  4、display是flex或inline-block等
BFC的常见应用：清除浮动
示例：一个容器，里面有文字和图片，给图片设置浮动，此时图片无法撑开容器，即脱离文档流，我们可以使用BFC来解决这个问题
7、圣杯布局和双飞翼布局总结
1、使用float布局
2、两侧使用margin负值，以便和中间内容横向重叠
3、防止中间内容被两侧覆盖(为两边留白)，圣杯布局用padding，双飞翼布局用margin
8、手写clearfix
.clearfix:after {
  content: '';
  display:block;  /* 也可以设置成table */
  clear: both;
}
9、flex布局
flex-direction => 横向或者纵向
justify-content => 主轴对齐方式(水平对齐) (从开始/结束对齐、居中对齐、两边对齐)
align-items => 交叉轴对齐方式(垂直对齐) (开始/结束对齐、居中对齐)
flex-wrap => 是否换行
align-self => 子元素的对齐方式 (开始/结束对齐、居中对齐)
10、使用flex实现一个三点的色子
设置一个div盒子里面包裹三个div盒子，设置最外边的盒子的宽高和边框圆角，并设置flex属性，里面的三个div盒子即色子的三个点，设置这三个盒子的通用属性宽高圆角以及颜色，里面的盒子的第二项设置align-self: center;即垂直方向居中对齐，里面的盒子第三项设置align-self: flex-end;即垂直方向尾部对齐
11、居中对齐有哪些实现方式
水平居中
  inline元素：text-align: center
  block元素: margin: auto
  absolute元素: left:50% + margin-left负值
垂直居中
  inline元素: line-height的值等于height (让行高=高)
  absolute元素：
    top:50% + margin-top负值 （必须要知道子元素的宽和高）
      transformY(-50%)
    top,left,bottom,right=0 + margin:auto（不需要知道子元素的宽和高）
    12、line-height如何继承
写具体数值，如30px，则继承该值
    写比例，如2/1.5，继承该比例
      子元素font-size*比例
    写百分比，如200%，则继承计算出来的值(考点) => 也是个坑
      先算完自身的行高，再进行继承
      即子元素的行高为，父元素的font-size*百分比
13、vm/vh
vh => 网页视口高度的 1/100
vw => 网页视口宽度的 1/100
vmax => 判断网页视口宽和高，取两者最大值
竖屏，vh > vw => 取vh为单位
横屏，vh < vw => 取vw为单位
vmin => 取两者最小值
window.innerHeight === 100vh
window.innerWidth === 100vw
14、块状元素 & 内联元素
display:block/table => div h1 table ul ol p
display:inline/inline-block => span img input buton
15、盒模型宽度计算
offsetWidth = (内容宽度+内边距+边距)，无外边距
box-sizing: border-box => 如果希望盒子的宽度为offsetWidth
不加的话width只是内容宽度
加上的话width=offsetWidth
JS基础
1、 typeof能判断哪些类型
识别所有值类型 => undefind、number、string、symbol、boolean
识别函数
判断是否是引用类型(不可再细分 object)
2、何时使用===，何时使用==
除了 == null之外，其他一律用 ===
x == null  =>  x === null || x === undefind
3、引用类型
引用类型需要两段内存：1.引用存放在栈中 2.实际数据在堆中
堆和栈在内存中同时存在，栈内存是从上往下排列，堆内存是从下往上排列，一般情况下不会重合
值类型占用的空间是比较少，所以可以直接赋值，引用类型，以json为例，可能数据量非常庞大
4、浅拷贝和深拷贝
object.assign() => 对象中都是值类型是深拷贝，对象中有引用类型就是浅拷贝
JSON.parse(JSON.stringify(obj)) => 先将目标对象转为字符串，再转为对象，可实现对象的深拷贝,但不支持undefind、Date这些数据类型
使用递归可以写一个通用的深拷贝：
首先判断obj是否为值类型，是则直接返回typeof obj !== 'object' || obj == null
再使用obj instanceof Array进行判断是对象或者数组进行初始化
无论对象还是数组，都可以使用for in遍历for(let key in obj)
在循环中使用obj.hasOwnProperty(key)判断key是否为这个对象自身所拥有的属性
如果是自身的属性，则进行赋值result[key] = deepClone(obj[key])
递归是为了防止对象中有深层次的东西，因为你不知道要拷贝的对象中有多少层
5、如何使用js中class的继承
  当我们有很多个class,而且这些class有一些公共的属性的时候，可以将他们抽离出来
  使用extend继承
  使用super继承父类的构造函数
  扩展或者重写方法
6、类型判断instanceof
可以使用instanceof判断这个对象属于哪个类，即也可以说可以使用instanceof判断这个对象是否由哪个类构建出来的
[] instanceof Array  // true  判断[]是不是Array这个类构建出来的
[] instanceof Object  // true  // 实际上object也算是Array的父类
{} instanceof Object  // true
7、原型简述
我们在定义一个Student类的时候，会有一个显示原型指向一个对象，把方法都放到这个对象(原型)中来,即每个class都有显示原型prototype
在给对象实例化(new)之后，每个实例都有隐式原型__proto__
被实例化出来的对象的__proto__和类的原型(方法)指向同一个内存地址，即实例的__prototype__(隐式原型)指向对应class的prototype(显示原型)，即console.log(xialuo.__proto__ === Student.prototype)
原型的执行规则：
获取属性xialuo.name或执行方法xialuo.sayhi()
先在自身的属性和方法寻找
  如果找不到则自动去__proto__(隐式原型)中查找
 8、原型链简述
Student的隐式原型指向People的显示原型
  People本身有显示原型，有eat方法
  xialuo是被Student类new出来的，所以夏洛的隐式原型指向的是student的显示原型
  student类里面有一个prototype对象，里面有个sayHi方法
  student类可以理解为是people类new出来的(实际上不是，但可以这么理解)，所以student的隐式原型，指向people的显示原型
例子：
我们访问xialuo.name是直接获取xialuo这个实例本身的
我们访问xialuo.sayHi(),xialuo这个对象本身没有sayHi属性，我们在隐式原型中去找，即Student类的原型(即student的prototype对象)中去找
我们要访问xialuo.eat(), 我们一层层往上找，Student的原型中没有，于是在Student的隐式原型中去找，即People的原型(即people的prototype对象)中去找
这个就是原型链
9、根据原型的概念解释instanceof的工作原理是怎么样的
就按照 `xialuo instanceof Object`来说，instanceof前面的变量(xialuo),顺着隐式原型，一层层往上找，找到student、people、object的显示原型，如果这个隐式原型能对应到object的显示原型，那么`xialuo instanceof Object`成立
10、原型链的坑
this指向的问题，实际上 xialuo.sayHi() 有些类似 xialuo.__proto__.sayHi.call(xialuo)
11、简述作用域
作用域其实代表了某个变量合法的使用范围，有全局作用域、函数作用域和块级作用域(ES6新增)
12、简述自由变量
一个变量在当前作用域没有定义，但被使用了，就会向上级作用域，一层层依次查找，直到找到为止，这个变量就是自由变量，所有的自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方，简单来讲，跨了自己的作用域的变量都叫自由变量
13、简述闭包
闭包是指有权访问另一个函数作用域内变量的函数，闭包其实就是作用域应用的特殊情况，有两种表现，函数作为参数被传递，或者函数作为返回值被返回，简要来讲，就是在某个作用域拿到不是你的作用域的值，就要用闭包。
14、this的使用场景
当作普通函数被调用
指向window
使用call、apply、bind
传入什么，指向什么
作为对象方法调用
指向对象本身
class的方法中调用
指向当前实例本身
箭头函数
找上级作用域的值来确定
15、call、apply、bind的区别
第一个参数都是this要指向的对象
call和bind第二个参数开始是依次传参，但apply只有两个参数，call和apply都是对函数进行直接调用，而bind方法返回的仍是一个函数
16、手写bind函数
思路是我们可以使用call或者apply重写bind方法，但是第二个参数有区别，apply的第二个参数是数组，call的第二个参数是参数列表
任何一个方法都有bind方法即fn1().bind({})，考虑是不是和原型概念有关，又从fn1.hasOwnProperty('bind')可以判断出，bind方法不属于fn1，fn1是一个函数，我们可以理解为他是一个实例，所有实例都有隐式原型，即fn1.__proto__，又因为fn1的隐式原型全等于Function的显示原型，即可以理解为fn1是Function类new出来的实例，即 fn1.__proto__ === Function.prototype，即 Function.prototype里面有bind/call/apply等api方法
所以我们手写bind的时候可以以插件的形式扩展，Function的原型中已经有了一个bind方法，我们现在在Funtion原型上再加上一个bind方法来进行模拟，即Function.prototype.bind1，在bind方法中，除了第一个参数是this,后面的参数数量不确定。
我们可以使用arguments获取参数列表，但他不是数组，我们这里使用Array原型中的slice方法处理这个参数列表，但处理的时候需要改变他的this指向，指向参数列表，即可以写成const args = Array.prototype.slice.call(arguments)，最终返回一个数组
获取这个数组之后，我们将第一个参数去掉，因为第一个参数是this指向的对象，即
const t = args.shift()第二个参数开始才是参数列表
又因为bind是返回一个函数的，而且this指向的t和刨去第一项的参数列表数组args都有了，此时可以写成return function() { return self.apply(t, args) }，这个返回的函数就是fn1的执行，即我们手写的bind函数最终返回的内容
17、简单介绍单线程和异步
JS是单线程语言，只能同时做一件事，但是很多时候CPU是闲着的，因为IO设备（输入输出设备）很慢（比如Ajax操作从网络读取数据），不得不等着结果出来，再往下执行，于是就有一个概念 —— 任务队列，主线程完全可以不管IO设备，挂起处于等待中的任务，先运行排在后面的任务。等到IO设备返回了结果，再回过头，把挂起的任务继续执行下去
18、简述异步运行机制
所有同步任务都在主线程上执行，形成一个执行栈，主线程之外，还存在一个"任务队列"，只要异步任务有了运行结果，就在"任务队列"之中放置一个事件，一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。哪些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。主线程不断重复上面的第三步
JS和DOM渲染共用一个线程，因为JS可以修改DOM结构，JS执行过程中DOM渲染必须停止，DOM渲染时JS执行过程必须停止
19、简述事件轮询
开始执行第一行js代码的时候，js会把代码推入调用栈中，调用栈会去执行这个代码，代码执行完毕之后清空调用栈，再继续执行第二行代码，如果没有遇到异步方法的时候，就一直执行上面的几个步骤，如果遇到异步方法，就将这个异步方法挂到回调函数队列里面，当代码已经全部执行完了，即调用栈中没有东西可以执行了，这时候会启动事件轮询机制
事件循环机制会一遍一遍地进行循环，每次循环他会从回调函数队列中去找有没有函数，有函数的话就拿过来等待时机，再放到调用栈中执行，然后继续轮询查找，直到回调函数队列没有任务，这样异步就可以永远执行下去
20、微任务和宏任务
宏任务和微任务其实就相当于所有的异步（DOM事件除外）
DOM事件也是基于事件循环机制来执行的
宏任务：setTimeout、setInterval、Ajax、DOM事件
DOM渲染后触发
微任务：Promise、async/await
DOM渲染前触发
微任务执行时机比宏任务要早，微任务 => DOM渲染 => 宏任务
21、为什么微任务执行时机比宏任务早
微任务是ES6语法规定的，宏任务是由浏览器规定的，比如执行promise的时候，他会放到微任务队列里面等待时机，他不会经过web apis，因为promise是ES规范，不是w3c规范，而宏任务当调用栈空闲(每次轮询结束)的时候，会尝试DOM渲染，尝试DOM渲染之后继续触发事件循环
22、DOM事件和事件轮询
JS是单线程的，而且和DOM渲染共用一个线程，但js一遍一遍执行，浏览器界面不能一直不变，JS执行的时候，得留一些时机供DOM渲染，DOM事件是基于事件轮询实现的，但它不是异步。
启动事件循环机制之后，会在回调函数队列中先执行第一个微任务，在调用栈空闲的时候，先尝试DOM渲染，如果页面有变化，则进行渲染，再去触发事件循环机制，进行第二次轮询，当微任务都执行完之后，宏任务再继续执行，当调用栈空闲的时候，尝试DOM渲染，再进行下一次轮询。
每次调用栈清空(即每次轮询结束)，即同步任务执行完，都是DOM重新渲染的机会，DOM结构如有改变则重新渲染
事件轮询大概顺序是: 第一个微任务=>调用栈空闲=>尝试DOM渲染=>第二个微任务……=>微任务结束=>第一个宏任务=>调用栈空闲=>尝试DOM渲染……=>宏任务结束
23、简单介绍一下promise
promise有三种情况，pending表示过程中还没有结果，resolved表示结束有结果，rejected表示结束被拒绝，并且变化不可逆，成功或者失败都回不去了
pending状态，不会触发then和catch，resolved状态，会触发后续的then回调函数，rejected状态，会触发后续的catch回调函数
then和catch会改变状态，then正常返回resolved，里面有报错则返回rejected，catch正常返回resolved，里面有报错则返回rejected，不管是then还是catch，只要是正常返回，promise状态就都是resolved，只要报错，promise状态就都是rejected
24、简单介绍一下async/await
async/await和Promise，两者相辅相成，async/await算是一个语法糖，async函数他是封装promise的，返回的也是promise，执行async函数，返回的是Promise对象，await相当于promise的then，try...catch可捕获异常，代替了promise的catch
25、异步遍历的方法
for...in(以及forEach、for)是常规的同步遍历，for...of常用于异步的遍历
!(async ()=> {
// [1, 2, 3]
for(let i of nums) {
// 先执行第一个, 第一个有了结果之后执行第二个
let res = await muti(i); // muti表示异步方法
console.log(res)
}
})()
26、如何获取DOM节点
getElementById、getElementsByTagName、getElementsByClassName、querySelector、querySelectorAll
27、简单介绍一下节点属性
节点属性有attribute和property两种，property修改的是js变量的属性，会修改对象属性，不会体现到html结构中，不会对标签产生什么影响，attribute修改html属性，同样会修改对象属性，但会改变html结构，会对标签产生影响
property示例：
p.style.color = '#f0f'、p.className = 'p1'，
console.log(p.style, p.style.color)
attribute示例：
p.setAttribute('data-name', 'imooc')
console.log(p.getAttribute('data-name'))
尽量用property操作，attribute一旦改了html结构，肯定会渲染，比较消耗性能，property会避免一些不必要的渲染
28、DOM结构操作
创建新增节点
document.createElement('p') // 创建节点
div1.appendChild(p1)  // 添加节点
获取节点
div1.childNodes // 获取子元素所有节点
div1.childNodes[0].nodeName // 获取节点名称(DIV/SPAN/IMG...)
div1.childNodes[0].nodeType // 获取文本类型
元素节点 => 1、属性节点 => 2、文本节点 => 3
删除子元素
div1.removeChild(div1ChildNodesP[0])
29、如何判断是否为元素节点
// 通过原型链方法变成数组,并过滤(数组的过滤是filter)
    const div1ChildNodesP = Array.prototype.slice.call(div1.childNodes).filter(child=> {
        // 如果是普通p标签
        if(child.nodeType === 1) {
            return true
        }
        return false
    })
30、DOM性能优化
对DOM查询做缓存
先获取dom节点列表的length，再进行遍历，可以缓存length，只进行一次dom查询
将频繁操作改为一次性操作
const frag = document.createDocumentFragment(); // 创建文档片段
frag.appendChild(li)  // 先在文档片段中插入
list.appendChild(frag) // 都完成之后，再统一插入到 DOM 结构树中
使用文档片段(createDocumentFragment)操作dom,最后将整个文档片段插入(appendChild)到dom树中
31、简单介绍一下BOM元素navigator和screen
navigator可以显示浏览器的一些信息，ua = navigator.userAgent，ua.indexOf('Chrome')，可以判断浏览器类型
screen.width和screen.height可以判断浏览器的宽高
32、location和history
console.log(location.href);  // 获取完整地址
console.log(location.protocol);  // 获取协议 http还是https
console.log(location.pathname);  // 域名
console.log(location.search);  // 查询参数(?后面)
console.log(location.hash);  // 哈希值，即#后面的东西
history.back();  // 后退
history.forward();  // 前进
33、简单介绍一下事件对象
如果一个dom元素，需要添加点击事件，需要使用addEventListener这个api，即elem.addEventListener(type, fn)，他的第一个参数是事件类型，这里是'click',第二个参数是一个方法，这个方法里有一个默认的参数event，即事件对象
事件对象有几个常用方法：
1、e.preventDefault => 阻止默认行为(比如a标签)
2、e.stopPropagation => 阻止冒泡
3、e.target => 获取当前元素
4、e.target.nodeName => 获取当前元素名称
5、e.target.textContent => 获取当前元素文本内容
34、描述一下事件冒泡
如果box2在box1里面，当点击box2时，也同时点击了box1，这就是事件冒泡，即当子元素（事件源）事件触发，事件会沿着包含关系，依次往上级传递，每一级都可以感知到事件，直到触发根元素，如果需要就点击当前元素的话，需要使用e.stopPropagation进行阻止冒泡
35、描述一下事件代理
事件代理是在事件冒泡的机制上做的，当dom数量较多或结果比较复杂，不能给每个dom绑定事件的时候，我们把事件绑定到它的父元素上，在这个父元素上根据event.target获取触发的元素，然后判断是否为我们需要的元素，之后再去做其他的动作，这就是事件代理
36、通用的事件绑定函数的思路
通用的事件绑定函数需要既能支持普通的监听(当前元素)，又能支持代理的监听(父级元素)，在代理中不需要在自己的业务逻辑中判断触发的元素，并且需要this永远指向触发的元素
在函数中传入四个参数(elem, type, selector, fn)，其中selector表示需要被代理的元素，在函数中，首先判断selector参数是否存在，不存在就是普通的事件监听，存在就是代理监听，不存在首先要将selector 置为null
使用addEventListener给元素添加事件，在这个api中有一个参数是方法，在这个方法中判断selector是否存在，存在的话使用target.matches(selector)判断这个元素是否是我们需要代理的元素，如果是的话，使用fn.call(target, event)将fn的this指向改成触发的元素，如果不是，则直接改变this指向，指向改成触发的元素
37、简单讲一下XMLHttpRequest
浏览器实现ajax最核心的api，它实际上是一个类，当实例化之后，xhr = new XMLHttpRequest,这个xhr有一些方法，常用的有open，open方法相当就是一个准备数据的方法，open方法最后一个true表示异步，当数据准备完成之后，我们使用onreadystatechange这个方法里面去接收数据，并对数据做一些处理
在里面可以判断这个请求是否成功，用xhr.readyState === 4，以及xhr.status === 200，最终使用xhr.responseText去接收这个数据，这个数据的结构是json字符串
最后使用xhr.send()去传递发送给后台的数据，因为onreadystatechange这个钩子如果不去send，他是不会变的，所以不管是否有发送数据给后台，都需要使用这个方法，如果没有数据，里面写null，如果有数据，则可以使用一个对象进行传递
38、简单说一下状态码
xhr.readyState => xhr的状态
0 => (未初始化) 还没有调用send方法
1 => (载入) 已调用send()方法，正在发送请求
2 => (载入完成) send()方法执行完成，已经接收到全部响应内容
3 => (交互) 正在解析响应内容
4 => (完成) 响应内容解析完成，可以在客户端调用
xhr.status => http协议的状态码
2xx => 表示成功处理请求，如200
3xx => 需要重定向，浏览器直接跳转，如301、302、304
重定向不需要我们自己处理，服务器返回浏览器自己会去跳页面
301表示永久重定向
302表示临时重定向
304表示资源未改变
资源没有改变，浏览器就会用自己缓存的资源
4xx => 客户端请求错误，如404、403
404表示请求的地址有错误
403表示客户端没有权限
5xx => 服务端错误
500 => 服务器错误 - 最常见
504 => 网关超时
39、什么是同源策略
协议、域名、端口，三者必须一致
40、简单说一下跨域
网络请求时，浏览器要求当前网页和服务必须同源，如果不同源，数据就会无法正常请求，这个就是跨域。同源策略主要限制是浏览器，服务端没有像浏览器这样的同源策略限制，所以一般需要后台设置允许跨域，所有的跨域，都必须经过服务端允许和配合，如果未经服务端允许就实现跨域，说明浏览器有漏洞
41、在客户端如何解决跨域
我们知道，一些标签实际上是允许跨域的，例如带src属性的img,video,link,script等。其中jsonp就是通过script标签进行跨域的。
这个script的地址，服务器可以任意动态拼接数据返回，所以script就可以获得跨域的数据，只要服务端愿意返回，即server端可以动态拼接一些信息返回，这样就实现了jsonp的跨域
在客户端，我们也可以使用node服务去进行跨域，主要的使用场景是，例如vue脚手架中，可以设置devserver中的proxy进行代理，实际上就是node服务和代理的服务之间的通信，服务端和服务端之间不存在跨域，在单页应用打包的时候，如果这个项目使用proxy代理，那么部署的时候需要使用nginx的反向代理来实现跨域
42、服务端如何解决跨域
目前主要使用CROS，主要是在请求头上添加
// 允许的域名
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:8011");
  // 允许的请求头
  response.setHeader("Access-Control-Allow-Headers", "X-Requested-Width");
  // 允许的请求方法
  response.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  // 接收跨域的cookie
  response.setHeader("Access-Control-Allow-Credentials", "true");
43、描述cookie、localStorage、sessionStorage区别
cookie本身用于浏览器和server通讯，因为html5之前还没有localStorage和sessionStorage，最初的的时候是被"借用"到本地存储来的。我们可以使用document.cookie来设置和获取cookie，所有的cookie在浏览器中的体现是一个键值对，里面的值时一段字符串，以分号分隔，后端也可以修改cookie，浏览器中在network中可以看到请求头里面也有cookie，并且每次请求都会把cookie带上。cookie的缺点是存储大小，最大4kb，如果每次请求都把cookie带上，存储的值很多，网速又慢，会很麻烦，http请求时需要发送到服务端，即cookie做本地存储的话，存的东西在每次请求的时候都会被带到服务器上去，增加请求数据量。它获取和设置的方法太过简陋，不太容易修改
localStorage和sessionStorage，HTML5专门为存储设计的，最大每个域可存5M，localStorage数据会永久存储，除非代码或手动删除，sessionStorage数据只存在于当前会话，当前会话关闭则清空
44、http有哪些方法
get => 获取数据
  post => 新建数据
patch/put => 更新数据
delete => 删除数据
45、什么是Restful API
Restful API是一种新的API设计方法，传统的API设计是把每个url当作一个功能，Restful API设计是把每个url当作一个唯一的标识，用方法去区别功能。传统的API设计相当于一个函数，?相当于函数的参数，现在的API设计没有?,即一个完整的地址加上一个唯一标识(id)，这就是restful api设计的目的
46、简单介绍一下http的header
http请求中主要有请求头(Request Headers)和响应头(Response Headers)，请求的时候，客户端往服务端发送的Headers是请求头，服务端向客户端返回的Headers是响应头。我们访问一个url地址实际上就是发送请求，使用某个方法(get、post)去发送一个url，我们发送的请求还包括请求头，服务端接收到请求会进行返回，服务端不止返回结果，还会返回响应头
47、常见的请求头有哪些
请求头主要是客户端向服务端发送的请求，主要有：
Accept => 浏览器可接收的数据格式(text/html、application/json等)
Accept-Encoding => 浏览器可接收的压缩算法，如gzip
我们可以根据gzip算法把资源进行压缩(100kb大概可以压缩至30kb左右)
浏览器告诉服务器，我能接收什么样的压缩算法，服务器就会根据Accept-Encoding的压缩算法进行压缩为了保证资源更小，传输地更快一些，前端也可以正常地解压出来
Accept-Language => 浏览器可接收的语言，如zh-CN
Connection => keep-alive一次TCP连接重复使用
每次请求重新建立TCP连接会很消耗资源,我们和服务端建立了连接之后，就可以重复地使用这个连接，没必要断开之后重连,可以重复地使用一次连接，把资源一次性请求完成，现在的浏览器版本基本上都是支持keep-alive的
cookie => 同域，每次请求资源的时候都会把cookie带上，浏览器自己带的
Host => 请求的域名是什么
User-Agent(简称UA) => 浏览器信息 => 重点
能标识你的浏览器信息(类型等)
服务端能够接收ua信息，可以判断用户使用的浏览器类型
Content-type 
发送数据的格式，如 application/json
客户端向服务端请求，要发送一些数据的时候(post)，告诉服务端，我们这个数据是什么格式的，一般get请求是没有的，get请求主要是向服务端获取数据
48、常见的响应头有哪些
Content-type => 返回的数据格式
  如 application/json
Content-length => 返回数据的大小，多少字节
Content-Encoding => 返回数据的压缩算法，如gzip
客户端告诉服务端支持的压缩算法之后，服务端根据压缩算法进行压缩，服务端压缩之后会通过Content-Encoding告诉客户端我是用什么算法压缩的，浏览器会自动根据这个压缩算法解压
Set-Cookie
服务端改cookie的时候，通过Set-Cookie修改
49、header可以自定义吗，怎么做
之前说的请求头和响应头是浏览器自带的，或者服务端和浏览器配合加的，但请求头和响应头实际上可以自定义header，自定义请求头的时候，需要前后端进行约定，一般用在简单的权限校验，但不要和浏览器自带的键值冲突
50、缓存相关的headers有哪些
Cache-Control(响应头) Expires(响应头) 
Last-Modified(响应头) IF-Modified-Since(请求头)
Etag(响应头) If-None-Match(请求头)
51、简单介绍一下http的缓存
浏览器访问一个新的网站，服务端会返回所有的资源，并且浏览器或者服务器会将一些不必要重新获取的资源存到缓存区，第二次访问的时候，就不需要全部重新获取一遍资源，有一部分资源会从缓存中获取，即我们可以把一些没有必要重新获取的资源不再重新获取，这就是缓存，http缓存有两种，一种是强制缓存，一种是协商缓存，强制缓存是在有效期内，客户端都不需要经过网络，但协商缓存是每次都要经过网络，但如果命中缓存，即数据没有变化，会返回304，让客户端从缓存获取数据
52、http缓存策略是怎么样的
http的缓存策略主要有两种，强制缓存和协商缓存
强制缓存：

当浏览器初次请求到服务器之后，如果服务端感觉这个资源可以被缓存，服务端会返回结果集和一个响应头Cache-Control，如果服务端感觉这个资源不适合被缓存，就不会加上这个响应头，一般些静态资源(js、css、img)都会被加上这个响应头，如果浏览器识别到这个响应头，则会将资源缓存下来
当浏览器再次请求的时候，他会在客户端判断Cache-Control这个响应头时间是否过 期，如果时间没有过期，浏览器就会在本地缓存中获取资源，直接返回，不会经过经过网 络，如果响应头时间过期了，则继续执行初次请求的步骤
服务端控制哪些资源可以加Cache-Control，客户端控制不了，强制缓存本质还是服 务端控制的,但在表现上，只要本地的Cache-Control不过期，客户端会先从本地缓存里面 找，找到了就判断是否过期
强制缓存也可以用Expires来体现，但是因为Expires使用的是绝对时间，如果客户端 和服务端的时间不一致，可能会出问题，所以现在一般都使用Cache-Control
协商缓存，也叫对比缓存：


类似一个商量或者沟通的意思，由服务端来判断这个资源是否可以被缓存，我们这个资源到了服务端之后，服务端可以告诉浏览器这个资源没有动，可以直接用本地的缓存就可以了，一般用在客户端资源和服务端资源是一样的，没有被修改的时候，如果判断一致就返回304，否则返回200和最新的资源
浏览器初次请求服务器，服务器返回资源和资源标识，浏览器再次请求，会带着资源标识，服务端根据资源标识判断当前资源是否是服务端最新的资源
53、Cache-Control这个响应头主要和强制缓存有关，能简单介绍一下这个响应头吗
max-age => 缓存最大过期时间(秒)
max-age=31536000 (单位是秒 - 1年)
我们需要将某个资源文件在客户端缓存一年的时间,期间都不需要通过网络
no-cache => 可以在客户端存储资源，但每次都必须去服务端做新鲜度校验
使用no-cache的目的就是为了防止从缓存中获取过期的资源
设置了该字段需要先和服务端确认返回的资源是否发生了变化，如果资源未发生变化，则直接使用缓存好的资源，即走协商缓存
no-store（不常用） => 不用强制缓存，也不让服务端做缓存，让服务端直接返回资源
private => 只能允许最终用户做缓存(设备)
设置了该字段值的资源只能被用户浏览器缓存，不允许任何代理服务器缓存。在实际开发当中，对于一些含有用户信息的HTML，通常都要设置这个字段值，避免代理服务器(CDN)缓存
public（不常用） => 中间的代理也可以做缓存
设置了该字段值的资源表示可以被任何对象缓存
延伸：关于Expires
经常会和Cache-Control并列在一起，同样在响应头中，同为控制缓存过期，但已经被Cache-Control代替，现在的浏览器兼容这两种写法，如果同时存在，以Cache-Control为主
Expires标识缓存到期时间，是一个绝对时间，如果客户端从他的缓存的这个字段里面找到这个时间，发现这个时间过期了，那就会发起网络请求去获取数据。
但是他的缺点也很明显，由于这个时间是绝对时间，那我客户端修改了本地时间，这个缓存不就失效了嘛。
为了解决Expires的问题，才引入了Cache-Control。Cache-Control代表了缓存的有效期，是一个相对时间，不管你客户端本地时间是什么，我只会返回给你一个有效期，相当于倒计时，只要这个倒计时到零了，你就给去获取缓存了。
54、简单介绍一下协商缓存的资源标识
在响应头中，协商缓存的资源标识主要有两种，Last-Modified和Etag
Last-Modified => 值时资源的最后修改时间
浏览器第一次请求的时候，服务端返回资源和Last-modified，值是最后修改时间，浏览器再次请求的时候，请求头会带着If-Modified-Since，If-Modified-Since是Last-Modified的key，值也是最后修改时间，即前端请求的和后端返回的资源标识名字不一样，但值是一样的，url就可以代表这个资源，判断这个资源的最后修改时间是不是和带来的这个If-Modified-Since值是一样的，服务端会判断If-Modified-Since和Last-modified是否相等，这两个值相等，就返回304，服务端修改的话，会改变Last-Modified的值，服务端每返回一个Last-Modified，If-Modified-Since的值就会修改，服务端根据带来的时间和资源的最后修改时间做一个协商，做一个对比，看看能不能返回304，新的Last-Modified力求下次能命中缓存
Etag => 资源的唯一标识(值时一个唯一的字符串，类似人类的指纹)
服务端返回资源和Etag(就是一个字符串)，但是要保证唯一性
浏览器发现有Etag之后，就会把资源缓存下来，把Etag也记下来
浏览器再次请求，请求头带着If-None-Match
再次请求的时候请求头会带上If-None-Match，他的值实际上就是Etag
服务端发现有If-None-Match之后，服务端就会根据当前资源重新计算一个Etag，再和If-None-Match的值进行对比
比如一些静态资源，比如webpack打包的时候，我们会加一个hash，hash是通过资源内容来算的，打包之后的静态资源文件，加上hash后缀之后，资源是不会被修改的，如果内容改了之后，会生成一个新的hash的名称
如果这个资源没有变过，算出来的Etag应该和If-None-Match的值是一样的，就会返回304
如果对比值不一样，就会返回一个新的Etag和新的资源
Last-Modified和Etag的注意事项
会优先使用Etag，因为Last-Modified只能精确到秒级，秒对计算机而言，是一个比较大的单位，以程序而言，一般是以毫秒为单位
如果资源被重复生成，而内容不变，则Etag更精确，如果资源1s生成一次，内容不变，Last-Modified每次都会过期，重新返回新资源
Etag他是根据内容计算的(类似webpack的hash)，内容不变，就算1s重新生成一次，他的Etag值也不会变化
55、强制缓存和协商缓存可以联合起来一起使用吗，他的流程是怎么样的
先进行强制缓存，如果缓存过期或者Cache-Control这个响应头的值为no-cache，则开始协商缓存,强制缓存判断在客户端,协商缓存判断在服务端
56、列举出浏览器缓存的所有情况
一共有四种情况：
- 第一种情况
    1. 发送http请求
    2. 如果有缓存
    3. 判断缓存是否过期
        - Cache-Control里面有个max-age，即最大缓存时间
    4. 如果没有过期
    5. 读取缓存 => 强缓存
    6. 页面呈现
  - 第二种情况
    1. 发送http请求
    2. 如果有缓存
    3. 如果缓存过期
    4. 判断有没有Etag或Last-Modified
        - 可以同时存在，同时存在以Etag为准
    5. 如果没有，就直接向服务器发起http请求
    6. 服务器返回请求资源
    7. 页面呈现
  - 第三种情况
    1. 发送http请求
    2. 如果有缓存
    3. 如果缓存过期
    4. 判断有没有Etag或Last-Modified
    5. 如果有则向服务器发起http请求，并且带上If-None-Match或If-Modified-Since字段
        - 可以同时存在，If-None-Match为准
    6. 服务器判断缓存是否可用
    7. 如果不可用，直接请求服务器资源，返回200
    8. 页面呈现
  - 第四种情况
    1. 发送http请求
    2. 如果有缓存
    3. 如果缓存过期
    4. 判断有没有Etag或Last-Modified
    5. 如果有则向服务器发起http请求，并且带上If-None-Match或If-Modified-Since字段
    6. 服务器判断缓存是否可用
    7. 如果缓存可用，返回状态码304
    8. 读取缓存(协商缓存)
    9. 页面呈现
57、三次握手 四次挥手是什么
为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。主要防止资源的浪费，所以需要三次握手
为了保证在最后断开的时候，客户端能够发送最后一个ACK报文段能够被服务器接收到，所以需要四次挥手
三次握手：请求时建立tcp链接，
1、客户端向服务端请求连接（发送SYN数据包并等待服务器确认）
2、服务端向客户端确认信息同时自己也发送一个SYN包（SYN/ACK数据包）
3、客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK（发送ACK包）
四次挥手：响应时断开tcp链接
1、TCP客户端发送一个FIN，用来关闭客户到服务器的数据传送。
2、服务器收到这个FIN，它返回一个ACK。
3、服务器关闭客户端的连接，发送一个FIN给客户端。
4、客户端返回ACK报文确认。
58、常用git命令
git add . => 把修改的所有文件都加上，.表示所有
git checkout xxx
checkout会把文件都还原成以前的状态
撤销所有修改 => git checkout .
git commit -m 'xxx' => 提交
git push origin master => 推送到服务端
git pull origin master => 从服务端获取
git branch => 查看分支，多人开发的时候，每个人有自己的分支，相互之间不干涉
git checkout -b xxx/git checkout xxx => 切换分支
git merge xxx => 合并分支
git config xxx => 配置用户信息(git config user.name xxx)
git diff => 查看修改的内容
git status => 查看文件状态
git log => 查看日志
59、模拟一个开发人员使用git
开新分支 => git checkout -b test3
查看分支 => git branch
修改文件，查看状态 => git status
    提交
    git add .
    git commit -m 'test3'
提交test3到服务端仓库 => git push origin test3
    将test2和test3合并到主分支master上来
切换到master分支 => git checkout master
先把服务端所有分支全部拉下来 => git fetch
查看所有分支(本地) => git branch
将test3分支的代码合并到当前分支 => git merge test3
解决冲突
解决完冲突需要进行add
git add .
    git commit -m 'test3 branch'
再次merge显示already up to date
主分支提交代码到服务端 => git push origin master
60、简单介绍一下webpack
是一个模块化打包工具,将不同的资源和文件,进行打包,合并在一个文件里，压缩代码，整合代码，可以让网页加载更快，如果webpack做的好的话，也会让我们的代码更多地命中缓存，让页面加载更快
webpack配置首先需要使用npm -y生成package.json文件，然后安装webpack以及webpack-cli这两个工具，再创建一个webpack.config,js进行webpack配置，最后可以通过webpack-dev-server命令进行运行，或者使用webpack命令进行打包，这两个配置可以写在package.json中，进行快捷启动
webpack配置主要在webpack.config.js中，主要有四大核心，主要是，入口(entry)、出口(output)、插件(plugins)和loader
loader是文件加载器，能够加载资源文件，并对文件进行一些处理，如编译，压缩等，最终一起打包到指定的文件中，plugin赋予了webpack各种灵活的功能，如打包优化等，目的是为了解决loader无法实现的功能，loader运行在项目打包之前，plugins运行在整个项目的编译时期，在Webpack运行的整个生命周期中会广播出许多事件，Plugin会监听这些事件，在合适的事件通过 webpack 提供的 api 改变输出结果，对于 loader 而言，它实质上是一个转换器，将A文件编译成B文件，操作的是 文件 ，比如将A文件编译成B文件，单纯的是一个文件转换过程
61、从浏览器输入到页面展示做了什么
从浏览器输入到页面展示，计算机主要做了两个事情，一个是加载资源，一个是渲染页面
加载资源的过程
当用户在浏览器中输入url之后，应用层DNS解析域名，域名解析服务会根据地域去解析不同的域名，网站会访问的更快一些，之后应用层客户端发送HTTP请求，传输层TCP传输报文，这里涉及到三次握手，网络层IP协议查询MAC地址，数据到达数据链路层，服务器接收数据，服务器响应请求，服务器返回相应文件，这里涉及到四次挥手，最后页面渲染
渲染页面过程
浏览器根据html代码生成文档对象模型树(DOM Tree)，浏览器根据css代码生成css对象模型(cssOM)，再将文档对象模型树和css对象模型整合形成渲染树(Render Tree),浏览器根据渲染树渲染页面，如果遇到<script>则暂停渲染，优先加载并执行JS代码，完成再继续，js和渲染是共用一个线程的，因为js有可能会改变渲染树结构，当JS代码执行完之后，再继续进行渲染，直到渲染树渲染完成
62、window.onload和DOMContentLoaded的区别是什么
window.onload是页面的全部资源加载完才会执行，包括图片、视频等
DOMContentLoaded是DOM 渲染完即可执行(网页加载完了)，此时图片、视频还可能没有加载完
63、怎么做性能和体验的优化
性能和体验的优化主要从两个方面入手，一个是让加载更快，一个是让渲染更快
让加载更快：
减少资源体积，压缩代码
减少访问次数
合并代码、ssr服务端渲染、缓存
比如使用webpack打包，使用雪碧图等都属于合并代码，可以减少访问次数
服务端渲染指服务端把页面以及页面要显示的内容一块给前端，前端拿到内容之后就直接展示，否则就是通过请求资源再去逐步渲染页面
如果多命中缓存，就可以少做一些请求
使用更快的网络：CDN
CDN是根据区域去做服务器的处理，即如果使用cdn，从北京访问的ip和从上海访问的ip是不一样的
让渲染更快：
CSS放在head，JS放在body最下面
如果渲染完成dom之后，又发现css，css加载完成之后，形成css对象模型，又和当前的dom树合并形成渲染树，会减缓渲染效率
尽早执行JS,没必要等图片、视频等资源加载完成,用DOMContentLoaded触发
懒加载
图片懒加载，比如上滑加载更多
对DOM查询进行缓存
使用文档片段createDocumentFragment，将dom处理完毕之后，再一次性渲染
节流(throttle)、防抖(debounce)
  可以让渲染更加流畅
63、简单讲一下防抖和节流的概念
防抖和节流是对dom事件的优化的两种方式，如果频繁的触发事件，可能会造成浏览器的卡顿，对于不同的使用场景，衍生出这两种优化方式
防抖主要是在用户频繁触发事件之后，最后触发，经典的使用场景是：监听一个输入框，在文字变化后触发change事件
节流主要是频繁触发事件的时候，保持一个频率，连续触发，经典的使用场景是：拖拽一个元素时，要随时拿到该元素被拖拽的位置，无论拖拽速度多快，都会每隔100ms触发一次
64、简单讲讲浏览器安全
最常见的web前端攻击方式有XSS跨站请求攻击和XSRF跨站请求伪造
XSS跨站请求攻击例子：
一个博客网站，发表一篇博客，其中嵌入`<script>`脚本，脚本内容写获取cookie，发送到我的服务器，再发布这篇博客，如果有人查看它，很轻松地就可以收割访问者的cookie
在页面上尽量不要使用类似>、<这些特殊字符，可以写成&lt;script&gt;
XSRF跨站请求伪造
在img标签上添加参数，诱导用户点击，而img发送的请求是支持跨域的，所以一打开网页，你的用户信息就已经被带过去了
在敏感的操作上使用post接口，img攻击是无效的
65、split()和join()的区别
split() => 将字符串以-分割，形成数组
join() => 将数组以-拼接，形成字符串
66、数组的pop、push、unshift、shift分别做什么
pop => 刨除数组最后一项,返回数组最后一项,会改变原数组
shift => 刨除数组第一项,返回数组第一项,会改变原数组
push => 往后追加,返回 length,会改变原数组
unshift => 往前追加,返回 length,会改变原数组
67、数组api那些是纯函数  - 数组操作分纯函数和非纯函数
纯函数的要求
不改变源数组（没有副作用）
有返回值，且函数的返回结果只依赖于它的参数
相同的输入永远得到相同的输出，而且没有任何可观察的副作用
数组的api有哪些是纯函数
concat，map，filter，slice
concat => 将多个数组拼接成一个新数组,并返回新数组
slice => (起始下标,结束下标) 以数组的形式返回起始下标到结束下标之间的元素,包 前不包后
数组的api有哪些是非纯函数
push， pop， shift， unshift， splice
splice 不是纯函数 (起始下标,个数,[元素1,元素2,...]) 在数组的任意位置添加或删除任意个元素
  forEach、some、every、reduce 也不是纯函数
68、Math对象及常用方法:
abs(值) 绝对值
max (值1,值2,...) 最大值
min (值1,值2,...) 最小值
ceil (值) 向上取整
floor (值) 向下取整
round (值) 四舍五入
random() 随机数，生成0到1之间的随机小数，含0不含1。
69、 字符串对象及常用方法
split (分割符) 将字符串分割为字符串数组
charAt(下标) 返回指定下标对应的字符,如果找不到返回空字符串
indexOf(子字符串)查找子字符串在字符串中首次出现的位置,如果找不到返回-1
lastIndexOf(子字符串) 查找子字符串在字符串中最后一次出现的位置,如果找不到返回-1
substring(起始下标,结束下标) 按起始下标和结束下标截取字符串，包前不包后
substr(起始下标,[个数]) 按起始下标和个数截取字符串, 如果只给了起始下标，没有给截取的个数，默认截取到字符串末尾
replace (正则表达式|旧字符串,新字符串) 替换字符串
concat(值1,值2,...) 拼接字符串,相当于+号
toLowerCase() 将字符串转为小写
toUpperCase() 将字符串转为大写
70、日期对象及常用方法
toString() 将日期转为字符串
toLocaleString() 将日期转为本地格式字符串
getFullYear() 获取指定日期的年份
getMonth() 获取指定日期的月份，返回0-11,0代表1月份，11代表12月份
getDate() 获取指定日期的天数,返回1-31
getDay() 获取指定日期的星期数,返回0-6,0代表星期日,6代表星期六
getHours() 获取指定日期的小时数，返回0-23
getMinutes() 获取指定日期的分钟数,返回0-59
getSeconds() 获取指定日期的秒数,返回0-59
getMilliseconds() 获取指定日期的毫秒数,返回0-999
setFullYear (年份) 设置年份
setMonth(月份) 设置月份
setDate(天数) 设置天数
setHours(小时数) 设置小时数
setMinutes(分钟数) 设置分钟数
setSeconds(秒数) 设置秒数
setMilliseconds(毫秒数) 设置毫秒数
getTime() 获取从1970年1月1号到指定日期经过的毫秒数
71、什么是正则表达式？有什么用？常用的字符有哪些？
我理解的正则表达式就是一种记录文本规则的表达式，可以用于校验或匹配文本内容。在之前的工作里我用正则表达式最多的就是验证表单数据合法性和进行字符串查找和替换。
(1) 方括号
方括号用于匹配某个范围内的字符
[abc]匹配方括号之间的任何一个字符。
[^abc]匹配任何不在方括号之间的任意一个字符。
[0-9] 匹配任何一个从0至9的数字。
[a-z] 匹配任何一个从小写a到小写z的字符。
[A-Z] 匹配任何一个从大写A到大写Z的字符。
[A-z] 匹配任何一个从大写A到小写z以及下划线的字符。
(2) 元字符
\d 匹配一个数字字符,等价于[0-9]
\w 匹配一个字母、数字、下划线,等价于[a-zA-Z0-9_]
\s 匹配一个空白字符(空格、制表符(\t)、换行符(\n))
. 匹配除\n外的任意一个字符
\W 匹配一个非字母,数字,下划线
\S 匹配一个非空白字符
\D 匹配一个非数字的字符
(3) 边界符
^ 匹配字符串的开始
$ 匹配字符串的结束
(4) 量词
{n} 重复n次
{n,} 重复n次或多次
{n,m} 重复n到m次
? 重复零次或一次,等价于{0,1}
* 重复零次或多次,等价于{0,}
+ 重复一次或多次,等价于{1,}
(5) 操作符
| “或”操作
^ 表达式值取反
() 标记一个子表达式的开始和结束位置
(6) 修饰符
i 忽略大小写
g 全局匹配
m 多行匹配
72、数组slice和splice的区别
功能区别
slice => 切片
splice => 剪接
参数和返回值
slice
slice的参数为数组下标(从开始下标到结束下标)
返回值为数组，不改变原数组
不传参，类似深拷贝
只传一个参数，从某个索引截到最后
参数为负数，从末尾开始截，截最后两个
splice
第一个参数表示开始的下标，第二个参数表示长度，后面的参数是替换的内容
返回值是数组，会改变原数组
只传两个参数，相当于删除
是否是纯函数
slice是纯函数
splice不是纯函数
73、`[10, 20, 30].map(parseInt)`返回结果是什么
`[10, NaN, NaN]`
map的参数是一个函数，返回值是一个数组，map参数中函数的参数，一个是item,一个是index，parseInt的参数第一个是具体的数和第二个是进制位，返回值是一个整型
let res = [10, 20, 30].map((num, index)=> {
    // 第一个参数是数字，第二个参数是进制
    // 进制0和10是一样的
    // parseInt(10, 0)  // 10
    // parseInt(20, 1)  // NaN
    // parseInt(30, 2)  // NaN
    return parseInt(num, index)
  })
74、查找、添加、删除、移动DOM节点的方法
查找：
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()
xxx.parentNode => 查找父元素
xxx.childNodes => 查找子元素（会查到标签和文本元素）
添加：
document.createElement()
xxx.appendChild()
删除：
xxx.removeChild(xxxChild) => 删除子节点
xxx.remove() => 删除整个dom
移动DOM节点
const div4 = document.getElementById('div4')
      const div4p = div4.getElementsByTagName('p')[0]  // 获取需要被移动到的位置附近的dom
      const div5 = document.getElementById('div5') // 获取需要被移动的div
      div5.appendChild(div4p)
插入和移动看似是两个方法，但实际上api是一样的，首先获取需要被移动的dom元素，再获取需要被移动的具体位置附近的dom元素，然后把需要被移动的dom元素appendChild到获取需要被移动到的位置附近的dom，这样就实现了移动dom节点
74、document load和ready的区别
load是网页全部加载完才执行
图片、视频、iframe等
ready是dom渲染即可执行，此时图片、视频等静态资源还没加载完
DOMContentLoaded事件
为了让js加载更快，一般是在ready里面去做js操作
75、函数声明和函数表达式的区别
函数声明是直接用function来定义函数的
函数表达式是通过先定义一个变量，再把它赋值给一个函数来定义函数的
函数声明会在代码执行前预加载，而函数表达式不会
这个预加载和变量提升是一样的
函数表达式没有变量提升
76、new Object()和Object.create()的区别
{}等同于new Object({})，原型都是Object.prototype
Object.create(null)没有原型
他必须传参，可以传对象，也可以传null
null其实是一个空对象
Object.create({...})没有原型的原因是他可以指定原型
传入一个null，就是告诉他不要有原型
传入一个对象，就是告诉他去指定原型
Object.create()传参之后，对象中没有值，只是将参数的对象全部将放在空对象的原型中，这是和{}最大的区别
Object.create()是创建一个空对象，然后把空对象的原型指向了传入的对象
举例说明：
const obj3 = new Object(obj1)
如果要new Object传入一个对象的话，返回的就是这个对象的本身，，即obj3 === obj1
const obj7 = Object.create(obj1)
表示obj7的原型指向obj1，即obj7.__proto__ === obj1
因为obj3是由obj1 new出来的，obj7是由obj1 create出来的，所以 obj7的隐式原型和obj3全相等，即 obj7.__proto__ === obj3
77、判断字符串以字母开头，后面字母数字下划线，长度6-30
const reg = /^[a-zA-Z]\w{5,29}$/
78、正则的规则
`^xx`表示以xx开头，`xx$`表示以xx结尾
`[]`用来定义匹配的字符范围
比如`[a-zA-Z0-9]`表示相应位置的字符要匹配英文字符和数字
[^xx]`表示除了xx之外的字符
`{}`一般是用来匹配的长度
正则中不能加空格
`\s{1,3}`表示匹配1到3个空格
`{n}`表示匹配n次，准确的数字
`o{2}`,表示一个字符串匹配两个o，如food
`{n,}`表示至少匹配n次
`o{2,}`,表示一个字符串至少匹配两个o，如foooood
`()`用来提取匹配字符串
`(0-9)`匹配数字
`(0-9)*`匹配数字，可以为空(*表示0~无限)
`(0-9)+`匹配数字，不能为空(+表示1~无限)
`\w`匹配字母数字下划线
`[A-Za-z0-9_]`
大写取反
`\d`匹配数字
`.`匹配除换行符以外的任意字符
`?`匹配前面的子表达式0-1次
等价于`{0, 1}`
如果要字符串全部满足，就加`/^xxx$/`
如果只是一部分，就不需要加
如果要字符串只满足开头，就加`/^xxx/`
如果要字符串只满足结尾，就加`/xxx$/`
`+` => 表达式至少出现1次，相当于 {1,}
`*` => 表达式不出现或出现任意次，相当于 {0,}
日期格式 => /^\d{4}-\d{1,2}-\d{1,2}$/
79、手写字符串trim方法，保证浏览器兼容性
trim表示将字串首尾两端的空格移除,低版本浏览器可能不兼容
首先判断String显示原型下的trim方法是否存在，如果不存在，即在原型下面挂载这个方法，使用正则去匹配字符串开头和结尾的空格，再使用字符串api--replace，将匹配到的空格替换成空字符串，再返回这个替换后的字符串
if(!String.prototype.trim) {
    String.prototype.trim = function() {
      // /^\s+/表示开头一个或多个空格
      // /\s+$/表示结尾一个或多个空格
      // 匹配开头和结尾一个或多个空格，替换成空字符
      // 原型中的this，如果是通过String.trim()执行，这个this指向字符串，即这个类的实例
      return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }
  }
80、原型实例化之后，显示原型和隐式原型的关系是怎么样的，原型链是怎么形成的
Student继承People类，xialuo为Student的实例
const xialuo = new Student('夏洛', 100)
student实例的隐式原型与student的显示原型等价,
即 xialuo.__proto__  === Student.prototype  
student显示原型的隐式原型与people的显示原型等, 从上可得，同时也是 student实例的 隐式原型等于student的显示原型，同时student实例的隐式原型的隐式原型与people的显示原型等价
即Student.prototype.__proto__ === People.prototype
即xialuo.__proto__.__proto__ === People.prototype
People和Object同理，就形成了原型链
81、介绍一下RAF
我们不管用js还是css执行动画，想要动画流畅，更新频率要在60帧/s，即一秒钟动画要动60次，即16.67ms更新一次视图，如果用js去控制动画的话，要用setTimeout，setTimeout要手动控制频率，而RAF，浏览器会自动控制，比如窗口最小化，RAF会暂停，setTimeout不是做动画用的，他主要是用来做异步定时器的，而RAF主要用来做动画
RAF，全称requestAnimationFrame，他是浏览器自带的api，主要用来做动画，浏览器会自动控制，比如在一些不应该耗费性能的地方会自动暂停动画的渲染，主要就是RAF的功劳
let animate2 = ()=> {
      curWidth = curWidth + 3
      $div2.style.cssText=`width:${curWidth}px`
      if(curWidth < maxWidth) {
        // 时间不用自己控制
        window.requestAnimationFrame(animate2)
      }
    }
JS基础其他
1、用什么方法来判断一个对象的数据类型,怎么样去判断数组
typeof判断对象类型,用instanceOf判断是不是数组
2、请简要说说你对Javascript面向对象的理解
JavaScript 语言是通过一种叫做 原型（prototype）的方式来实现面向对象编程的
3、prototype(原型)是什么,它是怎么使用的
每个函数都有一个prototype属性, 它是一个引用变量, 默认指向一个空Object对象 ,有备用的意思,当调用一个对象的函数或者属性的时候,如果在当前对象里面找不到,那么就到原型里面去找
4、内存泄漏是什么
是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费
意外的全局变量，被遗忘的计时器或回调函数，脱离 DOM 的引用，不合理的闭包，都会造成内存泄漏
LRU算法是什么
LRU 缓存淘汰策略，浏览器中的缓存是一种在本地保存资源副本，它的大小是有限的，当我们请求数过多时，缓存空间会被用满，此时，继续进行网络请求就需要确定缓存中哪些数据被保留，哪些数据被移除，这就是浏览器缓存淘汰策略，最常见的淘汰策略有 FIFO（先进先出）、LFU（最少使用）、LRU（最近最少使用）。
5、JS中数据类型的判断有哪些
typeof => 基本数据类型都可以判断，引用数据类型除了函数会显示function，其他都会显 示 object
instanceof => 主要判断对象的类型，同时也可以判断一个实例是否属于某个类
instanceof可以精准判断引用数据类型（Array，Function，Object）
instanceof 在MDN中的解释是instanceof 运算符用来测试一个对象在其原 型链中是否存在一个构造函数的 prototype 属性
constructor => ([]).constructor === Array
如果我创建一个对象，更改它的原型，constructor就会变得不可靠了
Object.prototype.toString.call() => 
var a = Object.prototype.toString;
console.log(a.call(2)); // [object Number]
使用 Object 对象的原型方法 toString ，使用 call 进行狸猫换太子，借用Object的 toString 方法
6、undefined 与 undeclared 的区别？
已在作用域中声明但还没有赋值的变量，是 undefined 的。相反，还没有在作用域中声明过的变量，是 undeclared 的。
对于 undeclared 变量的引用，浏览器会报引用错误，如 ReferenceError: b is not defined 。但是我们可以使用 typeof 的安全防范机制来避免报错，因为对于 undeclared（或者 not defined ）变量，typeof 会返回 "undefined"。
7、什么是闭包，为什么要用它
闭包是指有权访问另一个函数作用域内变量的函数，其实闭包的本质就是作用域链的一个特殊的应用，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。
闭包有两个常用的用途。
1. 闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，我们可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。
2. 函数的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。
8、 Javascript 的作用域和作用域链？
作用域： 作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。
作用域链： 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和函数。
作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。
当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。
作用域链的创建过程跟执行上下文的建立有关…
9、js 的几种模块规范
js 中现在比较成熟的有四种模块加载方案：
第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。
第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范。
第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和require.js的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。
第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块。这种方案和上面三种方案都不同。
10、requireJS的核心原理是什么？
require.js 的核心原理是通过动态创建 script 脚本来异步引入模块，然后对每个脚本的 load 事件进行监听，如果每个脚本都加载完成了，再调用回调函数
Vue 面试题
1、vue的生命周期有哪些
beforeCreate 创建前状态
created 创建完毕状态
beforeMount 挂载前状态 此时会生成虚拟dom
mounted 挂载结束状态
beforeUpdate 更新前状态
updated 更新完成状态
beforeDestroy 销毁前状态
destroyed 销毁完成状态
2、vue路由守卫（导航守卫）：
router.beforeEach：全局前置守卫。
router.beforeResolve：全局解析守卫。
router.afterEach：全局后置钩子。
组件内守卫：
beforeRouteEnter
beforeRouteUpdate
beforeRouteLeave
路由独享守卫：
beforeEnter
路由守卫的参数分别是 to, from, next，表示要到哪里去，从哪里来，以及下一步
2、 vue路由带参跳转有哪几种方法，如何实现
router-link里面带params进行跳转
<router-link :to="{name:'home', params: {id:1}}">
$router.push中带query跳转，类似get请求，地址栏带参数，刷新参数不会消失，适合非重要型数据的传递
$roouter.push中带params跳转，类似post请求，地址栏不会携带参数，刷新参数会消失，密码之类的适合使用params跳转
3、 父路由如何向子路由传值
使用props属性传递数据
在子组件定义一个props用来接收父组件传递过来的数据
在父组件中引用子组件，并给该子组件绑定上在子组件上已经定义的props属性名
绑定的props属性名的值，就是父组件要传过来给子组件的值，这里是name，即取到父组件的name值
在子组件的template使用数据
4、子路由如何向父路由传值
使用$emit自定义事件给父组件传值
在子组件上绑定一个自定义事件
this.$emit("getdata", this.message);
在父组件中调用子组件时，将自定义事件加上
<son @getdata="getval"></son>
在父组件调用方法
getval(){}
5、对于MVVM的理解
MVVM 是 Model-View-ViewModel 的缩写。 Model代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。 
View 代表UI 组件，它负责将数据模型转化成UI 展现出来。 
ViewModel 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View。 在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。 
6、vue实现双向数据绑定
vue实现数据双向绑定主要是：采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty（）来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。
当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。
6、DOM 渲染在 哪个周期中就已经完成
DOM 渲染在 mounted 中就已经完成了
7、watch 是一个对象时，它有哪些选项？
handler deep 是否深度 immeditate 是否立即执行
8、vue中data里为什么要写return
官方的说法是，当一个组件被定义， data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。
不使用return包裹的数据会在项目的全局可见，会造成变量污染;使用return包裹后数据中变量只在当前组件中生效，不会影响其他组件
9、vue.js的两个核心是什么？
数据驱动和组件化
10、vue中 key 值的作用
使用key来给每个节点做一个唯一标识
key的作用主要是为了高效的更新虚拟DOM。另外vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。
11、v-for 与 v-if 的优先级
v-for的优先级比v-if高
12、vue中父组件调用子组件的方法
父组件利用ref属性操作子组件方法
13、vuex有哪几种属性，有什么作用？
有五种，分别是 State、 Getter、Mutation 、Action、 Module。
vuex的State：
Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于与一 般Vue对象里面的data
state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新
它可以通过mapState把全局的state和getters映射到当前组件的 computed 计算属性中
vuex的Getter：
getter主要用来获取数据，参数是上面的state，可以使用$store.getters.xxx获取数据
vuex的Mutation：
用来管理(操作)数据，第一个参数是state，第二个参数是需要被接收的值，可以使 用$store.commit("xxx", xxx)来获取数据
vuex的Action：
用来管理(操作)数据，里面有个默认参数是context，这个参数是一个对象，这个对 象里面有很多方法，操作数据我们需要使用里面的commit方法，因此函数的第一个 参数是{commit},而commit里面有两个参数，一个参数是Mutation的方法，另一个参 数是需要传入的值，因为为了带入这个值，我们需要在外层函数也传上这个值，即({ commit }, xxx)
可以使用 $store.dispatch("xxx", xxx)来获取数据
vuex的Module：
当需要做管理的数据特别多时，我们可以使用Module，首先在store.js里面进行配置，获取模块以及getters进行供出，每一个模块里面都有action/getters/mutation/action，不过getters可以单独写在外面，方便管理，在getters供出一个对象，其中每个字段名为模块里面store里面的变量名，并用箭头函数return，可以简写为title: state => state.common.title
其他面试题
1、三维可视化有哪些主要的引擎
- webgl
  - three.js
  - cesium.js
    - marsv.js => 火星科技，在cesium的基础上封装
2、 我了解到的三维可视化知识点
主要是cesium
- 加载地球
  - 加载地球底图
    - 底图类型
      - 天地图
      - 高德地图
      - 谷歌地图
      - 百度地图
      - 微软地图 => bingMap
    - 底图功能
      - 基础底图
        - 可显示所在点的经度、纬度、海拔、方向以及视高
      - 复位底图
        - 点击后回到指定视区
      - 视图
        - 可切换三维视图、二维视图、哥伦布视图
      - 全屏
      - 方向盘操作
        - 按下鼠标左键并向四周拖拽不释放可修改视图角度，双击重置视图；单击并拖拽旋转，修改视角方向
      - 鼠标右键
        - 可显示此处经纬度、显示当前视角信息、开启光照效果、开启深度检测、绕此处环绕飞行、移动到此处、第一视角站到此处
    - 注意事项
      - 主要是一些地图的底图，每个地图加密算法不一样，坐标点不一样，天地图未经过加密，其他地图坐标都是通过天地图的坐标转换而来的
  - 加载地球模型
    - 主要用3dtiles来加载模型
      - 主要用[cesiumlab]工具处理导出
      - 3D Tiles是用于流式传输大规模异构3D地理空间数据集的开放规范。为了扩展Cesium的地形和图像流，3D Tiles将用于流式传输3D内容，包括建筑物，树木，点云和矢量数据。
      - 3D Tiles是由一个从一开始就使用WebGL的团队设计的，而OpenGL在此之前已经使用了很多年。因此，与glTF一样，从接收3D Tile到使用WebGL渲染3DTF的流程简化为快速简单，并最大限度地减少客户端处理。为了减少WebGL绘制调用的数量，可以预先批量处理或批量处理切片。
      - 3dtiles有两种方法直接获取模型数据，第一个是用geojson盖在上面，第二个是处理模型的时候分开，然后用单体化的类去获取
  - 加载模型数据格式（这里的都是较大场景）
    - 单模型场景
      - 即把所有场景效果改成false
    - 倾斜摄影
      - 原格式为osgb，由无人机飞行得来，用cesiumlab可以转化成3dtiles
    - 城市建筑白模
      - 原格式为dae，因为没有贴图，模型较小，用cesiumlab可以转化成3dtiles
    - 人工模型
      - 原格式为dae，在白模的基础上加上贴图，有精模和简模之分，模型很大
    - bim数据
      - 建筑模型，单体化比较好做，原格式为dae，用cesiumlab可以转化成3dtiles
  - 小模型加载 => gltf
    - GLTF——3D图形界的JPEG
    - glTF(GL TransmissionFormat)，即图形语言交换格式，它是一种3D内容的格式标准，由Khronos Group管理（Khronos Group还管理着OpenGL系列、OpenCL等重要的行业标准）；
    - glTF的设计是面向实时渲染应用的，尽量提供可以直接传输给图形API的数据形式，不再需要二次转换
    - glTF对OpenGL ES、WebGL非常友好
    - glTF的目标是：3D领域的JPEG
    - 作为一个标准，自2015年10月发布（glTF 1.0）以来，已经得到了业界广泛的认可，你可以相信它的水平
    - GLTF具体的信息可以去官方网站上看：https://www.khronos.org/gltf/
- 地球标注
  - 单个点
    - 点、图标点、文字、小模型
  - 二维空间、二维贴地
    - 有深度检测功能
    - 线、曲线、面、圆、矩形
  - 三维空间
    - 墙、立体、圆柱体、矩形体
- 场景控制
  - 开场动画
  - 旋转的地球
  - 双屏对比
    - 加载不同的地球底图
  - 鹰眼
    - 小地图
    - 大部分是二维地图
- 巡更漫游
  - 显示隐藏巡更线
  - 增删改巡更路线
  - 开始巡更、停止巡更、暂停巡更
  - 打开关闭深度检测
  - 开启摄像头
    - 巡更到某个位置会打开摄像头
    - 监控视频格式主要是*.w3u8
    - 主要使用videojs插件
4、 三维可视化业务场景
-加载模型
- 标注的增删改查
- 视点的增删改查
- 巡更的增删改查
  - 关键点事件处理(一般是加载视频)
- 其他
  - 单体化……
  - 视频投影……
3、 硬件设备
- 需要对接一些硬件设备信息
  - 展现方式为标注
  - 硬件设备信息详情主要是：
    - 文字信息(大部分不是实时的)
    - 图片信息(需要实时或者普通接口)
    - 视频-摄像头(一般使用hls进行对接【对方提供*.m3u8格式视频流】)
扩展面试题
1、 yarn serve的过程中做了哪些事情
首先在package.json中的script里面可以找到serve指令，实际上他执行的是vue-cli-service serve这个指令
从webpack的学习过程中我们可以知道，他执行的命令都是在node_modules里面的bin里面执行的，所以我们需要在node_modules/.bin里面找到vue-cli-service
node_modules/bin里面的东西实际上都是软链接，即符号链接，计算机可以通过软链接去找到真实代码，我们在node_modules/bin/vue-cli-service这个文件里面可以找到他的真实代码，即@vue/cli-service
这个软连接是操作系统帮我们做的，有些类似linux指令
cli-service这个文件夹实际上是用webpack搭建的一个项目，我们可以明显地看到webpack.config.js这个配置文件
进入cli-service，找到package.json，看到bin，在安装的时候，他首先安装的是bin里面的东西，即他实际上执行的就是bin下面的vue-cli-service指令，即执行的是cli-service/bin/vue-cli-service.js这个文件
进到vue-cli-service.js这个文件，我们可以看到整个文件最主要就做了三件事，一件是引入service这个类并定义他，这个类实际上是一个js文件，cli-service/lib/Service，第二件事是对这个类做了实例化，即new Service()，第三件事情是，执行了这个Service实例的run方法
我们知道，只要对一个类进行实例化，它必然会执行他的构造方法，即constructor，在Service的构造器里面定义了一系列变量，并执行了一些当前类的一些方法赋值给一些变量
我们可以在构造器中找到定义插件并给他赋值的这句话this.plugins = this.resolvePlugins()，找到resolvePlugins这个方法，他将插件的路径定义成数组，并定义了一个方法，以map的形式将他们一个个组成了有id和apply属性的数组，并最终返回给在构造器里面的plugins，需要注意的是apply是一个方法，它将预设的插件以require的形式引入，每个插件里面又做了module.exports，即每一个apply的返回值实际上可以理解为是每个插件具体的内容
准备工作在这一步基本完成了，之后执行service里面的run方法，我们可以看到这个run方法传了一个command参数，即外部传过来的serve或者build，我们还可以看到run方法里面的第三个步骤是执行了一个init方法，即初始化，定位到init方法，我们可以看到他做了很多事情，但目前他做的最主要的事情是对插件这个对象数组plugins进行了遍历（这个plugins之前在resolvePlugins被赋值了）
init函数在对plugins对象数组遍历的时候，将每个对象的id和apply给解构了出来，并执行apply方法，这里的apply实际上代表各自的插件，在apply方法即插件中传入两个配置项作为参数，其中一个配置项是PluginAPI的实例，另一个配置项是项目的配置projectOptions（里面包含但不仅限于vue.config.js的配置），所以在每个插件中，第一个参数为PluginAPI的实例，即源码中的api，所以这个api也就可以使用PluginAPI这个js文件中的所有方法了
在run方法中，我们还看到，它最终返回了一个fn，并调用了他，这个fn是通过command对象解构出来的，再往上看，可以看到command是通过this.commands[name]这个对象被赋值的，所以后面的重点是这个this.commands[name]做了哪些操作
- 我们知道在vue-cli-service中执行run方法的时候，传过去的值为外部yarn或者npm run后面带的东西，比如serve或者build，即this.commands[name]中的这个name实际上是外部传过来的serve或者build的东西，那this.commands这个对象是什么呢，或者说他是什么时候被赋值的呢
从上文我们知道，实际上我们在构造器里面的resolvePlugins函数给plugins赋值之后，对象数组中的每个apply属性的值实际上代表的就是一个个被require的模块，在执行init方法的时候，遍历了这个plugins数组，并apply了一个个插件，并且看模块中的module.exports可以知道，实际上是执行了一个个模块里面的方法，在这个方法中还将实例化的PluginAPI这个类当作参数传入，实际上是一个个模块里面的第一个参数api就是这个PluginAPI的实例
我们以commands/serve为例，第一个参数即PluginAPI的实例执行了registerCommand方法，我们在PluginAPI.js这个文件中去找到registerCommand这个方法，可以看到这个函数里面传了三个参数，第一个参数是当前的状态，用来匹配开发人员运行是输入的内容，这里是serve，第二个参数是一个对象，表示一些配置，诸如默认的ip端口之类的，第三个参数是最重要的参数，他是一个异步方法，再看到函数体，我们通过最后一句话能看出commands这个对象就是在这里被赋值的，即this.commands[name]这个操作是在这里面去做的，他将一个函数和配置组成一个对象，传给这个commands对象，由此可得出结论，第三个参数的这个异步方法实际上是commands对象的一个属性
我们再回过头看Service.js里面的run方法，从上文我们说到，他实际上是由commands[name]这个对象赋值给command，在最后将fn解构出来，并执行这个fn，从这里可以得出，run方法最后执行的这个方法就是serve.js里面的第三个参数，即那个异步方法，当然这边只是以serve做例子，plugs对象数组里面的其他项实际上也是一样的，接下来继续以serve.js为例，看api.registerCommand的第三个参数，即那个异步函数
在registerCommand这个异步方法中，我们可以看到它require了webpack和WebpackDevServer，从这里可以得出结论，实际上vue-cli-service serve这个指令，他执行的依旧还是webpack
继续往下看，webpack的所有配置实际上是webpackConfig，webpackConfig被赋值之后（至于webpackConfig如何被赋值放在下文介绍），又定义了compiler这个变量，并且调用webpack方法将webpackConfig当做参数传入进去，并赋值给compiler这个变量，由此可以得出，compiler实际上表示webpack编译之后的结果，再将编译后的结果compiler拿过来，放到WebpackDevServer这个类中，这样就拿到这个server了，最后再用这个server来监听开启一个服务，整个流程就执行完毕了
这个异步函数的大概执行流程我们基本了解了，现在有一个比较大的难点就是，webpack配置到底是怎么赋值的，webpackConfig为什么就代表了所有的webpack配置
我们从webpackConfig的赋值可以看出，它实际上调用了PluginAPI的resolveWebpackConfig方法，再看到PluginAPI的resolveWebpackConfig函数，它实际上是执行了Service.js中的resolveWebpackConfig方法
我们阅读Service.js中的resolveWebpackConfig方法的时候可以发现，他将chainableConfig作为参数，并且调佣resolveChainableWebpackConfig方法给他赋予了一个默认值，在这个方法里面获取所有的webpack配置，并且将自己的和默认的webpack配置进行了merge
我们再具体看下resolveChainableWebpackConfig这个方法是如何给chainableConfig这个参数赋值的，在resolveChainableWebpackConfig这个函数里面，他主要是对this.webpackChainFns做了遍历
- 我们全局搜索this.webpackChainFns，可以在init这个方法里面找到webpackChainFns这个变量被赋值的过程
他首先判断当前项目projectOptions这个对象里面的chainWebpack或者configureWebpack是否存在，如果projectOptions.chainWebpack存在，会被添加到webpackChainFns数组中，如果projectOptions.configureWebpack存在，会被添加到webpackRawConfigFns数组中，chainWebpack和configureWebpack实际上是开发者在供出的webpack配置文件中进行配置的两种方式，他们是可以共存的，至于projectOptions对象，我们一层层往上找，我们可以发现它实际上是和loadUserOptions这个方法相关的，而定位到这个函数之后，我们可以看到vue.config.js就在这里面，所以projectOptions这个对象实际上包含了是开发者的一些配置
我们在init函数里面可以发现，webpackChainFns和webpackRawConfigFns这两个数组中实际上有一些用户自己的webpack配置在里面，是从projectOptions这个对象那边过来的，那么框架默认的webpack配置和这个函数式什么关系呢，为什么说webpackRawConfigFns代表webpack所有的配置呢
我们知道，框架在初始化的时候，在实例化service.js的时候，会执行service这个类的构造器，并且会执行resolvePlugins函数，从上文可以知道，在执行这个函数的时候，builtInPlugins对象数组里的所有文件都会被执行，我们可以以config/base为例，这个base实际上就是一些基本的默认的webpack配置，在base.js这个文件中，api首先执行了chainWebpack，即PluginAPI中的方法，我们找到这个方法，可以看到他实际上就是将当前的webpack配置直接push到了webpackChainFns这个数组中
不仅仅是config/base，config文件夹里面所有的js文件，实际上都是这么操作的，包括css相关的webpack配置，开发环境相关的webpack配置等，都执行了PluginAPI实例里面的chainWebpack方法，并且都存到webpackChainFns数组里面了
由此可见，在构造器里面对builtInPlugins数组进行改造，并赋值给plugins，又在run方法中去对他遍历的时候，实际上这时候已经将所有的webpack配置以函数的方式都存入webpackChainFns这个数组里面了，再在下面去判断用户的一些webpack的配置，将他们分别存入webpackChainFns和webpackRawConfigFns，再将所有的配置进行merge，再将他们存入webpackConfig这个对象中，最后将这个webpackConfig作为参数通过webpack方法转换成编译后的compiler，再通过实例化WebpackDevServer，并传入compiler这个对象去创建server，最终，用这个server去创建了一个服务，即yarn serve或者npm run serve的这个服务 
所有的配置webpack的操作都是在registerCommand这个方法里面的第三个参数去实现的，这个参数是一个方法，这个方法本身是在registerCommand函数里面以对象的形式赋值给了commands对象，并且在service里面，在执行run方法的时候，将这个方法给解构了出来，并且去执行他，这一套流程就算完了 -->
