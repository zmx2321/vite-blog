# 总结
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 知识体系回顾
### 1.1. css基础知识
- 布局
  - 盒模型
  - BFC
  - float
  - flex
- 定位
- 图文样式
- 移动端响应式
  - rem
  - media query
  - vw/vh
- 动画渐变

### 1.2. js基础知识
- 变量类型和计算
  - 值类型和引用类型
  - 类型判断
  - 逻辑运算
- 原型和原型链
  - class
  - 继承
  - 原型
  - 原型链
  - instance of
- 作用域和闭包
  - 作用域
  - 自由变量
  - 闭包
  - this
- 异步
  - 单线程
  - callback
  - 应用场景
  - promise
  - event-loop
  - async/await
  - 微任务/宏任务
- 模块化
  - ES6 Module

### 1.3. js Web api
- DOM
  - 树形结构
  - 节点操作
  - 属性
  - 树结构操作
  - 性能
- BOM
  - navigator
  - screen
  - location
  - history
- 事件
  - 绑定
  - 冒泡
  - 代理
- ajax
  - XMLHttpRequest
  - 状态码
  - 跨域
- 存储
  - cookie
  - localStroage
  - sessionStroage

### 1.4. http协议
- 状态码
- method
- Restful Api
- headers
- 缓存策略

### 1.5. 开发环境
- git
- 调试
- webpack和babel
- linux命令

### 1.6. 运行环境
- 页面加载
  - 加载
  - 渲染
- 性能优化
  - 加载资源优化
  - 渲染优化
- 安全
  - xss攻击
  - csrf攻击

## 2. 面试题回顾
### 2.1. html面试题
- 如何理解HTML语义化
- 默认情况下，哪些html标签是块级元素，哪些是内联元素

### 2.1. css面试题
- 布局
  - 盒子模型的宽度如何计算
  - margin纵向重叠的问题
  - margin负值问题
  - BFC理解和应用
  - float布局的问题，以及clearfix
  - flex画色子
- 定位
  - absolute和relative分别依据什么定位
  - 居中对齐有哪些实现方式
- 图文样式
  - line-height的继承问题
- 响应式
  - rem是什么
  - 如何实现响应式

### 2.2. js面试题
- 变量类型和计算
  - typeof能判断哪些类型
  - 何时使用===，何时使用==
  - 值类型和引用类型的区别
  - 手写深拷贝
- 原型和原型链
  - 如何准确判断一个变量是不是数组
  - 手写一个简易的jquery，考虑插件和扩展性
  - class的原型本质，怎么理解
- 作用域和闭包
  - this在不同应用场景，如何取值
  - 手写bind函数
  - 实际开发中闭包的应用场景，举例说明
  - 场景题 => 创建10个a标签，点击的时候弹出对应的序号
- 异步
  - 同步和异步的区别是什么
  - 手写用promise加载一张图片
  - 前端使用异步的场景有哪些
  - 场景题 => setTimeout执行顺序、
    ```js
    console.log(1)
    setTimeout(function() {
      console.log(2)
    }, 1000)
    console.log(3)
    setTimeout(function() {
      console.log(4)
    }, 0)
    console.log(5)
    ```
