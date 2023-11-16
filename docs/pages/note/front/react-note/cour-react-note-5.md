# React生命周期

> 简单来说，react通过定义几个函数来控制组件的每一个阶段的一个动作，这个就叫作生命周期，只有组件才有生命周期（Component[组件]）。
- componentWillMount 组件挂载前(组件渲染/加载前)
- componentDidMount 组件挂载后
- componentWillUpdate 组件更新前
- componentDidUpdate 组件更新后
- componentWillUnmount 组件卸载之前
- 没有组件卸载后了，这时候组件都已经没了……
-  例子：
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
class Leo extends React.Component{
  /**
   * 生命周期
   */
  // 属性可以找到，因为这个实例化已经执行了，唯独只差渲染
  // 渲染前的一个函数，可以找到所有的状态和属性
  componentWillMount() {
    console.log(document.querySelector('#box1'));  // null（找不到元素）
    console.log(this.props.l);  // 1（可以找到）
    console.log(this.state.msg);  // hello（可以找到）
    console.log("组件挂载前");
  }

  // 能找到元素，其他和挂载前相同
  componentDidMount() {
    console.log("组件挂载后");
  }

  // 在数据更新之前触发(还未触发事件)
  componentWillUpdate() {
    console.log("组件更新前");
    debugger;  // 点击到断点的时候dom里面的字符串还未改变
  }

  // 已经触发事件，组件状态已经更新了，即构造函数中的值已经被事件改变了
  componentDidUpdate() {
    console.log("组件更新后");
  }

  componentWillUnmount() {
    console.log("组件卸载之前");
  }

  // 构造函数，用来初始化数据
  // 状态
  constructor() {
    super();  // 用this之前

    this.state({
      msg: "hello"
    });
  },

  render() {
    return (
      <div>
        <button onClick={this.show.bind(this)}>点击</button>
        <div id="box1" l="1">{this.state.msg}</div>
      </div>
    );
  }

  show(e) {
    // 为了防止和document的事件重叠(冒泡)
    // 需要在此进行阻止冒泡(阻止document事件冒泡到这个按钮事件中)

    // 常用的三个阻止冒泡的方法
    // e.cancelBubble = true;  // 不起作用
    // e.stopPropagation();  // 不起作用
    // return false;  // 不起作用

    // 这个事件对象是react封装过的事件对象
    // 这个事件对象中有一个事件叫 nativeEvent (native是原生的意思) => 即原生的事件对象
    console.log(e);  // 这里面的nativeEvent为null
    console.log(e.nativeEvent);  // 这里面有值

    // e.nativeEvent.cancelBubble = true;  // 不起作用

    // e.nativeEvent的原型链下原型链下找到 stopImmediatePropagation
    // stopImmediatePropagation  停止立即传播
    // 阻止冒泡 - 面试经常会用到
    e.nativeEvent.stopImmediatePropagation();

    console.log("点击");

    this.setState({
      mag: Math.random()
    });
  }
}

ReactDOM.render(<Leo />, app);

// 卸载组件
// 希望在点击document的时候卸载，在点击按钮的时候只更新事件
// 此时点击按钮会将组件卸载 => 事件冒泡
// 底层元素和父级元素事件重叠了
// 要进行阻止冒泡
document.onclick = function() {
  // app.innerHTML = '';  // 不起作用
  ReactDOM.render(<h1>aaaa</h1>, app);
}
</script>
```
