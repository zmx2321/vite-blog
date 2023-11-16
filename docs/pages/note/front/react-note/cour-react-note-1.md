# React入门简介

[系列笔记地址传送带](https://zmx2321.github.io/blog_code/accumulation/front/react-note/react入门系列/index.html)

## 1. 框架简述
- mvvm => Model-View-ViewModel => 模型-视图-视图模型
  - 【模型】指的是后端传递的数据
  - 【视图】指的是所看到的页面
  - 【视图模型】mvvm模式的核心，它是连接view和model的桥梁,它有两个方向
    - 一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定
    - 二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。
    - 这两个方向都实现的，我们称之为数据的双向绑定
    - 总结：在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且MVVM中的View 和 ViewModel可以互相通信
- react优势:虚拟dom
  - 原生js操作dom很消耗性能
  - 所以出现了很多库
- 库和框架的区别
  - 库相当于就是把一些功能点，比如那些dom的操作进行封装
    - 即封装了js，但是思想还是在js上
    - 高度封装了原生js，让使用者方便一些，类似jquery、zepto等
    - 原生js的本质是事件驱动
  - 本质修改了js的思想，像react那些三大框架是数据驱动的，解决了一些终端程序上的问题
  - 一般来说库和框架是允许共存的，比如在vue中使用jquery
- 三大框架区别
  - angular => 把工具都限制了，即mvvm都控制了
    - 例如里面的: $http => ajax
  - vue => 不限制工具，但推荐，即mvvm中最后的ViewModel由自己控制
    - 推荐使用vue-resource或者axios，可以自己进行安装
  - react => 只专注于视图层，即view层
- 如何学习react
  - react学习曲线陡，一方面是因为他的插件多，另一方面他的思想和js不一样
  - 这时候需要去理解作者的思想，去接受他的世界观，起码在应用层和原生js有区别了
  - react自定义了新语法: jsx
    - 一个比较明显的区别就是jsx加元素标签不用加引号也可以输出
      - `<div>hello</div>`
    - 多标签外面必须要包一层根元素 => vue2.x就是参考的这里
    - 可以自由缩进
    - 允许加括号，作为一个整体
    - 单标签必须加反斜杠，不加会报错
    - class要使用className
    - jsx里面使用js代码，用大括号包起来
      ```jsx
      let a = "hello"
      let b = <div>{a}</div>
      ```
- 三大框架背景
  - react => facebook
  - angular => google
  - vue => 尤大神

## 2. react基本设定
- react学习曲线比较陡
  - 需要依赖很多插件
  - react本身能做的事情不多，想做复杂一些的东西必须得用react插件(react全家桶)
- 如果要是用react的话(使用src引用)必须引用以下插件:
  - react.js => 核心js
  - react-dom.js => 虚拟dom
  - babel => jsx(React 使用 JSX 来替代常规的 JavaScript，但jsx使用的是ES6b标准,在生产环节中，我们通常直接将jsx编译为js，但自己调试的时候可以加入browser.js在浏览器端转换jsx文件)
- react核心js必须是在最上面

## 3. 推荐一个实用工具
- bower => js所有框架库包管理器，可以下载资源文件到本地（react、jquery、cesium）
- bower - 依赖于node
- npm install bower -g
- bower
  - ~ info(信息) => bower install react(查看react版本)
    - npm info react(也可以查react版本)
  - ~ install(下载)

## 4. 下载react
- bower install react => 默认下载最高版本
- 指定某个版本
  - bower install react#15.6.1(目前比较稳定) .. 不能有空格

## 5. 渲染react
- react-dom.js提供我们一个方法(ReactDOM.render())用来渲染
```jsx
ReactDOM.render(
  // 第一个参数 - 组件 （内容、元素）
  // 第二个参数 - 位置 （放到哪）
);
```
- 书写格式示例：
```html
<script src="../react.js"></script>
<script src="../react-dom.js"></script>
<script src="../browser.js"></script>
...
<div id="app"></div>

<!-- 他不是js语法，jsx语法必须用text/babel -->
<script type="text/babel">
  ReactDOM.render(
    // 必须有一个根元素
    // 允许加括号
    // 单标签必须闭合
    // 必须使用className
    (<h1 className="helo">hello</h1>),
    document.getElementById("app");
  );
</script>

或

<script type="text/babel">
  let b = "hro"
  let c = "cls"

  // 模板字符串
  // style中第一层括号表示告诉jsx我要用js代码了，第二层括号表示json
  // jsx支持style - 里面使用json
  let a = <h1 style={{'background': 'green'}}><span className={c}></span>hello, { b }</h1>

  ReactDOM.render(
    a,
    document.getElementById("app");
  );
</script>
```

## 6. 事件
- 使用驼峰命名法
  - onclick => onClick
```jsx
// 直接输出
<div onClick={alert(1)}></div>

// 定义方法
let show = ()=> {
  alert(1);
}
<div onClick={show}></div>
```