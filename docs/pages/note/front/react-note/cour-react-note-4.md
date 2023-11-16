# React获取节点、双向绑定

## 1. 双向绑定和获取节点
- `input`一旦改变内 => 触发一个函数 => 改变state.msg（setState）
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
  class InputChange extends React.Component {
    constructor() {
      super();

      this.state = {
        msg: ""
      }
    }

    render() {
      return (
        <div>
          <input type="text" onChange={this.change.bind(this)} id="inputNode" ref="leo" />
          <div>{this.state.msg}</div>
        </div>
      )
    }

    // react不限制使用方式

    // 获取节点数据（方法一，根据dom节点）
    // 原生
    /* change(e) {
      this.setState({
        msg: document.querySelector("#inputNode");
      });
    } */

    // 获取节点数据（方法二，根据dom节点中的事件源）
    // e为事件对象
    // 获取本身事件源
    /* change(e) {
      // console.log("获取事件源", e.target);

      this.setState({
        msg: e.target.value
      });
    } */

    // 获取节点数据（方法三，使用ref，官方推荐）
    // 一般用来获取非本身元素(非事件源)
    change() {
      // console.log("获取事件源", this.refs.leo);  // 或者 this.refs['leo']

      this.setState({
        msg: this.refs.leo.value
      });
    }
  }

  ReactDom.render(<InputChange />, app);
</script>
```

## 2. 事件对象(js)
```js
document.onClick = function() {
  console.log(e);

  // 事件对象中有一个东西很好用 => target => 指向的是html即事件源
}

// 事件源可以用原生的方法找到
// 示例：
function a(e) {
  console.log(e.target);
}
document.onClick = a;
// 显示出当前事件的dom结构

// 示例：
<div></div>
document.querySelector('div').onclick = a;
// 即打印出div的dom结构
```

## 3. 小栗子 - 拖拽
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<style>
.box {
  width: 100px;
  height: 100px;
  background: #f00;
  position: absolute;
}
</style>

<script type="text/babel">
class Drag extends React.Component {
  // 数据初始化
  constructor() {
    super();

    this.state = {
      needX: 0,
      needY: 0
    }

    this.disX = 0;
    this.disY = 0;
  }

  render() {
    return (
      /* <div className="box"
           style={{left:this.state.needX, top:this.state.needY, background:this.props.background}}
           onMouseDown={this.fnDown.bind(this)}></div> */
      <div className="box"
           style={{
             left: this.state.needX, 
             top: this.state.needY, 
             background: this.props.style.background,
             width: this.props.style.width
             height: this.props.style.height
            }}
           onMouseDown={this.fnDown.bind(this)}></div>
    );
  }

  // 鼠标按下时触发
  // 获取当前元素，需要获取当前节点(事件源)，使用事件对象
  fnDown(e) {
    // client相对于浏览器左上角，offsetLeft表示这个dom元素左边缘距离浏览器的位置
    // e.clientX - e.target.offsetLeft表示在x轴上鼠标点击相对于当前dom元素的坐标
    this.disX = e.clientX - e.target.offsetLeft;
    this.disY = e.clientY - e.target.offsetTop;

    // 开始拖
    document.onmousemove = this.fnMove.bind(this);

    // 拖完之后清除（鼠标释放时触发）
    document.onmouseup = this.fnUp.bind(this);
  }

  // 拖动元素时触发
  fnMove(e) {
    this.setState({
      // 鼠标点击时的位置基于浏览器左上角原点的坐标-鼠标点击时基于dom元素的坐标，即dom元素平移后的原点坐标
      needX: e.clientX - this.disX,
      needY: e.clientY - this.disY
    });
  }

  // 拖完之后清除（鼠标释放时触发）
  fnUp() {
    document.onmousemove = null
    document.onmouseup = null
  }
}

// ReactDOM.render(<Drag background="green" />);
ReactDOM.render(<Drag style={{background:'green', width:'10px', height:'10px'}} />);
</script>
```