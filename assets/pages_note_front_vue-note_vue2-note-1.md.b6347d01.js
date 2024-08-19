import{_ as e,o,c as t,b as s,d as n,h as l,e as p}from"./app.eca400a4.js";const A=JSON.parse('{"title":"vue2项目开发基本知识点总结","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/vue-note/vue2-note-1.md","filePath":"pages/note/front/vue-note/vue2-note-1.md","lastUpdated":1700204718000}'),c={name:"pages/note/front/vue-note/vue2-note-1.md"},r=p(`<h1 id="vue2项目开发基本知识点总结" tabindex="-1">vue2项目开发基本知识点总结 <a class="header-anchor" href="#vue2项目开发基本知识点总结" aria-label="Permalink to &quot;vue2项目开发基本知识点总结&quot;">​</a></h1><br><h4 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h4><h6> 1. 组件 </h6><h6> 2. vue 脚手架 </h6><h6> 3. vue 生命周期 </h6><h6> 4. vue 路由 </h6><h6> 5. axios </h6><h6> 6. vuex </h6><h2 id="_1-组件" tabindex="-1">1. 组件 <a class="header-anchor" href="#_1-组件" aria-label="Permalink to &quot;1. 组件&quot;">​</a></h2><h3 id="_1-全局组件" tabindex="-1">1. 全局组件 <a class="header-anchor" href="#_1-全局组件" aria-label="Permalink to &quot;1. 全局组件&quot;">​</a></h3><h5 id="语法" tabindex="-1">语法： <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法：&quot;">​</a></h5><ul><li>格式：<br><code>Vue.component(tagName, options)</code></li><li>参数： <ul><li><code>tagName</code> =&gt; 组件名称</li><li><code>options</code> =&gt; 配置项 <ul><li><code>data</code> =&gt; 数据，是个函数</li><li><code>template</code> =&gt; 模板，内容为html结构(必须参数)</li></ul></li></ul></li></ul><h5 id="解析" tabindex="-1">解析 <a class="header-anchor" href="#解析" aria-label="Permalink to &quot;解析&quot;">​</a></h5><ul><li>这里的Vue是一个对象，在引入的vue.js库中，每个Vue应用都是通过用Vue函数创建一个新的Vue实例开始的，这个Vue实际上就是一个构造函数。</li><li>在Vue的构造函数(实例)中，它有一个component方法，Vue构造函数下面的这个component方法就是用来声明全局组件的。</li><li>这个component方法接收两个参数，tagName(组件名称)和options(组件配置)。</li><li>tagName：当一个组件声明之后需要使用，使用的时候需要在html文件里面写标签对，而这标签对的名称，就是这个组件声明时候的名称。</li><li>options：针对这个组件我们需要给它很多设置。它是一个对象，可以放很多参数，最基本的有两个，一个是数据(data)，一个是html模板(template)。</li></ul><br><blockquote><h5 id="示例1" tabindex="-1">示例1 <a class="header-anchor" href="#示例1" aria-label="Permalink to &quot;示例1&quot;">​</a></h5><p>全局组件的基本用法</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 全局组件的名称(tagName) --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">counter</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">counter</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 全局组件的名称(tagName) --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">counter</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">counter</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * vue对象注册全局组件的方法</span></span>
<span class="line"><span style="color:#6A737D;"> * Vue.component(tagName, options)</span></span>
<span class="line"><span style="color:#6A737D;"> * 组件名称，配置项（data, template...）</span></span>
<span class="line"><span style="color:#6A737D;"> * 将组件名(tagName)放到html中</span></span>
<span class="line"><span style="color:#6A737D;"> * options是一个对象，表示组件中的选项</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;counter&quot;</span><span style="color:#E1E4E8;">,  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// template中所有的标签需要包含在一个父级当中</span></span>
<span class="line"><span style="color:#E1E4E8;">    template: </span><span style="color:#9ECBFF;">&#39;&lt;button&gt;按钮&lt;/button&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实例化Vue对象</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 用来放vue的容器，声明的这个vue对象，要在页面中放在id为app的div中展示。</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * vue对象注册全局组件的方法</span></span>
<span class="line"><span style="color:#6A737D;"> * Vue.component(tagName, options)</span></span>
<span class="line"><span style="color:#6A737D;"> * 组件名称，配置项（data, template...）</span></span>
<span class="line"><span style="color:#6A737D;"> * 将组件名(tagName)放到html中</span></span>
<span class="line"><span style="color:#6A737D;"> * options是一个对象，表示组件中的选项</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;counter&quot;</span><span style="color:#24292E;">,  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// template中所有的标签需要包含在一个父级当中</span></span>
<span class="line"><span style="color:#24292E;">    template: </span><span style="color:#032F62;">&#39;&lt;button&gt;按钮&lt;/button&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实例化Vue对象</span></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 用来放vue的容器，声明的这个vue对象，要在页面中放在id为app的div中展示。</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><h5 id="示例2" tabindex="-1">示例2 <a class="header-anchor" href="#示例2" aria-label="Permalink to &quot;示例2&quot;">​</a></h5><p>全局组件关联template</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#FDAEB7;font-style:italic;">counter</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">counter</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">    用来放vue模板的容器</span></span>
<span class="line"><span style="color:#6A737D;">    </span></span>
<span class="line"><span style="color:#6A737D;">    1. template标签它是放在body当中，并一定要与上面的div平级</span></span>
<span class="line"><span style="color:#6A737D;">    2. 需要给一个id用于关联</span></span>
<span class="line"><span style="color:#6A737D;">    3. 同样需要一个父级</span></span>
<span class="line"><span style="color:#6A737D;">--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 需要被包含在一个容器当中 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;按钮&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;按照平常的html写法就可以了&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#B31D28;font-style:italic;">counter</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">counter</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">    用来放vue模板的容器</span></span>
<span class="line"><span style="color:#6A737D;">    </span></span>
<span class="line"><span style="color:#6A737D;">    1. template标签它是放在body当中，并一定要与上面的div平级</span></span>
<span class="line"><span style="color:#6A737D;">    2. 需要给一个id用于关联</span></span>
<span class="line"><span style="color:#6A737D;">    3. 同样需要一个父级</span></span>
<span class="line"><span style="color:#6A737D;">--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 需要被包含在一个容器当中 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;按钮&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;按照平常的html写法就可以了&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>js</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vue对象，调用component注册全局组件</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;counter&quot;</span><span style="color:#E1E4E8;">,  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用在body中vue模板(template)的id</span></span>
<span class="line"><span style="color:#E1E4E8;">    template: </span><span style="color:#9ECBFF;">&#39;#btn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vue对象，调用component注册全局组件</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;counter&quot;</span><span style="color:#24292E;">,  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用在body中vue模板(template)的id</span></span>
<span class="line"><span style="color:#24292E;">    template: </span><span style="color:#032F62;">&#39;#btn&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><h5 id="示例3" tabindex="-1">示例3： <a class="header-anchor" href="#示例3" aria-label="Permalink to &quot;示例3：&quot;">​</a></h5><p>全局组件关联中data的用法</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#FDAEB7;font-style:italic;">counter</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">counter</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue模板的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;按钮&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	</span><span style="color:#6A737D;">&lt;!-- 在data中的数据可以使用模板字符串的形式使用 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{{ count }}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#B31D28;font-style:italic;">counter</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">counter</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue模板的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;按钮&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	</span><span style="color:#6A737D;">&lt;!-- 在data中的数据可以使用模板字符串的形式使用 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;{{ count }}&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>js</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vue中component注册全局组件的方法中的参数options是一个对象，里面有若干属性和方法，data是其中一个表示组件中数据的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;counter&quot;</span><span style="color:#E1E4E8;">,  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    template: </span><span style="color:#9ECBFF;">&#39;#btn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 表示vue组件中的数据，是一个方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在es6中，在对象中写一个函数的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 在data对象中需要有一个return,这个return是一个对象，在这个对象里面可以存储这个组件所需要的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vue中component注册全局组件的方法中的参数options是一个对象，里面有若干属性和方法，data是其中一个表示组件中数据的方法</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;counter&quot;</span><span style="color:#24292E;">,  {</span></span>
<span class="line"><span style="color:#24292E;">    template: </span><span style="color:#032F62;">&#39;#btn&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 表示vue组件中的数据，是一个方法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在es6中，在对象中写一个函数的方法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 在data对象中需要有一个return,这个return是一个对象，在这个对象里面可以存储这个组件所需要的数据</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            count: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><h5 id="示例4" tabindex="-1">示例4： <a class="header-anchor" href="#示例4" aria-label="Permalink to &quot;示例4：&quot;">​</a></h5><p>全局组件中定义方法</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#FDAEB7;font-style:italic;">counter</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">counter</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue模板的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 在vue中使用方法用 @事件名=“方法名” --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;add&quot;</span><span style="color:#E1E4E8;">&gt;按钮&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{{ count }}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#B31D28;font-style:italic;">counter</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">counter</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue模板的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 在vue中使用方法用 @事件名=“方法名” --&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;add&quot;</span><span style="color:#24292E;">&gt;按钮&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;{{ count }}&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>js</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;counter&quot;</span><span style="color:#E1E4E8;">,  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    template: </span><span style="color:#9ECBFF;">&#39;#btn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在全局组件中定义方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 取到组件中的数据使用this.数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    	}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;counter&quot;</span><span style="color:#24292E;">,  {</span></span>
<span class="line"><span style="color:#24292E;">    template: </span><span style="color:#032F62;">&#39;#btn&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            count: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在全局组件中定义方法</span></span>
<span class="line"><span style="color:#24292E;">    methods: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 取到组件中的数据使用this.数据</span></span>
<span class="line"><span style="color:#24292E;">    	    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    	}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>注意：</p><ul><li>每个Vue应用都是通过用Vue函数创建一个新的Vue实例开始的。</li><li>组件就是具体的一个个功能。一个实际的功能里面会有很多结构。结构都放在template中，就是一个模板。</li><li>template中所有的标签需要包含在一个父级当中。</li><li>每一个全局组件之间相互独立，即每次实例化的Vue相互不关联。</li><li>所有的组件名称不能使用驼峰命名(标签不能用大写字母)，要使用-，比如说你的一个组件名称叫counterA，你在标签里面使用的话只能用<code>&lt;counter-A&gt;&lt;/counter-A&gt;</code></li></ul><br><h3 id="_2-局部组件" tabindex="-1">2. 局部组件 <a class="header-anchor" href="#_2-局部组件" aria-label="Permalink to &quot;2. 局部组件&quot;">​</a></h3><ul><li>语法： <ul><li>格式：</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">new Vue({</span></span>
<span class="line"><span style="color:#e1e4e8;">    components: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        tagName: options,</span></span>
<span class="line"><span style="color:#e1e4e8;">        tagName: options,</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">new Vue({</span></span>
<span class="line"><span style="color:#24292e;">    components: {</span></span>
<span class="line"><span style="color:#24292e;">        tagName: options,</span></span>
<span class="line"><span style="color:#24292e;">        tagName: options,</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>注意： <ul><li>参数与全局组件一样</li><li>全局组件是通过<code>vue component</code>生成的(没有s)，局部组件用的是components(带s)。</li></ul></li></ul></li></ul><h5 id="解析-1" tabindex="-1">解析 <a class="header-anchor" href="#解析-1" aria-label="Permalink to &quot;解析&quot;">​</a></h5><ul><li>局部组件相当于局部变量</li><li>和原生一样，原生不建议使用全局变量，组件也是，尽量不使用全局组件。</li><li>和全局组件不一样，全局组件是在原生的vue对象上使用component方法，<code>Vue.component</code>，而局部组件是new了一个Vue实例。</li><li>这个被创建的vue实例放在components中，比注册全局组件的方法多了一个s。</li><li>在components中的语法和全局组件中的语法一样。</li><li>局部组件只能在当前实例的vue中使用。</li></ul><br><blockquote><h5 id="示例1-1" tabindex="-1">示例1： <a class="header-anchor" href="#示例1-1" aria-label="Permalink to &quot;示例1：&quot;">​</a></h5><p>局部组件的基本用法</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- navBar组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- js中组件名定义的是驼峰命名，在标签中不允许驼峰，故用-连接 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">nav-bar</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">nav-bar</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- navBar组件的模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">navTemplate</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;食材1&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;食材2&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">navTemplate</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- navBar组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- js中组件名定义的是驼峰命名，在标签中不允许驼峰，故用-连接 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">nav-bar</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">nav-bar</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- navBar组件的模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">navTemplate</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;食材1&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;食材2&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">navTemplate</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 局部组件直接在实例化后的vue中使用compontents,在这里可以放很多个组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#E1E4E8;">        navBar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&quot;#navTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#E1E4E8;">        navList: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// .....</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 局部组件直接在实例化后的vue中使用compontents,在这里可以放很多个组件</span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#24292E;">        navBar: {</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&quot;#navTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#24292E;">        navList: {</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// .....</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><h5 id="示例2-1" tabindex="-1">示例2： <a class="header-anchor" href="#示例2-1" aria-label="Permalink to &quot;示例2：&quot;">​</a></h5><p>在局部组件中存放数据，并定义方法</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- navBar组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">nav-bar</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">nav-bar</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- navBar组件的模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">navTemplate</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 用模板字符串使用数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!--&lt;ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        &lt;li&gt;{{ text[0] }}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        &lt;li&gt;{{ text[1] }}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;/ul&gt;--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 使用v-for遍历 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(item, index) in text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;log&quot;</span><span style="color:#E1E4E8;">&gt;{{ item }}&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">navTemplate</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- navBar组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">nav-bar</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">nav-bar</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- navBar组件的模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">navTemplate</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 用模板字符串使用数据 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!--&lt;ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        &lt;li&gt;{{ text[0] }}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        &lt;li&gt;{{ text[1] }}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;/ul&gt;--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 使用v-for遍历 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;(item, index) in text&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;index&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;log&quot;</span><span style="color:#24292E;">&gt;{{ item }}&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">navTemplate</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#E1E4E8;">        navBar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 定义模板</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&quot;#navTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 数据</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    text: [</span><span style="color:#9ECBFF;">&quot;食材1&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;食材2&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#E1E4E8;">            methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;点击&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#24292E;">        navBar: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 定义模板</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&quot;#navTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 数据</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    text: [</span><span style="color:#032F62;">&quot;食材1&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;食材2&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 方法</span></span>
<span class="line"><span style="color:#24292E;">            methods: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;点击&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><blockquote><h5 id="示例3-1" tabindex="-1">示例3： <a class="header-anchor" href="#示例3-1" aria-label="Permalink to &quot;示例3：&quot;">​</a></h5><p>局部组件有作用域</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- navBar组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">nav-bar</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">nav-bar</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- navList组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">nav-list</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">nav-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 局部组件无法应用，有作用域，只能在app中使用 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;box&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 组件模板2  --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">nav-list</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">nav-list</span><span style="color:#E1E4E8;">&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- navBar组件的模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">navTemplate</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;食材1&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;食材2&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">navTemplate</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- navList组件模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;navListTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;navList233333&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- navBar组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">nav-bar</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">nav-bar</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- navList组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">nav-list</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">nav-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 局部组件无法应用，有作用域，只能在app中使用 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;box&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 组件模板2  --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">nav-list</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">nav-list</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- navBar组件的模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">navTemplate</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;食材1&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;食材2&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">navTemplate</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- navList组件模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;navListTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;navList233333&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#E1E4E8;">        navBar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 定义模板</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&quot;#navTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#E1E4E8;">        navList: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&quot;#navListTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#box&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#24292E;">        navBar: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 定义模板</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&quot;#navTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#24292E;">        navList: {</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&quot;#navListTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#box&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><br><p>关于全局组件和之间的区别</p><ul><li>全局组件和局部组件与js中的全局变量和局部变量非常相似，它们身上所具有的特性，在组件中也能够体现出来。</li></ul><br><h3 id="_3-props" tabindex="-1">3. Props <a class="header-anchor" href="#_3-props" aria-label="Permalink to &quot;3. Props&quot;">​</a></h3><h5 id="定义" tabindex="-1">定义： <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义：&quot;">​</a></h5><p>props：在组件上定义一些属性用来传递数据(传递给组件里的结构使用)</p><h5 id="语法-1" tabindex="-1">语法： <a class="header-anchor" href="#语法-1" aria-label="Permalink to &quot;语法：&quot;">​</a></h5><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">组件里：props:[&#39;属性名&#39;, &#39;属性名&#39;, ...]</span></span>
<span class="line"><span style="color:#e1e4e8;">模板里：{{ 属性名 }}</span></span>
<span class="line"><span style="color:#e1e4e8;">标签里：&lt;组件 属性名=&quot;值&quot; 属性名=&quot;值&quot;&gt;&lt;/组件&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">组件里：props:[&#39;属性名&#39;, &#39;属性名&#39;, ...]</span></span>
<span class="line"><span style="color:#24292e;">模板里：{{ 属性名 }}</span></span>
<span class="line"><span style="color:#24292e;">标签里：&lt;组件 属性名=&quot;值&quot; 属性名=&quot;值&quot;&gt;&lt;/组件&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="解析-2" tabindex="-1">解析 <a class="header-anchor" href="#解析-2" aria-label="Permalink to &quot;解析&quot;">​</a></h5><ul><li>用来传递数据</li><li>和形参与实参差不多</li><li>html结构相同，但数据不同，组件传递数据</li></ul><br><blockquote><h5 id="示例1-2" tabindex="-1">示例1： <a class="header-anchor" href="#示例1-2" aria-label="Permalink to &quot;示例1：&quot;">​</a></h5><p>props的基本用法</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 每个li是一个组件，外面用ul包起来 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- boxList组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 组件结构相同，数据不同，给每个组件的props中定义的属性赋值 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;可乐&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">price</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;112&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;雪碧&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">price</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;333&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- boxList组件模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;boxListTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 使用模板字符串的方式渲染props传递过来的值 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">         &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{{ title }}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">         &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{{ price }}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 每个li是一个组件，外面用ul包起来 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- boxList组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 组件结构相同，数据不同，给每个组件的props中定义的属性赋值 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;可乐&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">price</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;112&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;雪碧&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">price</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;333&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- boxList组件模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;boxListTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 使用模板字符串的方式渲染props传递过来的值 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">         &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;{{ title }}&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">         &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;{{ price }}&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        boxList: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&quot;#boxListTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// props 在组件上定义一些属性用来传递数据</span></span>
<span class="line"><span style="color:#E1E4E8;">            props: [</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;price&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        boxList: {</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&quot;#boxListTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// props 在组件上定义一些属性用来传递数据</span></span>
<span class="line"><span style="color:#24292E;">            props: [</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;price&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><br><h3 id="_4-slot" tabindex="-1">4. Slot <a class="header-anchor" href="#_4-slot" aria-label="Permalink to &quot;4. Slot&quot;">​</a></h3><h5 id="定义-1" tabindex="-1">定义： <a class="header-anchor" href="#定义-1" aria-label="Permalink to &quot;定义：&quot;">​</a></h5><p>slot：插槽</p><h5 id="语法-2" tabindex="-1">语法： <a class="header-anchor" href="#语法-2" aria-label="Permalink to &quot;语法：&quot;">​</a></h5>`,81),E=s("li",null,"组件标签对里使用(标签对里的标签能被解析)",-1),i=s("li",null,"注意：插槽只能写一个，多写会报错",-1),y=s("li",null,[n("组件标签对里使用："),s("p",{slot:"属性名"})],-1),u=p(`<h5 id="解析-3" tabindex="-1">解析 <a class="header-anchor" href="#解析-3" aria-label="Permalink to &quot;解析&quot;">​</a></h5><ul><li>在使用props传递数据的时候，在使用组件的标签对中，数据都当做属性传递进来。这种方法传递的数据比较少比较清楚，但数据量一多就显得累赘。</li><li>在vue中，组件和标签是一样的，为了更像html标签，组件中传递数据可以用slot这种形式传递，结构会更清晰。</li><li>举个例子，就像一台电脑，它有各种插槽用来放显卡，内存等等，还有usb接口等等，这些插槽，就相当于vue中的slot。</li><li>在组件标签对中不会显示里面的标签，组件定义好之后，就相当于在内部已经成为一个完全封闭的状态了。</li></ul><br><blockquote><h5 id="示例1-3" tabindex="-1">示例1： <a class="header-anchor" href="#示例1-3" aria-label="Permalink to &quot;示例1：&quot;">​</a></h5><p>slot的基本用法（传递数据）</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- boxList组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 组件标签对中的内容不显示 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- p标签中若有数据，使用slot分发内容，在组件的标签对里面放的都是数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    	&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;使用slot才能显示....&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    	&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;template里面使用一个slot就会全部显示&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    	...</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- boxList组件模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;boxListTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 插槽在template中定义，相当于划一道口，想在哪里显示，slot插槽就放在哪里 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;test&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 组件标签对中的内容在h1下面显示，它这里是显示组件标签对中所有的数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- boxList组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 组件标签对中的内容不显示 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- p标签中若有数据，使用slot分发内容，在组件的标签对里面放的都是数据 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    	&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;使用slot才能显示....&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    	&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;template里面使用一个slot就会全部显示&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    	...</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- boxList组件模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;boxListTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 插槽在template中定义，相当于划一道口，想在哪里显示，slot插槽就放在哪里 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;test&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 组件标签对中的内容在h1下面显示，它这里是显示组件标签对中所有的数据 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        boxList: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&quot;#boxListTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        boxList: {</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&quot;#boxListTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><h5 id="示例2-2" tabindex="-1">示例2： <a class="header-anchor" href="#示例2-2" aria-label="Permalink to &quot;示例2：&quot;">​</a></h5><p>slot的基本用法（具名插槽）</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- boxList组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 使用具名插槽 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;cc1&quot;</span><span style="color:#E1E4E8;">&gt;插槽1&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;cc2&quot;</span><span style="color:#E1E4E8;">&gt;插槽2&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- boxList组件模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;boxListTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 插槽在template中定义，相当于每把刀上有一个名字，刀每划一道口，有特定的含义，使用的时候根据刀名字使用 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;test&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 可以用名称定义显示部分（具名插槽） --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;cc1&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;cc2&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- boxList组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 使用具名插槽 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;cc1&quot;</span><span style="color:#24292E;">&gt;插槽1&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	    &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;cc2&quot;</span><span style="color:#24292E;">&gt;插槽2&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- boxList组件模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;boxListTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 插槽在template中定义，相当于每把刀上有一个名字，刀每划一道口，有特定的含义，使用的时候根据刀名字使用 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;test&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 可以用名称定义显示部分（具名插槽） --&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;cc1&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;cc2&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        boxList: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&quot;#boxListTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        boxList: {</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&quot;#boxListTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><h5 id="示例3-2" tabindex="-1">示例3： <a class="header-anchor" href="#示例3-2" aria-label="Permalink to &quot;示例3：&quot;">​</a></h5><p>slot传递数据</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- boxList组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 在组件标签对中使用具名插槽，并可以按照传统html写法把数据添加上去，一个标签对就是一个li，只要把组件模板中的插槽拿过来就可以了 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">&gt;可乐&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;price&quot;</span><span style="color:#E1E4E8;">&gt;22&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- boxList组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">&gt;雪碧&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;price&quot;</span><span style="color:#E1E4E8;">&gt;33&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- boxList组件模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;boxListTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 在template中定义具名插槽，这里是具体的html结构，在li结构中 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">         	&lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">         	&lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;price&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">         	&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;食品介绍&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- boxList组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 在组件标签对中使用具名插槽，并可以按照传统html写法把数据添加上去，一个标签对就是一个li，只要把组件模板中的插槽拿过来就可以了 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">&gt;可乐&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;price&quot;</span><span style="color:#24292E;">&gt;22&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- boxList组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">&gt;雪碧&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;price&quot;</span><span style="color:#24292E;">&gt;33&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- boxList组件模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;boxListTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 在template中定义具名插槽，这里是具体的html结构，在li结构中 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">         	&lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">         	&lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;price&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">         	&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;食品介绍&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        boxList: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&quot;#boxListTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        boxList: {</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&quot;#boxListTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><br><h3 id="_5-父子组件" tabindex="-1">5. 父子组件 <a class="header-anchor" href="#_5-父子组件" aria-label="Permalink to &quot;5. 父子组件&quot;">​</a></h3><h5 id="_5-1-父子组件的定义" tabindex="-1">5-1. 父子组件的定义 <a class="header-anchor" href="#_5-1-父子组件的定义" aria-label="Permalink to &quot;5-1. 父子组件的定义&quot;">​</a></h5><h6 id="语法-3" tabindex="-1">语法： <a class="header-anchor" href="#语法-3" aria-label="Permalink to &quot;语法：&quot;">​</a></h6><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// vue容器</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        父组件名: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    template: </span><span style="color:#9ECBFF;">&quot;父组件template对应的id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    </span></span>
<span class="line"><span style="color:#E1E4E8;">    	    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	        </span><span style="color:#6A737D;">// 父组件数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    </span></span>
<span class="line"><span style="color:#E1E4E8;">    	    </span><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	子组件名: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	    template: </span><span style="color:#9ECBFF;">&quot;子组件template对应的id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	},</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	</span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    	     }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// vue容器</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        父组件名: {</span></span>
<span class="line"><span style="color:#24292E;">    	    template: </span><span style="color:#032F62;">&quot;父组件template对应的id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    	    </span></span>
<span class="line"><span style="color:#24292E;">    	    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    	        </span><span style="color:#6A737D;">// 父组件数据</span></span>
<span class="line"><span style="color:#24292E;">    	    },</span></span>
<span class="line"><span style="color:#24292E;">    	    </span></span>
<span class="line"><span style="color:#24292E;">    	    </span><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#24292E;">    	    components: {</span></span>
<span class="line"><span style="color:#24292E;">    	    	子组件名: {</span></span>
<span class="line"><span style="color:#24292E;">    	    	    template: </span><span style="color:#032F62;">&quot;子组件template对应的id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    	    	},</span></span>
<span class="line"><span style="color:#24292E;">    	    	</span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">    	     }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h6 id="解析-4" tabindex="-1">解析: <a class="header-anchor" href="#解析-4" aria-label="Permalink to &quot;解析:&quot;">​</a></h6><ul><li>一个组件就是一个功能里面的结构，这个结构可能包含在其他的结构当中，而这个结构就是外面那个结构的子组件，包围子组件的那个结构就是父组件。</li></ul><blockquote><h5 id="示例1-4" tabindex="-1">示例1： <a class="header-anchor" href="#示例1-4" aria-label="Permalink to &quot;示例1：&quot;">​</a></h5><p>基本的父子组件</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">&lt;!-- boxList组件(父组件) --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">box-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- boxList组件(父组件)模板 --&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 父组件模板使用ul标签 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;boxListTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 在父组件中使用子组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 子组件使用插槽 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	</span><span style="color:#6A737D;">&lt;!-- 子组件只能在父组件模板里面调用 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	</span><span style="color:#6A737D;">&lt;!-- 定义所有插槽的值(定义数据) --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	&lt;</span><span style="color:#FDAEB7;font-style:italic;">item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    		&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">&gt;可乐&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    		&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;price&quot;</span><span style="color:#E1E4E8;">&gt;44&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	    </span></span>
<span class="line"><span style="color:#E1E4E8;">     	&lt;</span><span style="color:#FDAEB7;font-style:italic;">item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    		&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">&gt;雪碧&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    		&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;price&quot;</span><span style="color:#E1E4E8;">&gt;33&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- item组件(子组件)模板 --&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 子组件模板就是一个个li标签 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;itemTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">&lt;!-- html结构，值用插槽代替 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">         	&lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">         	&lt;</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;price&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">         	&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;食品介绍&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     	&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">&lt;!-- boxList组件(父组件) --&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">box-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- boxList组件(父组件)模板 --&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 父组件模板使用ul标签 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;boxListTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 在父组件中使用子组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 子组件使用插槽 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	</span><span style="color:#6A737D;">&lt;!-- 子组件只能在父组件模板里面调用 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	</span><span style="color:#6A737D;">&lt;!-- 定义所有插槽的值(定义数据) --&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	&lt;</span><span style="color:#B31D28;font-style:italic;">item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    		&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">&gt;可乐&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    		&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;price&quot;</span><span style="color:#24292E;">&gt;44&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	    &lt;/</span><span style="color:#B31D28;font-style:italic;">item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	    </span></span>
<span class="line"><span style="color:#24292E;">     	&lt;</span><span style="color:#B31D28;font-style:italic;">item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    		&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">&gt;雪碧&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    		&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;price&quot;</span><span style="color:#24292E;">&gt;33&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	    &lt;/</span><span style="color:#B31D28;font-style:italic;">item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- item组件(子组件)模板 --&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 子组件模板就是一个个li标签 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;itemTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">&lt;!-- html结构，值用插槽代替 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">         	&lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">         	&lt;</span><span style="color:#22863A;">slot</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;price&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">         	&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;食品介绍&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     	&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        boxList: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 父组件模板</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    template: </span><span style="color:#9ECBFF;">&quot;#boxListTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    </span></span>
<span class="line"><span style="color:#E1E4E8;">    	    </span><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	item: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	    </span><span style="color:#6A737D;">// 子组件模板</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	    template: </span><span style="color:#9ECBFF;">&quot;#itemTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	}</span></span>
<span class="line"><span style="color:#E1E4E8;">    	     }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        boxList: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 父组件模板</span></span>
<span class="line"><span style="color:#24292E;">    	    template: </span><span style="color:#032F62;">&quot;#boxListTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    	    </span></span>
<span class="line"><span style="color:#24292E;">    	    </span><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#24292E;">    	    components: {</span></span>
<span class="line"><span style="color:#24292E;">    	    	item: {</span></span>
<span class="line"><span style="color:#24292E;">    	    	    </span><span style="color:#6A737D;">// 子组件模板</span></span>
<span class="line"><span style="color:#24292E;">    	    	    template: </span><span style="color:#032F62;">&quot;#itemTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    	    	}</span></span>
<span class="line"><span style="color:#24292E;">    	     }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>关于组件间如何传递数据</p><ul><li>父组件向子组件传递数据(自动传) <ul><li>使用props属性传递数据</li></ul></li><li>子组件向父组件传递数据(主动传，事件触发) <ul><li>使用自定义事件</li></ul></li></ul><p>关于自定义事件</p><ul><li>在发数据组件的methods里定义一个方法，方法内容如下：<code>this.$emit(&#39;event&#39;, value)</code><ul><li>event：自定义事件名称</li><li>value：要传递的数据(可选参数)</li></ul></li><li>在发数据组件的标签里 <ul><li><code>&lt;component @自定义事件名称=&quot;函数名&quot;&gt;&lt;/component&gt;</code></li></ul></li><li>在接收数据组件的methods里</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">函数名(val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // val就是接收到的数据</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">函数名(val) {</span></span>
<span class="line"><span style="color:#24292e;">    // val就是接收到的数据</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="_5-2-父组件给子组件传递数据" tabindex="-1">5-2. 父组件给子组件传递数据 <a class="header-anchor" href="#_5-2-父组件给子组件传递数据" aria-label="Permalink to &quot;5-2. 父组件给子组件传递数据&quot;">​</a></h5><h6 id="语法-4" tabindex="-1">语法： <a class="header-anchor" href="#语法-4" aria-label="Permalink to &quot;语法：&quot;">​</a></h6><ul><li>父组件向子组件传递数据(自动传)</li><li>使用props属性</li></ul><h5 id="解析-5" tabindex="-1">解析 <a class="header-anchor" href="#解析-5" aria-label="Permalink to &quot;解析&quot;">​</a></h5><ul><li>父亲可以给儿子零花钱，即父组件可以给子组件传递数据，单向数据流</li></ul><blockquote><h5 id="示例1-5" tabindex="-1">示例1： <a class="header-anchor" href="#示例1-5" aria-label="Permalink to &quot;示例1：&quot;">​</a></h5><p>父组件给子组件传递数据(外-&gt;里)</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#FDAEB7;font-style:italic;">father</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">father</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- father组件(父组件)模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;fatherTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;父组件&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;把&quot;{{ name }}&quot;传给子组件&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">            使用props传递数据给子组件</span></span>
<span class="line"><span style="color:#6A737D;">            1. 在子组件定义一个props用来接收父组件传递过来的数据</span></span>
<span class="line"><span style="color:#6A737D;">            2. 在父组件中引用子组件，并给该子组件绑定上在子组件上已经定义的props属性名</span></span>
<span class="line"><span style="color:#6A737D;">            3. 绑定的props属性名的值，就是父组件要传过来给子组件的值，这里是name，即取到父组件的name值</span></span>
<span class="line"><span style="color:#6A737D;">            4. 在子组件的template使用数据</span></span>
<span class="line"><span style="color:#6A737D;">        --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#FDAEB7;font-style:italic;">son</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:fatherdata</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">son</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- son组件(子组件)模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sonTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;子组件&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;这是儿子&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 此时已经将父组件的值通过props传过来了，要使用父组件中的值，就只需要使用在子组件中定义的props属性，并把定义的props属性名用模板字符串的方式在子组件模板中表现出来就行了 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;{{ fatherdata }}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#B31D28;font-style:italic;">father</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">father</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- father组件(父组件)模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;fatherTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;父组件&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;把&quot;{{ name }}&quot;传给子组件&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">            使用props传递数据给子组件</span></span>
<span class="line"><span style="color:#6A737D;">            1. 在子组件定义一个props用来接收父组件传递过来的数据</span></span>
<span class="line"><span style="color:#6A737D;">            2. 在父组件中引用子组件，并给该子组件绑定上在子组件上已经定义的props属性名</span></span>
<span class="line"><span style="color:#6A737D;">            3. 绑定的props属性名的值，就是父组件要传过来给子组件的值，这里是name，即取到父组件的name值</span></span>
<span class="line"><span style="color:#6A737D;">            4. 在子组件的template使用数据</span></span>
<span class="line"><span style="color:#6A737D;">        --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#B31D28;font-style:italic;">son</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:fatherdata</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">son</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- son组件(子组件)模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sonTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;子组件&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;这是儿子&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 此时已经将父组件的值通过props传过来了，要使用父组件中的值，就只需要使用在子组件中定义的props属性，并把定义的props属性名用模板字符串的方式在子组件模板中表现出来就行了 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;{{ fatherdata }}&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        father: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    template: </span><span style="color:#9ECBFF;">&quot;#fatherTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    </span></span>
<span class="line"><span style="color:#E1E4E8;">    	    </span><span style="color:#6A737D;">// 父组件数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    		name: </span><span style="color:#9ECBFF;">&quot;老王&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    		</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    		</span><span style="color:#6A737D;">// 用来存放子组件的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    		sonData: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	}</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	son: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	    template: </span><span style="color:#9ECBFF;">&quot;#sonTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	    </span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	    </span><span style="color:#6A737D;">// 父组件向子组件传递数据，子组件需要定义一个props，用来接收父组件的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">                    props: [</span><span style="color:#9ECBFF;">&#39;fatherdata&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    	    	}</span></span>
<span class="line"><span style="color:#E1E4E8;">    	     }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        father: {</span></span>
<span class="line"><span style="color:#24292E;">    	    template: </span><span style="color:#032F62;">&quot;#fatherTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    	    </span></span>
<span class="line"><span style="color:#24292E;">    	    </span><span style="color:#6A737D;">// 父组件数据</span></span>
<span class="line"><span style="color:#24292E;">    	    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    	    	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    	    		name: </span><span style="color:#032F62;">&quot;老王&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    	    		</span></span>
<span class="line"><span style="color:#24292E;">    	    		</span><span style="color:#6A737D;">// 用来存放子组件的数据</span></span>
<span class="line"><span style="color:#24292E;">    	    		sonData: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    	    	}</span></span>
<span class="line"><span style="color:#24292E;">    	    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#24292E;">    	    components: {</span></span>
<span class="line"><span style="color:#24292E;">    	    	son: {</span></span>
<span class="line"><span style="color:#24292E;">    	    	    template: </span><span style="color:#032F62;">&quot;#sonTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    	    	    </span></span>
<span class="line"><span style="color:#24292E;">    	    	    </span><span style="color:#6A737D;">// 父组件向子组件传递数据，子组件需要定义一个props，用来接收父组件的数据</span></span>
<span class="line"><span style="color:#24292E;">                    props: [</span><span style="color:#032F62;">&#39;fatherdata&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    	    	}</span></span>
<span class="line"><span style="color:#24292E;">    	     }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h5 id="_5-3-子组件给父组件传递数据" tabindex="-1">5-3. 子组件给父组件传递数据 <a class="header-anchor" href="#_5-3-子组件给父组件传递数据" aria-label="Permalink to &quot;5-3. 子组件给父组件传递数据&quot;">​</a></h5><h6 id="语法-5" tabindex="-1">语法： <a class="header-anchor" href="#语法-5" aria-label="Permalink to &quot;语法：&quot;">​</a></h6><ul><li>子组件向父组件传递数据(主动传，事件触发)</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在发数据组件的methods里定义一个方法</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;event&#39;</span><span style="color:#E1E4E8;">, value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在发数据组件的标签里</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">component</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@自定义事件名称=&quot;函数名&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在接收数据组件的methods里</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">函数名(val)</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// val就是接收到的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在发数据组件的methods里定义一个方法</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;event&#39;</span><span style="color:#24292E;">, value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在发数据组件的标签里</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">component</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@自定义事件名称=&quot;函数名&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在接收数据组件的methods里</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">函数名(val)</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// val就是接收到的数据</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h6 id="解析-6" tabindex="-1">解析 <a class="header-anchor" href="#解析-6" aria-label="Permalink to &quot;解析&quot;">​</a></h6><ul><li>儿子可以孝敬父亲，双向数据流。</li></ul><blockquote><h5 id="示例1-6" tabindex="-1">示例1： <a class="header-anchor" href="#示例1-6" aria-label="Permalink to &quot;示例1：&quot;">​</a></h5><p>slot的基本用法（传递数据）</p></blockquote><p>html:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#FDAEB7;font-style:italic;">father</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">father</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 父组件模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;fatherTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       	&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;父组件&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       	&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;把&quot;{{ name }}&quot;传给子组件&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       	&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;{{ sondata }}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">&lt;!-- 在子组件标签绑定属性 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">&lt;!-- 在子组件用props属性把已经绑定的属性名写进去 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">&lt;!-- 在子组件的template使用数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">&lt;!-- getdata用来接收数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       	&lt;</span><span style="color:#FDAEB7;font-style:italic;">son</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:fatherdata</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@getdata</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;getval&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">son</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 子组件模板 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sonTemplate&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      	&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;子组件&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      	&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;这是子组件&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      	&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;父组件传过来的数据：“{{ fatherdata }}”&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">&lt;!-- 给父组件传数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;send&quot;</span><span style="color:#E1E4E8;">&gt;给父组件传数据&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">引入vue.js</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 用来放vue的容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#B31D28;font-style:italic;">father</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">father</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 父组件模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;fatherTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">       	&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;父组件&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">       	&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;把&quot;{{ name }}&quot;传给子组件&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">       	&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;{{ sondata }}&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">&lt;!-- 在子组件标签绑定属性 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">&lt;!-- 在子组件用props属性把已经绑定的属性名写进去 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">&lt;!-- 在子组件的template使用数据 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">&lt;!-- getdata用来接收数据 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">       	&lt;</span><span style="color:#B31D28;font-style:italic;">son</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:fatherdata</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@getdata</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;getval&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">son</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 子组件模板 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sonTemplate&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      	&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;子组件&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      	&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;这是子组件&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      	&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;父组件传过来的数据：“{{ fatherdata }}”&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">&lt;!-- 给父组件传数据 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;send&quot;</span><span style="color:#24292E;">&gt;给父组件传数据&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js s --&gt;</span></span>
<span class="line"><span style="color:#24292E;">引入vue.js</span></span>
<span class="line"><span style="color:#24292E;">...</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- js e --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>js：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        father: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        	    template: </span><span style="color:#9ECBFF;">&quot;#fatherTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        	    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        	    	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        	    		name: </span><span style="color:#9ECBFF;">&quot;老王&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        	    		sondata: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        	    	}</span></span>
<span class="line"><span style="color:#E1E4E8;">        	    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">               methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 拿到子组件给父组件传递的值</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">getval</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.sondata </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">               },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        	     components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        	    	son: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        	    	  template: </span><span style="color:#9ECBFF;">&quot;#sonTemplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        props: [</span><span style="color:#9ECBFF;">&#39;fatherdata&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#6A737D;">// 只能通过事件给父组件传数据(自定义事件)</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#6A737D;">// 在发数据的组件(子组件) 定义一个方法</span></span>
<span class="line"><span style="color:#E1E4E8;">                                message: </span><span style="color:#9ECBFF;">&quot;你好，我是小王~~~~~&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                        methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#6A737D;">// 给父组件传数据</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#6A737D;">// alert();</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#6A737D;">// 触发自定义事件</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#6A737D;">// $emit(&quot;事件名称&quot;, 传递的数据)</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;getdata&quot;</span><span style="color:#E1E4E8;">,  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.message);</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }</span></span>
<span class="line"><span style="color:#E1E4E8;">                        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        	    	}</span></span>
<span class="line"><span style="color:#E1E4E8;">        	     }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    components: {</span></span>
<span class="line"><span style="color:#24292E;">        father: {</span></span>
<span class="line"><span style="color:#24292E;">        	    template: </span><span style="color:#032F62;">&quot;#fatherTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        	    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        	    	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        	    		name: </span><span style="color:#032F62;">&quot;老王&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        	    		sondata: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        	    	}</span></span>
<span class="line"><span style="color:#24292E;">        	    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">               methods: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 拿到子组件给父组件传递的值</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">getval</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.sondata </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">               },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        	     components: {</span></span>
<span class="line"><span style="color:#24292E;">        	    	son: {</span></span>
<span class="line"><span style="color:#24292E;">        	    	  template: </span><span style="color:#032F62;">&quot;#sonTemplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        props: [</span><span style="color:#032F62;">&#39;fatherdata&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#6A737D;">// 只能通过事件给父组件传数据(自定义事件)</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#6A737D;">// 在发数据的组件(子组件) 定义一个方法</span></span>
<span class="line"><span style="color:#24292E;">                                message: </span><span style="color:#032F62;">&quot;你好，我是小王~~~~~&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            }</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                        methods: {</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6A737D;">// 给父组件传数据</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#6A737D;">// alert();</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#6A737D;">// 触发自定义事件</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#6A737D;">// $emit(&quot;事件名称&quot;, 传递的数据)</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;getdata&quot;</span><span style="color:#24292E;">,  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.message);</span></span>
<span class="line"><span style="color:#24292E;">                            }</span></span>
<span class="line"><span style="color:#24292E;">                        }</span></span>
<span class="line"><span style="color:#24292E;">        	    	}</span></span>
<span class="line"><span style="color:#24292E;">        	     }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><hr><br><h2 id="_2-vue-脚手架" tabindex="-1">2. vue 脚手架 <a class="header-anchor" href="#_2-vue-脚手架" aria-label="Permalink to &quot;2. vue 脚手架&quot;">​</a></h2><h3 id="_1-vue脚手架搭建步骤" tabindex="-1">1. vue脚手架搭建步骤 <a class="header-anchor" href="#_1-vue脚手架搭建步骤" aria-label="Permalink to &quot;1. vue脚手架搭建步骤&quot;">​</a></h3><ol><li>安装node.js <ul><li>在命令提示符输入<code>node -v</code>和<code>npm -v</code>查看是否安装成功</li></ul></li><li>安装vue3 <ul><li><code>npm install -g @vue/cli</code></li></ul></li><li>创建项目 <ul><li><code>vue create 项目名称</code><ul><li>上下箭头选择需要安装的东西，空格确认，回车确定选项进入下一步</li></ul></li></ul></li></ol><h3 id="_2-vue脚手架相关命令" tabindex="-1">2. vue脚手架相关命令 <a class="header-anchor" href="#_2-vue脚手架相关命令" aria-label="Permalink to &quot;2. vue脚手架相关命令&quot;">​</a></h3><ul><li>vue -V 查看版本</li><li>vue -h 查看命令帮助</li><li>vue create 创建项目</li><li>vue add 增加一个插件</li><li>vue invoke 在创建好的项目里去调用插件</li><li>vue inspect 检查webpack配置</li><li>vue serve 启动一个项目</li><li>vue build 打包项目</li><li>vue ui 打开ui库</li><li>vue init 声明一个项目</li></ul><h3 id="_3-vue脚手架目录解析" tabindex="-1">3. vue脚手架目录解析 <a class="header-anchor" href="#_3-vue脚手架目录解析" aria-label="Permalink to &quot;3. vue脚手架目录解析&quot;">​</a></h3><ul><li>node-modules是nodejs里的模块</li><li>public目录：index.html为模板文件</li><li>src目录：开发目录 <ul><li>assets 静态资源文件夹(图片、外部的js、css文件)</li><li>components 公共组件文件夹</li><li>App.vue 项目的主组件</li><li>main.js 入口文件</li><li>router.js 路由配置文件</li><li>store.js vue的状态文件</li></ul></li></ul><h3 id="_4-vue脚手架执行简述" tabindex="-1">4. vue脚手架执行简述 <a class="header-anchor" href="#_4-vue脚手架执行简述" aria-label="Permalink to &quot;4. vue脚手架执行简述&quot;">​</a></h3><ol><li>App.vue组件会渲染到public文件夹下的index.html文件中</li><li>之后他会去找main.js,他是一个入口文件 <ul><li>打包之后的index.html也会引入这个js，只是打包之后他变成了app.js</li><li>框架中的主要逻辑会在这里面去写，包括引入的各种文件</li></ul></li><li>去读取路由（页面的配置都放在路由当中了）</li></ol><hr><br><h2 id="_3-vue-生命周期" tabindex="-1">3. vue 生命周期 <a class="header-anchor" href="#_3-vue-生命周期" aria-label="Permalink to &quot;3. vue 生命周期&quot;">​</a></h2><blockquote><p>vue实例从开始创建到销毁经历了什么?</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vue生命周期最开始：</span></span>
<span class="line"><span style="color:#e1e4e8;">new Vue()</span></span>
<span class="line"><span style="color:#e1e4e8;">初始化事件和生命周期</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 生命周期里面有很多方法(钩子)需要进行初始化</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vue生命周期最开始：</span></span>
<span class="line"><span style="color:#24292e;">new Vue()</span></span>
<span class="line"><span style="color:#24292e;">初始化事件和生命周期</span></span>
<span class="line"><span style="color:#24292e;">    - 生命周期里面有很多方法(钩子)需要进行初始化</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol><li>beforeCreate 创建实例前触发 <ul><li>此时实例未被创建，在这里可以放预加载loading</li></ul></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">beforeCreate之后：</span></span>
<span class="line"><span style="color:#e1e4e8;">初始化数据、方法等</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 初始化vue中的data、methods等里面的加载数据绑定事件等的东西</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 这个步骤走完之后实例才算是被创建完成</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">beforeCreate之后：</span></span>
<span class="line"><span style="color:#24292e;">初始化数据、方法等</span></span>
<span class="line"><span style="color:#24292e;">    - 初始化vue中的data、methods等里面的加载数据绑定事件等的东西</span></span>
<span class="line"><span style="color:#24292e;">    - 这个步骤走完之后实例才算是被创建完成</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>created 创建实例后触发 <ul><li>这个时候事件和数据就可以被使用了</li><li>这时候实例被创建完成了，但dom还没有被创建，所以这时候页面中什么东西都没有</li><li>页面未被展示，在这边大多是用作请求数据时触发</li><li>如果有loading的话，在这个地方就可以被结束了</li><li>接下来开始渲染dom</li></ul></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">渲染dom</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 渲染dom时，首选会检查有没有el这个选项，如果没有会去检查$mount()</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 需要知道渲染dom到什么地方</span></span>
<span class="line"><span style="color:#e1e4e8;">        - new Vue({el: &quot;#app&quot;});</span></span>
<span class="line"><span style="color:#e1e4e8;">        - new Vue({}).$mount(&quot;#app&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 他会根据template去渲染dom</span></span>
<span class="line"><span style="color:#e1e4e8;">        - 他会去检查有没有template这个属性，如果有就渲染，如果没有的话，他会根据el标签去渲染</span></span>
<span class="line"><span style="color:#e1e4e8;">    - 这些操作是在虚拟dom中去编译的，虚拟dom是为了提升性能</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">渲染dom</span></span>
<span class="line"><span style="color:#24292e;">    - 渲染dom时，首选会检查有没有el这个选项，如果没有会去检查$mount()</span></span>
<span class="line"><span style="color:#24292e;">        - 需要知道渲染dom到什么地方</span></span>
<span class="line"><span style="color:#24292e;">        - new Vue({el: &quot;#app&quot;});</span></span>
<span class="line"><span style="color:#24292e;">        - new Vue({}).$mount(&quot;#app&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    - 他会根据template去渲染dom</span></span>
<span class="line"><span style="color:#24292e;">        - 他会去检查有没有template这个属性，如果有就渲染，如果没有的话，他会根据el标签去渲染</span></span>
<span class="line"><span style="color:#24292e;">    - 这些操作是在虚拟dom中去编译的，虚拟dom是为了提升性能</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol><li>beforeMount 渲染dom前触发 <ul><li>在这一步前面的虚拟dom已经渲染(编译)完成了</li><li>此时会渲染真实dom</li></ul></li><li>mounted 渲染dom后触发 <ul><li>如果需要在页面显示之后做一些事件，需要将他们放到这里</li></ul></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">当页面渲染完成之后，可能页面会有修改</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">当页面渲染完成之后，可能页面会有修改</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>beforeUpdate 数据更改前触发</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">页面修改时触发，此时的修改也是在虚拟dom中修改的</span></span>
<span class="line"><span style="color:#e1e4e8;">此时会触发vue的diff算法，如果和之前一样，就不渲染，如果和之前不同，就渲染</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">页面修改时触发，此时的修改也是在虚拟dom中修改的</span></span>
<span class="line"><span style="color:#24292e;">此时会触发vue的diff算法，如果和之前一样，就不渲染，如果和之前不同，就渲染</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>updated 数据更改后触发 <ul><li>更新渲染完成之后触发</li></ul></li><li>beforeDestroy 实例销毁前触发 <ul><li>中间有一个销毁的阶段，销毁数据、事件，如果有定时器，会销毁定时器等</li></ul></li><li>destroyed 实例销毁后触发 <ul><li>此时vue组件的生命周期就结束了</li></ul></li></ol><hr><br><h2 id="_4-vue-路由" tabindex="-1">4. vue 路由 <a class="header-anchor" href="#_4-vue-路由" aria-label="Permalink to &quot;4. vue 路由&quot;">​</a></h2><blockquote><p>根据url锚点路径，在容器中加载不同的模块</p></blockquote><h3 id="_1-路由配置" tabindex="-1">1. 路由配置 <a class="header-anchor" href="#_1-路由配置" aria-label="Permalink to &quot;1. 路由配置&quot;">​</a></h3><h4 id="_1-路由配置一" tabindex="-1">1. 路由配置一 <a class="header-anchor" href="#_1-路由配置一" aria-label="Permalink to &quot;1. 路由配置一&quot;">​</a></h4><ol><li>引入vue-router.js库</li><li>定义路由，并对应router配置参数</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 实例化一个路由对象</span></span>
<span class="line"><span style="color:#B392F0;">router</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VueRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    routers: [  </span><span style="color:#6A737D;">// 放置所有的路由</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// {path:&#39;路径&#39;, name:&#39;路由名称&#39;, component: &#39;路由对应的组件名&#39;},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {path:</span><span style="color:#9ECBFF;">&#39;/dishes&#39;</span><span style="color:#E1E4E8;">, name:</span><span style="color:#9ECBFF;">&#39;dishes&#39;</span><span style="color:#E1E4E8;">, component:Dishes},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 实例化一个路由对象</span></span>
<span class="line"><span style="color:#6F42C1;">router</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    routers: [  </span><span style="color:#6A737D;">// 放置所有的路由</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// {path:&#39;路径&#39;, name:&#39;路由名称&#39;, component: &#39;路由对应的组件名&#39;},</span></span>
<span class="line"><span style="color:#24292E;">        {path:</span><span style="color:#032F62;">&#39;/dishes&#39;</span><span style="color:#24292E;">, name:</span><span style="color:#032F62;">&#39;dishes&#39;</span><span style="color:#24292E;">, component:Dishes},</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3"><li>使用<code>&lt;router-link&gt;</code>组件来导航，并通过to属性指定链接 <ul><li><code>&lt;router-link to=&quot;/about&quot;&gt;关于&lt;/router-link&gt;</code></li></ul></li><li>定义路由出口 <ul><li><code>&lt;router-view /&gt;</code></li></ul></li></ol><h4 id="_2-路由配置二" tabindex="-1">2. 路由配置二 <a class="header-anchor" href="#_2-路由配置二" aria-label="Permalink to &quot;2. 路由配置二&quot;">​</a></h4><ol><li>引入vue-router.js库</li><li>定义(路由)组件</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 第一种</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Home</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {template: </span><span style="color:#9ECBFF;">&#39;&lt;h2&gt;home&lt;h2&gt;&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第二种</span></span>
<span class="line"><span style="color:#6A737D;">// Vue.extend是用来注册组件的,是一个全局的方法</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">News</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Vue.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span><span style="color:#B392F0;">template</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&lt;h2&gt;news&lt;h2&gt;&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 第一种</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Home</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {template: </span><span style="color:#032F62;">&#39;&lt;h2&gt;home&lt;h2&gt;&#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第二种</span></span>
<span class="line"><span style="color:#6A737D;">// Vue.extend是用来注册组件的,是一个全局的方法</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">News</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Vue.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    {</span><span style="color:#6F42C1;">template</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&lt;h2&gt;news&lt;h2&gt;&#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li>定义路由</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {path:</span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">, name:</span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">, component:Home},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routers</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {path:</span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">, name:</span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">, component:Home},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">......</span></span>
<span class="line"><span style="color:#24292E;">];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="4"><li>创建router实例(路由对象)，并对router配置参数</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VueRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    routers</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    routers</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="5"><li>使用<code>&lt;router-link&gt;</code>组件来导航，并通过to属性指定链接</li><li>定义路由出口</li></ol><h3 id="_2-动态路由匹配" tabindex="-1">2. 动态路由匹配 <a class="header-anchor" href="#_2-动态路由匹配" aria-label="Permalink to &quot;2. 动态路由匹配&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// html</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;new&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/news/1&quot;</span><span style="color:#E1E4E8;">&gt;新闻1&lt;/</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/news/2&quot;</span><span style="color:#E1E4E8;">&gt;新闻2&lt;/</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;newList&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        这是传过来的id:{{ this.$route.params.id }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">New</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {template</span><span style="color:#9ECBFF;">&#39;#new&#39;</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NewList</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {template</span><span style="color:#9ECBFF;">&#39;#newList&#39;</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 点击某个新闻要跳转到新的页面</span></span>
<span class="line"><span style="color:#6A737D;">// 这个页面要匹配到动态路由的话就用:id,动态路径的参数</span></span>
<span class="line"><span style="color:#6A737D;">// 这个设置完之后,参数值会设置到this.$route.params</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {path:</span><span style="color:#9ECBFF;">&#39;/new&#39;</span><span style="color:#E1E4E8;">, components:New}</span></span>
<span class="line"><span style="color:#E1E4E8;">    {path:</span><span style="color:#9ECBFF;">&#39;/news/:id&#39;</span><span style="color:#E1E4E8;">, components:NewList}</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VueRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    routers</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    el: </span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    router</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// html</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;new&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/news/1&quot;</span><span style="color:#24292E;">&gt;新闻1&lt;/</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/news/2&quot;</span><span style="color:#24292E;">&gt;新闻2&lt;/</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;newList&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        这是传过来的id:{{ this.$route.params.id }}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">New</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {template</span><span style="color:#032F62;">&#39;#new&#39;</span><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NewList</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {template</span><span style="color:#032F62;">&#39;#newList&#39;</span><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 点击某个新闻要跳转到新的页面</span></span>
<span class="line"><span style="color:#6A737D;">// 这个页面要匹配到动态路由的话就用:id,动态路径的参数</span></span>
<span class="line"><span style="color:#6A737D;">// 这个设置完之后,参数值会设置到this.$route.params</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routers</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {path:</span><span style="color:#032F62;">&#39;/new&#39;</span><span style="color:#24292E;">, components:New}</span></span>
<span class="line"><span style="color:#24292E;">    {path:</span><span style="color:#032F62;">&#39;/news/:id&#39;</span><span style="color:#24292E;">, components:NewList}</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    routers</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    el: </span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    router</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="_3-脚手架中的路由" tabindex="-1">3. 脚手架中的路由 <a class="header-anchor" href="#_3-脚手架中的路由" aria-label="Permalink to &quot;3. 脚手架中的路由&quot;">​</a></h3><ul><li>引入vue,引入vue-router</li><li>使用路由</li><li>供出router方法(new Router) <ul><li>导出来之后在main.js里面使用</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 引入router.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> router </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      router;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }).</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 引入router.js</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> router </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      router;</span></span>
<span class="line"><span style="color:#24292E;">  }).</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul><h3 id="_4-路由守卫" tabindex="-1">4. 路由守卫 <a class="header-anchor" href="#_4-路由守卫" aria-label="Permalink to &quot;4. 路由守卫&quot;">​</a></h3><h4 id="_1-路由守卫简述" tabindex="-1">1. 路由守卫简述 <a class="header-anchor" href="#_1-路由守卫简述" aria-label="Permalink to &quot;1. 路由守卫简述&quot;">​</a></h4><ol><li>全局守卫</li></ol><blockquote><p>在所有路由展示前触发</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在引入router组件的页面里使用(main.js)</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">beforeEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">//   to: 即将要进入的到的路由,值为路由</span></span>
<span class="line"><span style="color:#6A737D;">//   from: 离开的路由(从哪个路由离开),值为路由</span></span>
<span class="line"><span style="color:#6A737D;">//   next: 值为函数,这个函数决定你接下来要展示的路由页面</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在引入router组件的页面里使用(main.js)</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">beforeEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">//   to: 即将要进入的到的路由,值为路由</span></span>
<span class="line"><span style="color:#6A737D;">//   from: 离开的路由(从哪个路由离开),值为路由</span></span>
<span class="line"><span style="color:#6A737D;">//   next: 值为函数,这个函数决定你接下来要展示的路由页面</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li>后置钩子</li></ol><blockquote><p>在所有路由展示后触发</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在引入router组件的页面里使用(main.js)</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">afterEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">//   to: 即将要进入的到的路由,值为路由</span></span>
<span class="line"><span style="color:#6A737D;">//   from: 离开的路由(从哪个路由离开),值为路由</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在引入router组件的页面里使用(main.js)</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">afterEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">//   to: 即将要进入的到的路由,值为路由</span></span>
<span class="line"><span style="color:#6A737D;">//   from: 离开的路由(从哪个路由离开),值为路由</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>路由独享守卫</li></ol><blockquote><p>在当前路由展示前触发(放在router.js中)</p></blockquote><ul><li><code>beforeEnter((to, from, next) =&gt; {})</code></li><li>示例:</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/manage&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: Manage,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 管理只有登陆才能看(路由独享守卫)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">beforeEnter</span><span style="color:#E1E4E8;">(to, from, next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;非登陆状态下无法管理&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/login&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/manage&#39;</span><span style="color:#24292E;">,</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: Manage,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 管理只有登陆才能看(路由独享守卫)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">beforeEnter</span><span style="color:#24292E;">(to, from, next) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;非登陆状态下无法管理&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/login&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol><li>组件内的守卫(在组件内使用) <ol><li>在当前路由被展示前调用 <ul><li><code>beforeRouterEnter((to, from, next) =&gt; {})</code></li></ul></li><li>在当前路由改变时调用 <ul><li><code>beforeRouterUpdate((to, from, next) =&gt; {})</code></li></ul></li><li>在离开当前路由时调用 <ul><li><code>beforeRouterLeave((to, from, next) =&gt; {})</code></li></ul></li><li>示例:</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 在当前路由被展示前调用</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">beforeRouterEnter</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 在当前不能使用this,即获取不到data中的值</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// beforeRouter不能访问this对象,因为守卫触发的时候,组件还未被创建</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 这里有一个next,可以把他当作回调来看,在里面可以使用this</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">vm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 这里的vm指的就是this</span></span>
<span class="line"><span style="color:#E1E4E8;">                });</span></span>
<span class="line"><span style="color:#E1E4E8;">            }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 在离开当前路由时调用</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">beforeRouterLeave</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">answer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">comfirm</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;你确定要离开吗&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(answer) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 中断当前路由跳转</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        export default {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 在当前路由被展示前调用</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">beforeRouterEnter</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 在当前不能使用this,即获取不到data中的值</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// beforeRouter不能访问this对象,因为守卫触发的时候,组件还未被创建</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 这里有一个next,可以把他当作回调来看,在里面可以使用this</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(</span><span style="color:#E36209;">vm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 这里的vm指的就是this</span></span>
<span class="line"><span style="color:#24292E;">                });</span></span>
<span class="line"><span style="color:#24292E;">            }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 在离开当前路由时调用</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">beforeRouterLeave</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">answer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">comfirm</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;你确定要离开吗&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(answer) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 中断当前路由跳转</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></li></ol><h4 id="_2-示例" tabindex="-1">2. 示例 <a class="header-anchor" href="#_2-示例" aria-label="Permalink to &quot;2. 示例&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">beforeEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果点击的是登陆的那个路由，直接跳转</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (to.path </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;login&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果是继续执行</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {  </span><span style="color:#6A737D;">// 点击的不是登陆的路由，跳到登陆</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/login&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">beforeEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果点击的是登陆的那个路由，直接跳转</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (to.path </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;login&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果是继续执行</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {  </span><span style="color:#6A737D;">// 点击的不是登陆的路由，跳到登陆</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/login&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_5-路由其他知识点" tabindex="-1">5. 路由其他知识点 <a class="header-anchor" href="#_5-路由其他知识点" aria-label="Permalink to &quot;5. 路由其他知识点&quot;">​</a></h3><h4 id="_1-路由跳转方式" tabindex="-1">1. 路由跳转方式 <a class="header-anchor" href="#_1-路由跳转方式" aria-label="Permalink to &quot;1. 路由跳转方式&quot;">​</a></h4><ul><li>跳转到指定路由:</li><li><code>this.$router.push(&quot;/order&quot;);</code></li><li><code>this.$router.replate(&quot;/order&quot;);</code></li><li>回退:</li><li><code>this.$router.go(-1);</code></li><li>错误路由重定向</li><li><code>{path: &#39;*&#39;, redirect:&#39;/&#39;}</code></li></ul><h4 id="_2-嵌套路由-多级" tabindex="-1">2. 嵌套路由(多级) <a class="header-anchor" href="#_2-嵌套路由-多级" aria-label="Permalink to &quot;2. 嵌套路由(多级)&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// html</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;about&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h6</span><span style="color:#E1E4E8;">&gt;关于我们&lt;/</span><span style="color:#85E89D;">h6</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/about/intro&quot;</span><span style="color:#E1E4E8;">&gt;简介&lt;/</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/about/join&quot;</span><span style="color:#E1E4E8;">&gt;加入&lt;/</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/about/contact&quot;</span><span style="color:#E1E4E8;">&gt;联系&lt;/</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;box&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#79B8FF;">router-view</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Contact&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;联系我们&lt;/</span><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/about/contact/wechat&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tag</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;h3&quot;</span><span style="color:#E1E4E8;">&gt;微信&lt;/</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/about/contact/qq&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tag</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;h3&quot;</span><span style="color:#E1E4E8;">&gt;qq&lt;/</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/about/contact/email&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tag</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;h3&quot;</span><span style="color:#E1E4E8;">&gt;email&lt;/</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;box&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#79B8FF;">router-view</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 二级路由</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/about&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: About,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">redirect</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/about/contact&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 默认要展示的路由</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">children</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 要加父路由</span></span>
<span class="line"><span style="color:#E1E4E8;">        {path: </span><span style="color:#9ECBFF;">&#39;/about/intro&#39;</span><span style="color:#E1E4E8;">, component: Intro},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {path: </span><span style="color:#9ECBFF;">&#39;/about/join&#39;</span><span style="color:#E1E4E8;">, component: Join},</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//  三级路由</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;/about/contact&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            component: Contact,</span></span>
<span class="line"><span style="color:#E1E4E8;">            redirect: </span><span style="color:#9ECBFF;">&#39;/about/contact/qq&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 默认要展示的路由</span></span>
<span class="line"><span style="color:#E1E4E8;">            children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {path: </span><span style="color:#9ECBFF;">&#39;/about/contact/wechat&#39;</span><span style="color:#E1E4E8;">, component: Wechat},</span></span>
<span class="line"><span style="color:#E1E4E8;">                {path: </span><span style="color:#9ECBFF;">&#39;/about/contact/qq&#39;</span><span style="color:#E1E4E8;">, component: </span><span style="color:#79B8FF;">QQ</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                {path: </span><span style="color:#9ECBFF;">&#39;/about/contact/email&#39;</span><span style="color:#E1E4E8;">, component: Email},</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]},</span></span>
<span class="line"><span style="color:#E1E4E8;">]},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// html</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;about&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">h6</span><span style="color:#24292E;">&gt;关于我们&lt;/</span><span style="color:#22863A;">h6</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/about/intro&quot;</span><span style="color:#24292E;">&gt;简介&lt;/</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/about/join&quot;</span><span style="color:#24292E;">&gt;加入&lt;/</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/about/contact&quot;</span><span style="color:#24292E;">&gt;联系&lt;/</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;box&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#005CC5;">router-view</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Contact&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;联系我们&lt;/</span><span style="color:#22863A;">h2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/about/contact/wechat&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tag</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;h3&quot;</span><span style="color:#24292E;">&gt;微信&lt;/</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/about/contact/qq&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tag</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;h3&quot;</span><span style="color:#24292E;">&gt;qq&lt;/</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/about/contact/email&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tag</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;h3&quot;</span><span style="color:#24292E;">&gt;email&lt;/</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;box&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#005CC5;">router-view</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 二级路由</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/about&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: About,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">redirect</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/about/contact&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 默认要展示的路由</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">children</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 要加父路由</span></span>
<span class="line"><span style="color:#24292E;">        {path: </span><span style="color:#032F62;">&#39;/about/intro&#39;</span><span style="color:#24292E;">, component: Intro},</span></span>
<span class="line"><span style="color:#24292E;">        {path: </span><span style="color:#032F62;">&#39;/about/join&#39;</span><span style="color:#24292E;">, component: Join},</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//  三级路由</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;/about/contact&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            component: Contact,</span></span>
<span class="line"><span style="color:#24292E;">            redirect: </span><span style="color:#032F62;">&#39;/about/contact/qq&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 默认要展示的路由</span></span>
<span class="line"><span style="color:#24292E;">            children: [</span></span>
<span class="line"><span style="color:#24292E;">                {path: </span><span style="color:#032F62;">&#39;/about/contact/wechat&#39;</span><span style="color:#24292E;">, component: Wechat},</span></span>
<span class="line"><span style="color:#24292E;">                {path: </span><span style="color:#032F62;">&#39;/about/contact/qq&#39;</span><span style="color:#24292E;">, component: </span><span style="color:#005CC5;">QQ</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                {path: </span><span style="color:#032F62;">&#39;/about/contact/email&#39;</span><span style="color:#24292E;">, component: Email},</span></span>
<span class="line"><span style="color:#24292E;">        ]},</span></span>
<span class="line"><span style="color:#24292E;">]},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h4 id="_3-路由传参" tabindex="-1">3. 路由传参 <a class="header-anchor" href="#_3-路由传参" aria-label="Permalink to &quot;3. 路由传参&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 路由传参一</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&quot;/路径&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    query: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// data</span></span>
<span class="line"><span style="color:#E1E4E8;">        stubId: row.id</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 路由传参二</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;/路径&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// data</span></span>
<span class="line"><span style="color:#E1E4E8;">        stubId: row.id</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$route.params.guiNo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 路由传参一</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&quot;/路径&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    query: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// data</span></span>
<span class="line"><span style="color:#24292E;">        stubId: row.id</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 路由传参二</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;/路径&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    params: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// data</span></span>
<span class="line"><span style="color:#24292E;">        stubId: row.id</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$route.params.guiNo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="_4-其他小知识点" tabindex="-1">4. 其他小知识点 <a class="header-anchor" href="#_4-其他小知识点" aria-label="Permalink to &quot;4. 其他小知识点&quot;">​</a></h4><ol><li>去掉导航中的# <ul><li><code>mode: &#39;history&#39;</code></li></ul></li><li>指定激活项class <ul><li><code>linkActiveClass: &#39;active&#39;</code></li></ul></li><li>指定跳转标签类型 <ul><li>&quot;router-link&quot;默认是a标签</li><li><code>&lt;router-link target=&#39;div&#39;&gt;简介&lt;/router-link&gt;</code></li></ul></li><li>用属性作为路由地址<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:to=&quot;homeLink&quot;&gt;简介&lt;/router-link&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">data()</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">     return {</span></span>
<span class="line"><span style="color:#E1E4E8;">         homeLink: </span><span style="color:#9ECBFF;">&quot;/about&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">     }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">router-link</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:to=&quot;homeLink&quot;&gt;简介&lt;/router-link&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">data()</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">     return {</span></span>
<span class="line"><span style="color:#24292E;">         homeLink: </span><span style="color:#032F62;">&quot;/about&quot;</span></span>
<span class="line"><span style="color:#24292E;">     }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li>用路由名称作为路由地址 <ul><li><code>&lt;router-link :to=&quot;{name: &#39;order&#39;}&quot;&gt;订单&lt;/router-link&gt;</code></li></ul></li></ol><hr><br><h2 id="_5-axios" tabindex="-1">5. axios <a class="header-anchor" href="#_5-axios" aria-label="Permalink to &quot;5. axios&quot;">​</a></h2><blockquote><p>API: <a href="https://www.kancloud.cn/yunye/axios/234845" target="_blank" rel="noreferrer">axios API</a> axios: <a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">axios API</a></p></blockquote><h3 id="_1-get请求" tabindex="-1">1. get请求 <a class="header-anchor" href="#_1-get请求" aria-label="Permalink to &quot;1. get请求&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(url, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: value,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 请求成功后回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 请求失败后回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(url, {</span></span>
<span class="line"><span style="color:#24292E;">    params: {</span></span>
<span class="line"><span style="color:#24292E;">        key: value,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">......</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 请求成功后回调函数</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 请求失败后回调函数</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_2-post请求" tabindex="-1">2. post请求 <a class="header-anchor" href="#_2-post请求" aria-label="Permalink to &quot;2. post请求&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">axios.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(url, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: value,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 请求成功后回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 请求失败后回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">axios.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(url, {</span></span>
<span class="line"><span style="color:#24292E;">    data: {</span></span>
<span class="line"><span style="color:#24292E;">        key: value,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">......</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 请求成功后回调函数</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 请求失败后回调函数</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-可以通过向-axios-传递相关配置来创建请求" tabindex="-1">3. 可以通过向 axios 传递相关配置来创建请求 <a class="header-anchor" href="#_3-可以通过向-axios-传递相关配置来创建请求" aria-label="Permalink to &quot;3. 可以通过向 axios 传递相关配置来创建请求&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: url,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: value,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;application/json;charset=utf-8&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 请求成功后回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 请求失败后回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    method: </span><span style="color:#032F62;">&#39;post&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    url: url,</span></span>
<span class="line"><span style="color:#24292E;">    data: {</span></span>
<span class="line"><span style="color:#24292E;">        key: value,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">......</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    headers: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;Content-Type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;application/json;charset=utf-8&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 请求成功后回调函数</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 请求失败后回调函数</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_4-在脚手架中使用axios" tabindex="-1">4. 在脚手架中使用axios <a class="header-anchor" href="#_4-在脚手架中使用axios" aria-label="Permalink to &quot;4. 在脚手架中使用axios&quot;">​</a></h3><ol><li>在对应组件中引入axios</li><li>在main.js中把引入的axios对象，放到vue的原型上。 <ul><li>挂载到vue的原型上，那么所有生成的vue实例都可以使用。</li><li><code>Vue.prototype.axios = axios;</code></li></ul></li></ol><h3 id="_5-注意事项" tabindex="-1">5. 注意事项 <a class="header-anchor" href="#_5-注意事项" aria-label="Permalink to &quot;5. 注意事项&quot;">​</a></h3><ul><li>如果method为get，传给后台的值要用params</li><li>如果method为post，传给后台的值要用data</li></ul><hr><br><h2 id="_6-vuex" tabindex="-1">6. vuex <a class="header-anchor" href="#_6-vuex" aria-label="Permalink to &quot;6. vuex&quot;">​</a></h2><blockquote><p>可以理解为数据的仓库，可以用作数据的存储和管理</p></blockquote><h3 id="_1-通俗理解" tabindex="-1">1. 通俗理解 <a class="header-anchor" href="#_1-通俗理解" aria-label="Permalink to &quot;1. 通俗理解&quot;">​</a></h3><ul><li>它相当于是一个商店，任何人都可以过来买商品，这个商品就是数据，这个商店就是vuex</li><li>配置</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    state: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    getters: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    mutations: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    actions: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Vuex.</span><span style="color:#6F42C1;">Store</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    state: {},</span></span>
<span class="line"><span style="color:#24292E;">    getters: {},</span></span>
<span class="line"><span style="color:#24292E;">    mutations: {},</span></span>
<span class="line"><span style="color:#24292E;">    actions: {}</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-state属性" tabindex="-1">2. State属性 <a class="header-anchor" href="#_2-state属性" aria-label="Permalink to &quot;2. State属性&quot;">​</a></h3><blockquote><p>state: 用来存储数据</p></blockquote><h4 id="示例1-7" tabindex="-1">示例1： <a class="header-anchor" href="#示例1-7" aria-label="Permalink to &quot;示例1：&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">dishes</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;美食&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 计算属性，他的值是一个对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 和methods差不多，可以存放方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 但它不一定会覆盖data中的值（为了提升性能）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果上一次的数据和这次的数据一样的话，它不会进行操作</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用vuex的时候会经常使用computed</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这里的语法和methods的语法是一样的</span></span>
<span class="line"><span style="color:#E1E4E8;">    computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是一个函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">dishes</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 取store.js里的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store.state.dishes;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 可以重复执行，每次都会覆盖data中的值</span></span>
<span class="line"><span style="color:#E1E4E8;">    methods: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">dishes</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;美食&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 计算属性，他的值是一个对象</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 和methods差不多，可以存放方法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 但它不一定会覆盖data中的值（为了提升性能）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果上一次的数据和这次的数据一样的话，它不会进行操作</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用vuex的时候会经常使用computed</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这里的语法和methods的语法是一样的</span></span>
<span class="line"><span style="color:#24292E;">    computed: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 是一个函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">dishes</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 取store.js里的数据</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.state.dishes;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 可以重复执行，每次都会覆盖data中的值</span></span>
<span class="line"><span style="color:#24292E;">    methods: {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h4 id="示例2-3" tabindex="-1">示例2： <a class="header-anchor" href="#示例2-3" aria-label="Permalink to &quot;示例2：&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">dishes</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {name: </span><span style="color:#9ECBFF;">&quot;可乐&quot;</span><span style="color:#E1E4E8;">, price: </span><span style="color:#79B8FF;">33</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {name: </span><span style="color:#9ECBFF;">&quot;雪碧&quot;</span><span style="color:#E1E4E8;">, price: </span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 用此示例和在getters中操作数据作区别</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是一个函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">dishes</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">oldData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store.state.dishes;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// value每一条数据，index每条数据对应的索引，arr数组本身</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">newData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> oldData.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">arr</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 把人民币换成泰铢</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    name: value.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    price: value.price </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> newData;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">dishes</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {name: </span><span style="color:#032F62;">&quot;可乐&quot;</span><span style="color:#24292E;">, price: </span><span style="color:#005CC5;">33</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">        {name: </span><span style="color:#032F62;">&quot;雪碧&quot;</span><span style="color:#24292E;">, price: </span><span style="color:#005CC5;">44</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    computed: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 用此示例和在getters中操作数据作区别</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 是一个函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">dishes</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">oldData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.state.dishes;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// value每一条数据，index每条数据对应的索引，arr数组本身</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">newData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> oldData.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">value</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">arr</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 把人民币换成泰铢</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    name: value.name,</span></span>
<span class="line"><span style="color:#24292E;">                    price: value.price </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> newData;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="_3-getter属性" tabindex="-1">3. Getter属性 <a class="header-anchor" href="#_3-getter属性" aria-label="Permalink to &quot;3. Getter属性&quot;">​</a></h3><blockquote><p>getters: 用来获取数据</p></blockquote><h4 id="示例" tabindex="-1">示例: <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例:&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">dishes</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {name: </span><span style="color:#9ECBFF;">&quot;可乐&quot;</span><span style="color:#E1E4E8;">, price: </span><span style="color:#79B8FF;">33</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {name: </span><span style="color:#9ECBFF;">&quot;雪碧&quot;</span><span style="color:#E1E4E8;">, price: </span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 获取数据</span></span>
<span class="line"><span style="color:#B392F0;">getters</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这里面的方法会接收一个参数，就是上面的state</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">changePrice</span><span style="color:#E1E4E8;">(state) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/* const oldData = state.dishes;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        const newData = oldData.map(value =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">            // 把人民币换成泰铢</span></span>
<span class="line"><span style="color:#6A737D;">            return {</span></span>
<span class="line"><span style="color:#6A737D;">                name: value.name,</span></span>
<span class="line"><span style="color:#6A737D;">                price: value.price * 5</span></span>
<span class="line"><span style="color:#6A737D;">            }</span></span>
<span class="line"><span style="color:#6A737D;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        return newData; */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 可以简写成</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> state.dishes.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 把人民币换成泰铢</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: value.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">                price: value.price </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是一个函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 在单个组件中使用只有当前组件生效，但在getters中使用可以在全局使用</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">dishes</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 不用加括号</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store.getters.changePrice;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">dishes</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {name: </span><span style="color:#032F62;">&quot;可乐&quot;</span><span style="color:#24292E;">, price: </span><span style="color:#005CC5;">33</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">        {name: </span><span style="color:#032F62;">&quot;雪碧&quot;</span><span style="color:#24292E;">, price: </span><span style="color:#005CC5;">44</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 获取数据</span></span>
<span class="line"><span style="color:#6F42C1;">getters</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这里面的方法会接收一个参数，就是上面的state</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">changePrice</span><span style="color:#24292E;">(state) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/* const oldData = state.dishes;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        const newData = oldData.map(value =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">            // 把人民币换成泰铢</span></span>
<span class="line"><span style="color:#6A737D;">            return {</span></span>
<span class="line"><span style="color:#6A737D;">                name: value.name,</span></span>
<span class="line"><span style="color:#6A737D;">                price: value.price * 5</span></span>
<span class="line"><span style="color:#6A737D;">            }</span></span>
<span class="line"><span style="color:#6A737D;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        return newData; */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 可以简写成</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> state.dishes.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 把人民币换成泰铢</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                name: value.name,</span></span>
<span class="line"><span style="color:#24292E;">                price: value.price </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    computed: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 是一个函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 在单个组件中使用只有当前组件生效，但在getters中使用可以在全局使用</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">dishes</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 不用加括号</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.getters.changePrice;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h3 id="_4-mutation属性" tabindex="-1">4. Mutation属性 <a class="header-anchor" href="#_4-mutation属性" aria-label="Permalink to &quot;4. Mutation属性&quot;">​</a></h3><blockquote><p>mutations: 用来管理(操作)数据</p></blockquote><h4 id="示例-1" tabindex="-1">示例: <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例:&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">dishes</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {name: </span><span style="color:#9ECBFF;">&quot;可乐&quot;</span><span style="color:#E1E4E8;">, price: </span><span style="color:#79B8FF;">33</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {name: </span><span style="color:#9ECBFF;">&quot;雪碧&quot;</span><span style="color:#E1E4E8;">, price: </span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 管理数据</span></span>
<span class="line"><span style="color:#6A737D;">//  同步</span></span>
<span class="line"><span style="color:#B392F0;">mutations</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这里面的方法会接收一个参数，就是上面的state</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 支持传参(payload)从第二个参数开始，就是对应的调用的时候传过来的参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 打折方法，打dis折</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">discount</span><span style="color:#E1E4E8;">(state, dis) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        state.dishes.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ele</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            ele.price </span><span style="color:#F97583;">*=</span><span style="color:#E1E4E8;"> dis</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 保留两位小数  ele.price.toFixed(2);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* ele.price = Math.round((ele.price*dis/10)*100)/100;</span></span>
<span class="line"><span style="color:#6A737D;">            ele.price = (ele.price*dis/10).toFixed(2); */</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;discount(8)&quot;&gt;打折&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">discount</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dis</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 改变所有的价格</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// map和foreach都可以遍历，map会返回新数组，foreach是改变当前数组</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 使用老方法</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* this.$store.state.dishes.forEach(element =&gt;{</span></span>
<span class="line"><span style="color:#6A737D;">                // 打5折</span></span>
<span class="line"><span style="color:#6A737D;">                element.price *= 0.5;</span></span>
<span class="line"><span style="color:#6A737D;">            }) */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 使用新方法</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 调用mutations的discount方法（相当于自定义事件）、</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 支持传参(payload)从第二个参数开始，就是对应的调用的时候传过来的参数</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// this.$store.commit(&quot;discount&quot;, 5);  // 5折</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// mutations调用方法用commit</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 用定时器，多次点击，数据只会在最后一次变化</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;discount&quot;</span><span style="color:#E1E4E8;">, dis);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">dishes</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {name: </span><span style="color:#032F62;">&quot;可乐&quot;</span><span style="color:#24292E;">, price: </span><span style="color:#005CC5;">33</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">        {name: </span><span style="color:#032F62;">&quot;雪碧&quot;</span><span style="color:#24292E;">, price: </span><span style="color:#005CC5;">44</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 管理数据</span></span>
<span class="line"><span style="color:#6A737D;">//  同步</span></span>
<span class="line"><span style="color:#6F42C1;">mutations</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这里面的方法会接收一个参数，就是上面的state</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 支持传参(payload)从第二个参数开始，就是对应的调用的时候传过来的参数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 打折方法，打dis折</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">discount</span><span style="color:#24292E;">(state, dis) {</span></span>
<span class="line"><span style="color:#24292E;">        state.dishes.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ele</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            ele.price </span><span style="color:#D73A49;">*=</span><span style="color:#24292E;"> dis</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 保留两位小数  ele.price.toFixed(2);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* ele.price = Math.round((ele.price*dis/10)*100)/100;</span></span>
<span class="line"><span style="color:#6A737D;">            ele.price = (ele.price*dis/10).toFixed(2); */</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;discount(8)&quot;&gt;打折&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">export</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    methods: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">discount</span><span style="color:#24292E;">(</span><span style="color:#E36209;">dis</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 改变所有的价格</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// map和foreach都可以遍历，map会返回新数组，foreach是改变当前数组</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 使用老方法</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* this.$store.state.dishes.forEach(element =&gt;{</span></span>
<span class="line"><span style="color:#6A737D;">                // 打5折</span></span>
<span class="line"><span style="color:#6A737D;">                element.price *= 0.5;</span></span>
<span class="line"><span style="color:#6A737D;">            }) */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 使用新方法</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 调用mutations的discount方法（相当于自定义事件）、</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 支持传参(payload)从第二个参数开始，就是对应的调用的时候传过来的参数</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// this.$store.commit(&quot;discount&quot;, 5);  // 5折</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// mutations调用方法用commit</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 用定时器，多次点击，数据只会在最后一次变化</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;discount&quot;</span><span style="color:#24292E;">, dis);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="_5-action属性" tabindex="-1">5. Action属性 <a class="header-anchor" href="#_5-action属性" aria-label="Permalink to &quot;5. Action属性&quot;">​</a></h3><blockquote><p>actions: 主要用来操作mutations</p></blockquote><h4 id="示例-2" tabindex="-1">示例: <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例:&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">dishes</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {name: </span><span style="color:#9ECBFF;">&quot;可乐&quot;</span><span style="color:#E1E4E8;">, price: </span><span style="color:#79B8FF;">33</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {name: </span><span style="color:#9ECBFF;">&quot;雪碧&quot;</span><span style="color:#E1E4E8;">, price: </span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 管理数据</span></span>
<span class="line"><span style="color:#6A737D;">//  同步</span></span>
<span class="line"><span style="color:#B392F0;">mutations</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 同步的状态是无法记录当前点击出现的东西的</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">discount</span><span style="color:#E1E4E8;">(state, dis) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        state.dishes.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ele</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            ele.price </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (ele.price</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">dis</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 操作mutations</span></span>
<span class="line"><span style="color:#6A737D;">// 异步</span></span>
<span class="line"><span style="color:#B392F0;">actions</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 第一个参数不是state, 是类似store对象的实例</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 所以在这里拿不到state的值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">discount</span><span style="color:#E1E4E8;">(context, dis) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果执行这个会报错</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/* state.dishes.forEach(ele =&gt;{</span></span>
<span class="line"><span style="color:#6A737D;">            ele.price = (ele.price*dis/10).toFixed(2);</span></span>
<span class="line"><span style="color:#6A737D;">        }) */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 最终执行的还是mutations</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 在这里执行，每次点击，数据状态都会变化</span></span>
<span class="line"><span style="color:#E1E4E8;">        context.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;discount&quot;</span><span style="color:#E1E4E8;">, dis);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 判断同步还是异步，用定时器就可以看出来</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/* setTimeout(()=&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">            context.commit(&quot;discount&quot;, dis);</span></span>
<span class="line"><span style="color:#6A737D;">        }, 2000); */</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;discount(8)&quot;&gt;打折&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">discount</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dis</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// actions的调用方式用dispatch</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 用定时器，每次点击，数据状态都会变化</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;discount&quot;</span><span style="color:#E1E4E8;">, dis);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// store.js</span></span>
<span class="line"><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">dishes</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {name: </span><span style="color:#032F62;">&quot;可乐&quot;</span><span style="color:#24292E;">, price: </span><span style="color:#005CC5;">33</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">        {name: </span><span style="color:#032F62;">&quot;雪碧&quot;</span><span style="color:#24292E;">, price: </span><span style="color:#005CC5;">44</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 管理数据</span></span>
<span class="line"><span style="color:#6A737D;">//  同步</span></span>
<span class="line"><span style="color:#6F42C1;">mutations</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 同步的状态是无法记录当前点击出现的东西的</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">discount</span><span style="color:#24292E;">(state, dis) {</span></span>
<span class="line"><span style="color:#24292E;">        state.dishes.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ele</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            ele.price </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (ele.price</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">dis</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">toFixed</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 操作mutations</span></span>
<span class="line"><span style="color:#6A737D;">// 异步</span></span>
<span class="line"><span style="color:#6F42C1;">actions</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 第一个参数不是state, 是类似store对象的实例</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 所以在这里拿不到state的值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">discount</span><span style="color:#24292E;">(context, dis) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果执行这个会报错</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/* state.dishes.forEach(ele =&gt;{</span></span>
<span class="line"><span style="color:#6A737D;">            ele.price = (ele.price*dis/10).toFixed(2);</span></span>
<span class="line"><span style="color:#6A737D;">        }) */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 最终执行的还是mutations</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 在这里执行，每次点击，数据状态都会变化</span></span>
<span class="line"><span style="color:#24292E;">        context.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;discount&quot;</span><span style="color:#24292E;">, dis);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 判断同步还是异步，用定时器就可以看出来</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/* setTimeout(()=&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">            context.commit(&quot;discount&quot;, dis);</span></span>
<span class="line"><span style="color:#6A737D;">        }, 2000); */</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *.vue</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;discount(8)&quot;&gt;打折&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">export</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    methods: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">discount</span><span style="color:#24292E;">(</span><span style="color:#E36209;">dis</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// actions的调用方式用dispatch</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 用定时器，每次点击，数据状态都会变化</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.</span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;discount&quot;</span><span style="color:#24292E;">, dis);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div>`,165);function b(a,m,d,g,h,F){return o(),t("div",null,[r,s("ul",null,[s("li",null,[n("插槽(slot)：用于分发内容 "),s("ul",null,[s("li",null,[n("template里定义："),l(a.$slots,"default")]),E,i])]),s("li",null,[n("具名插槽：给slot添加name属性后就叫具名插槽 "),s("ul",null,[s("li",null,[n("template里定义："),l(a.$slots,"属性名")]),y])])]),u])}const v=e(c,[["render",b]]);export{A as __pageData,v as default};
//# sourceMappingURL=pages_note_front_vue-note_vue2-note-1.md.b6347d01.js.map
