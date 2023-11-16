# React小栗子(选项卡和jsonP)

## 1. 选项卡例子
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<style>
  button.active {
    background: #f00;
  }
</style>

<script type="text/babel">
// 上面的组件tab
class Tab extemds React.Component{
  render() {
    let aInput = [];

    for(let i=0; i<this.props.topValueArr.length; i++) {
      // 需要根据父组件传来的索引设置class
      // 当前索引如果等于父组件传进来的索引，则设置class
      // 需要有一个点击事件来控制下面组件内容的显隐，即父组件定义的索引值
      // 获取索引值，，使用data
      aInput.push(
        <button 
          className={i===this.props.myIndex?'active':''} 
          key={i}
          onClick={this.show.bind(this)}
          data-myIndex={i}>
            {this.props.topValueArr[i]}
        </button>
      );
    }

    return (
      <div>
        <span>上面的组件tab</span>
        <ul>
          <li>{aInput}</li>
        </ul>
      </div>
    )
  }

  show(e) {
    // 在button上加了data-myIndex之后，需要在这里获取到他的值
    // 需要使用事件对象
    console.log(e.target.getAttribute('data-myIndex'));

    // 找到父组件中子组件定义的方法
    // 实际上点击找到父组件方法，并拿到父组件中的值
    // 子组件执行父组件方法
    // 点击时需要将子组件的索引值传到父组件，然后在父组件中改变值
    this.props.childFn();
  }
}

// 下面的组件BottomNode
class BottomNode extemds React.Component{
  render() {
    let aDiv = [];

    for(let i=0; i<this.props.json.topValue.length; i++>) {
      // console.log(this.props.json.BottomValue[i]);
      aDiv.push(
        <div 
          className='container' 
          key={i}
          style={{display:i===this.props.myIndex?'block':'none'}}>
            {this.props.json.BottomValue[i]}
        </div>
      );
    }

    return (
      <div>
        <span>上面的组件BottomNode</span>
        <div>{aDiv}</div>
      </div>
    )
  }
}

// 父组件
class Tab extemds React.Component{
  // 需要使用索引给按钮设置颜色
  constructor() {
    super();

    this.state = {
      index: 0,
      timer: null
    }
  }

  // 自动播放
  // 需要在挂载之后执行
  componentDidMount() {
    /* // 先关计时器
    clearInterval(this.timer);

    this.timer = setInterval(()=> {
      let index = this.state.index;
      index ++;
      // 表示inde到达临界值就等于0
      index === this.props.tabJson.topValue.length  && (index=0)

      this.setState({
        index: index,
      });
    }, this.props.tabJson.timer); */

    this.autoPlay();  // 自动播放
  }

  // 封装自动播放
  autoPlay() {
    // 先关计时器
    clearInterval(this.timer);

    this.timer = setInterval(()=> {
      let index = this.state.index;
      index ++;
      // 表示inde到达临界值就等于0
      index === this.props.tabJson.topValue.length  && (index=0)

      this.setState({
        index: index,
      });
    }, this.props.tabJson.timer);
  }

  // 需要将父组件的值传给子组件
  // 下面的组件需要知道选项卡按钮的length，因此需要都传
  // 上面的按钮需要根据索引设置样式，下面的内容需要根据索引设置显隐
  // 父组件里面的子组件标签定义方法在父组件中执行，子组件中找到左边的方法执行，，主要需要把子组件的索引值传递到父组件
  render() {
    return (
      // 鼠标移入停止自动播放
      // 鼠标移出继续自动播放
      <div 
        onMouseOver={this.mouseOverFn.bind(this)}
        onMouseOut={this.mouseOutFn.bind(this)}>
        <TopNode 
          topValueArr={this.props.tabJson.topValue} 
          myIndex={this.state.index}
          childFn={this.change.bind(this)} />
        <BottomNode 
          json={this.props.tabJson} 
          myIndex={this.state.index} />
      </div>
    )
  }

  // 子组件点击触发方法
  // 点击时需要将子组件的索引值传到父组件，然后在父组件中改变值
  // 获取子组件的值
  change(val) {
    // 此时可以直接获取子组件data-myIndex的值
    // console.log(val);

    // console.log(this);
    this.setState({
      index: val
    });
  }