- 异步进阶
  - 描述event loop(事件循环/事件轮询)机制(画图)
  - 什么是宏任务和微任务，两者有什么区别
  - promise有哪三种状态，如何变化
  - 场景题 => promise then和catch连接问题
    ```js
    // 第一题
    Promise.resolve().then(() => {
      console.log(1)
    }).catch(() => {
      console.log(2)
    }).then(() => {
      console.log(3)
    })

    // 第二题
    Promise.resolve().then(() => {  
      console.log(1)
      throw new Error('erro1')
    }).catch(() => {
      console.log(2)
    }).then(() => {
      console.log(3)
    })

    // 第三题
    Promise.resolve().then(() => {
      console.log(1)
      throw new Error('erro1')
    }).catch(() => {
      console.log(2)
    }).catch(() => {
      console.log(3)
    })
    ```
  - 场景题 => async/await语法
    ```js
    // 题目一
    async function fn() {
      return 100
    }
    (async function() {
      const a = fn()  // ??
      const b = await fn()  // ??
    })

    // 题目二
    (async function() {
      console.log('start')
      const a = await 100
      console.log('a', a)
      const b = await Promise.resolve(200)
      console.log('b', b)
      const c = await Promise.reject(300)
      console.log('c', c)
      console.log('end')
    })  // 执行完毕，打印出哪些内容
    ```
  - 场景题 => promise和setTimeout的顺序 => 经典题
    ```js
    console.log(100)
    setTimeout(()=> {
      console.log(200)
    })
    Promise.resolve().then(()=> {
      console.log(300)
    })
    console.log(400)
    ```
  - 场景题 => 综合题 => 经典题
    ```js
    async function async1() {
      console.log('async1 start')
      await async2()
      console.log('async1 end')
    }
    async function async2 () {
      console.log('async2')
    }
    console.log('script start')
    setTimeout(function() {
      console.log('setTimeout');
    }, 0)

    async1()

    new Promise(function(resolve) {
      console.log('promise1')
      resolve()
    }).then(function() {
      console.log('promise2')
    })

    console.log('script end');
    ```

### 2.3. DOM面试题
- DOM是哪种数据结构
  - 树形结构
- DOM操作的常用api
  - 节点的增删改查
- attr和property的区别
- 一次性插入多个DOM节点，考虑性能

### 2.4. BOM面试题
- 如何识别浏览器的类型
- 分析拆解url各个部分

### 2.5. 事件面试题
- 编写一个通用的事件监听函数
  - 支持普通的事件，以及代理(委托)
- 描述事件冒泡的流程
- 无线下拉的图片列表，如何监听每个图片的点击

### 2.6. ajax面试题
- 手写一个简易的ajax
- 跨域常用的实现方式

### 2.7. 存储面试题
- 描述cookie、localStroage、sessionStroage的区别

### 2.8. 页面加载过程面试题
- 从输入url到渲染出页面的整个过程
- window.onload和DOMContentLoaded的区别

### 2.9. 性能优化面试题
- 前端常见性能优化方案
- 手写节流和防抖(体验优化)

### 2.10. 安全面试题
- web前端常见的安全攻击方式和预防

### 2.11. http面试题
- http常见的状态码有哪些
- http常见的header有哪些
- 什么是restful api
- 描述一下http的缓存机制(重点)

## 3. 其他(基础知识总结)
> 4 ~ 7
### 3.1. 回顾内容
- 变量的类型和计算
- 原型和原型链
- 作用域和闭包
- 异步和单线程

### 3.2. 回顾题目
#### 3.2.1. 变量的类型和计算
- typeof 能判断哪些类型
- 何时使用===，何时使用==
- 值类型和引用类型的区别
- 手写深拷贝

#### 3.2.2. 原型和原型链
- 如何准确判断一个变量是不是数组
- 手写一个简易的jQuery，考虑插件和扩展性
- class的原型本质，怎么理解

#### 3.2.3. 作用域和闭包
- this的不同应用场景，如何取值
- 手写bind函数
- 实际开发中的应用场景，举例说明（隐藏数据只提供api的函数）
- 创建a标签，点击标签弹出对应序号

#### 3.2.4. 异步和单线程
- 同步和异步的区别是什么
- 手写promise加载一张图片
- 前端使用异步的场景有哪些
- setTimeout场景题

### 3.3. 回顾知识点
#### 3.3.1. 变量的类型和计算
- 值类型 vs 引用类型，堆栈模型，深拷贝
- typeof 运算符
- 类型转换，truly和falsely变量

#### 3.3.2. 原型和原型链
- class和继承，结合手写jQuery的示例来理解
- instanceof本质是什么(结合原型链)
- 原型和原型链：图示 & 执行规则(通过隐式原型一步步往上找)

#### 3.3.3. 作用域和闭包
- 作用域和自由变量
- 两种常见方式 & 自由变量查找规则(在函数定义的地方往上查找)
- this

#### 3.3.4. 异步和单线程
- 单线程和异步，异步和同步区别
- 前端异步的应用场景: 网络请求&定时任务
- Promise解决callback hell(回调地狱)
