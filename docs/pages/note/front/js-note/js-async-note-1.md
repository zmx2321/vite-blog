# js中的异步

## 样例说明
1. 如果asycn里的代码都是同步的，那么这个函数被调用就会同步执行
```js
async function fn(){
  console.log('a')
}
fn()
console.log('b')
//a
//b
```
2. 有await关键字，让出线程，阻塞代码
```js
function fn(){
  return new Promise(resolve=>{
    console.log(1)
  })
}
async function f1(){
  await fn()
  console.log(2)
}
f1()
console.log(3)
// 1
// 3
// undefined
// 这个代码因为fn是属于同步的，所以先打印出1，然后是3，但是因为没有resolve结果，所以await拿不到值，因此不会打印2
```
3. 修改上面代码
```js
function fn(){
    return new Promise(resolve=>{
        console.log(1)
        resolve()
    })
}
async function f1(){
    await fn()
    console.log(2)
}
f1()
console.log(3)
// 1
// 3
// 2
// 这个代码与前面相比多了个resolve说明promise成功了，所以await能拿到结果，因此就是1 3 2
```
4. 再举一个例子
```js
function fn(){
    return new Promise((resolve, reject)=>{
        let sino = parseInt(Math.random() * 6 +1)
        setTimeout(()=>{
          resolve(sino)
        },3000)
    })
}
async function test(){
    let n = await fn()
    console.log(n)
}
test()

// 上面这段代码async中使await fn()先执行，等到三秒后执行完再把得到的结果赋值给左边的n，
// 也就是说test函数需要三秒钟才执行完成，所以test函数是异步的，因此前面必须写async
```

## 注意事项
- await后面接一个会return new promise的函数并执行它
- await只能放在async函数里
- 如果promise没有一个成功的值传入，对await来说就算是失败了，下面的代码就不会执行

## 如果需要将方法当做变量
```js
// 刷新所有列表 - 判断当前tab项刷新
refreshList(params) {
  // console.log(this.tabActive);

  for(let i=0; i<this.tabList().length; i++) {
    // console.log(this.tabList()[i]);

    switch(this.tabActive) {
      case 'tab'+(i+1):
        eval(`this.getKibanaList${i+1}(params);`);  // 获取kibana列表
        break;
    }
  }
```

## 解决async/await中的promise返回错误reject的问题，及错误捕获
```js
function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error")
        }, 1000)
    })
}

async function go() {
    try{
        let res = await fn()
    }catch(e){
        console.log(e)
    }
}

go()
```

## 根据某个位置截取字符串
```js
getPointData() {
    return new Promise((resolve, reject)=> {
    axios.get('http://a.amap.com/jsapi_demos/static/china.js').then(res=> {
        let dataStr = res.data;
        let ipos = dataStr.indexOf('[')
        let str = dataStr.substring(ipos,dataStr.length)
        let points = JSON.parse(str)

        resolve(points)
    }).catch(err=> {
        reject(err)
    })
    })
},

// 聚合
async initMap(map) {
    let markers = [], cluster

    let points = await this.getPointData()
    ......
}
```

## await和axios结合
```js
getPointData() {
    return axios.get('http://a.amap.com/jsapi_demos/static/china.js').then(res=> {
        let dataStr = res.data;
        let ipos = dataStr.indexOf('[')
        let str = dataStr.substring(ipos,dataStr.length)
        let points = JSON.parse(str)
        console.log("111", points)

        return points
    })

    /* return axios({
        method: 'GET',
        dataType: 'json',
        url: 'http://a.amap.com/jsapi_demos/static/china.js',
    }).then(res=> {
        let dataStr = res.data;
        let ipos = dataStr.indexOf('[')
        let str = dataStr.substring(ipos,dataStr.length)
        let points = JSON.parse(str)
        console.log("111", points)

        return points
    }) */
},

// 聚合
async initMap(map) {
    let markers = [], cluster

    let points = await this.getPointData()
    ......
}
```

## 异步函数
```js
// func
const fn1 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 300);
  });
}
const fn2 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 600);
  });
}

// 优化前
const fn = () =>{
   fn1().then(res1 =>{
      console.log(res1);// 1
      fn2().then(res2 =>{
        console.log(res2)
      })
   })
}

// 优化后
// 使用pomise还是可能出现回调地狱
const fn = async () =>{
  const res1 = await fn1();
  const res2 = await fn2();
  console.log(res1);// 1
  console.log(res2);// 2
}

// 但是要做并发请求时，还是要用到Promise.all()
const fn = () =>{
   Promise.all([fn1(),fn2()]).then(res =>{
       console.log(res);// [1,2]
   }) 
}
```

