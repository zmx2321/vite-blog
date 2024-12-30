import{_ as e,o as u,c as a,e as t,b as l,d as i}from"./app.0f1ed7de.js";const C=JSON.parse('{"title":"http (前端的生命线)","description":"","frontmatter":{},"headers":[],"relativePath":"pages/interview/foundation/interview-foundation-14.md","filePath":"pages/interview/foundation/interview-foundation-14.md","lastUpdated":1699250630000}'),o={name:"pages/interview/foundation/interview-foundation-14.md"},n=t('<h1 id="http-前端的生命线" tabindex="-1">http (前端的生命线) <a class="header-anchor" href="#http-前端的生命线" aria-label="Permalink to &quot;http (前端的生命线)&quot;">​</a></h1><h2 id="_1-简述" tabindex="-1">1. 简述 <a class="header-anchor" href="#_1-简述" aria-label="Permalink to &quot;1. 简述&quot;">​</a></h2><ul><li>前端工程师开发界面</li><li>需要调用后端接口，提交/获取数据 =&gt; 需要用到http协议</li><li>要求事先掌握好ajax</li></ul><h2 id="_2-题目" tabindex="-1">2. 题目 <a class="header-anchor" href="#_2-题目" aria-label="Permalink to &quot;2. 题目&quot;">​</a></h2><ul><li>http常见状态码有哪些</li><li>http常用的header(响应头、请求头)有哪些</li><li>什么是Restful API</li><li>描述一下http的缓存机制(重点)</li></ul><h2 id="_3-知识点" tabindex="-1">3. 知识点 <a class="header-anchor" href="#_3-知识点" aria-label="Permalink to &quot;3. 知识点&quot;">​</a></h2><h3 id="_3-1-http状态码" tabindex="-1">3.1. http状态码 <a class="header-anchor" href="#_3-1-http状态码" aria-label="Permalink to &quot;3.1. http状态码&quot;">​</a></h3><ul><li>状态码分类 <ul><li>1xx =&gt; 服务器收到请求</li><li>2xx =&gt; 请求成功</li><li>3xx =&gt; 重定向</li><li>4xx =&gt; 客户端错误</li><li>5xx =&gt; 服务端错误</li></ul></li><li>常见的状态码 <ul><li>200 =&gt; 成功</li><li>301 =&gt; 永久重定向(配合localtion，浏览器自动处理) <ul><li>浏览器会记住，遇到直接跳转新的地址</li><li>网站域名到期</li></ul></li><li>302 =&gt; 临时重定向(配合localtion，浏览器自动处理) <ul><li>浏览器访问一个地址，只有第一次会跳转到新的地址</li><li>百度知乎邮箱等搜索引擎里面点击链接或者一些短连接，他会先跳转到自己的地址，再跳转到目标网址 <ul><li>如果是第一次访问，状态码是302 <ul><li>有时候也会有307,307和302差不多</li></ul></li><li>第一次访问之后，浏览器有了缓存，再访问，状态码是200</li><li>如果是短连接，他会先跳转到长连接</li></ul></li></ul></li><li>304 =&gt; 资源未被修改 - 重点 <ul><li>资源如果已经请求过了，服务端有可能会返回一个304，表示已经被存储到本地缓存</li></ul></li><li>404 =&gt; 资源未找到</li><li>403 =&gt; 没有权限 <ul><li>比如登陆</li></ul></li><li>500 =&gt; 服务器错误 - 最常见</li><li>504 =&gt; 网关超时 <ul><li>服务器内部在做一些操作的时候，比如链接其他服务器的时候超时了</li></ul></li></ul></li><li>关于协议和规范 <ul><li>就是一个约定</li><li>要求大家都跟着执行</li><li>不要违反规定，例如IE浏览器，比如把200当做错误等</li></ul></li></ul><h3 id="_3-2-http-methods" tabindex="-1">3.2. http methods <a class="header-anchor" href="#_3-2-http-methods" aria-label="Permalink to &quot;3.2. http methods&quot;">​</a></h3><ul><li>传统的methods <ul><li>http刚刚开始的时候(大约十年前)</li><li>简单的网页功能，就这两个操作 <ul><li>get =&gt; 获取服务器的数据</li><li>post =&gt; 向服务器提交数据</li></ul></li></ul></li><li>现在的methods <ul><li>get =&gt; 获取数据</li><li>post =&gt; 新建数据</li><li>patch/put =&gt; 更新数据</li><li>delete =&gt; 删除数据</li></ul></li><li>Restful API <ul><li>一种新的API设计方法(早已推广使用) =&gt; 常考</li><li>重点概念 <ul><li>传统的API设计：把每个url当作一个功能</li><li>Restful API设计：把每个url当作一个唯一的资源(标识)</li></ul></li><li>如何设计成一个资源 <ul><li>尽量不用url参数 <ul><li>传统的API设计：/api/list?pageIndex=2 <ul><li>相当于一个函数(?相当于函数的参数)</li></ul></li><li>现在的API设计：/api/list/2 <ul><li>就是list第二页资源的标识(或者说id)</li><li>不会和其他资源冲突，如果说获取详情页，就不叫list，应该是：/api/detail/2</li><li>即一个完整的地址加上一个唯一标识(id)，这就是restful api设计的目的</li></ul></li></ul></li><li>用method表示操作类型 - 即上面的4个方法 <ul><li>传统api设计 <ul><li>post请求：/api/create-blog =&gt; 创建博客</li><li>post请求：/api/update-blog?id=100 =&gt; 更新博客</li><li>get请求：/api/get-blog?id=100 =&gt; 获取博客</li><li>相当于把一个api当作一个功能进行设计</li></ul></li><li>Restful API设计 <ul><li>post请求：/api/blog =&gt; 创建博客 <ul><li>表示整个blog资源的标识</li></ul></li><li>patch请求：/api/blog/100 =&gt; 更新博客 <ul><li>id为100的blog的标识</li></ul></li><li>get请求：/api/blog/100 =&gt; 获取博客 <ul><li>id为100的blog的标识</li></ul></li><li>用method标识操作类型</li></ul></li></ul></li></ul></li></ul></li></ul><h3 id="_3-3-http常用的header" tabindex="-1">3.3. http常用的header <a class="header-anchor" href="#_3-3-http常用的header" aria-label="Permalink to &quot;3.3. http常用的header&quot;">​</a></h3>',11),h=l("ul",null,[l("li",null,[i("简述 "),l("ul",null,[l("li",null,[i("常见的Request Headers => 请求头 "),l("ul",null,[l("li",null,"请求的时候，客户端往服务端发送的Headers")])]),l("li",null,[i("常见的Response Headers => 响应头 "),l("ul",null,[l("li",null,"服务端向客户端返回的Headers")])]),l("li",null,"headers在http请求中是一件非常重要的事情")])]),l("li",null,[i("流程 "),l("ul",null,[l("li",null,"我们访问一个url地址实际上就是发送请求"),l("li",null,[i("我们发送请求实际上要做以下步骤 "),l("ul",null,[l("li",null,"使用某个方法(get、post)去发送一个url"),l("li",null,"我们发送的请求还包括request headers")])]),l("li",null,[i("服务端接收到请求会进行返回 "),l("ul",null,[l("li",null,"服务端不止返回结果(json、页面、图片等)"),l("li",null,"服务端还会返回response headers")])])])]),l("li",null,[i("常见的Request Headers(请求头) "),l("ul",null,[l("li",null,"客户端向服务端发请求"),l("li",null,[i("Accept => 浏览器可接收的数据格式 "),l("ul",null,[l("li",null,"text/html、application/json等")])]),l("li",null,[i("Accept-Encoding => 浏览器可接收的压缩算法，如gzip "),l("ul",null,[l("li",null,"我们可以根据gzip算法把资源进行压缩(100kb大概可以压缩至30kb左右)"),l("li",null,"浏览器可以识别压缩的内容，也可以解压"),l("li",null,"浏览器告诉服务器，我能接收什么样的压缩算法，服务器就会根据Accept-Encoding的压缩算法进行压缩"),l("li",null,"前后端通用"),l("li",null,"为了保证资源更小，传输地更快一些，前端也可以正常地解压出来"),l("li",null,"表示客户端可以支持什么样的压缩算法")])]),l("li",null,"Accept-Language => 浏览器可接收的语言，如zh-CN"),l("li",null,[i("Connection：keep-alive一次TCP连接重复使用 "),l("ul",null,[l("li",null,"每次请求重新建立TCP连接会很消耗资源"),l("li",null,[i("现在的浏览器版本基本上都是支持keep-alive的 "),l("ul",null,[l("li",null,"即我们和服务端建立了连接之后，就可以重复地使用这个连接，没必要断开之后重连"),l("li",null,"重复地使用一次连接，把资源一次性请求完成")])])])]),l("li",null,[i("cookie "),l("ul",null,[l("li",null,"同域，每次请求资源的时候都会把cookie带上"),l("li",null,"浏览器自己带的")])]),l("li",null,[i("Host "),l("ul",null,[l("li",null,"请求的域名是什么")])]),l("li",null,[i("User-Agent(简称UA) => 浏览器信息 => 重点 "),l("ul",null,[l("li",null,"能标识你的浏览器信息(类型等)"),l("li",null,"服务端能够接收ua信息，可以判断用户使用的浏览器类型")])]),l("li",null,[i("Content-type "),l("ul",null,[l("li",null,"发送数据的格式，如 application/json"),l("li",null,"客户端向服务端请求，要发送一些数据的时候(post)，告诉服务端，我们这个数据是什么格式的，一般get请求是没有的，get请求主要是向服务端获取数据")])])])]),l("li",null,[i("常见的Response Headers(响应头) "),l("ul",null,[l("li",null,[i("Content-type => 返回的数据格式 "),l("ul",null,[l("li",null,"如 application/json")])]),l("li",null,"Content-length 返回数据的大小，多少字节"),l("li",null,[i("Content-Encoding => 返回数据的压缩算法，如gzip "),l("ul",null,[l("li",null,"客户端告诉服务端支持的压缩算法之后"),l("li",null,"服务端根据压缩算法进行压缩"),l("li",null,"服务端压缩之后会通过Content-Encoding告诉客户端我是用什么算法压缩的"),l("li",null,"浏览器会自动根据这个压缩算法解压")])]),l("li",null,[i("Set-Cookie "),l("ul",null,[l("li",null,"服务端改cookie的时候，通过Set-Cookie修改")])])])]),l("li",null,[i("自定义header "),l("ul",null,[l("li",null,"以上的请求头和响应头是浏览器自带的，或者服务端和浏览器配合加的"),l("li",null,"请求头和响应头实际上可以自定义header"),l("li",null,"自定义请求头的时候，需要前端访问服务的时候加上header"),l("li",null,"自定义响应头的时候，需要服务端向客户端返回之前加上header"),l("li",null,[i("使用axios做请求，其实我们可以自定义header "),l("ul",null,[l("li",{"X-Requested-With:":"",XMLHttpRequest:""},"headers:"),l("li",null,"在浏览器上的request headers里面就会多一个请求头，名字和值都可以自己定义，但不要和浏览器自带的键值冲突")])]),l("li",null,[i("使用场景 "),l("ul",null,[l("li",null,"有些接口要求在请求头中加一个特定的秘钥，请求才能通过，否则就是非法请求 => 权限验证")])])])]),l("li",null,[i("缓存相关的headers "),l("ul",null,[l("li",null,"Cache-Control"),l("li",null,"Expires"),l("li",null,"Last-Modified"),l("li",null,"IF-Modified-Since"),l("li",null,"Etag"),l("li",null,"If-None-Match")])]),l("li",null,[i("总结 "),l("ul",null,[l("li",null,[i("如果提问有哪些headers，需要分两步来讲 "),l("ol",null,[l("li",null,"浏览器自带的请求头和响应头"),l("li",null,"缓存的headers")])])])])],-1),r=t('<h3 id="_3-4-http的缓存-重点" tabindex="-1">3.4. http的缓存(重点) <a class="header-anchor" href="#_3-4-http的缓存-重点" aria-label="Permalink to &quot;3.4. http的缓存(重点)&quot;">​</a></h3><h4 id="_3-4-1-关于缓存的介绍" tabindex="-1">3.4.1. 关于缓存的介绍 <a class="header-anchor" href="#_3-4-1-关于缓存的介绍" aria-label="Permalink to &quot;3.4.1. 关于缓存的介绍&quot;">​</a></h4><ul><li>什么是缓存 <ul><li>浏览器访问一个新的网站(本地没有任何信息)，服务端会返回所有的资源，并且浏览器或者服务器会将一些不必要重新获取的资源存到缓存区，第二次访问的时候，就不需要全部重新获取一遍资源，有一部分资源会从缓存中获取</li><li>即我们可以把一些没有必要重新获取的资源不再重新获取，这就是缓存</li></ul></li><li>为什么需要缓存 <ul><li>为了减少请求的数量和体积，让页面加载和渲染的过程更快一些 <ul><li>从键盘输入地址到页面返回，几乎所有操作(cpu计算，页面渲染)都是毫秒级别的，速度非常快，相比较于cup计算而言，唯一慢的就是网络请求</li></ul></li><li>如果要做性能优化，让页面显示的更快，我们需要从最大的瓶颈，即网络请求下手</li><li>我们需要尽量减少网络请求的体积和数量</li></ul></li><li>哪些资源可以被缓存 <ul><li>一些静态资源 =&gt; js css img <ul><li>webpack打包的时候，我们会加一个hash，hash是通过资源内容来算的</li><li>打包之后的静态资源文件，加上hash后缀之后，资源是不会被修改的</li><li>如果内容改了之后，会生成一个新的hash的名称</li></ul></li><li>html不能被缓存，因为html可能随时会更新</li><li>业务数据不能被缓存，数据会变</li></ul></li></ul><h4 id="_3-4-2-http缓存策略-强制缓存-协商缓存-常考" tabindex="-1">3.4.2. http缓存策略(强制缓存+协商缓存)(常考) <a class="header-anchor" href="#_3-4-2-http缓存策略-强制缓存-协商缓存-常考" aria-label="Permalink to &quot;3.4.2. http缓存策略(强制缓存+协商缓存)(常考)&quot;">​</a></h4><h5 id="_3-4-2-1-强制缓存" tabindex="-1">3.4.2.1. 强制缓存 <a class="header-anchor" href="#_3-4-2-1-强制缓存" aria-label="Permalink to &quot;3.4.2.1. 强制缓存&quot;">​</a></h5><ul><li>图示 =&gt; 第一次请求(静态资源) <img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/cache1.png" alt="cache1"></li><li>根据图示梳理缓存流程 <ol><li>浏览器初次请求到服务器</li></ol><ul><li>会经过本地缓存(设备) =&gt; 浏览器的机制</li><li>浏览器到服务器是通过网络连接起来的</li></ul><ol start="2"><li>服务端会返回资源</li></ol><ul><li>服务端不止返回资源(结果集)，还会返回一个Cache-Control <ul><li>Cache-Control是一个响应头(response headers),和缓存相关</li><li>初次请求之后，如果服务端感觉这个资源可以被缓存，就会加上Cache-Control，如果服务端感觉这个资源不适合被缓存，就不会加上这个Cache-Control</li><li>一些静态资源(js、css、img)都会被加上Cache-Control</li><li>如果有Cache-Control，浏览器会将资源缓存下来 =&gt; 浏览器的机制</li></ul></li></ul><ol start="3"><li>浏览器有了资源之后就会开始继续工作</li></ol></li><li>Cache-Control简介 <ul><li>在response headers中 <ul><li>服务端控制哪些资源可以加Cache-Control，客户端控制不了</li></ul></li><li>控制强制缓存的逻辑 <ul><li>强制缓存本质还是服务端控制的</li></ul></li><li>例如 <ul><li>Cache-Control: max-age=31536000 (单位是秒 - 1年) <ul><li>即我们需要将某个资源文件在客户端缓存一年的时间</li><li>max-age表示最大的时间 <img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/cache-control.png" alt="cache-control"></li></ul></li></ul></li></ul></li><li>图示 =&gt; 第二次请求(静态资源) <img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/cache2.png" alt="cache2"></li><li>根据图示梳理缓存流程 <ol><li>初次请求说明见上</li><li>浏览器再次请求</li></ol><ul><li>再次请求的时候，他会判断Cache-Control时间是否过期</li><li>如果时间没有过期，浏览器就会在本地缓存中获取资源</li><li>即不会去服务端获取资源，直接返回</li><li>浏览器会根据之前请求的Cache-Control来判断是否可以被缓存，存下来</li><li>再次请求的时候就会在本地去找，然后去返回</li><li>没有经过网络</li></ul><ol start="3"><li>浏览器有了资源之后就会开始继续工作</li></ol></li><li>从缓存获取资源示例 <img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/disk-cache.png" alt="disk-cache"></li><li>缓存过期了 <ul><li>缓存过期，浏览器会再次从服务端请求资源 <ul><li>服务端会重新返回资源和Cache-Control <img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/cache3.png" alt="cache3"></li></ul></li></ul></li><li>Cache-Control的值介绍 <ul><li>max-age =&gt; 缓存最大过期时间(秒)</li><li>no-cache =&gt; 不用强制缓存，正常从服务端请求，服务端怎么做不管 <ul><li>不想用缓存，一般用这个</li></ul></li><li>no-store =&gt; 不用强制缓存，也不让服务端做缓存，让服务端直接返回资源 <ul><li>不常用</li></ul></li><li>private =&gt; 只能允许最终用户做缓存(设备)</li><li>public =&gt; 中间的代理也可以做缓存</li></ul></li><li>关于Expires <ul><li>经常会和Cache-Control并列在一起</li><li>同样在响应头(response headers)中</li><li>同为控制缓存过期</li><li>已经被Cache-Control代替</li><li>现在的浏览器兼容这两种写法，如果同时存在，以Cache-Control为主</li></ul></li></ul><h5 id="_3-4-2-2-协商缓存-对比缓存" tabindex="-1">3.4.2.2. 协商缓存(对比缓存) <a class="header-anchor" href="#_3-4-2-2-协商缓存-对比缓存" aria-label="Permalink to &quot;3.4.2.2. 协商缓存(对比缓存)&quot;">​</a></h5><ul><li>简述 <ul><li>类似一个商量或者沟通的意思</li><li>服务端缓存策略 <ul><li>服务端来判断这个资源是否可以被缓存</li><li>不是指这个文件缓存在服务端</li><li>服务端缓存策略的意思是，我们这个资源到了服务端之后，服务端可以告诉浏览器这个资源没有动，可以直接用本地的缓存就可以了，就不用再让我给你一份了，这次请求就效率很高，体积很小</li><li>即服务端判断这次请求能不能用缓存的内容</li></ul></li><li>服务端判断客户端资源，是否和服务端资源一样</li><li>如果判断一致就返回304，否则返回200和最新的资源 <ul><li>客户端资源和服务端资源是一样的，没有被修改</li></ul></li></ul></li><li>服务端如何判断是否和缓存资源一致 <ul><li>图示 =&gt; 协商缓存 <img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/negotiation-cache1.png" alt="negotiation-cache1"></li><li>浏览器本身是自带一个缓存机制的，不过上图没有表现出来 <ul><li>存储服务器的缓存资源</li></ul></li><li>根据图示梳理缓存流程 <ul><li>浏览器初次请求服务器</li><li>服务器返回资源和资源标识 <ul><li>标识资源的一个符号(字符串或者时间等)</li><li>资源标识比较短，体积小</li></ul></li><li>浏览器再次请求，会带着资源标识</li><li>服务端根据资源标识判断当前资源是否是服务端最新的资源 <ul><li>返回304，或者返回200、新的资源和新的资源标识</li></ul></li></ul></li></ul></li><li>资源标识简介 <ul><li>在response headers中，有两种 <ul><li>Last-Modified =&gt; 资源的最后修改时间 <img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/last-modified.png" alt="last-modified"><ul><li>服务端返回资源和Last-modified <ul><li>值是最后修改时间</li></ul></li><li>浏览器再次请求的时候，请求头会带着If-Modified-Since <ul><li>If-Modified-Since是Last-Modified的key</li><li>值是最后修改时间</li><li>前端请求的和后端返回的资源标识名字不一样，但值是一样的</li><li>url就可以代表这个资源，判断这个资源的最后修改时间是不是和带来的这个If-Modified-Since值是一样的</li><li>服务端会判断If-Modified-Since和Last-modified是否相等</li><li>这两个值相等，就返回304</li><li>服务端修改的话，会改变Last-Modified的值</li><li>服务端每返回一个Last-Modified，If-Modified-Since的值就会修改，服务端根据带来的时间和资源的最后修改时间做一个协商，做一个对比，看看能不能返回304</li><li>新的Last-Modified力求下次能命中缓存</li></ul></li></ul></li><li>Etag =&gt; 资源的唯一标识(一个字符串，类似人类的指纹) <img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/etag.png" alt="etag"><ul><li>服务端返回资源和Etag(就是一个字符串)，但是要保证唯一性 <ul><li>浏览器发现有Etag之后，就会把资源缓存下来，把Etag也记下来</li></ul></li><li>浏览器再次请求，请求头带着If-None-Match <ul><li>再次请求的时候请求头会带上If-None-Match，他的值实际上就是Etag</li><li>服务端发现有If-None-Match之后，服务端就会根据当前资源重新计算一个Etag，再和If-None-Match的值进行对比</li><li>如果这个资源没有变过，算出来的Etag应该和If-None-Match的值是一样的</li><li>如果对比值不一样，就会返回一个新的Etag和新的资源</li></ul></li><li>返回304，或返回资源和新的Etag</li></ul></li></ul></li><li>协商缓存图示 <img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/negotiation-cache2.png" alt="negotiation-cache2"><img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/negotiation-cache3.png" alt="negotiation-cache3"></li></ul></li><li>Last-Modified和Etag注意事项 <ul><li>会优先使用Etag <ul><li>因为Last-Modified只能精确到秒级</li><li>秒对计算机而言，是一个比较大的单位，以程序而言，一般是以毫秒为单位</li></ul></li><li>如果资源被重复生成，而内容不变，则Etag更精确 <ul><li>如果资源1s生成一次，内容不变，Last-Modified每次都会过期，重新返回新资源</li><li>Etag他是根据内容计算的(类似webpack的hash) <ul><li>内容不变，就算1s重新生成一次，他的Etag值也不会变化</li></ul></li></ul></li></ul></li></ul><h5 id="_3-4-2-3-缓存总结-重点" tabindex="-1">3.4.2.3. 缓存总结(重点) <a class="header-anchor" href="#_3-4-2-3-缓存总结-重点" aria-label="Permalink to &quot;3.4.2.3. 缓存总结(重点)&quot;">​</a></h5><ul><li>如图所示 <img src="https://zmx2321.github.io/vite-blog/images/interview/foundation/cache-all.png" alt="cache-all"></li><li>根据图示梳理缓存流程 <ul><li>第一种情况 <ol><li>发送http请求</li><li>如果有缓存</li><li>判断缓存是否过期 <ul><li>Cache-Control里面有个max-age，即最大缓存时间</li></ul></li><li>如果没有过期</li><li>读取缓存 =&gt; 强缓存</li><li>页面呈现</li></ol></li><li>第二种情况 <ol><li>发送http请求</li><li>如果有缓存</li><li>如果缓存过期</li><li>判断有没有Etag或Last-Modified <ul><li>可以同时存在</li></ul></li><li>如果没有，就直接向服务器发起http请求</li><li>服务器返回请求资源</li><li>页面呈现</li></ol></li><li>第三种情况 <ol><li>发送http请求</li><li>如果有缓存</li><li>如果缓存过期</li><li>判断有没有Etag或Last-Modified</li><li>如果有则向服务器发起http请求，并且带上If-None-Match或If-Modified-Since字段 <ul><li>可以同时存在</li></ul></li><li>服务器判断缓存是否可用</li><li>如果不可用，直接请求服务器资源，返回200</li><li>页面呈现</li></ol></li><li>第四种情况 <ol><li>发送http请求</li><li>如果有缓存</li><li>如果缓存过期</li><li>判断有没有Etag或Last-Modified</li><li>如果有则向服务器发起http请求，并且带上If-None-Match或If-Modified-Since字段</li><li>服务器判断缓存是否可用</li><li>如果缓存可用，返回状态码304</li><li>读取缓存(协商缓存)</li><li>页面呈现</li></ol></li></ul></li><li>注意事项 <ul><li>强制缓存判断在客户端</li><li>协商缓存判断在服务端</li></ul></li></ul><h4 id="_3-4-3-三种刷新操作方式-对缓存的影响" tabindex="-1">3.4.3. 三种刷新操作方式，对缓存的影响 <a class="header-anchor" href="#_3-4-3-三种刷新操作方式-对缓存的影响" aria-label="Permalink to &quot;3.4.3. 三种刷新操作方式，对缓存的影响&quot;">​</a></h4><ul><li>三种刷新操作 <ul><li>正常操作：地址栏输入url，跳转链接，前进后退等</li><li>手动刷新：F5(mac使用commond+r)，点击刷新按钮，右击菜单刷新</li><li>强制刷新：ctrl+F5(mac使用shift+commond+r) <ul><li>刚上线可能有一些缓存</li></ul></li></ul></li><li>不同刷新操作，不同的缓存策略 <ul><li>正常操作：强制缓存有效，协商缓存有效 <ul><li>对大部分用户都有效</li></ul></li><li>手动刷新：强制缓存失效，协商缓存有效 <ul><li>如果所用的操作都可以命中强制缓存，协商缓存就没有用了</li><li>强制缓存判断在客户端</li><li>协商缓存判断在服务端</li><li>只有协商缓存也会让页面加载地更快一些</li></ul></li><li>强制刷新，强制缓存失效，协商缓存失效 <ul><li>不管多慢，都要全部返回最新的资源</li></ul></li></ul></li></ul><h4 id="_3-4-4-http的缓存小结" tabindex="-1">3.4.4. http的缓存小结 <a class="header-anchor" href="#_3-4-4-http的缓存小结" aria-label="Permalink to &quot;3.4.4. http的缓存小结&quot;">​</a></h4><ul><li>强制缓存 =&gt; Cache-Control</li><li>协商缓存 =&gt; Last-Modified和Etag，304状态码</li><li>完整的流程图(要求会自己画)</li></ul><h2 id="_4-面试题解答-总结" tabindex="-1">4. 面试题解答(总结) <a class="header-anchor" href="#_4-面试题解答-总结" aria-label="Permalink to &quot;4. 面试题解答(总结)&quot;">​</a></h2><ul><li>http最基本的知识体系 <ul><li>状态码</li><li>http method</li><li>restful api</li><li>http headers</li><li>http缓存策略</li></ul></li><li>知识点 <ul><li>http常见的状态码有哪些 <ul><li>先从状态码范围开始</li><li>讲一些常用的状态码(200、301、302、304、404、403、500、504) <ul><li>504 =&gt; 网关超时</li><li>304 =&gt; 资源未被修改、和缓存策略有关</li><li>301 =&gt; 永久重定向</li><li>302 =&gt; 临时重定向</li></ul></li></ul></li><li>http常见的header有哪些 <ul><li>请求头 <ul><li>Accept <ul><li>浏览器可接收的数据格式</li></ul></li><li>Accept-Encoding <ul><li>浏览器可接收的压缩算法</li></ul></li><li>Connection <ul><li>keep-alive一次TCP连接重复使用</li></ul></li><li>cookie</li><li>Host <ul><li>请求的域名</li></ul></li><li>User-Agent <ul><li>浏览器信息</li></ul></li><li>Content-type <ul><li>发送数据的格式</li></ul></li></ul></li><li>响应头 <ul><li>Content-type <ul><li>返回的数据格式</li></ul></li><li>Content-length <ul><li>返回数据的大小(字节)</li></ul></li><li>Content-Encoding <ul><li>返回数据的压缩算法(gzip)</li></ul></li><li>Set-Cookie <ul><li>服务端改cookie的时候，通过Set-Cookie修改</li></ul></li></ul></li><li>缓存相关的headers <ul><li>Cache-Control <ul><li>强制缓存</li><li>max-age(最大缓存时间)、no-cache(不用强制缓存)</li></ul></li><li>Expires <ul><li>强制缓存(旧版本)</li></ul></li><li>Last-Modified <ul><li>协商缓存，服务端返回，时间，单位秒</li></ul></li><li>IF-Modified-Since <ul><li>协商缓存，客户端请求，时间，单位秒</li></ul></li><li>Etag <ul><li>协商缓存，服务端返回，唯一字符串，根据资源内容计算</li></ul></li><li>If-None-Match <ul><li>协商缓存，客户端请求，唯一字符串，根据资源内容计算</li></ul></li></ul></li><li>自定义头信息 <ul><li>应用于登陆等场景</li></ul></li></ul></li><li>什么是restful api <ul><li>4个method说明白 <ul><li>post、get、patch(修改)、delete</li></ul></li><li>设计理念 <ul><li>传统的API设计：把每个url当作一个功能</li><li>Restful API设计：把每个url当作一个唯一的资源(标识)</li></ul></li></ul></li></ul></li><li>面试题 <ul><li>描述一下http的缓存机制 <ul><li>缓存包括强制缓存和协商缓存</li><li>强制缓存主要需要理解Cache-Control</li><li>协商缓存主要理解Last-Modified和Etag，以及304的概念</li><li>具体见上文 =&gt; 缓存总结(图文)</li></ul></li></ul></li></ul>',16),s=[n,h,r];function d(c,g,p,f,m,_){return u(),a("div",null,s)}const x=e(o,[["render",d]]);export{C as __pageData,x as default};