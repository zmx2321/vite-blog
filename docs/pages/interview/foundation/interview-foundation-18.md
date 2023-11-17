# 高频面试真题

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/18.html)

 ## 1. 简述
- 验证和复习之前学过的知识
- 在之前的知识体系里面补充其他技能
  - 占的比重不是很大，是纯api的东西，并不是成体系的
  - 游离于整体知识体系，但很重要
  - 如正则表达式、数组api等
- 题目没有按照知识点或者难度排序(混排)
  - 面试题按照组来，每组三个
- 只筛选了初级面试题，即本系列笔记知识体系之内的

## 2. 第1组面试题
### 2.1. 题目
- var和let、const的区别
- typeof返回哪些类型
- 列举强制类型转换和隐式类型转换

### 2.2. var和let、const的区别
- 答案
  - var是ES5及其之前的语法，let、const是es6语法；var有变量提升
  - var和let是变量，可修改；const是常量，不可修改
  - let、const有块级作用域，var没有
    - 块级作用域是es6的特点
- 代码演示
  ```js
  /**
   * 变量提升 只有ES5及其以下有
   * es5语法只有用var定义变量，如果定义变量，
   * 他会把这个变量提前拎出来，并声明成undefined
   */
  // 使用var 
  // console.log(a) // undefined
  // var a = 200
  /*
    // 即变形为
    var a
    console.log(a) // undefined
    a = 200
  */
  
  // 使用let
  // console.log(a) // 报错
  // let a = 200

  /**
   * 块级作用域 es6特有
   */
  for (let i = 0; i < 10; i++) {
    let j = i + 1
    // var j = i + 1  // 有值
  }
  console.log(j)
  ```
- 延伸
  - 函数表达式有些类似变量提升，这个后面再说

### 2.3. typeof返回哪些类型
- 答案
  - 值类型：undefined、string、number、boolean、symbol
  - 引用类型：object => 无法具体细分(对象或者数组)
    - 注意：`typeof null === 'object'`
  - 方法：function
    - 具有引用类型特点，但一般不作为引用类型的数据使用
    - 因为function是作为一个可执行的工具去使用的
    - 一般做数据存储或者变量定义的时候，我们一般会定义值类型或者引用类型(对象或者数组)，存储代码中的变量或者说是数据
    - 很少在函数里面存储数据，函数是一个可执行的工具

### 2.4. 列举强制类型转换和隐式类型转换
- 答案：
  - 强制类型转换：parseInt、parseFloat、toString等
  - 隐式类型转换：if、逻辑运算、==、+拼接字符串

## 3. 第2组面试题
### 3.1. 题目
- 手写深度比较、模拟lodash isEqual
  - 两个地址不一样对象，层次比较深，怎么去比较，可能里面属性是一样的
- split()和join()的区别
  - 基本字符串操作
- 数组的pop、push、unshift、shift分别做什么
  - 基本数组操作

### 3.2. 手写深度比较
- 场景
  ```js
  // 实现如下效果
  const obj1 = {a:10, b:{x:100, y:200}}
  const obj2 = {a:10, b:{x:100, y:200}}
  isEqual(obj1, obj2) === true
  ```
- 答案
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/对象深度比较.html)
  ```js
  const obj1 = {a:10, b:{x:100, y:200}}
  const obj2 = {a:10, b:{x:100, y:200}}
  // console.log(obj1, obj2);  // false

  // 判断是否是对象或数组
  const isObj = obj=> {
    return typeof obj === 'object' && obj !== null
  }

  // 实现对象深度比较
  const isEqual = (obj1, obj2)=> {
    // console.log(obj1, obj2)

    // 判断参数是否是对象
    // 也在递归的时候用
    // isEqual(100, 100)
    if(!isObj(obj1) || !isObj(obj2)) {
      // 参与equal的一般不是函数，一般是数据
      // 不是对象就是值类型，可以直接比较
      return obj1 === obj2
    }

    // 如果两个对象相等(obj1 === obj1)
    if(obj1 === obj2) {
      return true
    }

    // 两个都是引用类型(对象或数组)，且两者地址不同
    // 深度比较全相等
    // 步骤：
    /**
     * 1. 先取出obj1和obj2的keys，比较个数，个数不一样直接false
     * 2. 个数相等，以obj1为基准，和obj2依次递归比较
     * 3. 全部遍历完，没有遇到false，就是全相等
     */
    // 取出keys
    // 如果是数组，可以获取它的索引下标
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)

    // 个数不相等
    if(obj1Keys.length !== obj2Keys.length) {
      return false
    }

    // 个数相等，以obj1为基准，和obj2依次递归比较
    // for in 对象数组都适用
    for(let key in obj1) {
      // 比较当前key的value => 递归
      // 拿到obj1里面的值，和obj2里面的值，进入该方法
      // 该方法里面有值的比较
      // isEqual(100, 100)
      // 拿到值比较的布尔值
      // 遇到对象，再进行遍历，再到值的比较
      const res = isEqual(obj1[key], obj2[key])

      // 有值不相等
      if(!res) {
        return false
      }
    }

    // 遍历完没有遇到false，就是全相等
    return true
  }

  // 结果
  console.log("实现对象深度比较", isEqual(obj1, obj2))  // true
  ```

### 3.3. split()和join()的区别
- 答案
  ```js
  // 将字符串以-分割，形成数组
  let arrRes = '1-2-2'.split('-')
  console.log(arrRes)  // ["1", "2", "2"]

  // 将数组以-拼接，形成字符串
  let strRes= [1, 2, 3].join('-')
  console.log(strRes);  // 1-2-3
  ```

### 3.4. 数组的pop、push、unshift、shift分别做什么
- 解答思路
  - 功能是什么
  - 返回值是什么
  - 是否会对原数组造成影响
- 答案
  - pop
    - 刨除数组最后一项
    - 返回数组最后一项
    - 会改变原数组
  - shift
    - 刨除数组第一项
    - 返回数组第一项
    - 会改变原数组
  - push
    - 往后追加
    - 返回 length
    - 会改变原数组
  - unshift
    - 往前追加
    - 返回 length
    - 会改变原数组
- 延伸
  - 数组操作分纯函数和非纯函数
  - 纯函数的要求
    - 不改变源数组（没有副作用）
    - 有返回值，且函数的返回结果只依赖于它的参数
    - 纯函数在react里面是一个特别重要的概念
  - 数组的api有哪些是纯函数
    - concat
    - map
    - filter
    - slice
  - 数组的api有哪些是非纯函数
    - push pop shift unshift
    - forEach => 它没有返回一个数组，没什么返回值
    - some => 不会改变原来数组的值，也不会返回值
    - every => 不会改变原来数组的值，也不会返回值
    - reduce => 不会改变原来数组的值，也不会返回值
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/数组基本操作.html)
  ```js
  // 定义数组
  const arr = [10, 20, 30, 40]

  /**
   * 面试题
   */
  // pop
  // 刨除数组最后一项并返回
  // 会改变原数组
  const popRes = arr.pop()
  console.log("pop", popRes, arr)  // 40  // [10, 20, 30]

  // shift
  // 刨除数组第一项并返回
  // 会改变原数组
  const shiftRes = arr.shift()
  console.log("shift", shiftRes, arr)  // 10  // [20, 30, 40]

  // push
  // 往后追加
  // 返回 length
  // 会改变原数组
  const pushRes = arr.push(50)
  console.log("push", pushRes, arr)  // 5  // [10, 20, 30, 40, 50]

  // unshift
  // 往前追加
  // 返回 length
  // 会改变原数组
  const unshiftRes = arr.unshift(5)
  console.log("unshift", unshiftRes, arr)  // 5  // [5, 10, 20, 30, 40]

  /**
   * 扩展 - 纯函数
   * 
   * 纯函数在react中应用广泛
   * 纯函数的要求
   * 1. 不改变源数组（没有副作用）
   * 2. 有返回值，且函数的返回结果只依赖于它的参数
   */
  // concat
  // 追加数组
  const arr1 = arr.concat([50, 60, 70])
  // [5, 20, 30, 50, 50, 60, 70]
  console.log("纯函数-concat", arr1, arr);  // 原数组不变

  // map
  // 遍历
  const arr2 = arr.map(num => num * 10)
  // [50, 200, 300, 500]
  console.log("纯函数-map", arr2, arr);  // 原数组不变

  // filter
  // 过滤数组
  const arr3 = arr.filter(num => num > 25)
  // [30, 50]
  console.log("纯函数-filter", arr3, arr);  // 原数组不变

  // slice
  // 截取数组 => 不传参数类似于深拷贝
  const arr4 = arr.slice()
  // [5, 20, 30, 50]
  console.log("纯函数-slice", arr4, arr);  // 原数组不变

  /**
   *  扩展 - 非纯函数
   */
  // push pop shift unshift 示例见上
  // 不会改变原来数组的值，也不会返回值
  // forEach
  // some 
  // every
  // reduce
  ```

