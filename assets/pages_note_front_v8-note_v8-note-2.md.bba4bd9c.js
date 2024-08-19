import{_ as e,r as t,o as s,c as r,a as l,e as i}from"./app.eca400a4.js";const J=JSON.parse('{"title":"简单介绍v8的执行","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/v8-note/v8-note-2.md","filePath":"pages/note/front/v8-note/v8-note-2.md","lastUpdated":1701051206000}'),o={name:"pages/note/front/v8-note/v8-note-2.md"},n=i('<h1 id="简单介绍v8的执行" tabindex="-1">简单介绍v8的执行 <a class="header-anchor" href="#简单介绍v8的执行" aria-label="Permalink to &quot;简单介绍v8的执行&quot;">​</a></h1><blockquote><p>由于本节的目的是对 V8 做一个宏观的、全面的介绍，其目的是让我们对 V8 的执行流程有个整体上的认识，所以涉及到的概念会比较多</p></blockquote><h2 id="什么是-v8" tabindex="-1">什么是 V8 <a class="header-anchor" href="#什么是-v8" aria-label="Permalink to &quot;什么是 V8&quot;">​</a></h2><ul><li>V8 是一个由 Google 开发的开源 JavaScript 引擎，目前用在 Chrome 浏览器和 Node.js 中，其核心功能是执行易于人类理解的 JavaScript 代码</li></ul><h2 id="v8是如何执行一段javascript代码的" tabindex="-1">V8是如何执行一段JavaScript代码的 <a class="header-anchor" href="#v8是如何执行一段javascript代码的" aria-label="Permalink to &quot;V8是如何执行一段JavaScript代码的&quot;">​</a></h2><ul><li>其主要核心流程分为编译和执行两步。首先需要将 JavaScript 代码转换为低级中间代码或者机器能够理解的机器代码，然后再执行转换后的代码并输出执行结果。</li><li>我们可以把 V8 看成是一个虚构出来的计算机，也称为虚拟机，虚拟机通过模拟实际计算机的各种功能来实现代码的执行，如模拟实际计算机的 CPU、堆栈、寄存器等，虚拟机还具有它自己的一套指令系统。</li><li>所以对于 JavaScript 代码来说，V8 就是它的整个世界，当 V8 执行 JavaScript 代码时，我们并不需要担心现实中不同操作系统的差异，也不需要担心不同体系结构计算机的差异，我们只需要按照虚拟机的规范写好代码就可以了。</li></ul><h2 id="为什么计算机需要对-javascript-这样的高级语言进行编译-以及编译完成后又是如何执行的" tabindex="-1">为什么计算机需要对 JavaScript 这样的高级语言进行编译，以及编译完成后又是如何执行的 <a class="header-anchor" href="#为什么计算机需要对-javascript-这样的高级语言进行编译-以及编译完成后又是如何执行的" aria-label="Permalink to &quot;为什么计算机需要对 JavaScript 这样的高级语言进行编译，以及编译完成后又是如何执行的&quot;">​</a></h2><ul><li>高级代码为什么需要先编译再执行？我们先从 CPU 是怎么执行机器代码讲起</li><li>我们可以把 CPU 看成是一个非常小的运算机器，我们可以通过二进制的指令和 CPU 进行沟通，比如我们给 CPU 发出如<code>1000100111011000</code>的二进制指令 <ul><li>这条指令的意思是将一个寄存器中的数据移动到另外一个寄存器中</li><li>当处理器执行到这条指令的时候，便会按照指令的意思去实现相关的操作</li></ul></li><li>为了能够完成复杂的任务，工程师们为 CPU 提供了一大堆指令，来实现各种功能，我们就把这一大堆指令称为指令集（Instructions），也就是机器语言。</li><li>注意，CPU 只能识别二进制的指令，但是对程序员来说，二进制代码难以阅读和记忆，于是我们又将二进制指令集转换为人类可以识别和记忆的符号，这就是汇编指令集，</li><li>CPU 不能直接识别汇编语言，所以如果我们使用汇编编写了一段程序，我们还需要一个汇编编译器，其作用是将汇编代码编程成机器代码，</li><li>虽然汇编语言对机器语言做了一层抽象，减少了程序员理解机器语言的复杂度，但是汇编语言依然是复杂且繁琐的，即便我们写一个非常简单的功能，也需要实现大量的汇编代码，这主要表现在以下两点 <ul><li>首先，不同的 CPU 有着不同的指令集，如果要使用机器语言或者汇编语言来实现一个功能，那么我们需要为每种架构的 CPU 编写特定的汇编代码，这会带来巨大的、枯燥繁琐的操作，</li><li>其次，在编写汇编代码时，我们还需要了解和处理器架构相关的硬件知识，比如我们需要使用寄存器、内存、操作 CPU 等。</li></ul></li><li>大部分程序员在编写应用的时候，只想专心处理业务逻辑，并不想要过多地理会这些处理器架构相关的细节。</li><li>因此我们需要一种屏蔽了计算机架构细节的语言，能适应多种不同 CPU 架构的语言，能专心处理业务逻辑的语言， <ul><li>诸如 C、C++、Java、C#、Python、JavaScript 等，这些“高级语言”就应运而生了。</li></ul></li><li>和汇编语言一样，处理器也不能直接识别由高级语言所编写的代码，通常要有两种方式来执行这些代码。 <ul><li>第一种是解释执行，需要先将输入的源代码通过解析器编译成中间代码，之后直接使用解释器解释执行中间代码，然后直接输出结果</li><li>第二种是编译执行。采用这种方式时，也需要先将源代码转换为中间代码，然后我们的编译器再将中间代码编译成机器代码。</li></ul></li><li>通常编译成的机器代码是以二进制文件形式存储的，需要执行这段程序的时候直接执行二进制文件就可以了。还可以使用虚拟机将编译后的机器代码保存在内存中，然后直接执行内存中的二进制代码。</li><li>以上就是计算机执行高级语言的两种基本的方式：解释执行和编译执行。但是针对不同的高级语言，这个实现方式还是有很大差异的， <ul><li>比如要执行 C 语言编写的代码，我们需要将其编译为二进制代码的文件，然后再直接执行二进制代码。</li><li>而对于像 Java 语言、JavaScript 语言等，则需要不同虚拟机，模拟计算机的这个编译执行流程。</li><li>执行 Java 语言，需要经过 Java 虚拟机的转换，执行 JavaScript 需要经过 JavaScript 虚拟机的转换。</li><li>即便是 JavaScript 一门语言，也有好几种流行的虚拟机，它们之间的实现方式也存在着一部分差异，比如苹果公司在 Safari 中就是用 JavaScriptCore 虚拟机，Firefox 使用了 TraceMonkey 虚拟机，而 Chrome 则使用了 V8 虚拟机。</li></ul></li></ul><h2 id="v8-是怎么执行-javascript-代码" tabindex="-1">V8 是怎么执行 JavaScript 代码 <a class="header-anchor" href="#v8-是怎么执行-javascript-代码" aria-label="Permalink to &quot;V8 是怎么执行 JavaScript 代码&quot;">​</a></h2><ul><li>V8 作为 JavaScript 的虚拟机的一种，它到底是怎么执行 JavaScript 代码的呢？是解释执行，还是编译执行呢？实际上，V8 并没有采用某种单一的技术，而是混合编译执行和解释执行这两种手段，我们把这种混合使用编译器和解释器的技术称为 JIT（Just In Time）技术。</li><li>这是一种权衡策略，因为这两种方法都各自有各自的优缺点，解释执行的启动速度快，但是执行时的速度慢，而编译执行的启动速度慢，但是执行时的速度快。</li></ul><h2 id="完整的-v8-执行-javascript-的流程图" tabindex="-1">完整的 V8 执行 JavaScript 的流程图 <a class="header-anchor" href="#完整的-v8-执行-javascript-的流程图" aria-label="Permalink to &quot;完整的 V8 执行 JavaScript 的流程图&quot;">​</a></h2>',11),c=i(`<ul><li>我们先看上图中的最左边的部分，在 V8 启动执行 JavaScript 之前，它还需要准备执行 JavaScript 时所需要的一些基础环境，这些基础环境包括了“堆空间”“栈空间”“全局执行上下文”“全局作用域”“消息循环系统”“内置函数”等，这些内容都是在执行 JavaScript 过程中需要使用到的，比如： <ul><li>JavaScript 全局执行上下文就包含了执行过程中的全局信息，比如一些内置函数，全局变量等信息；</li><li>全局作用域包含了一些全局变量，在执行过程中的数据都需要存放在内存中；</li><li>而 V8 是采用了经典的堆和栈的内存管理模式，所以 V8 还需要初始化内存中的堆和栈结构；</li><li>另外，想要我们的 V8 系统活起来，还需要初始化消息循环系统，消息循环系统包含了消息驱动器和消息队列，它如同 V8 的心脏，不断接受消息并决策如何处理消息。</li><li>基础环境准备好之后，接下来就可以向 V8 提交要执行的 JavaScript 代码了。</li></ul></li><li>首先 V8 会接收到要执行的 JavaScript 源代码，不过这对 V8 来说只是一堆字符串，V8 并不能直接理解这段字符串的含义，它需要结构化这段字符串。结构化，是指信息经过分析后可分解成多个互相关联的组成部分，各组成部分间有明确的层次结构，方便使用和维护，并有一定的操作规范。</li><li>V8 源代码的结构化之后，就生成了抽象语法树 (AST)，我们称为 AST，AST 是便于 V8 理解的结构。 <ul><li>这里还需要注意一点，在生成 AST 的同时，V8 还会生成相关的作用域，作用域中存放相关变量</li></ul></li><li>有了 AST 和作用域之后，接下来就可以生成字节码了，字节码是介于 AST 和机器代码的中间代码。但是与特定类型的机器代码无关，解释器可以直接解释执行字节码，或者通过编译器将其编译为二进制的机器代码再执行</li><li>生成了字节码之后，解释器就登场了，它会按照顺序解释执行字节码，并输出执行结果。</li><li>在解释器附近有一个监控机器人，这是一个监控解释器执行状态的模块，在解释执行字节码的过程中，如果发现了某一段代码会被重复多次执行，那么监控机器人就会将这段代码标记为热点代码。</li><li>当某段代码被标记为热点代码后，V8 就会将这段字节码丢给优化编译器，优化编译器会在后台将字节码编译为二进制代码，然后再对编译后的二进制代码执行优化操作</li><li>优化后的二进制机器代码的执行效率会得到大幅提升。如果下面再执行到这段代码时，那么 V8 会优先选择优化之后的二进制代码，这样代码的执行速度就会大幅提升。</li><li>不过，和静态语言不同的是，JavaScript 是一种非常灵活的动态语言，对象的结构和属性是可以在运行时任意修改的，而经过优化编译器优化过的代码只能针对某种固定的结构，一旦在执行过程中，对象的结构被动态修改了，那么优化之后的代码势必会变成无效的代码，这时候优化编译器就需要执行反优化操作，经过反优化的代码，下次执行时就会回退到解释器解释执行。</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>V8 是由 Google 开发的开源 JavaScript 引擎，也被称为虚拟机，模拟实际计算机各种功能来实现代码的编译和执行。那么，要想搞清楚 V8 内部的工作流程和原理，我们可以从分析计算机对语言的编译和执行过程入手。</li><li>因为计算机只能识别二进制指令，所以要让计算机执行一段高级语言通常有两种手段，第一种是将高级代码转换为二进制代码，再让计算机去执行；另外一种方式是在计算机安装一个解释器，并由解释器来解释执行。</li><li>解释执行和编译执行都有各自的优缺点，解释执行启动速度快，但是执行时速度慢，而编译执行启动速度慢，但是执行速度快。为了充分地利用解释执行和编译执行的优点，规避其缺点，V8 采用了一种权衡策略，在启动过程中采用了解释执行的策略，但是如果某段代码的执行频率超过一个值，那么 V8 就会采用优化编译器将其编译成执行效率更加高效的机器代码。</li><li>理解了这一点，我们就可以来深入分析 V8 执行一段 JavaScript 代码所经历的主要流程了，这包括了： <ul><li>初始化基础环境；</li><li>解析源码生成 AST 和作用域；</li><li>依据 AST 和作用域生成字节码；</li><li>解释执行字节码；监听热点代码；</li><li>优化热点代码为二进制的机器代码；</li><li>反优化生成的二进制机器代码。</li></ul></li><li>这里我们需要注意的是，JavaScript 是一门动态语言，在运行过程中，某些被优化的结构可能会被 V8 动态修改了，这会导致之前被优化的代码失效，如果某块优化之后的代码失效了，那么编译器需要执行反优化操作。</li></ul><h2 id="除了-v8-采用了-jit-技术-还有哪些虚拟机采用了-jit-技术" tabindex="-1">除了 V8 采用了 JIT 技术，还有哪些虚拟机采用了 JIT 技术 <a class="header-anchor" href="#除了-v8-采用了-jit-技术-还有哪些虚拟机采用了-jit-技术" aria-label="Permalink to &quot;除了 V8 采用了 JIT 技术，还有哪些虚拟机采用了 JIT 技术&quot;">​</a></h2><ul><li>著名的还有JVM以及luajit，包括oracle最新的graalVM都已经采用了JIT技术。</li><li>PHP -&gt; <a href="https://wiki.php.net/rfc/jit" target="_blank" rel="noreferrer">https://wiki.php.net/rfc/jit</a></li><li>HotSpot</li><li>Dalvik -&gt; <a href="https://android-developers.googleblog.com/2010/05/dalvik-jit.html" target="_blank" rel="noreferrer">https://android-developers.googleblog.com/2010/05/dalvik-jit.html</a></li><li>Dart VM</li><li>PyPy</li><li>Ruby 2.6+</li></ul><h2 id="全局执行上下文和全局作用域的关系" tabindex="-1">全局执行上下文和全局作用域的关系 <a class="header-anchor" href="#全局执行上下文和全局作用域的关系" aria-label="Permalink to &quot;全局执行上下文和全局作用域的关系&quot;">​</a></h2><ul><li>执行上下文是运行代码时的基础环境，包括了变量环境，词法环境，this值，外部环境等内容。</li><li>全局执行上下文就是指全局代码执行时的运行环境。</li><li>而作用域是一个抽象概念，它主要引用了执行上下文中的变量，以方便查找。</li><li>如果全局执行上下文中有块级作用域</li><li>比如执行下面这样的代码，当执行到大括号里面时，全局执行上下文只有一个，但是作用域却有两个</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">7</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">7</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="d8" tabindex="-1">D8 <a class="header-anchor" href="#d8" aria-label="Permalink to &quot;D8&quot;">​</a></h2><blockquote><p>要查看 V8 中间生成的一些结构，可以使用 V8 提供的调试工具 D8 来查看</p></blockquote><h3 id="d8的安装" tabindex="-1">D8的安装 <a class="header-anchor" href="#d8的安装" aria-label="Permalink to &quot;D8的安装&quot;">​</a></h3><ul><li><code>brew install v8</code> =&gt; 在mac下</li><li>d8是通过v8源码编译出来的，也可以使用node来打印部分信息</li></ul><h3 id="d8的命令" tabindex="-1">D8的命令 <a class="header-anchor" href="#d8的命令" aria-label="Permalink to &quot;D8的命令&quot;">​</a></h3><ul><li><code>d8 --print-ast test.js</code> =&gt; 查看AST</li><li><code>d8 --print-scopes test.js</code> =&gt; 查看作用域</li><li><code>d8 --print-bytecode test.js</code> =&gt; 查看字节码</li><li><code>d8 --trace-opt test.js</code> =&gt; 查看热点代码（查看那些代码被优化了）</li><li><code>pt --trace-deopt test.js</code> =&gt; 查看那些代码被反优化了</li></ul><h2 id="v8执行-javascript-代码思维导图" tabindex="-1">v8执行 JavaScript 代码思维导图 <a class="header-anchor" href="#v8执行-javascript-代码思维导图" aria-label="Permalink to &quot;v8执行 JavaScript 代码思维导图&quot;">​</a></h2>`,15);function p(d,v,h,u,b,S){const a=t("img-viewer");return s(),r("div",null,[n,l(a,{src:"https://zmx2321.github.io/vite-blog/images/note/front/v8-note/2/2-1.png",alt:"V8执行一段JavaScript流程图"},null,8,["src"]),c,l(a,{src:"https://zmx2321.github.io/vite-blog/images/note/front/v8-note/2/2-0.png",alt:"v8执行JavaScript代码思维导图"},null,8,["src"])])}const m=e(o,[["render",p]]);export{J as __pageData,m as default};
//# sourceMappingURL=pages_note_front_v8-note_v8-note-2.md.bba4bd9c.js.map
