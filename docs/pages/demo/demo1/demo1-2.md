# demo1-2
# JS基础-变量类型和计算
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/4.html)

## 1. 题目
- typeof能判断哪些类型
- 何时使用===，何时使用==
- 值类型和引用类型的区别
- 手写深拷贝
  - 引用类型的赋值需要使用深拷贝
  - 递归
- 字符串拼接
- if语句和逻辑运算

## 2. 知识点
### 2.1. 变量类型
#### 2.1.1. 值类型 vs 引用类型
- 值类型
  - 例子
  ```js
  // 值类型
  let a = 100;
  let b = a;
  a = 200;

  console.log(b);  // 100
  ```
  - 知识点
    - 值类型只要一块单独的内存，用于存储实际的数据
    - 堆和栈在内存中同时存在
    - 栈内存是从上往下排列
    - 堆内存是从下往上排列
    - 一般情况下不会重合
  - 常见的值类型
  ```js
  let a  // undefined  const定义必须有值
  const s = 'abc'
  const n = 100
  const b = true
  const s = Symbol('s')  // Symbol 可以创建一个独一无二的值（但并不是字符串）
  ```
  - Symbol
  ```js
  // 这个名字跟 Symbol 的值并没有关系，你可以认为这个名字就是个注释
  // Symbol 生成一个全局唯一的值
  var a1 = Symbol('a')
  var a2 = Symbol('a')
  a1 !== a2 // true
  ```

- 引用类型
  - 例子
  ```js
  // 引用类型
  let a = {
    age: 20
  }

  let b = a;

  b.age = 21

  console.log(a.age);  // 21
  ```
  - 知识点
    - 引用类型需要两段内存：1.引用存放在栈中 2.实际数据在堆中
    - 以上程序在栈中的体现实际上是 a => 内存地址1
    - 在堆中的体现是 内存地址1：{age:20}
    - 当a赋值给b的时候，实际上只是把内存地址1赋值给了b
    - 当b改变了对象中的值，实际上是改变了堆内存中a和b共有的内存地址1
    - 最后输出a.age的时候，此时的内存地址1已经被改变
  - 常见的引用类型
  ```js
  const obj = { x: 100 }
  const arr = ['a', 'b', 'c']

  const n = null  // 特殊引用类型，指针指向为空地址

  // 特殊引用类型，但不用于存储数据，所以没有"拷贝、复制函数"这一说
  // 把函数作为第三种类型也没有问题
  function fn() {}
  ```

- 深入分析
  - 为什么引用类型需要有堆内存，主要还是考虑到性能的问题
    - 值类型他占用的空间是比较少的，所以可以直接赋值
    - 引用类型，以json为例，可能数据量非常庞大
  
#### 2.1.2. typeof 运算符
- 识别所有值类型
```js
let a     
const s = 'abc'
const n = 100
const b = true
const s = Symbol('s')

typeof a //  'undefind'
typeof s //  'string'
typeof n //  'number'
typeof b //  'boolean'
typeof s //  'symbol'  
```
- 识别函数
```js
// 能判断函数
typeof console.log  // 'function'
typeof function() {}  // 'function'
```
- 判断是否是引用类型(不可再细分)
```js
// 能识别引用类型(但不能继续识别)
typeof null  // 'object'
typeof ['a', 'b']  // 'object'
typeof { x: 100 }  // 'object'
```