## 4. 第3组面试题
### 4.1. 题目
- 数组slice和splice的区别
- `[10, 20, 30].map(parseInt)`返回结果是什么
- ajax请求get和post的区别

### 4.2. 数组slice和splice的区别
- 答案
  - 功能区别
    - slice => 切片
    - splice => 剪接
  - 参数和返回值
    - slice
      - slice的参数为数组下标(从开始下标到结束下标)
      - 返回值为数组，不改变原数组
    - splice
      - 第一个参数表示开始的下标，第二个参数表示长度，后面的参数是替换的内容
      - 返回值是数组，会改变原数组
  - 是否是纯函数
    - slice是纯函数
    - splice不是纯函数
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/数组slice和splice的区别.html)
  ```js
  // 定义数组
  const arr = [10, 20, 30, 40]

  /**
   * slice
   */
  // 不传参数类似于深拷贝
  // 是一个纯函数
  // 不改变源数组（没有副作用）
  // 有返回值，且函数的返回结果只依赖于它的参数
  let arr1 = arr.slice()
  console.log("不传参，类似深拷贝", arr1);  // [10, 20, 30, 40]

  // 从下标1开始截取，截取到下标3
  // arr.slice(startIndex, endIndex)
  let arr2 = arr.slice(1, 3)
  console.log("传参，开始和结束索引", arr2);  // [20, 30]

  // 如果不写结束索引，表示截取到最后
  // 从下标为1的索引开始截，截到最后
  let arr3 = arr.slice(1)
  console.log("只传一个参数，从某个索引截到最后", arr3);  // [20, 30, 40]

  // 从末尾开始截，截最后两个
  let arr4 = arr.slice(-2)
  console.log("从末尾开始截，截最后两个", arr4);  // [30, 40]

  /**
   *  splice
   */
  // 第一个参数表示开始的下标
  // 第二个参数表示长度
  // 后面的参数是替换的内容
  // 前面的两个参数表示需要被替换的区域
  // 后面的参数表示当前区域要被替换的内容
  // splice(startIndex, length, 替换的内容)
  // 相当于剪切，找到数组需要被剪切的范围，然后粘贴
  let spliceRes1 = arr.splice(1, 2, 'a', 'b', 'c')
  console.log("splice用法，相当于剪切粘贴", spliceRes1, arr)  // [20, 30]  // [10, "a", "b", "c", 40]

  // 如果后面参数不填，相当于删除中间部分
  arr = [10, 20, 30, 40]  // 因为上面的数组已经被修改了，这里重新定义
  let spliceRes2 = arr.splice(1, 2)
  console.log("只传两个参数，相当于删除", spliceRes2, arr)  // [20, 30]  // [10, 40]

  // 如果不需要移除，从某个位置添加若干元素
  arr = [10, 20, 30, 40]  // 因为上面的数组已经被修改了，这里重新定义
  let spliceRes3 = arr.splice(1, 0, 666, 2333, 555)
  console.log("不需要移除，从某个位置添加若干元素", spliceRes3, arr)  // []  // [10, 666, 2333, 555, 20, 30, 40]
  ```

### 4.3. `[10, 20, 30].map(parseInt)`返回结果是什么
- 解题思路
  - map的参数和返回值
    - map的参数是一个函数，返回值是一个数组
    - map参数中函数的参数，一个是item,一个是index
  - parseInt的参数和返回值
    - parseInt的参数第一个是具体的数和第二个是进制位
    - 返回值是一个整型
- 答案
  - `[10, NaN, NaN]`
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/数组的map.html)
  ```js
  // 他实际上算是简写
  // console.log([10, 20, 30].map(parseInt))  // [10, NaN, NaN]

  // 拆解 - 两个写法是一样的
  let res = [10, 20, 30].map((num, index)=> {
    // 第一个参数是数字，第二个参数是进制
    // 进制0和10是一样的
    // parseInt(10, 0)  // 10
    // parseInt(20, 1)  // NaN
    // parseInt(30, 2)  // NaN
    return parseInt(num, index)
  })
  console.log(res)
  ```

### 4.4. ajax请求get和post的区别
- get一般用于查询操作，post一般用于用户提交操作
- get参数拼接在url上，post放在请求体内(数据体积可更大)
- 安全性：post易于预防CSRF

## 5. 第4组面试题
### 5.1. 题目
- 函数call和apply的区别
- 事件代理(委托)是什么
- 闭包是什么，有什么特性，有什么负面影响

### 5.2. 函数call和apply的区别
- 答案
  - 他们的区别主要在参数上
  - 第一个参数是this，是一样的
  - call第二个的参数开始是一个一个拆分传进去的，即参数列表
  - 第一个参数是this要指向的对象，第二个参数是数组或类数组
    - fn.call(this, p1, p2, p3)
    - fn.apply(this, arguments)
  - 两个可以相互转换，但为了方便，js做了这两种形式
  ```js
  function fn(x, y){
    console.log(x, y)  // 
    console.log(this) // this是指obj
  }

  let obj = {
    a: "obj对象"
  }

  // 将this指向变成obj
  fn(1, 2)  // window, 1, 2
  fn.apply(obj, [1,2]) // 第二个参数是数组  // obj, 1, 2
  fn.call(obj, 1, 2) // 第二个参数开始时参数列表  // obj, 1, 2
  fn.bind(obj, 1, 2)()  // 和call一样，但是无法直接执行
  ```
- 延伸
  - call()的第一个参数是this要指向的对象，后面传入的是参数列表，参数可以是任意类型，当第一个参数为null、undefined的时候，默认指向window
  - call()改过this的指向后，会再执行函数，bind()改过this后，不执行函数，会返回一个绑定新this的函数
  - 即bind的传参和call一样，都是一个一个拆分传进去的，但是bind无法直接执行
  - 在判断数据类形式使用typeof，一般不是太准确的，我们可以使用Object.prototype.toString.call()方法来判断一个数据的数据类型
    - `console.log(Object.prototype.toString.call(12))`  // [object Number]
  - call、apply、bind的应用
    - demo包含之前面试题
    - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/函数call和apply的区别.html)
    ```js
    // call()、apply()、bind() 都是用来重定义 this 这个对象的

    /**
     * 面试题
     */
    function fn(x, y){
      console.log(x, y)  // 
      console.log(this) // this是指obj
    }

    let obj = {
      a: "obj对象"
    }

    // 将this指向变成obj
    fn(1, 2)  // window, 1, 2
    fn.apply(obj, [1,2]) // 第二个参数是数组  // obj, 1, 2
    fn.call(obj, 1, 2) // 第二个参数开始时参数列表  // obj, 1, 2
    fn.bind(obj, 1, 2)()  // 和call一样，但是无法直接执行

    /**
     * call()的应用
     */
    // 利用call()判断数据类型
    console.log(Object.prototype.toString.call("qq"))            // [Object String] 返回值都是字符串类型
    console.log(Object.prototype.toString.call(12))              // [object Number]
    console.log(Object.prototype.toString.call(false))           // [object Boolean]
    console.log(Object.prototype.toString.call(undefined))       // [object Undefined]
    console.log(Object.prototype.toString.call(null))            // [object Null]
    console.log(Object.prototype.toString.call(function(){}))    // [object Function]
    console.log(Object.prototype.toString.call([]))              // [object Array]
    console.log(Object.prototype.toString.call({}))              // [object Object]

    // 封装
    let getType = a=> {
      let obj = Object.prototype.toString.call(a); // 区分对象类型  确定当前的数据的类型
      let sub = obj.substr(8); 

      // stringObject.substr(start,length)  start 要抽取的子符串的起始下标，
      // length 截取的长度，如果不写则表示从start开始截取到最后 ，stringObject表示某一字符串
      let len = sub.length;
      sub = sub.substr(0,len-1)
      let rs =  sub.toLowerCase(sub) //转换成小写
      return rs ;
    }
    console.log(getType([])); // array

    // 利用call()翻转字符串
    // 思路:将字符串转化为数组，借用数组中的reverse，将字符串翻转过来
    let str = "abcdefg";
    // 方法一：这种方法内有使用call()
    let arr =  Array.from(str).reverse().join("") // 将字符串转化为数组，在进行翻转，然后在进行拼接
    console.log(arr, typeof arr) // gfedcba string
    // 方法二：
    let rs = Array.prototype.reverse.call(str.split("")).join(""); 
    // splice(start,length)方法用于把一个字符串分割成字符串数组，start 表示从指定的地方分割字符串，length表示分割的长度。
    // 返回一个一个字符串数组，如果把空字符串 ("") 用为参数那么字符串中的每个字符之间都会被分割
    console.log(rs, typeof arr) // gfedcba string

    // 利用apply()求最大值
    // apply()所执行的操作：1.执行Math.max(1,2,3,5,4) 2.把内部的this改成arr
    var arr1 =[2,6,8,3,4,9,7,23,56,889]; 
    // 改变this指向到math.max，给math.max传值
    console.log(Math.max.apply(arr1, arr1))  // 第一个arr表示让arr借用max这个方法，第二个arr表示传给max的数据
    ```

