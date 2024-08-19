import{_ as e,o as s,c as l,e as a}from"./app.eca400a4.js";const m=JSON.parse('{"title":"初识Vue3.0 + vite","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/vue-note/vue3-note-1.md","filePath":"pages/note/front/vue-note/vue3-note-1.md","lastUpdated":1700204718000}'),n={name:"pages/note/front/vue-note/vue3-note-1.md"},t=a(`<h1 id="初识vue3-0-vite" tabindex="-1">初识Vue3.0 + vite <a class="header-anchor" href="#初识vue3-0-vite" aria-label="Permalink to &quot;初识Vue3.0 + vite&quot;">​</a></h1><blockquote><p>摘选自公众号</p></blockquote><h4 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h4><h6> 1. 创建一个vite项目 </h6><h6> 2. vite简介 </h6><h6> 3. vite详解 </h6><h6> 4. hmr热更新 </h6><h2 id="_1-创建一个vite项目" tabindex="-1">1. 创建一个vite项目 <a class="header-anchor" href="#_1-创建一个vite项目" aria-label="Permalink to &quot;1. 创建一个vite项目&quot;">​</a></h2><ul><li>使用npm</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm init vite</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">app </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">project</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">cd </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">project</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">npm install </span></span>
<span class="line"><span style="color:#E1E4E8;">npm run dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm init vite</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">app </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">project</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">cd </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">project</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">npm install </span></span>
<span class="line"><span style="color:#24292E;">npm run dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>使用yarn</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">yarn create vite</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">app </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">project</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">cd </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">project</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">yarn </span></span>
<span class="line"><span style="color:#E1E4E8;">yarn dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">yarn create vite</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">app </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">project</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">cd </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">project</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">yarn </span></span>
<span class="line"><span style="color:#24292E;">yarn dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2-vite简介" tabindex="-1">2. vite简介 <a class="header-anchor" href="#_2-vite简介" aria-label="Permalink to &quot;2. vite简介&quot;">​</a></h2><p>vite 是一个基于 Vue3 单文件组件的非打包开发服务器，它做到了本地快速开发启动：</p><ol><li>快速的冷启动，不需要等待打包操作；</li><li>即时的热模块更新，替换性能和模块数量的解耦让更新飞起；</li><li>真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。</li><li>运行npm run dev，可以观察到这个项目是秒级打开，打开调试器可以看到 vite是如何做到这些的呢？</li></ol><h2 id="_3-vite详解" tabindex="-1">3. vite详解 <a class="header-anchor" href="#_3-vite详解" aria-label="Permalink to &quot;3. vite详解&quot;">​</a></h2><h3 id="_3-1-挖掘vite运行原理" tabindex="-1">3-1. 挖掘vite运行原理 <a class="header-anchor" href="#_3-1-挖掘vite运行原理" aria-label="Permalink to &quot;3-1. 挖掘vite运行原理&quot;">​</a></h3><ul><li>vite项目明显的特征就是使用了ES Module,代码以模块的形式引入到文件，同时实现了按需加载。</li><li>其最大的特点是在浏览器端使用 export import 的方式导入和导出模块，在 script 标签里设置 type=&quot;module&quot; ，然后使用 ES module</li><li>正因如此，vite高度依赖module script特性，也就意味着从这里开始抛弃了IE市场，参见Javascript MDN。</li><li>在这种操作下，伴随的另一个效果就是去掉了webpack打包步骤，不用再将各个模块文件打包成一个bundle，以便支持浏览器的模块化加载。 <ul><li>vite是如何处理这些模块的呢 <ul><li>关键在于vite使用Koa构建的服务端，在createServer中主要通过中间件注册相关功能</li><li>vite 对 import 都做了一层处理，其过程如下： <ol><li>在 koa 中间件里获取请求 body</li><li>通过 es-module-lexer 解析资源 ast 拿到 import 的内容</li><li>判断 import 的资源是否是绝对路径，绝对视为 npm 模块</li><li>返回处理后的资源路径，例如：&quot;vue&quot; =&gt; &quot;/@modules/vue&quot;</li><li>将处理的template,script,style等所需的依赖以http请求的形式，通过query参数形式区分并加载SFC文件各个模块内容</li></ol></li></ul></li><li>为什么这里需要@modules <ul><li><code>import vue from &#39;vue&#39;</code><ul><li>vue模块安装在node_modules中，浏览器ES Module是无法直接获取到项目下node_modules目录中的文件。所以vite对import都做了一层处理，重写了前缀使其带有@modules，以便项目访问引用资源；另一方面，把文件路径都写进同一个@modules中，类似面向切片编程，可以从中再进行其他操作而不影响其他部分资源，比如后续可加入alias等其他配置。</li><li>通过koa middleware正则匹配上带有@modules的资源，再通过require(&#39;XXX&#39;)获取到导出资源并返给浏览器。</li></ul></li></ul></li></ul></li></ul><h3 id="_3-2-文件请求" tabindex="-1">3-2. 文件请求 <a class="header-anchor" href="#_3-2-文件请求" aria-label="Permalink to &quot;3-2. 文件请求&quot;">​</a></h3><p>单页面文件的请求有个特点，都是以*.vue作为请求路径结尾，当服务器接收到这种特点的http请求，主要处理：</p><ul><li>根据ctx.path确定请求具体的vue文件</li><li>使用parseSFC解析该文件，获得descriptor，一个descriptor包含了这个组件的基本信息，包括template、script和styles等属性 下面是Comp.vue文件经过处理后获得的descriptor； <br> 然后根据descriptor和ctx.query.type选择对应类型的方法，处理后返回ctx.body</li><li>type为空时表示处理script标签，使用compileSFCMain方法返回js内容</li><li>type为template时表示处理template标签，使用compileSFCTemplate方法返回render方法</li><li>type为styles时表示处理style标签，使用compileSFCStyle方法返回css文件内容 在浏览器里使用 ES module 是使用 http 请求拿到的模块，所以 vite 必须提供一个web server 去代理这些模块，上文中提到的 koa中间件 就是负责这个事情，vite 通过对请求路径query.type的劫持获取资源的内容返回给浏览器，然后通过拼接不同的处理单页面文件解析后的各个资源文件，最后响应给浏览器进行渲染。 <br> 从另一方面来看，这也是一个非常有趣的方法，webpack之类的打包工具会把各种各样的模块提前打包进bundle中，但打包结果是静态的，不管某个模块的代码是否用得到，它都要被打包进去，显而易见的坏处就是随着项目越来越大，打包文件也越来越大。vite的优雅之处就在于需要某个模块时动态引入，而不是提前打包，自然而然提高了开发体验。</li></ul><h2 id="_4-hmr热更新" tabindex="-1">4. hmr热更新 <a class="header-anchor" href="#_4-hmr热更新" aria-label="Permalink to &quot;4. hmr热更新&quot;">​</a></h2><p>vite的热更新主要有四步：</p><ol><li>通过 watcher 监听文件改动</li><li>通过 server 端编译资源，并推送新资源信息给 client</li><li>需要框架支持组件 rerender/reload</li><li>client 收到资源信息，执行框架 rerender 逻辑。</li></ol><p>在client端，Websocket监听了一些更新的消息类型，然后分别处理：</p><ul><li>vue-reload —— vue 组件更新：通过 import 导入新的 vue 组件，然后执行 HMRRuntime.reload</li><li>vue-rerender —— vue template 更新：通过 import 导入新的 template ，然后执行 HMRRuntime.rerender</li><li>vue-style-update —— vue style 更新：直接插入新的 stylesheet</li><li>style-update —— css 更新：document 插入新的 stylesheet</li><li>style-remove —— css 移除：document 删除 stylesheet</li><li>js-update —— js 更新：直接执行</li><li>full-reload —— 页面 roload：使用 window.reload 刷新页面 在server端，通过watcher监听页面改动，根据文件类型判断是js Reload还是vue Reload。通过解析器拿到当前文件内容，并与缓存里的上一次解析结果进行比较，如果发生改变则执行相应的render。</li></ul>`,26),p=[t];function o(r,i,c,u,d,y){return s(),l("div",null,p)}const h=e(n,[["render",o]]);export{m as __pageData,h as default};
//# sourceMappingURL=pages_note_front_vue-note_vue3-note-1.md.5be1470e.js.map
