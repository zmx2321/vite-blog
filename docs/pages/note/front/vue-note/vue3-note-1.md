# 初识Vue3.0 + vite
> 摘选自公众号

#### 概要
<h6> 1. 创建一个vite项目 </h6>
<h6> 2. vite简介 </h6>
<h6> 3. vite详解 </h6>
<h6> 4. hmr热更新 </h6>

## 1. 创建一个vite项目
- 使用npm
```js
npm init vite-app <project-name>
cd <project-name>
npm install 
npm run dev
```

- 使用yarn
```js
yarn create vite-app <project-name>
cd <project-name>
yarn 
yarn dev
```

## 2. vite简介
vite 是一个基于 Vue3 单文件组件的非打包开发服务器，它做到了本地快速开发启动：
1. 快速的冷启动，不需要等待打包操作；
2. 即时的热模块更新，替换性能和模块数量的解耦让更新飞起；
3. 真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。
4. 运行npm run dev，可以观察到这个项目是秒级打开，打开调试器可以看到
vite是如何做到这些的呢？

## 3. vite详解
### 3-1. 挖掘vite运行原理
- vite项目明显的特征就是使用了ES Module,代码以模块的形式引入到文件，同时实现了按需加载。
- 其最大的特点是在浏览器端使用 export import 的方式导入和导出模块，在 script 标签里设置 type="module" ，然后使用 ES module
- 正因如此，vite高度依赖module script特性，也就意味着从这里开始抛弃了IE市场，参见Javascript MDN。
- 在这种操作下，伴随的另一个效果就是去掉了webpack打包步骤，不用再将各个模块文件打包成一个bundle，以便支持浏览器的模块化加载。
  - vite是如何处理这些模块的呢
    - 关键在于vite使用Koa构建的服务端，在createServer中主要通过中间件注册相关功能
    - vite 对 import 都做了一层处理，其过程如下：
      1. 在 koa 中间件里获取请求 body
      2. 通过 es-module-lexer 解析资源 ast 拿到 import 的内容
      3. 判断 import 的资源是否是绝对路径，绝对视为 npm 模块
      4. 返回处理后的资源路径，例如："vue" => "/@modules/vue"
      5. 将处理的template,script,style等所需的依赖以http请求的形式，通过query参数形式区分并加载SFC文件各个模块内容
  - 为什么这里需要@modules
    - `import vue from 'vue'`
      - vue模块安装在node_modules中，浏览器ES Module是无法直接获取到项目下node_modules目录中的文件。所以vite对import都做了一层处理，重写了前缀使其带有@modules，以便项目访问引用资源；另一方面，把文件路径都写进同一个@modules中，类似面向切片编程，可以从中再进行其他操作而不影响其他部分资源，比如后续可加入alias等其他配置。
      - 通过koa middleware正则匹配上带有@modules的资源，再通过require('XXX')获取到导出资源并返给浏览器。

### 3-2. 文件请求
单页面文件的请求有个特点，都是以*.vue作为请求路径结尾，当服务器接收到这种特点的http请求，主要处理：
- 根据ctx.path确定请求具体的vue文件
- 使用parseSFC解析该文件，获得descriptor，一个descriptor包含了这个组件的基本信息，包括template、script和styles等属性 下面是Comp.vue文件经过处理后获得的descriptor；
<br />
然后根据descriptor和ctx.query.type选择对应类型的方法，处理后返回ctx.body
- type为空时表示处理script标签，使用compileSFCMain方法返回js内容
- type为template时表示处理template标签，使用compileSFCTemplate方法返回render方法
- type为styles时表示处理style标签，使用compileSFCStyle方法返回css文件内容
在浏览器里使用 ES module 是使用 http 请求拿到的模块，所以 vite 必须提供一个web server 去代理这些模块，上文中提到的 koa中间件 就是负责这个事情，vite 通过对请求路径query.type的劫持获取资源的内容返回给浏览器，然后通过拼接不同的处理单页面文件解析后的各个资源文件，最后响应给浏览器进行渲染。
<br />
从另一方面来看，这也是一个非常有趣的方法，webpack之类的打包工具会把各种各样的模块提前打包进bundle中，但打包结果是静态的，不管某个模块的代码是否用得到，它都要被打包进去，显而易见的坏处就是随着项目越来越大，打包文件也越来越大。vite的优雅之处就在于需要某个模块时动态引入，而不是提前打包，自然而然提高了开发体验。

## 4. hmr热更新
vite的热更新主要有四步：
1. 通过 watcher 监听文件改动
2. 通过 server 端编译资源，并推送新资源信息给 client
3. 需要框架支持组件 rerender/reload
4. client 收到资源信息，执行框架 rerender 逻辑。

在client端，Websocket监听了一些更新的消息类型，然后分别处理：
- vue-reload —— vue 组件更新：通过 import 导入新的 vue 组件，然后执行 HMRRuntime.reload
- vue-rerender —— vue template 更新：通过 import 导入新的 template ，然后执行 HMRRuntime.rerender
- vue-style-update —— vue style 更新：直接插入新的 stylesheet
- style-update —— css 更新：document 插入新的 stylesheet
- style-remove —— css 移除：document 删除 stylesheet
- js-update —— js 更新：直接执行
- full-reload —— 页面 roload：使用 window.reload 刷新页面
在server端，通过watcher监听页面改动，根据文件类型判断是js Reload还是vue Reload。通过解析器拿到当前文件内容，并与缓存里的上一次解析结果进行比较，如果发生改变则执行相应的render。