### 5.3. 事件代理(委托)是什么
- 答案
  - 我们在上层容器去(父级)定义一个事件
  - 根据冒泡机制和事件对象`(e.target)`去获取子集列表的元素
  - 使用`stopPropagation`取消冒泡
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/事件代理.html)
  ```js
  const p1 = document.getElementById('p1')
  const body = document.body

  // 通用的绑定函数 - 完整版
  /* let bindEvent = (elem, type, selector, fn)=> {
      if(fn == null) {
        fn = selector
        selector = null
      }

      // 绑定
      elem.addEventListener(type, event=> {
        const target = event.target  // 我们当前触发的元素
        // console.log("当前触发的元素", target)

        if(selector) {
          console.log("代理绑定");

          if(target.matches(selector)) {
            fn.call(target, event)
          }
        } else {
          console.log("普通绑定");

          fn.call(target, event)
        }
      })
  } */

  // 通用的绑定函数 - 简易版
  let bindEvent = (elem, type, fn)=> {
    elem.addEventListener(type, fn)
  }

  // p1
  bindEvent(p1, 'click', event => {
    event.stopPropagation() // 注释掉这一行可以体会冒泡
    console.log('激活')
    console.log(event.target, event.target.textContent)  // 需要知道是谁触发的
  })

  // body
  bindEvent(body, 'click', event => {
    console.log('取消')
    console.log(event.target, event.target.textContent)  // 需要知道是谁触发的
  })
  ```

### 5.4. 闭包是什么，有什么特性，有什么负面影响
- 答案
  - 闭包是什么
    - 回顾作用域和自由变量
    - 回顾闭包应用场景
      - 函数作为参数被传入
      - 函数作为返回值被返回
    - 自由变量的查找，要在函数定义的地方(作用域)(不是执行的地方)
    ```js
    /**
     * 理解闭包
     *
     * 跨了自己的作用域的变量都叫自由变量
     * 
     * js链式作用域：子对象会一级一级向上寻找所有父对象的变量，反之不行
     * f2可以读取f1中的变量，只要把f2作为返回值，就可以在f1外读取f1内部变量
     * 
     * 即闭包可用理解为
     * 能够读取其他函数内部变量的函数。
     * 或简单理解为定义在一个函数内部的函数，内部函数持有外部函数内变量的引用
     * 
     * 闭包用途
     * 1、读取函数内部的变量
     * 2、让这些变量的值始终保持在内存中。不会在f1调用后被自动清除。
     * 3、方便调用上下文的局部变量。利于代码封装。
     * 原因：f1是f2的父函数，f2被赋给了一个全局变量，f2始终存在内存中，f2的存在依赖f1，因此f1也始终存在内存中，不会在调用结束后，被垃圾回收机制回收。
     */
    function f1(){
      let n = 123;

      function f2(){    // f2是一个闭包
        console.log(n)  // 根据自由变量定义，可以拿到f1的变量
      }    

      return f2;
    }

    let res = f1()  // res是一个方法
    console.log(res)
    res()  // 执行res可用获取f1变量值
    ```
  - 闭包有什么负面影响
    - 变量会常驻内存，得不到释放 => 闭包不能乱用
    - 变量会常驻内存，并不一定是内存泄漏，闭包有可能造成内存泄漏，但不是一定会造成内存泄漏
    - 内存泄漏指的是，变量或者数据，在内存中，没有用了，应该被释放，但没有被释放
  - 闭包特性
    - 变量或者对象，在闭包中，他有可能是会被用到的，我们判断不了他未来是不是会被用到，所以我们不去释放它
    - 这不是一个bug，内存泄漏一般都是由bug造成的，但闭包是我们没法判断那个闭包的变量未来是否可用
- 延伸
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/闭包.html)
  - 闭包与内存
  ```js
  /**
   * 闭包与内存
   */
  // 自由变量示例 - 内存会被释放
  // 这段代码执行完，所有的内存都释放了
  let a = 0 // fn1函数执行完，a变量和fn1就被释放
  function fn1() {
    let a1 = 100  // fn2函数执行完，a1变量和fn2被释放

    function fn2() {
      let a2 = 200  // fn3函数执行完，a2、a3变量、fn3被释放

      function fn3() {
        let a3 = 300

        // 在这一步，所有的变量和方法还没有被释放调
        // 因为这些变量都还没用过
        return a + a1 + a2 + a3
      }
      fn3()
    }
    fn2()
  }
  fn1()

  // 闭包 - 函数作为返回值 - 内存不会被释放
  const create = ()=> {
    let a = 100

    // 函数作为返回值被返回
    return function() {
      // a在父级作用域定义，在子方法作用域被使用，跨作用域，属于自由变量
      // 由于这里使用了a这个自由变量，那么父作用域的a就不能被释放了
      // 这个a的定义必须要和方法(闭包作用域)一起被return
      // 这个a已经是闭包的变量了
      console.log(a)  
    }
  }

  let fn = create()
  a = 200  // 这个没有人用它，可以被释放
  fn()  // 100

  // 闭包 - 函数作为参数被传入
  let print = fn2=> {
    let b = 200  // 这里没有使用，会被释放
    fn2()
  }
  let b = 100
  let fn2 = ()=> {
    console.log("b", b)
  }
  print(fn2)  // 100
  ```

## 6. 第5组面试题
### 6.1. 题目
- 如何阻止事件冒泡和默认行为
- 查找、添加、删除、移动DOM节点的方法
- 如何减少DOM操作

### 6.2. 如何阻止事件冒泡和默认行为
- 答案
  - event => 事件对象
  - 阻止冒泡：`event.stopPropagation()`
  - 阻止默认行为`event.preventDefault()`
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/阻止事件冒泡和默认行为.html)
  ```html
  <div id="div1">
      <a id="a1" href="#">a1</a><br>
      <a id="a2" href="https://www.baidu.com/">a2</a><br>
      <a href="#">a3</a><br>
      <a href="#">a4</a><br>
      <button>加载更多...</button>
  </div>

  <script>
    const body = document.body
    const div1 = document.getElementById('div1');
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');

    body.addEventListener('click', e=> {
      // 即a1触发冒泡到div1上，这里的e.target.textContent为a1
      // 即div1触发冒泡到body上，这里的e.target.textContent为div1里面所有的元素
      console.log('body clicked =>', e.target.textContent)
    })

    div1.addEventListener('click', e=> {
      // 冒泡的事件对象为触发的元素
      // 即a1触发冒泡到div1上，这里的e.target.textContent为a1
      console.log("div1 click =>", e.target.textContent)

      // 在这里使用阻止冒泡，就不会触发body上的点击事件
      // 如果不加阻止冒泡，会触发body上的点击事件
      // 如果不加阻止冒泡，点击button按钮，会打印
      // div1 click => 加载更多...
      // body clicked => 加载更多...
      // 不加则只会打印一个
      e.stopPropagation()  // 阻止冒泡

      // 阻止默认行为
      e.preventDefault()  // 地址无法跳转
    })

    a1.addEventListener('click', e=> {
      // 在这里使用阻止冒泡，就不会触发a1和body上的点击事件
      e.stopPropagation()  // 阻止冒泡

      console.log("a2 click =>", e.target.textContent)  
    })

    a2.addEventListener('click', e=> {
      // 点击a2可以触发div1和body的点击事件
      // 即a2的事件会一层一层往上冒泡，直到body上
      // a2 click => a2
      // div1 click => a2
      // body clicked => a2
      // 在div1处阻止冒泡，body事件无法触发
      console.log("a2 click =>", e.target.textContent, e.target, "标签不会跳转")  
    })
  </script>
  ```

