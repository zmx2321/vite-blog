# 原理-浏览器渲染原理

## 基本概念信息
- 什么是浏览器的渲染
  - 在浏览器中,将html字符串,转化成像素信息,这个过程就叫渲染
  - 只要将这些像素点的颜色交给gpu,交给显卡,就会在屏幕上显示出来,就完成了一次渲染
    ```js
    const render = (html) => {
        // 屏幕上第一个的第一个像素点什么颜色,第二个像素点什么颜色
        // 第二行.......

        return pixels;
    }
    ```

## 面试题
### 从浏览器输入到页面展示发生了什么
> 主要发生的事情在网络和渲染两个层面,后面我们主要讲渲染
- 网络
  - 浏览器的网络进程会开一个网络线程,去请求这个资源,去拿html字符串
  - 这个网络线程会生成一个渲染任务给渲染进程中的渲染主线程中的消息队列,就启动了一个渲染流程
- 下面开始专题讲解渲染流程

## 渲染
> 浏览器是如何渲染页面的？
- 当浏览器的网络线程收到 HTML 文档后，会产生一个渲染任务，并将其传递给渲染主线程的消息队列。(🌟)
- 在事件循环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程
- ---
- 整个渲染流程分为多个阶段，分别是: HTML 解析、样式计算、布局、分层、绘制、分块、光栅化、画(🌟)
- 每个阶段都有明确的输入输出，上一个阶段的输出会成为下一个阶段的输入。
- 这样，整个渲染流程就形成了一套组织严密的生产流水线。

### 第一阶段: 解析HTML(生成DOM树和CSSOM树)
- 渲染的第一步是解析 HTML
- 解析过程中遇到 CSS 解析 CSS，遇到 JS 执行 JS。为了提高解析效率，浏览器在开始解析前，会启动一个预解析的线程，率先下载 HTML中的外部 CSS 文件和 外部的 JS 文件。
- 如果主线程解析到 link 位置，此时外部的 CSS 文件还没有下载解析好，主线程不会等待，继续解析后续的HTML。这是因为下载和解析 CSS 的工作是在预解析线程中进行的。这就是 CSS 不会阻塞 HTML 解析的根本原因。
- 如果主线程解析到 script 位置，会停止解析 HTML，转而等待 JS 文件下载好，并将全局代码解析执行完成后，才能继续解析 HTML。这是因为 JS 代码的执行过程可能会修改当前的 DOM 树，所以 DOM 树的生成必须暂停。这就是 JS 会阻搴 HTML 解析的根本原因。
- 第一步完成后，会得到 DOM 树和 CSSOM 树，浏览器的默认样式、内部样式、外部样式、行内样式均会包含在 CSSOM 树中。
  - 这个dom树的代码实际上是c++代码,外面包了一层,js代码只是用来操作这个dom树
  - 形成dom树是为了后续的工作做准备
