# React中父子级组件通信

## 1. jsx简述
> jsx中大括号里面为js语法
- 函数允许调用组件，组件也可以调用函数
  - `{函数名()}`
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
  let a = 'hello';
  let b = <div>{a}</div>

  // 或使用方法
  let a = ()=> {
    // return 'hello'
    return <span>hello</span>
  }
  let b = <div>{a()}</div>

  // 或者使用稍微复杂一些的方法
  let a = v=> {
    if(v>3) {
      return <span>大</span>
    } else {
      // return <span>小</span>
      return <Leo />
    }
  }
  let b = <div>{a(5)}</div>

  // 或者使用类
  class Leo extends React.Component {
    render() {
      return <span>组件leo</span>
    }
  }
  let c = ()=> {
    return <span>函数c</span>
  }

  let a = v=> {
    if(v>3) {
      return <span>{c()}</span>
    } else {
      return <Leo />
    }
  }

  let b = <div>{a(2)}</div>

  ReactDOM.render(b, app);

  // 数字时钟小例子
  // 函数允许调用组件，组件也可以调用函数
  let clock = ()=> {
    let c = <span>{new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}</span>
    ReactDOM.render(c, app);
  }

  setInterval(clock, 1000);
</script>
```

## 2. 组件嵌套
> 组件的意义在于 => 深度重复调用
1. 组件的嵌套 => 父子组件
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
// 子组件
class Child extends React.Component {
  render() {
    return (
      <div>
        <span style={this.props.textColor}>子组件</span>
      </div>
    )
  }
}

// 父组件
class Parent extends React.Component {
  // 可以给子组件传值，重复调用
  render() {
    return (
      <div>
        <span>父组件</span>
        <Child textColor='#ccc' />
        <Child textColor='#f00' />
      </div>
    )
  }
}

// 渲染父组件
ReactDOM.render(<Parent />, app);
</script>
```

2. 一个面试题-如果需要子组件字体显示随机颜色
- Math.random();
- rgb(1-255, 1-255, 1-255)
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
// 子组件
class Child extends React.Component {
  render() {
    return (
      <div>
        <span style={this.props.textColor}>子组件</span>
      </div>
    )
  }
}

// 父组件
class Parent extends React.Component {
  // 可以给子组件传值，重复调用
  render() {
    let arr = [];

    for(let i=0; i<10; i++) {
      // 数组循环中不添加key会报错(虚拟dom必须加标识)
      arr.push(<Child key={i} textColor={'rgb(' + parseInt(Math.random()*256) + "," + parseInt(Math.random()*256) + "," + parseInt(Math.random()*256) + ')'} />)
    }
    // console.log(arr);

    return (
      /* <div>
        <span>父组件</span>
        <Child textColor={'rgb(' + parseInt(Math.random()*256) + "," + parseInt(Math.random()*256) + "," + parseInt(Math.random()*256) + ')'} />
      </div> */

      <div>
        <span>父组件</span>
        {arr}
      </div>
    )
  }
}

// 渲染父组件
ReactDOM.render(<Parent />, app);
</script>
```

## 3. 组件通信
### 3.1 父组件拿子组件的数据
- `<Child msg={父组件的数据} />` => this.props.msg
- 默认情况下，父组件重新渲染，会统一同步
- 不想同步，就存成一个state，触发事件，就不会重新渲染了
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
// 子组件
// 把父组件的数据传到子组件
class Child extends React.Component {
  // 定义初始值
  constructor() {
    super();

    this.state = {
      msg: ''
    }
  }

  // 如果不希望子组件上的数据，随父组件事件的变化而变化,使用生命周期
  // 在挂载前拿到数据
  // 在挂载前能拿到属性，这个msg状态是自己的，他的值发生改变了
  // 只要不重新渲染就没问题，如果重新渲染了，子组件的值才会真正改变(拿到父组件的值)
  // 只有挂载前重新渲染了一遍，之后不管怎么操作(父组件的值在事件下改变)，他对子组件没有影响，生命周期里面只在最开始的时候赋值一次
  componentWillMount() {
    this.setState({
      msg: this.props.setMsg
    });
  }

  // 父传子，实际上和ReactDOM里面的值传到类里面是一样的,ReactDOM里面实际上也就是父组件
  /* render() {
    return (
      <div>
        <span>ReactDOM => {this.props.testmsg}</span>
        <span>子组件 => {this.props.setMsg}</span>
      </div>
    )
  } */
  render() {
    return (
      <div>
        <span>子组件 => {this.state.msg}</span>
      </div>
    )
  }
}

// 父组件
class Parent extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: '父组件的数据'
    }
  }

  // 在子组件上定义方法传值
  render() {
    // 用事件查看数据是否同步
    return (
      <div>
        <button onClick={this.show.bind(this)}>测试数据</button>
        <span>父组件 => {this.state.msg}</span>
        <Child setMsg={this.state.msg} />
      </div>
    )
  }

  show() {
    console.log("测试数据");

    this.setState({
      msg: '改变父组件的数据'
    });
  }
}

// 渲染父组件
ReactDOM.render(<Parent testmsg="父组件-testmsg" />, app);
</script>
```

