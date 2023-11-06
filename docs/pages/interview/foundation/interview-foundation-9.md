# JS-Web-API-DOM
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/9.html)

## 1. 简述
- JS基础知识，规定语法(ECMA 262标准)
- JS Web API，网页操作的API(W3C标准)
  - 怎么借助js语法去操作web api就是它规定的
- 前者是后者的基础，两者结合才能真正实际应用
- JS基础知识
  - 变量的类型和计算
  - 原型和原型链
  - 作用于和闭包
- JS Web API
  - DOM操作(Document Object Model)
    - 文档对象模型的集合
  - BOM操作 => 操作浏览器
  - 事件绑定
  - ajax
  - 存储
- Vue和React框架应用广泛，封装了DOM操作
- 但DOM操作一直都是前端工程师的基础、必备知识
- 只会vue而不懂DOM操作的前端程序员，不会长久

## 2. 题目
- DOM是哪种数据结构
- DOM操作的api
- attr和property的区别
  - 这两个翻译过来都是属性
- 一次性插入多个DOM节点，考虑性能
  - 常考

## 3. 知识点
### 3.1. DOM本质
- 了解DOM本质，需要从xml说起
  - xml是一种可扩展的标记性语言
  - 即可以描述任何结构的数据，是一棵树
  - 可以自己定义标签，可以任意扩展，和json是一样的
  - xml的历史比json要早一些
  - 因为json天生和js结构相吻合，所以他后来发展很快
- 简述html
  - html其实也是一种特定的xml
  - 他规定了一些标签的名称，不能随便扩展
  - html代码经过浏览器解析形成dom结构
  - dom实际上是浏览器内存里面初始化好的一种树的结构

### 3.2. DOM节点操作
#### 3.3.1 获取DOM节点
- 获取DOM节点
  - 代码示例
    ```html
    <div id="div1" class="container">
      <p>111</p>
      <p>222</p>
      <p class="p3">333</p>
    </div>
 
    <script>
      // 获取DOM节点
      const div1 = document.getElementById('div1')
      const divList = document.getElementsByTagName('div');
      const containerList = document.getElementsByClassName('container');
      const p3 = document.querySelector('.p3');  // css选择器
      const pList = document.querySelectorAll('p');

      console.log("div1", div1);
      console.log("divlist", divList);
      console.log("containerList", containerList);
      console.log("p3", p3);
      console.log("pList", pList);
    </script>
    ```

#### 3.3.2. 节点属性
- 简述
  - attribute => attr => 属性
    - 他是真正作用到dom结构里面去的
    - 修改标签属性
  - property => 属性
    - 修改的是js变量的属性
    - 不会对标签产生什么影响
- DOM节点的property
  - 代码示例
    ```html
    <div id="div1" class="container">
      <p style="color: #f00;" class="tp">111</p>
      <p>222</p>
      <p class="p3">333</p>
    </div>

    <script>
      const pList = document.querySelectorAll('p')
      const p = pList[0]
      console.log(p.style, p.style.color)  // 获取样式
      p.style.color = '#f0f'  // 修改样式
      console.log(p.className);  // 获取class
      p.className = 'p1'  // 修改class

      // 获取nodeName和nodeType
      console.log(p.nodeName);  // 标签
      console.log(p.nodeType);  // 类型 => 普通dom节点类型为1 
    </script>
    ```
- DOM节点的attribute
  - 代码示例
    ```html
    <div id="div1" class="container">
      <p style="color: #f00;" class="tp">111</p>
      <p>222</p>
      <p class="p3">333</p>
    </div>

    <script>
      // DOM节点的attribute - 直接修改html结构
      const pList = document.querySelectorAll('p');
      const p = pList[0]
      p.setAttribute('data-name', 'imooc')
      console.log(p.getAttribute('data-name'))
      p.setAttribute('style', 'font-size:30px')
      console.log(p.getAttribute('style'))
    </script>
    ```
- 总结
  - property：修改对象属性，不会体现到html结构中
  - attribute：修改html属性，会改变html结构
  - 两者都有可能引起DOM重新渲染
  - 尽量用property操作
    - attribute一旦改了html结构，肯定会渲染 => 耗性能
    - property会避免一些不必要的渲染

