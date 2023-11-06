# JS 异步进阶
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/8.html)

## 1. 简述
- 本章主要讲JS异步的原理和进阶
- 符合一线互联网公司基层员工必须要求掌握的知识点
- 几乎也算是面试必考内容之一

## 2. 题目
### 2.1. 问答题
- 请描述event loop(事件循环/事件轮询)的机制，可画图
  - 什么叫事件循环
  - event loop在异步中起到什么作用，和异步有什么关系
- 什么是宏任务和微任务，两者有什么区别
- Promise有哪三种状态？如何变化

### 2.2. 场景题
- promise then和catch的连接(经常考)
  - 经常考到，业务中可能会用，答不出来会减分很多
  ```js
  // 第一题
  Promise.resolve().then(() => {
    console.log(1)
  }).catch(() => {
    console.log(2)
  }).then(() => {
    console.log(3)
  })

  // 第二题
  Promise.resolve().then(() => {  
    console.log(1)
    throw new Error('erro1')
  }).catch(() => {
    console.log(2)
  }).then(() => {
    console.log(3)
  })

  // 第三题
  Promise.resolve().then(() => {
    console.log(1)
    throw new Error('erro1')
  }).catch(() => {
    console.log(2)
  }).catch(() => {
    console.log(3)
  })
  ```
- async/await语法问题
  ```js
  // 题目一
  async function fn() {
    return 100
  }
  (async function() {
    const a = fn()  // ??
    const b = await fn()  // ??
  })

  // 题目二
  (async function() {
    console.log('start')
    const a = await 100
    console.log('a', a)
    const b = await Promise.resolve(200)
    console.log('b', b)
    const c = await Promise.reject(300)
    console.log('c', c)
    console.log('end')
  })  // 执行完毕，打印出哪些内容
  ```
- promise和setTimeout的顺序
  - 经典题
  - 常考，答不出来有些危险
  ```js
  console.log(100)
  setTimeout(()=> {
    console.log(200)
  })
  Promise.resolve().then(()=> {
    console.log(300)
  })
  console.log(400)
  ```
- 外加async/await的顺序问题
  - 最难的一个题，据说是头条面试题
  - 很综合的一个题目
  - 已经达到一线互联网公司对高级前端对异步广度和深度理解的难度
  ```js
  async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }
  async function async2 () {
    console.log('async2')
  }
  console.log('script start')
  setTimeout(function() {
    console.log('setTimeout');
  }, 0)

  async1()  // async1 start - async2 - async1 end - script start - setTimeout ?

  new Promise(function(resolve) {
    console.log('promise1')
    resolve()
  }).then(function() {
    console.log('promise2')
  })

  console.log('script end');

  // 依次打印什么内容
  // 
  ```

## 3. 知识点
### 3.1. event loop(事件循环/事件轮询)
#### 3.1.1. 基础概念
- 简述
  - 偏原理，几乎必问
  - JS是单线程运行的
  - 异步要基于回调来实现
  - event loop就是异步回调的实现原理
- JS如何执行 => 有助于梳理event loop过程
  - JS代码它是从前到后，一行一行执行
  - 如果某一行执行报错，则停止下面代码的执行
  - 先把同步代码执行完，再执行异步
    - 通过回调执行异步
    - 回调如何实现 => 事件循环机制
- 示例
  - event loop的流程比较复杂，我们可以通过简单的示例来进行梳理
  ```js
  console.log('Hi')

  setTimeout(function cb1() {
    console.log('cb1')  // cb即callback
  }, 5000)

  console.log('Bye');
  ```
- 方法
  - 不要扣细节，不要扩大范围，核心是event loop的过程