### 6.3. 查找、添加、删除、移动DOM节点的方法
- 答案
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/查找、添加、删除、移动DOM节点的方法.html)
  - 查找节点
    - 基本的查找
      - document.getElementById()
      - document.getElementsByTagName()
      - document.getElementsByClassName()
      - document.querySelector()
      - document.querySelectorAll()
    - 查找父子元素
      - xxx.parentNode => 查找父元素
      - xxx.childNodes => 查找子元素（会查到标签和文本元素）
      ```html
      <div id="div1" class="container">
          <p id="p1">111</p>
          <p>p222</p>
          <p>333</p>
      </div>

      <script>
        /**
        * 查找父子元素
        */
        // 查找父元素
        const p1 = document.getElementById('p1')
        console.log(p1.parentNode)

        // 查找子元素
        const div1 = document.getElementById('div1')
        console.log(div1.childNodes)  // 复数

        // 查找子元素里面非#text的元素，即所有的p标签
        // 我们可以使用nodeName和nodeType判断它是不是普通的p标签
        const div1ChildNodesP = Array.prototype.slice.call(div1.childNodes).filter(child=> {
          // 如果是普通p标签
          // console.log(child.nodeName)  // p #text
          // console.log(child.nodeType)  // 1 3

          // 普通dom节点类型为1
          // 文本类型为3
          if(child.nodeType === 1) {
            return true
          }
          return false
        })
        console.log(div1ChildNodesP)  // dom数组
        // console.log(div1ChildNodesP[0].nodeName)  // p
      </script>
      ```
  - 添加节点
    - document.createElement()
    - xxx.appendChild()
    ```html
    <div id="div2"></div>

    <script>
      const div2 = document.getElementById('div2')
      // 添加新节点
      const div2p1 = document.createElement('p')  // 此时还未插入，只是定义
      div2p1.innerHTML = 'this is div2p1'  // 给这个元素加点内容
      div2.appendChild(div2p1)  // 添加新创建的元素到dom节点
    </script>
    ```
  - 删除节点
    - xxx.removeChild(xxxChild) => 删除子节点
    - xxx.remove() => 删除整个dom
    ```html
    <div id="div3">
      <a href="@">a1</a>
      <a href="@">a2</a>

      <div id="div3_1">
          div3_1内容
      </div>
    </div>

    <script>
      const div3 = document.getElementById('div3')
      const div3_a = div3.querySelector('a')  // 只获取第一个
      const div3_1 = div3.querySelector('#div3_1')
      // console.log(div3_a)
      console.log(div3_1)

      // 删除子节点
      div3.removeChild(div3_a)

      // 删除整个dom(div)
      div3_1.remove()
    </script>
    ```
  - 移动DOM节点
    ```html
    <div id="div4">
      <p id="div4p">div4p</p>
    </div>
    <div id="div5">
      div5内容
    </div>

    <script>
      const div4 = document.getElementById('div4')
      const div4p = div4.getElementsByTagName('p')[0]  // 获取dom标签
      // console.log(div4p)  

      const div5 = document.getElementById('div5')
      div5.appendChild(div4p)
    </script>
    ```
- 注意事项
  - 插入和移动看似是两个方法，但实际上api是一样的

### 6.4. 如何减少DOM操作
- 背景
  - dom操作非常消耗性能
