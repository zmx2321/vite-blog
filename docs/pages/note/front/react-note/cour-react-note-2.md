# React组件及Class、参数、状态的使用

## 1. 简单的渲染
```html
<!-- dom核心 -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- jsx -->
<script src="../babel/browser.js"></script>
...
<div id="app"></div>

<script type="text/babel">
  // 第一个参数 - 组件 （内容、元素）
  // 第二个参数 - 位置 （放到哪）
  
  // 必须有一个根元素
  // 允许加括号
  // 单标签必须闭合
  // 必须使用className
  // 换行无影响
  // style使用两个大括号，第一个大括号表示jsx
  // 事件名使用驼峰

  // 渲染
  ReactDOM.render(<h1 className="helo">hello</h1>, app);
</script>
```
- 用最基本的写法，一旦业务复杂就会显得很乱，官方建议用面向对象的方法写

## 2.面向对象的方式的渲染
### 1. js的两种面向对象
#### 1. es6之前
- 写一个函数 -> new 这个函数 = 类
- 示例：
  ```js
  function show() {
    alert(1);
  }

  // 他的this指向默认为window
  // 使用new之后，同时他的this指向也变成show()，即它自己了
  console.log(typeof new show());  // object

  // new之后它就是一个类，它可以通过原型链挂载方法
  show.prototype.add = function() {
    alert(2);
  }
  new show().add();

  // 继承
  function b() {
    alert(3);
  }

  b.prototype = new show();
  new b().add();
  ```

- js中数据类型与类的关系
  - 类 => constructor => 任何东西都有他的类
    - `"sss".constructor` => String
    - `function bb(){}; bb.constructor` => function
    - `let a=1; a.constructor` => Number
  - 原型 => prototype => 类下面有他的原型(方法)
  - 原型链 => `__proto__`
  - js中类就是constructor，类下面有原型，就是prototype，可以理解为类的方法，原型链就是__proto__

#### 2. es6之后
- Class的方式
- 示例
  ```js
  // 实际上和function Leo(){}差不多，但class没有变量提升
  class Leo {
    // 他有一个默认的方法(默认执行)
    // 调用这个类的话(new Leo())，会默认先执行这个函数
    // 可以设置这个类的属性
    // 可以传参constructor(name){alert(name)} => new Leo("leo")
    // 且可以传多个值
    // 建议写一些初始的属性
    constructor() {
      // 私有属性，不被外界污染，即this指向当前对象
      this.a = 666;
    }

    // 原型就是和constructor同级的函数即可
    // 里面的方法相当于原型
    // new Leo().show()
    show() {
      alert(10);
      console.log(this.a);
    }
  }

  // 如果没有new就是function
  console.log(typeof new Leo());  // object

  // 原型链实际上就是继承
  // 继承
  class Small extends Leo {
    // 即super有两个功能
    // 使子类构造函数能使用this
    // 继承父类的参数
    constructor() {
      // 在子类的构造函数中不使用super，就不能使用this，否则会报错
      // 还有一个功能就是继承父类的参数,
      // 子类参数如果想继承父类，子类参数放入 construction和super中
      // 继承一个参数constructor(x){super(x)} => new Small("ss").show();
      // 继承所有参数constructor(...val){super(...val)}
      super();
      this.a = 777;  // 如果不加super会报错
    }
  }

  // 调用父类Leo方法
  // 可以继承原型和私有属性
  new Small().show();  // 10, 666 => 同时继承私有属性
  ```

### 2. react中的面向对象
#### 2.1. 简述改变this指向的方法
- call
  - 第一个参数可以改变函数的this
  - 从第一个参数之后的参数就是对应函数的形参
  - 函数默认会直接调用
  ```js
  // function show(...val)
  // console.log(val) => 1, 2, 3
  function show(...val) {
    console.log(val)  // 获取函数所有的参数
    console.log(this);  // 默认指向windows

    this.prototype.k = 10;
  }

  show();  // 默认指向window

  // call => 放什么就指向什么
  // call第一个参数可以直接改变前面调用者的this指向
  // 剩余的参数就是对应的函数的形参
  // show.call(String, 1, 2, 3);
  show.call(1);  // Number(1)
  // 放一个String类
  // 第二个参数开始就是函数的参数
  show.call(String,1,2,3,4,5,6);  // f String(){}

  // show.call(String);之后相当于this指向字符串，那么this.prototype.k = 10;相当于给所有字符串加了k属性，所以字符串下面的k就是10
  console.log("ass".k);  // 10
  ```
- apply
  - 第一个参数可以改变函数的this
  - 第二个参数是数组对象，就是对应函数的形参
  - 函数默认会直接调用
  - 除了第二个参数是数组，其他和call一摸一样
  ```js
  // function show(...val) => console.log(val)  // [1, 2, 3]
  // => console.log(val[2])  // 2
  function show() {
    console.log(this);  // 默认指向windows
  }

  // 如果只传第一个参数，那么和call是一模一样的
  show.apply(1);  // Number(1)

  // 第二个参数表示函数的形参
  show.apply("aaa", 1, [1, 2, 3]);
  ```
