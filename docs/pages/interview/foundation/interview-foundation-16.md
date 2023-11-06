# 运行环境

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/16.html)

## 1. 简述
- 运行环境即浏览器
  - server端有nodejs
  - 移动端可能在微信、支付宝等app中运行页面，但这些实际上还是浏览器
    - 比如说微信，他是以微信的功能为主，但他里面实际上嵌了webview模块，具备浏览器的功能
  - 即各种app对网页来说，都是浏览器
- 浏览器要下载代码，渲染出页面，期间会执行若干JS
  - 前端和服务端最大的差别在于，他需要随时地下载网页代码、渲染
  - 所以他对性能就需要比较高的要求
    - 所以需要针对运行环境的特点来优化，如何让网页加载快一些
- 需要保证代码在浏览器中稳定而且高效

## 2. 题目
### 2.1. 网页加载过程
- 从输入url到渲染出页面的整个过程
- window.onload和DOMContentLoaded的区别

### 2.2. 性能和体验的优化
- 性能优化原则是什么
- 怎么样让加载更快，举例说明
- 怎么样让渲染更快，举例说明
- 防抖是什么，举例说明，手写防抖
- 节流是什么，举例说明，手写节流

### 2.3. 安全
- 常见的web前端攻击方式有哪些
- 怎么去预防这些攻击

## 3. 知识点
### 3.1. 网页加载过程
#### 3.1.1. 加载资源的形式
- html代码
- 媒体文件，如图片、视频等
- js、css代码

#### 3.1.2. 加载资源的过程
1. DNS解析：域名 => ip地址
    - Domain Name System => 域名系统
    - 是将域名和IP地址相互映射的一个分布式数据库
      - 我们访问域名的时候，实际上对应的还是ip地址
    - 特别是一个大型的网站，不同区域的服务端ip地址是不一样的，因为他们分区域做了ip地址的均衡或者代理
    - 我们在输入域名的时候，域名解析服务会根据地域去解析不同的域名，网站会访问的更快一些
2. 浏览器根据ip地址向服务器发起http请求
    - 发起请求
    - 浏览器只是一个发起方，真正的核心模块还是操作系统，操作系统里面有一些能够发送网络请求的系统服务，浏览器调用这些系统服务，操作系统去把这个请求发送
    - 我们这边说是http请求，实际上里面还涉及到TCP的连接(三次握手)
3. 服务器接收并处理http请求，返回给浏览器
    - 响应请求
    - 服务器如何接收并处理请求就是服务端的内容了(可以通过nodejs了解)

#### 3.1.3. 渲染页面的过程
1. 浏览器根据html代码生成DOM Tree
   - document object model => 文档对象模型
2. 浏览器根据css代码生成cssOM
    - css object model => css对象模型
3. 将DOM Tree和cssOM整合形成Render Tree
    - Render Tree => 渲染树
    - 只有dom树是没法渲染的，有些标签的css属性是在css对象模型中的
      - 宽、高、颜色、字体大小等
    - dom结构里面挂了很多css属性
      - 每选一个节点，下面就有很多css属性
4. 浏览器根据Render Tree渲染页面
5. 如果遇到`<script>`则暂停渲染，优先加载并执行JS代码，完成再继续
    - js和渲染是共用一个线程的，因为js有可能会改变dom结构，即Render Tree结构
    - 渲染过程中遇到`<script>`标签，就不渲染了，因为可能没有用，因为js可能改变dom结构，这就是遇到`<script>`标签先执行js代码的由来，执行完js之后再继续进行渲染
6. 直至把Render Tree渲染完成

#### 3.1.4. 总结
- 为何把css放到head中
  - html页面是从上往下执行的，如果把css放到下面，渲染完成dom之后，又发现css，css加载完成之后，形成cssOM，又和当前的dom树合并形成render tree，改变样式之后，可能会重新渲染dom树
  - 从上至下正常渲染dom，发现css，样式改变，比如字体大小，重新渲染改变字体大小
  - css放到head中是为了dom树生成完之前就加载完，dom树生成完之后就和所有的css整合生成一个完整的render tree，即一步渲染完成
- 为何要把js放到body下面
  - 遇到js之后，要暂停渲染，执行完js之后才继续渲染
  - js可能会修改dom结构，如果放在中间，可能会出错
  - 渲染了一部分，会停止渲染，即卡住的状态
  - 会造成页面的渲染过程比较长
  - 我们需要把先能渲染出来的东西全部渲染出来
- 遇到img标签
  - 不会阻塞渲染过程，img资源没过来会先空着
