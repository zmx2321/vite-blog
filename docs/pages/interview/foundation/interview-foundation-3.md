# CSS 面试题

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/3.html)

## 1. HTML面试题
- 如何理解html语义化
  - 正确使用html标签
  - 让人更容易读懂(代码可读性)
  - 让机器(搜索引擎)更容易读懂(搜索引擎优化=>SEO),即更容易被爬虫识别

- 默认情况下，哪些html标签是块级元素，哪些是内联元素
  - 块级元素 => display:block/table => 独占一行
    - div、h1、h2、table、ul、ol、p等
  - 内联元素 => display:inline/inline-block
    - span、img、input、button等

## 2. CSS面试题
- 布局
  - 盒子模型的宽度如何计算
  - margin纵向重叠的问题
  - margin负值的问题
  - BFC的理解和应用(常考)
  - float布局问题，以及clearfix
    - float是传统PC端布局方式
    - 双飞翼布局
    - 圣杯布局
  - flex画色子
- 定位
  - absolute和relative分别依据什么定位
  - 居中对齐有哪些实现方式 => 水平、垂直
- 图文样式
  - line-heigth的继承问题(常考)
    - line-height的设置有几种形式，这几种形式该如何继承
- 响应式
  - rem是什么
  - rem、em、px对比
  - 如何实现响应式
- CSS3 => flex、动画
  - 关于CSS3动画(非重点)

## 3. CSS布局相关
### 3.1. 盒子模型的宽度如何计算
- 判断以下div1的offsetWidth多大
  - offsetWidth = (内容宽度+内边距+边框) => 无外边距
```html
<style>
  #div1 {
    width: 100px;
    padding: 10px;
    border: solid 1px #ccc;
    margin: 10px;
  }
</style>

<div id="div1"></div>
```
- 答：122px
  - 左边和右边内边距10*2，左右边框1\*2，宽度100
- 追问： 如何使offsetWidth为100
  - `box-sizing: border-box`;
    - 意思是加了这个之后with就不仅仅是内容宽度了，是border-box宽度，即到边框的box的宽度，即加上左右内边距加内容宽度加上边框，为100px

### 3.2. margin纵向重叠的问题
- AAA和BBB之间的距离是多少
```html
<style>
  p {
    font-size: 16px;
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>

<p>AAA</p>
<p></p>
<p></p>
<p></p>
<p>BBB</p>
```
- 答：15px
  ```html
  <p>AAA</p>  下15  
  <p></p>  空内容被重叠即被忽略 margin值为0
  <p></p>  0
  <p></p>  0
  <p>BBB</p> 上10 重叠15
  ```
  - 相邻元素的margin-top和margin-bottom会发生重叠
  - 空白内容的`<p></p>`也会重叠

### 3.3. margin负值的问题
- 对margin的top/left/right/bottom设置负值，有何效果
  - margin-top和margin-left负值，元素向上，向左移动
  - margin-right负值，右侧元素左移，自身不受影响
  - margin-bottom负值，下方元素上移，自身不受影响

### 3.4. BFC的理解和应用(常考)
- 什么是BFC？如何使用
  - Block format context => 块级格式化上下文
  - 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素
- 形成BFC的常见条件 => 即能实现BFC的方式
  - float不是none
  - position是absolute或fixed
  - overflow不是visible
  - display是flex或inline-block等
- BFC的常见应用
  - 清除浮动
- 示例
- 一个容器，里面有文字和图片，给图片设置浮动
- 此时图片无法撑开容器，即脱离文档流
- 我们可以使用BFC来解决这个问题
```html
<style type="text/css">
  .container {
      background-color: #f1f1f1;
  }
  .left {
      float: left;
  }
  .bfc {
      overflow: hidden; /* 触发元素 BFC */
  }
</style>

<div class="container bfc">
    <img src="https://www.imooc.com/static/img/index/logo.png" class="left" style="magin-right: 10px;"/>
    <p class="bfc">某一段文字……</p>
</div>
```

### 3.5 float布局问题，以及clearfix
- 圣杯布局和双飞翼布局的目的
  - 三栏布局，中间一栏最先加载和渲染(内容最重要)
  - 两侧内容固定，中间内容随着宽度自适应
  - 一般用于PC网页
