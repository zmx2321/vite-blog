# 汇总已知的前端场景题

## 1. CSS以及Html场景题
### 1.1. offsetWidth
- 判断以下div1的offsetWidth多大
```html
<style>
  #div1 {
    width: 100px;
    padding: 10px;
    border: solid 1px #ccc;
    margin: 10px;
  }
</style>

<div id="div1"></div>
```
- 122px
  - 左边和右边内边距10*2，左右边框1*2，宽度100
- 如何使offsetWidth为100
  - box-sizing: border-box
  - 意思是加了这个之后with就不仅仅是内容宽度了，是border-box宽度，即到边框的box的宽度，即加上左右内边距加内容宽度加上边框，为100px

### 1.2. margin纵向重叠的问题
- AAA和BBB之间的距离是多少
```html
<style>
  p {
    font-size: 16px;
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>

<p>AAA</p>
<p></p>
<p></p>
<p></p>
<p>BBB</p>
```
- 15px
```html
<p>AAA</p>  下15  
<p></p>  空内容被重叠即被忽略 margin值为0
<p></p>  0
<p></p>  0
<p>BBB</p> 上10 重叠15
```
- 相领元素的margin-top和margin-bottom会发生重叠
- 空白内容的`<p></p>`也会重叠

### 1.3. BFC的理解和应用(常考)
- 什么是BFC？如何使用
  - Block format context => 块级格式化上下文
  - 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素
- 形成BFC的常见条件 => 即能实现BFC的方式
  - float不是none
  - position是absolute或fixed
  - overflow不是visible
  - display是flex或inline-block等
- BFC的常见应用
  - 清除浮动
- 示例
- 一个容器，里面有文字和图片，给图片设置浮动
- 此时图片无法撑开容器，即脱离文档流
- 我们可以使用BFC来解决这个问题
```html
<style type="text/css">
  .container {
      background-color: #f1f1f1;
  }
  .left {
      float: left;
  }
  .bfc {
      overflow: hidden; /* 触发元素 BFC */
  }
</style>

<div class="container bfc">
    <img src="https://www.imooc.com/static/img/index/logo.png" class="left" style="magin-right: 10px;"/>
    <p class="bfc">某一段文字……</p>
</div>
```

### 1.4. 图文样式
- line-height如何继承 => 有个坑
- p标签行高是多少
```html
<style>
  body {
    font-size: 20px;
    line-height: 200%;
  }

  p {
    font-size: 16px;
  }
</style>

<body>
  <p>AAA</p>
</body>
```
- 答：40px
  - 20*200% => p标签直接继承了body
- 解析
  - line-height相关
    - 写具体数值，如30px，则继承该值
    - 写比例，如2/1.5，继承该比例
      - 子元素font-size*比例
    - 写百分比，如200%，则继承计算出来的值(考点) => 也是个坑
      - 先算完自身的行高，再进行继承
      - 即子元素的行高为，父元素的font-size*百分比

## 2. Javascript场景题
### 2.1. 创建10个`<a>`标签，点击的时候弹出对应的序号
```js
// dom加载很快，但事件只有在点击的时候才会触发，i如果是全局变量，他会很快变成10，即每次点击弹出的都是10
let a
// 如果在for里面定义，就是块级作用域
// 每次循环的时候，都会形成一个新的作用域块，这里的i就会不一样
for(let i=0; i<10; i++>) {
  a = document.createElement('a');
  a.innerHTML = i + '<br>'
  a.addEventListener('click', function(e){
    // 这里的i是自由变量，他会在被执行的环境里面一层层往上找，如果i在全局，就会找到全局，全局作用域是针对所有的块
    // 如果i在for里面被定义，那么每次就会在块级作用域里面去找
    e.preventDefault();  // 阻止冒泡
    alert(i);
  });
  document.body.appendChild(a)
}
```

### 2.2. js执行顺序场景题
```js
// setTimeout 笔试题
console.log(1);
setTimeout(()=> {
  console.log(2);
}, 1000)
console.log(3)
// 不管是几秒，他是个异步，在任务队列中，等主线程执行完之后再执行
setTimeout(()=> {
  console.log(4);
}, 0)
console.log(5)

// 1 3 5 4 2
```

### 2.3. promise场景题
```js
// 第一题
// Promise.resolve属于resolved状态，会触发then
Promise.resolve().then(() => {  
    console.log(1)  // 1 resolve状态的promise不会执行catch
}).catch(() => {
    console.log(2)  // 不执行
}).then(() => {
    console.log(3)
})
// 整个promise执行完之后，返回的也还是resolved状态的promise
// 1、3

// 第二题
Promise.resolve().then(() => {  
    console.log(1)  // 1 
    throw new Error('erro1')  // 报错，那么整个then方法中的promise状态就是rejected,会执行catch回调
}).catch(() => {
    console.log(2)  // 2 无论catch还是then,只要不报错，返回的promise状态就是resolved，执行then回调
}).then(() => {
    console.log(3)  // 3
})  // 整个返回的也是resolved状态的promise
// 1、2、3

// 第三题
Promise.resolve().then(() => {  // rejected 触发catch回调
    console.log(1)  // 1
    throw new Error('erro1')
}).catch(() => {
    console.log(2)  // 2 resolve 触发then回调
}).catch(() => {
    console.log(3)
})
// 1、2
```

