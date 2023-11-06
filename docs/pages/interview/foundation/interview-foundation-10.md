# JS-Web-API-BOM
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/10.html)

## 1. BOM简述
> 内容虽然不多，但不能不会
- BOM操作
  - Browser Object Model => 浏览器对象模型
  - 和浏览器相关即客户端相关的东西

## 2. 题目
- 如何识别浏览器类型
  - 移动端比较常见，微信微博……
  - 分析拆解url各个部分

## 3. 知识点
### 3.1. 大纲
- <font color=#f00>navigator</font>
  - 浏览器信息 => 简称ua
- screen
  - 屏幕信息(宽、高)
- <font color=#f00>location</font>
  - url地址信息
- history
  - 前进、后退

### 3.2. 举栗子
- navigator和screen
```js
// navigator
// 因为历史原因，userAgent里面的东西会很多，只能粗略地检测
const ua = navigator.userAgent;
const isChrome = ua.indexOf('Chrome');
console.log(isChrome);  // 76

// screen
console.log(screen.width);
console.log(screen.height);
```
- location和history
```js
// location相关
console.log(location.href);  // 获取完整地址
console.log(location.protocol);  // 获取协议 http还是https
console.log(location.pathname);  // 域名
console.log(location.search);  // 查询参数(?后面)
console.log(location.hash);  // 哈希值，即#后面的东西

// history
history.back();  // 后退
history.forward();  // 前进
```
