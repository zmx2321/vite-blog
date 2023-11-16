# React组件示例

## 1. 示例一
> 数字时钟
1. 静止的时间
- `new Date().toLocaleDateString()` => `"2021/2/24"`
- `new Date().toLocaleTimeString()` => `"下午9:13:07"`
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
  class Clock extends React.Component {
    // constructor最先执行，之后执行render
    // 构造函数
    constructor() {
      super();  // 为了能使用this

      // 获取dom中time值
      // 因为render的时候构造函数还没有执行，所以先执行构造函数里面的this.props报错
      // console.log(this.props.time);  // undefind
    }

    // react原型
    render() {
      // 获取dom中time值 - 可以获取值
      console.log(this.props.time);

      return (
        <div>
          // this.props.time 报错，无法显示对象
          <span>{this.props.time.getTime()}</span>
          <span>{this.props.time.toLocaleDateString()}</span>
          <span>{this.props.time.toLocaleTimeString()}</span>
        </div>
      )
    }
  }

  // 渲染
  ReactDOM.render(<Clock time={new Date()} />, app);
</script>
```

2. 让时间动起来
```html
<script src="../react/react.js"></script>
<script src="../react/react-dom.js"></script>
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
  class Clock extends React.Component {
    // 构造函数
    constructor() {
      super();  // 为了能使用this

      this.state = {
        time: new Date()
      }

      setInterval(()=> {
        // 箭头函数的this指向他父级
        this.setState({
          time: new Date()
        });
      }, 1000);
    }

    // react原型
    render() {
      return (
        <div>
          <span>{this.state.time.toLocaleDateString()}</span>
          <span>{this.state.time.toLocaleTimeString()}</span>
        </div>
      )
    }
  }

  // 渲染
  ReactDOM.render(<Clock />, app);
</script>
```

## 2. 示例二
> 加减数字框
```html
<script src="../react/react.js"></script>
<script src="../react/react-dom.js"></script>
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
  class NumberNode extends React.Component {
    // 构造函数
    constructor() {
      super();  // 为了能使用this

      this.state = {
        number: 10
      }
    }

    // react原型
    render() {
      return (
        <div>
          // 改变方法中的this指向
          <button onClick={this.last.bind(this)}>-</button>
          <button onClick={this.next.bind(this)}>+</button>
          <div>{this.state.number}</div>
        </div>
      )
    }

    // 方法 
    // -
    last() {
      this.setState({
        // 判断他是否和定义的dom值相等 - 同时dom那边是字符串
        number: this.state.number == Number(this.props.min) ? this.props.min : (this.state.number - 1)
      });
    }

    // +
    last() {
      this.setState({
        // 判断他是否和定义的dom值相等
        number: this.state.number == Number(this.props.max) ? this.props.max : (this.state.number + 1)
      });
    }
  }

  // 渲染
  ReactDOM.render(<NumberNode min='0' max='15' />, app);
</script>
```
