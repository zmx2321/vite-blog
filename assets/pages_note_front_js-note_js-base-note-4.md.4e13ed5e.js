import{_ as s,o as n,c as a,e as l}from"./app.45a5b12c.js";const m=JSON.parse('{"title":"echarts问题集锦","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/js-note/js-base-note-4.md","filePath":"pages/note/front/js-note/js-base-note-4.md","lastUpdated":1715238442000}'),p={name:"pages/note/front/js-note/js-base-note-4.md"},o=l(`<h1 id="echarts问题集锦" tabindex="-1">echarts问题集锦 <a class="header-anchor" href="#echarts问题集锦" aria-label="Permalink to &quot;echarts问题集锦&quot;">​</a></h1><h2 id="_1-vue中echarts图表" tabindex="-1">1. vue中echarts图表 <a class="header-anchor" href="#_1-vue中echarts图表" aria-label="Permalink to &quot;1. vue中echarts图表&quot;">​</a></h2><ul><li><code>yarn add echarts</code></li><li>main.js</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> echarts </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;echarts&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.echarts </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> echarts;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> echarts </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;echarts&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.echarts </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> echarts;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>父组件</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">ZhuZhuangTu</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;zzt&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:zzt=&#39;zzt&#39;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 柱状图信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    zzt: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        area: [],  </span><span style="color:#6A737D;">// 柱状图省份</span></span>
<span class="line"><span style="color:#E1E4E8;">        cityNum: [],  </span><span style="color:#6A737D;">// 柱状图数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 人员进出省份统计</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getTrackCountByProList</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.listLoading </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> params </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          stime: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DateTime</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTheDate</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot; 00:00:00&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          etime: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DateTime</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTheDate</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot; 23:59:59&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">getTrackCountByPros</span><span style="color:#E1E4E8;">(params).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.listLoading </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> trackCountByProsList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res.data.data.data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// console.log(trackCountByProsList);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> trackCountByProsList) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> trackCountByProsList[item] </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#6A737D;">// console.log(trackCountByProsList[item]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#6A737D;">// 获取城市名称数组</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.province_name.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                      name: trackCountByProsList[item].name</span></span>
<span class="line"><span style="color:#E1E4E8;">                  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#6A737D;">// 获取城市人流量</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zzt.cityNum.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                      num: trackCountByProsList[item].num</span></span>
<span class="line"><span style="color:#E1E4E8;">                  });</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 柱状图</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zzt.area </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.province_name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.zzt.</span><span style="color:#B392F0;">getChartData</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">({});</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">mouteds</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getTrackCountByProList</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">ZhuZhuangTu</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;zzt&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:zzt=&#39;zzt&#39;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 柱状图信息</span></span>
<span class="line"><span style="color:#24292E;">    zzt: {</span></span>
<span class="line"><span style="color:#24292E;">        area: [],  </span><span style="color:#6A737D;">// 柱状图省份</span></span>
<span class="line"><span style="color:#24292E;">        cityNum: [],  </span><span style="color:#6A737D;">// 柱状图数据</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">methods</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 人员进出省份统计</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getTrackCountByProList</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.listLoading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          stime: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DateTime</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTheDate</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot; 00:00:00&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          etime: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DateTime</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTheDate</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot; 23:59:59&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">getTrackCountByPros</span><span style="color:#24292E;">(params).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.listLoading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> trackCountByProsList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res.data.data.data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// console.log(trackCountByProsList);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> trackCountByProsList) {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> trackCountByProsList[item] </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6A737D;">// console.log(trackCountByProsList[item]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6A737D;">// 获取城市名称数组</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.province_name.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                      name: trackCountByProsList[item].name</span></span>
<span class="line"><span style="color:#24292E;">                  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6A737D;">// 获取城市人流量</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zzt.cityNum.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                      num: trackCountByProsList[item].num</span></span>
<span class="line"><span style="color:#24292E;">                  });</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 柱状图</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zzt.area </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.province_name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$refs.zzt.</span><span style="color:#6F42C1;">getChartData</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">({});</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">mouteds</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getTrackCountByProList</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><ul><li>子组件</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 接受父组件的值</span></span>
<span class="line"><span style="color:#B392F0;">props</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">zzt</span><span style="color:#E1E4E8;">: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 柱状图数据</span></span>
<span class="line"><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">province_name</span><span style="color:#E1E4E8;">:[],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">cityNum</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取柱状图数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getChartData</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(this.zzt);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 获取省份</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zzt.area) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zzt.area[item].name </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.province_name.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zzt.area[item].name);</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(&quot;获取省份&quot;, this.province_name);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 获取城市数据</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zzt.cityNum) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zzt.cityNum[item].num </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.cityNum.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zzt.cityNum[item].num);</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(&quot;获取城市数据&quot;, this.cityNum);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 渲染柱状图</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">drawCal</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 渲染柱状图</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">drawCal</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;echarts&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> option </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          xAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              type: </span><span style="color:#9ECBFF;">&#39;category&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.province_name,</span></span>
<span class="line"><span style="color:#E1E4E8;">              axisLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  inside: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      color: </span><span style="color:#9ECBFF;">&#39;#b9b7b7&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  interval: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 加上这个强制显示</span></span>
<span class="line"><span style="color:#E1E4E8;">                  rotate: </span><span style="color:#79B8FF;">63</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              z: </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          yAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&quot;单位/人&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              nameTextStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  color: </span><span style="color:#9ECBFF;">&#39;#9FA9BC&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  padding : [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              axisLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      color: </span><span style="color:#9ECBFF;">&#39;#b9b7b7&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataZoom: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type: </span><span style="color:#9ECBFF;">&#39;inside&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      color: </span><span style="color:#9ECBFF;">&#39;rgba(0,0,0,0.05)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  barGap: </span><span style="color:#9ECBFF;">&#39;-100%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  barCategoryGap: </span><span style="color:#9ECBFF;">&#39;40%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dataShadow,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  animation: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      barBorderRadius: [</span><span style="color:#79B8FF;">4.6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4.6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                      color: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                          type: </span><span style="color:#9ECBFF;">&quot;linear&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                          x: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                          y: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                          x2: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                          y2: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                          colorStops: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  color: </span><span style="color:#9ECBFF;">&quot;#03C2AC&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 0% 处的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">                              },</span></span>
<span class="line"><span style="color:#E1E4E8;">                              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  offset: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  color: </span><span style="color:#9ECBFF;">&quot;#000&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 100% 处的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">                              }</span></span>
<span class="line"><span style="color:#E1E4E8;">                          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                          globalCoord: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 缺省为 false</span></span>
<span class="line"><span style="color:#E1E4E8;">                      },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  emphasis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                          color: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                              type: </span><span style="color:#9ECBFF;">&quot;linear&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                              x: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                              y: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                              x2: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                              y2: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                              colorStops: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  color: </span><span style="color:#9ECBFF;">&quot;#000&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 0% 处的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  offset: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  color: </span><span style="color:#9ECBFF;">&quot;#03C2AC&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 100% 处的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">                                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                              ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                              globalCoord: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 缺省为 false</span></span>
<span class="line"><span style="color:#E1E4E8;">                          },</span></span>
<span class="line"><span style="color:#E1E4E8;">                      },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.cityNum,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//开启显示</span></span>
<span class="line"><span style="color:#E1E4E8;">                      position: </span><span style="color:#9ECBFF;">&#39;top&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//在上方显示</span></span>
<span class="line"><span style="color:#E1E4E8;">                      textStyle: { </span><span style="color:#6A737D;">//数值样式</span></span>
<span class="line"><span style="color:#E1E4E8;">                          color: </span><span style="color:#9ECBFF;">&#39;#9FA9BC&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                          fontSize: </span><span style="color:#79B8FF;">12</span></span>
<span class="line"><span style="color:#E1E4E8;">                      }</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">/* var zoomSize = 6;</span></span>
<span class="line"><span style="color:#6A737D;">      myChart.on(&#39;click&#39;, function (params) {</span></span>
<span class="line"><span style="color:#6A737D;">          console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);</span></span>
<span class="line"><span style="color:#6A737D;">          myChart.dispatchAction({</span></span>
<span class="line"><span style="color:#6A737D;">              type: &#39;dataZoom&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">              startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],</span></span>
<span class="line"><span style="color:#6A737D;">              endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]</span></span>
<span class="line"><span style="color:#6A737D;">          });</span></span>
<span class="line"><span style="color:#6A737D;">      }); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(option);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 接受父组件的值</span></span>
<span class="line"><span style="color:#6F42C1;">props</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">zzt</span><span style="color:#24292E;">: Object,</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 柱状图数据</span></span>
<span class="line"><span style="color:#6F42C1;">methods</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">province_name</span><span style="color:#24292E;">:[],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">cityNum</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">methods</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取柱状图数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getChartData</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(this.zzt);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 获取省份</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zzt.area) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zzt.area[item].name </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.province_name.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zzt.area[item].name);</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(&quot;获取省份&quot;, this.province_name);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 获取城市数据</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zzt.cityNum) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zzt.cityNum[item].num </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.cityNum.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zzt.cityNum[item].num);</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(&quot;获取城市数据&quot;, this.cityNum);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 渲染柱状图</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">drawCal</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 渲染柱状图</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">drawCal</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;echarts&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> option </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          xAxis: {</span></span>
<span class="line"><span style="color:#24292E;">              type: </span><span style="color:#032F62;">&#39;category&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.province_name,</span></span>
<span class="line"><span style="color:#24292E;">              axisLabel: {</span></span>
<span class="line"><span style="color:#24292E;">                  inside: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                      color: </span><span style="color:#032F62;">&#39;#b9b7b7&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                  interval: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 加上这个强制显示</span></span>
<span class="line"><span style="color:#24292E;">                  rotate: </span><span style="color:#005CC5;">63</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">                  show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">                  show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              z: </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          yAxis: {</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&quot;单位/人&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              nameTextStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                  color: </span><span style="color:#032F62;">&#39;#9FA9BC&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  padding : [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">                  show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">                  show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              axisLabel: {</span></span>
<span class="line"><span style="color:#24292E;">                  textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                      color: </span><span style="color:#032F62;">&#39;#b9b7b7&#39;</span></span>
<span class="line"><span style="color:#24292E;">                  }</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          dataZoom: [</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                  type: </span><span style="color:#032F62;">&#39;inside&#39;</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">          ],</span></span>
<span class="line"><span style="color:#24292E;">          series: [</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                  type: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                      color: </span><span style="color:#032F62;">&#39;rgba(0,0,0,0.05)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                  barGap: </span><span style="color:#032F62;">&#39;-100%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  barCategoryGap: </span><span style="color:#032F62;">&#39;40%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dataShadow,</span></span>
<span class="line"><span style="color:#24292E;">                  animation: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                  type: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                      barBorderRadius: [</span><span style="color:#005CC5;">4.6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4.6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                      color: {</span></span>
<span class="line"><span style="color:#24292E;">                          type: </span><span style="color:#032F62;">&quot;linear&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                          x: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                          y: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                          x2: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                          y2: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                          colorStops: [</span></span>
<span class="line"><span style="color:#24292E;">                              {</span></span>
<span class="line"><span style="color:#24292E;">                                  offset: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                  color: </span><span style="color:#032F62;">&quot;#03C2AC&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 0% 处的颜色</span></span>
<span class="line"><span style="color:#24292E;">                              },</span></span>
<span class="line"><span style="color:#24292E;">                              {</span></span>
<span class="line"><span style="color:#24292E;">                                  offset: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                  color: </span><span style="color:#032F62;">&quot;#000&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 100% 处的颜色</span></span>
<span class="line"><span style="color:#24292E;">                              }</span></span>
<span class="line"><span style="color:#24292E;">                          ],</span></span>
<span class="line"><span style="color:#24292E;">                          globalCoord: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 缺省为 false</span></span>
<span class="line"><span style="color:#24292E;">                      },</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                  emphasis: {</span></span>
<span class="line"><span style="color:#24292E;">                      itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                          color: {</span></span>
<span class="line"><span style="color:#24292E;">                              type: </span><span style="color:#032F62;">&quot;linear&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                              x: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                              y: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                              x2: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                              y2: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                              colorStops: [</span></span>
<span class="line"><span style="color:#24292E;">                                  {</span></span>
<span class="line"><span style="color:#24292E;">                                  offset: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                  color: </span><span style="color:#032F62;">&quot;#000&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 0% 处的颜色</span></span>
<span class="line"><span style="color:#24292E;">                                  },</span></span>
<span class="line"><span style="color:#24292E;">                                  {</span></span>
<span class="line"><span style="color:#24292E;">                                  offset: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                  color: </span><span style="color:#032F62;">&quot;#03C2AC&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 100% 处的颜色</span></span>
<span class="line"><span style="color:#24292E;">                                  }</span></span>
<span class="line"><span style="color:#24292E;">                              ],</span></span>
<span class="line"><span style="color:#24292E;">                              globalCoord: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 缺省为 false</span></span>
<span class="line"><span style="color:#24292E;">                          },</span></span>
<span class="line"><span style="color:#24292E;">                      },</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                  data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.cityNum,</span></span>
<span class="line"><span style="color:#24292E;">                  label: {</span></span>
<span class="line"><span style="color:#24292E;">                      show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//开启显示</span></span>
<span class="line"><span style="color:#24292E;">                      position: </span><span style="color:#032F62;">&#39;top&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//在上方显示</span></span>
<span class="line"><span style="color:#24292E;">                      textStyle: { </span><span style="color:#6A737D;">//数值样式</span></span>
<span class="line"><span style="color:#24292E;">                          color: </span><span style="color:#032F62;">&#39;#9FA9BC&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                          fontSize: </span><span style="color:#005CC5;">12</span></span>
<span class="line"><span style="color:#24292E;">                      }</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/* var zoomSize = 6;</span></span>
<span class="line"><span style="color:#6A737D;">      myChart.on(&#39;click&#39;, function (params) {</span></span>
<span class="line"><span style="color:#6A737D;">          console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);</span></span>
<span class="line"><span style="color:#6A737D;">          myChart.dispatchAction({</span></span>
<span class="line"><span style="color:#6A737D;">              type: &#39;dataZoom&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">              startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],</span></span>
<span class="line"><span style="color:#6A737D;">              endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]</span></span>
<span class="line"><span style="color:#6A737D;">          });</span></span>
<span class="line"><span style="color:#6A737D;">      }); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(option);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br></div></div><h2 id="_2-图表电池样式" tabindex="-1">2.图表电池样式 <a class="header-anchor" href="#_2-图表电池样式" aria-label="Permalink to &quot;2.图表电池样式&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// var barData = [0, ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100)];</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> barData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">52</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">34</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> lineData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// option-start</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    grid: [{</span><span style="color:#6A737D;">//图形的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        top: </span><span style="color:#9ECBFF;">&quot;-1%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        left: </span><span style="color:#9ECBFF;">&quot;0%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        right: </span><span style="color:#9ECBFF;">&quot;0%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        bottom: </span><span style="color:#9ECBFF;">&quot;4%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    xAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//是否展示X轴</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    yAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#6A737D;">//不展示刻度</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;category&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      inverse: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        inside: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: [</span><span style="color:#9ECBFF;">&#39;服务器数（台）&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;计算容量（核）&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;内存容量（GB）&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;存储容量（PB）&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 下层块</span></span>
<span class="line"><span style="color:#E1E4E8;">      { </span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;pictorialBar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        symbol: </span><span style="color:#9ECBFF;">&#39;roundRect&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: </span><span style="color:#9ECBFF;">&#39;3%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barMaxWidth: </span><span style="color:#9ECBFF;">&#39;20%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        symbolOffset: [</span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;rgba(255,255,255,0.2000)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        z: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        symbolRepeat: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        symbolSize: [</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: lineData,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barGap: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barCategoryGap: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        animationEasing: </span><span style="color:#9ECBFF;">&#39;elasticOut&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 上层块</span></span>
<span class="line"><span style="color:#E1E4E8;">      { </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// name: &#39;&#39;, // blue bar</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;pictorialBar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        symbol: </span><span style="color:#9ECBFF;">&#39;roundRect&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: </span><span style="color:#9ECBFF;">&#39;2%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barMaxWidth: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        symbolOffset: [</span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            barMaxWidth: </span><span style="color:#9ECBFF;">&#39;20%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            barBorderRadius: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;#00C0FF&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        symbolRepeat: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        symbolSize: [</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: barData,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// option-end</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// var barData = [0, ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100)];</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> barData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">60</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">52</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">34</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">90</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> lineData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">63</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">63</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">63</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">63</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// option-start</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    grid: [{</span><span style="color:#6A737D;">//图形的位置</span></span>
<span class="line"><span style="color:#24292E;">        top: </span><span style="color:#032F62;">&quot;-1%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        left: </span><span style="color:#032F62;">&quot;0%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        right: </span><span style="color:#032F62;">&quot;0%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        bottom: </span><span style="color:#032F62;">&quot;4%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }],</span></span>
<span class="line"><span style="color:#24292E;">    xAxis: {</span></span>
<span class="line"><span style="color:#24292E;">      show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//是否展示X轴</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    yAxis: {</span></span>
<span class="line"><span style="color:#24292E;">      axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#6A737D;">//不展示刻度</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;category&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      inverse: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisLabel: {</span></span>
<span class="line"><span style="color:#24292E;">        inside: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      data: [</span><span style="color:#032F62;">&#39;服务器数（台）&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;计算容量（核）&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;内存容量（GB）&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;存储容量（PB）&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    series: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 下层块</span></span>
<span class="line"><span style="color:#24292E;">      { </span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;pictorialBar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        symbol: </span><span style="color:#032F62;">&#39;roundRect&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: </span><span style="color:#032F62;">&#39;3%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barMaxWidth: </span><span style="color:#032F62;">&#39;20%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        symbolOffset: [</span><span style="color:#005CC5;">75</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          normal: {</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;rgba(255,255,255,0.2000)&#39;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        z: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        symbolRepeat: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        symbolSize: [</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        data: lineData,</span></span>
<span class="line"><span style="color:#24292E;">        barGap: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barCategoryGap: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        animationEasing: </span><span style="color:#032F62;">&#39;elasticOut&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 上层块</span></span>
<span class="line"><span style="color:#24292E;">      { </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// name: &#39;&#39;, // blue bar</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;pictorialBar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        symbol: </span><span style="color:#032F62;">&#39;roundRect&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: </span><span style="color:#032F62;">&#39;2%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barMaxWidth: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        symbolOffset: [</span><span style="color:#005CC5;">75</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          normal: {</span></span>
<span class="line"><span style="color:#24292E;">            barMaxWidth: </span><span style="color:#032F62;">&#39;20%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            barBorderRadius: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;#00C0FF&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        symbolRepeat: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        symbolSize: [</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        data: barData,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// option-end</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">symbolSize</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">],  </span><span style="color:#6A737D;">// 电池大小</span></span>
<span class="line"><span style="color:#B392F0;">symbolOffset</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],  </span><span style="color:#6A737D;">// 电池位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//图形的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">grid</span><span style="color:#E1E4E8;">: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">    top: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    left: </span><span style="color:#9ECBFF;">&quot;-28%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    right: </span><span style="color:#9ECBFF;">&#39;29%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    bottom: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">xAxis</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//是否展示X轴</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">yAxis</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axisLine</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#6A737D;">//不展示刻度</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;category&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">series</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 下层块(总)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// var barData = [0, ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100)];</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;pictorialBar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbol: </span><span style="color:#9ECBFF;">&#39;roundRect&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// barWidth: 0,</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbolOffset: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.symbolOffset,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&#39;rgba(255,255,255,0.2000)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbolRepeat: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbolSize: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.symbolSize,</span></span>
<span class="line"><span style="color:#E1E4E8;">      barGap: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      barCategoryGap: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      animationEasing: </span><span style="color:#9ECBFF;">&#39;elasticOut&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: lineData,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 上层块</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;pictorialBar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbol: </span><span style="color:#9ECBFF;">&#39;roundRect&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// barWidth: 0,</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbolOffset: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.symbolOffset,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> echarts.graphic.</span><span style="color:#B392F0;">LinearGradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              color: </span><span style="color:#9ECBFF;">&#39;#00C0FF&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              offset: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              color: </span><span style="color:#9ECBFF;">&#39;rgba(0,192,255,0.3000)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ], </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbolRepeat: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      symbolSize: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.symbolSize,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: barData,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">symbolSize</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">],  </span><span style="color:#6A737D;">// 电池大小</span></span>
<span class="line"><span style="color:#6F42C1;">symbolOffset</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">75</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],  </span><span style="color:#6A737D;">// 电池位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//图形的位置</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">grid</span><span style="color:#24292E;">: [{</span></span>
<span class="line"><span style="color:#24292E;">    top: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    left: </span><span style="color:#032F62;">&quot;-28%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    right: </span><span style="color:#032F62;">&#39;29%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    bottom: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">xAxis</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//是否展示X轴</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">yAxis</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axisLine</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#6A737D;">//不展示刻度</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;category&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">series</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 下层块(总)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// var barData = [0, ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100)];</span></span>
<span class="line"><span style="color:#24292E;">    { </span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;pictorialBar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      symbol: </span><span style="color:#032F62;">&#39;roundRect&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// barWidth: 0,</span></span>
<span class="line"><span style="color:#24292E;">      symbolOffset: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.symbolOffset,</span></span>
<span class="line"><span style="color:#24292E;">      itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        normal: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&#39;rgba(255,255,255,0.2000)&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      symbolRepeat: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      symbolSize: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.symbolSize,</span></span>
<span class="line"><span style="color:#24292E;">      barGap: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      barCategoryGap: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      animationEasing: </span><span style="color:#032F62;">&#39;elasticOut&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data: lineData,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 上层块</span></span>
<span class="line"><span style="color:#24292E;">    { </span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;pictorialBar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      symbol: </span><span style="color:#032F62;">&#39;roundRect&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// barWidth: 0,</span></span>
<span class="line"><span style="color:#24292E;">      symbolOffset: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.symbolOffset,</span></span>
<span class="line"><span style="color:#24292E;">      itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        normal: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> echarts.graphic.</span><span style="color:#6F42C1;">LinearGradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              offset: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              color: </span><span style="color:#032F62;">&#39;#00C0FF&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              offset: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              color: </span><span style="color:#032F62;">&#39;rgba(0,192,255,0.3000)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          ], </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      symbolRepeat: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      symbolSize: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.symbolSize,</span></span>
<span class="line"><span style="color:#24292E;">      data: barData,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><h2 id="_3-柱状图定制" tabindex="-1">3. 柱状图定制 <a class="header-anchor" href="#_3-柱状图定制" aria-label="Permalink to &quot;3. 柱状图定制&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">tooltip</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">trigger</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;axis&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">textStyle</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">fontSize</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axisPointer</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;cross&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">crossStyle</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">grid</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;83%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">containLabel</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">legend</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      data:[</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;资产负债率&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendIcon</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemHeight: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">      left: </span><span style="color:#9ECBFF;">&#39;left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textStyle: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartTextStyle</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      data:[</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;存货增长比率&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendIcon</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],   </span></span>
<span class="line"><span style="color:#E1E4E8;">      itemWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemHeight: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">      left: </span><span style="color:#9ECBFF;">&#39;left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      left:</span><span style="color:#9ECBFF;">&#39;15%&#39;</span><span style="color:#E1E4E8;"> , </span><span style="color:#6A737D;">// 调整位置</span></span>
<span class="line"><span style="color:#E1E4E8;">      textStyle: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartTextStyle</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      data:[</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;应收账款增长率&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendIcon</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],  </span></span>
<span class="line"><span style="color:#E1E4E8;">      itemWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemHeight: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">      left: </span><span style="color:#9ECBFF;">&#39;right&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textStyle: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartTextStyle</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">xAxis</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;category&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">offset</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axisTick</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 隐藏刻度线</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axisLabel</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">padding</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">interval</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 横轴信息全部显示</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">rotate</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartTextStyle,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">align</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&#39;left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;"> (val) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> strs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">//字符串数组</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, s; (s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> strs[i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">]);) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">//遍历字符串数组</span></span>
<span class="line"><span style="color:#E1E4E8;">          str </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)) str </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//按需要求余</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> str;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: fieldData,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">yAxis</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.yAxisLine,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartTextStyle,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(val </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">val</span><span style="color:#9ECBFF;">}%\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">/* min: 0,</span></span>
<span class="line"><span style="color:#6A737D;">      max: 100,</span></span>
<span class="line"><span style="color:#6A737D;">      interval: 20, */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.yAxisLine,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartTextStyle,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(val </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">val</span><span style="color:#9ECBFF;">}%\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      min: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      max: </span><span style="color:#79B8FF;">2.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      interval: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">series</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;资产负债率&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.seriesType,</span></span>
<span class="line"><span style="color:#E1E4E8;">      barWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.barWidth,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> echarts.graphic.</span><span style="color:#B392F0;">LinearGradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;rgba(72,143,255,100)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            offset: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;rgba(5,32,115,0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ], </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: yData1,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;存货增长比率&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.seriesType,</span></span>
<span class="line"><span style="color:#E1E4E8;">      barWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.barWidth,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> echarts.graphic.</span><span style="color:#B392F0;">LinearGradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;rgba(175,143,255,100)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            offset: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;rgba(175,143,255,0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ], </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: yData2</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;应收账款增长率&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.seriesType,</span></span>
<span class="line"><span style="color:#E1E4E8;">      barWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.barWidth,</span></span>
<span class="line"><span style="color:#E1E4E8;">      yAxisIndex: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 在单个图表实例中存在多个y轴的时候有用</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> echarts.graphic.</span><span style="color:#B392F0;">LinearGradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;rgba(26,175,135,100)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            offset: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;rgba(26,175,135,0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ], </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: yData3</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">tooltip</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">trigger</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;axis&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">textStyle</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">fontSize</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axisPointer</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;cross&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">crossStyle</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#fff&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">grid</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">right</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">bottom</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;83%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">containLabel</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">legend</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      data:[</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;资产负债率&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          icon: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendIcon</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      itemWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendItem,</span></span>
<span class="line"><span style="color:#24292E;">      itemHeight: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendItem,</span></span>
<span class="line"><span style="color:#24292E;">      left: </span><span style="color:#032F62;">&#39;left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      textStyle: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartTextStyle</span></span>
<span class="line"><span style="color:#24292E;">    }, </span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      data:[</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;存货增长比率&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          icon: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendIcon</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ],   </span></span>
<span class="line"><span style="color:#24292E;">      itemWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendItem,</span></span>
<span class="line"><span style="color:#24292E;">      itemHeight: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendItem,</span></span>
<span class="line"><span style="color:#24292E;">      left: </span><span style="color:#032F62;">&#39;left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      left:</span><span style="color:#032F62;">&#39;15%&#39;</span><span style="color:#24292E;"> , </span><span style="color:#6A737D;">// 调整位置</span></span>
<span class="line"><span style="color:#24292E;">      textStyle: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartTextStyle</span></span>
<span class="line"><span style="color:#24292E;">    }, </span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      data:[</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;应收账款增长率&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          icon: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendIcon</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ],  </span></span>
<span class="line"><span style="color:#24292E;">      itemWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendItem,</span></span>
<span class="line"><span style="color:#24292E;">      itemHeight: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendItem,</span></span>
<span class="line"><span style="color:#24292E;">      left: </span><span style="color:#032F62;">&#39;right&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      textStyle: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartTextStyle</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">xAxis</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;category&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">offset</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axisTick</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 隐藏刻度线</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axisLabel</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">padding</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">23</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">interval</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 横轴信息全部显示</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">rotate</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartTextStyle,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">align</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;"> (val) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> strs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">//字符串数组</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, s; (s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> strs[i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">]);) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//遍历字符串数组</span></span>
<span class="line"><span style="color:#24292E;">          str </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)) str </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//按需要求余</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> str;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: fieldData,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">yAxis</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.yAxisLine,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisLabel: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartTextStyle,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(val </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> val</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">val</span><span style="color:#032F62;">}%\`</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/* min: 0,</span></span>
<span class="line"><span style="color:#6A737D;">      max: 100,</span></span>
<span class="line"><span style="color:#6A737D;">      interval: 20, */</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.yAxisLine,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisLabel: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartTextStyle,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(val </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> val</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">val</span><span style="color:#032F62;">}%\`</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      min: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      max: </span><span style="color:#005CC5;">2.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      interval: </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">series</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;资产负债率&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.seriesType,</span></span>
<span class="line"><span style="color:#24292E;">      barWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.barWidth,</span></span>
<span class="line"><span style="color:#24292E;">      itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> echarts.graphic.</span><span style="color:#6F42C1;">LinearGradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            offset: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;rgba(72,143,255,100)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            offset: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;rgba(5,32,115,0)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ], </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      data: yData1,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;存货增长比率&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.seriesType,</span></span>
<span class="line"><span style="color:#24292E;">      barWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.barWidth,</span></span>
<span class="line"><span style="color:#24292E;">      itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> echarts.graphic.</span><span style="color:#6F42C1;">LinearGradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            offset: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;rgba(175,143,255,100)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            offset: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;rgba(175,143,255,0)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ], </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      data: yData2</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;应收账款增长率&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.seriesType,</span></span>
<span class="line"><span style="color:#24292E;">      barWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.barWidth,</span></span>
<span class="line"><span style="color:#24292E;">      yAxisIndex: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 在单个图表实例中存在多个y轴的时候有用</span></span>
<span class="line"><span style="color:#24292E;">      itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> echarts.graphic.</span><span style="color:#6F42C1;">LinearGradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            offset: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;rgba(26,175,135,100)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            offset: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;rgba(26,175,135,0)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ], </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      data: yData3</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br></div></div><h2 id="_4-图表横向重叠" tabindex="-1">4. 图表横向重叠 <a class="header-anchor" href="#_4-图表横向重叠" aria-label="Permalink to &quot;4. 图表横向重叠&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lineColors,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">legend</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">textStyle</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.lendTextStyle,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">itemWidth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">itemHeight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legendItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* formatter (val) {</span></span>
<span class="line"><span style="color:#6A737D;">      console.log(val)</span></span>
<span class="line"><span style="color:#6A737D;">    } */</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">grid</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">xAxis</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">minorSplitLine</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">yAxis</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;category&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 去除网格线</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axisLine</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 去除刻度线</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">axisTick</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">series</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setOptions</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">option</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(option)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartData.fieldData.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    option.series.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack: </span><span style="color:#9ECBFF;">&#39;total&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      barWidth: </span><span style="color:#9ECBFF;">&#39;10px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      emphasis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        focus: </span><span style="color:#9ECBFF;">&#39;series&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartData.legend[i],</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartData.fieldData[i],</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(option)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">industrialTalentData1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  legend: [</span><span style="color:#9ECBFF;">&#39;华为&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;中兴&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;烽火&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;瑞斯&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  fieldData: [[</span><span style="color:#79B8FF;">320</span><span style="color:#E1E4E8;">], [</span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">], [</span><span style="color:#79B8FF;">220</span><span style="color:#E1E4E8;">], [</span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">]],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.lineColors,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">legend</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">left</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">textStyle</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.lendTextStyle,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">itemWidth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendItem,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">itemHeight</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legendItem,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* formatter (val) {</span></span>
<span class="line"><span style="color:#6A737D;">      console.log(val)</span></span>
<span class="line"><span style="color:#6A737D;">    } */</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">grid</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">right</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">bottom</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">xAxis</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">minorSplitLine</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">yAxis</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;category&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 去除网格线</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axisLine</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 去除刻度线</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">axisTick</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">series</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setOptions</span><span style="color:#24292E;">(</span><span style="color:#E36209;">option</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(option)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartData.fieldData.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    option.series.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stack: </span><span style="color:#032F62;">&#39;total&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      barWidth: </span><span style="color:#032F62;">&#39;10px&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      emphasis: {</span></span>
<span class="line"><span style="color:#24292E;">        focus: </span><span style="color:#032F62;">&#39;series&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartData.legend[i],</span></span>
<span class="line"><span style="color:#24292E;">      data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartData.fieldData[i],</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(option)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">industrialTalentData1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  legend: [</span><span style="color:#032F62;">&#39;华为&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;中兴&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;烽火&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;瑞斯&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  fieldData: [[</span><span style="color:#005CC5;">320</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">120</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">220</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">150</span><span style="color:#24292E;">]],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><h2 id="_5-echarts在lend上添加百分比" tabindex="-1">5. echarts在lend上添加百分比 <a class="header-anchor" href="#_5-echarts在lend上添加百分比" aria-label="Permalink to &quot;5. echarts在lend上添加百分比&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;"> (name) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { fieldData, legend } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> that.chartData</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> total </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> curData</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">legend.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    total </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(fieldData[i][</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(legend[i] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> name) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      curData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(fieldData[i][</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(((curData </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> total) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;%&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//求出百分比</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">} \${</span><span style="color:#E1E4E8;">p</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;"> (name) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { fieldData } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> that.chartData</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> curData</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">fieldData.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(fieldData[i].name </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> name) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      curData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fieldData[i].percentage</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}(\${</span><span style="color:#E1E4E8;">curData</span><span style="color:#9ECBFF;">}%)\`</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;"> (name) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { fieldData, legend } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> that.chartData</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> total </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> curData</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">legend.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    total </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(fieldData[i][</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(legend[i] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> name) {</span></span>
<span class="line"><span style="color:#24292E;">      curData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(fieldData[i][</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">(((curData </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> total) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;%&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//求出百分比</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">} \${</span><span style="color:#24292E;">p</span><span style="color:#032F62;">}\`</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;"> (name) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { fieldData } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> that.chartData</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> curData</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">fieldData.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(fieldData[i].name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> name) {</span></span>
<span class="line"><span style="color:#24292E;">      curData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fieldData[i].percentage</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}(\${</span><span style="color:#24292E;">curData</span><span style="color:#032F62;">}%)\`</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="_6-在图例上做点击事件" tabindex="-1">6. 在图例上做点击事件 <a class="header-anchor" href="#_6-在图例上做点击事件" aria-label="Permalink to &quot;6. 在图例上做点击事件&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chart.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;legendselectchanged&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">obj</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(this.chartData, obj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    legend:{ selected:{  [obj.name]: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">}}</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chart.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;legendselectchanged&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">obj</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(this.chartData, obj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    legend:{ selected:{  [obj.name]: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">}}</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_66-echarts日历" tabindex="-1">66. echarts日历 <a class="header-anchor" href="#_66-echarts日历" aria-label="Permalink to &quot;66. echarts日历&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fxrl</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> graphData1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">&#39;2021-02-01&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">260</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;2021-02-04&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">200</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;2021-02-09&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">279</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;2021-02-13&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">847</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;2021-02-18&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">241</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;2021-02-23&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">411</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;2021-02-27&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">985</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> graphData2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">&#39;2021-01-01&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">260</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;2021-01-04&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">200</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tooltip: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          position: </span><span style="color:#9ECBFF;">&#39;top&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">      calendar: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">          orient: </span><span style="color:#9ECBFF;">&#39;vertical&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          yearLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              margin: </span><span style="color:#79B8FF;">40</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          monthLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              nameMap: </span><span style="color:#9ECBFF;">&#39;cn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              margin: </span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          dayLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              firstDay: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              nameMap: </span><span style="color:#9ECBFF;">&#39;cn&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          cellSize: </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          range: </span><span style="color:#9ECBFF;">&#39;2021-02&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">          orient: </span><span style="color:#9ECBFF;">&#39;vertical&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          yearLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              margin: </span><span style="color:#79B8FF;">40</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          monthLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              nameMap: </span><span style="color:#9ECBFF;">&#39;cn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              margin: </span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          dayLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              firstDay: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              nameMap: </span><span style="color:#9ECBFF;">&#39;cn&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          cellSize: </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          left: </span><span style="color:#79B8FF;">460</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          range: </span><span style="color:#9ECBFF;">&#39;2021-01&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">      series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;effectScatter&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          coordinateSystem: </span><span style="color:#9ECBFF;">&#39;calendar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          symbolSize: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          calendarIndex: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          data: graphData1</span></span>
<span class="line"><span style="color:#E1E4E8;">      },  </span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;effectScatter&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          coordinateSystem: </span><span style="color:#9ECBFF;">&#39;calendar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          calendarIndex: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          data: graphData2</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fxrl</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> graphData1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&#39;2021-02-01&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">260</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;2021-02-04&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">200</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;2021-02-09&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">279</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;2021-02-13&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">847</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;2021-02-18&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">241</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;2021-02-23&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">411</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;2021-02-27&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">985</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> graphData2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#032F62;">&#39;2021-01-01&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">260</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;2021-01-04&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">200</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      tooltip: {</span></span>
<span class="line"><span style="color:#24292E;">          position: </span><span style="color:#032F62;">&#39;top&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">      calendar: [{</span></span>
<span class="line"><span style="color:#24292E;">          orient: </span><span style="color:#032F62;">&#39;vertical&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          yearLabel: {</span></span>
<span class="line"><span style="color:#24292E;">              margin: </span><span style="color:#005CC5;">40</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          monthLabel: {</span></span>
<span class="line"><span style="color:#24292E;">              nameMap: </span><span style="color:#032F62;">&#39;cn&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              margin: </span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          dayLabel: {</span></span>
<span class="line"><span style="color:#24292E;">              firstDay: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              nameMap: </span><span style="color:#032F62;">&#39;cn&#39;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          cellSize: </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          range: </span><span style="color:#032F62;">&#39;2021-02&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">          orient: </span><span style="color:#032F62;">&#39;vertical&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          yearLabel: {</span></span>
<span class="line"><span style="color:#24292E;">              margin: </span><span style="color:#005CC5;">40</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          monthLabel: {</span></span>
<span class="line"><span style="color:#24292E;">              nameMap: </span><span style="color:#032F62;">&#39;cn&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              margin: </span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          dayLabel: {</span></span>
<span class="line"><span style="color:#24292E;">              firstDay: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              nameMap: </span><span style="color:#032F62;">&#39;cn&#39;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          cellSize: </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          left: </span><span style="color:#005CC5;">460</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          range: </span><span style="color:#032F62;">&#39;2021-01&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }],</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">      series: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;effectScatter&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          coordinateSystem: </span><span style="color:#032F62;">&#39;calendar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          symbolSize: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          calendarIndex: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          data: graphData1</span></span>
<span class="line"><span style="color:#24292E;">      },  </span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;effectScatter&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          coordinateSystem: </span><span style="color:#032F62;">&#39;calendar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          calendarIndex: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          data: graphData2</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br></div></div><h2 id="_68-echarts警告" tabindex="-1">68. echarts警告 <a class="header-anchor" href="#_68-echarts警告" aria-label="Permalink to &quot;68. echarts警告&quot;">​</a></h2><blockquote><p>There is a chart instance already initialized on the dom</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 资金下拉框</span></span>
<span class="line"><span style="color:#B392F0;">changeMoney</span><span style="color:#E1E4E8;">(val) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.nameList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyYearAvgList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyNowSimList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hyzj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.resdata.industry_money_cnt_list.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.nameList.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(item.name)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyYearAvgList.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(item.l_money)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyNowSimList.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(item.money)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 主要是这个</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$echarts.</span><span style="color:#B392F0;">getInstanceByDom</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyChartDom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 渲染图表</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyOption </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyOption);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hyfg</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.resdata.industry_money_cnt_list.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.nameList.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(item.name)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyYearAvgList.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(item.l_ent_count)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyNowSimList.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(item.ent_count)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 主要是这个</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$echarts.</span><span style="color:#B392F0;">getInstanceByDom</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyChartDom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 渲染图表</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyOption </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.moneyOption);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;">(val) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">hyzj</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">hyfg</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 资金下拉框</span></span>
<span class="line"><span style="color:#6F42C1;">changeMoney</span><span style="color:#24292E;">(val) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.nameList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyYearAvgList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyNowSimList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hyzj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.resdata.industry_money_cnt_list.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.nameList.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item.name)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyYearAvgList.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item.l_money)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyNowSimList.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item.money)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 主要是这个</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$echarts.</span><span style="color:#6F42C1;">getInstanceByDom</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyChartDom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 渲染图表</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyOption </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyOption);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hyfg</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.resdata.industry_money_cnt_list.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.nameList.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item.name)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyYearAvgList.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item.l_ent_count)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyNowSimList.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(item.ent_count)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 主要是这个</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$echarts.</span><span style="color:#6F42C1;">getInstanceByDom</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyChartDom);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 渲染图表</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyOption </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.moneyOption);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;">(val) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">hyzj</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">hyfg</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="_69-在计算属性中获取echarts" tabindex="-1">69. 在计算属性中获取echarts <a class="header-anchor" href="#_69-在计算属性中获取echarts" aria-label="Permalink to &quot;69. 在计算属性中获取echarts&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 地区柱状图配置</span></span>
<span class="line"><span style="color:#B392F0;">areaOption</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    grid: {      </span></span>
<span class="line"><span style="color:#E1E4E8;">        bottom: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridBottom,</span></span>
<span class="line"><span style="color:#E1E4E8;">        top: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridTop,</span></span>
<span class="line"><span style="color:#E1E4E8;">        y2: </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 增加柱形图纵向的高度</span></span>
<span class="line"><span style="color:#E1E4E8;">        left: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridLeft,</span></span>
<span class="line"><span style="color:#E1E4E8;">        height: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridHeight</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    xAxis: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;category&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.areaList,  </span><span style="color:#6A737D;">// 地区</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisLabel:{ </span></span>
<span class="line"><span style="color:#E1E4E8;">        interval: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 横轴信息全部显示    </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// rotate: this.xroute, // 角倾斜显示  </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> strs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">//字符串数组</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, s; s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> strs[i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">];) { </span><span style="color:#6A737D;">//遍历字符串数组</span></span>
<span class="line"><span style="color:#E1E4E8;">                str </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)) str </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//按需要求余</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> str</span></span>
<span class="line"><span style="color:#E1E4E8;">        }   </span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    legend: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: [</span><span style="color:#9ECBFF;">&#39;年度平均值&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;本次模拟值&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        top: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legTop,</span></span>
<span class="line"><span style="color:#E1E4E8;">        right: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legRight</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    yAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">         show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* dataZoom: [{</span></span>
<span class="line"><span style="color:#6A737D;">        id: &#39;dataZoomX&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        type: &#39;slider&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        xAxisIndex: [0],</span></span>
<span class="line"><span style="color:#6A737D;">        filterMode: &#39;filter&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        type: &#39;inside&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    }], */</span></span>
<span class="line"><span style="color:#E1E4E8;">    series: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;年度平均值&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.areaYearAvgList,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.barWid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#3675FF&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            position: </span><span style="color:#9ECBFF;">&quot;top&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;本次模拟值&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.barWid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.areaNowSimList,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#FFA025&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            position: </span><span style="color:#9ECBFF;">&quot;top&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      }]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地区dom</span></span>
<span class="line"><span style="color:#B392F0;">areaChartDom</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#areaChart&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 地区柱状图配置</span></span>
<span class="line"><span style="color:#6F42C1;">areaOption</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    grid: {      </span></span>
<span class="line"><span style="color:#24292E;">        bottom: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridBottom,</span></span>
<span class="line"><span style="color:#24292E;">        top: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridTop,</span></span>
<span class="line"><span style="color:#24292E;">        y2: </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 增加柱形图纵向的高度</span></span>
<span class="line"><span style="color:#24292E;">        left: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridLeft,</span></span>
<span class="line"><span style="color:#24292E;">        height: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridHeight</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    xAxis: [{</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;category&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">        splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.areaList,  </span><span style="color:#6A737D;">// 地区</span></span>
<span class="line"><span style="color:#24292E;">        axisLabel:{ </span></span>
<span class="line"><span style="color:#24292E;">        interval: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 横轴信息全部显示    </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// rotate: this.xroute, // 角倾斜显示  </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> strs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">//字符串数组</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, s; s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> strs[i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">];) { </span><span style="color:#6A737D;">//遍历字符串数组</span></span>
<span class="line"><span style="color:#24292E;">                str </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)) str </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//按需要求余</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> str</span></span>
<span class="line"><span style="color:#24292E;">        }   </span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    }],</span></span>
<span class="line"><span style="color:#24292E;">    legend: {</span></span>
<span class="line"><span style="color:#24292E;">        data: [</span><span style="color:#032F62;">&#39;年度平均值&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;本次模拟值&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        top: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legTop,</span></span>
<span class="line"><span style="color:#24292E;">        right: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legRight</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    yAxis: {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">         show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* dataZoom: [{</span></span>
<span class="line"><span style="color:#6A737D;">        id: &#39;dataZoomX&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        type: &#39;slider&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        xAxisIndex: [0],</span></span>
<span class="line"><span style="color:#6A737D;">        filterMode: &#39;filter&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        type: &#39;inside&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    }], */</span></span>
<span class="line"><span style="color:#24292E;">    series: [{</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;年度平均值&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.areaYearAvgList,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.barWid,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#3675FF&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        normal: {</span></span>
<span class="line"><span style="color:#24292E;">        label: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            position: </span><span style="color:#032F62;">&quot;top&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        }}</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;本次模拟值&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.barWid,</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.areaNowSimList,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#FFA025&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        normal: {</span></span>
<span class="line"><span style="color:#24292E;">        label: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            position: </span><span style="color:#032F62;">&quot;top&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        }}</span></span>
<span class="line"><span style="color:#24292E;">      }]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地区dom</span></span>
<span class="line"><span style="color:#6F42C1;">areaChartDom</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#areaChart&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div><h2 id="_71-柱状图配置" tabindex="-1">71. 柱状图配置 <a class="header-anchor" href="#_71-柱状图配置" aria-label="Permalink to &quot;71. 柱状图配置&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 柱状图配置</span></span>
<span class="line"><span style="color:#E1E4E8;">      barWid: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 柱子宽</span></span>
<span class="line"><span style="color:#E1E4E8;">      legTop: </span><span style="color:#79B8FF;">14</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 图例距离</span></span>
<span class="line"><span style="color:#E1E4E8;">      legRight: </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 图例距离</span></span>
<span class="line"><span style="color:#E1E4E8;">      gridHeight: </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 图大小</span></span>
<span class="line"><span style="color:#E1E4E8;">      gridBottom: </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 图距离</span></span>
<span class="line"><span style="color:#E1E4E8;">      gridTop: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 图距离</span></span>
<span class="line"><span style="color:#E1E4E8;">      gridLeft: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 图距离</span></span>
<span class="line"><span style="color:#E1E4E8;">      xroute: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// x轴文字倾斜</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在计算属性computed中</span></span>
<span class="line"><span style="color:#6A737D;">// 地区柱状图配置</span></span>
<span class="line"><span style="color:#B392F0;">areaOption</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    grid: {      </span></span>
<span class="line"><span style="color:#E1E4E8;">        bottom: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridBottom,</span></span>
<span class="line"><span style="color:#E1E4E8;">        top: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridTop,</span></span>
<span class="line"><span style="color:#E1E4E8;">        y2: </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 增加柱形图纵向的高度</span></span>
<span class="line"><span style="color:#E1E4E8;">        left: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridLeft,</span></span>
<span class="line"><span style="color:#E1E4E8;">        height: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridHeight</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    xAxis: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;category&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">        splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.areaList,  </span><span style="color:#6A737D;">// 地区</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisLabel:{ </span></span>
<span class="line"><span style="color:#E1E4E8;">        interval: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 横轴信息全部显示    </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// rotate: this.xroute, // 角倾斜显示  </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> strs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">//字符串数组</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, s; s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> strs[i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">];) { </span><span style="color:#6A737D;">//遍历字符串数组</span></span>
<span class="line"><span style="color:#E1E4E8;">                str </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)) str </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//按需要求余</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> str</span></span>
<span class="line"><span style="color:#E1E4E8;">        }   </span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    legend: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: [</span><span style="color:#9ECBFF;">&#39;年度平均值&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;本次模拟值&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        top: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legTop,</span></span>
<span class="line"><span style="color:#E1E4E8;">        right: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legRight</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    yAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">         show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* dataZoom: [{</span></span>
<span class="line"><span style="color:#6A737D;">        id: &#39;dataZoomX&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        type: &#39;slider&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        xAxisIndex: [0],</span></span>
<span class="line"><span style="color:#6A737D;">        filterMode: &#39;filter&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        type: &#39;inside&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    }], */</span></span>
<span class="line"><span style="color:#E1E4E8;">    series: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;年度平均值&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.areaYearAvgList,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.barWid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#3675FF&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            position: </span><span style="color:#9ECBFF;">&quot;top&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;本次模拟值&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.barWid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.areaNowSimList,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#FFA025&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            position: </span><span style="color:#9ECBFF;">&quot;top&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      }]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 柱状图配置</span></span>
<span class="line"><span style="color:#24292E;">      barWid: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 柱子宽</span></span>
<span class="line"><span style="color:#24292E;">      legTop: </span><span style="color:#005CC5;">14</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 图例距离</span></span>
<span class="line"><span style="color:#24292E;">      legRight: </span><span style="color:#005CC5;">120</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 图例距离</span></span>
<span class="line"><span style="color:#24292E;">      gridHeight: </span><span style="color:#005CC5;">400</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 图大小</span></span>
<span class="line"><span style="color:#24292E;">      gridBottom: </span><span style="color:#005CC5;">120</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 图距离</span></span>
<span class="line"><span style="color:#24292E;">      gridTop: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 图距离</span></span>
<span class="line"><span style="color:#24292E;">      gridLeft: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 图距离</span></span>
<span class="line"><span style="color:#24292E;">      xroute: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// x轴文字倾斜</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在计算属性computed中</span></span>
<span class="line"><span style="color:#6A737D;">// 地区柱状图配置</span></span>
<span class="line"><span style="color:#6F42C1;">areaOption</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    grid: {      </span></span>
<span class="line"><span style="color:#24292E;">        bottom: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridBottom,</span></span>
<span class="line"><span style="color:#24292E;">        top: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridTop,</span></span>
<span class="line"><span style="color:#24292E;">        y2: </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 增加柱形图纵向的高度</span></span>
<span class="line"><span style="color:#24292E;">        left: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridLeft,</span></span>
<span class="line"><span style="color:#24292E;">        height: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridHeight</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    xAxis: [{</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;category&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">        splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.areaList,  </span><span style="color:#6A737D;">// 地区</span></span>
<span class="line"><span style="color:#24292E;">        axisLabel:{ </span></span>
<span class="line"><span style="color:#24292E;">        interval: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 横轴信息全部显示    </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// rotate: this.xroute, // 角倾斜显示  </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> strs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">//字符串数组</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, s; s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> strs[i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">];) { </span><span style="color:#6A737D;">//遍历字符串数组</span></span>
<span class="line"><span style="color:#24292E;">                str </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)) str </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//按需要求余</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> str</span></span>
<span class="line"><span style="color:#24292E;">        }   </span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    }],</span></span>
<span class="line"><span style="color:#24292E;">    legend: {</span></span>
<span class="line"><span style="color:#24292E;">        data: [</span><span style="color:#032F62;">&#39;年度平均值&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;本次模拟值&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        top: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legTop,</span></span>
<span class="line"><span style="color:#24292E;">        right: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legRight</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    yAxis: {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">         show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* dataZoom: [{</span></span>
<span class="line"><span style="color:#6A737D;">        id: &#39;dataZoomX&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        type: &#39;slider&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        xAxisIndex: [0],</span></span>
<span class="line"><span style="color:#6A737D;">        filterMode: &#39;filter&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        type: &#39;inside&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    }], */</span></span>
<span class="line"><span style="color:#24292E;">    series: [{</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;年度平均值&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.areaYearAvgList,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.barWid,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#3675FF&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        normal: {</span></span>
<span class="line"><span style="color:#24292E;">        label: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            position: </span><span style="color:#032F62;">&quot;top&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        }}</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;本次模拟值&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.barWid,</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.areaNowSimList,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#FFA025&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        normal: {</span></span>
<span class="line"><span style="color:#24292E;">        label: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            position: </span><span style="color:#032F62;">&quot;top&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        }}</span></span>
<span class="line"><span style="color:#24292E;">      }]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><h2 id="_75-echarts柱状图-滚动条" tabindex="-1">75. echarts柱状图（滚动条） <a class="header-anchor" href="#_75-echarts柱状图-滚动条" aria-label="Permalink to &quot;75. echarts柱状图（滚动条）&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 柱状图配置</span></span>
<span class="line"><span style="color:#B392F0;">barWid</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 柱子宽</span></span>
<span class="line"><span style="color:#B392F0;">legTop</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 图例距离</span></span>
<span class="line"><span style="color:#B392F0;">ledPosition</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">gridHeight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">360</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 图大小</span></span>
<span class="line"><span style="color:#B392F0;">gridTop</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 图距离</span></span>
<span class="line"><span style="color:#B392F0;">gridLeft</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 图距离</span></span>
<span class="line"><span style="color:#B392F0;">xroute</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// x轴文字倾斜</span></span>
<span class="line"><span style="color:#B392F0;">zoomLeft</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;9%&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 滚动条左边的距离</span></span>
<span class="line"><span style="color:#B392F0;">zoomRight</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;10%&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 滚动条右边的距离</span></span>
<span class="line"><span style="color:#B392F0;">zoomBottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 滚动条下边的距离</span></span>
<span class="line"><span style="color:#B392F0;">zoomEnd</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">areaOption</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    grid: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        top: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridTop,</span></span>
<span class="line"><span style="color:#E1E4E8;">        left: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridLeft,</span></span>
<span class="line"><span style="color:#E1E4E8;">        height: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.gridHeight,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    xAxis: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;category&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.areaList, </span><span style="color:#6A737D;">// 地区</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            interval: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 横轴信息全部显示</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// rotate: this.xroute, // 角倾斜显示</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> strs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">//字符串数组</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, s; (s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> strs[i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">]); ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">//遍历字符串数组</span></span>
<span class="line"><span style="color:#E1E4E8;">                str </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)) str </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//按需要求余</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> str;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    legend: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        left: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.ledPosition,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: [</span><span style="color:#9ECBFF;">&quot;上年度单个条款平均值&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;上年度同类政策平均值&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;本次模拟值&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        top: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.legTop,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    yAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataZoom: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">        end: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zoomEnd,  </span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        xAxisIndex: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        handleSize: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 滑动条的 左右2个滑动条的大小</span></span>
<span class="line"><span style="color:#E1E4E8;">        height: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//组件高度</span></span>
<span class="line"><span style="color:#E1E4E8;">        left: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zoomLeft, </span><span style="color:#6A737D;">//左边的距离</span></span>
<span class="line"><span style="color:#E1E4E8;">        right: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zoomRight, </span><span style="color:#6A737D;">//右边的距离</span></span>
<span class="line"><span style="color:#E1E4E8;">        bottom: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.zoomBottom, </span><span style="color:#6A737D;">//右边的距离</span></span>
<span class="line"><span style="color:#E1E4E8;">        borderColor: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fillerColor: </span><span style="color:#9ECBFF;">&#39;#ccc&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        borderRadius:</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        backgroundColor: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//两边未选中的滑动条区域的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">        showDataShadow: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//是否显示数据阴影 默认auto</span></span>
<span class="line"><span style="color:#E1E4E8;">        showDetail: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//即拖拽时候是否显示详细数值信息 默认true</span></span>
<span class="line"><span style="color:#E1E4E8;">        realtime:</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//是否实时更新</span></span>
<span class="line"><span style="color:#E1E4E8;">        filterMode: </span><span style="color:#9ECBFF;">&#39;filter&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;inside&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&quot;上年度单个条款平均值&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.areaYearAvgList,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.barWid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&quot;#3675FF&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                position: </span><span style="color:#9ECBFF;">&quot;top&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&quot;上年度同类政策平均值&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.areaPolicyYearAvgList,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.barWid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&quot;#f00&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                position: </span><span style="color:#9ECBFF;">&quot;top&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&quot;本次模拟值&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.barWid,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.areaNowSimList,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&quot;#FFA025&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                position: </span><span style="color:#9ECBFF;">&quot;top&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 柱状图配置</span></span>
<span class="line"><span style="color:#6F42C1;">barWid</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 柱子宽</span></span>
<span class="line"><span style="color:#6F42C1;">legTop</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 图例距离</span></span>
<span class="line"><span style="color:#6F42C1;">ledPosition</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">gridHeight</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">360</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 图大小</span></span>
<span class="line"><span style="color:#6F42C1;">gridTop</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 图距离</span></span>
<span class="line"><span style="color:#6F42C1;">gridLeft</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 图距离</span></span>
<span class="line"><span style="color:#6F42C1;">xroute</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// x轴文字倾斜</span></span>
<span class="line"><span style="color:#6F42C1;">zoomLeft</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;9%&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 滚动条左边的距离</span></span>
<span class="line"><span style="color:#6F42C1;">zoomRight</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;10%&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 滚动条右边的距离</span></span>
<span class="line"><span style="color:#6F42C1;">zoomBottom</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 滚动条下边的距离</span></span>
<span class="line"><span style="color:#6F42C1;">zoomEnd</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">areaOption</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    grid: {</span></span>
<span class="line"><span style="color:#24292E;">        top: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridTop,</span></span>
<span class="line"><span style="color:#24292E;">        left: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridLeft,</span></span>
<span class="line"><span style="color:#24292E;">        height: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.gridHeight,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    xAxis: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&quot;category&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.areaList, </span><span style="color:#6A737D;">// 地区</span></span>
<span class="line"><span style="color:#24292E;">        axisLabel: {</span></span>
<span class="line"><span style="color:#24292E;">            interval: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 横轴信息全部显示</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// rotate: this.xroute, // 角倾斜显示</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> strs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">//字符串数组</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, s; (s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> strs[i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">]); ) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">//遍历字符串数组</span></span>
<span class="line"><span style="color:#24292E;">                str </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)) str </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//按需要求余</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> str;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    legend: {</span></span>
<span class="line"><span style="color:#24292E;">        left: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.ledPosition,</span></span>
<span class="line"><span style="color:#24292E;">        data: [</span><span style="color:#032F62;">&quot;上年度单个条款平均值&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;上年度同类政策平均值&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;本次模拟值&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        top: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.legTop,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    yAxis: {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    dataZoom: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">        end: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zoomEnd,  </span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        xAxisIndex: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        handleSize: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 滑动条的 左右2个滑动条的大小</span></span>
<span class="line"><span style="color:#24292E;">        height: </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//组件高度</span></span>
<span class="line"><span style="color:#24292E;">        left: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zoomLeft, </span><span style="color:#6A737D;">//左边的距离</span></span>
<span class="line"><span style="color:#24292E;">        right: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zoomRight, </span><span style="color:#6A737D;">//右边的距离</span></span>
<span class="line"><span style="color:#24292E;">        bottom: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.zoomBottom, </span><span style="color:#6A737D;">//右边的距离</span></span>
<span class="line"><span style="color:#24292E;">        borderColor: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fillerColor: </span><span style="color:#032F62;">&#39;#ccc&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        borderRadius:</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        backgroundColor: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//两边未选中的滑动条区域的颜色</span></span>
<span class="line"><span style="color:#24292E;">        showDataShadow: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//是否显示数据阴影 默认auto</span></span>
<span class="line"><span style="color:#24292E;">        showDetail: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//即拖拽时候是否显示详细数值信息 默认true</span></span>
<span class="line"><span style="color:#24292E;">        realtime:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//是否实时更新</span></span>
<span class="line"><span style="color:#24292E;">        filterMode: </span><span style="color:#032F62;">&#39;filter&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;inside&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    series: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;上年度单个条款平均值&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.areaYearAvgList,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.barWid,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&quot;#3675FF&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            normal: {</span></span>
<span class="line"><span style="color:#24292E;">            label: {</span></span>
<span class="line"><span style="color:#24292E;">                show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                position: </span><span style="color:#032F62;">&quot;top&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;上年度同类政策平均值&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.areaPolicyYearAvgList,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.barWid,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&quot;#f00&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            normal: {</span></span>
<span class="line"><span style="color:#24292E;">            label: {</span></span>
<span class="line"><span style="color:#24292E;">                show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                position: </span><span style="color:#032F62;">&quot;top&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;本次模拟值&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.barWid,</span></span>
<span class="line"><span style="color:#24292E;">        data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.areaNowSimList,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&quot;#FFA025&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            normal: {</span></span>
<span class="line"><span style="color:#24292E;">            label: {</span></span>
<span class="line"><span style="color:#24292E;">                show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                position: </span><span style="color:#032F62;">&quot;top&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br></div></div><h2 id="_78-多个echart" tabindex="-1">78. 多个echart <a class="header-anchor" href="#_78-多个echart" aria-label="Permalink to &quot;78. 多个echart&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// dom1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">chartDom1</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#mnbdr_chart1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 旧写法</span></span>
<span class="line"><span style="color:#B392F0;">getChart1</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartDom1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dom1Option </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dom1Option);</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#B392F0;">getChart2</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartDom2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dom2Option </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dom2Option);</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#B392F0;">getChart3</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chartDom3);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dom3Option </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.dom3Option);</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#B392F0;">getBoard</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getChart1</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getChart2</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getChart3</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 封装</span></span>
<span class="line"><span style="color:#B392F0;">getChart</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> domItem </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">eval</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`this.chartDom\${</span><span style="color:#E1E4E8;">i</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> optionItem </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">eval</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`this.dom\${</span><span style="color:#E1E4E8;">i</span><span style="color:#9ECBFF;">}Option\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(domItem);</span></span>
<span class="line"><span style="color:#E1E4E8;">        optionItem </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(optionItem);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#B392F0;">getBoard</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getChart</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// dom1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">chartDom1</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#mnbdr_chart1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">......</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 旧写法</span></span>
<span class="line"><span style="color:#6F42C1;">getChart1</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartDom1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dom1Option </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dom1Option);</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6F42C1;">getChart2</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartDom2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dom2Option </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dom2Option);</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6F42C1;">getChart3</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartDom3);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dom3Option </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.dom3Option);</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6F42C1;">getBoard</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getChart1</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getChart2</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getChart3</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 封装</span></span>
<span class="line"><span style="color:#6F42C1;">getChart</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;=</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> domItem </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">eval</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`this.chartDom\${</span><span style="color:#24292E;">i</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> optionItem </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">eval</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`this.dom\${</span><span style="color:#24292E;">i</span><span style="color:#032F62;">}Option\`</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(domItem);</span></span>
<span class="line"><span style="color:#24292E;">        optionItem </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(optionItem);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6F42C1;">getBoard</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getChart</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="_79-解决echarts报there-is-a-chart-instance-already-initialized-on-the-dom-错误" tabindex="-1">79. 解决echarts报There is a chart instance already initialized on the dom.错误 <a class="header-anchor" href="#_79-解决echarts报there-is-a-chart-instance-already-initialized-on-the-dom-错误" aria-label="Permalink to &quot;79. 解决echarts报There is a chart instance already initialized on the dom.错误&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;echartsTest5&quot;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">//解决echarts dom已经加载的报错</span></span>
<span class="line"><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;echartsTest5&quot;</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;echartsTest5&quot;</span><span style="color:#24292E;">)).</span><span style="color:#6F42C1;">dispose</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">//解决echarts dom已经加载的报错</span></span>
<span class="line"><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;echartsTest5&quot;</span><span style="color:#24292E;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_80-动态echart示例" tabindex="-1">80. 动态echart示例 <a class="header-anchor" href="#_80-动态echart示例" aria-label="Permalink to &quot;80. 动态echart示例&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;=</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> domItem </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">eval</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`this.chartDom\${</span><span style="color:#E1E4E8;">i</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> optionItem </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">eval</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`this.dom\${</span><span style="color:#E1E4E8;">i</span><span style="color:#9ECBFF;">}Option\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(optionItem.series)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(optionItem.series.slice(0, this.mnbdData.length))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> nowOptionSeriesItem </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> optionItem.series.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mnbdData.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(nowOptionItem)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    optionItem.series </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    optionItem.series </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> nowOptionSeriesItem</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 解决echarts dom已经加载的报错</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(domItem).</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(domItem);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    optionItem </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(optionItem);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;=</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> domItem </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">eval</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`this.chartDom\${</span><span style="color:#24292E;">i</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> optionItem </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">eval</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`this.dom\${</span><span style="color:#24292E;">i</span><span style="color:#032F62;">}Option\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(optionItem.series)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(optionItem.series.slice(0, this.mnbdData.length))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> nowOptionSeriesItem </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> optionItem.series.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.mnbdData.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(nowOptionItem)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    optionItem.series </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    optionItem.series </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nowOptionSeriesItem</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 解决echarts dom已经加载的报错</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(domItem).</span><span style="color:#6F42C1;">dispose</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(domItem);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    optionItem </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(optionItem);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_84-echarts饼状图进度条" tabindex="-1">84. echarts饼状图进度条 <a class="header-anchor" href="#_84-echarts饼状图进度条" aria-label="Permalink to &quot;84. echarts饼状图进度条&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">dom0Option</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;完成度&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            x: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              fontWeight: </span><span style="color:#9ECBFF;">&#39;normal&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              fontSize: </span><span style="color:#79B8FF;">16</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          animation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          tooltip: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&#39;完成度&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              type: </span><span style="color:#9ECBFF;">&#39;pie&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              radius: [</span><span style="color:#9ECBFF;">&#39;50%&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;70%&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">              avoidLabelOverlap: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              hoverAnimation: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              silent: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              labelLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              data: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  value: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  name: </span><span style="color:#9ECBFF;">&#39;完成度&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  selected: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      position: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      fontSize: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      formatter: </span><span style="color:#9ECBFF;">&#39;{b}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">{d}%&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    color: </span><span style="color:#9ECBFF;">&#39;#91c7ae&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  value: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    color: </span><span style="color:#9ECBFF;">&#39;#eee&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&#39;完成度&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              type: </span><span style="color:#9ECBFF;">&#39;pie&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              radius: [</span><span style="color:#9ECBFF;">&#39;50%&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;70%&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">              avoidLabelOverlap: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              hoverAnimation: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              silent: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              labelLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              left: </span><span style="color:#9ECBFF;">&#39;20%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            right: </span><span style="color:#9ECBFF;">&#39;100%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            top: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            bottom: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              data: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  value: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  name: </span><span style="color:#9ECBFF;">&#39;完成度&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  selected: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      position: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      fontSize: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      formatter: </span><span style="color:#9ECBFF;">&#39;{b}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">{d}%&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    color: </span><span style="color:#9ECBFF;">&#39;#91c7ae&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  value: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    normal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    color: </span><span style="color:#9ECBFF;">&#39;#eee&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">dom0Option</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          title: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;完成度&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            x: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">              fontWeight: </span><span style="color:#032F62;">&#39;normal&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              fontSize: </span><span style="color:#005CC5;">16</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          animation: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          tooltip: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          series: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&#39;完成度&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              type: </span><span style="color:#032F62;">&#39;pie&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              radius: [</span><span style="color:#032F62;">&#39;50%&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;70%&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">              avoidLabelOverlap: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              hoverAnimation: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              silent: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              labelLine: {</span></span>
<span class="line"><span style="color:#24292E;">                normal: {</span></span>
<span class="line"><span style="color:#24292E;">                  show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              data: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                  value: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  name: </span><span style="color:#032F62;">&#39;完成度&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  selected: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  label: {</span></span>
<span class="line"><span style="color:#24292E;">                    normal: {</span></span>
<span class="line"><span style="color:#24292E;">                      show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                      position: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                      fontSize: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                      formatter: </span><span style="color:#032F62;">&#39;{b}</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">{d}%&#39;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                    color: </span><span style="color:#032F62;">&#39;#91c7ae&#39;</span></span>
<span class="line"><span style="color:#24292E;">                  }</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                  value: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  label: {</span></span>
<span class="line"><span style="color:#24292E;">                    normal: {</span></span>
<span class="line"><span style="color:#24292E;">                      show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                    color: </span><span style="color:#032F62;">&#39;#eee&#39;</span></span>
<span class="line"><span style="color:#24292E;">                  }</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">              ]</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&#39;完成度&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              type: </span><span style="color:#032F62;">&#39;pie&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              radius: [</span><span style="color:#032F62;">&#39;50%&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;70%&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">              avoidLabelOverlap: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              hoverAnimation: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              silent: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              labelLine: {</span></span>
<span class="line"><span style="color:#24292E;">                normal: {</span></span>
<span class="line"><span style="color:#24292E;">                  show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              left: </span><span style="color:#032F62;">&#39;20%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            right: </span><span style="color:#032F62;">&#39;100%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            top: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            bottom: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              data: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                  value: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  name: </span><span style="color:#032F62;">&#39;完成度&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  selected: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  label: {</span></span>
<span class="line"><span style="color:#24292E;">                    normal: {</span></span>
<span class="line"><span style="color:#24292E;">                      show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                      position: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                      fontSize: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                      formatter: </span><span style="color:#032F62;">&#39;{b}</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">{d}%&#39;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                    color: </span><span style="color:#032F62;">&#39;#91c7ae&#39;</span></span>
<span class="line"><span style="color:#24292E;">                  }</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                  value: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  label: {</span></span>
<span class="line"><span style="color:#24292E;">                    normal: {</span></span>
<span class="line"><span style="color:#24292E;">                      show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                  itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                    color: </span><span style="color:#032F62;">&#39;#eee&#39;</span></span>
<span class="line"><span style="color:#24292E;">                  }</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">              ]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><h2 id="echarts引入地图" tabindex="-1">echarts引入地图 <a class="header-anchor" href="#echarts引入地图" aria-label="Permalink to &quot;echarts引入地图&quot;">​</a></h2><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">section</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;refChart&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;chart_wrap&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;className&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ height: height, width: width }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;&lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onMounted, onBeforeUnmount, ref, watch, nextTick } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> echarts </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;echarts&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> nbGeoJSON </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./GEOJSON/nbGeoJSON.json&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 父组件参数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">props</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  className: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&quot;chart&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&quot;100%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&quot;100%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  chartFontColor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&quot;#000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  autoResize: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  chartData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">    required: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  txtFontSize: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 定义变量</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 图表ref</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 监听数据</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  props.chartData,</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(val);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { deep: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 工具方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setProxyData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">proxyData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(proxyData));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 图表相关</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 销毁图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">destroyChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (myChart) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 重置图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;初始化图表&quot;, myChart)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">destroyChart</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 重新启动图表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initChart</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(refChart.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">  echarts.</span><span style="color:#B392F0;">registerMap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ningbo&quot;</span><span style="color:#E1E4E8;">, nbGeoJSON);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(props.chartData);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> mTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dataIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地图高亮轮播</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapActive</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">mapData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">myChart) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dataLength</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapData.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 用定时器控制高亮</span></span>
<span class="line"><span style="color:#E1E4E8;">  mTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setInterval</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 清除之前的高亮</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">dispatchAction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;downplay&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      seriesIndex: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      dataIndex: dataIndex,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    dataIndex</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当前下标高亮</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">dispatchAction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;highlight&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      seriesIndex: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      dataIndex: dataIndex,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">dispatchAction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;showTip&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      seriesIndex: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      dataIndex: dataIndex,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (dataIndex </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> dataLength) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dataIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mouseover&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mouseover&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 停止定时器，清除之前的高亮</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">clearInterval</span><span style="color:#E1E4E8;">(mTime);</span></span>
<span class="line"><span style="color:#E1E4E8;">    mTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(mTime);</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">dispatchAction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;downplay&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      seriesIndex: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      dataIndex: dataIndex,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 鼠标划出重新定时器开始</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mouseout&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mapActive</span><span style="color:#E1E4E8;">(mapData, myChart);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">mapData</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 绘制图表</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ----------------------------  图表配置开始</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tooltip: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          fontSize: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        trigger: </span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        backgroundColor: </span><span style="color:#9ECBFF;">&quot;rgba(0,0,0,0)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// console.log(params);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { data } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> params;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// console.log(data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;div class=&quot;chart_tooltip&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;h3&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;dl&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;dt&gt;近30天健康度平均分:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;dd&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">data1</span><span style="color:#9ECBFF;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;dl&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;dt&gt;投诉数量:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;dd&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">data2</span><span style="color:#9ECBFF;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;dl&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;dt&gt;故障工单:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;dd&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">data3</span><span style="color:#9ECBFF;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;dl&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;dt&gt;采编未处理:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;dd&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">data4</span><span style="color:#9ECBFF;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;dl&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;dt&gt;其他关键信息:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;dd&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">data5</span><span style="color:#9ECBFF;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">          \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> str;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&quot;map&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          map: </span><span style="color:#9ECBFF;">&quot;ningbo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          layoutCenter: [</span><span style="color:#9ECBFF;">&quot;50%&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;50%&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          layoutSize: </span><span style="color:#9ECBFF;">&quot;100%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          data: mapData,</span></span>
<span class="line"><span style="color:#E1E4E8;">          roam: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启拖拽和缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">          itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 地图样式</span></span>
<span class="line"><span style="color:#E1E4E8;">            borderColor: </span><span style="color:#9ECBFF;">&quot;rgba(0, 178, 255, 1)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            borderWidth: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            areaColor: </span><span style="color:#9ECBFF;">&quot;#0b3eb3&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* areaColor: new echarts.graphic.LinearGradient(</span></span>
<span class="line"><span style="color:#6A737D;">              0,</span></span>
<span class="line"><span style="color:#6A737D;">              1,</span></span>
<span class="line"><span style="color:#6A737D;">              0,</span></span>
<span class="line"><span style="color:#6A737D;">              0,</span></span>
<span class="line"><span style="color:#6A737D;">              [</span></span>
<span class="line"><span style="color:#6A737D;">                { offset: 0, color: &quot;rgba(0, 137, 208, 0.32)&quot; },</span></span>
<span class="line"><span style="color:#6A737D;">                { offset: 1, color: &quot;rgba(0, 66, 164, 0.32)&quot; },</span></span>
<span class="line"><span style="color:#6A737D;">              ],</span></span>
<span class="line"><span style="color:#6A737D;">              false</span></span>
<span class="line"><span style="color:#6A737D;">            ), */</span></span>
<span class="line"><span style="color:#E1E4E8;">            shadowColor: </span><span style="color:#9ECBFF;">&quot;RGBA(7, 59, 115, .1)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            shadowOffsetX: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            shadowOffsetY: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            shadowBlur: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          emphasis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 鼠标移入动态的时候显示的默认样式</span></span>
<span class="line"><span style="color:#E1E4E8;">            itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              areaColor: </span><span style="color:#9ECBFF;">&quot;#00ade0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              borderColor: </span><span style="color:#9ECBFF;">&quot;#00ade0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              borderWidth: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">// 文字</span></span>
<span class="line"><span style="color:#E1E4E8;">              show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              fontSize: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 选中样式</span></span>
<span class="line"><span style="color:#E1E4E8;">          select: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">// 选中区域的label(文字)样式</span></span>
<span class="line"><span style="color:#E1E4E8;">              color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">// 选中区域</span></span>
<span class="line"><span style="color:#E1E4E8;">              areaColor: </span><span style="color:#9ECBFF;">&quot;#00ade0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">// 选中区域边框</span></span>
<span class="line"><span style="color:#E1E4E8;">              borderColor: </span><span style="color:#9ECBFF;">&quot;#00ade0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              borderWidth: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 地图默认label样式</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            fontSize: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            fontWeight: </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ----------------------------  图表配置结束</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// mapActive(mapData);</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">onresize</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 自适应大小</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">resize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 生命周期</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initChart</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#B392F0;">onBeforeUnmount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">destroyChart</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 销毁图表</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 暴露方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">defineExpose</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  resetChart,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.chart_wrap</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">min-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  :deep .chart_tooltip {</span></span>
<span class="line"><span style="color:#E1E4E8;">    h3 {</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">margin-bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">inline-block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">margin-right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">section</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;refChart&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;chart_wrap&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;className&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ height: height, width: width }&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;&lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { onMounted, onBeforeUnmount, ref, watch, nextTick } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> echarts </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;echarts&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> nbGeoJSON </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./GEOJSON/nbGeoJSON.json&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 父组件参数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">props</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineProps</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  className: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&quot;chart&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  width: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&quot;100%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  height: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&quot;100%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  chartFontColor: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&quot;#000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  autoResize: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  chartData: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Object,</span></span>
<span class="line"><span style="color:#24292E;">    required: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  txtFontSize: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Number,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 定义变量</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 图表ref</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 监听数据</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  props.chartData,</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(val);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  { deep: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 工具方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setProxyData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">proxyData</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(proxyData));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 图表相关</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 销毁图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">destroyChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (myChart) {</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">dispose</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (next) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 重置图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;初始化图表&quot;, myChart)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">destroyChart</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 重新启动图表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initChart</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(refChart.value);</span></span>
<span class="line"><span style="color:#24292E;">  echarts.</span><span style="color:#6F42C1;">registerMap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;ningbo&quot;</span><span style="color:#24292E;">, nbGeoJSON);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(props.chartData);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> mTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dataIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地图高亮轮播</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapActive</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">mapData</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">myChart) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dataLength</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapData.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 用定时器控制高亮</span></span>
<span class="line"><span style="color:#24292E;">  mTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setInterval</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 清除之前的高亮</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">dispatchAction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;downplay&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      seriesIndex: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      dataIndex: dataIndex,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    dataIndex</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当前下标高亮</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">dispatchAction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;highlight&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      seriesIndex: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      dataIndex: dataIndex,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">dispatchAction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;showTip&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      seriesIndex: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      dataIndex: dataIndex,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (dataIndex </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> dataLength) {</span></span>
<span class="line"><span style="color:#24292E;">      dataIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }, </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  myChart.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mouseover&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mouseover&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 停止定时器，清除之前的高亮</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clearInterval</span><span style="color:#24292E;">(mTime);</span></span>
<span class="line"><span style="color:#24292E;">    mTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(mTime);</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">dispatchAction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;downplay&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      seriesIndex: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      dataIndex: dataIndex,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 鼠标划出重新定时器开始</span></span>
<span class="line"><span style="color:#24292E;">  myChart.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mouseout&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mapActive</span><span style="color:#24292E;">(mapData, myChart);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">mapData</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 绘制图表</span></span>
<span class="line"><span style="color:#24292E;">  myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ----------------------------  图表配置开始</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      tooltip: {</span></span>
<span class="line"><span style="color:#24292E;">        textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          fontSize: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        trigger: </span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        backgroundColor: </span><span style="color:#032F62;">&quot;rgba(0,0,0,0)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// console.log(params);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { data } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> params;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// console.log(data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">            &lt;div class=&quot;chart_tooltip&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">              &lt;h3&gt;\${</span><span style="color:#24292E;">data</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#032F62;">              &lt;ul&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;dl&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;dt&gt;近30天健康度平均分:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;dd&gt;\${</span><span style="color:#24292E;">data</span><span style="color:#032F62;">.</span><span style="color:#24292E;">data1</span><span style="color:#032F62;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;dl&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;dt&gt;投诉数量:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;dd&gt;\${</span><span style="color:#24292E;">data</span><span style="color:#032F62;">.</span><span style="color:#24292E;">data2</span><span style="color:#032F62;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;dl&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;dt&gt;故障工单:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;dd&gt;\${</span><span style="color:#24292E;">data</span><span style="color:#032F62;">.</span><span style="color:#24292E;">data3</span><span style="color:#032F62;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;dl&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;dt&gt;采编未处理:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;dd&gt;\${</span><span style="color:#24292E;">data</span><span style="color:#032F62;">.</span><span style="color:#24292E;">data4</span><span style="color:#032F62;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                &lt;li&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;dl&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;dt&gt;其他关键信息:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;dd&gt;\${</span><span style="color:#24292E;">data</span><span style="color:#032F62;">.</span><span style="color:#24292E;">data5</span><span style="color:#032F62;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#032F62;">              &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#032F62;">          \`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> str;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      series: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&quot;map&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          map: </span><span style="color:#032F62;">&quot;ningbo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          layoutCenter: [</span><span style="color:#032F62;">&quot;50%&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;50%&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          layoutSize: </span><span style="color:#032F62;">&quot;100%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          data: mapData,</span></span>
<span class="line"><span style="color:#24292E;">          roam: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启拖拽和缩放</span></span>
<span class="line"><span style="color:#24292E;">          itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 地图样式</span></span>
<span class="line"><span style="color:#24292E;">            borderColor: </span><span style="color:#032F62;">&quot;rgba(0, 178, 255, 1)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            borderWidth: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            areaColor: </span><span style="color:#032F62;">&quot;#0b3eb3&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* areaColor: new echarts.graphic.LinearGradient(</span></span>
<span class="line"><span style="color:#6A737D;">              0,</span></span>
<span class="line"><span style="color:#6A737D;">              1,</span></span>
<span class="line"><span style="color:#6A737D;">              0,</span></span>
<span class="line"><span style="color:#6A737D;">              0,</span></span>
<span class="line"><span style="color:#6A737D;">              [</span></span>
<span class="line"><span style="color:#6A737D;">                { offset: 0, color: &quot;rgba(0, 137, 208, 0.32)&quot; },</span></span>
<span class="line"><span style="color:#6A737D;">                { offset: 1, color: &quot;rgba(0, 66, 164, 0.32)&quot; },</span></span>
<span class="line"><span style="color:#6A737D;">              ],</span></span>
<span class="line"><span style="color:#6A737D;">              false</span></span>
<span class="line"><span style="color:#6A737D;">            ), */</span></span>
<span class="line"><span style="color:#24292E;">            shadowColor: </span><span style="color:#032F62;">&quot;RGBA(7, 59, 115, .1)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            shadowOffsetX: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            shadowOffsetY: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            shadowBlur: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          emphasis: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 鼠标移入动态的时候显示的默认样式</span></span>
<span class="line"><span style="color:#24292E;">            itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">              areaColor: </span><span style="color:#032F62;">&quot;#00ade0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              borderColor: </span><span style="color:#032F62;">&quot;#00ade0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              borderWidth: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            label: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">// 文字</span></span>
<span class="line"><span style="color:#24292E;">              show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              fontSize: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 选中样式</span></span>
<span class="line"><span style="color:#24292E;">          select: {</span></span>
<span class="line"><span style="color:#24292E;">            label: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">// 选中区域的label(文字)样式</span></span>
<span class="line"><span style="color:#24292E;">              color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">              color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">// 选中区域</span></span>
<span class="line"><span style="color:#24292E;">              areaColor: </span><span style="color:#032F62;">&quot;#00ade0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">// 选中区域边框</span></span>
<span class="line"><span style="color:#24292E;">              borderColor: </span><span style="color:#032F62;">&quot;#00ade0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              borderWidth: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 地图默认label样式</span></span>
<span class="line"><span style="color:#24292E;">          label: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            fontSize: </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            fontWeight: </span><span style="color:#005CC5;">600</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ----------------------------  图表配置结束</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// mapActive(mapData);</span></span>
<span class="line"><span style="color:#24292E;">  window.</span><span style="color:#6F42C1;">onresize</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 自适应大小</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">resize</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 生命周期</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initChart</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6F42C1;">onBeforeUnmount</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">destroyChart</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 销毁图表</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 暴露方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">defineExpose</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  resetChart,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.chart_wrap</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">min-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  :deep .chart_tooltip {</span></span>
<span class="line"><span style="color:#24292E;">    h3 {</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ul</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">li</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">margin-bottom</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">dl</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">dt</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">dd</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">inline-block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">dt</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">margin-right</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br></div></div>`,40),e=[o];function c(r,t,E,y,i,b){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{m as __pageData,u as default};
