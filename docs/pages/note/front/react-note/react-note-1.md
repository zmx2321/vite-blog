# React实现todolist

- main.jsx
```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 在html的root div上注册React根
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

- App.jsx
```js
import { useEffect, useState } from "react";
import "./styles.css";

// 引入其他组件
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  // useState 用于在函数组件中添加状态
  // 它返回一个数组，其中包含当前状态的值和一个用于更新状态的函数
  // 通常，数组的第一个元素是当前状态的值，第二个元素是更新该状态的函数
  // 语法：const [state, setState] = useState(初始值或初始化回调)
  // 这种语法叫作解构，是一个JavaScript概念，可以搜索一下什么叫解构
  const [todos, setTodos] = useState(() => {
    // localStorage可以在浏览器的 F12 -> 应用 -> 本地存储空间 找到
    // 是一种键值对，利用键来索引值，比如这个例子中键是ITEM，值是localValue
    // 常用的方法为setItem(key, value)，getItem(key)和removeItem(key)
    const localValue = localStorage.getItem("ITEM");

    if (!localValue) return [];
    return JSON.parse(localValue); // 从stringify中解出来
  });

  // useEffect 用于处理副作用，比如数据获取、监听、手动修改DOM等
  // 它接收一个函数作为参数，这个函数会在组件渲染之后执行
  // 在这个函数内，你可以执行任何副作用相关的操作
  // 语法：useEffect(() => {}, [依赖项数组])
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos)); // 转为string好存入
  }, [todos]);

  // 这个方法用来添加Todo
  // 虽然声明在父组件中，但其实是在子组件NewTodoForm中被调用的
  // 因为调用的时候传入了title，所以好像我们从NewTodoForm中获得了title一样
  function addTodos(title) {
    setTodos((current) => [...current, { id: crypto.randomUUID(), title, completed: false }]);
  }

  // 用来更新给定id的Todo的完成状态为completed
  function toggleTodo(id, completed) {
    // 用setState的回调形式来更新，current是当前todos的值，记住它可是个数组
    setTodos((current) =>
      // 所以我们先对这个数组来进行遍历，每个todo是current中的每一项
      current.map((todo) => {
        // 如果遍历的过程中找到了我们所选的那个id，就更新它
        // 也就是返回更新后的值，...是传播运算符可以搜索一下什么是传播运算符
        if (todo.id === id) return { ...todo, completed };

        // 不是我们选的那个todo就不管它
        return todo;
      })
    );
  }

  // 用来删除给定id的Todo
  function deleteTodo(id) {
    // 用setState的回调形式来更新，current是当前todos的值，记住它可是个数组
    // 利用filter来遍历，给定的条件是我们保留什么
    // 保留不是我们所选的todos，就意味着删除我们所选的todo
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  return (
    // 这些内容叫JSX，是一种很类似html的东西但不是html
    // 一种简单的理解是你把它理解成其中可以直接使用JavaScript的html
    // 语法也和html有许多不一样的地方，组件允许我们自定义，每个组件都是一个function
    // 可以手动搜索一下什么是JSX
    // 另外所有JSX在返回的时候都要保证只有一个根，这里我使用<></>来确保
    // <></>其实是<React.Fragment></React.Fragment>的简写
    <>
      <NewTodoForm addTodos={addTodos} />

      <h1 className="header">Todo List</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
```

- NewTodoForm
```js
import { useState } from "react";

// 参数其实是以一个叫props的对象传进来的，JavaScript对象指的是键值对
// 对象是可以被解构的，可以搜索一下什么叫解构
export default function NewTodoForm({ addTodos }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // 防止form提交的默认行为（即刷新页面）
    if (newItem === "") return; // 防止用户提交空待办

    // 这个函数是在父组件App中注册的，但是在子组件中被调用了
    // 传入子组件的newItem，就好像在父组件中获得了它，并且可以对其进行操作
    addTodos(newItem);

    setNewItem(""); // 每次提交完都清空input
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        {/*
         * input的值永远都是value字段的值，onChange可以监听用户输入事件
         * 用户的输入被监听后，利用setState更新input的value就实现了页面的交互
         * 又把更新后的值（state）留在了本组件中，以用来提交
         */}
        <input type="text" id="item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      </div>

      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}

```

- TodoList.jsx
```js
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      {todos.length === 0 && <div>No todos</div>}

      <ul className="list">
        {todos.map((todo) => (
          // 因为传入的props是一个对象（键值对），同名又可以合并键值
          // 所以{...todo}就等同于将整个todo对象作为props对象传入
          // 在TodoItem中就可以顺理成章地解构出todo的所有字段
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </>
  );
}
```

- TodoItem.jsx
```js
import React from "react";

// 结构todo的所有字段，传入是用{...todo}的形式
export default function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        {/* 参考NewTodoForm组件中的讲解 */}
        <input type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} /> {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
```

- style
```css
* {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

body {
  background: #333;
  color: hsl(200, 100%, 90%);
  max-width: 400px;
  padding: 1rem;
  margin: 0 auto;
}

.new-item-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.btn {
  background: hsl(200, 100%, 50%, 0.1);
  border: 1px solid hsl(200, 100%, 50%);
  color: hsl(200, 100%, 50%);
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
  outline: none;
}

.btn:hover,
.btn:focus-visible {
  background: hsl(200, 100%, 50%, 0.2);
}

.btn.btn-danger {
  background: hsl(0, 100%, 40%, 0.1);
  border: 1px solid hsl(0, 100%, 40%);
  color: hsl(0, 100%, 40%);
}

.btn.btn-danger:hover,
.btn.btn-danger:focus-visible {
  background: hsl(0, 100%, 40%, 0.2);
}

.new-item-form input {
  outline: none;
  border: 1px solid hsl(200, 100%, 40%);
  background: hsl(200, 100%, 30%);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  color: hsl(200, 100%, 90%);
}

.new-item-form input:focus {
  border: 1px solid hsl(200, 100%, 70%);
}

.header {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.list {
  margin: 0;
  padding: 0;
  margin-left: 1rem;
  list-style: none;
}

.list li:has(input:checked) label {
  color: hsl(200, 20%, 40%);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.list li {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.list li label {
  display: flex;
  gap: 0.25rem;
  cursor: pointer;
  align-items: center;
}

.list li:has(input:focus-visible) label {
  outline: 1px solid hsl(200, 100%, 50%);
}

.list li input {
  outline: none;
  width: 0;
  height: 0;
  appearance: none;
  pointer-events: none;
  position: absolute;
}

.list li label::before {
  content: "";
  display: block;
  width: 0.9rem;
  height: 0.9rem;
  background: hsl(200, 100%, 90%);
  border-radius: 0.25em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list li label:hover::before {
  background: hsl(200, 100%, 80%);
}

.list li:has(input:checked) label::before {
  content: "✔";
  background: hsl(200, 100%, 40%);
  color: hsl(200, 100%, 90%);
  font-size: 0.75rem;
  font-weight: bold;
}

.list li:has(input:checked) label:hover::before {
  background: hsl(200, 100%, 30%);
}
```