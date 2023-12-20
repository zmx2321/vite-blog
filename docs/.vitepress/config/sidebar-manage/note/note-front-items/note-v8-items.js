/**
 * v8学习笔记
 */
const baseUrl = "/pages/note/front/v8-note";

module.exports = [
  {
    text: "v8学习笔记",
    items: [],
  },
  {
    text: "",
    items: [
      { text: "简单介绍v8", link: `${baseUrl}/v8-note-1` },
      { text: "简单介绍v8的执行", link: `${baseUrl}/v8-note-2` },
    ],
  },
  {
    text: "JavaScript设计思想",
    items: [
      { text: "JavaScript的特性", link: `${baseUrl}/v8-note-3` },
      { text: "V8如何提升对象属性访问速度", link: `${baseUrl}/v8-note-4` },
      { text: "函数表达式", link: `${baseUrl}/v8-note-5` },
      { text: "V8是如何实现对象继承的", link: `${baseUrl}/v8-note-6` },
      { text: "V8是如何查找变量的", link: `${baseUrl}/v8-note-7` },
      { text: "JavaScript 中的“类型系统”", link: `${baseUrl}/v8-note-8` },
      { text: "如何构建和使用V8的调试工具d8", link: `${baseUrl}/v8-note-9` },
    ],
  },
  {
    text: "V8编译流水线",
    items: [
      { text: "运行JavaScript代码的基石", link: `${baseUrl}/v8-note-10` },
      { text: "二进制机器码究竟是如何被CPU执行的", link: `${baseUrl}/v8-note-11` },
      { text: "函数调用是如何影响到内存布局的", link: `${baseUrl}/v8-note-12` },
      { text: "V8是如何实现闭包的", link: `${baseUrl}/v8-note-13` },
      { text: "V8为什么又重新引入字节码", link: `${baseUrl}/v8-note-14` },
      { text: "解释器是如何解释执行字节码的", link: `${baseUrl}/v8-note-15` },
      { text: "如何在内存中快速查找对象属性", link: `${baseUrl}/v8-note-16` },
      { text: "V8是怎么通过内联缓存来提升函数执行效率的", link: `${baseUrl}/v8-note-17` },
    ],
  },
  {
    text: "事件循环和垃圾回收",
    items: [
      { text: "V8是怎么实现回调函数的", link: `${baseUrl}/v8-note-18` },
      { text: "V8是如何实现微任务的", link: `${baseUrl}/v8-note-19` },
      { text: "V8是如何实现async/await的", link: `${baseUrl}/v8-note-20` },
      { text: "V8的两个垃圾回收器是如何工作的", link: `${baseUrl}/v8-note-21` },
      { text: "V8是如何优化垃圾回收器执行效率的", link: `${baseUrl}/v8-note-22` },
      { text: "几种常见内存问题的解决策略", link: `${baseUrl}/v8-note-23` },
    ],
  },
];
