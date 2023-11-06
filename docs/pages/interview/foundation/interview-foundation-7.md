# JS基础-异步和单线程(必考)
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/7.html)

## 1. 题目
- 同步和异步的区别是什么
- 手写Promise加载一张图片
- 前端使用异步的场景有哪些
- 场景题
  - 以下数字的打印顺序是怎么样的
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

## 2. 知识点
### 2.1. 单线程和异步
- JS是单线程语言，只能同时做一件事
  - 单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着
  - 如果排队是因为计算量大，CPU忙不过来，倒也算了，但是很多时候CPU是闲着的，因为IO设备（输入输出设备）很慢（比如Ajax操作从网络读取数据），不得不等着结果出来，再往下执行
  - 于是就有一个概念 —— 任务队列
  - 主线程完全可以不管IO设备，挂起处于等待中的任务，先运行排在后面的任务。等到IO设备返回了结果，再回过头，把挂起的任务继续执行下去
- 异步运行机制
  - 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）
  - 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件
  - 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
  - 主线程不断重复上面的第三步
- 浏览器和nodejs已经支持JS启动进程，入Web Worker
  - 进程里面可以有多个线程
  - 支持js启动进程并不能改变js是单线程语言的本质
- JS和DOM渲染共用一个线程，因为JS可以修改DOM结构
  - JS执行过程中DOM渲染必须停止
  - DOM渲染时JS执行过程必须停止
- 为什么叫单线程和异步
  - 异步是由单线程这个背景而来的
- 遇到等待(网络请求，定时任务)不能卡住
  - 如果每次遇到需要等待的情况，浏览器卡住(不能点击，没有动画等)体验会非常糟糕
  - 这种情况需要异步
  - 异步就是解决单线程等待的这个问题
- 异步
  - 异步是通过callback(回调)函数形式
- 举例说明
  - 异步
  ```js
  console.log(100)
  // 这时候等待的时间不能卡在那，会继续往下执行
  // 异步是通过callback(回调函数)来调用的
  // setTimout里面就是回调函数
  // 异步的意思是，我们先执行同步任务
  // 我们到达某个条件，再去执行某个函数
  // 异步的特点是，不会阻塞后面代码的执行
  setTimout(()=> {
    // 1s之后才会打印200
    console.log(200);  
  }, 1000)
  console.log(300);
  ```
  - 同步
  ```js
  console.log(100)
  // 如果是同步，他会卡主，后面的东西js都不会执行,dom不会渲染
  alert(200)
  console.log(300)
  ```
- 总结异步和同步
  - 基于JS是单线程语言
  - 异步不会阻塞代码执行
  - 同步会阻塞代码执行

### 2.2. 应用场景
- 网络请求，如ajax图片加载
- 定时任务，如setTimeout
- 注意事项
  - 网络请求或者定时任务等待的时候，cpu是空闲的，不能浪费资源，就需要异步的机制
- 代码示例1 - 网络请求
  ```js
  // ajax => 网络请求
  console.log('start')
  // 什么时候数据请求到，什么时候执行，之前就按顺序执行
  $.get('./data1.json', data=> {
    console.log(data);
  })
  console.log('end')
  ```
- 代码示例2 - 图片加载
  ```js
  // 图片加载 - 相当于就是加载dom元素
  console.log('start');
  let img = document.createElement('img')
  // onload也是回调函数的一种形式
  img.onload = ()=> {
    console.log('loaded');
  }
  // img加载完成之后才走onload(异步)
  img.src = '/xxx.png'
  console.log('end');
  ```
- 代码示例3 - 定时任务
  - setTimeout
    ```js
    console.log(100)
    setTimeout(()=> {
      console.log(200);
    }, 1000)
    console.log(300)
    ```
  - setInterval
    ```js
    console.log(100)
    setInterval(()=> {
      console.log(200);
    }, 1000)
    console.log(300)
    ```

### 2.3. callback hell(回调地狱)和Promise
- 回调地狱示例
  ```js
  // 第一份数据
  $.get(url1, data1=> {
    console.log(data1);

    // 第二份数据
    $.get(url2, data2=> {
      console.log(data2)

      // 第三份数据
      $.get(url3, data3=> {
        console.log(data3);

        // 更多数据.....
      })
    })
  })
  ```
  - callback是促使promise产生的核心要素
- Promise
  - 简易示例
  ```js
  let getData = url=> {
    // promise要传入一个函数
    // 里面有两个参数，实际上这两个参数也是函数
    return new Promise(resolve, reject)=> {
      $.ajax({
        url,
        success(data) {
          resolve(data)  // 触发resolve的时候会触发then
        },
        error(err) {
          reject(err)  // 触发reject的时候会触发catch
        } 
      });
    }
  }

  let url1 = './data1.json'
  let url2 = './data2.json'
  let url3 = './data3.json'

  // then就是promise原型里面的方法
  // 管道串联的形式
  getData(url1).then(data1=> {
    console.log(data1)

    // 这里直接return，即直接拿到data2
    // 后面可以直接then，并传入data2
    return getData(url2)
  }).then(data2=> {
    console.log(data2)
    return getData(url3)
  }).then(data3=> {
    console.log(data3)
    // 如果某一层出现了错误，就会走下面的catch
  }).catch(err=> {
    console.log(err)
  })
  ```

## 3. 面试题解答(总结)
- 同步和异步的区别是什么
  - 基于JS是单线程语言
  - 异步不会阻塞代码执行
  - 同步会阻塞代码执行
- 前端异步的使用场景
  - 一些需要等待的场景
  - 网络请求
  - 定时任务
- 手写用Promise加载一张图片
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/async/promise加载图片.html)
  ```js
  let loadImg = src=> {
    const p = new Promise((resolve, reject)=> {
      const img  = document.createElement('img');
      img.onload = ()=> {
        resolve(img)
      }
      img.onerrot = ()=> {
        const err = new Error(`图片加载失败 ${src}`)
        reject(err)
      }
      // 只要一赋值img，就会触发onload，就会触发resolve
      img.src = src
    })

    return p
  }

  const url1 = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'
  const url2 = 'https://img3.mukewang.com/5a9fc8070001a82402060220-100-100.jpg'

  // 单张图片
  loadImg(url1).then(img=> {
    console.log(img.width)
    // 这里的img要传到第二个函数的参数里面
    return img
  }).then(img=> {
    console.log(img.height)
  }).catch(err => console.log(err));

  // 多张图片（先加载第一个，再加载第二个）
  loadImg(url1).then(img1=> {
    console.log(img1.width)
    return img1  // 普通对象
  }).then(img1=> {
    console.log(img1.height)
    return loadImg(url2)  // promise实例
  }).then(img2=> {
    console.log(img2.width)
    return img2
  }).then(img2=> {
    console.log(img2.height)
  }).catch(err => console.log(err))
  ```
