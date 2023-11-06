# JS基础-作用域和闭包(必考)
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/6.html)

## 1. 简述
- 我们写的逻辑写的函数，不一定是平铺的，有可能是模块之间相互调用，产生一些比较复杂的关系，这些关系中如果捋不清关系的作用域的问题，代码可能不知不觉就会出现很多bug

## 2. 题目
- this的不同应用场景，如何取值(重点)
- 手写bind函数(bind是改变this指向的方法之一)
- 闭包在实际开发中的应用场景，举例说明
- 创建10个`<a>`标签，点击的时候弹出对应的序号

## 3. 知识点
### 3.1. 作用域和自由变量
#### 3.1.1. 作用域
- 概念
  - 作用域其实代表了某个变量合法的使用范围
- 类型
  - 全局作用域
  - 函数作用域
  - 块级作用域(ES6新增)
    - 示例
    ```js
    // ES6块级作用域 - if/for等后面有大括号，大括号里面的就是块级作用域
    if(true) {
      let x = 100
    }
    console.log(x)  // 报错
    ```
#### 3.1.2. 自由变量
- 一个变量在当前作用域没有定义，但被使用了
- 向上级作用域，一层层依次查找，直到找到为止
- 如果到全局作用域都没找到，则报错 xx is not defind
- 所有的自由变量的查找，是在函数定义的地方，向上级作用域查找
- 不是在执行的地方

### 3.2. 闭包
- 闭包其实就是作用域应用的特殊情况，有两种表现
  - 函数作为参数被传递
  ```js
  // 函数作为参数
  let print = fn=> {
    const a = 200
    fn()
  }

  let a = 100
  let fn = ()=> {
    console.log(a);
  }
  print(fn)  // 100

  // fn执行的时候是在print作用域下
  // 执行的函数中有个a，是个自由变量
  // 这个自由变量在fn作用域下，自由变量应该往他上级作用域去寻找
  // 在函数定义的作用域的上级去寻找
  ```
  - 函数作为返回值被返回
  ```js
  // 函数作为返回值 - 面试常考
  let create = ()=> {
    let a = 100
    return ()=> {
      console.log(a);
    }
  }

  let fn = create()
  let a = 200
  // 这里输出什么是考察重点，做不对基本必挂
  fn()  // 100

  // fn函数执行，是在全局作用域
  // 函数定义是在create作用域
  // a=100是在create作用域
  // 函数定义中的a不是在函数定义作用域中定义的，所以是自由变量
  // 自由变量应该往上级作用域(create)去寻找
  ```
  - 简要来讲，就是在某个作用域拿到不是你的作用域的值，就要用闭包
  - 其中最主要的考点是
    - 函数定义中的变量如果不是在函数定义作用域中定义的，那么他就是自由变量
    - 自由变量应该在函数定义的作用域的上级作用域去寻找，而不是不是在执行的地方

### 3.3. this
- this的使用场景
  - 作为普通函数
  - 使用call、apply、bind
  - 作为对象方法被调用
  - 在class方法中调用
  - 箭头函数
- this指向的规律
  - this在各个场景中是什么样的值，是在函数执行的时候确定的，不是在定义的时候确定的(重点！适用以上五种情况)
    - 即谁调用指向谁
- this示例1
  - 普通函数、call、bind
  ```js
  function fn1() {
    console.log(this)
  }
  fn1()  // window

  // call可以直接调用执行
  fn1.call({x: 100})  // {x: 100}

  // bind的特性是，返回一个新的函数执行
  const fn2 = fn1.bind({x: 200})
  fn2()  // {x: 200}
  ```
- this示例2
  - 对象中
  ```js
  const zhangsan = {
    name: '张三',

    // 对象中的方法的this指向当前对象
    sayHi() {
      // this即当前对象
      console.log(this)
    },

    wait() {
      // 定时器中的this都指向window
      // 这个函数被执行，实际上是setTimeout本身触发的执行
      // 所以他是作为一个普通函数被执行的，不是作为一个对象的方法被执行的
      setTimeout(function() {
        // this === window
        console.log(this);
      })
    }

    waitAgain() {
      // 箭头函数this指向父级 => 函数当前环境
      // 箭头函数是被setTimeout触发的，但是箭头函数的this永远是取他上级作用域的this，它自己本身不会决定this的值
      // 即箭头函数的this实际上和对象的方法的this是一样的
      setTimeout(()=> {
        // this即当前对象
        console.log(this);
      })
    }
  }
  ```
- this示例3
  - 类中
  ```js
  class People {
    // 构建函数中的this表示创建的这个类的实例
    constructor(name) {
      this.name = name
      this.age = 20
    }

    sayHi() {
      console.log(this)
    }
  }

  const zhangsan = new People("张三")
  zhangsan.sayHi()  // 指向zhangsan对象/实例
  ```

