# 汇总已知的前端手写代码

## 1. CSS以及Html经典代码
### 1.1. 手写clearfix
```css
.clearfix:after {
  content: '';
  display:block;  /* 也可以设置成table */
  clear: both;
}
```

### 1.2. 使用flex实现一个三点的色子
```html
<style>
.box {
  display: flex;  /* flex 布局 */
  justify-content: space-between;  /* 两端对齐 */

  width: 200px;
  height: 200px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
}

/* 背景色、大小、边框 => 每个点 */
.item {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #666;
}

.item:nth-child(2) {
  align-self: center;  /* 第二项居中对齐，交叉轴(垂直)居中对齐 */
}

.item:nth-child(3) {
  align-self: flex-end;  /* 第三项尾对齐 */
}
</style>

<div class="box">
    <span class="item"></span>
    <span class="item"></span>
    <span class="item"></span>
</div>
```

## 2. Javascript经典题
### 2.1. 手写深拷贝
```js
/**
 * 深拷贝
 * obj => 要拷贝的对象
 */
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

let obj1 = {
  age: 20,
  name: "xxx",
  address: {
    city: "beijing"
  },
  arr: ["a", "b", "c"]
}

let obj3 = deepClone(obj1);
console.log(obj3)
```

### 2.2. 函数柯里化的实现
```js
// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
function curry(fn, args) {
  // 获取函数需要的参数长度
  let length = fn.length;

  args = args || [];

  return function() {
    let subArgs = args.slice(0);

    // 拼接得到现有的所有参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 如果满足，执行函数
      return fn.apply(this, subArgs);
    } else {
      // 如果不满足，递归返回科里化的函数，等待参数的传入
      return curry.call(this, fn, subArgs);
    }
  };
}
```

### 2.3. 用JavaScript手动实现观察者模式
```js
// 被观察者
function Subject() {
  this.observers = [];
}

Subject.prototype = {
  // 订阅
  subscribe: function (observer) {
    this.observers.push(observer);
  },
  // 取消订阅
  unsubscribe: function (observerToRemove) {
    this.observers = this.observers.filter(observer => {
      return observer !== observerToRemove;
    })
  },
  // 事件触发
  fire: function () {
    this.observers.forEach(observer => {
      observer.call();
    });
  }
}

// 验证一下订阅是否成功
const subject = new Subject();

function observer1() {
  console.log('Observer 1 Firing!');
}


function observer2() {
  console.log('Observer 2 Firing!');
}

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.fire();

//输出：
Observer 1 Firing! 
Observer 2 Firing!

// 验证一下取消订阅是否成功
subject.unsubscribe(observer2);
subject.fire();

//输出：
Observer 1 Firing!
```

### 2.4. 手写简易的jquerey(考虑插件和扩展性)
- 只是一个简易的结构
- 以class的形式
  - 这个其实相当于重写了
  ```js
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

  // 打印出页面所有的p标签
  const $p = new jQuery('p');
  console.log($p);

  console.log("获取第2个p标签", $p.get(1));

  $p.on('click', () => alert('clicked'))
  ```
- 扩展jquery，即造轮子
  - 方法一：插件的形式
    ```js
    // 在jQuery类的显示原型上添加方法(实际上相当于在类中添加方法，因为类中的方法实际上就是体现在显示原型上的方法)
    // 这种方法实际上还是jquery，只是在里面去做扩展
    jQuery.prototype.dialog = function (info) {
      alert(info)
    }
    ```
  - 方法二：继承
    ```js
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
    ```

### 2.5. 手写bind函数
```js
/* 
  手写前我们需要理解以下概念
  function fn1() {} => fn1.bind({}) => 即f1可以使用bind
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
```

### 2.6. 用闭包做一个简单的cache(缓存)工具
- 即get、set方法
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

### 2.7. 手写用Promise加载一张图片
```js
let loadImg = src=> {
  const p = new Promise((resolve, reject)=> {
    const img  = document.createElement('img');
    img.onload = ()=> {
      resolve(img)
    }
    img.onerrot = ()=> {
      const err = new Error(`图片加载失败 ${src}`)
      reject(err)
    }
    // 只要一赋值img，就会触发onload，就会触发resolve
    img.src = src
  })

  return p
}

const url1 = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'

// then就是promise原型里面的方法
loadImg(url1).then(img=> {
  console.log(img.width)
  // 这里的img要传到第二个函数的参数里面
  return img
}).then(img=> {
  console.log(img.height)
}).catch(err => console.log(err));
```

