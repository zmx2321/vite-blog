# 如何让`const [a,b] = {a:1,b:2}`这行代码成立

- 根据报错信息得知，是类型错误，因为{a:1,b:2}不是可迭代的。
- es6里面有一个可迭代协议，大体意思是，只要一个对象有一个属性【symbol.iterator】且它是一个函数，且返回一个迭代器，那么这个对象即可迭代。
- 解构赋值左边会得到右边的迭代器，不要求右边一定是数组，只要是可迭代对象即可 

- 常见的可迭代对象就是数组，是因为数组里面有一个迭代器，可以在通过 console.log 打印看到数组的 prototype 属性上面的迭代器，如下图所示：
- 那么，只需给上面那个 {a:1,b:2} 加一个迭代器
```js
// 给对象原型上加一个属性【symbol.iterator】，让它等于一个函数，且这个函数返回一个迭代器，其实就是按照es6的可迭代协议进行操作

Object.prototype[Symbol.iterator] = function(){

  return Object.values(this)[Symbol.iterator]() //调用数组的迭代器

}
```