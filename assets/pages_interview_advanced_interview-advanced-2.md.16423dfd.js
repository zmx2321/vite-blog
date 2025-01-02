import{_ as s,o as l,c as a,e as n}from"./app.7f3ff873.js";const b=JSON.parse('{"title":"原理-浏览器渲染原理","description":"","frontmatter":{},"headers":[],"relativePath":"pages/interview/advanced/interview-advanced-2.md","filePath":"pages/interview/advanced/interview-advanced-2.md","lastUpdated":1735801551000}'),p={name:"pages/interview/advanced/interview-advanced-2.md"},o=n(`<h1 id="原理-浏览器渲染原理" tabindex="-1">原理-浏览器渲染原理 <a class="header-anchor" href="#原理-浏览器渲染原理" aria-label="Permalink to &quot;原理-浏览器渲染原理&quot;">​</a></h1><h2 id="基本概念信息" tabindex="-1">基本概念信息 <a class="header-anchor" href="#基本概念信息" aria-label="Permalink to &quot;基本概念信息&quot;">​</a></h2><ul><li>什么是浏览器的渲染 <ul><li>在浏览器中,将html字符串,转化成像素信息,这个过程就叫渲染</li><li>只要将这些像素点的颜色交给gpu,交给显卡,就会在屏幕上显示出来,就完成了一次渲染<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">html</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 屏幕上第一个的第一个像素点什么颜色,第二个像素点什么颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 第二行.......</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> pixels;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">html</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 屏幕上第一个的第一个像素点什么颜色,第二个像素点什么颜色</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 第二行.......</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> pixels;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul></li></ul><h2 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h2><h3 id="从浏览器输入到页面展示发生了什么" tabindex="-1">从浏览器输入到页面展示发生了什么 <a class="header-anchor" href="#从浏览器输入到页面展示发生了什么" aria-label="Permalink to &quot;从浏览器输入到页面展示发生了什么&quot;">​</a></h3><blockquote><p>主要发生的事情在网络和渲染两个层面,后面我们主要讲渲染</p></blockquote><ul><li>网络 <ul><li>浏览器的网络进程会开一个网络线程,去请求这个资源,去拿html字符串</li><li>这个网络线程会生成一个渲染任务给渲染进程中的渲染主线程中的消息队列,就启动了一个渲染流程</li></ul></li><li>下面开始专题讲解渲染流程</li></ul><h2 id="渲染" tabindex="-1">渲染 <a class="header-anchor" href="#渲染" aria-label="Permalink to &quot;渲染&quot;">​</a></h2><blockquote><p>浏览器是如何渲染页面的？</p></blockquote><ul><li>当浏览器的网络线程收到 HTML 文档后，会产生一个渲染任务，并将其传递给渲染主线程的消息队列。(🌟)</li><li>在事件循环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程</li></ul><hr><ul><li>整个渲染流程分为多个阶段，分别是: HTML 解析、样式计算、布局、分层、绘制、分块、光栅化、画(🌟)</li><li>每个阶段都有明确的输入输出，上一个阶段的输出会成为下一个阶段的输入。</li><li>这样，整个渲染流程就形成了一套组织严密的生产流水线。</li></ul><h3 id="第一阶段-解析html-生成dom树和cssom树" tabindex="-1">第一阶段: 解析HTML(生成DOM树和CSSOM树) <a class="header-anchor" href="#第一阶段-解析html-生成dom树和cssom树" aria-label="Permalink to &quot;第一阶段: 解析HTML(生成DOM树和CSSOM树)&quot;">​</a></h3><ul><li>渲染的第一步是解析 HTML</li><li>解析过程中遇到 CSS 解析 CSS，遇到 JS 执行 JS。为了提高解析效率，浏览器在开始解析前，会启动一个预解析的线程，率先下载 HTML中的外部 CSS 文件和 外部的 JS 文件。</li><li>如果主线程解析到 link 位置，此时外部的 CSS 文件还没有下载解析好，主线程不会等待，继续解析后续的HTML。这是因为下载和解析 CSS 的工作是在预解析线程中进行的。这就是 CSS 不会阻塞 HTML 解析的根本原因。</li><li>如果主线程解析到 script 位置，会停止解析 HTML，转而等待 JS 文件下载好，并将全局代码解析执行完成后，才能继续解析 HTML。这是因为 JS 代码的执行过程可能会修改当前的 DOM 树，所以 DOM 树的生成必须暂停。这就是 JS 会阻搴 HTML 解析的根本原因。</li><li>第一步完成后，会得到 DOM 树和 CSSOM 树，浏览器的默认样式、内部样式、外部样式、行内样式均会包含在 CSSOM 树中。 <ul><li>这个dom树的代码实际上是c++代码,外面包了一层,js代码只是用来操作这个dom树</li><li>形成dom树是为了后续的工作做准备</li></ul></li><li>补充说明: <ul><li>有哪些样式表 <ul><li>内部样式表</li><li>外部样式表</li><li>内联样式表(行内样式表)</li><li>浏览器的默认样式表 <ul><li><a href="https://github.com/chromium/chromium/blob/main/third_party/blink/renderer/core/html/resources/html.css" target="_blank" rel="noreferrer">chrome浏览器源代码</a></li></ul></li></ul></li><li>除了浏览器的默认样式,其他的样式js都能操作</li><li>styleSheetList对象<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">styleSheetList</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">内部样式表</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">外部样式表</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">内联样式表</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">浏览器的默认样式表</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">styleSheetList</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">内部样式表</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">外部样式表</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">内联样式表</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">浏览器的默认样式表</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li>获取样式表: <code>document.styleSheets</code></li><li>全局添加样式规则: <code>document.styleSheets[0].addRule(&quot;div&quot;, &quot;border: solid 1px #f00&quot;)</code><ul><li>框架中使用的比较多</li></ul></li></ul></li><li>问题: <ul><li>html解析过程中遇到css代码怎么办 <ul><li>为了提高解析效率,浏览器会启动一个预解析器(预解析线程),先下载和解析css文件</li></ul></li><li>html解析过程中遇到js代码怎么办 <ul><li>渲染主线程遇到js时必须暂停一切行为,等待下载执行完后才能继续</li><li>预解析线程可以分担一点下载js的任务</li><li>因为js可能会改动当前的html</li></ul></li></ul></li></ul><h3 id="第二阶段-样式计算" tabindex="-1">第二阶段: 样式计算 <a class="header-anchor" href="#第二阶段-样式计算" aria-label="Permalink to &quot;第二阶段: 样式计算&quot;">​</a></h3><blockquote><p>css属性值的计算过程,就是样式计算 通过样式计算之后,形成新的dom树,这个dom树中的每个节点都有对应的样式信息(计算后的样式)</p></blockquote><ul><li>css的计算有哪些情况 <ul><li>层叠 =&gt; 样式冲突如何解决</li><li>继承</li></ul></li><li>css的视觉可视化模型 <ul><li>盒模型</li><li>包含块</li><li>流式布局</li><li>浮动布局</li><li>bfc(块级格式化上下问)</li></ul></li><li>计算后的样式 <ul><li>表示所有的css样式全部有值</li><li>谷歌浏览器控制台 =&gt; styles旁边 =&gt; computed =≥ show all =&gt; 可以看到所有样式(最终计算出来的样式)</li></ul></li><li>总结 <ul><li>主线程会遍历得到dom树,依次为树中的每个节点计算出它的最终样式,称之为 computed style</li><li>在这一过程中,很多预设值会变成绝对值,比如red会变成rgb(255, 0, 0),相对单位会变成绝对单位,比如1em会变成16px</li><li>这一步完成后,会得到一棵带有样式的dom树</li></ul></li><li>通过js获取最终的计算样式 <ul><li><code>document.getComputedStyle()</code></li></ul></li></ul><h3 id="第三阶段-布局" tabindex="-1">第三阶段: 布局 <a class="header-anchor" href="#第三阶段-布局" aria-label="Permalink to &quot;第三阶段: 布局&quot;">​</a></h3><blockquote><p>布局就是计算每个节点在页面上的尺寸和位置 它的位置相对的是包含块</p></blockquote><ul><li>包含块 <ul><li>表示一个元素的活动区域</li><li>比如一个div设置宽度的百分比,它是相对于包含块的百分比</li></ul></li><li>有些样式,比如auto,百分比,在第二个阶段是无法计算出来的,所以需要第三个阶段</li><li>layout树(布局树) <ul><li>dom树和layout树是不同的</li><li>有些隐藏的元素不会出现在布局树里面,布局树是为了找到每个节点的集合信息(尺寸和位置),即layout树中的每个节点都对应一个真实的元素,但是display: none的元素没有对应的节点</li><li>head元素是隐藏的</li><li>::before和::after伪元素在dom树中存在,在布局树中不存在</li></ul></li><li>head元素为什么是隐藏的 <ul><li>在谷歌浏览器源码中,浏览器的默认样式表中设置的是<code>head { display: none }</code></li></ul></li><li>内容必须在行盒中(🌟) <ul><li>行盒块盒说的是盒模型,内容必须在行盒中</li><li>行盒: display: inline</li><li>块盒: display: block</li><li>行级元素块级元素说的是标签类型即html,且这种说法已经过时 <ul><li>盒子的类型由css决定,html只提供语意化</li></ul></li></ul></li><li>行盒和块盒不能相邻(🌟) <ul><li>在HTML文档中，当文本或其他行内内容没有被任何行内元素（如span、a、strong等）包裹时，CSS引擎会自动为这些内容生成一个或多个匿名行内盒子，以便进行布局和渲染。</li><li>如果行盒内部包含了块级元素,CSS引擎可能会创建匿名块盒来包裹这些块级元素</li></ul></li><li>所以有很多种情况会导致布局树和dom树不对应</li><li>js可以获取部分布局树信息 <ul><li><code>document.body.clientWidth</code></li><li><code>document.body.clientHeight</code></li><li><code>document.documentElement.offsetWidth</code></li><li>......</li></ul></li><li>总结 <ul><li>布局完成之后会得到布局树</li><li>布局阶段会依次遍历dom树的每个节点,计算每个节点的集合信息,例如节点的宽高,相对包含块的位置</li><li>大部分的时候,dom树和布局树并非一一对应</li><li>比如<code>display:none</code>的节点没有几何信息,因此不会生成到布局树,又比如使用了伪元素选择器,虽然dom树中不存在这些伪元素节点,但他们拥有几何信息,所以会生成到布局树中,还有匿名行盒,匿名块盒等都会导致dom树和布局树无法一一对应</li></ul></li></ul><h3 id="第四阶段-分层" tabindex="-1">第四阶段: 分层 <a class="header-anchor" href="#第四阶段-分层" aria-label="Permalink to &quot;第四阶段: 分层&quot;">​</a></h3><blockquote><p>将布局树中的节点进行分层,将页面分成多个图层,每个节点都有对应的层,分别进行绘制(以前的浏览器都没有,现在浏览器里面大部分都有这个步骤) 类似小时候玩的贴纸,把贴纸贴在纸上,其中某个地方发生了变化,只要把那个贴纸换掉即可</p></blockquote><ul><li>在谷歌浏览器中的体现 <ul><li>控制台 =&gt; layers</li></ul></li><li>基本概念 <ul><li>浏览器不会分太多层,因为每个图层都会占用内存,如果分太多层,内存会占用很多</li><li>每个浏览器的分层策略都不一样</li><li>跟堆叠上下文有关的属性会影响分层角色(z-index、option、transform等)</li><li>滚动条会单独分出一个层</li></ul></li><li>我们如果希望一个div单独分层 <ul><li>给浏览器一个信息,让浏览器帮我们单独分一个层</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">will-change</span><span style="color:#E1E4E8;">: transform;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">will-change</span><span style="color:#24292E;">: transform;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li>总结 <ul><li>主线程会使用一套复杂的策略对整个布局树进行分层,每个节点都会分配到某个图层</li><li>分层的好处在于,将来某一个层改变后,仅会对该层进行后续处理,从而提升效率</li><li>滚动条、堆叠上下文、transform、opacity、动画等都样式都会或多或少的影响分层结果</li><li>也可以通过<code>will-change</code>属性更大程度的影响分层结果 <ul><li><ul><li><code>will-change</code>不能滥用,只有效率出了问题,渲染变卡了,发现是分层造成的,这个地方经常变动,不希望重绘的过多,所以需要单独分层,才用这个属性</li></ul></li></ul></li></ul></li></ul><h3 id="第五阶段-绘制" tabindex="-1">第五阶段: 绘制 <a class="header-anchor" href="#第五阶段-绘制" aria-label="Permalink to &quot;第五阶段: 绘制&quot;">​</a></h3><blockquote><p>这里的绘制,是为每一层生成如何绘制的指令 主线程会为每个层单独产生绘制指令集,用于描述这一层的内容该如何画出来 每个层会分成很多小区域,每个小区域都会生成一个绘制指令,这些指令会按照顺序被发送到GPU,最后由GPU进行绘制</p></blockquote><ul><li>绘制指令 <ul><li>将笔移动到某个位置,画一条线,画一个圆等</li><li>类似canvas,只不过canvas是js控制的,而绘制指令是浏览器控制的</li><li>canvas就是浏览器开放出来的绘制功能</li><li>这里的绘制,是为每一层生成如何绘制的指令</li></ul></li><li>绘制完之后,渲染主线程的工作到此为止,剩余步骤交给其他线程完成</li><li>总结渲染主线程目前做的事情 <ul><li>渲染主线程 =&gt; parse(解析html-产生dom树和cssom树) =&gt; style(样式计算) =&gt; layout(生成布局树,生成每个节点的几何信息) =&gt; layer(根据布局树分层) =&gt; paint(分层之后,对每一层生成绘制指令[几何信息都知道了,就知道怎么去画了])</li></ul></li><li>对每一层生成绘制指令之后,将这些指令发送给合成线程 <ul><li>合成线程也在渲染进程里面</li></ul></li></ul><h3 id="第六阶段-分块" tabindex="-1">第六阶段: 分块 <a class="header-anchor" href="#第六阶段-分块" aria-label="Permalink to &quot;第六阶段: 分块&quot;">​</a></h3><blockquote><p>Tiling 分块会将每一层分成多个小区域</p></blockquote><ul><li>合成线程是专门用来做分块的 <ul><li>合成线程会启动更多的线程,来一起进行分块(分块器)</li></ul></li><li>mac怎么看浏览器进程 <ul><li>搜索 =&gt; 活动监视器 =&gt; 选择谷歌浏览器 =&gt; 点击上面三个点 =&gt; 取样进程 =&gt; 选择线程的百分比</li><li>thread就是一个个线程</li><li>其中compositor就是合成线程,compositorTileWorker1就是分块器,会有很多分块器</li></ul></li><li>总结 <ul><li>完成绘制之后,主线程会将每个图层的绘制信息提交给合成线程,剩余工作将由合成线程完成</li><li>合成线程首先对每个图层进行分块,将其划分为更多的小区域</li><li>他会从线程池中拿取多个线程来完成分块工作 <ul><li>线程池: 在进程中,线程是干活的人,线程不能开辟的太多,线程池就是线程的管理者(类似人才市场)</li></ul></li></ul></li></ul><h3 id="第七阶段-光栅化" tabindex="-1">第七阶段: 光栅化 <a class="header-anchor" href="#第七阶段-光栅化" aria-label="Permalink to &quot;第七阶段: 光栅化&quot;">​</a></h3><blockquote><p>光栅化就是将每个小区域转化为位图 优先处理靠近视口(屏幕)的块 合成进程在光栅化的时候,会将工作分配给gpu进程,让gpu进程去完成光栅化,最终光栅化的结果会生成位图,再将一块块位图交还给合成线程</p></blockquote><ul><li>基本概念 <ul><li>什么是位图 <ul><li>位图相当于就是像素点信息了</li><li>位图可以理解为内存中的二维数组,里面记录了每个像素点的颜色</li></ul></li><li>光栅化是在GPU中完成的 <ul><li>此过程会用到gpu加速</li><li>gpu运算速度,超出cpu很多,gpu能干的事,cpu也能干,只不过速度慢,但cpu能干的事,gpu不一定能干</li><li>gpu只做与显示相关的运算(因为专注于做显示相关的事情,所以速度快)</li><li>gpu会增加光栅化的运算速度,即计算像素块的运算速度</li></ul></li></ul></li><li>总结 <ul><li>分块完成之后,进入光栅化阶段</li><li>合成线程会将块信息交给gpu进程,以极高的速度完成光栅化</li><li>gpu进程会开启多个线程来完成光栅化,并且优先处理靠近视口区域的块</li><li>光栅化的结果,就是一块一块的位图</li></ul></li></ul><h3 id="第八阶段-画" tabindex="-1">第八阶段: 画 <a class="header-anchor" href="#第八阶段-画" aria-label="Permalink to &quot;第八阶段: 画&quot;">​</a></h3><blockquote><p>合成线程计算出每个位图在屏幕上的位置,交给gpu进行最终呈现 draw quad</p></blockquote><ul><li>基本信息 <ul><li>quad <ul><li>每一个块,形成的位图(有颜色),这个位图相对在屏幕上的位置信息,就是quad</li></ul></li><li>生成的quad信息会交给qpu进程,gpu再交给真实的硬件显卡</li><li>最终显卡将这些像素点信息,按照位置,在屏幕上显示出来</li></ul></li><li>为什么合成线程不直接交给硬件,而是要交给gpu里面中转一下呢 <ul><li>gpu进程实际上是浏览器的进程,要由浏览器的进程交给真实的硬件</li><li>因为合成线程,和渲染主线程,在渲染进程里面,渲染进程是放在一个沙盒里面的,他和操作系统的硬件是隔离的,这样的好处在于安全 <ul><li>如果装了恶意插件,影响不到操作系统</li></ul></li><li>找gpu的过程叫做系统调用,即调用操作系统的接口</li></ul></li><li>transform(变形)该怎么在页面画出来 <ul><li>确定变形怎么在页面画出来,这个步骤是在第八步确定的</li><li>主要是使用数学运算(矩阵运算)实现的</li><li>transform比opacity高效</li><li>opacity和transform动画的高性能是由于其数学原理决定了可以使用缓存信息，而并不是因为它被硬件加速了</li></ul></li><li>总结 <ul><li>最后一个阶段就是画了</li><li>合成线程拿到每个层,每个块的位图后,生成一个个指引(quad)信息</li><li>指引会标识出每个位图应该画到屏幕的哪个位置,以及会考虑到旋转、缩放等变形</li><li>变形发生在合成线程,与渲染主线程无关,这就是transform效率高的本质原因(🌟)</li><li>合成线程会把quad提交给gpu进程,由gpu进程产生系统调用,提交给gpu硬件,完成最终的屏幕成像</li></ul></li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><ol><li>解析HTML(parse): 渲染主线程解析html,生成dom树和cssom树</li><li>样式计算 (style): 计算样式,计算每个dom节点的最终样式,使每个dom节点拥都有样式信息</li><li>布局(layout): 计算每个dom节点的几何信息,生成布局树</li><li>分层(layer): 为了提升后续的渲染效率,将页面根据某个策略(每个浏览器不同)分成多个图层,每个层可以单独进行绘制</li><li>绘制(paint): 产生绘制指令(先画啥,再画啥,哪个位置画啥)</li><li>分块(tiling): 将绘制指令,交给合成线程的分块</li><li>光栅化(raster): 分块完成之后,形成很多的小块,之后对每一个层的每一个小块进行光栅化,生成位图,优先光栅化靠近视口(屏幕)的区域</li><li>画(draw): 最后将那些靠近屏幕的小块发送给gpu进程,由gpu进程产生系统调用,提交给gpu硬件,完成最终的屏幕成像</li></ol><h3 id="和渲染相关的面试题" tabindex="-1">和渲染相关的面试题 <a class="header-anchor" href="#和渲染相关的面试题" aria-label="Permalink to &quot;和渲染相关的面试题&quot;">​</a></h3><h4 id="什么是reflow-layoutblockflow" tabindex="-1">什么是reflow(layoutBlockFlow) <a class="header-anchor" href="#什么是reflow-layoutblockflow" aria-label="Permalink to &quot;什么是reflow(layoutBlockFlow)&quot;">​</a></h4><blockquote><p>重排</p></blockquote><ul><li>如果我们用js修改样式,比如修改了宽度,我们修改的是cssom,要重新进行样式计算,重新生成布局树,可能也要重新分层,重新绘制,重新分块,重新光栅化,重新画,这个过程就是reflow</li><li>flow表示排版的意思,reflow就是重新排版(重排)</li><li>所以我们在代码里面尽量减少影响几何信息的操作,否则会造成重排</li><li>文字也是有几何信息的</li><li>总结</li><li>reflow的本质就是重新计算laout树(布局树)</li><li>当进行了会影响布局树的操作后,需要重新计算布局树,会引发layout</li><li>为了避免连续的多次操作导致布局反复计算,浏览器会合并这些操作,当js代码全部完成后再进行统一计算,所以,改动属性造成的reflow是异步完成的</li><li>也同样因为如此,当js获取布局属性时,就可能造成无法获取到最新的布局信息</li><li>浏览器在反复权衡下,最终决定获取属性立即reflow</li><li>当我们修改了dom的几何信息,浏览器为了避免连续多次reflow,会产生一个异步任务,但js获取几何信息的时候,产生的是同步任务,所以js获取的几何信息有时候可能得到的是之前没有修改过的几何信息</li><li>所以设置的时候,浏览器不会立即reflow,但是获取的时候,浏览器会立即reflow</li></ul><h4 id="什么是repaint" tabindex="-1">什么是repaint <a class="header-anchor" href="#什么是repaint" aria-label="Permalink to &quot;什么是repaint&quot;">​</a></h4><blockquote><p>重绘</p></blockquote><ul><li>总结 <ul><li>pepaint的本质就是重新根据分层信息计算了绘制指令</li><li>当改动了可见样式后,就需要重新计算,会引发repaint</li><li>由于元素的布局信息也属于可见样式,所以reflow一定会引起repaint</li></ul></li></ul><h4 id="为什么-transform-的效率高" tabindex="-1">为什么 transform 的效率高？ <a class="header-anchor" href="#为什么-transform-的效率高" aria-label="Permalink to &quot;为什么 transform 的效率高？&quot;">​</a></h4><ul><li>因为 transform 既不会影响布局也不会影响绘制指令，它影响的只是渲染流程的最后一个「draw」阶段</li><li>由于 draw 阶段在合成线程中，所以 transform 的变化几乎不会影响渲染主线程。反之，渲染主线程无论如何忙碌，也不会影响 transform 的变化。</li><li>示例 <ul><li>在进入死循环之后,使用left的球会卡死,因为left是几何信息,会引发reflow,而reflow是同步的,会阻塞主线程</li><li>使用transform的球不会卡死,因为transform不会引发reflow,只会引发repaint,repaint是异步的,不会阻塞主线程</li><li>所以浏览器分出了一个合成线程,专门处理transform,这样transform就不会阻塞主线程了</li></ul></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;!</span><span style="color:#79B8FF;">DOCTYPE</span><span style="color:#E1E4E8;"> html</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">http-equiv</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;X-UA-Compatible&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;IE=edge&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;Document&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      .ball {</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: 100px;</span></span>
<span class="line"><span style="color:#E1E4E8;">        height: 100px;</span></span>
<span class="line"><span style="color:#E1E4E8;">        background: #f40;</span></span>
<span class="line"><span style="color:#E1E4E8;">        border</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">radius: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        margin: 30px;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      .ball1 {</span></span>
<span class="line"><span style="color:#E1E4E8;">        animation: move1 1s alternate infinite ease</span><span style="color:#F97583;">-in-</span><span style="color:#E1E4E8;">out;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      .ball2 {</span></span>
<span class="line"><span style="color:#E1E4E8;">        position: fixed;</span></span>
<span class="line"><span style="color:#E1E4E8;">        left: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        animation: move2 1s alternate infinite ease</span><span style="color:#F97583;">-in-</span><span style="color:#E1E4E8;">out;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      @keyframes move1 {</span></span>
<span class="line"><span style="color:#E1E4E8;">        to {</span></span>
<span class="line"><span style="color:#E1E4E8;">          transform: </span><span style="color:#B392F0;">translate</span><span style="color:#E1E4E8;">(100px);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      @keyframes move2 {</span></span>
<span class="line"><span style="color:#E1E4E8;">        to {</span></span>
<span class="line"><span style="color:#E1E4E8;">          left: 100px;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;btn&quot;</span><span style="color:#E1E4E8;">&gt;死循环&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ball ball1&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ball ball2&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      function delay(duration) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        var start </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">while</span><span style="color:#E1E4E8;"> (Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> start </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> duration) {}</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      btn.onclick = function () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">delay</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;!</span><span style="color:#005CC5;">DOCTYPE</span><span style="color:#24292E;"> html</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">http-equiv</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;X-UA-Compatible&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;IE=edge&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;Document&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      .ball {</span></span>
<span class="line"><span style="color:#24292E;">        width: 100px;</span></span>
<span class="line"><span style="color:#24292E;">        height: 100px;</span></span>
<span class="line"><span style="color:#24292E;">        background: #f40;</span></span>
<span class="line"><span style="color:#24292E;">        border</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">radius: </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        margin: 30px;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      .ball1 {</span></span>
<span class="line"><span style="color:#24292E;">        animation: move1 1s alternate infinite ease</span><span style="color:#D73A49;">-in-</span><span style="color:#24292E;">out;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      .ball2 {</span></span>
<span class="line"><span style="color:#24292E;">        position: fixed;</span></span>
<span class="line"><span style="color:#24292E;">        left: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        animation: move2 1s alternate infinite ease</span><span style="color:#D73A49;">-in-</span><span style="color:#24292E;">out;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      @keyframes move1 {</span></span>
<span class="line"><span style="color:#24292E;">        to {</span></span>
<span class="line"><span style="color:#24292E;">          transform: </span><span style="color:#6F42C1;">translate</span><span style="color:#24292E;">(100px);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      @keyframes move2 {</span></span>
<span class="line"><span style="color:#24292E;">        to {</span></span>
<span class="line"><span style="color:#24292E;">          left: 100px;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;btn&quot;</span><span style="color:#24292E;">&gt;死循环&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ball ball1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ball ball2&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      function delay(duration) {</span></span>
<span class="line"><span style="color:#24292E;">        var start </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">while</span><span style="color:#24292E;"> (Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> start </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> duration) {}</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      btn.onclick = function () {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">delay</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><ul><li>补充说明 <ul><li>浏览器的滚动条,滚动条也是会引发repaint的,没有改变几何信息,所以不需要重新计算布局树,不需要重新分块等步骤,只需要在合成线程中重新画一遍即可,所以滚动条不会阻塞主线程,在渲染主线程死循环的时候,滚动条照样可以滚动</li></ul></li></ul>`,48),e=[o];function t(i,r,c,E,y,u){return l(),a("div",null,e)}const m=s(p,[["render",t]]);export{b as __pageData,m as default};
//# sourceMappingURL=pages_interview_advanced_interview-advanced-2.md.16423dfd.js.map
