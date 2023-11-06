# JS-Web-API-事件(必考)

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/11.html)

## 1. 题目
- 编写一个通用的事件监听函数
- 描述事件冒泡的流程
- 无线下拉的图片列表，如何监听每个图片的点击

## 2. 知识点
### 2.1. 事件绑定
- 代码示例
  ```html
  <div id="div1" class="container">
    <button id="btn1">事件绑定示例1</button>
  </div>

  <script>
    const btn = document.getElementById('btn1')
    btn.addEventListener('click', event=> {
        console.log('clicked');
    })
  </script>
  ```
- 写一个通用的绑定函数 - 简易版
  ```html
  <div id="div1" class="container">
    <button id="btn1">事件绑定示例1</button>
  </div>
  <a id="link1" href="https://www.baidu.com/">事件绑定示例2</a>

  <script>
    // 通用的绑定函数 - 简易版
    let bindEvent = (elem, type, fn)=> {
      elem.addEventListener(type, fn)
    }

    // 按钮
    const btn = document.getElementById('btn1')
    // 函数他会返回一个参数值，即event对象
    bindEvent(btn, 'click', event=> {
      // event参数的用法
      console.log(event.target);  // 触发点击的元素 - 作代理的时候会有用
      event.preventDefault();  // 阻止默认行为

      alert('clicked');
    })

    // a标签
    const a = document.getElementById('link1')
    bindEvent(a, 'click', event=> {
      event.preventDefault();  // 在这里会阻止a标签的跳转
      console.log("link");
    })
  </script>
  ```

### 2.2. 事件冒泡
- 代码示例
  ```html
  <div id="div1">
    <p id="p1">激活</p>
    <p id="p2">取消</p>
    <p id="p3">取消</p>
    <p id="p4">取消</p>
  </div>
  <div id="div2">
    <p id="p5">取消</p>
    <p id="p6">取消</p>
  </div>

  <script>
    // 通用的绑定函数 - 简易版
    let bindEvent = (elem, type, fn)=> {
      elem.addEventListener(type, fn)
    }

    // 事件冒泡
    // 示例一 - 理解冒泡
    // 在body上监听事件
    const body = document.body
    bindEvent(body, 'click', event => {
      console.log('取消')
      console.log('body clicked')
      // 每点击一下，事件都会一层一层往上冒泡，冒到body上去
      console.log(event.target)  // 需要知道是谁触发的
    })
    // 事件可以冒泡div2上吗
    // 点击div2的时候，div2的事件先执行，再执行body里面的事件
    // 因为他是一层一层地往上冒泡，div2在body里面
    // 点击p5的时候，他是先冒泡到div2，再冒泡到body
    // 点击div1下的p标签，它只会冒泡到body
    // 因为div1下的p标签没有被监听
    const div2 = document.getElementById('div2')
    bindEvent(div2, 'click', event=> {
      console.log("div2 clicked");
      console.log(event.target);
    })

    // 示例二 - p1
    // 点击p1激活，点击取消，就都是取消状态
    // 没必要给每个p标签都做绑定(即获取所有p标签id)
    const p1 = document.getElementById('p1')
    // p
    bindEvent(p1, 'click', event => {
      // 根据冒泡机制，点击激活p标签，也会冒泡到body，显示取消
      // 这里使用阻止冒泡，即只触发点击id为p1的p标签的事件
      event.stopPropagation() // 阻止冒泡
      console.log('激活')
    })
  </script>
  ```

### 2.3. 事件代理
- 事件代理是在事件冒泡的机制上做的
  - 只有实现了事件冒泡，才可以做事件代理
- 概念
  - 当dom数量较多或结果比较复杂，不能给每个dom绑定事件的时候，我们把事件绑定到它的父元素上
  - 在这个父元素上根据event.target获取触发的元素，然后判断是否为我们需要的元素，之后再去做其他的动作
  - 这就是事件代理
- 代码示例
  ```html
  <!-- 
    如果要给每个a标签监听事件
    不可能给每个a标签都设定一个id去监听
    这时候可以把监听放在div1上
    通过冒泡机制去监听所有a标签去响应事件
    这就是事件代理
  -->
  <div id="div1">
    <a href="#">a1</a><br>
    <a href="#">a2</a><br>
    <a href="#">a3</a><br>
    <a href="#">a4</a><br>
    <button>加载更多...</button>
  </div>

  <script>
    // 通用的绑定函数 - 简易版
    let bindEvent = (elem, type, fn)=> {
      elem.addEventListener(type, fn)
    }

    // 事件代理示例
    const div1 = document.getElementById('div1');
    bindEvent(div1, 'click', event=> {
      // 每次点击div1下的标签，都会冒泡到div1上来
      // 点击button的时候也会冒泡到div1上来
      // a标签还有一个默认行为就是点击可能会跳转链接
      event.preventDefault()  // 阻止默认行为
      let target = event.target  // 判断当前触发元素
      console.log("当前触发元素", target, target.nodeName, target.textContent);

      if(target.nodeName === 'A') {
          alert(target.innerHTML)
      }
    })
  </script>
  ```
