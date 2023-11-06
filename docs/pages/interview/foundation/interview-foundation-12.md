# JS-Web-API-Ajax
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

[代码笔记](https://zmx2321.github.io/blog_code/interview/interview-one-side/12.html)

## 1. 题目
- 手写一个简易的ajax
  - jquery、fetch、axios等可以实现ajax
- 跨域的常用实现方式

## 2. 知识点
### 2.1. 简述
- XMLHttpRequest
  - 浏览器实现ajax最核心的api
- 状态码
- 跨域：同源策略、跨域解决方案
  - 浏览器要保证安全
  - 跨域实际上就是跨过同源策略

### 2.2. XMLHttpRequest
- 代码示例
  ```js
  // 初始化一个实例
  const xhr = new XMLHttpRequest()

  /**
   * get请求
    */
  // open方法最后一个true表示异步
  // open方法相当就是一个准备数据的方法
  // 如果请求时间长，用同步会卡顿
  // 不过一般是使用异步
  xhr.open("GET", "./json/api.json", true)
  // xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
  // 类似 img.onload = function(){}
  // 当XMLHttpRequest实例状态改变的时候触发这个函数
  // 在这个函数里面去接收数据
  xhr.onreadystatechange = function() {
    // 这里的函数异步执行
    // console.log(xhr);

    // 4：响应已完成；您可以获取并使用服务器的响应了
    if(xhr.readyState === 4) {
      // 状态码
      if(xhr.status === 200) {
        // console.log(xhr.responseText)
        let objData = JSON.parse(xhr.responseText)
        console.log("GET", objData);
      }
    }
  }

  // 因为是get请求，不需要发送任何数据，就写null
  // onreadystatechange这个钩子如果不去send，他是不会变的
  // 每send一次，xhr实例都会发生变化，所以异步回调里面要做判断
  xhr.send(null)

  /**
   * post请求
    */
  // 网络请求不能卡顿，所以用异步 - 如果请求时间长，用同步会卡顿
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true)
  // xhr.open("POST", "./json/login.json", true)
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      // 状态码
      if(xhr.status === 200 || xhr.status === 201) {
        // console.log(xhr.responseText)

        let objData = JSON.parse(xhr.responseText)
        console.log("POST", objData);
      }
    }
  }

  const postData = {
    username: "张三",
    password: "123456"
  }

  // 把它弄成字符串发送出去
  // 直接发送json是不对的，工具里面可以是因为它里面做了处理
  xhr.send(JSON.stringify(postData))
  ```

### 2.3. 状态码
- xhr.readyState => xhr的状态
  - 0 => (未初始化) 还没有调用send方法
  - 1 => (载入) 已调用send()方法，正在发送请求
  - 2 => (载入完成) send()方法执行完成，已经接收到全部响应内容
  - 3 => (交互) 正在解析响应内容
  - 4 => (完成) 响应内容解析完成，可以在客户端调用
- xhr.status => http协议的状态码
  - 2xx => 表示成功处理请求，如200
  - 3xx => 需要重定向，浏览器直接跳转，如301、302、304
    - 重定向不需要我们自己处理，服务器返回浏览器自己会去跳页面
    - 301表示永久重定向
    - 302表示临时重定向
    - 304表示资源未改变
      - 资源没有改变，浏览器就会用自己缓存的资源
  - 4xx => 客户端请求错误，如404、403
    - 404表示请求的地址有错误
    - 403表示客户端没有权限
  - 5xx => 服务端错误

### 2.4. 跨域
#### 2.4.1. 什么是跨域(同源策略)
- ajax请求时，浏览器要求当前网页和server必须同源(安全)
  - ajax请求的服务和当前的网页的服务端地址要一样
  - 主要限制是浏览器，如果是爬虫从服务器去做网络请求，照样可以把数据拿到
  - 如果需要访问不同源的接口，server端是可以做到的，服务端没有像浏览器这样的同源策略限制
- 同源的含义
  - 协议、域名、端口，三者必须一致
- 加载图片css、js等可无视同源策略
  - 不是ajax请求
  - `<img src=跨域的图片地址 />`
      - 图片服务器如果做了防盗链(不是浏览器做的)，就无法访问
  - 使用cdn地址实际上就是跨域
    - `<link href=跨域的css地址 />`
    - `<script src=跨域的js地址><script>`
  - `<img />可用于统计打点，可使用第三方统计服务`
    - 统计点击次数之类的
    - 通过图片去发送请求，就不会出现跨域的情况
  - `<script>`可实现JSONP
- 所有的跨域，都必须经过server端允许和配合
- 如果未经server端允许就实现跨域，说明浏览器有漏洞，危险信号

#### 2.4.2. JSONP => 客户端解决跨域
- JSONP跨域原理
  - 抛出问题
    - 访问一个网址，服务端一定返回一个html文件吗
      - 服务端可以任意动态拼接数据返回，只要符合html格式要求
      - 同理，我们通过script请求的js地址，也可以返回任意动态拼接的数据，只要符合js语法要求
      - html地址和js地址，实际上都是网址
  - JSONP的基本实现原理
    - `<script>`可绕过跨域限制
    - 这个`<script>`的地址，服务器可以任意动态拼接数据返回
    - 所以，`<script>`就可以获得跨域的数据，只要服务端愿意返回
    - 即server端可以动态拼接一些信息返回，这样就实现了jsonp的跨域
  - 代码示例
    ```html
    <script>
      // JSONP
      window.abc = function(data) {
        // 这是我们跨域得到的信息
        console.log(data)
      }
    </script>
    <!-- 通过http-server另起一个服务 -->
    <!-- <script src="http://127.0.0.1:3333/jsonp.js?callback=abc"></script> -->
    <script src="https://suggest.taobao.com/sug?code=utf-8&q=卫衣&callback=abc"></script>

    <!-- jsonp.js -->
    <script>
      abc(
        { name: 'xxx' }
      )
    </script>
    ```
- jquery实现JSONP
  - 代码示例
    ```js
    $.ajax({
      // ?code=utf-8&q=卫衣&callback=abc
      url: "https://suggest.taobao.com/sug?code=utf-8",
      type: 'GET',
      dataType:"jsonp",
      // jsonpCallback: 'cb',
      data: {
        q: "夹克"
      },
      success: function(data) {
        console.log(data);
      }
    })
    ```

#### 2.4.3. CROS => 服务端解决跨域
- cros => 服务器端设置请求头允许跨域(http header)
  - 纯服务端操作
- 代码示例
  ```java
  // 第二个参数填写允许跨域的名称，不建议直接写 *
  // 允许的域名
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:8011");
  // 允许的请求头
  response.setHeader("Access-Control-Allow-Headers", "X-Requested-Width");
  // 允许的请求方法
  response.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

  // 接收跨域的cookie
  response.setHeader("Access-Control-Allow-Credentials", "true");
  ```
  - 如果域名允许访问，就没必要搞jsonp了，直接做http请求就可以了

#### 2.4.4. proxy => 通过代理解决跨域
- vue.config.js
  ```js
  module.exports = {
    devServer: {
      port: 6666,

      proxy: {
        '/api': {
          changeOrigin:true,//允许跨域
          //本地服务接口地址
          target: 'http://192.168.0.xxx:xxxx',
          ws: true,
          pathRewrite: {
            '^/api': '/'
          }
        },
        '/apitest': {
          changeOrigin:true,//允许跨域
          //本地服务接口地址
          target: 'http://192.168.0.xxx:xxxx',
          ws: true,
          pathRewrite: {
            '^/apitest': '/'
          }
        },
      }
    }
  }
  ```
- nginx
  ```
  server {
    listen       6080;
    server_name  localhost;

    location / {
      root   E:\workspace\_poj;
      index  index.html index.htm;

      # include       nginx_cors;
    }

    location ^~/api {
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_buffering off;
      rewrite ^/api/(.*)$ /$1 break;
      proxy_pass http://192.168.0.xxx:xxxx/;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   html;
    }
  }
  ```

### 2.5. 网络请求工具
- jquery
  ```js
  $.ajax({
    // 请求方式
    type: 'POST',
    // 请求的媒体类型
    contentType: 'application/json;chartset=UTF-8',
    // 请求地址
    url: 'http://xxxx',
    // 数据，json字符串
    data: JSON.stringify(list),
    // 请求成功
    success: function(res) {
      console.log(res)
    },
    // 请求失败，包含具体的错误信息
    error: function(e) {
      console.log(e.status)
      console.log(e.responseText)
    }
  })
  ```
- fetch
  - 它是一个新的api,浏览器兼容性并没有百分百兼容
  - fetch相比于XMLHttpRequest更简洁一些
  ```js
  // 示例一
  fetch('http://xxxx').then(function(res) {
    retutn res.json()
  }).then(function(myJson) {
    console.log(myJson);
  })

  // 示例二
  fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    // 要发送cookie，必须使用credentials
    // 默认情况下，fetch不会从服务端发送或接收任何cookie
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    }
    method: 'POST',
    // 跨域
    mode: 'cros',
  }).then(response => response.json())
  ```
  - 从fetch()返回的Promise不会被标记为reject，即使该HTTP响应的状态码是404或500，相反，他会将Promise标记为resolved(但是会resolved返回值得ok属性设置为false),仅当网络故障或请求被阻止时，才会标记为reject
- axios
  - 现在应用比较多，因为它即支持浏览器，又支持nodejs
  - 它在浏览器使用的api就是XMLHttpRequest
    - 即他是对XMLHttpRequest这个api的封装
  - axios支持promise的api
  ```js
  // 示例一
  axios.get(url).then(res=> {
    console.log(res)
  }).catch(err=> {
    console.log(err);
  }).then(()=> {
    console.log("always")
  })

  // 示例二：
  axios.post(url, {data: "xxx"}).then(res=> {
    console.log(res)
  }).catch(err=> {
    console.log(err);
  })
  ```

## 3. 面试题解答(总结)
- 手写简易的ajax
  - [手写demo传送门](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/ajax/手写简易的ajax.html)
  - 示例一
    ```js
    let ajax = (type, url, successFn)=> {
      const xhr = new XMLHttpRequest()
      xhr.open(type, url, true)
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            successFn(JSON.parse(xhr.responseText))
          }
        }
      }

      xhr.send(null)
    }

    ajax('GET', "https://jsonplaceholder.typicode.com/users", data=> {
      console.log("简易写法", data);
    })
    ```
  - 示例二
    - promise
    ```js
    // 示例二: promise
    let ajaxPro = (type, url)=> {
      const p = new Promise((resolve, reject)=> {
        const xhr = new XMLHttpRequest()
        xhr.open(type, url, true)
        xhr.onreadystatechange = function() {
          if(xhr.readyState === 4) {
            if(xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText))
            } else if(xhr.status === 404) {
              reject(new Error('404 not find'));
            }
          }
        }

        xhr.send(null)
      })

      return p
    }
    
    ajaxPro("GET", "https://jsonplaceholder.typicode.com/posts").then(res=> {
        console.log("promise写法", res);
    }).catch(err=> {
        console.error("promise写法报错", err);
    })
    ```
- 跨域的常用实现方式
  - JSONP
    - `<script>`可绕过跨域限制
    - server端可以动态拼接一些信息返回
  - CROS
    - 纯服务端
  - proxy