### 3.3. DOM结构操作
- 代码示例
  ```html
  <div id="div1" class="container">
    <p style="color: #f00;" class="tp">111</p>
    <p id="p2">p222</p>
    <p class="p3">333</p>
  </div>

  <script>
    /**
     * 新增/插入节点
     */ 
    const div1 = document.getElementById('div1')
    // 添加新节点
    const p1 = document.createElement('p')
    p1.innerHTML = 'this is p1'
    div1.appendChild(p1)  // 添加新创建的元素
    // 移动已有节点 => 注意是移动
    const p2 = document.getElementById('p2')
    div1.appendChild(p2)

    /**
     * 获取子元素列表、获取父元素
     */ 
    // 获取父元素
    console.log("获取父元素", p2.parentNode)

    // 获取子元素列表
    // 只有4个dom标签，实际显示8个
    // 里面多了4个text元素
    // 文本元素不是标签，是另外一直元素
    const div1ChildNodes = div1.childNodes
    console.log("获取子元素列表", div1ChildNodes);
    // 获取文本元素
    // 我们可以使用nodeName和nodeType判断它是不是普通的p标签
    console.log("获取文本元素", div1ChildNodes[0])
    console.log("获取文本元素", div1ChildNodes[0].nodeName)  // #text
    console.log("获取文本元素", div1ChildNodes[0].nodeType)  // 3 => 文本类型为3
    // 遍历p标签
    // 通过原型链方法变成数组,并过滤(数组的过滤是filter)
    const div1ChildNodesP = Array.prototype.slice.call(div1.childNodes).filter(child=> {
        // 如果是普通p标签
        if(child.nodeType === 1) {
            return true
        }
        return false
    })
    console.log("div1ChildNodesP", div1ChildNodesP);

    /**
     * 删除子元素
     */
    /* // const div1 = document.getElementById('div1')
    const child = div1.childNodes
    div1.removeChild(child[1]) */

    div1.removeChild(div1ChildNodesP[0])
  </script>
  ```

### 3.4. DOM性能
#### 3.4.1. 考点和简述
- 考点
  - DOM操作比较耗时，比较耗cpu，我们如何解决这个问题
- 简述
  - DOM操作非常"昂贵"，避免频繁地DOM操作
    - 即比较耗时，占用cpu会比较多
    - 会导致浏览器的重绘和重排，即重新渲染
    - 频繁操作可能会导致卡顿
  - 解决方法
    - 对DOM查询做缓存
    - 将频繁操作改为一次性操作

#### 3.4.2. DOM查询做缓存
- 代码示例
  ```html
  <div id="div1" class="container">
    <p style="color: #f00;" class="tp">111</p>
    <p>222</p>
    <p class="p3">333</p>
  </div>

  <script>
    // 不缓存dom查询结果
    for(let i=0; i<document.getElementsByTagName('p').length; i++) {
      // 每次循环都会计算length，频繁进行dom查询
      console.log("不缓存dom查询结果", document.getElementsByTagName('p')[i]);
    }

    // 缓存dom查询结果
    const pList = document.getElementsByTagName('p')
    const length = pList.length
    for(let i=0; i<length; i++) {
        // 缓存length，只进行一次dom查询
        console.log("缓存dom查询结果", pList[i])
    }

    // 问题？
    // 为什么浏览器不缓存呢
    // 因为js有可能操作dom
    // 如果我们在每次循环p标签，都对该标签进行修改，浏览器就没办法保证缓存之后的正确性了
  </script>
  ```

#### 3.4.3. 将频繁操作改为一次性操作
- 代码示例
  ```html
  <ul id="list"></ul>

  <script>
    const list = document.getElementById('list')
    // console.log(list)

    // 创建一个文档片段，此时还没有插入到 DOM 结构中
    const frag = document.createDocumentFragment();

    // 执行插入
    for(let i=0; i<10; i++) {
      const li = document.createElement('li')
      li.innerHTML = "List item " + i
      // list.appendChild(li)  // 这样就会频繁操作dom
      frag.appendChild(li)  // 先在文档片段中插入
    }

    // 都完成之后，再统一插入到 DOM 结构树中
    // 即将文档片段插入到DOM结构树中
    list.appendChild(frag)
  </script>
  ```

## 4. 面试题解答(总结)
- DOM是哪种数据结构
  - 树(DOM树)
- DOM操作的api
  - DOM节点操作
    - 获取DOM节点
      - getElementById、getElementsByTagName、getElementsByClassName、querySelector、querySelectorAll
    - 操作DOM节点
      - property => p.style.color
      - attribute => setAttribute(键值对)、getAttribute
  - DOM结构操作
- attr和property的区别
  - property：修改对象属性，不会体现到html结构中
  - attribute：修改html属性，会改变html结构
- 一次性插入多个DOM节点，考虑性能
  - 使用文档片段(createDocumentFragment)操作dom,最后将整个文档片段插入(appendChild)到dom树中