### 2.8. 通用的事件绑定函数
```html
<div id="div1" class="container">
  <button id="btn1">事件绑定示例1</button>
</div>

<div id="div2">
  <a href="#">a1</a><br>
  <a href="#">a2</a><br>
  <a href="#">a3</a><br>
  <a href="#">a4</a><br>
  <button>加载更多...</button>
</div>

<script>
  // 通用的绑定函数
  // 既能支持普通的监听
  // 又能支持代理的监听
  // 在代理中不需要在自己的业务逻辑中判断触发的元素
  // selector表示筛选出需要触发的标签
  // 并且需要this永远指向触发的元素
  let bindEvent = (elem, type, selector, fn)=> {
    // 需要做判断，如果没有传selector，即不是代理
    // x == null  =>  x === null || x === undefind
    // 如果fn为null表示传了三个参数，需要把对应关系转换一下
    if(fn == null) {
        fn = selector
        selector = null
    }

    // 绑定
    elem.addEventListener(type, event=> {
      // 不管有没有代理，都需要target
      const target = event.target  // 我们当前触发的元素
      const targetText = event.target.textContent  // 获取文本
      console.log("当前触发的元素", target)

      if(selector) {
        console.log("代理绑定");

        // 存在selector表示他是代理绑定
        // 使用matches表示，这个dom元素(我们当前触发的元素)，是否符合于这个css选择器
        if(target.matches(selector)) {
          // 将fn的this指向改成触发的元素
          // call第一个参数是this指向，后面的参数表示fn的参数
          // call会直接执行
          fn.call(target, event)
        }
      } else {
        console.log("普通绑定");

        // 不存在selector表示他是普通绑定
        // 需要this指向当前触发的元素，即target
        // event表示执行的函数的参数
        // 我们需要使用event对象做一些操作
        // call后面第二个参数开始，就可以当作函数的形参
        fn.call(target, event)
      }
    })
  }

  // 普通绑定
  const btn1 = document.getElementById('btn1')
  // 这里不能使用箭头函数，因为箭头函数没有this指向
  // 也可以说箭头函数里面的this指向当前方法块所在的环境(上级作用域)
  // 即箭头函数里面的this永远指向它的父级(即上级作用域)
  bindEvent(btn1, 'click', function (event) {
    // console.log(event.target) // 获取触发的元素
    event.preventDefault() // 阻止默认行为
    // 如果使用箭头函数，这里的this指向window
    alert(this.innerHTML)  // this指向触发元素

    // 如果使用箭头函数
    // alert(btn1.innerHTML)
  })

  // 代理绑定
  const div2 = document.getElementById('div2')
  // 表示只允许a标签触发
  bindEvent(div2, 'click', 'a', function (event) {
    event.preventDefault()  // 阻止默认行为
    alert(this.innerHTML)

    // 如果使用箭头函数
    // alert(div2.innerHTML)
  })
</script>
```


### 2.9. 手写简易的ajax
- 示例一
  ```js
  let ajax = (type, url, successFn)=> {
    const xhr = new XMLHttpRequest()
    xhr.open(type, url, true)
    xhr.onreadystatechange = function() {
      // 4：响应已完成；您可以获取并使用服务器的响应了
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          successFn(JSON.parse(xhr.responseText))
        }
      }
    }

    xhr.send(null)
  }

  ajax('GET', "https://jsonplaceholder.typicode.com/users", data=> {
    console.log("简易写法", data);
  })
  ```
- 示例二
  - promise
  ```js
  // 示例二: promise
  let ajaxPro = (type, url)=> {
    const p = new Promise((resolve, reject)=> {
      const xhr = new XMLHttpRequest()
      xhr.open(type, url, true)
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else if(xhr.status === 404) {
            reject(new Error('404 not find'));
          }
        }
      }

      xhr.send(null)
    })

    return p
  }
  
  ajaxPro("GET", "https://jsonplaceholder.typicode.com/posts").then(res=> {
      console.log("promise写法", res);
  }).catch(err=> {
      console.error("promise写法报错", err);
  })
  ```


