import{_ as s,o as n,c as a,e as l}from"./app.53099fc7.js";const A=JSON.parse('{"title":"框架-vue从入门到手撕","description":"","frontmatter":{},"headers":[],"relativePath":"pages/interview/advanced/interview-advanced-4.md","filePath":"pages/interview/advanced/interview-advanced-4.md","lastUpdated":1742435983000}'),p={name:"pages/interview/advanced/interview-advanced-4.md"},e=l(`<h1 id="框架-vue从入门到手撕" tabindex="-1">框架-vue从入门到手撕 <a class="header-anchor" href="#框架-vue从入门到手撕" aria-label="Permalink to &quot;框架-vue从入门到手撕&quot;">​</a></h1><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><ul><li>vue认为,我们在开发过程中,只需要关注两件事</li><li>界面数据长什么样子</li><li>界面是如何根据数据生成出来的</li><li>数据响应式</li><li>数据的变化会引发界面的自动更新(粗旷的解释)</li><li>数据决定了界面长什么样子</li><li>数据的变动,会自动引发界面的变化</li><li>vue的初心 <ul><li>希望自动调用依赖该属性的函数</li><li>依赖这个词表示: 当数据变化时,自动调用使用了这个数据的函数</li></ul></li><li>名词定义 <ul><li>Object.defineProperty 在set方法中要执行依赖了该数据的函数,所以需要在get方法中收集依赖了该数据的函数</li><li>依赖收集: 在get方法中收集依赖了该数据的函数</li><li>派发更新: 在set方法中执行依赖了该数据的函数</li></ul></li><li>在收集依赖的时候,还是不知道到底执行了什么函数,于是将这个函数放到一个数组中,这个数组就是依赖收集器</li></ul><h2 id="vue的雏形" tabindex="-1">vue的雏形 <a class="header-anchor" href="#vue的雏形" aria-label="Permalink to &quot;vue的雏形&quot;">​</a></h2><blockquote><p>响应式的本质是: 当数据发生变化时,会自动运行一些相关函数(自动调用使用了这个数据的函数)</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 观察某个对象的所有属性,一旦对象中的属性发生变化,就调用回调函数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;observe&#39;, obj)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> key </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> obj) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> internalValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj[key]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// let funcs = new Set()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> funcs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 对每个属性设置get,set</span></span>
<span class="line"><span style="color:#E1E4E8;">        Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj, key, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 依赖收集: 要记录是哪个函数在用我</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// funcs.add() // 添加一个函数</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(window.__func </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">funcs.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(window.__func)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    funcs.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(window.__func)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// console.log(&#39;get&#39;, funcs)</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> internalValue</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                internalValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 自动调用依赖该属性的函数</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 某个函数在运行期间,用到了这个属性</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 即某个函数在运行期间,用到了这个get方法</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 派发更新: 运行: 执行用我的函数</span></span>
<span class="line"><span style="color:#E1E4E8;">                funcs.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">func</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">autorun</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.__func </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> func</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">func</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.__func </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;zhangsan&#39;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;"> }; </span></span>
<span class="line"><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(obj)  </span><span style="color:#6A737D;">// 对obj进行观察</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 每次修改age时,需要-3</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setAge</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    obj.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj.age </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setAge&#39;</span><span style="color:#E1E4E8;">, obj.age)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* window.__func = setAge</span></span>
<span class="line"><span style="color:#6A737D;">setAge()</span></span>
<span class="line"><span style="color:#6A737D;">window.__func = null */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这就是vue的响应式 </span></span>
<span class="line"><span style="color:#6A737D;">// 调用autorun,自动执行setAge</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#B392F0;">autorun</span><span style="color:#E1E4E8;">(setAge)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 观察某个对象的所有属性,一旦对象中的属性发生变化,就调用回调函数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;observe&#39;, obj)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> key </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> obj) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> internalValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> obj[key]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// let funcs = new Set()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> funcs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 对每个属性设置get,set</span></span>
<span class="line"><span style="color:#24292E;">        Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(obj, key, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 依赖收集: 要记录是哪个函数在用我</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// funcs.add() // 添加一个函数</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(window.__func </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">funcs.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(window.__func)) {</span></span>
<span class="line"><span style="color:#24292E;">                    funcs.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(window.__func)</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// console.log(&#39;get&#39;, funcs)</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> internalValue</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                internalValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 自动调用依赖该属性的函数</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 某个函数在运行期间,用到了这个属性</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 即某个函数在运行期间,用到了这个get方法</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 派发更新: 运行: 执行用我的函数</span></span>
<span class="line"><span style="color:#24292E;">                funcs.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">func</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">autorun</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">func</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    window.__func </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> func</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">func</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    window.__func </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { name: </span><span style="color:#032F62;">&#39;zhangsan&#39;</span><span style="color:#24292E;">, age: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;"> }; </span></span>
<span class="line"><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(obj)  </span><span style="color:#6A737D;">// 对obj进行观察</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 每次修改age时,需要-3</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setAge</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    obj.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> obj.age </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setAge&#39;</span><span style="color:#24292E;">, obj.age)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* window.__func = setAge</span></span>
<span class="line"><span style="color:#6A737D;">setAge()</span></span>
<span class="line"><span style="color:#6A737D;">window.__func = null */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这就是vue的响应式 </span></span>
<span class="line"><span style="color:#6A737D;">// 调用autorun,自动执行setAge</span></span>
<span class="line"><span style="color:#24292E;">obj.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#6F42C1;">autorun</span><span style="color:#24292E;">(setAge)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,6),o=[e];function c(r,t,E,y,i,u){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{A as __pageData,m as default};
//# sourceMappingURL=pages_interview_advanced_interview-advanced-4.md.88ba78c8.js.map
