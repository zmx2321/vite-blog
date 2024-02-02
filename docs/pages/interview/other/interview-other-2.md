# react基本概念理解

## 怎么理解虚拟DOM和真实DOM
- 虚拟DOM是一般的js对象,属性较少，只满足react使用的属性和方法,最后会被react转成真实DOM
- 真实DOM在浏览器中被转换成标签,里面的属性和方法非常多，提供开发者调用

## react@18渲染页面写法
```js
// 1.创建虚拟dom
const vdom = <div>hello react</div>;
// 2.找到容器，将虚拟dom渲染到页面中
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(vdom);
```

## React为什么要使用JSX
- 全称 JavaScript XML，是一种嵌入式的类似XML的语法扩展
- jsx是js创建虚拟dom的语法糖，提高开发效率
```js
// js
const vdom = React.createElement("div", {}, React.createElement("h1",{},"hello react"))

// jsx
const vdom = (
  <div>
    <h1>hello react</h1>
  </div>
);
```

## React的JSX示例
```html
<body>
    <div id="root"></div>
    <!-- 引入react的核心库 -->
    <script crossorigin src="https://unpkg.com/react@18.2/umd/react.development.js"></script>
    <!-- 引入react-dom用于支持react操作dom -->
    <script crossorigin src="https://unpkg.com/react-dom@18.2/umd/react-dom.development.js"></script>
    <!-- 引入babel转换js为jsx -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const xd = "xdclass";
      const text = "xxxx";
      // 1.创建虚拟dom
      const vdom = (
        <>
          <div id={xd} className="title">
            <h1 style={{ color: "blue", fontSize: "30px" }}>{text}</h1>
          </div>
          <div>学习react课程</div>
        </>
      );
      // 2.找到容器，将虚拟dom渲染到页面中
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(vdom);
    </script>
  </body>
```
- JSX练习总结
  - 定义虚拟dom时不加字符串引号
  - 标签中引入变量或者js表达式要使用{}
  - 样式的类名使用className
  - 内联样式要使用
  ```jsx
  style={{key:value}}
  ```
  - 只能有一个根标签，所有标签必须闭合
  - 标签如果是小写字母则代表使用html标签，大写则是自定义的组件，都没有找到会报错

## React的JSX如何动态渲染数据
```jsx
// JSX
const personList = ["老王", "冰冰", "anna", "小D", "大钊"];

// 1.创建虚拟dom
const vdom = (
  <>
    <h1>人员列表</h1>
    <ul>
      {personList.map((i, index) => {
        return  <li key={index}>{i}</li>;
      })}
    </ul>
  </>
);
// 2.找到容器，将虚拟dom渲染到页面中
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(vdom);


// 通过原生DOM渲染
const person = ["老王", "冰冰", "anna", "小D", "大钊"];
let str = "";
person.forEach((i) => {
  str += `<li>${i}</li>`;
});
let ul = document.getElementsByTagName("ul")[0];
ul.innerHTML = str;
```

## react的严格模式
```jsx
// main.jsx
<React.StrictMode/>  ——开启严格模式，和js中的严格模式不同
```
1. 识别不安全的生命周期组件
2. 有关旧式字符串ref用法的警告
3. 关于一些被弃用的方法的警告，比如（findDOMNode）
4. 检测意外的副作用
5. 检测过时的API

## 函数式组件和类式组件开发
- React官网已经都是函数式组件文档，没有类组件文档，但是还是支持这种写法
- 入口文件
```js
// ReactDOM.createRoot：调用createRoot以创建用于在浏览器 DOM 元素内显示内容的 React 根
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
- 函数式组件
  - 定义组件最简单的方式就是编写 JavaScript 函数
  - 它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数
```js
function App(props) {
  return (
    <div>小滴课堂{props.name}课程</div>
  )
}

export default App

// 函数名称首字母大写
```
- 类组件
```js
import React from 'react'

class App extends React.Component{
  render(){
    return (
      <div>小滴课堂{this.props.name}课程</div>
    )
  }
}