### 2.10. 手写防抖
```html
<input type="text" id="input1">

<script>
  // 监听键盘输入
  /* const input1 = document.getElementById('input1');
  input1.addEventListener('keyup', function() {
      console.log(input1.value);  // 每一次按键都会打印
  }) */

  /**
   * 体验防抖
   */
  // 如果每次按键都走一次请求会非常糟糕
  // 实现输入完停顿一段时间(比如半秒)，再做操作(打印或者请求)
  // 这个机制(需求)就是防抖
  // 需要用到定时器 => 实际上就是定时器的一种应用
  const input1 = document.getElementById('input1');
  let timer  = null;
  input1.addEventListener('keyup', function() {
    // 比如输入123,
    // 输入1，此时timeer不存在，timer赋值定时器id(1)，并把方法加入异步队列，等待时机执行
    // 马上输入2，此时timer存在，但异步队列中的方法还未执行(时机未到)，清除定时器(即1的定时任务)，赋值定时器id(2)，，并把方法加入异步队列，等待时机执行
    // 马上输入3，同理
    // 停止输入，即超过500毫秒，触发定时器任务，获取value值并打印
    // 清空定时器
    if(timer) {
      clearTimeout(timer)
    }
    // 一直输入，只要中间间断不超过500毫秒，就不会打印
    timer = setTimeout(()=> {
      // 模拟触发change事件
      console.log(input1.value);  

      // 清空定时器
      timer = null
    }, 500)
  })

  /**
   * 封装防抖
   */
  // debounce是对函数的封装，最终返回的应该也是一个函数
  // 延迟时间默认500毫秒
  const debounce = (fn, delay = 500)=> {
    // timer是在闭包中的 => 下面的if(timer)
    // 这样不会被外界轻易拿到 => 即不对外暴露
    // 我们在外面使用不需要关心
    // 同时也是在debounce的作用域中
    // 闭包的使用场景：函数当做返回值或者参数传入
    let timer = null;

    // 函数作为返回值，这就形成闭包了
    return function() {
      // 这里面的timer需要在它定义的作用域往上寻找
      if(timer) {
          clearTimeout(timer)
      }

      timer = setTimeout(()=> {
        // 触发change事件
        // 第一个参数是改变this指向
        // 第二个参数是获取所有的参数
        // apply第二个参数开始，只接收数组
        // fn函数在执行的时候，argument传进来
        // debounce返回的函数可能会传进来一些参数
        // 面试使用fn()也没问题
        // fn()
        fn.apply(this, arguments)  

        // 清空定时器
        timer = null
      }, delay)
    }
  }

  const input1 = document.getElementById('input1');
  // 使用debounce生成一个函数
  // 如果要是用之前fn里面的this，这里不能使用箭头函数
  input1.addEventListener('keyup', debounce(e=> {
      console.log(e.target)  // 如果不传arguments，在这里无法识别e，也就无法获取当前dom
      console.log(input1.value);
  }), 600)  // 不传默认500ms，传的话就覆盖
</script>
```

### 2.11. 手写节流
```html
<style>
  #div1 {
    width: 200px;
    height: 100px;
    border: 1px solid #ccc;
    background: #f00;
  }
</style>

<div id="div1" draggable="true">可拖拽</div>

<script>
// 监听拖拽
  /* const div1 = document.getElementById('div1');
  div1.addEventListener('drag', function(e) {
    // 每次移动都会频繁打印
    console.log(e.offsetX, e.offsetY);  // 打印坐标
  }) */

  /**
   * 体验节流
   */
  const div1 = document.getElementById('div1')
  let timer = null
  div1.addEventListener('drag', function(e) {
    // 拖拽是永远不间断进行的，即连续触发
    // 第一次没值，但马上就有值了
    // 但只要有值就return出去
    // 等下面100ms到了，timer被赋值成null，这个if就不执行
    if(timer) {
      return
    }

    // 给timer赋值一个定时器
    // 100ms没到的时候，里面方法没执行，定时器就不会被赋值成null
    // 100ms到了，打印，赋值成null
    // if不执行，重新生成一个定时任务,timer有值，return
    // 直到定时任务执行之前都return
    // 执行完定时任务，timer又为null
    // 再次生成一个定时任务
    timer = setTimeout(()=> {
      // 每次移动都会频繁打印
      console.log(e.offsetX, e.offsetY)  // 打印坐标

      timer = null
    }, 100)
  })

  /**
   * 封装节流
   */
  const throttle = (fn, delay = 100)=> {
    let timer = null  // 这个timer是在闭包里面的

    // 如果不使用apply改变this指向，下面的throttle方法的参数指向这个函数
    // 不会传给下面的那个fn
    return function() {
      if(timer) {
        return
      }

      timer = setTimeout(()=> {
        // 一般写一个事件，function里面都要加上event参数，即事件对象
        fn.apply(this, arguments)  // 打印坐标

        timer = null
      }, delay)
    }
  }

  const div1 = document.getElementById('div1')
  // 如果用this指向，不能用箭头函数
  // 上面如果不加arguments，这里无法获取坐标
  // 如果不改变this指向，throttle方法里面的参数会传给throttle返回的那个函数
  // event这个事件对象是传给return的这个函数的，再由这个函数传给fn的
  // throttle里面的这个函数是fn，需要有事件对象
  // 事件监听有事件对象，事件对象一般是监听事件里面的参数，这里的事件对象在throttle的返回值中，即return里面的this
  // 所以fn.apply(this, arguments)意思是把fn函数的this指向事件对象，并传入所有参数
  div1.addEventListener('drag', throttle(function(e) {
    console.log(this);  // 箭头函数指向父级，即当前函数所在环境，即window
    console.log(e.offsetX, e.offsetY)  // 打印坐标
  }), 2000)  // 不传默认100
</script>
```

