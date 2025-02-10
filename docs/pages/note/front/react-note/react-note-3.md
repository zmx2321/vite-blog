# react常用功能

## 一个空的jsx文件
```jsx
import { Fragment, useState } from 'react';

const Demo0 = () => {
	/**
	 * 只读数据
	 */

	/**
	 * 带状态数据
	 */

	/**
	 * 自定义dom结构
	 */

	/**
	 * 事件处理
	 */

	/**
	 * render
	 */
	return (
		<section className="demo0">demo0</section >
	);
};

export default Demo0;
```

## react基本用法        
### 如何修改数据
- 普通字符串
```jsx
import { useState } from 'react';
const [title, setTitle] = useState("title")
setTitle("title1")
console.log(title) // title1
```
- 对象
```jsx
import { useState } from 'react';
const [info, setInfo] = useState({
    name: "test",
    age: 18
})

// 必须得写全,是替换而不是合并,相当于 info = {......}
setInfo({
    ...info,
    name: "fdswfsd"
})
console.log(info) // {name: "fdswfsd", age: 18}
```
- 数组
```jsx
import { useState } from 'react';
const list = [
    { id: 1, name: "test1" },
    { id: 2, name: "test2" },
    { id: 3, name: "test3" },
]
const [myList, setMyList] = useState(list)
// 合并
setMyList([...myList, { id: myList.length + 1, name: `test${myList.length + 1}` }])
console.log(myList) // [{ id: 1, name: "test1" }, { id: 2, name: "test2" }, { id: 3, name: "test3" }, { id: 4, name: "test4" }]
```
- 显示数组数据
```jsx
import { Fragment, useState } from 'react';
const listRender = list.map((item) => (
    // 一个虚拟的标签，不会渲染到页面上
    <Fragment key={item.id}>
        <li id={item.id}>{item.name}</li>
        <hr />
    </Fragment>
))

const removeOne = (id) => {
    return (e) => {
        // console.log("removeOne", id, e)
        // 匹配到当前id,删除
        setMyList(myList.filter(item => item.id !== id))
    }
}

/**
 * render
 */
return (
    <>
    <ul>
        {listCont}
    </ul>
    <ul>
        {myList.map(item =>
            <li title='删除' style={{ cursor: 'pointer', color: '#f00' }} key={item.id} id={item.id} onClick={removeOne(item.id)}>{item.name}</li>
        )}
    </ul>
    </>
);
```

## react两种写法
### 默认写法
```jsx
import { useState } from 'react';

const Demo3 = () => {
	const [counts, setCounts] = useState(0);

	const increment = () => {
		setCounts(counts + 1);
	};

	const decrement = () => {
		setCounts(counts - 1);
	};

	return (
		<section className="demo3">
			<button onClick={decrement}>-</button>
			<span>{counts}</span>
			<button onClick={increment}>+</button>
		</section>
	);
};

export default Demo3;
```

### index_useReducer写法
```jsx
import { useReducer } from 'react';

const countReducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		default:
			throw new Error();
	}
};

const Demo3 = () => {
	const [counts, dispatch] = useReducer(countReducer, 0);

	const increment = () => {
		// setCounts(counts + 1);
		dispatch({ type: 'increment' });
	};

	const decrement = () => {
		// setCounts(counts - 1);
		dispatch({ type: 'decrement' });
	};

	return (
		<section className="demo3">
			<button onClick={decrement}>-</button>
			<span>{counts}</span>
			<button onClick={increment}>+</button>
		</section>
	);
};

export default Demo3;
```

## react基本组件传参
- 父传子
```jsx
import Article from './components/article/index';

<div className='last_article'>
    {articleData.map(item => <Article key={item.title} {...item} />)}
</div>

// 文章组件
// 父组件传值给子组件，子组件通过props接收
const Article = (props) => {
    return (
        <>
            <div className="article_wrap">
                <div className="article_title">{props.title}</div>
            </div>
        </>
    )
}
```
- 子传父
```jsx
// 子组件
const [status, setStatus] = useState(true);
const setDataTo = () => {
    setStatus(!status)

    // 将拿到的值传给父组件的方法上，父组件通过props.onActive拿到值
    props.onActive(status)
}
<button onClick={setDataTo}>使用自定义事件传值给detail1父组件</button>

// 父组件
const handleActive = (status) => {
    console.log('handleActive', status)
}
{/* 向子组件传一个方法来接收值 */}
<Detail2 onActive={handleActive}></Detail2>
```

## react插槽
```jsx
// 父组件
return (
    <Detail2 type="type1" status="1">
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
    </Detail2>
)

// 子组件
const Detail2 = (props) => {
    console.log(props)

    return (
        <Fragment>
            {/* 标签里面的是直接可以用props获取 */}
            {/* 标签下面的dom节点数据(插槽)就是 props.children */}
            <b>{props.type}</b>
            <b>{props.status}</b>
            <ul className="detail2">{props.children}</ul>
        </Fragment >
    )
}
```