- 答案
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/如何减少DOM操作.html)
  - 缓存dom查询结果
  ```html
  <div id="div1" class="container">
      <p>111</p>
      <p>222</p>
      <p>333</p>
  </div>

  <script>
    const div1 = document.getElementById('div1')
    const pList = div1.querySelectorAll('p')
    // console.log(pList)

    let length = pList.length
    for(let i=0; i<length; i++) {
      // 缓存length，只进行一次dom查询
      console.log("缓存dom查询结果", pList[i])
    }
  </script>
  ```
  - 多次dom操作，合并到一次插入(代码片段)
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
    list.appendChild(frag)
  </script>
  ```

## 7. 第6组面试题
### 7.1. 题目
- 解释jsonp原理，为何他不是真正的ajax
- document load和ready的区别
- ==和===的不同

### 7.2. 解释jsonp原理，为何他不是真正的ajax
- 答案
  - ajax是通过XMLHttpRequest这个api实现的，而jsonp是通过script标签实现的
  - jsonp的原理就是，定义一个全局函数，去访问一段js
  - 通过这个就可以明白，他不是一个ajax，他没有去使用XMLHttpRequest这个api
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/解释jsonp原理.html)
  
  ```html
  <script>
    // JSONP的callback是cbt，见下面src的cb
    window.cbt = function(data) {
      // 这是我们跨域得到的信息
      console.log("访问script的src获取数据", data)
    }
  </script>

  <script src="https://www.baidu.com/sugrec?&prod=pc&wd=mac笔记本&cb=cbt"></script>
  ```
- 延伸
  - 浏览器的同源策略(服务端没有同源策略)
    - 后端用nginx代理也可以算是一个跨域的解决方式
    - nginx其实算是服务端，服务端没有同源策略，服务端其实没有跨域这个说法
    - 如果按严格来说，nginx代理其实可以算是后端转发
    - 后端没有同源策略，所以不能说是跨域，应该说转发
  - 跨域(协议、域名、端口有一个不同就是跨域)
    - 为什么后端没有同源策略，前端，浏览器有同源策略
      - 安全问题，不同域不能有资源的访问
      - 后端没有同源策略，但他可以自己做一些预防
      - 因为后端代码是运行在服务器上的，可以对他做一些控制
      - 前端代码是运行在浏览器上的，所以这个控制得浏览器去做安全性的控制即同源策略
    - 要实现跨域，必须要得到服务端的支持和允许，不然就是非法的，无法请求数据
  - 哪些html标签能绕过跨域
    - img、script
    - 他可能会去请求一些外域的图片，或者使用cdn，必须要可以跨域
  - 实现一个简易的百度搜索功能(百度搜索用的是jsonp)
    ```html
    <div class="search_box">
        <input type="text" id="input1">
        <ul id="todolist"></ul>
    </div>

    <script src="../../js/lib/jquery1.8.3.min.js"></script>
    <script>
      // ajax请求
      const reqAns = (words, fn)=> {
        $.ajax({
          url: "https://www.baidu.com/sugrec",
          type: 'GET',
          dataType:"jsonp",
          data: {
            prod: "pc",
            wd: words,
          },
          success(data) {
            // console.log("ajax请求", data);

            let res = data.g

            fn(res)
          }
        })
      }

      // 防抖
      const debounce = (fn, delay = 500)=> {
        let timer = null;

        return function() {
          if(timer) {
            clearTimeout(timer)
          }

          timer = setTimeout(()=> {
            fn.apply(this, arguments)  

            timer = null
          }, delay)
        }
      }

      // 去除所有空格 在api上添加
      String.prototype.NoSpace = function () {
        return this.replace(/\s+/g, "");
      };

      // 使用防抖，优化体验
      $('#input1').keyup(debounce(function(e) {
        // 使用箭头函数，this指向为window
        // console.log(e.target)
        // console.log($(this).val())

        let words = $(this).val()

          // 参数名可以和封装的传参不一样
        reqAns(words, res=> {
          // console.log("使用防抖获取的数据", res)
          let str = ""

          if(!res) {
            $('#todolist').html("")
            return
          }

          res.forEach(item=> {
            str += `
              <li>${item.q}<li>
            `
          })
          // 去除所有空格
          str = str.NoSpace()
          // console.log("str", str)

          $('#todolist').html(str)

          let liList = $('#todolist li')
          // console.log(liList)

          // 由于结果数据里面有空行，空行可能是方法，可能是空的dom，也可能是undefind
          for(item in liList) {
            // console.log(liList[item].nodeName)

            // 判断节点属性为li，并且它里面没有内容
            // remove不能删方法
            if(liList[item].nodeName == "LI" && !liList[item].textContent) {
              // 删除节点
              liList[item].remove()
            }
          }

          $('#todolist li').click((e)=> {
            $('#input1').val(e.target.textContent)
            console.log($('#input1').val())
          })
        })
      }))

      $('#input1').focus(()=> {
        $("#todolist").show()
      })
      $('#input1').blur(()=> {
        setTimeout(()=> {
          $("#todolist").hide()
        }, 1000)
      })
    </script>
    ```

### 7.3. document load和ready的区别
- 答案
  - load是网页全部加载完才执行
    - 图片、视频、iframe等
  - ready是dom渲染即可执行，此时图片、视频等静态资源还没加载完
    - DOMContentLoaded事件
    - 为了让js加载更快，一般是在ready里面去做js操作

### 7.4. ==和===的区别
- 答案
  - == 会尝试类型转换
  - === 是严格相等
- 延伸
  - 哪些场景用 ==
    - 只有一个场景 xx == null
      - 表示 xx === null || xx === undefind

## 8. 第7组面试题
### 8.1. 题目
- 函数声明和函数表达式的区别
  - 函数声明和变量提升非常类似
- new Object()和Object.create()的区别
  - 网红题
- 关于this的场景题

### 8.2. 函数声明和函数表达式的区别
- 概念
  - 函数声明：function fn(){...}
  - 函数表达式：const fn = function(){...}
- 答案
  - 函数声明是直接用function来定义函数的
  - 函数表达式是通过先定义一个变量，再把它赋值给一个函数来定义函数的
  - 函数声明会在代码执行前预加载，而函数表达式不会
    - 这个预加载和变量提升是一样的
    - 函数表达式没有变量提升
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/函数声明和函数表达式的区别.html)
  ```js
  /**
   * 函数声明
   */
  const res = sum(10, 20)
  console.log(res)

  // 函数声明会在代码执行之前预加载，有些类似变量提升，但函数已经可以用了
  // 会先把这个函数初始化上，再执行代码
  function sum(x, y) {
    return x + y
  }

  /**
   * 函数表达式
   */
  const res1 = sum1(10, 20)
  console.log(res1)  // 使用函数表达式这里会报错

  const sum1 = function(x, y) {
    return x + y
  }
  ```
- 延伸
  - 函数表达式的报错
  ```js
  const res1 = sum1(10, 20)
  // Cannot access 'sum1' before initialization
  console.log(res1)  // 使用函数表达式这里会报错

  // 用let或者const不会命中变量提升
  // 这里没有做变量提升，所以上面的sum1实际上就是未被定义
  // 所以报错信息是，初始化前无法访问"sum1"
  const sum1 = function(x, y) {
    return x + y
  }

  const res2 = sum2(10, 20)
  // sum2 is not a function
  console.log(res1)  // 这里的报错信息不一样

  // 使用var会命中变量提升
  // 他会提升到最上面，实际上 sum2 === undefined
  // 所以上面的报错信息是sum2不是一个函数
  var sum2 = function(x, y) {
    return x + y
  }
  ```

### 8.3. new Object()和Object.create()的区别
- 答案
  - {}等同于new Object({})，原型都是Object.prototype
  - Object.create(null)没有原型
    - 他必须传参，可以传对象，也可以传null
    - null其实是一个空对象
    - Object.create({...})没有原型的原因是他可以指定原型
      - 传入一个null，就是告诉他不要有原型
      - 传入一个对象，就是告诉他去指定原型
  - Object.create()传参之后，对象中没有值，只是将参数的对象全部将放在空对象的原型中，这是和{}最大的区别
  - Object.create()是创建一个空对象，然后把空对象的原型指向了传入的对象
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/new%20Object()%E5%92%8CObject.create()%E7%9A%84%E5%8C%BA%E5%88%AB.html)
  ```js
  const obj1 = {
    a: 10,
    b: 20,
    sum() {
      return this.a + this.b
    }
  }

  // 如果要new Object传入一个对象的话，返回的就是这个对象的本身
  // 即全相等
  const obj3 = new Object(obj1)
  // 值和内存地址都相等
  console.log("const obj3 = new Object(obj1)", obj3 === obj1)  // true

  // 因为obj3是由obj1 new出来的
  // obj7是由obj1 create出来的
  // 所以 obj7的隐式原型和obj3全相等
  console.log("obj7.__proto__ === obj3", obj7.__proto__ === obj3)
  ```
- 延伸
  - 一般一个对象必须有一个隐式原型
  ```js
  /**
   * new Object
   */
  // {}实际上就是new Object({})
  const obj1 = {
    a: 10,
    b: 20,
    sum() {
      return this.a + this.b
    }
  }
  const obj2 = new Object({
    a: 10,
    b: 20,
    sum() {
      return this.a + this.b
    }
  })

  // 都有隐式原型(__proto__)
  // 隐式原型都指向object构造函数的显示原型
  console.log("定义两个对象,值一样,obj1, obj2", obj1, obj2) 

  // 定义两个对象，他开辟了两个内存地址，所以不会相等
  console.log("定义两个对象,值一样,obj1, obj2", obj1 === obj2)  // false

  // 如果要new Object传入一个对象的话，返回的就是这个对象的本身
  // 即全相等
  const obj3 = new Object(obj1)
  // 值和内存地址都相等
  console.log("const obj3 = new Object(obj1)", obj3 === obj1)  // true

  /**
   * Object.create(null)
    */
  const obj4 = Object.create(null)
  console.log("Object.create(null),obj4", obj4)  // 没有属性，也没有原型

  const obj5 = new Object()  // 等价于const obj5 = {}
  // 隐式原型指向object构造函数的显示原型
  console.log("new Object(),obj5", obj5)  // 有一个隐式原型

  // Object.create()传对象，指向一个原型(即将他们放在空对象的原型中)
  // Object.create()传对象之后，返回的对象的隐式原型指向里面的参数的显示原型
  // 里面的参数是一个对象，这个对象的隐式原型指向object构造函数的显示原型
  const obj6 = Object.create({
    a: 10,
    b: 20,
    sum() {
      return this.a + this.b
    }
  })
  console.log("Object.create()传对象,obj6", obj6)  // 内容为空，但有原型
  console.log("obj6的属性", obj6.a)  // 但是可以找到属性

  // obj7的原型指向obj1
  const obj7 = Object.create(obj1)
  obj1.c = 1000  // 修改obj1
  // Object.create()里面的参数被修改之后，返回的值也会变化
  // 因为obj7的原型指向obj1
  // 即 obj7.__proto__ === obj1
  console.log("obj1被修改之后，Object.create(obj1)", obj7)
  // obj7的隐式原型指向obj1的显示原型
  console.log("obj7.__proto__ === obj1", obj7.__proto__ === obj1)  // true
  console.log("obj7 === obj1", obj7 === obj1)  // false

  // const obj3 = new Object(obj1)
  // 因为obj3是由obj1 new出来的
  // obj7是由obj1 create出来的
  // 所以 obj7的隐式原型和obj3全相等
  console.log("obj7.__proto__ === obj3", obj7.__proto__ === obj3)
  ```

### 8.4. 关于this的场景题
- [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/关于this的场景题.html)
- 场景
  ```js
  const User = {
    count: 1,
    getCount: function() {
      return this.count
    }
  }

  // getCount作为一个对象的方法，里面的this指向这个对象本身
  // 对象本身的count为1
  // 用这种方法执行，相当于是当做user的一个api(属性)来执行
  console.log(User.getCount())  // ? => 1

  // 把User对象中的方法拿出来赋值成一个函数，然后运行
  // 最初函数里面的this的值是不知道的，只有在执行的时候才知道(谁调用指向谁)
  // 这里拿出来(赋值)作为一个独立的函数来执行，this就指向window
  const func = User.getCount
  console.log(func())  // ? => undefined

  // 即
  function getCount1(){ 
    return this.count
  }
  console.log(getCount1())  // undefined
  ```
- 延伸
  - 如何改变函数的this指向
  ```js
  const User = {
    count: 1,
    getCount: function() {
      return this.count
    }
  }

  function getCount1(){ 
    return this.count
  }
  console.log(getCount1())  // undefined

  // 如何改变 getCount1 this指向，指向user
  console.log(getCount1.bind(User)())
  console.log(getCount1.call(User))
  console.log(getCount1.apply(User))
  ```

## 9. 第8组面试题
### 9.1. 题目
- 关于作用域和自由变量的场景题(1,2)
- 判断字符串以字母开头，后面字母数字下划线，长度6-30

### 9.2. 关于作用域和自由变量的场景题
- [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/关于作用域和自由变量的场景题.html)
- 场景题1
  ```js
  // setTimeout(宏任务)属于异步队列中的任务，主线程执行完之后才会执行
  // 所以会先进行遍历，每次遍历会把setTimeout里面的方法放到异步队列中，但不会执行setTimeout
  
  // 遍历过程中，i在当前作用域(代码块)中没有定义，但是使用了，符合自由变量的条件，这个i是一个自由变量
  // 自由变量会在被执行的环境里面一层层往上找哪里定义了(这就是作用域链)
  // 此时i在全局定义，就会找到全局，即每次遍历完就会把值赋在全局
  // 全局作用域是针对所有的块

  // 当for循环遍历完之后，此时同步代码执行完，此时的i是全局变量是4，异步队列里面有4个setTimeout待执行
  // 开始执行异步队列里面的宏任务setTimeout，第一个setTimeout里面有个console.log(i)
  // 此时这个自由变量i同样也会在作用域链上一层层往上找，直到找到全局i为4

  // 于是此时打印的就是4 => 第一次打印
  // 执行下一个宏任务setTimeout
  // 以同样的方法找i
  // 于是此时打印的就是4 => 第二次打印
  // 后面同上
  let i
  for(i=1; i<=3; i++) {
    // debugger
    setTimeout(function(){
      console.log(i)  // 4 4 4
    }, 0)
  }

  // 先进行遍历，每次遍历会把setTimeout里面的方法放到异步队列中，但不会执行setTimeout，setTimeout中的i是一个自由变量
  // 当同步代码执行完，开始执行异步队列中的任务的时候，执行console.log(i)，这个自由变量i开始往上找值，找到for里面
  // i在for里面被定义，即就是块级作用域，所以每次循环的时候，都会形成一个新的作用域块，这里的i就会不一样
  // 因为i在for里面被定义，那么每次遍历后的操作就会在块级作用域里面去找
  // 由于每次循环，都会形成一个新的作用域块，所以遍历中每次的宏任务setTimeout所在的作用域是不一样的，即里面的i也是不一样的

  // 第一次打印，在i=1的块级作用域中，此时打印的是1 => 第一次打印
  // 第二次打印，在i=2的块级作用域中，此时打印的是1 => 第二次打印
  // 后面同上
  for(let i=1; i<=3; i++) {
    // debugger
    setTimeout(function(){
      console.log(i)  // 1 2 3
    }, 0)
  }
  ```

- 场景题2
  ```js
  let a = 100
  function test() {
    alert(a)  // a是自由变量，找到100
    // 由于a是全局变量，
    // 这里其实是把全局变量的a给修改了
    a = 10
    alert(a)  // 10
  }
  test()
  // test方法执行完成之后，a这个全局变量实际已经被修改了
  alert(a)  // 10
  ```

### 9.3. 正则
- 作用
  - 主要用来判断字符串是否符合某个规则
- 面试题
  - 判断字符串以字母开头，后面字母数字下划线，长度6-30
   - `const reg = /^[a-zA-Z]\w{5,29}$/` 
- 延伸
  - [正则学习网站](https://deerchao.cn/tutorials/regex/regex.htm)
  - 前后有个`'/'`就是一个正则表达式
  - `^xx`表示以xx开头，`xx$`表示以xx结尾
  - `[]`用来定义匹配的字符范围
    - 比如`[a-zA-Z0-9]`表示相应位置的字符要匹配英文字符和数字
    - `[^xx]`表示除了xx之外的字符
  - `{}`一般是用来匹配的长度
    - 正则中不能加空格
    - `\s{1,3}`表示匹配1到3个空格
  - `{n}`表示匹配n次，准确的数字
    - `o{2}`,表示一个字符串匹配两个o，如food
  - `{n,}`表示至少匹配n次
    - `o{2,}`,表示一个字符串至少匹配两个o，如foooood
  - `()`用来提取匹配字符串
    - `(0-9)`匹配数字
    - `(0-9)*`匹配数字，可以为空(*表示0~无限)
    - `(0-9)+`匹配数字，不能为空(+表示1~无限)
  - `\w`匹配字母数字下划线
    - `[A-Za-z0-9_]`
    - 大写取反
  - `\d`匹配数字
  - `.`匹配除换行符以外的任意字符
  - `?`匹配前面的子表达式0-1次
    - 等价于`{0, 1}`
  - 如果要字符串全部满足，就加`/^xxx$/`
    - 如果只是一部分，就不需要加
    - 如果要字符串只满足开头，就加`/^xxx/`
     - 如果要字符串只满足结尾，就加`/xxx$/`
 - `+` => 表达式至少出现1次，相当于 `{1,}`
  - `*` => 表达式不出现或出现任意次，相当于 `{0,}`
 - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/正则.html)
  ```js
  // 邮政 - 6位数字
  // \d表示数字
  // {6}表示6位
  const reg1 = /\d{6}/
  console.log("6位数字", reg1.test("123456"))  // true

  // 小写英文字母
  // ^表示开头
  // [a-z]表示小写英文
  // +表示1~无限次
  // $表示结尾
  const reg2 = /^[a-z]+$/
  console.log("小写英文字母", reg2.test("abc"))  // true

  // 英文字母
  const reg3 = /^[a-zA-Z]+$/
  console.log("英文字母", reg3.test("aBc"))  // true

  // 日期格式
  // \d{4}表示年，四位数字
  // \d{1,2}表示1~2位数字，表示月或日
  const reg4 = /^\d{4}-\d{1,2}-\d{1,2}$/
  console.log("日期格式", reg4.test("2021-06-28"))  // true

  // 用户名 - 字母开头，字母数字下划线，长度6-18
  // 5-17加上前面的开头字母，就是6-18
  // \w{5, 17}表示5-17位的字母数字下划线
  const reg5 = /^[a-zA-Z]\w{5,17}$/
  console.log("字母开头，字母数字下划线，长度6-18", reg5.test("abc1246"))  // true
  
  // 简单的ip匹配 - 4个数字，3个点
  // \d+表示多个数字(1~无限)
  // \.表示.，转义字符，不写表示匹配任意字符
  const reg6 = /\d+\.\d+\.\d+\.\d+/
  console.log("简单的ip匹配 - 4个数字，3个点", reg6.test("192.168.0.1"))  // true
  ```
- 其他(不常用)
  - `(\s*)`表示连续空格的字符串
    - `*`表示0~无限
  - `[0-9]{0,9}`表示长度为0到9的数字字符串
  - `(abc|bcd|cde)`表示这一段是abc、bcd、cde三者之一
  - [^0-3] 表示找到这个位置上字符只能是除了0到3之外的所有字符

## 10. 第9组面试题
### 10.1. 题目
- 手写字符串trim方法，保证浏览器兼容性
  - trim表示掐头去尾
  - 低版本浏览器可能不兼容
- 如何获取多个数字中的最大值
- 如何用JS实现继承

### 10.2. 手写字符串trim方法
- 考察内容
  - 考察原型、this、正则、字符串api
- 答案
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/手写字符串trim方法.html)
  ```js
  // 在之前原生js还不支持trim语法的时候，就是用正则这种方法去解决的
  // 字符串的replace是支持正则的，把正则表达式命中的片段，替换成其他字符串
  // 考察原型、this、正则、字符串api
  // 在String的原型上去改的
  if(!String.prototype.trim) {
    String.prototype.trim = function() {
      // /^\s+/表示开头一个或多个空格
      // /\s+$/表示结尾一个或多个空格
      // 匹配开头和结尾一个或多个空格，替换成空字符
      // 原型中的this，如果是通过String.trim()执行，这个this指向字符串，即这个类的实例
      return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }
  }

  let str = "   123  "
  console.log("使用trim", str.trim())
  ```

### 10.3. 如何获取多个数字中的最大值
- 答案
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/如何获取多个数字中的最大值.html)
  ```js
  // 自己写一个方法
  function max() {
    // arguments是类数组对象(缺少很多数组的方法)
    // call表示让一个对象调用另一个对象的方法
    // slice表示从一个数组中切割，返回新的数组，不修改切割的数组
    // 本质就是arguments这个对象使用了数组的slice这个方法，得到了参数构成的数组
    // 即获取max里面所有的参数，并将他们转换成数组
    const nums = Array.prototype.slice.call(arguments)  // 变为数组
    let max = 0
    nums.forEach(n=> {
      if(n > max) {
        max = n
      }
    })
    return max
  }
  console.log(max(10, 20, 50))

  // 使用api
  let maxNum = Math.max(10, 20, 50)
  let minNum = Math.min(10, 20, 50)
  console.log("使用Math api获取最值", maxNum, minNum)
  ```

### 10.4. 如何用JS实现继承
- 答案
  - 使用class继承
  - 使用prototype继承
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/如何用JS实现继承.html)
  ```js
  // 父类
  class People {
    constructor(name) {
      this.name = name
    }
    eat() {
      console.log(`${this.name} eat something`)
    }
  }

  /**
   * 使用class继承
   */
  // 子类
  class Student extends People {
    constructor(name, number) {
      super(name)
      this.number = number
    }
    sayHi() {
      console.log(`姓名 ${this.name} 学号 ${this.number}`)
    }
  }
  // 实例
  const xialuo = new Student('夏洛', 100)
  xialuo.eat()  // 夏洛 eat something
  xialuo.sayHi()  // 姓名 夏洛 学号 100
  console.log("student实例的隐式原型与student的显示原型等价", xialuo.__proto__  === Student.prototype)
  console.log("student显示原型的隐式原型与people的显示原型等价", Student.prototype.__proto__ === People.prototype)
  // student实例的隐式原型 === student的显示原型
  // student显示原型的隐式原型 === people的显示原型
  // 所以student实例的隐式原型的隐式原型 ===  people的显示原型
  // people和object同理，就形成了原型链
  console.log("student实例的隐式原型的隐式原型与people的显示原型等价", xialuo.__proto__.__proto__ === People.prototype)

  /**
   * 使用prototype添加方法
   */
  // 这里使用箭头函数没有this
  People.prototype.reading = function() {
    console.log(`${this.name} can reading`)
  }
  const people = new People("绿巨人")
  people.reading()  // 绿巨人 can reading
  console.log("people实例的隐式原型与people的显示原型等价", people.__proto__  === People.prototype)
  console.log("people显示原型的隐式原型与object的显示原型等价", People.prototype.__proto__ === Object.prototype)

  /**
   * 使用prototype继承
   * 
   * 如果父类不是用clss而是function的时候，可以使用call或apply，即将父对象的构造函数绑定在子对象上，来实现继承
   * Animal.apply(this, arguments);
   * 
   * 这里使用将teacher的prototype对象(显示原型)，指向一个People的实例的方法来实现继承
   */
  // 构造函数
  function Teacher(name, major){
    this.name = name; // 定义自己的属性
    this.major = major; // 定义自己的属性
  }

  // 任何一个prototype对象都有一个constructor属性，用这种方式实现继承之后，Teacher的构造函数指向也发生了变化
  Teacher.prototype = new People()  // 实现继承
  Teacher.prototype.constructor = Teacher  // 重新指向Teacher子类的构造函数
  Teacher.prototype.teach = function() {
    console.log(`${this.name} 教授 ${this.major}`)
  }

  let teacher = new Teacher('王老师', '语文')
  teacher.eat()  // 王老师 eat something
  teacher.teach()  // 王老师 教授 语文
  ```

## 11. 第10组面试题
### 11.1. 题目
- 如何捕获JS程序中的异常
- 什么是JSON
- 获取当前页面url的参数

### 11.2. 如何捕获JS程序中的异常
- 答案
  - 手动捕获异常 => 使用try...catch...
  - 自动捕获异常 => 使用window.onerror
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/如何捕获JS程序中的异常.html)
  ```js
  /**
   * 使用try...catch...
   */
  // 手动捕获异常
  try {
    // todo
  } catch(ex) {
    console.error(ex)  // 手抖捕获catch
  } finally {
    // todo
  }

  /**
   * 使用window.onerror
   */
  // 兜底方案
  // 监听前端页面，比如页面上线了，要统计监听查看页面有没有js报错
  // 但不可能每个地方都加try{}catch{},他只在高风险的地方添加
  // 其他地方使用window.onerror,他会自动捕获页面上出现的一些问题
  // 自动捕获异常
  // message => 报错信息
  // source => 源码
  // lineNum => 行号
  // colNum => 列号
  // error => 错误栈
  window.onerror = function(message, source, lineNum, colNum, error) {
    // 1. 对跨域的js，如cdn，不会有详细的报错信息
    // 2. 对于压缩的js，还要配合sourceMap反查到未压缩代码的行、列
    // 压缩之后可能只有一行，他的行号可能永远只有一行或者两行
  }
  ```


### 11.3. 什么是JSON
- 答案
  - json是一种数据格式，本质是一段字符串
  - json格式和js对象结构一致，对js语言更友好
    - 其实在json普及之前，js里面的一些数据格式的操作都是用xml去做的
    - XMLHttpRequest这个api其实就是由xml引起的名字，一直沿用到现在
  - window.JSON是一个全局对象
    - JSON.stringify(obj) => 对象转json字符串
    - JSON.parse(str) => json字符串转对象
- 注意事项
  - json格式和js不一样的地方是，他的键和值必须用双引号引起来，js里面可以用单引号，但json里面必须用双引号，值的话，布尔类型和整型不用引号

### 11.4. 获取当前页面url的参数
- 答案
  - 传统方式 => location.search
    - 获取？后面的内容，然后做字符串截取，用正则匹配
  - 新的api => URLSearchParams
    - 很简单，但要考虑浏览器兼容问题
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/获取当前页面url的参数.html)
  ```js
  // 给当前地址添加参数
  history.pushState("","","?a=123&b=666")
  console.log("获取当前页面路径", window.location.href)

  // 获取参数，即地址?后面的所有内容
  console.log("获取参数", location.search)

  /**
   * 传统方式
   * 封装成函数 - 获取某个参数的值
   */
  let query1 = name=> {
    // substr和array.slice有点类似
    // 传入1表示从1开始截取，截到最后
    // 干掉第一个字符 => ?
    const search = location.search.substr(1)
    // console.log(search)

    // RegExp是正则的构造函数
    // new RegExp('^abc$') === /^abc$/
    // search: a=123&b=666
    // 每个键名(a,b)前，要么是字符串开始，要么就是&符号
    // 用括号表示他们是一个整体，|表示或
    // 这里的name表示键名
    // 中括号中有^表示非，这里的[^&]表示非&的字符
    // *表示有0个或者多个，整体表示，值的匹配规则为非&字符，并且有0个或者多个
    // (&|$)表示最后出现&(123&,表示还有值)或者直接结尾
    // i表示大小写不区分，即也可以写成
    // /(^|&)${name}=([^&]*)(&|$)/i
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')

    // match表示匹配，拿字符串去匹配这个正则表达式
    // 他返回的是一个数组
    // 第0项表示从某个参数(b)开始，匹配的整个这个参数的内容(&b=666)
    // match的匹配是按照括号来的，括号表示一个整体
    // 第1项返回的是第一个括号里面的内容
    // 第二项匹配的是第二个括号里面，即值
    const res = search.match(reg)
    // console.log(res)

    // 如果没匹配到
    if(res === null) {
      return null
    }

    // 如果匹配到了
    // 数组的第2项表示他的值
    return res[2]
  }
  console.log("传统方式获取路径上b参数的值", query1('b'))

  /**
   * 新的api => URLSearchParams
    * 封装成函数 - 获取某个参数的值
    */
  let query2 = name=> {
    const search = location.search
    const p = new URLSearchParams(search)

    return p.get(name)
  }
  console.log("新的api获取路径上b参数的值", query2('b'))
  ```

## 12. 第11组面试题
### 12.1. 题目
- 将url参数解析为js对象
- 手写数组flatern，考虑多层级
  - 把数组拍平
  - 多层级表示要递归
- 数组去重
  - 算是网红题

### 12.2. 将url参数解析为js对象
- 答案
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/将url参数解析为js对象.html)
  ```js
  // 给当前地址添加参数
  history.pushState("","","?a=123&b=666")

  /**
   * 传统方式，分析search
   */
  let queryToObj1 = ()=> {
    const res = {}
    const search = location.search.substr(1)

    // 根据&分割成数组
    search.split('&').forEach(paramStr=> {
      const arr = paramStr.split('=')
      const key = arr[0]
      const val = arr[1]
      res[key] = val
    })

    return res
  }
  console.log("使用传统方式", queryToObj1())

  /**
   * 使用新的api
   */
  const queryToObj2 = ()=> {
    let res = {}
    let pList = new URLSearchParams(location.search)
    // 注意，是先val再是key
    pList.forEach((val, key)=> {
      res[key] = val
    })

    return res
  }
  console.log("使用新的api", queryToObj2())
  ```

### 12.3. 手写数组flatern，考虑多层级
- 需求
  - 不管数组里面有多少层，全部按照顺序拍平到一个数组里面
- 答案
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/手写数组flatern.html)
  ```js
  /**
   * 对于简单的二层结构拍平
   * 对于更深层次的数组，要是用递归
   */
  let arr0 = [1, 2, [3, 4], [5, 6], 7]
  // apply第一个参数是this
  // 第二个参数是把所有的参数放到一个集合中
  // 类似于call，参数展开来写
  // 以下三个等价
  // concat表示连接数组
  // arrayObject.concat(arrayX,arrayX,......,arrayX)
  // 表示通过把所有 arrayX 参数添加到 arrayObject 中生成一个新的数组
  // 如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组
  console.log("apply", Array.prototype.concat.apply([], arr0))  // [1, 2, 3, 4, 5, 6, 7]
  console.log("call", Array.prototype.concat.call([], 1, 2, [3, 4], [5, 6], 7))
  console.log("[]", [].concat(1, 2, [3, 4], [5, 6], 7))

  /**
   * 对于复杂深层次数组拍平
   * 递归
   */
  let arr = [1, 2, [3, 4, [10, 20, [100, 200]]], 5]
  // console.log(arr)
  
  // 拍平数组
  let flat = arr=> {
    // 验证arr中，有无深层数组
    // some表示只要有一个符合
    // 即判断当前数组中，是否有一个是数组的形式
    // 按顺序查找，有一个就返回
    // 这个是简写，实际上是返回item
    let isDeep = arr.some(item => item instanceof Array)
    // 表示递归的终止条件
    if(!isDeep) {
      return arr  // 已经是平的了，即[1, 2, 3, 4]
    }

    // 开始第一层拍平
    let res = Array.prototype.concat.apply([], arr)
    // console.log(res)

    // 递归，每次判断数组是否拍平，如果没有就返回，如果有层级，继续
    return flat(res)
  }

  let res = flat(arr)
  console.log("递归拍平数组", res)
  ```

### 12.4. 数组去重
- 答案
  - 传统方式：遍历元素挨个比较、去重
  - ES6：使用Set
    - 特点：无序结构，且不能重复
  - 需要考虑计算效率
    - set不需要遍历，效率比较高
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/数组去重.html)
  ```js
  let arr = [30, 10, 20, 30, 40, 10]

  /**
   * 传统方法，遍历
   * 有序
   */
  const unique1 = arr=> {
    let res = []

    // 相当于遍历两次，效率比set低
    arr.forEach(item=> {
      // 判断当前元素在res里面是否存在
      if(res.indexOf(item) < 0) {
        // 如果当前项在res数组里面没有，就添加
        res.push(item)
      }
    })

    return res
  }
  let res1 = unique1(arr)
  console.log("传统方法去重", res1)

  /**
   * ES6方法 Set
    * 无序结构
    */
  const unique2 = arr=> {
    // set可以接收数组来构建
    let set = new Set(arr)
    // console.log(set)  // 不是一个数组
    // ...实际上是一个结构，表示提取里面的内容
    return [...set]
  }
  let res2 = unique2(arr)
  console.log("ES6方法去重", res2)
  ```

## 13. 第12组面试题
### 13.1. 题目
- 手写深拷贝
- 介绍一下RAF
  - requestAnimationFrame
  - 做动画用的，算是性能优化的一部分（体验优化）
- 前端性能如何优化？一般从哪几个方面考虑

### 13.2. 手写深拷贝
- 答案
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/手写深拷贝.html)
  ```js
  const deepClone = (obj = {})=> {
    // obj是null，或者不是对象或数组，直接返回
    if(typeof obj !== 'object' || obj == null ) {
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

  let obj = {
    age: 20,
    name: "xxx",
    address: {
      city: "beijing"
    },
    arr: ["a", "b", "c"]
  }

  let objcopy = deepClone(obj);
  console.log("深拷贝", objcopy)
  ```
- 注意事项
  - Object.assign不是深拷贝 => 浅拷贝
  ```js
  /**
   * 验证Object.assign不是深拷贝
   */
  let obj0 = {
    a: 1,
    b: 20
  }
  // 向obj0追加，不是拷贝
  Object.assign(obj0, {
    c: 40
  })
  console.log("Object.assign追加", obj0)

  // 将新对象和obj0合并，得到一个新对象，不是拷贝
  let obj01 = Object.assign({}, obj0, {
    d: 20
  })
  // 原对象不变
  console.log("obj0, obj01原对象", obj0, obj01)
  obj0.a = 666
  // obj01的a的值没有变，看似深拷贝
  console.log("浅层次，改了obj0的a的值,查看 obj01", obj0, obj01)

  // 实际上是浅拷贝，层级一深就不行了
  let obj00 = {
    a: 10,
    b: {
      x: 100,
      y: 100
    }
  }
  let obj001 = Object.assign({}, obj00, {
    c: 300
  })
  console.log("obj00, obj001原对象", obj00, obj001)
  // 修改深层次的值
  obj00.b.x = 666
  // 深层次的
  console.log("深层次，改了obj00的x的值,查看 obj001", obj00, obj001)
  ```

### 13.3. 介绍一下RAF
- 背景
  - 我们不管用js还是css执行动画，想要动画流畅，更新频率要在60帧/s，即一秒钟动画要动60次，即16.67ms更新一次视图
    - 1000/60 约等于 16.67，是一个无限循环的小数
  - 这样人的肉眼就会觉得这个动画很流畅，不卡顿
  - 如果用js去控制动画的话，要用setTimeout
  - setTimeout要手动控制频率
  - 而RAF，浏览器会自动控制
  - 后台标签或隐藏iframe中，RAF会暂停，而setTimeout依然执行
    - 有些不应该耗费性能的地方
    - Chrome已经最小化了
    - setTimeout不是做动画用的，他主要是用来做异步定时器的
- 答案
  - RAF，全称requestAnimationFrame，他是浏览器自带的api，主要用来做动画，浏览器会自动控制，比如在一些不应该耗费性能的地方会自动暂停动画的渲染，主要就是RAF的功劳
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/questions/介绍一下RAF.html)
  ```html
  <style type="text/css">
    #div1 {
      width: 100px;
      height: 50px;
      background-color: red;
      margin-bottom: 10px;
    }
    #div2 {
      width: 100px;
      height: 50px;
      background-color: red;
    }
  </style>
  <div id="div1"></div>
  <div id="div2"></div>

  <script>
    /**
     * 3s宽度从100px变为640px，即增加540px
     * 60帧/s => 3s 180 帧 => 每次变化 3px => 每次增加16.7ms
     */
    let curWidth = 100  // 当前宽度是100
    let maxWidth = 640  // 最大宽度640

    let $div1 = document.querySelector('#div1')
    let $div2 = document.querySelector('#div2')

    // 使用setTimeout
    const animate1 = ()=> {
      curWidth = curWidth + 3
      $div1.style.cssText=`width:${curWidth}px`

      // 如果当前宽度小于最大宽度
      if(curWidth < maxWidth) {
        // 类似递归
        // 16.67ms更新一次视图，即每16.7ms，增加3px
        // 需要自己控制时间
        // 如果增加1px，为了保证流畅度，要16.7/3
        // 执行次数会变多
        // 帧率变低会卡顿，帧率变高会耗性能，需要自己评估
        setTimeout(animate1, 16.7)
      }
    }
    animate1()

    // 使用RAF
    // 切换选项卡或者最小化浏览器，他会暂停
    let animate2 = ()=> {
      curWidth = curWidth + 3
      $div2.style.cssText=`width:${curWidth}px`

      if(curWidth < maxWidth) {
        // 时间不用自己控制
        window.requestAnimationFrame(animate2)
      }
    }
    animate2()
  </script>
  ```

### 13.4. 前端性能如何优化
- 答案
  - 原则：多使用内存、缓存，减少计算，减少网络请求
  - 方向：加载页面、渲染页面、页面操作流畅
    - 加载页面：
      - 减少资源体积：压缩代码
      - 减少访问次数：合并代码、雪碧图、ssr服务端渲染、缓存
      - 使用更快的网络：CDN
    - 渲染页面：
      - CSS放在head，JS放在body最下面
      - JS用DOMContentLoaded触发
      - 对DOM查询进行缓存
      - 频繁DOM操作，使用代码片段合并到一起插入DOM结构
    - 页面操作流畅：
      - 动画使用requestAnimationFrame
      - 频繁输入或者频繁操作的时候最后触发 => 防抖 => 输入框监听
      - 频繁输入或者频繁操作的时候，保持一个频率，连续触发 => 节流 => 拖拽
