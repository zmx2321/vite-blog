# JS-Web-API-存储
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/13.html)

## 1. 题目
- 描述cookie、localStorage、sessionStorage区别
  - cookie应该算是http请求的一部分，但他具备这种能力

## 2. 知识点
### 2.1. cookie
- 简述
  - cookie本身用于浏览器和server通讯
  - 最初的的时候是被"借用"到本地存储来
    - 因为html5之前还没有localStorage和sessionStorage(2010)
  - 可用`document.cookie="..."来修改`
    - 浏览器中在application中可以看到cookie，本地存储
    - 以分号拆分出来，以键值对的展现方式，一行行展现
  - 后端也可以修改cookie
    - 浏览器中在network中可以看到请求头里面也有cookie
    - 即浏览器(本地)和服务端通讯
    - 可以每次请求都会把cookie带上
    - 字符串的形式，以分号分割
- 代码示例
  ```js
  // cookie以分号分割，以键值对的形式存储
  // cookie只能赋值一个
  document.cookie = "a=100;b=200"  // 设置cookie
  console.log("cookie", document.cookie)  // 获取cookie a=100
  document.cookie = "b=200"
  console.log("cookie", document.cookie)  // a=100;b=200
  // 同一个key会覆盖,不同key会追加
  document.cookie = "b=300"
  console.log("cookie", document.cookie)  // a=100;b=300
  ```
  - 登陆的时候经常会用cookie实现
    - 在请求头里面假如有个userid，服务端可以获取到这个值，就知道这个用户了
  - 只要cookie不清除，刷新cookie依旧存在，所以可以做本地存储
  - 在html5之前唯一能做本地存储的api
  - 但cookie最初的设定不是做本地存储，主要用来浏览器和服务端进行通讯
    - 只是被借用来做本地存储
- cookie缺点
  - 存储大小，最大4kb
    - 如果每次请求都把cookie带上，存储的值很多，网速又慢，会很麻烦
  - http请求时需要发送到服务端，增加请求数据量
    - cookie做本地存储的话，存的东西在每次请求的时候都会被带到服务器上去
  - 只能用`document.cookie="..."`修改，太过简陋

### 2.2. localStorage和sessionStorage
- 简述
  - HTML5专门为存储设计的，最大可存5M
    - 5M是针对每个域名来说的
  - API简单易用 => setItem、getItem
    - 很多key...value...的库，都是用get、set这种形式的api
  - 不会随http请求被发送出去
- 代码示例
  ```js
  // 存储的都是字符串的形式
  localStorage.setItem('a', 100)  // 设置localStorage
  console.log('localStorage', localStorage.getItem('a'));  // 获取localStorage

  sessionStorage.setItem('a', 200)  // 设置sessionStorage
  console.log('sessionStorage', sessionStorage.getItem('a'));  // 获取sessionStorage
  ```
- 区别
  - localStorage数据会永久存储，除非代码或手动删除
  - sessionStorage数据只存在于当前会话，浏览器关闭则清空
  - 一般用localStorage会更多一些