- bind
  - 第一个参数可以改变函数的this
  - 从第一个参数之后的参数就是对应函数的形参
  - 函数不会直接调用
  - 除了不会直接调用，其他和call一摸一样
  ```js
  function show(...val) {
    console.log(val)
    console.log(this);  // 默认指向windows
  }

  // 函数不会直接调用 => 其他和call几乎一样
  // show.bind(1);  // 函数没有调用
  show.bind(1, 2, 4, 6)();  // 函数调用 => Number(1)

  // 示例2：
  // 函数不会直接调用的优势
  let a = 5,
      b = {
        a: 12,
        show() {
          console.log(this);  // 指向b这个对象
          setTimeout(function(){
            alert(this.a);  // 因为window.setTimeout,所以指向window，即a=5
          }, 1000);
        }
      };

  b.show();

  // 如果想要b.show为12，那么就需要将setTimeout里面的this改变为show里面的this，show里面的this指向的是b，因为是b调用的show方法，谁调指谁
  // 变形为
  show() {
    setTimeout(function(){
      alert(this.a);  // 因为window.setTimeout,所以指向window，即a=5
    // 最外层的this指向b这个对象，b调用show
    // 可以直接bind当前函数
    // 这里不会直接调用
    }.bind(this), 1000);
  }
  ```

#### 2.2. react组件
- es6类 + jsx语言
  - class 自定义名字 extends React.Component
    - 类名首字母必须大写
  - react只有继承于React.Component才可以使用react的组件类
  - 里面第一个要知道的方法就是render，render本身是渲染的意思，组件本身就是要渲染，渲染出来的东西要return出来
  ```html
  <!-- dom核心 -->
  <script src="../react/react.js"></script>
  <!-- 虚拟dom -->
  <script src="../react/react-dom.js"></script>
  <!-- jsx -->
  <script src="..babel//browser.js"></script>
  ...
  <div id="app"></div>

  <script type="text/babel">
    // 需要让这个类与react有关系，那么就继承于react
    // react组件在这里面叫React.Component
    // 类名必须大写，否则不渲染
    class Leo  extends React.Component{
      // 定义私有属性
      constructor() {
        super();  // es6语法中，子类继承父类，如果不使用super，则无法使用this
        this.state = {
          msg: "hello",
        }
      }

      // react中渲染的方法
      render() {
        console.log(this);  // Leo这个对象
        // 标签里面的属性用props获取
        // 将show里面的this指向改变为render，render中的this指向的是Leo这个对象，即把原型show中的this指向到Leo这个对象
        // 不能使用call，因为call是直接调用(即还没点击就直接出现了)
        return (<div>
                  <h1>hello，，，{this.props.a}</h1>
                  <h1>{this.state.msg}</h1>  // => hello
                  <button onClick={this.show.bind(this)}>testBtn</button>
                  <button onClick={this.showTxt.bind(this)}>testMsgBtn</button>
                </div>)
      },

      // 原型
      show() {
        // 这里的this已经改变了指向，所以this为null，this.props.a报错
        // 这里需要将show里面的this指向render里面的this
        // js中改变this指向，call、bind、apply
        alert(1);

        // 会报错，因为props为只读属性
        // this.props.a = 15;  // 修改属性a的值
      }

      // 原型
      showTxt() {
        // 数据分可渲染数据和不可渲染数据
        this.state.msg = '23333';
        // json改变数据的方式 不会进行渲染
        console.log(this.state.msg);  // 控制台有值但无法渲染

        // 使用setState view层进行渲染
        // setState是React.Component中的一个原型（方法），由于继承关系，leo可以继承React.Component的私有属性和原型
        this.setState({
          msg: "23333",
        });
      }
    }

    // 渲染
    // 输出this的时候，a,b属性在props对象里面
    // 标签 - 可以写属性
    // 但这里的标签加的不叫属性，叫参数
    // props只能读，不能写
    // 使用state(状态)可以改变
    // 上面return什么，这里的render就输出什么
    ReactDOM.render(<Leo a='12' b='9' />, app);
  </script>
  ```
- 隐藏显示小例子
  ```html
  <!-- dom核心 -->
  <script src="../react/react.js"></script>
  <!-- 虚拟dom -->
  <script src="../react/react-dom.js"></script>
  <!-- jsx -->
  <script src="../babel/browser.js"></script>
  ...
  <div id="app"></div>

  <script type="text/babel">
    class Title extends React.Component{
      // 私有属性
      constructor() {
        super();
        this.state = {
          show: 'block'
        }
      }

      // 渲染
      render() {
        (
          <div>
            // 改变原型changed的this指向为当前类，以获取构造函数的值
            <button onClick={this.changed.bind(this)}>切换</button>
            <br />
            // 只要改变构造函数中state里面的show就可以显示隐藏div
            <div className="box" style={{display:this.state.show}}></div>
          </div>
        )
      }

      changed() {
        this.setState({
          // 判断show值是否为block，如果是则为none，否则为block
          show: this.state.show=='block' ? 'none' : 'block'
        });
      }
    }

    ReactDOM.render(<Title />, app);
  </script>
  ```