  // 鼠标移入触发
  mouseOverFn() {
    // console.log("鼠标移入触发");

    clearInterval(this.timer);
  }

  // 鼠标移出触发
  mouseOutFn() {
    // console.log("鼠标移出触发");

    this.autoPlay();  // 自动播放
  }
}

// 选项卡数据
// 下面的内容会随着上面的(选项卡按钮)多少而定义的
let tabJson = {
  topValue: ['标签a', '标签b', '标签c'],
  BottomValue: ['标签a内容', '标签b内容', '标签c内容'],
  timer: 2000
}

ReactDOM.render(<Tab tabJson={tabJson} />, app);
</script>
```

## 2. 百度搜索下拉(jsonP)
### 2.1. 使用原生方法跨域
- jsonP的原理本身就是get
- 使用本地请求百度服务
  - 用A域名访问B域名，就是跨域
  - 百度搜索使用的就是jsonP => `jQuery110209723032522674611_1615449024155({.....})`
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
// 到百度搜索页找一个可以使用的地址
/*
  https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=33344,31253,33594,26350,22157&wd=12&req=2&csor=2&cb=jQuery110209723032522674611_1615449024155&_=1615449024157

  cb下面给什么名字，页面上显示就是什么名字
  https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=ss&cb=leo

  // 最精简
  https://www.baidu.com/sugrec?prod=pc&wd=React&cb=zmx2321

  // 点击之后到
  https://www.baidu.com/s?wd=React
*/

// 会报错，因为这是使用jsx语法
/* function zmx() {
  console.log(1);
} */

class Search extends React.Component{
  render() {
    <div>
      <input type='text' onChange={this.change.bind(this)} />
      <ul id='ul'></ul>
    </div>
  }

  // input改变的时候触发
  change(e) {
    // console.log("获取内容", e.target.val);

    // 获取百度地址
    let oS = document.createElement('script');
    oS.src = 'https://www.baidu.com/sugrec?prod=pc&wd='+ e.target.val +'&cb=leo';
    document.head.appendChild(oS);

    // 插入之后就用不到了
    oS.remove();
  }
}

ReactDom.render(<Search />, app);
</script>

<script>
// 跨域
// 重新写一个script
function leo(json) {
  // console.log(json.s);  // 数据内容
  ul.innerHTML = '';

  for(let i=0; i<json.s.length; i++) {
    let oLi = document.createElement('li');

    oLi.innerHTML = json.s[i];

    // 插入ul
    ul.appendChild(oLi);
  }
}
</script>
```

### 2.1. 使用jquery跨域
```html
<!-- 核心js -->
<script src="../react/react.js"></script>
<!-- 虚拟dom -->
<script src="../react/react-dom.js"></script>
<!-- 使用 JSX(jsx用babel打包成js) -->
<script src="../babel/browser.js"></script>

<div id="app"></div>

<script type="text/babel">
class Search extends React.Component{
  constructor() {
    super();

    this.state = {
      myArr: [],
    }
  }

  render() {
    <div>
      <input type='text' onChange={this.change.bind(this)} />
      <ul>
        {this.state.myArr}
      </ul>
    </div>
  }

  // input改变的时候触发
  change(e) {
    $.ajax({
      url: 'https://www.baidu.com/sugrec?prod=pc&wd='+ e.target.val,
      type: 'GET',
      jsonp: 'cb',  // 回调函数
      dataType: 'jsonp',  // 表示这个东西到底是啥，用什么请求
      // 需要改变this指向，当前指向ajax
      success: function(data) {
        // console.log(data.s);  // 内容数据

        let aLi = [];
        data.s.forEach((val, index)=> {
          // aLi.push(<li onClick={this.goToHref.bind(this)} key={index}>val</li>);
          aLi.push(
            <li key={index}>
              <a href={"https://www.baidu.com/s?wd=" + val}>{val}</a>
            </li>
          );
        });

        this.setState({
          myArr: aLi
        });
      }.bind(this)
    });
  }

  // 点击跳转
  /* goToHref(e) {
    // https://www.baidu.com/s?wd=React
    windows.localtion.href("https://www.baidu.com/s?wd=" + e.target.val);
  } */
}

ReactDom.render(<Search />, app);
</script>
```