export default App
```

## React组件化开发练习
### 渲染组件
- 当用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。
```js
/*
  调用 root.render() 函数，并传入 <App text="react"/> 作为参数。
  React 调用 App 组件，并将 {text: 'react'} 作为 props 传入。
  App 组件将 <div>小滴课堂react课程</div> 元素作为返回值。
  React DOM 将 DOM 高效地更新为 <div>小滴课堂react课程</div>。
*/

class App extends React.Component{
  render(){
    return (
      <div>小滴课堂{this.props.text}课程</div>
    )
  }
}
```
- 注意
  - 自定义组件名称必须以大写字母开头。
  - React 会将以小写字母开头的组件视为原生 DOM 标签
    - 例如，`<div />` 代表 HTML 的 div 标签，而 `<App />` 则代表一个组件，并且需在作用域内使用 App。

### 嵌套组件
```js
import React from "react";

class Children extends React.Component {
  render() {
    return <div>正在学习的课程</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Children />
        <div>小滴课堂{this.props.text}课程</div>
      </>
    );
  }
}

export default App;
```
- 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改
```js
function sum(a, b) {
  return a + b;
}

// props的修改
function withdraw(account, amount) {
  account.total += amount;
}
```

## React的核心属性和生命周期
### state
- 组件的状态，State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件
```js
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = { isWash: true };
  }
  render() {
    return (
      // 读取状态
      <div>
        老王今天{this.state.isWash ? "去" : "没有去"}洗脚了
      </div>
    );
  }
}

export default App;
```

### 事件处理
- handleClick 放在类 App 的原型对象上，供实例使用，在 render() 中调用时必须加 this
```js
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isWash: true };
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        老王今天{this.state.isWash ? "去" : "没有去"}洗脚了
      </div>
    );
  }
  handleClick() {
    console.log(点击了)
  }
}

export default App;
```
- 改变构造函数中的状态state
  - this.handleClick = this.handleClick.bind(this)
- handleClick 要访问构造器的 state 就必须要改变 this 指向实例 
  - handleClick 并不是通过实例调用的
  - 类中的方法默认都开启了局部的严格模式，所以 handleClick this 为 undefined
```js
// 类似：
const a = new App();
const r = a.click;
r();
```

### 定义state和事件处理的简写方式
- 在类中不写构造器直接增加一个state的对象属性
```js
import React from "react";
class App extends React.Component {
  state = { isWash: false };
  render() {
    return (
      <div onClick={this.handleClick}>
        老王今天{this.state.isWash ? "去" : "没去"}洗脚了
      </div>
    );
  }
  handleClick = () => {
    this.setState({ isWash: !this.state.isWash });
  };
}
export default App;
```

## React的refs和表单组件
### React中refs的使用—字符串形式的ref
- 组件中的标签可以通过定义ref属性来标识自己
```js
// 字符串ref基本使用

import React from "react";

class App extends React.Component {
  popClick = () => {
    console.log(this);
    const { inputRef } = this.refs;
    alert(inputRef.value);
  };

  render() {
    return (
      <>
        <input ref="inputRef" type="text" placeholder="请输入内容" />
        <button onClick={this.popClick}>点击生成弹窗</button>
      </>
    );
  }
}
export default App;
```

### React中refs的使用—回调形式的ref
```js
// 回调形式的ref基本使用
import React from "react";

class App extends React.Component {
  popClick = () => {
    console.log(this);
    alert(this.input1.value);
  };

  render() {
    return (
      <>
        <input
          ref={(a) => (this.input1 = a)}
          type="text"
          placeholder="请输入内容"
        />
        <button onClick={this.popClick}>点击生成弹窗</button>
      </>
    );
  }
}
export default App;
```

### React中refs的使用—createRef创建ref
- createRef
  - Refs 是使用 React.createRef() 创建的，并通过 ref 属性附加到 React 元素。在构造组件时，通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们
  - React.createRef() 调用后可以想象城创建了一个容器，这个容器可以储存被ref标识的元素节点
  - 创建了一个容器只能绑定一个节点，绑定多个节点会被覆盖
```js
import React from "react";