- 开始讲解事件循环过程
  - 图示1 => 最初的状态
    ![event-loop1](/vite-blog/images/interview/foundation/event-loop1.png)
    - Browser console => 浏览器环境console界面
    - Call Stact => js运行中重要的模块
      - 调用栈
    - Web Apis =>  => js运行中重要的模块
      - ECMA规范之外，浏览器定义的api相关(DOM/BOM)
    - Callback Queue => js运行中重要的模块
      - 回调函数的队列
    - Event Loop
      - 一遍一遍循环事件
  - 开始执行第一行代码
    - `console.log('Hi')`
    - js会把代码推入调用栈中，Call Stact会去执行这个代码
    - 调用完之后在浏览器环境console界面打印hi
    - 代码执行完毕之后清空调用栈
  - 执行第二行代码
    - `setTimeout cb1`
    - setTimeout是一个函数，我们执行这个函数的时候
    - 即，将这个setTimeout cb1函数(三行)放到调用栈中
    - 但控制台不打印，因为暂时还执行不到setTimeout里面的console
    - 执行setTimeout函数的时候，由于setTimeout是浏览器定义的
    - setTimeout的第一个参数cb1(异步方法)被放到了Web Apis中的定时器里面
      - 其实遇到setTimeout他的产出就是把方法放到定时器里面，里面是什么方法不管
    - 定时器的时间是5s，5s之后他把这个cb1放到Callback Queue(回调函数队列)中
    - 此时setTimeout cb1这个方法就结束了
    - 代码执行完毕之后清空调用栈
  - 执行最后一行代码
    - 和执行第一行代码一样
  - 执行完最后一行代码之后
    - 此时这个timer定时器还在web apis里面
    - 此时代码已经全部执行完了，即调用栈中没有东西可以执行了
    - 一旦调用栈空了，这时候会启动Event Loop机制
      - 即所有的同步代码执行完，调用栈空了
      - 浏览器内核启动事件循环机制
    - 启动事件循环机制
      - 事件循环机制会一遍一遍地进行循环
      - 每次循环他会从Callback Queue(回调函数队列)中去找有没有函数，有函数的话就拿过来
      - 拿过来之后再放到Call Stact(调用栈)中执行
      - 5s还没到，回调函数队列中是空的，调用栈里面就没东西
      - 5s到了之后，定时器把cb1函数推到回调函数队列，此时回调函数队列中有函数，事件循环机制把函数拿过来，再推到调用栈中
      - 此时调用栈中他是一个函数体(cb1函数)，此时再一行行执行代码
      - `console.log('cb1')`
        - 此时和第一行代码一样，将console放到调用栈中，打印
        - 打印完之后，当前那行代码在执行栈被清空
        - 当那行代码执行完，方法也被执行完了，整个方法在调用栈中被清空
    - 此时所有代码执行完毕
- 总结event loop过程
  - 同步代码，一行行放在call stack(调用栈)执行
  - 遇到异步，会先记录下，等待时机(定时、网络请求等)
  - 时机到了，就移动到Callback Queue(回调函数队列)
  - 如果call stack(调用栈)为空(即同步代码执行完)，Event Loop开始工作
  - 轮询查找回调函数队列，如果有则移动到执行栈执行
  - 然后继续轮询查找(永动机一样)
    - 这样异步就可以永远执行下去

#### 3.1.2. DOM事件和event loop
- 示例：
```html
<button id="btn1">提交</button>

<script>
$('#btn1').click(e=> {
  console.log('button clicked');
});

console.log('Bye');
</script>
```
- 触发回调的时机不一样(事件=> 点击、鼠标移入等用户交互)
  - 页面加载实际上click是立即就执行的(`$('#btn1').click`)
  - 但里面函数不执行，只是将事件放入web api中
  - 其余和上面讲述的相同
  - 触发时机(请求，事件，定时器等)是由浏览器控制的
- DOM事件和event loop关联性很强
  - DOM事件是基于event loop实现的
- 注意事项
  - JS是单线程的
  - 异步(setTimeout,ajax等)使用回调，基于event loop
  - DOM事件也使用回调，基于event loop
    - DOM事件虽然是基于event loop实现，但它不是异步
  - 总结来讲，只要是基于回调，就是基于event loop来实现

### 3.2. promise进阶
#### 3.2.1. 三种状态
- pending
  - 过程中(还没有结果)
- resolved
  - 已解决(成果)
- rejected
  - 被拒绝(失败)
- 过程
  - pending => resolved或pending => rejected
  - 变化不可逆(成功或者失败都回不去了)
