import{_ as s,o as a,c as o,e as n}from"./app.eca400a4.js";const i=JSON.parse('{"title":"elk学习样例数据","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/other/elk-note/elk-note-6.md","filePath":"pages/note/other/elk-note/elk-note-6.md","lastUpdated":1700115938000}'),l={name:"pages/note/other/elk-note/elk-note-6.md"},p=n(`<h1 id="elk学习样例数据" tabindex="-1">elk学习样例数据 <a class="header-anchor" href="#elk学习样例数据" aria-label="Permalink to &quot;elk学习样例数据&quot;">​</a></h1><blockquote><p>在kibana首页，将数据添加到kibana栏目下有一个添加样例数据链接</p></blockquote><h2 id="_1-vega相关语法" tabindex="-1">1. vega相关语法 <a class="header-anchor" href="#_1-vega相关语法" aria-label="Permalink to &quot;1. vega相关语法&quot;">​</a></h2><blockquote><p><a href="https://vega.github.io/vega-lite/" target="_blank" rel="noreferrer">https://vega.github.io/vega-lite/</a></p></blockquote><ul><li>基本示例</li></ul><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;$schema&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://vega.github.io/schema/vega-lite/v5.json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;A simple bar chart with embedded data.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;values&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#79B8FF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;A&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;">}, {</span><span style="color:#79B8FF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;B&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">55</span><span style="color:#E1E4E8;">}, {</span><span style="color:#79B8FF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;C&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">43</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#79B8FF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;D&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">91</span><span style="color:#E1E4E8;">}, {</span><span style="color:#79B8FF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;E&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">81</span><span style="color:#E1E4E8;">}, {</span><span style="color:#79B8FF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;F&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">53</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#79B8FF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;G&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">19</span><span style="color:#E1E4E8;">}, {</span><span style="color:#79B8FF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;H&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">87</span><span style="color:#E1E4E8;">}, {</span><span style="color:#79B8FF;">&quot;a&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;I&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">52</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;mark&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;encoding&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;x&quot;</span><span style="color:#E1E4E8;">: {</span><span style="color:#79B8FF;">&quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;nominal&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;axis&quot;</span><span style="color:#E1E4E8;">: {</span><span style="color:#79B8FF;">&quot;labelAngle&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">}},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;y&quot;</span><span style="color:#E1E4E8;">: {</span><span style="color:#79B8FF;">&quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;quantitative&quot;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;$schema&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://vega.github.io/schema/vega-lite/v5.json&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;A simple bar chart with embedded data.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;values&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span><span style="color:#005CC5;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;A&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">28</span><span style="color:#24292E;">}, {</span><span style="color:#005CC5;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;B&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">55</span><span style="color:#24292E;">}, {</span><span style="color:#005CC5;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;C&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">43</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">      {</span><span style="color:#005CC5;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;D&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">91</span><span style="color:#24292E;">}, {</span><span style="color:#005CC5;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;E&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">81</span><span style="color:#24292E;">}, {</span><span style="color:#005CC5;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;F&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">53</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">      {</span><span style="color:#005CC5;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;G&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">19</span><span style="color:#24292E;">}, {</span><span style="color:#005CC5;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;H&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">87</span><span style="color:#24292E;">}, {</span><span style="color:#005CC5;">&quot;a&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;I&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;b&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">52</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;mark&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;encoding&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;x&quot;</span><span style="color:#24292E;">: {</span><span style="color:#005CC5;">&quot;field&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;nominal&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;axis&quot;</span><span style="color:#24292E;">: {</span><span style="color:#005CC5;">&quot;labelAngle&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">}},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;y&quot;</span><span style="color:#24292E;">: {</span><span style="color:#005CC5;">&quot;field&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;quantitative&quot;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,6),t=[p];function e(c,r,E,y,u,q){return a(),o("div",null,t)}const C=s(l,[["render",e]]);export{i as __pageData,C as default};
//# sourceMappingURL=pages_note_other_elk-note_elk-note-6.md.7cac3278.js.map