### 3.2 子组件拿父组件的数据
- 标签上能传数据，就能传函数
- 能传函数调用props就可以用这个属性了
- 能用这个属性，传个函数就等于调用了这个函数
- `<Child fn={父组件的一个函数.bind(this)} />`
  - 不bind这个函数会指向fn
- 子组件里面指向函数
  - `this.props.fn(传入子组件的数据)`
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
// 子组件
class Child extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: '子组件数据',
    }
  }

  // 挂载前
  componentWillMount() {
    // 子组件调用到了父组件的函数
    console.log(this.props);  // f=>getMsg

    // 子组件可以执行父组件的方法
    // 函数最大的特性是传参
    // 可以把this传过去，实际上就是child组件
    this.props.getMsg(this.state.msg);
  }

  render() {
    return (
      <div>
        <span>子组件</span>
      </div>
    )
  }
}

// 父组件
class Parent extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: "",
    }
  }

  // 可以给子组件传值，重复调用
  // show如果不给他绑定，show指向getMsg这个函数
  render() {
    return (
      <div>
        <span>父组件 => {this.state.msg}</span>
        <Child getMsg={this.show.bind(this)} />
      </div>
    )
  }

  // 即可以获取子组件带来的参数
  show(val) {
    // console.log(this);  // show如果不给他绑定，show指向getMsg这个函数
    // 绑定之后，this指向当前类，即parent
    // console.log(val);  // 子组件数据

    this.setState({
      msg: v
    });
  }
}

// 渲染父组件
ReactDOM.render(<Parent />, app);
</script>
```

## 4. 组件通信小栗子
> 烧开水 - 官方推荐
### 4.1. 使用函数的方法
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
let showText = (val, min, max) => {
  // 如果是字符串和字符串进行比较的话，他是一个字符一个字符的进行比较，所以'11'>'100'
  console.log(val, min, max);

  if(Number(val)<Number(min)) {
    return '水结冰了'
  } else if(Number(val)>Number(max)) {
    return '水烧开了'
  } else {
    return '水正在加热中'
  }
}

class Water extends React.Component{
  constructor() {
    super();

    this.state = {
      Wd: 20,
    }
  }

  render() {
    return (
      <div>
        <input type='number' onChange={this.show.bind(this)} defaultValue={this.state.Wd} />
        {showText(this.state.Wd, this.props.min, this.props.max)}
      </div>
    )
  }

  show(e) {
    // 获取当前的温度，并且将值传给showText
    this.setState({
      Wd: e.target.value
    });
  }
}

ReactDOM.render(<Water min='0' max='80' />, app);
</script>
```

### 4.2. 使用组件的方法
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
// 子组件
class ShowText extends React.Component{
  constructor() {
    super();

    this.state = {
      msg: "",
    }
  }

  // 挂载前触发
  componentWillMount() {
    // console.log(this.props.v)  // 子组件获取父组件的值

    // 初始调用
    this.tShow();  // 判断水状态
  }

  // 数据更新前触发，更新之前值还未变，所以打印出重复的值
  /* componentWillUpdate() {
    console.log(this.props.v)
  } */

  // 数据更新之后
  componentDidUpdate() {
    // console.log(this.props.v)

    this.tShow();  // 判断水状态
  }

  render() {
    return (
      <div>
        <span>{this.state.msg}</span>
      </div>
    )
  }

  // 判断水状态
  tShow() {
    // 子组件获取父组件的值(在子组件上定义)  子组件获取父组件标签的值(在父组件上定义)
    if(Number(this.props.v) < Number(this.props.min)) {
      this.setState = {
        msg: '水结冰了'
      }
    } else if(Number(this.props.v) > Number(this.props.max)) {
      this.setState = {
        msg: '水烧开了'
      }
    } else {
      this.setState = {
        msg: '水正在加热中'
      }
    }
  }
}

// 父组件
class Water extends React.Component{
  constructor() {
    super();

    this.state = {
      Wd: 20,
    }
  }

  render() {
    // 子组件可以获取父组件的值和方法
    return (
      <div>
        <input type='number' onChange={this.show.bind(this)} defaultValue={this.state.Wd} />
        <ShowText v={this.state.Wd} min={this.props.min} max={this.props.max} />
      </div>
    )
  }

  show(e) {
    // 获取当前的温度，并且将值传给showText
    this.setState({
      Wd: e.target.value
    });
  }
}

ReactDOM.render(<Water min='0' max='80' />, app);
</script>
```