- 示例
  ```js
  // pending
  const p1 = new Promise((resolve, reject)=> {
      
  })
  console.log('p1', p1);  // pending状态

  // resolve
  const p2 = new Promise((resolve, reject)=> {
      // 模拟异步
      setTimeout(()=> {
          // 在异步中执行成功回调
          resolve();
      });
  })
  // 异步中的方法块还没有执行
  console.log('p2', p2);  // 一开始打印时，pending状态
  // 在异步中执行成功回调，状态改变
  setTimeout(()=> console.log('p2-setTimeout', p2))

  // reject
  const p3 = new Promise((resolve, reject)=> {
      // 模拟异步
      setTimeout(()=> {
          // 在异步中执行失败回调
          reject();
      });
  })
  // 异步中的方法块还没有执行
  console.log('p3', p3);  // 一开始打印时，pending状态
  // 在异步中执行失败回调，状态改变
  setTimeout(()=> console.log('p3-setTimeout', p3))
  ```

#### 3.2.2. 状态的变化和表现
- pending状态，不会触发then和catch
- resolved状态，会触发后续的then回调函数
- rejected状态，会触发后续的catch回调函数
- Promise使用技巧
  - 直接使用resolve
  ```js
  const p1 = Promise.resolve(100)
  console.log('p1', p1);
  // 后面加catch不会触发，因为只有resolve状态
  p1.then(data=> {
      console.log("data", data);
  })
  ```
  - 直接使用reject
  ```js
  const p2 = Promise.reject('err2')
  console.log('p2', p2);
  p2.catch(err=> {
      console.log("err", err);
  });
  ```

#### 3.2.3. then和catch改变状态
- then正常返回resolved，里面有报错则返回rejected
- catch正常返回resolved，里面有报错则返回rejected
- 代码演示
  ```js
  // then正常返回resolved，里面有报错则返回rejected
  const p1 = Promise.resolve().then(()=> {
      return 100
  })
  console.log("p1", p1);  // resolve状态 触发后续then的回调
  // 因为p1是resolve状态
  p1.then(()=> {
      console.log('p3 2333');  // 触发后续then的回调
  })

  const p2 = Promise.resolve().then(()=> {
      throw new Error('then error p2')
  })
  console.log("p2", p2);  // rejected状态 触发后续catch的回调
  // 因为p1是rejected状态
  p2.then(()=> {
      console.log('24444');  // 无法触发
  }).catch(err=> {
      console.log('err', err);  // 可以触发
  })

  // catch正常返回resolved，里面有报错则返回rejected
  const p3 = Promise.reject('my error').catch(err=> {
      console.log('err', err);
  });
  console.log("p3", p3);  // 此时的状态是resolved - 重点！
  // 因为p3是resolve状态
    p3.then(()=> {
      console.log('p3 2333');  // 触发后续then的回调
  })

  const p4 = Promise.reject('my error').catch(err=> {
      throw new Error('then error p4')
  });
  console.log("p4", p4);  // 此时的状态是reject
  // 因为p4是rejected状态
  p4.then(()=> {
      console.log('24444');  // 无法触发
  }).catch(err=> {
      console.log('err', err);  // 可以触发
  })
  // p4.catch()里面没有报错，即它的promise状态也是resolved
  ```
- 总结
  - 不管是then还是catch，只要是正常返回，promise状态就都是resolved，只要报错，promise状态就都是rejected
- 面试题解答
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

#### 3.2.4. promise总结
- 三种状态，状态的表现和变化
  - pending、resolved、rejected
  - 变化
    - pending => resolved
    - pending => rejected
  - 表现
    - pending不会触发任何回调
    - resolved会触发then回调
    - rejected会触发catch回调
- then和catch对状态的影响(重点)
  - 无论是then还是catch，只要里面没有报错，返回的就是resolved状态的promise，只要有报错，返回的就是rejected状态的promise
- then和catch的链式调用(常考)

### 3.3. async/await
#### 3.3.1. 基本使用
- 背景
  - 异步回调有callback hell风险的
  - 为了解决这个问题，可以使用promise then catch链式调用
    - 但这也是基于回调函数
  - async/await是同步语法，彻底消灭回调函数
