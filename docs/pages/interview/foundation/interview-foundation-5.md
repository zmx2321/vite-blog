# JS基础-原型和原型链(必考)

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/5.html)

## 1. 简述
- 原型链属于必考的知识点，有以下原因
  - js本身就是基于原型继承的语言
  - 在es6之前，我们只能通过写原型来继承，不像java可以通过class来继承
  - 在es6之后，我们也可以通过class来继承，但只是写法上相似，它真正的继承还是原型上的继承

## 2. 题目
- 如何判断一个变量是不是数组
- 手写一个简易的jquery，考虑插件和扩展性
- class的原型本质，怎么理解

## 3. 知识点
### 3.1. class和继承
- class本质上就是一个模板
  - constructor => 使用构造方法构建一些东西
  - 属性 => 这个模板有属性
  - 方法 => 这个模板有方法
- 示例1
```js
class Student {
  // 定义构建这个类的时候的事情 - 实例化的时候直接执行，且只执行一次
  constructor(name, number) {
    // this表示当前你正在构建的实例
    this.name = name
    this.number = number
    this.gender = 'male'
  }

  // 方法 - 动作
  sayHi() {
    console.log(`姓名${this.name}, 学号${this.number}`)
  }

  sutudy() {}
}

// 通过类 new 对象/实例
// new的时候他会走constructor(构建)，把属性赋值给当前正在初始化的实例
const xialuo = new Student("夏洛", 100);
console.log(xialuo.name)
console.log(xialuo.number)

xialuo.sayHi();
```
- 示例2 - 继承
  - 当我们有很多个class,而且这些class有一些公共的属性的时候，可以将他们抽离出来
  - 使用extend继承
  - 使用super继承父类的构造函数
  - 扩展或者重写方法
```js
// 父类
class People {
  constructor(name) {
    this.name = name;  // 每个人都有名字这个属性
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
}

// 子类1
class Student extends People {
  // 即这个class继承了People的属性和方法
  constructor(name, number) {
    // 子类必须使用super方法将属性值传给父类，让父类统一作处理
    super(name);  // 我们把这个名字给父类(继承)，让父类取处理这个属性

    this.number = number;  // 只有学生有学号
  }

  // student类自有的方法
  sayHi() {
    console.log(`姓名${this.name}, 学号${this.number}`)
  }
}

// 子类2
class Teacher extends People {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    teach() {
        console.log(`${this.name} 教授 ${this.major}`)
    }
}

// 学生实例
const xialuo = new Student("夏洛", 100);
console.log(xialuo.name)
console.log(xialuo.number)

xialuo.sayHi();
xialuo.eat();  // 继承自父类的方法

// 老师实例
const wanglaoshi = new Teacher('王老师', '语文')
console.log(wanglaoshi.name)
console.log(wanglaoshi.major)
wanglaoshi.teach()
wanglaoshi.eat()  // 继承自父类的方法
```

### 3.2. 类型判断instanceof
- 使用以上例子 => 可以使用instanceof判断这个对象属于哪个类
- 即也可以说可以使用instanceof判断这个对象是否由哪个类构建出来的
```js
xialuo instanceof Student  // true  student先继承于people，people再继承于object，所有object不是student的父类
xialuo instanceof People  // true  people也参与了该对象的构建
xialuo instanceof Object  // true  js中object是所有class的父类
```
- 数据类型判断
```js
[] instanceof Array  // true  判断[]是不是Array这个类构建出来的
[] instanceof Object  // true  // 实际上object也算是Array的父类
{} instanceof Object  // true
```

### 3.3. 原型和原型链
#### 3.3.1. 原型
- 示例
```js
// class 实际上是函数，可见是语法糖
typeof People  // 'function'
typeof Student  // 'function'

// 隐式原型和显示原型
console.log(xialuo.__proto__)  // 隐式原型
console.log(Student.prototype)  // 显示原型 prototype就是原型的意思
// 全等意思是他们的引用了一个内存地址
console.log(xialuo.__proto__ === Student.prototype)
```
- 注意事项：
  - 我们在定义一个Student类的时候，会有一个显示原型指向一个对象，把方法都放到这个对象(原型)中来
  - xialuo这个对象实际上除了本身有name和number两个属性值之外，还有一个__proto__，所有的方法都是通过这个隐式原型指向Student类中的原型获去的
  - 被实例化出来的对象的__proto__和类的原型(方法)指向同一个内存地址
- 原型关系
  - 每个class都有显示原型prototype
  - 每个实例都有隐式原型__proto__
  - 实例的__prototype__(隐式原型)指向对应class的prototype(显示原型)
- 基于原型的执行规则
  - 获取属性xialuo.name或执行方法xialuo.sayhi()
  - 先在自身的属性和方法寻找
  - 如果找不到则自动去__proto__(隐式原型)中查找