- window.onload和DOMContentLoaded
  ```js
  window.addEventListener('load', function() {
    // 页面的全部资源加载完才会执行，包括图片、视频等
    // iframe也会这样
  })

  document.addEventListener('DOMContentLoaded', function() {
    // DOM 渲染完即可执行(网页加载完了)，此时图片、视频还可能没有加载完
    // 像jquery都是要监听DOMContentLoaded事件做一些处理
  })
  ```

### 3.2. 性能和体验的优化
#### 3.2.1. 简述
- 性能优化是一个综合性问题，没有标准答案，但要求尽量全面
- 某些细节问题可能会单独提问：手写防抖、节流
  - 属于体验上的优化
- 只关注核心点、针对面试
- 性能优化原则
  - 多使用内存、缓存、或其他方法
  - 减少CPU计算量，减少网络加载耗时
- 性能优化主要目的就是使页面加载更快更流畅
  - 适用所有编程的性能优化 - 空间换时间
  - 比如Chrome浏览器加载很快，就是因为它使用了空间换时间的概念
    - 比如标签页，一般浏览器都放在同一个进程中，而Chrome浏览器的思路就是每个标签页都有一个单独的进程，这样空间就使用地多了，但速度也更快了，进程和进程之间不会相互干扰，标签页之间也不会相互干扰，每个标签页，可利用的空间也多了，空间多了，就可以用空间换时间，从而加载更快
    - 历史背景：在Chrome之前的很多浏览器，计算机的内存空间不宽裕
- 从哪里入手
  - 让加载更快
    - 下载速度更快
  - 让渲染更快
    - 代码逻辑合理，没有重复多余的渲染操作，没有等待
    - 至少在同一时间内，让用户看到的更快

#### 3.2.2. 让加载更快
- 减少资源体积，压缩代码
  - 服务端会进行gzip压缩，大概到1/3 => 10kb到3kb
  - 浏览器再进行反解析
  - 这里只是引申，不是前端范围
- 减少访问次数
  - 合并代码、ssr服务端渲染、缓存
  - 合并代码
    - 很多js文件，webpack打包完之后，只有几个，即合并代码
      - 合并完代码之后，就可以减少访问次数
      - 三个文件，每个文件3kb，分别访问3kb比一次性访问9kb更耗时
    - 图片，css也可以压缩
      - 雪碧图也是减少访问次数的一个示例
  - ssr服务端渲染
    - 服务端渲染指服务端把页面以及页面要显示的内容一块给前端，前端拿到内容之后就直接展示
    - 不使用服务端渲染的话，即传统方法是，把页面拿到之后，再通过ajax加载资源，加载资源之后再去下载资源，下载完之后再渲染到页面上去
  - 缓存
    - 如果页面要访问10个资源，如果没有缓存，就要请求10次，如果有缓存，那么命中缓存的那些资源就不需要重复请求
- 使用更快的网络：CDN
  - CDN是根据区域去做服务器的处理
  - 即如果使用cdn，从北京访问的ip和从上海访问的ip是不一样的

#### 3.2.3. 让渲染更快
- CSS放在head，JS放在body最下面
- 尽早执行JS，用DOMContentLoaded触发
  - js尽早执行，没必要等图片、视频等资源加载完成，即onload
- 懒加载
  - 图片懒加载，上滑加载更多
- 对DOM查询进行缓存
- 频繁DOM操作，使用代码片段合并到一起插入DOM结构
  - createDocumentFragment
- 节流(throttle)、防抖(debounce)
  - 让渲染更加流畅