- 代码演示
  ```js
  function loadImg(src) {
    const p = new Promise(
      (resolve, reject) => {
        const img = document.createElement('img')
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            const err = new Error(`图片加载失败 ${src}`)
            reject(err)
        }
        img.src = src
      }
    )
    return p
  }

  // 如果不写分号，后面有括号，他会当做一个函数执行，所以这里不写分号，下面匿名函数会报错
  const url1 = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'
  const url2 = 'https://img3.mukewang.com/5a9fc8070001a82402060220-100-100.jpg'

  // 匿名函数
  // 如果前面不加分号，后面要加!(非)，表示和前面隔开
  !(async ()=> {
      // 同步写法，实现异步代码

      // 执行await函数必须使用async包裹
      const img1 = await loadImg(url1);  // loadImg不是async，是promise对象
      console.log(img1.height, img1.width)

      const img2 = await loadImg(url2);
      console.log(img2.height, img2.width)
  })()

  const loadImg1 = async ()=> {
      const img1 = await loadImg(url1);
      
      return img1
  }

  const loadImg2 = async ()=> {
      const img2 = await loadImg(url2);
      
      return img2
  }

  !(async ()=> {
      // 执行await函数必须使用async包裹
      const img1 = await loadImg1();  // loadImg1是async函数，不是promise对象
      console.log(img1.height, img1.width)

      const img2 = await loadImg2();
      console.log(img2.height, img2.width)
  })()
  ```

#### 3.3.2. async/await和Promise的关系
- 回顾
  - async/await是消灭异步回调的终极武器
  - 和Promise并不互斥
  - 两者相辅相成(必须结合起来用)
- 关系
  - 执行async函数，返回的是Promise对象
  - await相当于promise的then
  - try...catch可捕获异常，代替了promise的catch
- 代码演示
  - 执行async函数，返回的是Promise对象
    ```js
    async function fn1() {
      // 如果返回一个值，他会内部封装成一个promise对象
      // 如果返回promise对象，就按原状返回一个promise对象
      // return Promise.resolve(200)
      return 100  // 相当于return Promise.resolve(100)
    }
    const res1 = fn1();  // 执行async函数，返回的是一个promise对象
    console.log("res1", res1);  // 100 resolved状态 promise对象
    // resolved状态的promise对象，可以执行then回调
    res1.then(data=> {
        console.log("data", data)  // 100
    })
    ```
  - await相当于promise的then
    ```js
    !(async ()=> {
      const p1 = Promise.resolve(300)
      const data = await p1  // await相当于promise的then
      console.log('data', data);  // 300
    })()

    // 如果await下面只是一个值
    !(async ()=> {
      // 如果await后面是promise，他会当做then使用
      // 如果不是promise，他会进行内部封装 => await Promise.resolve(400)
      const data1 = await 400  
      console.log('data1', data1);  // 400
    })()
    ```
  - 前面两条规则连起来
    ```js
    async function fn4() {
      // 返回的都是promise对象
      return 200
      // return Promise.resolve(200)
    }

    !(async ()=> {
      // await相当于promise的then
      const data2 = await fn4()  
      console.log('data2', data2);  // 200
    })()
    ```
  - try...catch可捕获异常，代替了promise的catch
    ```js
    !(async ()=> {
      const p4 = Promise.reject('err')  // reject状态的promise

      // promise如果是reject状态，就可以使用try catch捕获
      try {
          const res = await p4
          console.log("p4", res)
      } catch(ex) {
          console.error(ex);  // try...catch相当于promise的catch
      }
    })()
    ```
  - await、then、try...catch
    - 面试很可能会考
    ```js
    !(async ()=> {
      const p5 = Promise.reject('err')  // reject状态的promise
      const res = await p5  // 他是reject状态，不会走then，只会走try catch
      // 下面不会执行
      console.log("p5", res)
    })()
    ```
- 总结
  - async函数他是封装promise的，返回的也是promise
  - await相当于promise的then，处理promise成功的情况
  - 在async函数中，promise状态为失败的情况，需要用try...catch捕获

### 3.4. 异步的本质
- 回顾
  - async/await是消灭异步回调的终极武器
  - JS还是单线程，还是得有异步，还得是基于event loop
  - async/await只是一个语法糖，但这颗糖真香
