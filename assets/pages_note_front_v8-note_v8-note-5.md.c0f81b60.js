import{_ as n,r as a,o as l,c as p,a as o,e}from"./app.eca400a4.js";const m=JSON.parse('{"title":"函数表达式","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/v8-note/v8-note-5.md","filePath":"pages/note/front/v8-note/v8-note-5.md","lastUpdated":1701154296000}'),c={name:"pages/note/front/v8-note/v8-note-5.md"},r=e(`<h1 id="函数表达式" tabindex="-1">函数表达式 <a class="header-anchor" href="#函数表达式" aria-label="Permalink to &quot;函数表达式&quot;">​</a></h1><blockquote><p>了解了 V8 中的对象和函数，以及函数为什么会被称为是一等公民这些之后，就可以来学习函数表达式了。</p></blockquote><h2 id="梗概" tabindex="-1">梗概 <a class="header-anchor" href="#梗概" aria-label="Permalink to &quot;梗概&quot;">​</a></h2><ul><li>函数表达式在 JavaScript 中非常基础也非常重要，使用函数表达式可以用来实现代码隐藏，还可以实现变量隔离，所以函数表达式被广泛地应用在各个项目中，了解函数表达式的底层工作机制，可以帮助我们更加深刻地理解项目。</li><li>它涉及到了很多底层概念，比如表达式、语句、函数即对象（在 JavaScript 中）等，而且函数表达式和函数声明看起来类似，都是定义一个函数，然后再调用该函数，很容易把二者搞混淆</li></ul><h2 id="函数声明与函数表达式的差异" tabindex="-1">函数声明与函数表达式的差异 <a class="header-anchor" href="#函数声明与函数表达式的差异" aria-label="Permalink to &quot;函数声明与函数表达式的差异&quot;">​</a></h2><h3 id="函数声明" tabindex="-1">函数声明 <a class="header-anchor" href="#函数声明" aria-label="Permalink to &quot;函数声明&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 在这段代码中，我声明了一个 foo 函数，然后在 foo 函数之前调用了 foo 函数，执行这段代码，我们看到 foo 函数被正确执行了。</span></span>
<span class="line"><span style="color:#6A737D;"> * 在函数声明之前就可以调用该函数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 在这段代码中，我声明了一个 foo 函数，然后在 foo 函数之前调用了 foo 函数，执行这段代码，我们看到 foo 函数被正确执行了。</span></span>
<span class="line"><span style="color:#6A737D;"> * 在函数声明之前就可以调用该函数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="函数表达式-1" tabindex="-1">函数表达式 <a class="header-anchor" href="#函数表达式-1" aria-label="Permalink to &quot;函数表达式&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 在这段代码中，我定义了一个变量 foo，然后将一个函数赋值给了变量 foo，</span></span>
<span class="line"><span style="color:#6A737D;"> * 我们在 foo 函数的前面调用 foo，执行这段代码，我们发现报错了，提示的错误信息如下所示</span></span>
<span class="line"><span style="color:#6A737D;"> * VM130:1 Uncaught TypeError: foo is not a function</span></span>
<span class="line"><span style="color:#6A737D;">    at &lt;anonymous&gt;:1:1</span></span>
<span class="line"><span style="color:#6A737D;"> * 即变量 foo 并不是一个函数，所以无法被调用</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 在这段代码中，我定义了一个变量 foo，然后将一个函数赋值给了变量 foo，</span></span>
<span class="line"><span style="color:#6A737D;"> * 我们在 foo 函数的前面调用 foo，执行这段代码，我们发现报错了，提示的错误信息如下所示</span></span>
<span class="line"><span style="color:#6A737D;"> * VM130:1 Uncaught TypeError: foo is not a function</span></span>
<span class="line"><span style="color:#6A737D;">    at &lt;anonymous&gt;:1:1</span></span>
<span class="line"><span style="color:#6A737D;"> * 即变量 foo 并不是一个函数，所以无法被调用</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="为什么会有差异" tabindex="-1">为什么会有差异 <a class="header-anchor" href="#为什么会有差异" aria-label="Permalink to &quot;为什么会有差异&quot;">​</a></h3><ul><li>其主要原因是这两种定义函数的方式具有不同语义，不同的语义触发了不同的行为 <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/5/5-1.png" alt="函数声明与函数表达式的差异"></li><li>因为语义不同，所以我们给这两种定义函数的方式使用了不同的名称， <ul><li>第一种称之为函数声明</li><li>第二种称之为函数表达式</li></ul></li></ul><h2 id="v8-是怎么处理函数声明的" tabindex="-1">V8 是怎么处理函数声明的 <a class="header-anchor" href="#v8-是怎么处理函数声明的" aria-label="Permalink to &quot;V8 是怎么处理函数声明的&quot;">​</a></h2><blockquote><p>函数声明指定义了一个具有指定参数的函数</p></blockquote><ul><li>我们知道，V8 在执行 JavaScript 的过程中，会先对其进行编译，然后再执行，比如下面这段代码</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Foo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Foo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>V8 执行这段代码的流程大致如下图所示： <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/5/5-2.png" alt="V8 执行代码流程"></li><li>在编译阶段，如果解析到函数声明，那么 V8 会将这个函数声明转换为内存中的函数对象，并将其放到作用域中。</li><li>同样，如果解析到了某个变量声明，也会将其放到作用域中，但是会将其值设置为 undefined，表示该变量还未被使用。</li><li>然后在 V8 执行阶段，如果使用了某个变量，或者调用了某个函数，那么 V8 便会去作用域查找相关内容。</li><li>因为在执行之前，这些变量都被提升到作用域中了，所以在执行阶段，V8 当然就能获取到所有的定义变量了。 <ul><li>我们把这种在编译阶段，将所有的变量提升到作用域的过程称为变量提升。</li></ul></li><li>了解了变量提升，我们就能解释，为什么可以在函数声明之前调用该函数了，这是因为声明的函数在编译阶段就被提升到作用域中，在执行阶段，只要是在作用域中存在的变量或者对象，都是可以使用的。</li><li>对于变量提升，函数和普通的对象还是存在一些差异的，通过上面的分析我们知道，如果是一个普通变量，变量提升之后的值都是 undefined</li><li>如果是声明的函数，那么变量提升之后的值则是函数对象，我们可以通过下面的代码来实践下：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(x)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(foo)</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(x)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(foo)</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>执行上面这段代码，我们可以看到，普通变量 x 的值就是 undefined，而函数对象 foo 的值则是完整的对象，那这又是为什么呢？这就是涉及到表达式和语句的区别了。</li><li>简单地理解，表达式就是表示值的式子，而语句是操作值的式子。 <ul><li>表达式 =&gt; <code>x = 5</code><ul><li>表达式表示，执行这段代码，它会返回一个值。</li><li>同样，6 === 5 也是一个表达式，因为它会返回 False</li></ul></li><li>语句 =&gt; <code>var x</code><ul><li>执行该语句时，V8 并不会返回任何值给你</li><li>语句可以操作表达式</li></ul></li></ul></li><li>同样，当我声明了一个函数时，这个函数声明也是一个语句，比如下面这段函数声明：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>当执行到这段代码时，V8 并没有返回任何的值，它只是解析 foo 函数，并将函数对象存储到内存中。</li><li>在 V8 执行<code>var x = 5</code>这段代码时，会认为它是两段代码，一段是定义变量的语句，一段是赋值的表达式,如下所示:</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>首先，在变量提升阶段，V8 并不会执行赋值的表达式，该阶段只会分析基础的语句，比如变量的定义，函数的声明。</li><li>而这两行代码是在不同的阶段完成的， <ul><li><code>var x</code> 是在编译阶段完成的，也可以说是在变量提升阶段完成的，</li><li>而<code>x = 5</code>是表达式，所有的表达式都是在执行阶段完成的。</li><li>即表达式是不会在编译阶段执行的</li></ul></li><li>在变量提升阶段，V8 将这些变量存放在作用域时，还会给它们赋一个默认的 undefined 值，所以在定义一个普通的变量之前，使用该变量，那么该变量的值就是 undefined。</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Foo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Foo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>执行上面这段代码，它并没有输出任何内容，所以可以肯定，函数声明并不是一个表达式，而是一个语句。V8 在变量提升阶段，如果遇到函数声明，那么 V8 同样会对该函数声明执行变量提升操作。</li><li>函数也是一个对象，所以在编译阶段，V8 就会将整个函数对象提升到作用域中，并不是给该函数名称赋一个 undefined，理解这一点尤为重要。</li><li>总的来说，在 V8 解析 JavaScript 源码的过程中，如果遇到普通的变量声明，那么便会将其提升到作用域中，并给该变量赋值为 undefined，如果遇到的是函数声明，那么 V8 会在内存中为声明生成函数对象，并将该对象提升到作用域中。 <img src="https://zmx2321.github.io/vite-blog/images/note/front/v8-note/5/5-3.png" alt="函数声明的调用"></li></ul><h2 id="v8-是怎么处理函数表达式的" tabindex="-1">V8 是怎么处理函数表达式的 <a class="header-anchor" href="#v8-是怎么处理函数表达式的" aria-label="Permalink to &quot;V8 是怎么处理函数表达式的&quot;">​</a></h2><blockquote><p>我们在一个表达式中使用 function 来定义一个函数，那么就把该函数称为函数表达式。</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 是一个表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 我们把右边的数字 1 替换成函数定义，那么这就变成了函数表达式</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 是一个表达式</span></span>
<span class="line"><span style="color:#24292E;">foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 我们把右边的数字 1 替换成函数定义，那么这就变成了函数表达式</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>根据代码分析v8处理函数表达式</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>当执行这段代码的时候，V8 在编译阶段会先查找声明语句，你可以把这段代码拆分为下面两行代码：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>第一行是声明语句，所以 V8 在解析阶段，就会在作用域中创建该对象，并将该对象设置为 undefined，</li><li>第二行是函数表达式，在编译阶段，V8 并不会处理函数表达式，所以也就不会将该函数表达式提升到作用域中了。</li><li>那么在函数表达式之前调用该函数 foo，此时的 foo 只是指向了 undefined，所以就相当于调用一个 undefined，而 undefined 只是一个原生对象，并不是函数，所以当然会报错了。</li></ul><h2 id="函数表达式与函数声明的最主要区别" tabindex="-1">函数表达式与函数声明的最主要区别 <a class="header-anchor" href="#函数表达式与函数声明的最主要区别" aria-label="Permalink to &quot;函数表达式与函数声明的最主要区别&quot;">​</a></h2><ol><li>函数表达式是在表达式语句中使用 function 的，最典型的表达式是“a=b”这种形式，因为函数也是一个对象，我们把“a = function (){}”这种方式称为函数表达式；</li><li>在函数表达式中，可以省略函数名称，从而创建匿名函数（anonymous functions）；</li><li>一个函数表达式可以被用作一个即时调用的函数表达式——IIFE（Immediately Invoked Function Expression）。</li></ol><h2 id="立即调用的函数表达式-iife" tabindex="-1">立即调用的函数表达式（IIFE） <a class="header-anchor" href="#立即调用的函数表达式-iife" aria-label="Permalink to &quot;立即调用的函数表达式（IIFE）&quot;">​</a></h2><ul><li>现在我们知道了，在编译阶段，V8 并不会处理函数表达式，而 JavaScript 中的立即函数调用表达式正是使用了这个特性来实现了非常广泛的应用，下面我们就来一起看看立即函数调用表达式。</li><li>JavaScript 中有一个圆括号运算符，圆括号里面可以放一个表达式，比如 =&gt; <code>(a=3)</code><ul><li>括号里面是一个表达式，整个语句也是一个表达式，最终输出 3</li></ul></li><li>如果在小括号里面放上一段函数的定义，如下所示</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//statements</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//statements</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>因为小括号之间存放的必须是表达式，所以如果在小阔号里面定义一个函数，那么 V8 就会把这个函数看成是函数表达式，执行时它会返回一个函数对象。</li><li>存放在括号里面的函数便是一个函数表达式，它会返回一个函数对象，如果我直接在表达式后面加上调用的括号，这就称为立即调用函数表达式（IIFE），比如下面代码：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//statements</span></span>
<span class="line"><span style="color:#E1E4E8;">})()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//statements</span></span>
<span class="line"><span style="color:#24292E;">})()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>因为函数立即表达式也是一个表达式，所以 V8 在编译阶段，并不会为该表达式创建函数对象。这样的一个好处就是不会污染环境，函数和函数内部的变量都不会被其他部分的代码访问到。</li><li>在 ES6 之前，JavaScript 中没有私有作用域的概念，如果在多人开发的项目中，你模块中的变量可能覆盖掉别人的变量，所以使用函数立即表达式就可以将我们内部变量封装起来，避免了相互之间的变量污染。</li><li>另外，因为函数立即表达式是立即执行的，所以将一个函数立即表达式赋给一个变量时，不是存储 IIFE 本身，而是存储 IIFE 执行后返回的结果。如下所示：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">})()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">})()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>函数表达式在实际的项目应用中非常广，不过由于函数声明和函数表达式之间非常类似，非常容易引起人们的误解，</li><li>函数声明的本质是语句，而函数表达式的本质则是表达式。</li><li>函数声明和变量声明类似，V8 在编译阶段，都会对其执行变量提升的操作，将它们提升到作用域中，在执行阶段，如果使用了某个变量，就可以直接去作用域中去查找。</li><li>不过 V8 对于提升函数和提升变量的策略是不同的，如果提升了一个变量，那么 V8 在将变量提升到作用域中时，还会为其设置默认值 undefined，</li><li>如果是函数声明，那么 V8 会在内存中创建该函数对象，并提升整个函数对象。</li><li>函数表达式也是表达式的一种，在编译阶段，V8 并不会将表达式中的函数对象提升到全局作用域中，所以无法在函数表达式之前使用该函数。</li><li>函数立即表达式是一种特别的表达式，主要用来封装一些变量、函数，可以起到变量隔离和代码隐藏的作用，因此在一些大的开源项目中有广泛的应用。</li></ul><h2 id="经典面试题" tabindex="-1">经典面试题 <a class="header-anchor" href="#经典面试题" aria-label="Permalink to &quot;经典面试题&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(n);</span></span>
<span class="line"><span style="color:#E1E4E8;">}())</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(n);</span></span>
<span class="line"><span style="color:#6A737D;">// 100  100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(n);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(n);</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">// 1 100</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(n);</span></span>
<span class="line"><span style="color:#24292E;">}())</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(n);</span></span>
<span class="line"><span style="color:#6A737D;">// 100  100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(n);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(n);</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">// 1 100</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="函数表达式思维导图" tabindex="-1">函数表达式思维导图 <a class="header-anchor" href="#函数表达式思维导图" aria-label="Permalink to &quot;函数表达式思维导图&quot;">​</a></h2>`,46);function t(i,E,y,d,u,b){const s=a("img-viewer");return l(),p("div",null,[r,o(s,{src:"https://zmx2321.github.io/vite-blog/images/note/front/v8-note/5/5-0.png",alt:"函数表达式"},null,8,["src"])])}const v=n(c,[["render",t]]);export{m as __pageData,v as default};
//# sourceMappingURL=pages_note_front_v8-note_v8-note-5.md.c0f81b60.js.map