#### 2.1.3. 深拷贝
```js
const obj1 = {
  age: 20,
  name: "xxx",
  address: {
    city: "beijing"
  },
  arr: ["a", "b", "c"]
}

// 浅拷贝
const obj2 = obj1  
obj2.address.city = "shanghai"
console.log(obj1.address.city)

/**
 * 深拷贝
 * obj => 要拷贝的对象
 */
const deepClone = (obj = {})=> {
  // obj是null，或者不是对象或数组，直接返回
  if(typeof obj !== 'object' || obj == null) {
    // 递归里面，如果是值，直接返回
    return obj;
  }

  // 递归中如果遇到对象里面的值是对象或者数组，走下面的逻辑
  // 初始化返回结果
  let result;
  // 判断是否是数组
  if(obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  // 无论对象还是数组，都可以使用for in遍历
  for(let key in obj) {
    // 判断这个key是不是这个对象自身所拥有的属性
    // 保证key不是原型的属性
    if(obj.hasOwnProperty(key)) {
      // 递归(重点)
      // obj[key]表示值
      // 递归是为了防止对象中有深层次的东西，因为你不知道要拷贝的对象中有多少层
      result[key] = deepClone(obj[key]);
    }
  }

  // 返回结果
  return result
}
const obj3 = deepClone(obj1);
```

### 2.2. 变量计算
#### 2.2.1. 类型转换
- 字符串拼接
  - 示例
  ```js
  const a = 100+10  // 110
  const b = 100+'10'  // '10010'
  const c = true + '10'  // 'true10'
  ```
- ==
  - 他会尽量让他们转换之后去判断相等
  - 示例
  ```js
  100 == '100'  // true  
  0 == ''  // true  0和''都可以转换成false
  0 == false  // true
  false == ''  // true
  null == undefind  // true  
  ```
  - 使用情景
    - 除了 == null 之外，其他一律用 === 
    ```js
    const obj = { x: 100 }
    if(obj.a == null) {}
    
    // 相当于：
    // if(obj.a===null || obj.a===undefind){}
    ```
- if语句和逻辑运算
  - truly变量：!!a === true的变量
  - falsely变量: !!a === false的变量
  - 以下是falsely变量，除此之外都是truly变量
  ```js
  !!0 === false
  !!NaN === false
  !!'' === false
  !!null === false
  !!undefined === false
  !!false === false

  !!1 === true
  ......
  ```
  - if语句
    - 实际上if语句他判断的就是truly变量和falsely变量
    - truly 变量(会走到if中)
    ```js
    const a = true
    if(a) {
      // ...
    }

    const b = 100
    if(b) {
      // ...
    }
    ```
    - falsely变量(不会走到if中)
    ```js
    const c = ''
    if(c) {
      // ...
    }

    const d = null
    if(d) {
      // ...
    }

    let e
    if(e) {
      // ...
    }
    ```
  - 逻辑判断
    - ||  && 会对第一个值进行布尔值运算
    - ||
      - 当第一个值为true时，返回第一个值
      - 当第一个值为false时，返回第二个值 (注意不是布尔值)
    - &&
      - 当第一个值true时，返回第二个值
      - 当第一个值为false时， 返回第一个值
    - 示例
    ```js
    console.log(10 && 0)  // 0  10是truly变量，继续往后判断，返回第二个值
    console.log("" || "abc")  // "abc"   ""是falsely变量，继续往后判断，返回第二个值
    console.log(!window.abc)  // true  取反

    console.log(0 && 10)  // 0是falsely变量，直接返回
    console.log("abc" || "")  // abc是truly变量，直接返回
    ```

## 3. 面试题解答(总结)
- typeof能判断哪些类型
  - 识别所有值类型 => undefind、number、string、symbol、boolean
  - 识别函数
  - 判断是否是引用类型(不可再细分 object)
- 何时使用===，何时使用==
  - 除了 == null之外，其他一律用 ===
  - x == null  =>  x === null || x === undefind
- 值类型和引用类型的区别
  - 值类型可以直接赋值
  - 引用类型直接赋值实际上是赋值内存地址
- 手写深拷贝
  - 注意判断值类型和引用类型
    - 引用类型就需要递归
  - 注意判断数组还是对象
    - 引用类型可能是数组或者对象
  - 递归
    - 深拷贝逻辑上最核心的一个点

---
<br />

<font color="#666" size="5">\~End~</font>