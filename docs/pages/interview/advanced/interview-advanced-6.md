# 框架-vue从入门到手撕

## 基本概念
- vue认为,我们在开发过程中,只需要关注两件事
 - 界面数据长什么样子
 - 界面是如何根据数据生成出来的
- 数据响应式
 - 数据的变化会引发界面的自动更新(粗旷的解释)
 - 数据决定了界面长什么样子
 - 数据的变动,会自动引发界面的变化
- vue的初心
  - 希望自动调用依赖该属性的函数
  - 依赖这个词表示: 当数据变化时,自动调用使用了这个数据的函数
- 名词定义
  - Object.defineProperty 在set方法中要执行依赖了该数据的函数,所以需要在get方法中收集依赖了该数据的函数
  - 依赖收集: 在get方法中收集依赖了该数据的函数
  - 派发更新: 在set方法中执行依赖了该数据的函数
- 在收集依赖的时候,还是不知道到底执行了什么函数,于是将这个函数放到一个数组中,这个数组就是依赖收集器

## vue的雏形
> 响应式的本质是: 当数据发生变化时,会自动运行一些相关函数(自动调用使用了这个数据的函数)
```js
/**
 * 观察某个对象的所有属性,一旦对象中的属性发生变化,就调用回调函数
 */
const observe = (obj)=> {
    // console.log('observe', obj)
    for(let key in obj) {
        let internalValue = obj[key]
        // let funcs = new Set()
        let funcs = []

        // 对每个属性设置get,set
        Object.defineProperty(obj, key, {
            get() {
                // 依赖收集: 要记录是哪个函数在用我
                // funcs.add() // 添加一个函数
                if(window.__func && !funcs.includes(window.__func)) {
                    funcs.push(window.__func)
                    // console.log('get', funcs)
                }

                return internalValue
            },
            set(val) {
                internalValue = val
                // 自动调用依赖该属性的函数
                // 某个函数在运行期间,用到了这个属性
                // 即某个函数在运行期间,用到了这个get方法
                // 派发更新: 运行: 执行用我的函数
                funcs.forEach(func => func())
            }
        })
    }
}

const autorun = (func) => {
    window.__func = func
    func()
    window.__func = null
}

let obj = { name: 'zhangsan', age: 18 }; 
observe(obj)  // 对obj进行观察

// 每次修改age时,需要-3
const setAge = () => {
    obj.age = obj.age -3    
    console.log('setAge', obj.age)
}

/* window.__func = setAge
setAge()
window.__func = null */

// 这就是vue的响应式 
// 调用autorun,自动执行setAge
obj.age = 20
autorun(setAge)
```