class App extends React.Component {
  inputRef = React.createRef();
  popClick = () => {
    console.log(this);
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <>
        <input ref={this.inputRef} type="text" placeholder="请输入内容" />
        <button onClick={this.popClick}>点击生成弹窗</button>
        <button onClick={this.handleClick}>点击更新组件</button>
      </>
    );
  }
}
export default App;
```

### React中的非受控组件和受控组件
- 非受控组件
  - 由组件自身来管理其状态的组件
```js
import React from "react";

class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.name.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" ref={(a) => (this.name = a)} />
        </label>
        <button type="submit">提交</button>
      </form>
    );
  }
}
export default App;
```
- 受控组件
  - 组件内部维护state，state属性和表单元素的值建立依赖关系，再通过onChange事件与setState()结合更新state属性，就能达到控制用户输入过程中表单发生的操作，控制取值的表单输入元素就叫做受控组件（类似vue的数据双向绑定）
```js
import React from "react";

class App extends React.Component {
  state = { value: "小滴课堂" };
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  handleSubmit = (e) => {
    // 禁止表单的默认刷新
    e.preventDefault();
    alert(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input
            value={this.state.value}
            type="text"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">提交</button>
      </form>
    );
  }
}
export default App;
```

## 面试题：剖析React中的Diffing算法
- diff算法
  - 当数据改变时，react会生成新的虚拟dom和旧的虚拟dom进行对比，有不同的节点则重新生成，节点相同则进行复用，不重新生成，提高渲染速度
- key值
  - key主要用在 Vue 虚拟 DOM（类似 js 对象格式的数据） 的 Diff 算法，新旧虚拟 DOM 对比，复用不变的旧节点，渲染改变的节点，提高渲染速度
  - 遍历数组不加key属性时，则默认使用数组的索引index，在数组元素顺序打乱时，会产生不必要的DOM更新
  - key值要使用唯一的id值
```js
import React from "react";

class App extends React.Component {
  state = {
    list: [
      { id: 1, name: "冰冰", hobby: "喝奶茶" },
      { id: 2, name: "anna", hobby: "喝奶茶" },
      { id: 3, name: "老帆", hobby: "打篮球" },
    ],
  };

  addClick = () => {
    const newItem = { id: 4, name: "老王", hobby: "按摩" };
    this.setState({ list: [newItem, ...this.state.list] });
  };

  // 一.使用index作为key值
  // 初始数据
  // { id:1,name: "冰冰", hobby: "喝奶茶" },
  // { id:2,name: "anna", hobby: "逛街" },
  // { id:3,name: "老帆", hobby: "打篮球" },

  // 初始虚拟dom
  // <li key=0>名字：冰冰，爱好：喝奶茶</li>
  // <li key=1>名字：anna，爱好：逛街</li>
  // <li key=2>名字：老帆，爱好：打篮球</li>

  // 更新后的数据
  // { id:4,name: "老王", hobby: "按摩" },
  // { id:1,name: "冰冰", hobby: "喝奶茶" },
  // { id:2,name: "anna", hobby: "逛街" },
  // { id:3,name: "老帆", hobby: "打篮球" },

  // 更新后的虚拟dom
  // <li key=0>名字：老王，爱好：喝奶茶</li>
  // <li key=1>名字：冰冰，爱好：喝奶茶</li>
  // <li key=2>名字：anna，爱好：逛街</li>
  // <li key=3>名字：老帆，爱好：打篮球</li>

  // 二.使用唯一值id作为key值
  // 初始数据
  // {id:1, name: "冰冰", hobby: "喝奶茶" },
  // {id:2,name: "anna", hobby: "逛街" },
  // {id:3, name: "老帆", hobby: "打篮球" },

  // 初始虚拟dom
  // <li key=1>名字：冰冰，爱好：喝奶茶</li>
  // <li key=2>名字：anna，爱好：逛街</li>
  // <li key=3>名字：老帆，爱好：打篮球</li>

  // 更新后的数据
  // {id:4, name: "老王", hobby: "按摩" },
  // {id:1, name: "冰冰", hobby: "喝奶茶" },
  // {id:2, name: "anna", hobby: "逛街" },
  // {id:3, name: "老帆", hobby: "打篮球" },