## react跨组件传参
```jsx
// index.jsx
import { createContext } from 'react';

import Heading from './Heading.tsx';
import Section from './Section.tsx';
import ToolBar from './ToolBar.tsx';

// light是默认值，当Consumer向上都找不到对应的provide时显示
// 父组件定义createContext,并供出,设置默认值
export const MyContext = createContext({ name: 'light' });

// 定义一个createContext, 并对外供出
export const levelContext = createContext(0);

const Demo2 = () => {
	return (
		<Section>
			<Heading>主标题</Heading>
			<Section>
				<Heading>副标题</Heading>
				<Heading>副标题</Heading>
				<Heading>副标题</Heading>
				<Section>
					<Heading>子标题</Heading>
					<Heading>子标题</Heading>
					<Heading>子标题</Heading>
					<Section>
						<Heading>子子标题</Heading>
						<Heading>子子标题</Heading>
						<Heading>子子标题</Heading>
					</Section>
				</Section>
			</Section>

			{/* //Provider组件接收一个value属性，此处传入一个带有name属性的对象 */}
			{/* 这里传一个自己需要跨组件传的值 */}
			<MyContext.Provider value={{ name: `context's value is string!` }}>
				{/*这里写后面要进行包裹的子组件,此处先行导入后续需要消费context的组件*/}
				{/* 子组件中可以接收到createContext所传的所有值 */}
				<ToolBar />
			</MyContext.Provider>
		</Section>
	);
};

export default Demo2;


// Heading.jsx
import { useContext } from 'react';
import { levelContext } from './index'  // 引入定义的createContext

export default function Heading({ children }) {
  // 使用useContext获取levelContext的值(初始值)
  const level = useContext(levelContext);

  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('未知的 level：' + level);
  }
}

// Section.jsx
import { useContext } from 'react';
import { levelContext } from './index'  // 引入定义的createContext

export default function Section({ children }) {
  const level = useContext(levelContext);

  return (
    <section className="section">
      <levelContext.Provider value={level + 1}>
        {children}
      </levelContext.Provider>
    </section>
  );
}

//  ToolBar.jsx
import { createContext, useContext, useState } from 'react';
import { MyContext } from './index'

const ToolBar = () => {
    return (
        <section className="tool_bar">
            {/* Consumer可以接收所有跨组件传来的值 */}
            <MyContext.Consumer>
                {(value) => {
                    return (
                        <div>
                            使用Context方式获取的值：{JSON.stringify(value)}
                        </div>
                    );
                }}
            </MyContext.Consumer>
        </section>
    );
};

export default ToolBar;
```

## react的ref
### ref获取dom节点
```jsx
<input type="text" ref={refInput} />

const refInput = useRef<HTMLInputElement>(null);
const decrement = () => {
    console.log(refInput)
    // 获取焦点
    refInput.current.focus();
};
```

### 父组件执行子组件方法
```jsx
// 父组件
<Child ref={refChild} />
const refChild = useRef(null);

const changeChild = () => {
    // 调用子组件方法
    refChild.current.testMed();
};

// 子组件
import { forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
    // 暴露方法
	useImperativeHandle(ref, () => ({
		/**
		 * 暴露给父组件的方法
		 */
		testMed: () => {
			console.log('testMed');
		}
	}))

	return (
		<section className="child">
			child
		</section>
	);
})

export default Child;
```

## react简易的todolist
- index.tsx
```tsx
import { useState } from "react";

import AddToDo from "./components/AddToDo";
import ToDoFilter from "./components/ToDoFilter";
import ToDoList from "./components/ToDoList";
import TodoItem from "./components/TodoItem";

import { Todo } from "./types";

const Home = () => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [filter, setFilter] = useState<string>('all')

	const addTodo = (text: string) => {
		const newToDo = {
			id: Math.random(),
			text,
			completed: false
		}

		setTodos([...todos, newToDo])
	}

	const deleteTodo = (id: number) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodo = (id: number) => {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		}))
	}

	const getFilteredTodos = () => {
		switch (filter) {
			case 'active':
				return todos.filter(todo => !todo.completed)
			case 'completed':
				return todos.filter(todo => todo.completed)
			default:
				return todos
		}
	}

	return (
		<section className="todolist">
			<h1>ToDoList</h1>
			<AddToDo addTodo={addTodo} />
			<ToDoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
			<ToDoFilter setFilter={setFilter} />
		</section>
	);
};

export default Home;
```
- types.ts
```ts
export interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}
```
- components/AddToDo.tsx
```tsx
import { useState } from 'react';

interface AddToDoProps {
	addTodo: (text: string) => void
}

// 新建事项
const AddToDo = ({ addTodo }: AddToDoProps) => {
	const [text, setText] = useState<string>('')

	const handleAdd = () => {
		// console.log(text, text.trim())
		if (text.trim() === '') return

		// 将text添加到list中
		addTodo(text)
	}

	return (
		<section className="add_todo">
			{/* 输入框输入完,将值赋值给text */}
			<input type="text" value={text} onChange={e => setText(e.target.value)} />
			<button onClick={handleAdd}>新建事项</button>
		</section>
	);
};

export default AddToDo;
```
- components/ToDoFilter.tsx
```tsx
import { useState } from "react";
import { Fragment } from "react";

const ToDoFilter = ({ setFilter }: any) => {
	return (
		<Fragment>
			<button onClick={() => setFilter("all")}>All</button>
			<button onClick={() => setFilter("active")}>Active</button>
			<button onClick={() => setFilter("completed")}>Completed</button>
		</Fragment>
	);
};

export default ToDoFilter;
```
- components/ToDoList.tsx
```tsx
import { ToDo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
	todos: Array<ToDo>;
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
}

const ToDoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
	return (
		<ul>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
				/>
			))}
		</ul>
	);
};

export default ToDoList;
```
- components/TodoItem.tsx
```tsx
const TodoItem = ({ todo, toggleTodo, deleteTodo }: any) => {
	return (
		<li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
			{todo.text}
			<button onClick={() => toggleTodo(todo.id)}>Toggle</button>
			<button onClick={() => deleteTodo(todo.id)}>Delete</button>
		</li>
	);
};

export default TodoItem;
```