## 4. 面试题解答(总结)
- 创建10个`<a>`标签，点击的时候弹出对应的序号
  - 示例
  ```js
  // dom加载很快，但事件只有在点击的时候才会触发，i如果是全局变量，他会很快变成10，即每次点击弹出的都是10
  let a
  // 如果在for里面定义，就是块级作用域
  // 每次循环的时候，都会形成一个新的作用域块，这里的i就会不一样
  for(let i=0; i<10; i++>) {
    a = document.createElement('a');
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function(e){
      // 这里的i是自由变量，他会在被执行的环境里面一层层往上找，如果i在全局，就会找到全局，全局作用域是针对所有的块
      // 如果i在for里面被定义，那么每次就会在块级作用域里面去找
      e.preventDefault();  // 阻止冒泡
      alert(i);
    });
    document.body.appendChild(a)
  }
  ```
- this的不同应用场景，如何取值
  - 当作普通函数被调用
    - 指向window
  - 使用call、apply、bind
    - 传入什么，指向什么
  - 作为对象方法调用
    - 指向对象本身
  - class的方法中调用
    - 指向当前实例本身
  - 箭头函数
    - 找上级作用域的值来确定
- 实际开发中闭包的应用场景
  - 函数作为参数被传递
  - 函数作为返回值被返回
  - 即函数定义的地方和函数执行的地方不一样
- 手写bind函数
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/closure/手写bind.html)
  ```js
  function fn1(a, b, c) {
    console.log('this', this)
    console.log(a, b, c)
    return 'this is fn1'
  }

  // bind的使用
  // bind第一个参数是this, 第二个参数开始就是a、b，即方法中的参数
  // 返回一个新的函数
  const fn2 = fn1.bind({x: 100}, 10, 20)
  const res = fn2()  // 保存执行结果
  console.log(res)

  /*
  手写前我们需要理解以下概念
  我们需要从fn1入手，去找到fn1和bind关联的地方
  fn1().bind => 即fn1可以执行bind方法，考虑是不是和原型概念有关
  fn1.hasOwnProperty('bind') => fn1不属于bind这个对象的属性
  fn1是一个函数  => 我们可以理解为他是一个实例 => 所有实例都有隐式原型
  fn1.__proto__
  fn1的隐式原型 === Function的显示原型
  即可以理解为fn1是Function类new出来的实例
  即 fn1.__proto__ === Function.prototype
  即 Function.prototype里面有bind/call/apply等api方法
  */

  // 手写bind
  // 以插件的形式扩展
  // Function的原型中已经有了一个bind方法
  // 我们现在在Funtion原型上再加上一个bind方法(模拟)
  // bind方法中，除了第一个参数是this,后面的参数数量不确定
  Function.prototype.bind1 = ()=> {
    // 将参数拆解为数组
    // 这里引申出一个知识点 - arguments
    // arguments可以获取一个函数所有的参数，不管传几个，可以获取所有的
    // arguments是列表的形式，但他不是数组
    // 这里使用Array原型中的slice方法(api) (同样适用于dom列表)
    // 通过Array.prototype.slice执行的时候，把arguments赋成Array.prototype.slice函数的this
    const args = Array.prototype.slice.call(arguments)

    // 获取this(数组第一项)
    // shift是永远地将数组第一项挖出来
    // t是数组第1项，此时args已经把第一项删除了
    const t = args.shift();  // 获取数组第1项

    // 把this从这个数组中剔除出去 （bind方法第1项是this,其他都是参数）
    // 除了this的其他数组
    // 这里的this就是实例化出来的方法 - class中的this是实例本身
    // 即 fn1.bind(...) 中的 fn1
    cosnt self = this

    // bind是返回一个函数的
    return function() {
      // apply第一个参数是this,第二个参数开始是所有的参数
      // apply除了不返回函数，其他和bind一样
      return self.apply(t, args)  // 这个就是fn1的执行
    }
  }

  const fn3 = fn1.bind1({x: 100}, 10, 20, 30)
  const res1 = fn3()
  console.log(res1)
  ```
- 实际开发中闭包的应用
  - 隐藏数据
    - 为了避免在外部改变
    - 如做一个简单的cache(缓存)工具
    ```js
    // 闭包隐藏数据，只提供api
    let createCache = ()=> {
      const data = {}  // 闭包中的数据，被隐藏，不被外界访问

      return {
        set(key, val) {
          data[key] = val
        },
        get(key) {
          return data[key]
        }
      }
    }

    // 执行createCache方法，获取return里面的对象
    // 返回函数是闭包的一种形式
    const c = createCache();  
    c.set('a', 100)
    console.log(c.get('a'))

    // 这样就没有办法不通过set、get方法改data的值了
    // data是在createCache作用域中的，不会被外界访问到
    ```