  // 更新后的虚拟dom
  // <li key=4>名字：老王，爱好：喝奶茶</li>
  // <li key=1>名字：冰冰，爱好：喝奶茶</li>
  // <li key=2>名字：anna，爱好：逛街</li>
  // <li key=3>名字：老帆，爱好：打篮球</li>

  render() {
    return (
      <>
        <h1>小滴课堂人员列表</h1>
        <input type="text" />
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                名字：{item.name}，爱好：{item.hobby}
              </li>
            );
          })}
        </ul>
        <button onClick={this.addClick}>添加人员按钮</button>
      </>
    );
  }
}
export default App;
```

## 理解React的状态管理Redux
- 用做于状态管理的第三方 js 库
- react框架中使用，也可应用于其他的框架
- 组件间需要共享状态和改变另一个组件的状态
- 在react项目中可以不使用就尽量不用，复杂场景下才使用
```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App text={"react"} />
    </Provider>
  </React.StrictMode>
);

// 新建
// store/index.js
import { configureStore } from "@reduxjs/toolkit";
// 引入 reducer 函数
import counterSlice from "./modules/counterSlice";

// 使用configureStore创建一个redux仓库
// 并自动配置了 Redux DevTools 扩展 ，这样你就可以在开发时调试 store
export default configureStore({
  reducer: {
    // 告诉 store 使用这个 slice reducer 函数来处理对该状态的所有更新
    counter: counterSlice,
  },
});

// 新建某个reducer
/modules/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

// 创建react数据切片 利用createSlice()
export const counterSlice = createSlice({
  // 类似于vuex的命名空间，必须是唯一值
  // 与pinia的defineStore()的第一个参数一个意思，都是唯一值，做区分
  name: "counter",
  // 变量
  initialState: {
    value: 0,
    list: [1, 1, 1],
  },
  // 方法
  reducers: {
    // 方法接收2个参数，第一个参数是变量，第二个参数是载荷(也就是使用方法传入的参数)
    increment: (state) => {
      state.value += 1;
      state.list.push(1);
    },
    decrement: (state) => {
      state.value -= 1;
      state.list.pop(1);
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;


// 使用
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/modules/counterSlice";

export default function Person() {
  const { value, list } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Person -- {value}</h2>
      <h2>list -- {list.length}</h2>
      <button onClick={() => dispatch(increment())}>增加</button>
      <button onClick={() => dispatch(decrement())}>减少</button>
    </div>
  );
}
```

## React函数组件状态Hook—useState《基础》
- Hooks
  - Hooks是 React16.8 版本新增加的特性语法
  - 在函数组件中可以通过 Hooks 维护自身的 state 和其他的 React 特性
- 常用的Hooks
  - state hook：useState()
  - effect hook：useEffect()
  - ref hook：useRef()
- 在函数组件中维护自身的 state 
```js
import React, { useState } from "react";

const App = () => {
  const [counte, setCounte] = useState(0);
  const add = () => {
    setCounte(counte + 1);
  };
  return (
    <div>
      <h1>小滴课堂</h1>
      <div>当前的计数：{counte}</div>
      <button onClick={add}>增加</button>
    </div>
  );
};
export default App;
```
- 改变状态
```js
// 1
const add = () => {
  setCounte(counte + 1);
};

// 2
const add = () => {
  setCounte((counte) => {
    return counte + 1;
  });
};
```
- 维护多个state
```js
import React, { useState } from "react";

const App = () => {
  const [counte, setCounte] = useState(0);
  const [title, setTitle] = useState("小滴课堂");
  const add = () => {
    setCounte((counte) => {
      return counte + 1;
    });
  };
  const changeName = () => {
    setTitle("xdclass.net");
  };
  return (
    <div>
      <h1>{title}</h1>
      <div>当前的计数：{counte}</div>
      <button onClick={add}>增加</button>
      <button onClick={changeName}>更改title</button>
    </div>
  );
};
export default App;
```
