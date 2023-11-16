# React表单和数据交互

## 1. React表单
> 在React中如果使用某些原生写法，会变成受控表单
- 在React组件中的input
  - 如果在input中加上`value=''` => 受控表单 => 输入被锁死
  - 不加value => 非受控表单 => 可以正常输入
  - 如果有默认值的需求，只需要使用`defaultValue=''`
- 在React组件中的checkbox
  - `type='checkbox' checked` => 受控表单 => 无法取消勾选
  - 如果需要默认选中，则需要使用`defaultChecked`
- 例子：
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
  constructor() {

  }

  render() {
    return (
      <div>
        <input type='text' defaultValue='123' />
        <input type='text' type='checkbox' defaultChecked />
      </div>
    )
  }
}

ReactDOM.render(<Leo />, app);
</script>
```

## 2. 交互
> React并不限制你如何进行交互
- angular => 限制你只能使用$http
- vue => 限制你最好使用resource
- react => XMLHttpRequest/ajax/zepto/axios/fetch...
- 例子：
### 1. 只是渲染一个数组
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
  constructor() {
    super();

    // 状态
    this.state = {
      arr: ['中国', '俄罗斯', '巴基斯坦', '印度']
    }
  }

  render() {
    let arrLi = [];
    this.state.arr.forEach((val, index)=> {
      // console.log(val);

      // jsx语法
      // 虚拟dom，每个内容都应该有自己唯一的标识，所以不加key会报错
      // 因为都是假的(虚拟dom)，长得都差不多，不然就无法进行区分了
      arrLi.push(<li key={index}>val</li>);
    });
    console.log(arrLi);

    // 渲染定义好的假数据
    return (
      <div>
        <ul>
          {arrLi}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Leo />, app);
</script>
```

### 2. 从后台渲染数据
1. node写一个接口
- 写一个简易接口 => node(express)
- npm install express
- 创建一个app.js文件
- node app
- 浏览器运行`http://localhost:2381`
```js
const express = require('express');
const server = express();

server.listen(2381);

// http://localhost:2381/get
server.use('/get', (req, res)=> {
  res.send(['中国', '俄罗斯', '瑞士', '新西兰']);
});

// 设置静态文件目录
// 使用static是为了防止跨域
server.use(express.static('./'));
```
2. 使用react请求
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
  constructor() {
    super();

    // 状态
    this.state = {
      url: "http://localhost:2381/get",
      arr: []  // 获取后台数据
    }
  }

  // 需要在挂载(渲染)之前请求接口数据
  compontentWillMount() {
    console.log("开始获取数据");

    // 用定时器写一个假数据
    // 定时器的this指向为window，此时需要将this绑定成当前组件
    /*setTimeout(function() {
      this.setState({
        arr: ['中国']
      });
    }.bind(this), 1000);*/

    // 请求接口数据
    // 这里的this是对的
    // 不是在dom里面，而是在react的生命周期里面
    this.ajaxToData();
  }

  // 请求接口数据 - 原生
  ajaxToData() {
    // 这里的this是对的
    // 不是在dom里面，而是在react的生命周期里面
    console.log("请求接口数据", this);

    let oAjax = new XMLHttpRequest();
    // 异步
    oAjax.open('GET', this.state.url, true);
    oAjax.send();
    // 在这里要将方法里面的this指向改成react组件
    oAjax.onload = function() {
      if(oAjax.status == 200) {
        // 原生只能拿字符串
        // console.log(oAjax.responseText);
        let json = eval('('+ oAjax.responseText +')');
        // let json = JSON.parse(oAjax.responseText);
        // console.log(json);

        // 此时的this指向的是事件源，即oAjax
        this.setState({
          arr: json
        });
      }
    }.bind(this);
  }

  // 请求接口数据 - jquery
  // 库和框架不冲突
  ajaxToData() {
    let _this = this;  // 改变this指向

    // 在下面不能使用bind，否则会将ajax的所有this改变
    $.ajax({
      url: _this.state.url,
      success(res) {
        // console.log(res);
        _this.setState({
          arr: res
        });
      }
    });

    /* // 或者使用箭头函数
    $.ajax({
      url: "http://localhost:2381/get"
    }).then(res=> {
      // 箭头函数中this指向当前的父级，即react
      console.log(this);  // 这里的指向为react
      console.log(res);  // 输出结果正确

      this.setState({
        arr: res
      });
    }); */
  }

  // 请求接口数据 - zepto - 移动端用的比较多
  ajaxToData() {
    $.ajax({
      url: "http://localhost:2381/get",
      // 使用function可以进行bind
      success:function(res) {
        // console.log(res);

        this.setState({
          arr: res
        });
      }.bind(this)
    });
  }

  // 请求接口数据 - axios
  ajaxToData() {
    // console.log(axios);

    // 箭头函数中this指向当前的父级，即react，即指向当前环境
    axios.get(this.state.url).then(res=> {
      this.setState({
        arr: res.data
      });
    });
  }

  // 请求接口数据 - fetch
  ajaxToData() {
    // console.log(fetch);

    fetch(this.state.url, {
      method: 'GET',
    }).then(res=> {
      // console.log(res);

      res.json().then(res=> {
        this.setState({
          arr: res.data
        });
      });
    });
  }

  render() {
    let arrLi = [];
    this.state.arr.forEach((val, index)=> {
      // console.log(val);

      // jsx语法
      // 虚拟dom，每个内容都应该有自己唯一的标识，所以不加key会报错
      // 因为都是假的(虚拟dom)，长得都差不多，不然就无法进行区分了
      arrLi.push(<li key={index}>val</li>);
    });
    console.log(arrLi);

    // 判断状态中数组是否有值
    return (
      <div>
        <p style={
          {display:this.state.arr.length>0 ? 'none' : 'block'}
        }>暂无数据...</p>
        <ul>
          {arrLi}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Leo />, app);
</script>
```
