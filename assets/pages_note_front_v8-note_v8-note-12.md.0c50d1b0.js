import{_ as n,r as a,o as l,c as p,a as o,e}from"./app.eca400a4.js";const F=JSON.parse('{"title":"函数调用是如何影响到内存布局的","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/v8-note/v8-note-12.md","filePath":"pages/note/front/v8-note/v8-note-12.md","lastUpdated":1702535213000}'),t={name:"pages/note/front/v8-note/v8-note-12.md"},c=e(`<h1 id="函数调用是如何影响到内存布局的" tabindex="-1">函数调用是如何影响到内存布局的 <a class="header-anchor" href="#函数调用是如何影响到内存布局的" aria-label="Permalink to &quot;函数调用是如何影响到内存布局的&quot;">​</a></h1><h2 id="js代码不同的执行场景" tabindex="-1">js代码不同的执行场景 <a class="header-anchor" href="#js代码不同的执行场景" aria-label="Permalink to &quot;js代码不同的执行场景&quot;">​</a></h2><ul><li>在使用 JavaScript 的过程中，经常会遇到栈溢出的错误，比如执行下面这样一段代码：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 是否存在堆栈溢出错误?</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 是否存在堆栈溢出错误?</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>V8 就会报告栈溢出的错误，为了解决栈溢出的问题，我们可以在 foo 函数内部使用 setTimeout 来触发 foo 函数的调用，改造之后的程序就可以正确执行 。</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(foo, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 是否存在堆栈溢出错误?</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(foo, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 是否存在堆栈溢出错误?</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>如果使用 Promise 来代替 setTimeout，在 Promise 的 then 方法中调用 foo 函数，改造的代码如下：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(foo)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(foo)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>在浏览器中执行这段代码，并没有报告栈溢出的错误，但是你会发现，执行这段代码会让整个页面卡住了。</li><li>为什么这三段代码，第一段造成栈溢出的错误，第二段能够正确执行，而第三段没有栈溢出的错误，却会造成页面的卡死呢？</li><li>其主要原因是这三段代码的底层执行逻辑是完全不同的： <ul><li>第一段代码是在同一个任务中重复调用嵌套的 foo 函数；</li><li>第二段代码是使用 setTimeout 让 foo 函数在不同的任务中执行；</li><li>第三段代码是在同一个任务中执行 foo 函数，但是却不是嵌套执行。</li></ul></li><li>这是因为，V8 执行这三种不同代码时，它们的内存布局是不同的，而不同的内存布局又会影响到代码的执行逻辑，因此我们需要了解 JavaScript 执行时的内存布局。</li><li>接下来我们来分析不同的函数调用方式是如何影响到运行时内存布局的。</li><li>下图是本文的主要内容在编译流水线中的位置，因为解释执行和直接执行二进制代码都使用了堆和栈，虽然它们在执行细节上存在着一定的差异，但是整体的执行架构是类似的。 <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-1.png" alt=""></li></ul><h2 id="为什么使用栈结构来管理函数调用" tabindex="-1">为什么使用栈结构来管理函数调用 <a class="header-anchor" href="#为什么使用栈结构来管理函数调用" aria-label="Permalink to &quot;为什么使用栈结构来管理函数调用&quot;">​</a></h2><ul><li>大部分高级语言都不约而同地采用栈这种结构来管理函数调用，为什么呢？这与函数的特性有关。通常函数有两个主要的特性： <ul><li>第一个特点是函数可以被调用，你可以在一个函数中调用另外一个函数，当函数调用发生时，执行代码的控制权将从父函数转移到子函数，子函数执行结束之后，又会将代码执行控制权返还给父函数</li><li>第二个特点是函数具有作用域机制，所谓作用域机制，是指函数在执行的时候可以将定义在函数内部的变量和外部环境隔离，在函数内部定义的变量我们也称为临时变量，临时变量只能在该函数中被访问，外部函数通常无权访问，当函数执行结束之后，存放在内存中的临时变量也随之被销毁。</li></ul></li><li>我们可以看下面这段 C 代码</li></ul><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getZ</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">y</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> z </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getZ</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> z;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> ret </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(x, y);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getZ</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">y</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> z </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getZ</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> z;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> ret </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(x, y);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>观察上面这段代码，我们发现其中包含了多层函数嵌套调用，其实这个过程很简单，执行流程是这样的： <ul><li>当 main 函数调用 add 函数时，需要将代码执行控制权交给 add 函数；</li><li>然后 add 函数又调用了 getZ 函数，于是又将代码控制权转交给 getZ 函数；</li><li>接下来 getZ 函数执行完成，需要将控制权返回给 add 函数；</li><li>同样当 add 函数执行结束之后，需要将控制权返还给 main 函数；</li><li>然后 main 函数继续向下执行。</li></ul></li><li>通过上述分析，我们可以得出，函数调用者的生命周期总是长于被调用者（后进），并且被调用者的生命周期总是先于调用者的生命周期结束 (先出)。</li><li>在执行上述流程时，各个函数的生命周期如下图所示： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-2.png" alt="嵌套调用时函数的生命周期"></li><li>因为函数是有作用域机制的，作用域机制通常表现在函数执行时，会在内存中分配函数内部的变量、上下文等数据，在函数执行完成之后，这些内部数据会被销毁掉。所以站在函数资源分配和回收角度来看，被调用函数的资源分配总是晚于调用函数 (后进)，而函数资源的释放则总是先于调用函数 (先出)。如下图所示： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-3.png" alt="嵌套调用时函数的生命周期"></li><li>通过观察函数的生命周期和函数的资源分配情况，我们发现，它们都符合后进先出 (LIFO) 的策略，而栈结构正好满足这种后进先出 (LIFO) 的需求，所以我们选择栈来管理函数调用关系是一种很自然的选择。</li><li>关于栈，你可以结合这么一个贴切的例子来理解，一条单车道的单行线，一端被堵住了，而另一端入口处没有任何提示信息，堵住之后就只能后进去的车子先出来（后进先出），这时这个堵住的单行线就可以被看作是一个栈容器，车子开进单行线的操作叫做入栈，车子倒出去的操作叫做出栈。</li><li>在车流量较大的场景中，就会发生反复地入栈、栈满、出栈、空栈和再次入栈，一直循环。你可以参看下图： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-4.png" alt="数据结构层面的栈"></li></ul><h2 id="栈如何管理函数调用" tabindex="-1">栈如何管理函数调用 <a class="header-anchor" href="#栈如何管理函数调用" aria-label="Permalink to &quot;栈如何管理函数调用&quot;">​</a></h2><ul><li>首先我们来分析最简单的场景：当执行一个函数的时候，栈怎么变化？</li><li>当一个函数被执行时，函数的参数、函数内部定义变量都会依次压入到栈中，我们结合实际的代码来分析下这个过程，你可以参考下图： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-5.png" alt="函数内部变量压栈状态"></li><li>上图展示的是一段简单的 C 代码的执行过程，可以看到： <ul><li>当执行到函数的第一段代码的时候，变量 x 第一次被赋值，且值为 5，这时 5 会被压入到栈中。</li><li>然后，执行第二段代码，变量 y 第一次被赋值，且值为 6，这时 6 会被压入到栈中。</li><li>接着，执行到第三段代码，注意这里变量 x 是第二次被赋值，且新的值为 100，那么这时并不是将 100 压入到栈中，而是替换之前压入栈的内容，也就是将栈中的 5 替换成 100。</li><li>最后，执行第四段代码，这段代码是 int z = x + y，我们会先计算出来 x+y 的值，然后再将 x+y 的值赋值给 z，由于 z 是第一次被赋值，所以 z 的值也会被压入到栈中。</li></ul></li><li>你会发现，函数在执行过程中，其内部的临时变量会按照执行顺序被压入到栈中。</li><li>了解了这一点，接下来我们就可以分析更加复杂一点的场景了：当一个函数调用另外一个函数时，栈的变化情况是怎样的？我们还是先看下面这段代码：</li></ul><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(num1,num2){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> num1;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> num2;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> ret </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> y;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ret;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> z </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(x,y);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> z;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(num1,num2){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> num1;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> num2;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> ret </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> y;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ret;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> z </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(x,y);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> z;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>观察上面这段代码，我们把上段代码中的 x+y 改造成了一个 add 函数，当执行到 int z = add(x,y) 时，当前栈的状态如下所示： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-6.png" alt=""></li><li>接下来，就要调用 add 函数了，理想状态下，执行 add 函数的过程是下面这样的： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-7.png" alt=""></li><li>当执行到 add 函数时，会先把参数 num1 和 num2 压栈，接着我们再把变量 x、y、ret 的值依次压栈，不过执行这里，会遇到一个问题，那就是当 add 函数执行完成之后，需要将执行代码的控制权转交给 main 函数，这意味着需要将栈的状态恢复到 main 函数上次执行时的状态，我们把这个过程叫恢复现场。那么应该怎么恢复 main 函数的执行现场呢？</li><li>其实方法很简单，只要在寄存器中保存一个永远指向当前栈顶的指针，栈顶指针的作用就是告诉你应该往哪个位置添加新元素，这个指针通常存放在 esp 寄存器中。如果你想往栈中添加一个元素，那么你需要先根据 esp 寄存器找到当前栈顶的位置，然后在栈顶上方添加新元素，新元素添加之后，还需要将新元素的地址更新到 esp 寄存器中。</li><li>有了栈顶指针，就很容易恢复 main 函数的执行现场了，当 add 函数执行结束时，只需要将栈顶指针向下移动就可以了，具体你可以参看下图： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-8.png" alt="add函数即将执行结束的状态"><img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-9.png" alt="恢复mian函数执行现场"></li><li>观察上图，将 esp 的指针向下移动到之前 main 函数执行时的地方就可以，不过新的问题又来了，CPU 是怎么知道要移动到这个地址呢？</li><li>CPU 的解决方法是增加了另外一个 ebp 寄存器，用来保存当前函数的起始位置，我们把一个函数的起始位置也称为栈帧指针，ebp 寄存器中保存的就是当前函数的栈帧指针，如下图所示： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-10.png" alt="ebp寄存器保存了栈帧指针"></li><li>在 main 函数调用 add 函数的时候，main 函数的栈顶指针就变成了 add 函数的栈帧指针，所以需要将 main 函数的栈顶指针保存到 ebp 中，当 add 函数执行结束之后，我需要销毁 add 函数的栈帧，并恢复 main 函数的栈帧，那么只需要取出 main 函数的栈顶指针写到 esp 中即可 (main 函数的栈顶指针是保存在 ebp 中的)，这就相当于将栈顶指针移动到 main 函数的区域。</li><li>那么现在，我们可以执行 main 函数了吗？</li><li>答案依然是“不能”，这主要是因为 main 函数也有它自己的栈帧指针，在执行 main 函数之前，我们还需恢复它的栈帧指针。如何恢复 main 函数的栈帧指针呢？</li><li>通常的方法是在 main 函数中调用 add 函数时，CPU 会将当前 main 函数的栈帧指针保存在栈中，如下图所示： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-11.png" alt=""></li><li>当函数调用结束之后，就需要恢复 main 函数的执行现场了，首先取出 ebp 中的指针，写入 esp 中，然后从栈中取出之前保留的 main 的栈帧地址，将其写入 ebp 中，到了这里 ebp 和 esp 就都恢复了，可以继续执行 main 函数了。</li><li>另外在这里，我们还需要补充下栈帧的概念，因为在很多文章中我们会看到这个概念，每个栈帧对应着一个未运行完的函数，栈帧中保存了该函数的返回地址和局部变量。</li><li>以上我们详细分析了 C 函数的执行过程，在 JavaScript 中，函数的执行过程也是类似的，如果调用一个新函数，那么 V8 会为该函数创建栈帧，等函数执行结束之后，销毁该栈帧，而栈结构的容量是固定的，所有如果重复嵌套执行一个函数，那么就会导致栈会栈溢出。</li><li>了解了这些，现在我们再回过头来看下开头提到的三段代码。 <ul><li>第一段代码由于循环嵌套调用了 foo，所以当函数运行时，就会导致 foo 函数会不断地调用 foo 函数自身，这样就会导致栈无限增，进而导致栈溢出的错误。</li><li>第二段代码是在函数内部使用了 setTimeout 来启动 foo 函数，这段代码之所以不会导致栈溢出，是因为 setTimeout 会使得 foo 函数在消息队列后面的任务中执行，所以不会影响到当前的栈结构。 也就不会导致栈溢出。关于消息队列和事件循环系统，我们会在最后一单元来介绍。</li><li>最后一段代码是 Promise，Promise 的情况比较特别，既不会造成栈溢出，但是这种方式会导致主线的卡死，这就涉及到了微任务，关于微任务在这里我们先不展开介绍，我会在微任务这一节来详细介绍。</li><li>这相当于在当前这一轮任务里不停地创建微任务，执行，创建，执行，创建……虽然不会爆栈，但也无法去执行下一个任务，主线程被卡在这里了，所以页面会卡死</li></ul></li></ul><h2 id="既然有了栈-为什么还要堆" tabindex="-1">既然有了栈，为什么还要堆 <a class="header-anchor" href="#既然有了栈-为什么还要堆" aria-label="Permalink to &quot;既然有了栈，为什么还要堆&quot;">​</a></h2><ul><li>我们现在理解了栈是怎么管理函数调用的了，使用栈有非常多的优势： <ul><li>栈的结构和非常适合函数调用过程。</li><li>在栈上分配资源和销毁资源的速度非常快，这主要归结于栈空间是连续的，分配空间和销毁空间只需要移动下指针就可以了。</li></ul></li><li>虽然操作速度非常快，但是栈也是有缺点的，其中最大的缺点也是它的优点所造成的，那就是栈是连续的，所以要想在内存中分配一块连续的大空间是非常难的，因此栈空间是有限的。</li><li>因为栈空间是有限的，这就导致我们在编写程序的时候，经常一不小心就会导致栈溢出，比如函数循环嵌套层次太多，或者在栈上分配的数据过大，都会导致栈溢出，基于栈不方便存放大的数据，因此我们使用了另外一种数据结构用来保存一些大数据，这就是堆。</li><li>和栈空间不同，存放在堆空间中的数据是不要求连续存放的，从堆上分配内存块没有固定模式的，你可以在任何时候分配和释放它，为了更好地理解堆，我们看下面这段代码是怎么执行的：</li></ul><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> Point</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> x;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> y;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">z </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> new </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">z </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Point p;</span></span>
<span class="line"><span style="color:#E1E4E8;">    p.x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    p.y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Point </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">pp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> new </span><span style="color:#B392F0;">Point</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    pp-&gt;y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    pp-&gt;x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    delete z;</span></span>
<span class="line"><span style="color:#E1E4E8;">    delete pp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> Point</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> x;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> y;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">z </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> new </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">z </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Point p;</span></span>
<span class="line"><span style="color:#24292E;">    p.x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    p.y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Point </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">pp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> new </span><span style="color:#6F42C1;">Point</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    pp-&gt;y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">400</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    pp-&gt;x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    delete z;</span></span>
<span class="line"><span style="color:#24292E;">    delete pp;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><ul><li>观察上面这段代码，你可以看到代码中有 new int、new Point 这种语句，当执行这些语句时，表示要在堆中分配一块数据，然后返回指针，通常返回的指针会被保存到栈中，下面我们来看看当 main 函数快执行结束时，堆和栈的状态，具体内容你可以参看下图： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-12.png" alt=""></li><li>观察上图，我们可以发现，当使用 new 时，我们会在堆中分配一块空间，在堆中分配空间之后，会返回分配后的地址，我们会把该地址保存在栈中，如上图中 p 和 pp 都是地址，它们保存在栈中，指向了在堆中分配的空间。</li><li>通常，当堆中的数据不再需要的时候，需要对其进行销毁，在 C 语言中可以使用 free，在 C++ 语言中可以使用 delete 来进行操作，比如可以通过：</li></ul><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">delete p;</span></span>
<span class="line"><span style="color:#E1E4E8;">delete pp;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">delete p;</span></span>
<span class="line"><span style="color:#24292E;">delete pp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>来销毁堆中的数据，像 C/C++ 这种手动管理内存的语言，如果没有手动销毁堆中的数据，那么就会造成内存泄漏。不过 JavaScript，Java 使用了自动垃圾回收策略，可以实现垃圾自动回收，但是事情总有两面性，垃圾自动回收也会给我们带来一些性能问题。所以不管是自动垃圾回收策略，还是手动垃圾回收策略，要想写出高效的代码，我们都需要了解内存的底层工作机制。</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>因为现代语言都是基于函数的，每个函数在执行过程中，都有自己的生命周期和作用域，当函数执行结束时，其作用域也会被销毁，因此，我们会使用栈这种数据结构来管理函数的调用过程，我们也把管理函数调用过程的栈结构称之为调用栈。</li><li>因为栈在内存中连续的数据结构，所以在通常情况下，栈都有最大容量限制，这也就意味着，函数的嵌套调用次数过多，就会超出栈的最大使用范围，从而导致栈溢出。</li><li>为了解决栈溢出的问题，我们可以使用 setTimeout 将要执行的函数放到其他的任务中去执行，也可以使用 Promise 来改变栈的调用方式，这涉及到了事件循环和微任务，我们会在后续课程中再来介绍。</li></ul><h2 id="js的事件机制" tabindex="-1">JS的事件机制 <a class="header-anchor" href="#js的事件机制" aria-label="Permalink to &quot;JS的事件机制&quot;">​</a></h2><ul><li>宏任务是setTimeout、requestAnimationFrame、用户输入事件（I/O）等，它是由浏览器的队列完成的，在浏览器的主进程中进行，页面不会卡死。</li><li>微任务，包括Promise、MutationObserver等，是在浏览器的主线程中执行的，一直拉取微任务，这样的循环会不断创建栈，再销毁栈，所以不会爆栈，但是因为在主线程中执行，所以页面会卡死。 <ul><li>主线程在当前任务快要执行结束之前，检查微任务队列中是否存在微任务，如果有，那么那么那么当前任务会依次取出微任务队列中的微任务，并一一执行！</li><li>微任务队列是属于当前宏任务的，所以一个宏任务中产生的微任务，只会放到它自己的微任务队列中！</li><li>微任务并没有进消息队列，它只是当前任务的一个未完成部分.</li><li>因为promise触发的微任务会一直在当前的任务中执行，这回导致其他的宏任务无法被执行！ 所以就造成了页面的卡死</li></ul></li></ul><h2 id="函数调用是如何影响到内存布局的思维导图" tabindex="-1">函数调用是如何影响到内存布局的思维导图 <a class="header-anchor" href="#函数调用是如何影响到内存布局的思维导图" aria-label="Permalink to &quot;函数调用是如何影响到内存布局的思维导图&quot;">​</a></h2>`,28);function r(i,E,y,u,b,m){const s=a("img-viewer");return l(),p("div",null,[c,o(s,{src:"https://zmx2321.github.io/vite-blog/images/note/front/v8-note/12/12-0.png",alt:"函数调用是如何影响到内存布局的"},null,8,["src"])])}const g=n(t,[["render",r]]);export{F as __pageData,g as default};
//# sourceMappingURL=pages_note_front_v8-note_v8-note-12.md.0c50d1b0.js.map
