import{_ as s,o as n,c as a,e as l}from"./app.ef4be69b.js";const F=JSON.parse('{"title":"JS基础-作用域和闭包(必考)","description":"","frontmatter":{},"headers":[],"relativePath":"pages/interview/foundation/interview-foundation-6.md","filePath":"pages/interview/foundation/interview-foundation-6.md","lastUpdated":1699250630000}'),p={name:"pages/interview/foundation/interview-foundation-6.md"},o=l(`<h1 id="js基础-作用域和闭包-必考" tabindex="-1">JS基础-作用域和闭包(必考) <a class="header-anchor" href="#js基础-作用域和闭包-必考" aria-label="Permalink to &quot;JS基础-作用域和闭包(必考)&quot;">​</a></h1><p><a href="https://zmx2321.github.io/blog_code/interview/interview-one-side/6.html" target="_blank" rel="noreferrer">代码笔记</a></p><h2 id="_1-简述" tabindex="-1">1. 简述 <a class="header-anchor" href="#_1-简述" aria-label="Permalink to &quot;1. 简述&quot;">​</a></h2><ul><li>我们写的逻辑写的函数，不一定是平铺的，有可能是模块之间相互调用，产生一些比较复杂的关系，这些关系中如果捋不清关系的作用域的问题，代码可能不知不觉就会出现很多bug</li></ul><h2 id="_2-题目" tabindex="-1">2. 题目 <a class="header-anchor" href="#_2-题目" aria-label="Permalink to &quot;2. 题目&quot;">​</a></h2><ul><li>this的不同应用场景，如何取值(重点)</li><li>手写bind函数(bind是改变this指向的方法之一)</li><li>闭包在实际开发中的应用场景，举例说明</li><li>创建10个<code>&lt;a&gt;</code>标签，点击的时候弹出对应的序号</li></ul><h2 id="_3-知识点" tabindex="-1">3. 知识点 <a class="header-anchor" href="#_3-知识点" aria-label="Permalink to &quot;3. 知识点&quot;">​</a></h2><h3 id="_3-1-作用域和自由变量" tabindex="-1">3.1. 作用域和自由变量 <a class="header-anchor" href="#_3-1-作用域和自由变量" aria-label="Permalink to &quot;3.1. 作用域和自由变量&quot;">​</a></h3><h4 id="_3-1-1-作用域" tabindex="-1">3.1.1. 作用域 <a class="header-anchor" href="#_3-1-1-作用域" aria-label="Permalink to &quot;3.1.1. 作用域&quot;">​</a></h4><ul><li>概念 <ul><li>作用域其实代表了某个变量合法的使用范围</li></ul></li><li>类型 <ul><li>全局作用域</li><li>函数作用域</li><li>块级作用域(ES6新增) <ul><li>示例</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ES6块级作用域 - if/for等后面有大括号，大括号里面的就是块级作用域</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(x)  </span><span style="color:#6A737D;">// 报错</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ES6块级作用域 - if/for等后面有大括号，大括号里面的就是块级作用域</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(x)  </span><span style="color:#6A737D;">// 报错</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul></li></ul><h4 id="_3-1-2-自由变量" tabindex="-1">3.1.2. 自由变量 <a class="header-anchor" href="#_3-1-2-自由变量" aria-label="Permalink to &quot;3.1.2. 自由变量&quot;">​</a></h4><ul><li>一个变量在当前作用域没有定义，但被使用了</li><li>向上级作用域，一层层依次查找，直到找到为止</li><li>如果到全局作用域都没找到，则报错 xx is not defind</li><li>所有的自由变量的查找，是在函数定义的地方，向上级作用域查找</li><li>不是在执行的地方</li></ul><h3 id="_3-2-闭包" tabindex="-1">3.2. 闭包 <a class="header-anchor" href="#_3-2-闭包" aria-label="Permalink to &quot;3.2. 闭包&quot;">​</a></h3><ul><li>闭包其实就是作用域应用的特殊情况，有两种表现 <ul><li>函数作为参数被传递</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 函数作为参数</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fn</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(fn)  </span><span style="color:#6A737D;">// 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fn执行的时候是在print作用域下</span></span>
<span class="line"><span style="color:#6A737D;">// 执行的函数中有个a，是个自由变量</span></span>
<span class="line"><span style="color:#6A737D;">// 这个自由变量在fn作用域下，自由变量应该往他上级作用域去寻找</span></span>
<span class="line"><span style="color:#6A737D;">// 在函数定义的作用域的上级去寻找</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 函数作为参数</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">print</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fn</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(fn)  </span><span style="color:#6A737D;">// 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fn执行的时候是在print作用域下</span></span>
<span class="line"><span style="color:#6A737D;">// 执行的函数中有个a，是个自由变量</span></span>
<span class="line"><span style="color:#6A737D;">// 这个自由变量在fn作用域下，自由变量应该往他上级作用域去寻找</span></span>
<span class="line"><span style="color:#6A737D;">// 在函数定义的作用域的上级去寻找</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>函数作为返回值被返回</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 函数作为返回值 - 面试常考</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> fn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span></span>
<span class="line"><span style="color:#6A737D;">// 这里输出什么是考察重点，做不对基本必挂</span></span>
<span class="line"><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fn函数执行，是在全局作用域</span></span>
<span class="line"><span style="color:#6A737D;">// 函数定义是在create作用域</span></span>
<span class="line"><span style="color:#6A737D;">// a=100是在create作用域</span></span>
<span class="line"><span style="color:#6A737D;">// 函数定义中的a不是在函数定义作用域中定义的，所以是自由变量</span></span>
<span class="line"><span style="color:#6A737D;">// 自由变量应该往上级作用域(create)去寻找</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 函数作为返回值 - 面试常考</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> fn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span></span>
<span class="line"><span style="color:#6A737D;">// 这里输出什么是考察重点，做不对基本必挂</span></span>
<span class="line"><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// fn函数执行，是在全局作用域</span></span>
<span class="line"><span style="color:#6A737D;">// 函数定义是在create作用域</span></span>
<span class="line"><span style="color:#6A737D;">// a=100是在create作用域</span></span>
<span class="line"><span style="color:#6A737D;">// 函数定义中的a不是在函数定义作用域中定义的，所以是自由变量</span></span>
<span class="line"><span style="color:#6A737D;">// 自由变量应该往上级作用域(create)去寻找</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>简要来讲，就是在某个作用域拿到不是你的作用域的值，就要用闭包</li><li>其中最主要的考点是 <ul><li>函数定义中的变量如果不是在函数定义作用域中定义的，那么他就是自由变量</li><li>自由变量应该在函数定义的作用域的上级作用域去寻找，而不是不是在执行的地方</li></ul></li></ul></li></ul><h3 id="_3-3-this" tabindex="-1">3.3. this <a class="header-anchor" href="#_3-3-this" aria-label="Permalink to &quot;3.3. this&quot;">​</a></h3><ul><li>this的使用场景 <ul><li>作为普通函数</li><li>使用call、apply、bind</li><li>作为对象方法被调用</li><li>在class方法中调用</li><li>箭头函数</li></ul></li><li>this指向的规律 <ul><li>this在各个场景中是什么样的值，是在函数执行的时候确定的，不是在定义的时候确定的(重点！适用以上五种情况) <ul><li>即谁调用指向谁</li></ul></li></ul></li><li>this示例1 <ul><li>普通函数、call、bind</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// window</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// call可以直接调用执行</span></span>
<span class="line"><span style="color:#E1E4E8;">fn1.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">({x: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">})  </span><span style="color:#6A737D;">// {x: 100}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bind的特性是，返回一个新的函数执行</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fn2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fn1.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">({x: </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#B392F0;">fn2</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// {x: 200}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// window</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// call可以直接调用执行</span></span>
<span class="line"><span style="color:#24292E;">fn1.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">({x: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">})  </span><span style="color:#6A737D;">// {x: 100}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bind的特性是，返回一个新的函数执行</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fn2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn1.</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">({x: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// {x: 200}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li>this示例2 <ul><li>对象中</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">zhangsan</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 对象中的方法的this指向当前对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// this即当前对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">wait</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 定时器中的this都指向window</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这个函数被执行，实际上是setTimeout本身触发的执行</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 所以他是作为一个普通函数被执行的，不是作为一个对象的方法被执行的</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// this === window</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">waitAgain</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 箭头函数this指向父级 =&gt; 函数当前环境</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 箭头函数是被setTimeout触发的，但是箭头函数的this永远是取他上级作用域的this，它自己本身不会决定this的值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 即箭头函数的this实际上和对象的方法的this是一样的</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// this即当前对象</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">zhangsan</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;张三&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 对象中的方法的this指向当前对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// this即当前对象</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">wait</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 定时器中的this都指向window</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这个函数被执行，实际上是setTimeout本身触发的执行</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 所以他是作为一个普通函数被执行的，不是作为一个对象的方法被执行的</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// this === window</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">waitAgain</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 箭头函数this指向父级 =&gt; 函数当前环境</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 箭头函数是被setTimeout触发的，但是箭头函数的this永远是取他上级作用域的this，它自己本身不会决定this的值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 即箭头函数的this实际上和对象的方法的this是一样的</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// this即当前对象</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></li><li>this示例3 <ul><li>类中</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">People</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 构建函数中的this表示创建的这个类的实例</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">zhangsan</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">People</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">zhangsan.</span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 指向zhangsan对象/实例</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">People</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 构建函数中的this表示创建的这个类的实例</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">zhangsan</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">People</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">zhangsan.</span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// 指向zhangsan对象/实例</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li></ul><h2 id="_4-面试题解答-总结" tabindex="-1">4. 面试题解答(总结) <a class="header-anchor" href="#_4-面试题解答-总结" aria-label="Permalink to &quot;4. 面试题解答(总结)&quot;">​</a></h2><ul><li>创建10个<code>&lt;a&gt;</code>标签，点击的时候弹出对应的序号 <ul><li>示例</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// dom加载很快，但事件只有在点击的时候才会触发，i如果是全局变量，他会很快变成10，即每次点击弹出的都是10</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a</span></span>
<span class="line"><span style="color:#6A737D;">// 如果在for里面定义，就是块级作用域</span></span>
<span class="line"><span style="color:#6A737D;">// 每次循环的时候，都会形成一个新的作用域块，这里的i就会不一样</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++&gt;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  a.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&lt;br&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  a.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这里的i是自由变量，他会在被执行的环境里面一层层往上找，如果i在全局，就会找到全局，全局作用域是针对所有的块</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果i在for里面被定义，那么每次就会在块级作用域里面去找</span></span>
<span class="line"><span style="color:#E1E4E8;">    e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// 阻止冒泡</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(a)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// dom加载很快，但事件只有在点击的时候才会触发，i如果是全局变量，他会很快变成10，即每次点击弹出的都是10</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a</span></span>
<span class="line"><span style="color:#6A737D;">// 如果在for里面定义，就是块级作用域</span></span>
<span class="line"><span style="color:#6A737D;">// 每次循环的时候，都会形成一个新的作用域块，这里的i就会不一样</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++&gt;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  a.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&lt;br&gt;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  a.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这里的i是自由变量，他会在被执行的环境里面一层层往上找，如果i在全局，就会找到全局，全局作用域是针对所有的块</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果i在for里面被定义，那么每次就会在块级作用域里面去找</span></span>
<span class="line"><span style="color:#24292E;">    e.</span><span style="color:#6F42C1;">preventDefault</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">// 阻止冒泡</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(a)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li>this的不同应用场景，如何取值 <ul><li>当作普通函数被调用 <ul><li>指向window</li></ul></li><li>使用call、apply、bind <ul><li>传入什么，指向什么</li></ul></li><li>作为对象方法调用 <ul><li>指向对象本身</li></ul></li><li>class的方法中调用 <ul><li>指向当前实例本身</li></ul></li><li>箭头函数 <ul><li>找上级作用域的值来确定</li></ul></li></ul></li><li>实际开发中闭包的应用场景 <ul><li>函数作为参数被传递</li><li>函数作为返回值被返回</li><li>即函数定义的地方和函数执行的地方不一样</li></ul></li><li>手写bind函数 <ul><li><a href="https://zmx2321.github.io/blog_code/interview/interview-one-side/example/closure/%E6%89%8B%E5%86%99bind.html" target="_blank" rel="noreferrer">手写demo传送门</a></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;this&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a, b, c)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;this is fn1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bind的使用</span></span>
<span class="line"><span style="color:#6A737D;">// bind第一个参数是this, 第二个参数开始就是a、b，即方法中的参数</span></span>
<span class="line"><span style="color:#6A737D;">// 返回一个新的函数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fn2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fn1.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">({x: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn2</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 保存执行结果</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">手写前我们需要理解以下概念</span></span>
<span class="line"><span style="color:#6A737D;">我们需要从fn1入手，去找到fn1和bind关联的地方</span></span>
<span class="line"><span style="color:#6A737D;">fn1().bind =&gt; 即fn1可以执行bind方法，考虑是不是和原型概念有关</span></span>
<span class="line"><span style="color:#6A737D;">fn1.hasOwnProperty(&#39;bind&#39;) =&gt; fn1不属于bind这个对象的属性</span></span>
<span class="line"><span style="color:#6A737D;">fn1是一个函数  =&gt; 我们可以理解为他是一个实例 =&gt; 所有实例都有隐式原型</span></span>
<span class="line"><span style="color:#6A737D;">fn1.__proto__</span></span>
<span class="line"><span style="color:#6A737D;">fn1的隐式原型 === Function的显示原型</span></span>
<span class="line"><span style="color:#6A737D;">即可以理解为fn1是Function类new出来的实例</span></span>
<span class="line"><span style="color:#6A737D;">即 fn1.__proto__ === Function.prototype</span></span>
<span class="line"><span style="color:#6A737D;">即 Function.prototype里面有bind/call/apply等api方法</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 手写bind</span></span>
<span class="line"><span style="color:#6A737D;">// 以插件的形式扩展</span></span>
<span class="line"><span style="color:#6A737D;">// Function的原型中已经有了一个bind方法</span></span>
<span class="line"><span style="color:#6A737D;">// 我们现在在Funtion原型上再加上一个bind方法(模拟)</span></span>
<span class="line"><span style="color:#6A737D;">// bind方法中，除了第一个参数是this,后面的参数数量不确定</span></span>
<span class="line"><span style="color:#79B8FF;">Function</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">bind1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 将参数拆解为数组</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这里引申出一个知识点 - arguments</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// arguments可以获取一个函数所有的参数，不管传几个，可以获取所有的</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// arguments是列表的形式，但他不是数组</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这里使用Array原型中的slice方法(api) (同样适用于dom列表)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 通过Array.prototype.slice执行的时候，把arguments赋成Array.prototype.slice函数的this</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">args</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.slice.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取this(数组第一项)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// shift是永远地将数组第一项挖出来</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// t是数组第1项，此时args已经把第一项删除了</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">t</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> args.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// 获取数组第1项</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 把this从这个数组中剔除出去 （bind方法第1项是this,其他都是参数）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 除了this的其他数组</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这里的this就是实例化出来的方法 - class中的this是实例本身</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 即 fn1.bind(...) 中的 fn1</span></span>
<span class="line"><span style="color:#E1E4E8;">  cosnt self </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// bind是返回一个函数的</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// apply第一个参数是this,第二个参数开始是所有的参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// apply除了不返回函数，其他和bind一样</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> self.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(t, args)  </span><span style="color:#6A737D;">// 这个就是fn1的执行</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fn3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fn1.</span><span style="color:#B392F0;">bind1</span><span style="color:#E1E4E8;">({x: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn3</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res1)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">, </span><span style="color:#E36209;">c</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;this&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a, b, c)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;this is fn1&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bind的使用</span></span>
<span class="line"><span style="color:#6A737D;">// bind第一个参数是this, 第二个参数开始就是a、b，即方法中的参数</span></span>
<span class="line"><span style="color:#6A737D;">// 返回一个新的函数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fn2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn1.</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">({x: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">}, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// 保存执行结果</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">手写前我们需要理解以下概念</span></span>
<span class="line"><span style="color:#6A737D;">我们需要从fn1入手，去找到fn1和bind关联的地方</span></span>
<span class="line"><span style="color:#6A737D;">fn1().bind =&gt; 即fn1可以执行bind方法，考虑是不是和原型概念有关</span></span>
<span class="line"><span style="color:#6A737D;">fn1.hasOwnProperty(&#39;bind&#39;) =&gt; fn1不属于bind这个对象的属性</span></span>
<span class="line"><span style="color:#6A737D;">fn1是一个函数  =&gt; 我们可以理解为他是一个实例 =&gt; 所有实例都有隐式原型</span></span>
<span class="line"><span style="color:#6A737D;">fn1.__proto__</span></span>
<span class="line"><span style="color:#6A737D;">fn1的隐式原型 === Function的显示原型</span></span>
<span class="line"><span style="color:#6A737D;">即可以理解为fn1是Function类new出来的实例</span></span>
<span class="line"><span style="color:#6A737D;">即 fn1.__proto__ === Function.prototype</span></span>
<span class="line"><span style="color:#6A737D;">即 Function.prototype里面有bind/call/apply等api方法</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 手写bind</span></span>
<span class="line"><span style="color:#6A737D;">// 以插件的形式扩展</span></span>
<span class="line"><span style="color:#6A737D;">// Function的原型中已经有了一个bind方法</span></span>
<span class="line"><span style="color:#6A737D;">// 我们现在在Funtion原型上再加上一个bind方法(模拟)</span></span>
<span class="line"><span style="color:#6A737D;">// bind方法中，除了第一个参数是this,后面的参数数量不确定</span></span>
<span class="line"><span style="color:#005CC5;">Function</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">bind1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 将参数拆解为数组</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这里引申出一个知识点 - arguments</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// arguments可以获取一个函数所有的参数，不管传几个，可以获取所有的</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// arguments是列表的形式，但他不是数组</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这里使用Array原型中的slice方法(api) (同样适用于dom列表)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 通过Array.prototype.slice执行的时候，把arguments赋成Array.prototype.slice函数的this</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">args</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取this(数组第一项)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// shift是永远地将数组第一项挖出来</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// t是数组第1项，此时args已经把第一项删除了</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">t</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> args.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">// 获取数组第1项</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 把this从这个数组中剔除出去 （bind方法第1项是this,其他都是参数）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 除了this的其他数组</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这里的this就是实例化出来的方法 - class中的this是实例本身</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 即 fn1.bind(...) 中的 fn1</span></span>
<span class="line"><span style="color:#24292E;">  cosnt self </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// bind是返回一个函数的</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// apply第一个参数是this,第二个参数开始是所有的参数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// apply除了不返回函数，其他和bind一样</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> self.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(t, args)  </span><span style="color:#6A737D;">// 这个就是fn1的执行</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fn3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn1.</span><span style="color:#6F42C1;">bind1</span><span style="color:#24292E;">({x: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">}, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn3</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res1)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div></li><li>实际开发中闭包的应用 <ul><li>隐藏数据 <ul><li>为了避免在外部改变</li><li>如做一个简单的cache(缓存)工具</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 闭包隐藏数据，只提供api</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createCache</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}  </span><span style="color:#6A737D;">// 闭包中的数据，被隐藏，不被外界访问</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      data[key] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> data[key]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行createCache方法，获取return里面的对象</span></span>
<span class="line"><span style="color:#6A737D;">// 返回函数是闭包的一种形式</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">c</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createCache</span><span style="color:#E1E4E8;">();  </span></span>
<span class="line"><span style="color:#E1E4E8;">c.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(c.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这样就没有办法不通过set、get方法改data的值了</span></span>
<span class="line"><span style="color:#6A737D;">// data是在createCache作用域中的，不会被外界访问到</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 闭包隐藏数据，只提供api</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createCache</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}  </span><span style="color:#6A737D;">// 闭包中的数据，被隐藏，不被外界访问</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      data[key] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> data[key]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行createCache方法，获取return里面的对象</span></span>
<span class="line"><span style="color:#6A737D;">// 返回函数是闭包的一种形式</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">c</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createCache</span><span style="color:#24292E;">();  </span></span>
<span class="line"><span style="color:#24292E;">c.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(c.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这样就没有办法不通过set、get方法改data的值了</span></span>
<span class="line"><span style="color:#6A737D;">// data是在createCache作用域中的，不会被外界访问到</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li></ul></li></ul>`,18),e=[o];function c(r,t,y,i,E,b){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
//# sourceMappingURL=pages_interview_foundation_interview-foundation-6.md.df786649.js.map