- 代码演示
  - 示例1
    ```js
    const async1 = async ()=> {
      console.log("async1 start");  // 立马执行 重要
      // 它返回的实际上是undefined，await执行不执行其实没有意义
      await async2()  // 先执行async2，再执行await这个操作
      // 执行await之后，下面的都是异步
      // await的后面，都可以看作是callback里面的内容，即异步
      // await下面的方法需要放到callback里面去等待执行
      // 类似event loop，setTimeout(cb1)
      // 也可能是Promise.resolve().then(()=> {console.log('async1 end')})
      // 现在可以把上面两个当作是一个东西，涉及到微任务/宏任务之后进行细分
      console.log('async1 end');
    } 

    const async2 = async ()=> {
      console.log("async2");  // 立马执行 重要
    }
    
    // script start
    // async1 start
    // async2
    // !!! 因为await下面是异步
    // script end  // 此时同步代码已经执行完，启动事件循环机制，在回调函数的队列里面去找异步的代码去执行
    // async1 end  // 执行异步代码
    console.log('script start');
    async1();  // 执行该方法，里面的代码立马执行(还没到异步)
    console.log('script end');
    ```
  - 示例2
    ```js
    const async3 = async ()=> {
      console.log("async3 start");  // 2
      await async4();

      // 下面三行都是异步回调，即callback内容
      // 他们被放到异步队列里面
      console.log('async3 end');  // 5
      await async5();

      // 下面一行是异步回调的内容
      // 实际上这是层级嵌套的关系
      console.log('async3 end 2');  // 7
    } 

    const async4 = async ()=> {
      console.log("async4");  // 3
    }

    const async5 = async ()=> {
      console.log("async5");  // 6
    }

    // script2 start
    // async3 start
    // async4
    // script2 end
    // async3 end
    // async5
    // async3 end 2
    console.log('script2 start');  // 1
    async3();
    console.log('script2 end');  // 4
    // 此时同步代码执行完，根据事件循环机制，开始执行异步队列中的代码
    ```
- 总结
  - async/await是用同步的代码去写异步
  - 但他改变不了异步的本质
  - await后面的东西，都可以看作是callback里面的内容，即await下面的代码都会被放到异步队列里面
  - 它实际执行的方法和callback是一样的，即也和异步是一样的
  - await下面如果还有await，实际是嵌套关系
  - 同步代码执行完之后，根据事件循环机制，再从异步队列里面拿出方法，放入调用栈去执行

### 3.5. for...of
- 概念
  - for...in(以及forEach、for)是常规的同步遍历
  - for...of常用于异步的遍历