- 圣杯布局
```html
<style>
#container .column {
    float: left;  /* 圣杯布局基本要素 */
}

/* 圣杯布局是通过padding为两边留白的 */
#container {
    padding-left: 200px;  /* padding的空间用来放左右两边的盒子 */
    padding-right: 150px;  /* 右边盒子宽度 */
}

#center {
    background-color: #ccc;
    width: 100%;  /* 100%肯定是撑满的，但他需要有左右两边，所以还需要设置它的父级的padding，留出两边的位置 */
}
#left {
    position: relative;
    background-color: yellow;
    width: 200px;
    margin-left: -100%;  /* 使用margin负值，向左移动100%，和中间内容横向重叠，这里的100%表示父元素的宽度值， */
    right: 200px;  /* relative表示根据自身的移动位置 */
}
#right {
    background-color: red;
    width: 150px;
    margin-right: -150px;  /* 相当于自身宽减小，在表面上看自身不变，右边元素向左移动 */
}
</style>

<div id="container" class="clearfix">
    <div id="center" class="column">this is center</div>
    <div id="left" class="column">this is left</div>
    <div id="right" class="column">this is right</div>
</div>
```
- 双飞翼布局
```html
<style>
.col {
    float: left;  /* 双飞翼布局基本要素 */
}

/* 中间 */
#main {
    width: 100%;  /* 中间内容撑开 */
    height: 200px;
    background-color: #ccc;
}

/* 双飞翼布局是通过margin为两边留白的 */
#main-wrap {
    margin: 0 190px 0 190px;
}

#left {
    width: 190px;
    height: 200px;
    background-color: #0000FF;
    margin-left: -100%;  /* 使用margin负值，使中间内容横向重叠 */
}
#right {
    width: 190px;
    height: 200px;
    background-color: #FF0000;
    margin-left: -190px;  /* 向左移190px，如果设置margin-right,由于他本身宽度几乎没有，就会贴到最右边 */
}
</style>

<div id="main" class="col">
  <div id="main-wrap">
      this is main
  </div>
</div>
<div id="left" class="col">
    this is left
</div>
<div id="right" class="col">
    this is right
</div>
```
- 圣杯布局和双飞翼布局的技术总结
  - 使用float布局
  - 两侧使用margin负值，以便和中间内容横向重叠
  - 防止中间内容被两侧覆盖，圣杯布局用padding，双飞翼布局用margin
- 笔记
  - [圣杯布局demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/css/05-圣杯布局.html)
  - [双飞翼布局demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/css/06-双飞翼布局.html)
- 手写clearfix
```css
.clearfix:after {
  content: '';
  display:block;  /* 也可以设置成table */
  clear: both;
}

/* 现在基本不用 */
.clearfix {
  *zoom: 1;  /* 兼容IE低版本 */
}
```

### 3.6 flex布局
- flex实际上就是为了布局而设计的
- 常用语法回顾
  - flex-direction => 横向或者纵向
  - justify-content => 主轴对齐方式(水平对齐) (从开始/结束对齐、居中对齐、两边对齐)
  - align-items => 交叉轴对齐方式(垂直对齐) (开始/结束对齐、居中对齐)
  - flex-wrap => 是否换行
  - align-self => 子元素的对齐方式 (开始/结束对齐、居中对齐)

- 使用flex实现一个三点的色子
```html
<style>
.box {
  display: flex;  /* flex 布局 */
  justify-content: space-between;  /* 两端对齐 */

  width: 200px;
  height: 200px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
}

/* 背景色、大小、边框 => 每个点 */
.item {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #666;
}

.item:nth-child(2) {
  align-self: center;  /* 第二项居中对齐，交叉轴(垂直)居中对齐 */
}

.item:nth-child(3) {
  align-self: flex-end;  /* 第三项尾对齐 */
}
</style>

<div class="box">
    <span class="item"></span>
    <span class="item"></span>
    <span class="item"></span>
</div>
```

## 4. CSS定位相关
### 4.1. absolute和relative分别依据什么定位
- relative依据自身定位，对外界的元素不会有什么影响
- absolute依据最近一层的定位元素定位
  - 定位元素
    - absolute、relative、fixed
    - 或者直接找到body

### 4.2. 居中对齐有哪些实现方式
- 水平居中
  - inline元素：text-align: center
  - block元素: margin: auto
  - absolute元素: left:50% + margin-left负值
- 垂直居中
  - inline元素: line-height的值等于height (让行高=高)
  - absolute元素：
    - top:50% + margin-top负值
      - 必须要知道子元素的宽和高
    - transformY(-50%)
    - top,left,bottom,right=0 + margin:auto
      - 既保证了浏览器兼容性，又能实现需求
      - 不需要知道子元素的宽和高
      - 面试高频考点

## 5. 图文样式
- line-height如何继承 => 有个坑
- p标签行高是多少
```html
<style>
  body {
    font-size: 20px;
    line-height: 200%;
  }

  p {
    font-size: 16px;
  }
</style>

<body>
  <p>AAA</p>
</body>
```
- 答：40px
  - 20*200% => p标签直接继承了body
- 解析
  - line-height相关
    - 写具体数值，如30px，则继承该值
    - 写比例，如2/1.5，继承该比例
      - 子元素font-size*比例
    - 写百分比，如200%，则继承计算出来的值(考点) => 也是个坑
      - 先算完自身的行高，再进行继承
      - 即子元素的行高为，父元素的font-size*百分比

## 6. 响应式
### 6.1. rem是什么
- rem是一个长度单位
  - rem，相对长度单位，相对于根元素(r表示root)，常用于响应式布局
