import{_ as s,o as n,c as a,e as l}from"./app.eca400a4.js";const b=JSON.parse('{"title":"node中的日志文件","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/node-note/node-demo-1.md","filePath":"pages/note/front/node-note/node-demo-1.md","lastUpdated":1703488604000}'),p={name:"pages/note/front/node-note/node-demo-1.md"},o=l(`<h1 id="node中的日志文件" tabindex="-1">node中的日志文件 <a class="header-anchor" href="#node中的日志文件" aria-label="Permalink to &quot;node中的日志文件&quot;">​</a></h1><h2 id="_1-node中的log文件" tabindex="-1">1. node中的log文件 <a class="header-anchor" href="#_1-node中的log文件" aria-label="Permalink to &quot;1. node中的log文件&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// yarn add log4js log4js-json-layout</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">log4js</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log4js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">jsonLayout</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;log4js-json-layout&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">log4js.</span><span style="color:#B392F0;">addLayout</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">, jsonLayout);</span></span>
<span class="line"><span style="color:#E1E4E8;">log4js.</span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  appenders: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    test: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;file&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;../logs/test.log&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      layout: { type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">, separator: </span><span style="color:#9ECBFF;">&#39;,&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  categories: { default: { appenders: [</span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">], level: </span><span style="color:#9ECBFF;">&quot;debug&quot;</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">log4js.</span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  appenders: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    xxx: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;file&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;../logs/xxx.log&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      layout: { type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">, separator: </span><span style="color:#9ECBFF;">&#39;,&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  categories: { default: { appenders: [</span><span style="color:#9ECBFF;">&quot;xxx&quot;</span><span style="color:#E1E4E8;">], level: </span><span style="color:#9ECBFF;">&quot;debug&quot;</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">log4js.</span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> log4js.getLogger;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../lib/logger.js&#39;</span><span style="color:#E1E4E8;">)(</span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">log.</span><span style="color:#B392F0;">info</span><span style="color:#E1E4E8;">({</span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;tttt&quot;</span><span style="color:#E1E4E8;">}); </span><span style="color:#6A737D;">// write data into log</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// yarn add log4js log4js-json-layout</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">log4js</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;log4js&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">jsonLayout</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;log4js-json-layout&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">log4js.</span><span style="color:#6F42C1;">addLayout</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">, jsonLayout);</span></span>
<span class="line"><span style="color:#24292E;">log4js.</span><span style="color:#6F42C1;">configure</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  appenders: {</span></span>
<span class="line"><span style="color:#24292E;">    test: {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;file&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">      filename: </span><span style="color:#032F62;">&#39;../logs/test.log&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      layout: { type: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">, separator: </span><span style="color:#032F62;">&#39;,&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  categories: { default: { appenders: [</span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">], level: </span><span style="color:#032F62;">&quot;debug&quot;</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">log4js.</span><span style="color:#6F42C1;">configure</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  appenders: {</span></span>
<span class="line"><span style="color:#24292E;">    xxx: {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;file&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">      filename: </span><span style="color:#032F62;">&#39;../logs/xxx.log&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      layout: { type: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">, separator: </span><span style="color:#032F62;">&#39;,&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  categories: { default: { appenders: [</span><span style="color:#032F62;">&quot;xxx&quot;</span><span style="color:#24292E;">], level: </span><span style="color:#032F62;">&quot;debug&quot;</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">log4js.</span><span style="color:#6F42C1;">configure</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">......</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> log4js.getLogger;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">log</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../lib/logger.js&#39;</span><span style="color:#24292E;">)(</span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">({</span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;tttt&quot;</span><span style="color:#24292E;">}); </span><span style="color:#6A737D;">// write data into log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>`,3),e=[o];function t(r,c,E,y,i,u){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{b as __pageData,d as default};
//# sourceMappingURL=pages_note_front_node-note_node-demo-1.md.cab51167.js.map
