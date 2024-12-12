import{_ as s,o as n,c as a,e as l}from"./app.41cf67d2.js";const F=JSON.parse('{"title":"elk相关问题","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/other/elk-note/elk-note-5.md","filePath":"pages/note/other/elk-note/elk-note-5.md","lastUpdated":1700115938000}'),p={name:"pages/note/other/elk-note/elk-note-5.md"},o=l(`<h1 id="elk相关问题" tabindex="-1">elk相关问题 <a class="header-anchor" href="#elk相关问题" aria-label="Permalink to &quot;elk相关问题&quot;">​</a></h1><h2 id="_1-vue连接es" tabindex="-1">1. vue连接es <a class="header-anchor" href="#_1-vue连接es" aria-label="Permalink to &quot;1. vue连接es&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;/elasticApi&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  changeOrigin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//允许跨域</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: dataWareConfig.elsearchUrl,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ws: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  pathRewrite: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;^/elasticApi&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/router/axios_elk&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 接口 - 查询</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getESApi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">indexes</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">axios</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">\`/\${</span><span style="color:#E1E4E8;">esApiUrl</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">indexes</span><span style="color:#9ECBFF;">}/_search\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: params</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// es api 操作 1111</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">esOptionApi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">indexes</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">succ</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// console.log(&quot;es api 操作&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">getESApi</span><span style="color:#E1E4E8;">(indexes, params).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> hitsData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res.data;  </span><span style="color:#6A737D;">// 获取目标数据集合</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(hitsData.hits) {</span></span>
<span class="line"><span style="color:#E1E4E8;">             hitsData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> hitsData.hits;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#B392F0;">succ</span><span style="color:#E1E4E8;">(hitsData);</span></span>
<span class="line"><span style="color:#E1E4E8;">         } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#6A737D;">// 当没有返回异常状态码时，执行回调</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(hitsData.</span><span style="color:#B392F0;">hasOwnProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">succ</span><span style="color:#E1E4E8;">(hitsData);</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(hitsData.status </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">) { </span><span style="color:#6A737D;">// 当索引存在时，返回错误，需要提示</span></span>
<span class="line"><span style="color:#E1E4E8;">                Message.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;es数据获取异常&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">             }</span></span>
<span class="line"><span style="color:#E1E4E8;">         }</span></span>
<span class="line"><span style="color:#E1E4E8;">     }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">             Message.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;es数据获取异常&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">             console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err);</span></span>
<span class="line"><span style="color:#E1E4E8;">         }</span></span>
<span class="line"><span style="color:#E1E4E8;">     });</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 调用es接口</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> params </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;constant_score&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;filter&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;term&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;__id.keyword&quot;</span><span style="color:#E1E4E8;">: id</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 调用es接口删除数据</span></span>
<span class="line"><span style="color:#E1E4E8;">dataWareUtil.</span><span style="color:#B392F0;">esOptionApi</span><span style="color:#E1E4E8;">(delForecastoList, params, </span><span style="color:#FFAB70;">hisData</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// todo(hisData);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;/elasticApi&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  changeOrigin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//允许跨域</span></span>
<span class="line"><span style="color:#24292E;">  target: dataWareConfig.elsearchUrl,</span></span>
<span class="line"><span style="color:#24292E;">  ws: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  pathRewrite: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;^/elasticApi&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/router/axios_elk&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 接口 - 查询</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getESApi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">indexes</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">axios</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        url: </span><span style="color:#032F62;">\`/\${</span><span style="color:#24292E;">esApiUrl</span><span style="color:#032F62;">}/\${</span><span style="color:#24292E;">indexes</span><span style="color:#032F62;">}/_search\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        method: </span><span style="color:#032F62;">&#39;post&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data: params</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// es api 操作 1111</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">esOptionApi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">indexes</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;">, </span><span style="color:#E36209;">succ</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// console.log(&quot;es api 操作&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6F42C1;">getESApi</span><span style="color:#24292E;">(indexes, params).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> hitsData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res.data;  </span><span style="color:#6A737D;">// 获取目标数据集合</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(hitsData.hits) {</span></span>
<span class="line"><span style="color:#24292E;">             hitsData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> hitsData.hits;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#6F42C1;">succ</span><span style="color:#24292E;">(hitsData);</span></span>
<span class="line"><span style="color:#24292E;">         } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#6A737D;">// 当没有返回异常状态码时，执行回调</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(hitsData.</span><span style="color:#6F42C1;">hasOwnProperty</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">succ</span><span style="color:#24292E;">(hitsData);</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(hitsData.status </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;">) { </span><span style="color:#6A737D;">// 当索引存在时，返回错误，需要提示</span></span>
<span class="line"><span style="color:#24292E;">                Message.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;es数据获取异常&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">             }</span></span>
<span class="line"><span style="color:#24292E;">         }</span></span>
<span class="line"><span style="color:#24292E;">     }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(err) {</span></span>
<span class="line"><span style="color:#24292E;">             Message.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;es数据获取异常&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">             console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err);</span></span>
<span class="line"><span style="color:#24292E;">         }</span></span>
<span class="line"><span style="color:#24292E;">     });</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 调用es接口</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;constant_score&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;filter&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;term&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;__id.keyword&quot;</span><span style="color:#24292E;">: id</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 调用es接口删除数据</span></span>
<span class="line"><span style="color:#24292E;">dataWareUtil.</span><span style="color:#6F42C1;">esOptionApi</span><span style="color:#24292E;">(delForecastoList, params, </span><span style="color:#E36209;">hisData</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// todo(hisData);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><h2 id="_2-kibana插件开发" tabindex="-1">2. kibana插件开发 <a class="header-anchor" href="#_2-kibana插件开发" aria-label="Permalink to &quot;2. kibana插件开发&quot;">​</a></h2><ul><li>elastic在npm上发布了一些制作插件的工具，在你没有完全了解该如何做插件开发之前，可以直接使用工具来帮你生成插件</li><li>npm install -g yo</li><li>npm install -g generator-kibana-plugin</li><li>mkdir echartdashboard-plugin</li><li>cd echartdashboard-plugin</li><li>yo kibana-plugin</li></ul>`,5),e=[o];function r(c,t,E,y,i,u){return n(),a("div",null,e)}const m=s(p,[["render",r]]);export{F as __pageData,m as default};