- 其他长度单位
  - px，绝对长度单位，最常用
  - em，相对长度单位，相对于父元素，不常用
- 示例
```html
<style type="text/css">
  html {
    font-size: 100px;  /* 100px = 1rem */
  }
  div {
    background-color: #ccc;
    margin-top: 10px;
    font-size: 0.16rem;  
  }
</style>

<p style="font-size: 0.1rem">rem 1</p>

<div style="width: 1rem;">
  this is div1
</div>
```

### 6.2. 响应式的常见方案 
- media-query(媒体查询), 根据不同的屏幕的宽度设置根元素
  - css3中的新的定义 => 可以查询不同屏幕的宽度
  - 然后使用rem基于根元素的相对单位去做计算
  - 示例
  ```html
  <style>
  /* 86/100 = 320/375 */
  @media only screen and (max-width: 374px) {
    /* iphone5 或者更小的尺寸，以 iphone5 的宽度（320px）比例设置 font-size */
    html {
      font-size: 86px;
    }
  }

  @media only screen and (min-width: 375px) and (max-width: 413px) {
      /* iphone6/7/8 和 iphone x */
      html {
        font-size: 100px;
      }
  }

  /* 110/100 = 414/375 */
  @media only screen and (min-width: 414px) {
    /* iphone6p 或者更大的尺寸，以 iphone6p 的宽度（414px）比例设置 font-size */
    html {
      font-size: 110px;
    }
  }

  body {
    font-size: 0.16rem;
  }

  #div1 {
    width: 1rem;
    background-color: #ccc;
  }
  </style>

  <div id="div1">
    this is div
  </div>
  ```
- vm/vh
  - 背景 => rem存在弊端
    - rem的弊端 => 阶梯性
    - 媒体查询必须超过某个像素才能起作用
  - 网页视口尺寸
    - window.screen.height => 屏幕高度
    - window.innerHeight => 网页视口高度
      - 浏览器中可以显示网页内容的高度
      - 浏览器模拟器中没有头
    - window.body.clientHeight => body高度
      - 随着网页内容而变化
  - 概念
    - vh => 网页视口高度的 1/100
    - vw => 网页视口宽度的 1/100
    - vmax => 判断网页视口宽和高，取两者最大值
      - 竖屏，vh > vw => 取vh为单位
      - 横屏，vh < vw => 取vw为单位
    - vmin => 取两者最小值
    - window.innerHeight === 100vh
    - window.innerWidth === 100vw

## 7. 面试题解答(总结)
- 如何理解html语义化
  - 增加代码可读性 => 让人更容易读懂
  - 让搜索引擎更容易读懂(seo) => 让机器更容易读懂
- 块状元素 & 内联元素
  - display:block/table => div h1 table ul ol p
  - display:inline/inline-block => span img input buton
- 盒模型宽度计算
  - offsetWidth = (内容宽度+内边距+边距)，无外边距
  - box-sizing: border-box => 如果希望盒子的宽度为offsetWidth
    - 不加的话width只是内容宽度
    - 加上的话width=offsetWidth
- margin纵向重叠的问题
  - 相邻元素的margin-top和margin-bottom会发生重叠
  - 空白内容的p标签会重叠
- margin负值问题
  - margin-top和margin-left负值，元素向上、向左移动
  - margin-right负值，右侧元素左移，自身不受影响
  - margin-bottom负值，下方元素上移，自身不受影响
- BFC的理解与应用
  - 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素
  - 形成BFC的条件
  - BFC的常见应用，清除浮动
- float布局
  - 圣杯布局和双飞翼布局的技术总结
    - 使用float布局
    - 两侧使用margin负值，以便和中间内容横向重叠(最重要)
    - 防止中间内容被覆盖，一个用padding,一个用margin
- 手写clearfix
- flex画三个点的色子
- absolute和relative定位
  - relative依据自身定位
  - absolute依据最近一层的定位元素定位
    - fixed、relative、absolute，或者直接找到body
- 居中对齐的实现方式
  - 垂直居中
    - line元素：line-height = height
    - absolute元素：top:50% + margin-top负值
      - 元素尺寸未知，使用transformY(-50%)
  - 水平居中
    - line元素: text-align: center
    - absolute元素: left:50% + margin-left负值
    - 元素尺寸未知，使用transformX(-50%)
  - 水平垂直居中
    - absolute元素：
      - top:50%, left:50%, transform(-50%, -50%)
      - top,left,bottom,right=0 + margin:auto
- line-height如何继承
  - 写具体数值，如30px，则继承该值
  - 写比例，如2/1.5，则继承该比例
  - 写百分比，如200%，则继承计算出来的值(考点)
- rem是什么
  - px，绝对长度单位，最常用
  - em，相对长度单位，相对于父元素，不常用
  - rem，相对长度单位，相对于根元素，常用于响应式布局
- 响应式布局的常用方案
  - 媒体查询(media-query)，根据不同的屏幕宽度设置根元素font-size
  - rem，基于根元素的相对单位
