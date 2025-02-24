import{_ as s,o as n,c as a,e as l}from"./app.e5ec5305.js";const u=JSON.parse('{"title":"知识-属性描述符","description":"","frontmatter":{},"headers":[],"relativePath":"pages/interview/advanced/interview-advanced-5.md","filePath":"pages/interview/advanced/interview-advanced-5.md","lastUpdated":1735808652000}'),e={name:"pages/interview/advanced/interview-advanced-5.md"},p=l(`<h1 id="知识-属性描述符" tabindex="-1">知识-属性描述符 <a class="header-anchor" href="#知识-属性描述符" aria-label="Permalink to &quot;知识-属性描述符&quot;">​</a></h1><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><ul><li>属性描述符：用来描述对象属性的特性</li><li>数据描述符：包含<code>value</code>、<code>writable</code>、<code>configurable</code>、<code>enumerable</code>四个属性</li></ul><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;zhangsan&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  age: </span><span style="color:#79B8FF;">18</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 获取自身属性的描述符</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">desc</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">getOwnPropertyDescriptor</span><span style="color:#E1E4E8;">(obj, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(desc)  </span><span style="color:#6A737D;">// 该属性的描述</span></span>
<span class="line"><span style="color:#6A737D;">/* {</span></span>
<span class="line"><span style="color:#6A737D;">  value: &#39;zhangsan&#39;,  // 这个属性的值</span></span>
<span class="line"><span style="color:#6A737D;">  writable: true,  // 这个属性的值是否可以被修改</span></span>
<span class="line"><span style="color:#6A737D;">  enumerable: true,  // 这个属性是否可以被枚举(遍历)</span></span>
<span class="line"><span style="color:#6A737D;">  configurable: true  // 这个属性描述符是否可以被修改</span></span>
<span class="line"><span style="color:#6A737D;">} */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;zhangsan&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  age: </span><span style="color:#005CC5;">18</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 获取自身属性的描述符</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">desc</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">getOwnPropertyDescriptor</span><span style="color:#24292E;">(obj, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(desc)  </span><span style="color:#6A737D;">// 该属性的描述</span></span>
<span class="line"><span style="color:#6A737D;">/* {</span></span>
<span class="line"><span style="color:#6A737D;">  value: &#39;zhangsan&#39;,  // 这个属性的值</span></span>
<span class="line"><span style="color:#6A737D;">  writable: true,  // 这个属性的值是否可以被修改</span></span>
<span class="line"><span style="color:#6A737D;">  enumerable: true,  // 这个属性是否可以被枚举(遍历)</span></span>
<span class="line"><span style="color:#6A737D;">  configurable: true  // 这个属性描述符是否可以被修改</span></span>
<span class="line"><span style="color:#6A737D;">} */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="属性描述符是可以被修改的" tabindex="-1">属性描述符是可以被修改的 <a class="header-anchor" href="#属性描述符是可以被修改的" aria-label="Permalink to &quot;属性描述符是可以被修改的&quot;">​</a></h2><blockquote><p><code>Object.defineProperty</code>重新定义某一个属性的描述符 他不是直接修改，而是重新定义 他不是vue特有的,只是vue用到了这个方法</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;zhangsan&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  age: </span><span style="color:#79B8FF;">18</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 获取自身属性的描述符</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">desc</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">getOwnPropertyDescriptor</span><span style="color:#E1E4E8;">(obj, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(desc)  </span><span style="color:#6A737D;">// 该属性的描述</span></span>
<span class="line"><span style="color:#6A737D;">/* {</span></span>
<span class="line"><span style="color:#6A737D;">  value: &#39;zhangsan&#39;,  // 这个属性的值</span></span>
<span class="line"><span style="color:#6A737D;">  writable: true,  // 这个属性的值是否可以被修改</span></span>
<span class="line"><span style="color:#6A737D;">  enumerable: true,  // 这个属性是否可以被枚举(遍历)</span></span>
<span class="line"><span style="color:#6A737D;">  configurable: true  // 这个属性描述符是否可以被修改</span></span>
<span class="line"><span style="color:#6A737D;">} */</span></span>
<span class="line"><span style="color:#6A737D;">// 修改描述符</span></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#9ECBFF;">&#39;lisi&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  writable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  enumerable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  configurable: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;zhangsan&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  age: </span><span style="color:#005CC5;">18</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 获取自身属性的描述符</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">desc</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">getOwnPropertyDescriptor</span><span style="color:#24292E;">(obj, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(desc)  </span><span style="color:#6A737D;">// 该属性的描述</span></span>
<span class="line"><span style="color:#6A737D;">/* {</span></span>
<span class="line"><span style="color:#6A737D;">  value: &#39;zhangsan&#39;,  // 这个属性的值</span></span>
<span class="line"><span style="color:#6A737D;">  writable: true,  // 这个属性的值是否可以被修改</span></span>
<span class="line"><span style="color:#6A737D;">  enumerable: true,  // 这个属性是否可以被枚举(遍历)</span></span>
<span class="line"><span style="color:#6A737D;">  configurable: true  // 这个属性描述符是否可以被修改</span></span>
<span class="line"><span style="color:#6A737D;">} */</span></span>
<span class="line"><span style="color:#6A737D;">// 修改描述符</span></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(obj, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#032F62;">&#39;lisi&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  writable: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  enumerable: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  configurable: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="defineproperty的访问器" tabindex="-1">defineProperty的访问器 <a class="header-anchor" href="#defineproperty的访问器" aria-label="Permalink to &quot;defineProperty的访问器&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* value: &#39;zhangsan&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  // writable: false,  // 默认值是true</span></span>
<span class="line"><span style="color:#6A737D;">  // enumerable: false,  // 默认值是false</span></span>
<span class="line"><span style="color:#6A737D;">  // configurable: false  // 默认值是false */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 读取器</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置器</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {}</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// obj.name =&gt; 调用get</span></span>
<span class="line"><span style="color:#6A737D;">// obj.name = &#39;lisi&#39; =&gt; 调用set =&gt; set(lisi)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(obj, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* value: &#39;zhangsan&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  // writable: false,  // 默认值是true</span></span>
<span class="line"><span style="color:#6A737D;">  // enumerable: false,  // 默认值是false</span></span>
<span class="line"><span style="color:#6A737D;">  // configurable: false  // 默认值是false */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 读取器</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置器</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// obj.name =&gt; 调用get</span></span>
<span class="line"><span style="color:#6A737D;">// obj.name = &#39;lisi&#39; =&gt; 调用set =&gt; set(lisi)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="object相关方法" tabindex="-1">Object相关方法 <a class="header-anchor" href="#object相关方法" aria-label="Permalink to &quot;Object相关方法&quot;">​</a></h2><blockquote><p><code>Object.defineProperty</code>重新定义某一个属性的描述符 <code>Object.defineProperties</code>重新定义多个属性的描述符 <code>Object.getOwnPropertyDescriptors</code>获取一个对象的所有自身属性的描述符 <code>Object.preventExtensions</code>禁止一个对象添加新的属性 <code>Object.seal</code>禁止一个对象添加新的属性，并且所有现有属性标记为不可配置 <code>Object.freeze</code>禁止一个对象添加新的属性，并且所有现有属性标记为不可配置，同时所有现有属性标记为不可写 <code>Object.isExtensible</code>判断一个对象是否可以添加新的属性 <code>Object.isSealed</code>判断一个对象是否可以添加新的属性，并且所有现有属性标记为不可配置 <code>Object.isFrozen</code>判断一个对象是否可以添加新的属性，并且所有现有属性标记为不可配置，同时所有现有属性标记为不可写 <code>Object.keys</code>获取一个对象的所有自身可枚举属性的键名 <code>Object.getOwnPropertyNames</code>获取一个对象的所有自身属性的键名 <code>Object.getOwnPropertySymbols</code>获取一个对象的所有自身属性的键名 <code>Object.values</code>获取一个对象的所有自身可枚举属性的键值 <code>Object.entries</code>获取一个对象的所有自身可枚举属性的键值对 <code>Object.fromEntries</code>将一个键值对列表转换为一个对象 <code>Object.assign</code>将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象 <code>Object.create</code>创建一个新对象，使用现有的对象来提供新创建的对象的__proto__ <code>Object.setPrototypeOf</code>设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或 null <code>Object.getPrototypeOf</code>返回指定对象的原型（内部[[Prototype]]属性的值） <code>Object.is</code>判断两个值是否为同一个值 <code>Object.isExtensible</code>判断一个对象是否可以添加新的属性 <code>Object.isSealed</code>判断一个对象是否可以添加新的属性，并且所有现有属性标记为不可配置 <code>Object.isFrozen</code>判断一个对象是否可以添加新的属性，并且所有现有属性标记为不可配置，同时所有现有属性标记为不可写</p></blockquote>`,12),o=[p];function c(r,t,i,y,E,b){return n(),a("div",null,o)}const m=s(e,[["render",c]]);export{u as __pageData,m as default};
//# sourceMappingURL=pages_interview_advanced_interview-advanced-5.md.a8009c2a.js.map