- 示例图
![proto](https://zmx2321.github.io/vite-blog/images/interview/foundation/proto.png)

#### 3.3.2. 原型链
- 示例
```js
console.log(Student.prototype.__proto__);
console.log(People.prototype);
// 父类的显示原型 === 子类的显示原型的隐式原型
console.log(People.prototype === Student.prototype.__proto__);
```
- 注意事项
  - Student的隐式原型指向People的显示原型
  - People本身有显示原型，有eat方法
  - xialuo是被Student类new出来的，所以夏洛的隐式原型指向的是student的显示原型
  - student类里面有一个prototype对象，里面有个sayHi方法
  - student类可以理解为是people类new出来的(实际上不是，但可以这么理解)，所以student的隐式原型，指向people的显示原型
- 举个栗子
  - 我们访问xialuo.name是直接获取xialuo这个实例本身的
  - 我们访问xialuo.sayHi(),xialuo这个对象本身没有sayHi属性，我们在隐式原型中去找，即Student类的原型(即student的prototype对象)中去找
  - 我们要访问xialuo.eat(), 我们一层层往上找，Student的原型中没有，于是在Student的隐式原型中去找，即People的原型(即people的prototype对象)中去找
  - 这个就是原型链
- 示例图
![proto__](https://zmx2321.github.io/vite-blog/images/interview/foundation/proto__.png)

- 【扩展】如何判断某个属性是否是某个对象的属性
```js
xialuo.hasOwnProperty('name')  // true
xialuo.hasOwnProperty('sayHi')  // false
```
- hasOwnProperty是如何来的，我们可以做以下假设
  - hasOwnProperty也是xialuo身上的方法，但他也不是他自身的属性
  - 即示例图
  ![proto__main](https://zmx2321.github.io/vite-blog/images/interview/foundation/proto__main.png)
- People继承于object
  - 所以people的隐式原型指向object这个原型，即object的prototype对象，而object的隐式原型__proto__为null
  - object这个原型是js引擎自己有的，他有toString()、hasOwnProperty()等方法
  - 所以`xialuo.hasOwnProperty()`方法是通过原型链一层层往上找，找到object，然后使用object的原型中的方法

#### 3.3.3. 再看instanceof
- instanceof的工作原理是怎么样的
- 就按照 `xialuo instanceof Object`来说
  - instanceof前面的变量(xialuo),顺着隐式原型，一层层往上找，找到student、people、object的显示原型
  - 如果这个隐式原型能对应到object的显示原型，那么`xialuo instanceof Object`成立

## 4. 重要提示
- class是ES6语法规范，是由ECMA委员会发布的
- ECMA只规定语法规范，即我们代码的书写规范，不规定如何实现
- 以上实现方式都是V8引擎的实现方式，也是主流的
  - 拿V8引擎作为一个标准，作为一个实现方式的规范，来讲原型是完全没有问题的

## 5. 面试题解答(总结)
- 如何判断一个变量是数组
  - `a instanceof Array`
- class的原型本质
  - 上文原型和原型链的图示
  - 主要有以下几点
    - 原型
      - 每个类都有一个显示原型
      - 每个实例都有一个隐式原型
      - 实例的隐式原型指向对应类的显示原型
    - 原型链
      - 子类的显示原型的隐式原型指向父类的显示原型
  - 属性和方法的执行规则
    - 先在自身的属性和方法寻找
    - 如果找不到则自动去__proto__(隐式原型)中查找
- 手写简易的jquerey(考虑插件和扩展性)
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/prototype/手写jquery.html)
  ```js
  // 只是一个简易的结构
  // jquery主要是做dom查询的
  class jQuery {
    constructor(selector) {
      const result = document.querySelectorAll(selector)
      const length = result.length

      // 对查出来的selector进行遍历，把每一个dom都放到this上去
      for(let i=0; i<length; i++) {
        this[i] = result[i]
      }

      this.length = length
      this.selector = selector
    }

    get(index) {
      retuen this[index]
    }

    each(fn) {
      for(let i=0; i<this.length; i++) {
        const elem = this[i]
        fn(elem)
      }
    }

    on(type, fn) {
      return this.each(elem => {
        elem.addEventListener(type, fn, false)
      })
    }

    // 扩展更多DOM api
  }

  // 考虑扩展性有2种方法
  // 方法一：插件的形式
  // 在jQuery类的显示原型上添加方法(实际上相当于在类中添加方法，因为类中的方法实际上就是体现在显示原型上的方法)
  // 这种方法实际上还是jquery，只是在里面去做扩展
  jQuery.prototype.dialog = function (info) {
    alert(info)
  }

  // 方法二：使用继承 即造轮子
  // 这种方法是继承了jquery，但最后实现的类是自己的
  class myJQuery extends jQuery {
    constructor(selector) {
        super(selector)
    }
    // 扩展自己的方法
    addClass(className) {

    }
    style(data) {
        
    }
  }

  // 打印出页面所有的p标签
  const $p = new jQuery('p');
  console.log($p);

  console.log("获取第2个p标签", $p.get(1));

  $p.on('click', () => alert('clicked'))
  ```
- 原型链的坑
  ```js
  console.log(xialuo.__proto__.sayHi)  // 可以打印出方法

  // 这种的话就是当作xialuo这个对象的隐式原型的方法执行的
  // xialuo.__proto__.name这些值是没有的
  xialuo.__proto__.sayHi()  // 执行的时候里面的值 undefind

  xialuo.sayHi();  // sayHi是当作对象的方法执行的
  // 那么this就是xialuo这个对象/实例,
  // 对象的方法实际上都是在隐式原型上，
  // 实际上 xialuo.sayHi() 有些类似 xialuo.__proto__.sayHi.call(xialuo)

  // 执行隐式原型的方法，并把this指向实例
  xialuo.__proto__.sayHi.call(xialuo)
  ```