- 代码演示
  ```js
  // 模拟异步
  const muti = num=> {
    return new Promise(resolve=> {
      setTimeout(()=> {
          resolve(num * num);
      }, 1000);
    })
  }

  const nums = [1, 2, 3]

  // 同步循环
  // 因为要用异步语法，所有必须用async函数
  // 同步的代码不会等待，会一遍一遍往下执行
  // 他会一下子把数组遍历完，然后一下子把数组中的值进行计算，最后再一下子打印出结果
  // 一瞬间执行了三遍，所以一秒钟之后同时打印出来
  nums.forEach(async i=> {
    // 因为muti是异步的，这里使用await实现异步
    let res = await muti(i);
    // 1s之后计算的结果同时打印出来
    console.log(res)
  })

  // 如何一个一个数字进行打印呢？
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

### 3.6. async/await总结
- async/await解决了异步回调，是一个很香的语法糖
- async/await和promise的关系，很重要
  - 执行async函数，返回的是Promise对象
  - await相当于promise的then
  - try...catch可捕获异常，代替了promise的catch
- for...of的使用
  - 是一种异步循环

### 3.7. 微任务/宏任务
#### 3.7.1. 概念
- 简述
  - 宏任务 => macroTask
  - 微任务 => microTask
- 知识点
  - 什么是宏任务，什么是微任务
  - event loop和DOM渲染
    - 只有从这里面才能体现出宏任务和微任务的区别
  - 微任务和宏任务的区别
- 代码演示
  ```js
  console.log(100);  // 1
  // 宏任务
  setTimeout(()=> {
    console.log(200);  // 3
  })
  /* setTimeout(()=> {
    console.log(201);  // 4  同类型的异步和出场顺序有关
  }) */
  // 微任务
  Promise.resolve().then(()=> {
    console.log(300)  // 3  不同类型的异步和出场顺序无关
  })
  console.log(400)  // 2  同步代码执行完毕

  // 100 400 300 200 201
  ```
- 宏任务和微任务的区别
  - 宏任务和微任务其实就相当于所有的异步（DOM事件除外）
    - DOM事件也是基于事件循环机制来执行的
  - 宏任务：setTimeout、setInterval、Ajax、DOM事件
  - 微任务：Promise、async/await
  - 微任务执行时机比宏任务要早(先记住)

#### 3.7.2. event loop和DOM渲染
- 问题
  - 为什么微任务执行时机比宏任务早
- 简述
  - 需要再次回归一遍event loop的过程
  - JS是单线程的，而且和DOM渲染共用一个线程(资源)
  - JS执行的时候，得留一些时机供DOM渲染
    - js一遍一遍执行，浏览器界面不能一直不变
- 回顾event loop过程(增加DOM渲染时机)
  - 参考代码
    ```js
    console.log('Hi')

    setTimeout(function cb1() {
      console.log('cb1')  // cb即callback
    }, 5000)

    console.log('Bye');
    ```
  - 名称
    - Browser console => 浏览器console环境
    - Call Stack => 调用栈
    - Web APIs => 浏览器定义的api(DOM/BOM)
    - Callback Queue => 回调函数队列
    - Event Loop => 事件循环机制
  - 执行过程
    - 执行第一行代码，把它推到调用栈，打印，移出调用栈
    - 执行到定时器
      - 把setTimeout cb1放到调用栈
      - 把定时器里面的方法放到Web API中
      - 放到Web API中定时器就执行完了
      - 移出调用栈
    - 继续往下执行
      - 同步代码继续推到调用栈，打印，移出调用栈
    - 最后调用栈清空，没有任何同步代码推到调用栈执行的时候
      - 第一次轮询
    - 启动事件循环机制
      - 一遍一遍地遍历回调函数队列
      - 如果异步回调队列有值，就会将它推到调用栈中执行
    - 最后还漏了一个步骤
      - 在调用栈空闲(没有同步代码推入调用栈)
      - 先尝试DOM渲染
      - 再去触发事件循环机制
    - 将定时器放入调用栈，执行完毕之后移出调用栈
      - 此时调用栈空闲
      - 会再次尝试DOM渲染
      - 再去触发事件循环机制
      - 第二次轮询
  - 补充说明
    - 每次调用栈清空(即每次轮询结束)，即同步任务执行完
      - 包括异步代码推到调用栈执行结束
    - 都是DOM重新渲染的机会，DOM结构如有改变则重新渲染
    - 然后再去触发下一次事件循环
- 代码示例
  - 体会dom渲染和js执行的关系
  ```js
  // event loop和DOM渲染
  // 执行完js代码之后，还需要渲染到页面上
  const $p1 = $('<p>一段文字</p>')
  const $p2 = $('<p>一段文字</p>')
  const $p3 = $('<p>一段文字</p>')

  $('#container').append($p1)
                 .append($p2)
                 .append($p3)

  console.log("length", $('#container').children().length)
  // alert会阻断js执行，也会阻断DOM渲染，便于查看效果
  // alert之前，js已经执行完成了，但DOM还未渲染
  alert('本次调用栈结束，DOM结构已经更新，但尚未触发渲染')
  ```
- 微任务和宏任务的区别
  - 宏任务：DOM渲染后触发，如setTimeout
  - 微任务：DOM渲染前触发，如Promise
  - 微任务 => DOM渲染 => 宏任务
- 为什么微任务和宏任务执行顺序是这样的
  - 代码示例
    ```js
    // event loop和DOM渲染
    // 执行完js代码之后，还需要渲染到页面上
    const $p1 = $('<p>一段文字</p>')
    const $p2 = $('<p>一段文字</p>')
    const $p3 = $('<p>一段文字</p>')

    $('#container').append($p1)
                   .append($p2)
                   .append($p3)

    // 微任务：DOM 渲染前触发
    Promise.resolve().then(()=> {
      console.log("length1", $('#container').children().length)

      alert('Promise then')  // 此时dom未渲染
    })

    // 宏任务：DOM 渲染后触发
    setTimeout(()=> {
      console.log("length2", $('#container').children().length)

      alert('Promise setTimeout')  // 此时dom渲染了
    })
    ```
  - 原理
    - 角度
      - 从事件循环解释，为何微任务执行更早
      - 即为何微任务在dom前触发
    - setTimeout执行机制 => 宏任务
      - setTimeout实际上就是把callback放到定时器中
      - 定时器等待一个时机 => 定时时间结束
      - 放入异步回调队列中
      - 由事件循环机制，将异步队列中的方法放到调用栈中
      - 当调用栈空闲(每次轮询结束)的时候，会尝试DOM渲染
      - 尝试DOM渲染之后继续触发事件循环
    - Promise机制 => 微任务
      - 执行promise的时候，他会放到micro task queue里面等待时机
      - 他不会经过web apis
      - 因为promise是ES规范，不是w3c规范
      - 他和宏任务队列(callback queue)是分开的
      - 为什么
        - 微任务是ES6语法规定的
        - 宏任务是由浏览器规定的
    - 完善事件循环机制
      - 同步代码执行完之后，即调用栈清空
      - 执行当前的微任务（微任务队列）
      - 尝试DOM渲染
      - 触发事件循环机制
      - 最后执行宏任务
    - 图示
      ![event-loop2](/vite-blog/images/interview/foundation/event-loop2.png)
  - 总结(面试题)
    - 宏任务有哪些？微任务有哪些？为什么微任务触发时机更早
    - 宏任务、微任务和DOM渲染的关系
    - 微任务、宏任务和DOM渲染，在event loop的过程

## 4. 回顾面试题
- 回顾event loop的过程
- 和DOM渲染的关系
  - 微任务和宏任务在event loop过程中的不同处理
- 什么是宏任务和微任务，两者区别
  - 宏任务：setTimeout、setInterval、Ajax、DOM
  - 微任务：Promise、async/await
  - 微任务执行时机比宏任务要早
  - 微任务在DOM渲染前触发，宏任务在DOM渲染后触发
- Promise的三种状态
  - pending、resolved、rejected
  - pending -> resolved 或 pending -> rejected
  - 变化不可逆
- Promise then和catcha的连接
  - then后面是resolved状态
  - resolved状态后面跟then可以打印
  - 抛出异常后面是rejected状态
  - rejected状态后面跟catch可以打印
- async/await和promise关系
  - async返回的永远是promise
  - await相当于then
  - 代码示例
    ```js
    // 示例一
    async function fn() {
      return 100
    }

    (async function() {
      const a = fn()  // ?
      const b = await fn()  // ?

      console.log(a);  // promise
      console.log(b);  // 100
    })()

    // 示例二
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
- promise和setTimeout的顺序
  - setTimeout属于宏任务，promise属于微任务
  - 微任务先于宏任务执行