- 事件代理的意义
  - 代码简洁
    - 不需要给每个节点设置id，还减少了dom查询
  - 减少浏览器内存占用
    - 如果子节点数量过多，每个节点都去监听，会十分损耗内存
  - 但是不能滥用
    - 对于瀑布流这些子节点很多的可以使用，其他不建议
    - 类似一个按钮的绑定使用代理显得复杂

### 2.4. 通用的事件绑定函数
- 代码示例
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/event/通用的事件绑定函数.html)
  ```html
  <div id="div1" class="container">
      <button id="btn1">事件绑定示例1</button>
  </div>

  <div id="div2">
    <a href="#">a1</a><br>
    <a href="#">a2</a><br>
    <a href="#">a3</a><br>
    <a href="#">a4</a><br>
    <button>加载更多...</button>
  </div>

  <script>
    // 通用的绑定函数
    // 既能支持普通的监听
    // 又能支持代理的监听
    // 在代理中不需要在自己的业务逻辑中判断触发的元素
    // selector表示筛选出需要触发的标签
    // 并且需要this永远指向触发的元素
    let bindEvent = (elem, type, selector, fn)=> {
      // 需要做判断，如果没有传selector，即不是代理
      // x == null  =>  x === null || x === undefind
      // 如果fn为null表示传了三个参数，需要把对应关系转换一下
      if(fn == null) {
          fn = selector
          selector = null
      }

      // 绑定
      elem.addEventListener(type, event=> {
        // 不管有没有代理，都需要target
        const target = event.target  // 我们当前触发的元素
        const targetText = event.target.textContent  // 获取文本
        console.log("当前触发的元素", target)

        if(selector) {
          console.log("代理绑定");

          // 存在selector表示他是代理绑定
          // 使用matches表示，这个dom元素(我们当前触发的元素)，是否符合于这个css选择器
          if(target.matches(selector)) {
            // 将fn的this指向改成触发的元素
            // call第一个参数是this指向，后面的参数表示fn的参数
            // call会直接执行
            fn.call(target, event)
          }
        } else {
          console.log("普通绑定");

          // 不存在selector表示他是普通绑定
          // 需要this指向当前触发的元素，即target
          // event表示执行的函数的参数
          // 我们需要使用event对象做一些操作
          // call后面第二个参数开始，就可以当作函数的形参
          fn.call(target, event)
        }
      })
    }

    // 普通绑定
    const btn1 = document.getElementById('btn1')
    // 这里不能使用箭头函数，因为箭头函数没有this指向
    // 也可以说箭头函数里面的this指向当前方法块所在的环境(上级作用域)
    // 即箭头函数里面的this永远指向它的父级(即上级作用域)
    bindEvent(btn1, 'click', function (event) {
      // console.log(event.target) // 获取触发的元素
      event.preventDefault() // 阻止默认行为
      // 如果使用箭头函数，这里的this指向window
      alert(this.innerHTML)  // this指向触发元素

      // 如果使用箭头函数
      // alert(btn1.innerHTML)
    })

    // 代理绑定
    const div2 = document.getElementById('div2')
    // 表示只允许a标签触发
    bindEvent(div2, 'click', 'a', function (event) {
      event.preventDefault()  // 阻止默认行为
      alert(this.innerHTML)

      // 如果使用箭头函数
      // alert(div2.innerHTML)
    })
  </script>
  ```

## 3. 面试题解答(总结)
- 编写一个通用的事件监听函数
  - 需要考虑代理和this的问题
  - 见上
- 描述事件冒泡的流程
  - 基于DOM树形结构
  - 事件会顺着触发元素往上冒泡
    - 监听父节点的dom，点击子节点会触发父节点的事件，如果监听body的点击事件，那么在dom树中body下任意元素触发点击事件，都会冒泡到body的事件中
  - 应用场景：代理
- 无限下拉的图片列表，如何监听每个图片的点击
  - 使用事件代理，监听父元素，通过父元素的监听获取子元素内容
  - 使用event.target获取触发元素
  - 使用matches来判断是否触发元素
