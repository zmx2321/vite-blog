import{_ as s,o as n,c as a,e as l}from"./app.b013dca6.js";const m=JSON.parse('{"title":"openlayer工具库封装流程","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/project-note/project1/project1-note-6.md","filePath":"pages/note/front/project-note/project1/project1-note-6.md","lastUpdated":1731576063000}'),p={name:"pages/note/front/project-note/project1/project1-note-6.md"},o=l(`<h1 id="openlayer工具库封装流程" tabindex="-1">openlayer工具库封装流程 <a class="header-anchor" href="#openlayer工具库封装流程" aria-label="Permalink to &quot;openlayer工具库封装流程&quot;">​</a></h1><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><blockquote><p>原则是公共的地图部分进行封装,业务上的内容由业务组件单独编写 地图的引入只在一个js文件里面引入,业务组件中不引入地图,只进行渲染 维护一个公共的地图工具组件,所有的地图核心方法都放在这个工具组件中,业务组件只调用工具组件中的方法</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">├── src</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├── components</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├── OpenlayerBaseMap</span></span>
<span class="line"><span style="color:#E1E4E8;">        ├── components</span></span>
<span class="line"><span style="color:#E1E4E8;">            ├── popup  </span><span style="color:#6A737D;">// 气泡窗</span></span>
<span class="line"><span style="color:#E1E4E8;">                ├── PopupCommon.vue  </span><span style="color:#6A737D;">// openlayer气泡窗封装</span></span>
<span class="line"><span style="color:#E1E4E8;">                ├── popupInner.js  </span><span style="color:#6A737D;">// openlayer气泡窗内容工具方法</span></span>
<span class="line"><span style="color:#E1E4E8;">            ├── DetailDialog.vue  </span><span style="color:#6A737D;">// 弹窗封装</span></span>
<span class="line"><span style="color:#E1E4E8;">            ├── Lend.vue  </span><span style="color:#6A737D;">// 图例</span></span>
<span class="line"><span style="color:#E1E4E8;">            ├── SwitchBaseLayer.vue  </span><span style="color:#6A737D;">// 底图切换工具</span></span>
<span class="line"><span style="color:#E1E4E8;">            ├── SelectDetailDialog.vue  </span><span style="color:#6A737D;">// 公共弹窗 - 个性化定制</span></span>
<span class="line"><span style="color:#E1E4E8;">            ├── SetTokenDialog.vue  </span><span style="color:#6A737D;">// 自定义token - 个性化定制</span></span>
<span class="line"><span style="color:#E1E4E8;">        ├── icon</span></span>
<span class="line"><span style="color:#E1E4E8;">        ├── index.vue  </span><span style="color:#6A737D;">// openlayer核心组件,供出核心方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        ├── mapUtils.js  </span><span style="color:#6A737D;">// openlayer核心封装代码</span></span>
<span class="line"><span style="color:#E1E4E8;">        ├── menuUtils.js </span><span style="color:#6A737D;">// openlayer右键菜单</span></span>
<span class="line"><span style="color:#E1E4E8;">    ├── views</span></span>
<span class="line"><span style="color:#E1E4E8;">        ├── gis</span></span>
<span class="line"><span style="color:#E1E4E8;">            ├── index.vue  </span><span style="color:#6A737D;">// 业务相关代码</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">├── src</span></span>
<span class="line"><span style="color:#24292E;">    ├── components</span></span>
<span class="line"><span style="color:#24292E;">    ├── OpenlayerBaseMap</span></span>
<span class="line"><span style="color:#24292E;">        ├── components</span></span>
<span class="line"><span style="color:#24292E;">            ├── popup  </span><span style="color:#6A737D;">// 气泡窗</span></span>
<span class="line"><span style="color:#24292E;">                ├── PopupCommon.vue  </span><span style="color:#6A737D;">// openlayer气泡窗封装</span></span>
<span class="line"><span style="color:#24292E;">                ├── popupInner.js  </span><span style="color:#6A737D;">// openlayer气泡窗内容工具方法</span></span>
<span class="line"><span style="color:#24292E;">            ├── DetailDialog.vue  </span><span style="color:#6A737D;">// 弹窗封装</span></span>
<span class="line"><span style="color:#24292E;">            ├── Lend.vue  </span><span style="color:#6A737D;">// 图例</span></span>
<span class="line"><span style="color:#24292E;">            ├── SwitchBaseLayer.vue  </span><span style="color:#6A737D;">// 底图切换工具</span></span>
<span class="line"><span style="color:#24292E;">            ├── SelectDetailDialog.vue  </span><span style="color:#6A737D;">// 公共弹窗 - 个性化定制</span></span>
<span class="line"><span style="color:#24292E;">            ├── SetTokenDialog.vue  </span><span style="color:#6A737D;">// 自定义token - 个性化定制</span></span>
<span class="line"><span style="color:#24292E;">        ├── icon</span></span>
<span class="line"><span style="color:#24292E;">        ├── index.vue  </span><span style="color:#6A737D;">// openlayer核心组件,供出核心方法</span></span>
<span class="line"><span style="color:#24292E;">        ├── mapUtils.js  </span><span style="color:#6A737D;">// openlayer核心封装代码</span></span>
<span class="line"><span style="color:#24292E;">        ├── menuUtils.js </span><span style="color:#6A737D;">// openlayer右键菜单</span></span>
<span class="line"><span style="color:#24292E;">    ├── views</span></span>
<span class="line"><span style="color:#24292E;">        ├── gis</span></span>
<span class="line"><span style="color:#24292E;">            ├── index.vue  </span><span style="color:#6A737D;">// 业务相关代码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="maputils-js工具库" tabindex="-1"><code>mapUtils.js</code>工具库 <a class="header-anchor" href="#maputils-js工具库" aria-label="Permalink to &quot;\`mapUtils.js\`工具库&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 所有引入库</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// map core</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/ol.css&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Map, View } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// ......其他引入</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * openlayer功能方法封装</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeAllLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 以removeAllLayer移除所有图层为例</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// ......其他方法</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 所有引入库</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// map core</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/ol.css&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Map, View } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// ......其他引入</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * openlayer功能方法封装</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeAllLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 以removeAllLayer移除所有图层为例</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// ......其他方法</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="openlayer核心组件" tabindex="-1">openlayer核心组件 <a class="header-anchor" href="#openlayer核心组件" aria-label="Permalink to &quot;openlayer核心组件&quot;">​</a></h2><blockquote><p>openlayer核心组件,供出核心方法</p></blockquote><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 地图 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;olMap&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ol_map&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// map - core</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> mapUtils </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./mapUtils.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除所有图层</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeAllLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  mapUtils.</span><span style="color:#B392F0;">removeAllLayer</span><span style="color:#E1E4E8;">(olMap);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetOlMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (myOlMap) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mapUtils.</span><span style="color:#B392F0;">destroyMap</span><span style="color:#E1E4E8;">(myOlMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">olMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapUtils.</span><span style="color:#B392F0;">initOlMap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;olMap&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mapInit</span><span style="color:#E1E4E8;">(olMap); </span><span style="color:#6A737D;">// 地图加载完初始化做的一些操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getMapInitInfo</span><span style="color:#E1E4E8;">(olMap); </span><span style="color:#6A737D;">// 地图加载完初始化后获取地图的一些信息</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setOlmap</span><span style="color:#E1E4E8;">(olMap); </span><span style="color:#6A737D;">// 设置地图</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">resetOlMap</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 暴露方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">defineExpose</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  removeAllLayer, </span><span style="color:#6A737D;">// 移除所有图层</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 地图 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">section</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;olMap&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ol_map&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// map - core</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> mapUtils </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./mapUtils.js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除所有图层</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeAllLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  mapUtils.</span><span style="color:#6F42C1;">removeAllLayer</span><span style="color:#24292E;">(olMap);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetOlMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (myOlMap) {</span></span>
<span class="line"><span style="color:#24292E;">    mapUtils.</span><span style="color:#6F42C1;">destroyMap</span><span style="color:#24292E;">(myOlMap)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">olMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapUtils.</span><span style="color:#6F42C1;">initOlMap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;olMap&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mapInit</span><span style="color:#24292E;">(olMap); </span><span style="color:#6A737D;">// 地图加载完初始化做的一些操作</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getMapInitInfo</span><span style="color:#24292E;">(olMap); </span><span style="color:#6A737D;">// 地图加载完初始化后获取地图的一些信息</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setOlmap</span><span style="color:#24292E;">(olMap); </span><span style="color:#6A737D;">// 设置地图</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">resetOlMap</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 暴露方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">defineExpose</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  removeAllLayer, </span><span style="color:#6A737D;">// 移除所有图层</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="业务组件-openlayer工具库使用" tabindex="-1">业务组件 - openlayer工具库使用 <a class="header-anchor" href="#业务组件-openlayer工具库使用" aria-label="Permalink to &quot;业务组件 - openlayer工具库使用&quot;">​</a></h2><blockquote><p>无业务页面</p></blockquote><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">openlayer-base-map</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openlayer_map&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;refOpenlayerBaseMap&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">:isShowLend</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">:currentPageType</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;empty-map&#39;&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">@getOlMapInstance</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;getOlMapInstance&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">@getCurrentViewData</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;getCurrentViewData&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">openlayer-base-map</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// vue - core</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, onUnmounted } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 组件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> OpenlayerBaseMap </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/components/OpenlayerBaseMap/index.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refOpenlayerBaseMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 地图核心元素</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">proxy</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myOlMap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myMapCommonData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 业务方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 获取地图实例 - 地图加载完初始化做的一些操作[业务相关]</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getOlMapInstance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">mapCommonData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&quot;获取地图实例 - 地图加载完初始化做的一些操作[业务相关]&quot;, olMap);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    myOlMap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap; </span><span style="color:#6A737D;">// 赋值全局变量,为后续业务操作做准备</span></span>
<span class="line"><span style="color:#E1E4E8;">    myMapCommonData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapCommonData;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(myOlMap, myMapCommonData)</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 获取可视区域数据 (主入口)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentViewData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;获取可视区域数据 (主入口)&#39;</span><span style="color:#E1E4E8;">, olMap, </span><span style="color:#B392F0;">getCurrentPositionParams</span><span style="color:#E1E4E8;">(olMap))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    refOpenlayerBaseMap.value.</span><span style="color:#B392F0;">removeAllLayer</span><span style="color:#E1E4E8;">(olMap); </span><span style="color:#6A737D;">// 移除所有图层</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 工具方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 获取可视区域坐标参数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentPositionParams</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> viewPosition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> refOpenlayerBaseMap.value.</span><span style="color:#B392F0;">getCurrentViewPosition</span><span style="color:#E1E4E8;">(olMap);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&quot;获取可视区域的左上角和右下角坐标&quot;, viewPosition)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        minLatitude: viewPosition.bottomRight[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxLatitude: viewPosition.topLeft[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        minLongitude: viewPosition.topLeft[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxLongitude: viewPosition.bottomRight[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">openlayer-base-map</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openlayer_map&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;refOpenlayerBaseMap&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">:isShowLend</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">:currentPageType</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;empty-map&#39;&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">@getOlMapInstance</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;getOlMapInstance&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">@getCurrentViewData</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;getCurrentViewData&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">openlayer-base-map</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// vue - core</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, onUnmounted } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 组件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> OpenlayerBaseMap </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@/components/OpenlayerBaseMap/index.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refOpenlayerBaseMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 地图核心元素</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">proxy</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myOlMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myMapCommonData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 业务方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 获取地图实例 - 地图加载完初始化做的一些操作[业务相关]</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getOlMapInstance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">mapCommonData</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&quot;获取地图实例 - 地图加载完初始化做的一些操作[业务相关]&quot;, olMap);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    myOlMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap; </span><span style="color:#6A737D;">// 赋值全局变量,为后续业务操作做准备</span></span>
<span class="line"><span style="color:#24292E;">    myMapCommonData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapCommonData;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(myOlMap, myMapCommonData)</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// 获取可视区域数据 (主入口)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentViewData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;获取可视区域数据 (主入口)&#39;</span><span style="color:#24292E;">, olMap, </span><span style="color:#6F42C1;">getCurrentPositionParams</span><span style="color:#24292E;">(olMap))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    refOpenlayerBaseMap.value.</span><span style="color:#6F42C1;">removeAllLayer</span><span style="color:#24292E;">(olMap); </span><span style="color:#6A737D;">// 移除所有图层</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 工具方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 获取可视区域坐标参数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentPositionParams</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> viewPosition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> refOpenlayerBaseMap.value.</span><span style="color:#6F42C1;">getCurrentViewPosition</span><span style="color:#24292E;">(olMap);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&quot;获取可视区域的左上角和右下角坐标&quot;, viewPosition)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        minLatitude: viewPosition.bottomRight[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        maxLatitude: viewPosition.topLeft[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        minLongitude: viewPosition.topLeft[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        maxLongitude: viewPosition.bottomRight[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,12),e=[o];function c(r,t,y,E,i,u){return n(),a("div",null,e)}const D=s(p,[["render",c]]);export{m as __pageData,D as default};