- 补充说明: 
  - 有哪些样式表
    - 内部样式表
    - 外部样式表
    - 内联样式表(行内样式表)
    - 浏览器的默认样式表
      - [chrome浏览器源代码](https://github.com/chromium/chromium/blob/main/third_party/blink/renderer/core/html/resources/html.css) 
  - 除了浏览器的默认样式,其他的样式js都能操作
  - styleSheetList对象
    ```js
    {
        styleSheetList: {
            内部样式表: {},
            外部样式表: {},
            内联样式表: {},
            浏览器的默认样式表: {},
        }
    }
    ```
  - 获取样式表: `document.styleSheets`
  - 全局添加样式规则: `document.styleSheets[0].addRule("div", "border: solid 1px #f00")`
    - 框架中使用的比较多
- 问题: 
  - html解析过程中遇到css代码怎么办
    - 为了提高解析效率,浏览器会启动一个预解析器(预解析线程),先下载和解析css文件
  - html解析过程中遇到js代码怎么办
    - 渲染主线程遇到js时必须暂停一切行为,等待下载执行完后才能继续
    - 预解析线程可以分担一点下载js的任务
    - 因为js可能会改动当前的html

### 第二阶段: 样式计算
> css属性值的计算过程,就是样式计算
> 通过样式计算之后,形成新的dom树,这个dom树中的每个节点都有对应的样式信息(计算后的样式)
- css的计算有哪些情况
  - 层叠 => 样式冲突如何解决
  - 继承
- css的视觉可视化模型
  - 盒模型
  - 包含块
  - 流式布局
  - 浮动布局
  - bfc(块级格式化上下问)
- 计算后的样式
  - 表示所有的css样式全部有值 
  - 谷歌浏览器控制台 => styles旁边 => computed =≥ show all => 可以看到所有样式(最终计算出来的样式)
- 总结
  - 主线程会遍历得到dom树,依次为树中的每个节点计算出它的最终样式,称之为 computed style
  - 在这一过程中,很多预设值会变成绝对值,比如red会变成rgb(255, 0, 0),相对单位会变成绝对单位,比如1em会变成16px
  - 这一步完成后,会得到一棵带有样式的dom树
- 通过js获取最终的计算样式
  - `document.getComputedStyle()`

### 第三阶段: 布局
> 布局就是计算每个节点在页面上的尺寸和位置
> 它的位置相对的是包含块
- 包含块
  - 表示一个元素的活动区域
  - 比如一个div设置宽度的百分比,它是相对于包含块的百分比
- 有些样式,比如auto,百分比,在第二个阶段是无法计算出来的,所以需要第三个阶段
- layout树(布局树)
  - dom树和layout树是不同的
  - 有些隐藏的元素不会出现在布局树里面,布局树是为了找到每个节点的集合信息(尺寸和位置),即layout树中的每个节点都对应一个真实的元素,但是display: none的元素没有对应的节点
  - head元素是隐藏的
  - ::before和::after伪元素在dom树中存在,在布局树中不存在
- head元素为什么是隐藏的
  - 在谷歌浏览器源码中,浏览器的默认样式表中设置的是`head { display: none }`
- 内容必须在行盒中(🌟)
  - 行盒块盒说的是盒模型,内容必须在行盒中
  - 行盒: display: inline
  - 块盒: display: block
  - 行级元素块级元素说的是标签类型即html,且这种说法已经过时
    - 盒子的类型由css决定,html只提供语意化
- 行盒和块盒不能相邻(🌟)
    - 在HTML文档中，当文本或其他行内内容没有被任何行内元素（如span、a、strong等）包裹时，CSS引擎会自动为这些内容生成一个或多个匿名行内盒子，以便进行布局和渲染。
    - 如果行盒内部包含了块级元素,CSS引擎可能会创建匿名块盒来包裹这些块级元素
- 所以有很多种情况会导致布局树和dom树不对应
- js可以获取部分布局树信息
  - `document.body.clientWidth`
  - `document.body.clientHeight`
  - `document.documentElement.offsetWidth`
  - ......
- 总结
  - 布局完成之后会得到布局树
  - 布局阶段会依次遍历dom树的每个节点,计算每个节点的集合信息,例如节点的宽高,相对包含块的位置
  - 大部分的时候,dom树和布局树并非一一对应
  - 比如`display:none`的节点没有几何信息,因此不会生成到布局树,又比如使用了伪元素选择器,虽然dom树中不存在这些伪元素节点,但他们拥有几何信息,所以会生成到布局树中,还有匿名行盒,匿名块盒等都会导致dom树和布局树无法一一对应

### 第四阶段: 分层
> 将布局树中的节点进行分层,将页面分成多个图层,每个节点都有对应的层,分别进行绘制(以前的浏览器都没有,现在浏览器里面大部分都有这个步骤)
> 类似小时候玩的贴纸,把贴纸贴在纸上,其中某个地方发生了变化,只要把那个贴纸换掉即可
- 在谷歌浏览器中的体现
  - 控制台 => layers
- 基本概念
  - 浏览器不会分太多层,因为每个图层都会占用内存,如果分太多层,内存会占用很多
  - 每个浏览器的分层策略都不一样
  - 跟堆叠上下文有关的属性会影响分层角色(z-index、option、transform等)
  - 滚动条会单独分出一个层
- 我们如果希望一个div单独分层
  - 给浏览器一个信息,让浏览器帮我们单独分一个层
  ```css
  div {
    will-change: transform;
  }
  ```
- 总结
  - 主线程会使用一套复杂的策略对整个布局树进行分层,每个节点都会分配到某个图层
  - 分层的好处在于,将来某一个层改变后,仅会对该层进行后续处理,从而提升效率
  - 滚动条、堆叠上下文、transform、opacity、动画等都样式都会或多或少的影响分层结果
  - 也可以通过`will-change`属性更大程度的影响分层结果
    - - `will-change`不能滥用,只有效率出了问题,渲染变卡了,发现是分层造成的,这个地方经常变动,不希望重绘的过多,所以需要单独分层,才用这个属性

### 第五阶段: 绘制
> 这里的绘制,是为每一层生成如何绘制的指令
> 主线程会为每个层单独产生绘制指令集,用于描述这一层的内容该如何画出来
> 每个层会分成很多小区域,每个小区域都会生成一个绘制指令,这些指令会按照顺序被发送到GPU,最后由GPU进行绘制
- 绘制指令
  - 将笔移动到某个位置,画一条线,画一个圆等
  - 类似canvas,只不过canvas是js控制的,而绘制指令是浏览器控制的
  - canvas就是浏览器开放出来的绘制功能
  - 这里的绘制,是为每一层生成如何绘制的指令
- 绘制完之后,渲染主线程的工作到此为止,剩余步骤交给其他线程完成
- 总结渲染主线程目前做的事情
  - 渲染主线程 => parse(解析html-产生dom树和cssom树) => style(样式计算) => layout(生成布局树,生成每个节点的几何信息) => layer(根据布局树分层) => paint(分层之后,对每一层生成绘制指令[几何信息都知道了,就知道怎么去画了])
- 对每一层生成绘制指令之后,将这些指令发送给合成线程
  - 合成线程也在渲染进程里面

### 第六阶段: 分块
> Tiling
> 分块会将每一层分成多个小区域
- 合成线程是专门用来做分块的
  - 合成线程会启动更多的线程,来一起进行分块(分块器)
- mac怎么看浏览器进程
  - 搜索 => 活动监视器 => 选择谷歌浏览器 => 点击上面三个点 => 取样进程 => 选择线程的百分比
  - thread就是一个个线程
  - 其中compositor就是合成线程,compositorTileWorker1就是分块器,会有很多分块器
- 总结
  - 完成绘制之后,主线程会将每个图层的绘制信息提交给合成线程,剩余工作将由合成线程完成
  - 合成线程首先对每个图层进行分块,将其划分为更多的小区域
  - 他会从线程池中拿

### 第七阶段: 光栅化

### 第八阶段: 画