## Promise基本用法
> 在领导要求下，某个项目需要引入引入一个js但不能暴露其地址，所以我使用$.getScript()方法异步加载，但如果还需要引入其他js，并且这个js中的方法只有在异步执行那个js之后才能使用，在这个时候需要有执行先后顺序<br />
解决办法：<br />
考虑使用Promise去实现，先执行完方法一之后再去执行方法二([演示地址](https://zmx2321.github.io/blog_code/accumulation/front/promise_easy))

```js
// 添加js和cssdom
/* let addJs = (url)=> {
    let newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = url; 
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(newScript);
}

let addClss = (url)=> {
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML += `<link type="text/css" rel="stylesheet" href="${url}">`;
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
} */

// test1
let test1 = ()=> {
    return new Promise((resolve, reject) => {
        // 返回写函数里面你要执行的内容
        resolve(
            console.log("test1, 1111")
        );
    })
}

// test2
let test2 = () => {
    setTimeout(function () {
        console.log("test2, 2222");
    }, 2000)
}

// 先执行test1，再执行test2
test1().then(() => {
    test2();
}) 
```

## 队列控制多个请求访问一个异步方法
> 搜索的时候每次键盘按下都会进行一次搜索，但是搜索时间是异步的，这就导致了上一次搜索还没结束下一次搜索就有开始了，
事实上，异步代码一旦调用频繁后，要么回调满地图跑，要么这些代码不要求有先后，规律。我见过一些代码，所有的请求都用异步，
有时候两三个方法同时请求一个方法的时候，就会出现变量赋值错误，代码执行混乱等问题
解决办法：使用队列来控制搜索的次数与条件。
```js
// 实例化队列
var queue=new Queue();
//搜索点击
function onSearchClick(key){         
    if(queue.getLength==0){
    queue.push(key);
    search()
    }else{
    queue.push(key); 
    }
}
//搜索
function search(){
    //获取队尾
    var key=queue.getTail();
    if(!key){
        $.ajax({
        ....
        data:{searchKey:key},//赋值搜索条件
        ....
        success:function(result){
            var length=queue.getLength();
            if(length>1){
                //清空除队尾的其余条件
                queue.splice(0,length);
                //递归调用
                search();
            }else{
                //清空队列
                queue.clear();
            }                    
        },             
    })
    }
}
    
//队列
Queue:function(){
    var arr = [];
    //入队
    this.push = function (item) {
        arr.push(item);
        return true;
    };
    //出队
    this.shift = function () {
        return arr.shift();
    };
    //获取队首
    this.getHead = function () {
        return arr[0];
    };
    //获取队尾
    this.getTail = function () {
        return arr[arr.length - 1];
    };
    //删除数组固定位
    this.splice = function (start,end) {
        arr.splice(start, end);
    };
    //清空数组
    this.clear = function () {
        arr=[];
    };
    //获取数组长度
    this.getLength = function () {
        return arr.length;
    };
}
```

## 关于Promise中2个参数的解释
- action中默认第一个参数为content，content.commit，即这里的 {commit}
- return new Promise((resolve, reject)  返回一个promise，模拟一个异步操作
- Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和 Rejected（已失败）。
- 在新建 promise 的时候就传入了两个参数这两个参数用来标记 promise的状态的，这两个参数是两个方法，并且这两个参数可以随意命名，
- 当执行到 resolve()这个方法的时候，就改变promise的状态为fullfiled ，当状态为 fuulfiled的时候就可以执行.then()
- 当执行到 reject()  这个方法的时候，就改变 promise 的状态为reject，当 promise 为reject 就可以.catch() 这个promise了
- 然后这两个方法可以带上参数，用于.then() 或者 .catch() 中使用。所以这两个方法不是替代，或者是执行什么，
- 他们的作用就是 用于改变promise 的状态。然后，因为状态改变了，所以才可以执行相应的 .then() 和 .catch()操作。
```js
LoginTest(content, userInfo) {
return new Promise((resolve, reject) => {
    LoginTest(userInfo.username, userInfo.password).then(res=> {
        resolve();
    }).catch(error => {
        reject(error);
    })
})
```