- async/await的顺序问题
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

## 5. 回顾知识点
- 简述
  - event loop
  - promise进阶
  - async/await
  - 微任务/宏任务
- event loop过程1
  - 同步代码，一行一行放在call stack执行
  - 遇到异步，会先'记录'下，等待时机(定时、网络请求等)
  - 时机到了，就移动到callback queue
- event loop过程2
  - 如果call stack为空(即同步代码执行完)，event loop开始工作
  - 轮询查找callback queue，如有则移动到call stack执行
  - 然后继续轮询查找(永动机一样)
- DOM事件和event loop
  - JS是单线程的
  - 异步(setTimeout、ajax等)使用回调，基于event loop
  - DOM事件也使用回调，基于event loop
  - DOM事件和异步，他们触发的时机不一样，但本质都是事件循环
- Promise进阶
  - 三种状态，状态的表现和变化
  - then和catch对状态的影响(重要)
  - then和catch的链式调用(常考)
- async/await
  - async/await解决了异步回调，我们可以使用同步代码来写异步
  - 是一个语法糖，其本质还是promise
  - async/await和Promise的关系，非常重要
    - 执行async函数，返回的是Promise对象
    - await相当于promise的then
    - try...catch可捕获异常，代替了promise的catch 
  - for...of的使用
- 微任务/宏任务
  - 宏任务有哪些？微任务有哪些？为什么微任务触发时机更早
    - 微任务是ES6语法规定的
      - Promise、async/await
    - 宏任务是由浏览器规定的
      - setTimeout、setInterval、Ajax、DOM事件
  - 宏任务、微任务和DOM渲染的关系
    - 微任务 => DOM渲染 => 宏任务
  - 微任务、宏任务和DOM渲染，在event loop的过程
    - 微任务会被放到micro task queue里面等待时机
    - 宏任务会被放到Callback Queue里面等待时机
    - 调用栈被清空之后(同步代码执行完)
    - 先执行微任务(不会走web api，直接执行)
      - 微任务被一个个拖到调用栈
    - 微任务执行完毕之后，尝试DOM渲染
    - 尝试DOM渲染之后，触发event loop(事件轮询机制)(永动机)
      - 执行宏任务
        - 宏任务被一个个拖到调用栈
