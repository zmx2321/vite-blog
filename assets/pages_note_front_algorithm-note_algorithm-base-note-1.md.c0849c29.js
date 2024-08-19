import{_ as s,o as n,c as a,e as l}from"./app.eca400a4.js";const m=JSON.parse('{"title":"数组冒泡","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/algorithm-note/algorithm-base-note-1.md","filePath":"pages/note/front/algorithm-note/algorithm-base-note-1.md","lastUpdated":1700126610000}'),p={name:"pages/note/front/algorithm-note/algorithm-base-note-1.md"},o=l(`<h1 id="数组冒泡" tabindex="-1">数组冒泡 <a class="header-anchor" href="#数组冒泡" aria-label="Permalink to &quot;数组冒泡&quot;">​</a></h1><h2 id="解答" tabindex="-1">解答 <a class="header-anchor" href="#解答" aria-label="Permalink to &quot;解答&quot;">​</a></h2><blockquote><p><a href="https://zmx2321.github.io/blog_code/algorithm/other/example/base/arr_maopao" target="_blank" rel="noreferrer">代码笔记</a></p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 冒泡排序: 让前项和后项比较，如果当期项大于后一项，两者交换位置</span></span>
<span class="line"><span style="color:#6A737D;"> * 每一轮当前项和后一项两两比较，虽然不一定达到最后结果，但是已经把当前最大的值放到末尾了</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> ary </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bubbleSort</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ary</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ary.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> j</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ary.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">i; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){    </span><span style="color:#6A737D;">//每一轮比较的次数</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(ary[j] </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> ary[j</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]){    </span><span style="color:#6A737D;">//如果当期项大于后一项，两者交换位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ary[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                ary[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ary[j</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">                ary[j</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> temp;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ary;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bubbleSort</span><span style="color:#E1E4E8;">(ary);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 冒泡排序: 让前项和后项比较，如果当期项大于后一项，两者交换位置</span></span>
<span class="line"><span style="color:#6A737D;"> * 每一轮当前项和后一项两两比较，虽然不一定达到最后结果，但是已经把当前最大的值放到末尾了</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> ary </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bubbleSort</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ary</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ary.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> j</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ary.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">i; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){    </span><span style="color:#6A737D;">//每一轮比较的次数</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(ary[j] </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> ary[j</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]){    </span><span style="color:#6A737D;">//如果当期项大于后一项，两者交换位置</span></span>
<span class="line"><span style="color:#24292E;">                temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ary[j];</span></span>
<span class="line"><span style="color:#24292E;">                ary[j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ary[j</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">                ary[j</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> temp;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ary;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bubbleSort</span><span style="color:#24292E;">(ary);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,4),e=[o];function r(c,t,y,E,i,b){return n(),a("div",null,e)}const u=s(p,[["render",r]]);export{m as __pageData,u as default};
//# sourceMappingURL=pages_note_front_algorithm-note_algorithm-base-note-1.md.c0849c29.js.map