### 2.12. 手写深度比较
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

### 2.13. 手写字符串trim方法
- 考察原型、this、正则、字符串api
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

### 2.14. 如何获取多个数字中的最大值
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

### 2.15. 将url参数解析为js对象
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

### 2.16. 手写数组flatern，考虑多层级
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

## 3. 基本算法
### 3.1. 数组冒泡
```js
/**
 * 冒泡排序: 让前项和后项比较，如果当期项大于后一项，两者交换位置
 * 每一轮当前项和后一项两两比较，虽然不一定达到最后结果，但是已经把当前最大的值放到末尾了
 */

let ary = [5, 7, 6, 2, 1, 0, 3, 8, 9];

function bubbleSort(ary){
    var temp = null;
    for(var i=0; i<ary.length-1; i++){
        for(var j=0; j<ary.length-1-i; j++){    //每一轮比较的次数
            if(ary[j] > ary[j+1]){    //如果当期项大于后一项，两者交换位置
                temp = ary[j];
                ary[j] = ary[j+1];
                ary[j+1] = temp;
            }
        }
    }
    return ary;
}

var res = bubbleSort(ary);
console.log(res);
```

### 3.2. 数组插入排序
```js
/**
 * 取一个数，数组中依次与末尾的数比较，从后往前比较
 */
let ary = [5, 7, 1, 2, 6, 0, 3, 8, 9];

function insertSort(ary){
	let newAry = [];
	newAry.push(ary[0]);

	for(let i=1; i<ary.length; i++){
		let cur = ary[i];

		for(let j=newAry.length-1; j>=0;){
			if(cur < newAry[j]){
				j--;
				if(j === -1){	//当前的数比数组中每一个数都小
					newAry.unshift(cur);	//将当前的数放在新数组最前面
				}
			}else{
				newAry.splice(j+1, 0, cur);	//从索引(newAry[j+1]处，删除0项，把当前项cur插入前面
				j = -1;
			}
		}
	}
	return newAry;
}

let res = insertSort(ary);
console.log(res);
```

### 3.3. 数组快速排序
```js
let ary = [5, 7, 1, 2, 6, 0, 3, 8, 9];

function quickSort(ary){
  //传过来的数组只有一项，直接返回
  if(ary.length <= 1){
    return ary;
  }

  let pointIndex = Math.floor(ary.length / 2); // 找到基准点的索引
  let pointValue = ary.splice(pointIndex, 1)[0];	// 通过基准点的索引，在原数组中删除，并获取其值
  // 拿基准点的值和原数组的每一项值比较，小的放左边，大的放右边
  let left = [];
  let right = [];
  for(let i=0; i<ary.length; i++){
    let cur = ary[i];
    cur < pointValue ? left.push(cur) : right.push(cur);
  }

  return quickSort(left).concat([pointValue], quickSort(right));	// 递归	//concat拼接数组（左边排序好的数组，加中间，加右边排序好的数组）
}

let res = quickSort(ary);
console.log(res);
```

### 3.4. 数组去重
```js
let array = [9, 4, 3, 2, 1, 8, 3, 6, 7, 0, 1];

function unique3(array){
  let n = [array[0]]; //结果数组
  //从第二项开始遍历
  for(let i = 1; i < array.length; i++) {
    //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
    //那么表示第i项是重复的，忽略掉。否则存入结果数组
    if (array.indexOf(array[i]) == i) n.push(array[i]);
  }
  return n;
}

let arr = unique3(array);
console.log(arr);
```

### 3.5. 从小到大排序
```js
let array = [9, 4, 3, 2, 1, 8, 3, 6, 7, 0, 1];

function sortNumber(a, b){
	return a - b
}

console.log(array);
console.log(array.sort(sortNumber));
```