### 2.4. async/await场景题
```js
(async function() {
  console.log('start');
  const a = await 100  // 直接返回
  console.log('a', a)
  // await相当于then，resolved后面加then可以获取值，即直接得到Promise里面的返回值(200)
  const b = await Promise.resolve(200)  
  console.log('b', b)
  // await相当于then，rejected后面只能用catch
  const c = await Promise.reject(300)
  // 后面的方法属于回调，上面返回的是rejected，下面没有try catch
  console.log('c', c)
  console.log('end')
})()
// start 100 200 
```

### 2.5. async/await，promise，js综合场景题
```js
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

async function async1() {
  console.log('async1 start')  // 2  同步
  await async2()  // 先执行async2,再执行await

  // 执行await,await后面的都是回调 - 微任务
  // 同步代码执行过程中，微任务会被放到micro task queue里面等待时机
  console.log('async1 end')  // 6  第一个微任务
}
async function async2 () {
  console.log('async2')  // 3  同步
}

console.log('script start')  // 1  同步

// 宏任务
// 同步代码执行过程中，宏任务会被放到Callback Queue里面等待时机
setTimeout(function() {
  console.log('setTimeout');  // 8  最后执行宏任务
}, 0)

async1()

// 初始化promise时，传入的函数会立刻被执行
new Promise(function(resolve) {
  console.log('promise1')  // 4  同步
  resolve()  // 变成了一个resolved状态下的promise
  // 即then会被触发
  // 这里的then是异步，是一个微任务
}).then(function() {
  console.log('promise2')  // 7  第二个微任务
})

console.log('script end');  // 5  同步  ->  同步代码执行完毕 => 调用者(call stack)被清空
// 同步代码执行完毕之后 => 微任务队列执行 => 尝试触发渲染DOM => 触发事件循环机制 => 宏任务队列执行
```

### 2.6. 如何一个一个数字进行打印
```js
// 异步循环
!(async ()=> {
  for(let i of nums) {
    // 先执行第一个
    // 第一个有了结果之后执行第二个
    // 以此类推
    let res = await muti(i);
    console.log(res)
  }
})()
```

### 2.7. `[10, 20, 30].map(parseInt)`返回结果是什么
- `[10, NaN, NaN]`
  ```js
  // 他实际上算是简写
  // console.log([10, 20, 30].map(parseInt))  // [10, NaN, NaN]

  // 拆解 - 两个写法是一样的
  let res = [10, 20, 30].map((num, index)=> {
    // 第一个参数是数字，第二个参数是进制
    // 进制0和10是一样的
    // parseInt(10, 0)  // 10
    // parseInt(20, 1)  // NaN
    // parseInt(30, 2)  // NaN
    return parseInt(num, index)
  })
  console.log(res)
  ```

### 2.2. 关于作用域和自由变量的场景题
- 场景题1
  ```js
  // setTimeout(宏任务)属于异步队列中的任务，主线程执行完之后才会执行
  // 所以会先进行遍历，每次遍历会把setTimeout里面的方法放到异步队列中，但不会执行setTimeout
  
  // 遍历过程中，i在当前作用域(代码块)中没有定义，但是使用了，符合自由变量的条件，这个i是一个自由变量
  // 自由变量会在被执行的环境里面一层层往上找哪里定义了(这就是作用域链)
  // 此时i在全局定义，就会找到全局，即每次遍历完就会把值赋在全局
  // 全局作用域是针对所有的块

  // 当for循环遍历完之后，此时同步代码执行完，此时的i是全局变量是4，异步队列里面有4个setTimeout待执行
  // 开始执行异步队列里面的宏任务setTimeout，第一个setTimeout里面有个console.log(i)
  // 此时这个自由变量i同样也会在作用域链上一层层往上找，直到找到全局i为4

  // 于是此时打印的就是4 => 第一次打印
  // 执行下一个宏任务setTimeout
  // 以同样的方法找i
  // 于是此时打印的就是4 => 第二次打印
  // 后面同上
  let i
  for(i=1; i<=3; i++) {
    // debugger
    setTimeout(function(){
      console.log(i)  // 4 4 4
    }, 0)
  }

  // 先进行遍历，每次遍历会把setTimeout里面的方法放到异步队列中，但不会执行setTimeout，setTimeout中的i是一个自由变量
  // 当同步代码执行完，开始执行异步队列中的任务的时候，执行console.log(i)，这个自由变量i开始往上找值，找到for里面
  // i在for里面被定义，即就是块级作用域，所以每次循环的时候，都会形成一个新的作用域块，这里的i就会不一样
  // 因为i在for里面被定义，那么每次遍历后的操作就会在块级作用域里面去找
  // 由于每次循环，都会形成一个新的作用域块，所以遍历中每次的宏任务setTimeout所在的作用域是不一样的，即里面的i也是不一样的

  // 第一次打印，在i=1的块级作用域中，此时打印的是1 => 第一次打印
  // 第二次打印，在i=2的块级作用域中，此时打印的是1 => 第二次打印
  // 后面同上
  for(let i=1; i<=3; i++) {
    // debugger
    setTimeout(function(){
      console.log(i)  // 1 2 3
    }, 0)
  }
  ```

- 场景题2
  ```js
  let a = 100
  function test() {
    alert(a)  // a是自由变量，找到100
    // 由于a是全局变量，
    // 这里其实是把全局变量的a给修改了
    a = 10
    alert(a)  // 10
  }
  test()
  // test方法执行完成之后，a这个全局变量实际已经被修改了
  alert(a)  // 10
  ```