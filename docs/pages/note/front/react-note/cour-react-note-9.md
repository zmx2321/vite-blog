# React高级选项卡(轮播图)

## 1. React高级选项卡
- 1.大图、2.文字、3.大小按钮、4.缩略图、5.左右按钮
- 点击缩略图-大图转到缩略图位置
- 文字介绍切换
- 分析组件分布
  - 分三个组件去做 => top[1 5]、center[2 3]、bottom[4 5]
- 组件
  - 写起来费劲
  - 用起来方便
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<style>
  .out_box {
    width: 400px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .top_box {
    position: relative;
    float: left;
    width: 100%;
    height: 300px;
  }

  .top_box ul {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    transition: 0.7s;
  }

  .top_box ul li {
    float: left;
    width: 400px;
    height: 100%;
    background-size: cover;
    background-position: center center;
    overflow: hidden;
    transition: 0.3s;
  }

  .top_box ul li img {
    width: 100%;
    height: 100%;
  }

  .left_click {
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    background: #0f0;
    cursor: pointer;
  }

  .right_click {
    position: absolute;
    right: 3px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    background: #0f0;
    cursor: pointer;
  }

  .left_box {
    margin-left: 10px;
  }

  .center_box {
    float: left;
    width: 100%;
    height: 20px;
    line-height: 20px;
    background: #f00;
  }

  .right_box {
    float: right;
    margin-right: 10px;
  }

  .right_box span {
    cursor: pointer;
  }

  .bottom_box {
    position: relative;
    float: left;
    width: 100%;
    height: 100px;
  }

  .bottom_box ul {
    position: absolute;
    width: 100%;
    transition: 0.7s;
  }

  .bottom_box ul li {
    float: left;
    width: 90px;
    height: 90px;
    border: solid 5px #f00;
    background-size: cover;
    background-position: center center;
    transition: 0.7s;
  }

  .bottom_box ul li.active {
    border-color: #fff;
  }
</style>

<script type="text/babel">
// 子组件 TopNode
class TopNode extends React.Component{
  render() {
    let aLi = [];

    this.props.picUrl.forEach((val, index)=> {
      aLi.push(
        <li key={index}>
          <img src={val}
               style={{transform:'scale(' + this.props.isScale + ')'}} />    
        </li>
      );
    });

    return (
      // top[大图 左右按钮]
      /* <div>
        <span>top组件</span>
      </div> */
      // 每张图宽度400
      // 因为不用传参，所以不用bind
      <div className='top_box'>
        <span className='left_click'
              onClick={this.props.Lfn}
              onMouseDown={function(e){e.prevenDefault()}}>左</span>
        <span className='right_click'
              onClick={this.props.Rfn}>右</span>
        <ul style={
          {
            width: this.props.picUrl.length*400+'px', 
            left: this.props.index-400+'px',
          }
        }>
          {aLi}
        </ul>
      </div>
    )
  }
}

// 子组件 CenterNode
class CenterNode extends React.Component{
  render() {
    return (
      // center[文字 大小按钮]
      /* <div>
        <span>center组件</span>
      </div> */
      <div className="center_box">
        <span className='left_box'>
          {this.props.text[this.props.index]}
        </span>
        <div className='right_box'>
          <span onClick={this.props.allFn.toBig}>放大</span>
          <span onClick={this.props.allFn.toSmail}>缩小</span>
        </div>
      </div>
    )
  }
}

// 子组件 BottomNode
class BottomNode extends React.Component{
  render() {
    let aLi = [],

    this.props.BPicUrl.forEach((val, index)=> {
      aLi.push(
        // 执行父组件函数，改变this指向，传参，并且不运行，用bind
        // 第一个参数是改变this指向的，第二个参数是形参
        // 这里的第一个参数就是个占位
        <li key={index} 
            onClick={this.props.goFn.bind(val, index)}
            className={index===this.props.index?"active":""}
            style={{backgroundImg: 'url(' + val + ')'}}></li>
      );
    });

    return (
      // bottom[缩略图 左右按钮]
      /* <div>
        <span>bottom组件</span>
      </div> */
      // index>3的时候，点击右边按钮，到第四个的时候，缩略图要换一批
      <div class="bottom_box">
        <ul style={
          {
            width: this.props.BPicUrl.length*100+'px',
            left: this.props.index>3?(this.props.index-3)*-100+'px':'0px'
          }
        }>
          {aLi}
        </ul>
      </div>
    )
  }
}

// 父组件
class MyTab extends React.Component{
  constructor() {
    super();

    this.state = {
      index: 0,
      isScale: 1
    }
  }

  render() {
    // console.log(this.props.JsonTo);

    return (
      // top[大图 左右按钮]
      // center[文字 大小按钮]
      // bottom[缩略图 左右按钮]
      // 把父级参数传到子级
      // 把子集index索引传到父级
      <div className='out_box'>
        <TopNode 
          picUrl={this.props.JsonTo.pic} 
          index={this.state.index}
          Lfn={this.leftFn.bind(this)}
          Rfn={this.rightFn.bind(this)}
          isScale={this.state.isScale} />
        <CenterNode 
          text={this.props.JsonTo.txt} 
          index={this.state.index}
          allFn={
            {
              toBig: this.toBig.bind(this), 
              toSmail: this.toSmail.bind(this)
            }
          } />
        <BottomNode 
          BPicUrl={this.props.JsonTo.pic}
          index={this.state.index}
          goFn={this.change.bind(this)} />
      </div>
    )
  }

  // 点击缩略图
  change(v) {
    // 这里的this还是当前组件
    // console.log(v);

    // 改变索引
    this.setState({
      index: v
    });
  }

  // 点击大图-左
  leftFn() {
    let needIndex = this.state.index - 1;
    // 如果是-1就是最后一张
    needIndex === -1 && (needIndex = this.props.JsonTo.pic.length - 1)

    this.setState({
      isScale: 1,
      index: needIndex
    });
  }

  // 点击大图-右
  rightFn() {
    let needIndex = this.state.index + 1;
    needIndex === this.props.JsonTo.pic.length && (needIndex = 0)

    this.setState({
      isScale: 1,
      index: needIndex
    });
  }

  // 放大
  toBig() {
    // console.log("放大");
    let maxB = this.state.isScale + 0.1;

    // 如果maxB大于等于2
    maxB >= 2 && (maxB = 2, alert('已经最大了'));

    this.setState({
      isScale: maxB,
    });
  }

  // 缩小
  toSmail() {
    // console.log("缩小");

    // console.log("缩小");
    let smallB = this.state.isScale - 0.1;

    // 如果maxB大于等于2
    smallB <= 0.4 && (smallB = 2, alert('已经最小了'));

    this.setState({
      isScale: smallB,
    });
  }
}

let JsonData = {
  pic: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  txt: ['图1', '图2', '图3', '图4']
}

// 渲染父组件
ReactDom.render(<MyTab JsonTo={JsonData} />, app);
</script>
```