#### 3.2.4. 加载渲染优化示例
- 资源合并
  - 请求次数越少越划算
  ![yh_zyhb](https://zmx2321.github.io/vite-blog/images/interview/foundation/yh_zyhb.png)
- 缓存
  - webpack中的contenthash会根据内容生成hash值
  - 静态资源加hash后缀，根据文件内容计算hash
  - 文件内容不变，则hash不变，则url不变
  - url和文件不变，则会自动触发http缓存机制，返回304
  - 浏览器和服务器都会遵从http缓存机制，前端只需要尽可能去命中这个缓存就行了
  - 比如新上线一个功能，只改了一个js，这时候只有一个js名字会改，返回200，其余的都不变，不变的资源加载会命中缓存，返回304
  ![yh_hc](https://zmx2321.github.io/vite-blog/images/interview/foundation/yh_hc.png)
- CDN
  - 大厂静态资源基本都是用cdn做的
  - 用cdn会更大程度满足网络的性能
  - 因为cdn是专门做静态文件的服务
  - 而且是根据地域来做网络服务的
  - 而且cdn是完全满足上面说的http缓存机制(304机制)的
  ![yh_cdn](https://zmx2321.github.io/vite-blog/images/interview/foundation/yh_cdn.png)
- SSR
  - 是一个比较宽泛的概念，全称是：server side render，即服务端渲染
  - 服务端渲染：将网页和数据一起加载、一起渲染
  - 非SSR(前后端分离)：先加载网页，再加载数据，再渲染数据
    - 网页的ajax去加载数据，数据返回之后再渲染
  - 所以ssr也是减少网络请求的一种思路
  - 早先的JSP、ASP、PHP，现在的vue、react(借助node的一些能力做)
- 懒加载
  - 有时候需要在可视区域加载，不在可视区的暂时不加载
  - 我们可以把图片设置成一个默认地址(小)
  - 把图片的真实地址放到`data-xxx`下面，在这里图片不会加载
  - 根据事件判断到可视区的时候，把`data-xxx`的值赋值给src
  ![yh_ljz](https://zmx2321.github.io/vite-blog/images/interview/foundation/yh_ljz.png)
- 缓存DOM查询
  - 把dom结果赋值成变量
  - js计算和dom查询不是一个数量级的，js计算非常快
  ![yh_dom1](https://zmx2321.github.io/vite-blog/images/interview/foundation/yh_dom1.png)
  - 多个dom操作一起插入到dom结构，使用代码片段
  ![yh_dom2](https://zmx2321.github.io/vite-blog/images/interview/foundation/yh_dom2.png)
- 尽早开始js执行
  ![yh_js](https://zmx2321.github.io/vite-blog/images/interview/foundation/yh_js.png)

#### 3.2.5. 防抖(debounce)
- 场景
  - 监听一个输入框的，在文字变化后触发change事件
  - 直接使用keyup事件，会频繁触发change事件
  - 防抖：用户输入结束或暂停的时候，才会触发change事件
- 防抖机制简述
  - 防抖机制指的是频繁输入或者频繁操作的时候，最后触发
  - 先定义一个定时器
  - 监听事件的时候，最开始是没有这个定时器的(null)
  - 给定时器赋值
    - setTimeout会返回一个定时器的id
    - 给定时器赋值，同时触发一个setTimeout的异步任务
    - 这个任务是xx毫秒之后执行
    - 执行的结果就是定时器里面的方法
  - 执行完定时器里的方法之后还要在方法里面清空定时器
    - xx毫秒触发方法之后，才会清空timer
- 手写防抖
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/run-fun/防抖(debounce).html)
  ```html
  <input type="text" id="input1">

  <script>
    // 监听键盘输入
    /* const input1 = document.getElementById('input1');
    input1.addEventListener('keyup', function() {
        console.log(input1.value);  // 每一次按键都会打印
    }) */

    /**
     * 体验防抖
     */
    // 如果每次按键都走一次请求会非常糟糕
    // 实现输入完停顿一段时间(比如半秒)，再做操作(打印或者请求)
    // 这个机制(需求)就是防抖
    // 需要用到定时器 => 实际上就是定时器的一种应用
    const input1 = document.getElementById('input1');
    let timer  = null;
    input1.addEventListener('keyup', function() {
      // 比如输入123,
      // 输入1，此时timeer不存在，timer赋值定时器id(1)，并把方法加入异步队列，等待时机执行
      // 马上输入2，此时timer存在，但异步队列中的方法还未执行(时机未到)，清除定时器(即1的定时任务)，赋值定时器id(2)，，并把方法加入异步队列，等待时机执行
      // 马上输入3，同理
      // 停止输入，即超过500毫秒，触发定时器任务，获取value值并打印
      // 清空定时器
      if(timer) {
        clearTimeout(timer)
      }
      // 一直输入，只要中间间断不超过500毫秒，就不会打印
      timer = setTimeout(()=> {
        // 模拟触发change事件
        console.log(input1.value);  

        // 清空定时器
        timer = null
      }, 500)
    })

    /**
     * 封装防抖
     */
    // debounce是对函数的封装，最终返回的应该也是一个函数
    // 延迟时间默认500毫秒
    const debounce = (fn, delay = 500)=> {
      // timer是在闭包中的 => 下面的if(timer)
      // 这样不会被外界轻易拿到 => 即不对外暴露
      // 我们在外面使用不需要关心
      // 同时也是在debounce的作用域中
      // 闭包的使用场景：函数当做返回值或者参数传入
      let timer = null;

      // 函数作为返回值，这就形成闭包了
      return function() {
        // 这里面的timer需要在它定义的作用域往上寻找
        if(timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(()=> {
          // 触发change事件
          // 第一个参数是改变this指向
          // 第二个参数是获取所有的参数
          // apply第二个参数开始，只接收数组
          // fn函数在执行的时候，argument传进来
          // debounce返回的函数可能会传进来一些参数
          // 面试使用fn()也没问题
          // fn()
          fn.apply(this, arguments)  

          // 清空定时器
          timer = null
        }, delay)
      }
    }

    const input1 = document.getElementById('input1');
    // 使用debounce生成一个函数
    // 如果要是用之前fn里面的this，这里不能使用箭头函数
    input1.addEventListener('keyup', debounce(e=> {
        console.log(e.target)  // 如果不传arguments，在这里无法识别e，也就无法获取当前dom
        console.log(input1.value);
    }), 600)  // 不传默认500ms，传的话就覆盖
  </script>
  ```

#### 3.2.6. 节流(throttle)
- 场景
  - 拖拽一个元素时，要随时拿到该元素被拖拽的位置
  - 直接用drag事件，则会频繁触发，很容易造成卡顿
  - 节流：无论拖拽速度多快，都会每隔100ms触发一次
- 节流机制简述
  - 节流机制指的是频繁输入或者频繁操作的时候，保持一个频率，连续触发
- 手写节流
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/run-fun/节流(throttle).html)
  ```html
  <style>
    #div1 {
      width: 200px;
      height: 100px;
      border: 1px solid #ccc;
      background: #f00;
    }
  </style>

  <div id="div1" draggable="true">可拖拽</div>

  <script>
  // 监听拖拽
    /* const div1 = document.getElementById('div1');
    div1.addEventListener('drag', function(e) {
      // 每次移动都会频繁打印
      console.log(e.offsetX, e.offsetY);  // 打印坐标
    }) */

    /**
     * 体验节流
     */
    const div1 = document.getElementById('div1')
    let timer = null
    div1.addEventListener('drag', function(e) {
      // 拖拽是永远不间断进行的，即连续触发
      // 第一次没值，但马上就有值了
      // 但只要有值就return出去
      // 等下面100ms到了，timer被赋值成null，这个if就不执行
      if(timer) {
        return
      }

      // 给timer赋值一个定时器
      // 100ms没到的时候，里面方法没执行，定时器就不会被赋值成null
      // 100ms到了，打印，赋值成null
      // if不执行，重新生成一个定时任务,timer有值，return
      // 直到定时任务执行之前都return
      // 执行完定时任务，timer又为null
      // 再次生成一个定时任务
      timer = setTimeout(()=> {
        // 每次移动都会频繁打印
        console.log(e.offsetX, e.offsetY)  // 打印坐标

        timer = null
      }, 100)
    })

    /**
     * 封装节流
     */
    const throttle = (fn, delay = 100)=> {
      let timer = null  // 这个timer是在闭包里面的

      // 如果不使用apply改变this指向，下面的throttle方法的参数指向这个函数
      // 不会传给下面的那个fn
      return function() {
        if(timer) {
          return
        }

        timer = setTimeout(()=> {
          // 一般写一个事件，function里面都要加上event参数，即事件对象
          fn.apply(this, arguments)  // 打印坐标

          timer = null
        }, delay)
      }
    }

    const div1 = document.getElementById('div1')
    // 如果用this指向，不能用箭头函数
    // 上面如果不加arguments，这里无法获取坐标
    // 如果不改变this指向，throttle方法里面的参数会传给throttle返回的那个函数
    // event这个事件对象是传给return的这个函数的，再由这个函数传给fn的
    // throttle里面的这个函数是fn，需要有事件对象
    // 事件监听有事件对象，事件对象一般是监听事件里面的参数，这里的事件对象在throttle的返回值中，即return里面的this
    // 所以fn.apply(this, arguments)意思是把fn函数的this指向事件对象，并传入所有参数
    div1.addEventListener('drag', throttle(function(e) {
      console.log(this);  // 箭头函数指向父级，即当前函数所在环境，即window
      console.log(e.offsetX, e.offsetY)  // 打印坐标
    }), 2000)  // 不传默认100
  </script>
  ```

### 3.3. 安全
#### 3.3.1. 简述
- 最常见的web前端攻击方式
  - XSS跨站请求攻击
  - XSRF跨站请求伪造

#### 3.3.2. XSS跨站请求攻击
- xss场景
  - 一个博客网站，发表一篇博客，其中嵌入`<script>`脚本
  - 脚本内容：获取cookie，发送到我的服务器(服务器配合跨域)
    - cookie里面有个人的敏感信息
    - 即发布这篇博客，有人查看它，很轻松地就可以收割访问者的cookie
- xss示例
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/run-fun/XSS跨站请求攻击.html)
  ```html
  <script>
    // 先设置cookie做模拟
    document.cookie="a=100";
    document.cookie="b=200";
    document.cookie="userid=xxx";
    console.log(document.cookie)
  </script>
  <body>
    <p>一段文字1</p>
    <p>一段文字2</p>
    <p>一段文字3</p>
    <script>alert("获取cookie信息：" + document.cookie);</script>
    <!-- 使用特殊字符就不会被获取 -->
    <!-- &lt;script&gt;alert(document.cookie);&lt;/script&gt; -->
  </body>
  ```
- xss预防
  - 替换特殊字符
    - `<` => `&lt;` 
    - `>` => `&gt;`
    - 即`<script>` => `&lt;script&gt;`，显示在页面上，且不会被作为脚本执行
  - 前端要替换，后端也要替换
  - 可以在npm官网找相关工具 => xss工具
    - 将需要替换的内容当参数传进里面的方法，就可以进行替换了

#### 3.3.3. XSRF跨站请求伪造
- XSRF场景
  - 你正在购物，看中了某个商品，商品id是100
  - 打算买，但还没有买
  - 付费接口是`xxx/pay?id=100`，但没有任何验证
  - 我是攻击者，我看中了一个商品，id是200
  - 我现在想让你给我买
  - 向你发送一封电子邮件，邮件标题很吸引人
  - 但邮件正文隐藏着`<img src="xxx.com/pay?id=200">`
  - 你一查看邮件，就帮我购买了id是200的商品
    - 正在购物，肯定已经登陆了购物网站，即有了用户信息(cookie)
    - 打开电子邮件的时候图片的src是自动执行的
    - img发送的请求是支持跨域的，所以一打开邮件，你的用户信息就已经被带过去了
- XSRF预防
  - 使用post接口
    - 使用post接口，img攻击是无效的，即img的跨域攻击在这里没有效果
    - 在post接口做跨域，只能server端支持
  - 增加验证，例如密码、短信验证码、指纹等

## 4. 面试题解答(总结)
### 4.1. 网页加载过程
- 从输入url到渲染出页面的整个过程
  - 下载资源：各个资源类型，下载过程
  -  渲染页面：结合html、css、js等
- window.onload和DOMContentLoaded的区别
  - window.onload是资源全部加载完才能执行，包括图片
  - DOMContentLoaded是DOM渲染完成即可，图片可能尚未渲染
- 加载资源的形式
  - 网页是通过html、css、img、js等待这些形式加载资源的
- 加载资源的过程
  - dns解析域名到ip => 浏览器发送http请求到服务端(三次握手) => 服务端再响应请求到客户端(四次挥手) => 渲染页面
- 渲染页面过程
  - 浏览器根据html代码生成DOM
  - 浏览器根据css代码生成cssOM
  - 将DOM Tree和cssOM整合形成Render Tree
  - 浏览器根据Render Tree渲染页面
  - 遇到js暂停渲染，优先执行js，执行完之后继续渲染

### 4.2. 性能和体验的优化
- 性能优化原则是什么
  - 性能优化主要目的就是使页面加载更快更流畅
  - 多使用内存、缓存、或其他方法
  - 减少CPU计算量，减少网络加载耗时，即可以使用空间换时间，
    - 例如浏览器，一个标签页就是一个进程
- 怎么样让加载更快，举例说明
  - 减少资源体积：压缩代码
  - 减少访问次数：合并代码、雪碧图、ssr服务端渲染、缓存
  - 使用更快的网络：CDN
    - 域名匹配离你最近的ip
- 怎么样让渲染更快，举例说明
  - CSS放在head，JS放在body最下面
  - 用DOMContentLoaded触发js，即在图片等静态资源加载前触发
  - 懒加载
  - 对DOM查询进行缓存
  - 频繁DOM操作，使用代码片段合并到一起插入DOM结构
    - createDocumentFragment
  - 使用节流和防抖优化渲染体验
- 防抖是什么，举例说明，手写防抖
  - 防抖机制指的是频繁输入或者频繁操作的时候，最后触发
  - 手写见上
- 节流是什么，举例说明，手写节流
  - 节流机制指的是频繁输入或者频繁操作的时候，保持一个频率，连续触发
  - 手写见上

### 4.3. 安全
- 常见的web前端攻击方式有哪些
  - XSS跨站请求攻击
  - XSRF跨站请求伪造
- 怎么去预防这些攻击
  - XSS跨站请求攻击 => 标签用特殊字符表示
  - XSRF跨站请求伪造 => 用post请求，并添加验证
