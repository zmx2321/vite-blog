import{_ as s,o as n,c as a,e as p}from"./app.bb9a9939.js";const b=JSON.parse('{"title":"openlayer主要工具","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/project-note/project1/project1-note-7.md","filePath":"pages/note/front/project-note/project1/project1-note-7.md","lastUpdated":1731637433000}'),l={name:"pages/note/front/project-note/project1/project1-note-7.md"},o=p(`<h1 id="openlayer主要工具" tabindex="-1">openlayer主要工具 <a class="header-anchor" href="#openlayer主要工具" aria-label="Permalink to &quot;openlayer主要工具&quot;">​</a></h1><blockquote><p>前文我们总结了openlayer的总体封装思路,本文将介绍在这层封装中最主要的几项功能</p></blockquote><h2 id="地图初始化及切换底图功能" tabindex="-1">地图初始化及切换底图功能 <a class="header-anchor" href="#地图初始化及切换底图功能" aria-label="Permalink to &quot;地图初始化及切换底图功能&quot;">​</a></h2><ul><li><code>OpenlayerBaseMap/index.vue</code></li></ul><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ol_map_wrap&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 地图 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;olMap&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ol_map&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 这里将工具全部列出来,下文就不展示html的内容了 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 图例 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">\`       &lt;</span><span style="color:#FDAEB7;font-style:italic;">lend</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;refLend&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:currentPageType</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentPageType&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:isShowLend</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isShowLend&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 切换底图控件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">switch-base-layer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@switchBaseLayerType</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;switchBaseLayerType&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!--  气泡窗 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">popup-common</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;refPopupCommon&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:currentPageType</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentPageType&quot;</span><span style="color:#E1E4E8;"> /&gt;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- 切换天地图token 弹窗 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">set-token-dialog</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;refSetTokenDialog&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// vue - core</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, onMounted, defineEmits, nextTick } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map - core</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> mapUtils </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./mapUtils.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 组件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> PopupCommon </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./components/popup/PopupCommon.vue&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 气泡窗</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Lend </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./components/Lend.vue&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 图例</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> SwitchBaseLayer </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./components/SwitchBaseLayer.vue&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 切换底图控件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> SetTokenDialog </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./components/SetTokenDialog.vue&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 切换天地图token</span></span>
<span class="line"><span style="color:#6A737D;">// store</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { gisDataStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/store/modules/gis.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自定义事件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">emit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEmits</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 全局</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;getOlMapInstance&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;getCurrentViewData&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;reflashMap&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ref</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refPopupCommon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refLend</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refSetTokenDialog</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地图数据</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myOlMap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mapCommonData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  minRenderZoom: mapUtils.minRenderZoom, </span><span style="color:#6A737D;">// 最小渲染层级</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 销毁地图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">destroyMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (olMap) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mapUtils.</span><span style="color:#B392F0;">destroyMap</span><span style="color:#E1E4E8;">(olMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetOlMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">destroyMap</span><span style="color:#E1E4E8;">(myOlMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">olMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapUtils.</span><span style="color:#B392F0;">initOlMap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;olMap&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mapInit</span><span style="color:#E1E4E8;">(olMap); </span><span style="color:#6A737D;">// 地图加载完初始化做的一些操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getMapInitInfo</span><span style="color:#E1E4E8;">(olMap); </span><span style="color:#6A737D;">// 地图加载完初始化后获取地图的一些信息</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setOlmap</span><span style="color:#E1E4E8;">(olMap); </span><span style="color:#6A737D;">// 设置地图</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地图加载完初始化做的一些操作</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapInit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;地图加载完初始化做的一些操作&#39;, olMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">  myOlMap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap; </span><span style="color:#6A737D;">// 赋值全局变量,为后续业务操作做准备</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 地图加载完初始化做的一些操作[业务相关]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;getOlMapInstance&quot;</span><span style="color:#E1E4E8;">, olMap, mapCommonData); </span><span style="color:#6A737D;">// 向外供出olMap实例,以及一些公共数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  mapUtils.</span><span style="color:#B392F0;">resetControls</span><span style="color:#E1E4E8;">(olMap); </span><span style="color:#6A737D;">// 初始化所有控件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置鼠标右键属性</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地图加载完初始化后获取地图的一些信息</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getMapInitInfo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;地图加载完初始化后获取地图的一些信息&quot;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取可视区域数据 - 如果不需要自动加载</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">props.isAutoRenderData) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;刷新加载地图&#39;, props.isAutoRenderData)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;getCurrentViewData&quot;</span><span style="color:#E1E4E8;">, olMap); </span><span style="color:#6A737D;">// 地图加载时会自动触发一次</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置地图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setOlmap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mapEvent</span><span style="color:#E1E4E8;">(olMap); </span><span style="color:#6A737D;">// 地图事件</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 切换底图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">switchBaseLayerType</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;切换底图&#39;, val)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  mapUtils.</span><span style="color:#B392F0;">switchBaseLayer</span><span style="color:#E1E4E8;">(myOlMap, val)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * vue生命周期函数</span></span>
<span class="line"><span style="color:#6A737D;"> * 挂载后触发</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">resetOlMap</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">switchBaseLayerType</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;t3imgPrivatization&#39;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 页面初始化时加载默认底图(有时候加载不出来)</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">section</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ol_map_wrap&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 地图 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">section</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;olMap&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ol_map&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 这里将工具全部列出来,下文就不展示html的内容了 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 图例 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">\`       &lt;</span><span style="color:#B31D28;font-style:italic;">lend</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;refLend&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:currentPageType</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;currentPageType&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:isShowLend</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isShowLend&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 切换底图控件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">switch-base-layer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@switchBaseLayerType</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;switchBaseLayerType&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!--  气泡窗 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">popup-common</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;refPopupCommon&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:currentPageType</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;currentPageType&quot;</span><span style="color:#24292E;"> /&gt;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- 切换天地图token 弹窗 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">set-token-dialog</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;refSetTokenDialog&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// vue - core</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, onMounted, defineEmits, nextTick } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map - core</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> mapUtils </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./mapUtils.js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 组件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> PopupCommon </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./components/popup/PopupCommon.vue&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 气泡窗</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Lend </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./components/Lend.vue&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 图例</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> SwitchBaseLayer </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./components/SwitchBaseLayer.vue&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 切换底图控件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> SetTokenDialog </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./components/SetTokenDialog.vue&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 切换天地图token</span></span>
<span class="line"><span style="color:#6A737D;">// store</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { gisDataStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/store/modules/gis.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自定义事件</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">emit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineEmits</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 全局</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;getOlMapInstance&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;getCurrentViewData&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;reflashMap&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ref</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refPopupCommon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refLend</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refSetTokenDialog</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地图数据</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myOlMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mapCommonData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  minRenderZoom: mapUtils.minRenderZoom, </span><span style="color:#6A737D;">// 最小渲染层级</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 销毁地图</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">destroyMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (olMap) {</span></span>
<span class="line"><span style="color:#24292E;">    mapUtils.</span><span style="color:#6F42C1;">destroyMap</span><span style="color:#24292E;">(olMap)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetOlMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">destroyMap</span><span style="color:#24292E;">(myOlMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">olMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapUtils.</span><span style="color:#6F42C1;">initOlMap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;olMap&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mapInit</span><span style="color:#24292E;">(olMap); </span><span style="color:#6A737D;">// 地图加载完初始化做的一些操作</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getMapInitInfo</span><span style="color:#24292E;">(olMap); </span><span style="color:#6A737D;">// 地图加载完初始化后获取地图的一些信息</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setOlmap</span><span style="color:#24292E;">(olMap); </span><span style="color:#6A737D;">// 设置地图</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地图加载完初始化做的一些操作</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapInit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;地图加载完初始化做的一些操作&#39;, olMap)</span></span>
<span class="line"><span style="color:#24292E;">  myOlMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap; </span><span style="color:#6A737D;">// 赋值全局变量,为后续业务操作做准备</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 地图加载完初始化做的一些操作[业务相关]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;getOlMapInstance&quot;</span><span style="color:#24292E;">, olMap, mapCommonData); </span><span style="color:#6A737D;">// 向外供出olMap实例,以及一些公共数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  mapUtils.</span><span style="color:#6F42C1;">resetControls</span><span style="color:#24292E;">(olMap); </span><span style="color:#6A737D;">// 初始化所有控件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置鼠标右键属性</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 地图加载完初始化后获取地图的一些信息</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getMapInitInfo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;地图加载完初始化后获取地图的一些信息&quot;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取可视区域数据 - 如果不需要自动加载</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">props.isAutoRenderData) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;刷新加载地图&#39;, props.isAutoRenderData)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;getCurrentViewData&quot;</span><span style="color:#24292E;">, olMap); </span><span style="color:#6A737D;">// 地图加载时会自动触发一次</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置地图</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setOlmap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mapEvent</span><span style="color:#24292E;">(olMap); </span><span style="color:#6A737D;">// 地图事件</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 切换底图</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">switchBaseLayerType</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;切换底图&#39;, val)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  mapUtils.</span><span style="color:#6F42C1;">switchBaseLayer</span><span style="color:#24292E;">(myOlMap, val)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * vue生命周期函数</span></span>
<span class="line"><span style="color:#6A737D;"> * 挂载后触发</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">resetOlMap</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">switchBaseLayerType</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;t3imgPrivatization&#39;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 页面初始化时加载默认底图(有时候加载不出来)</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br></div></div><ul><li><code>OpenlayerBaseMap/mapUtils.js</code></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 加载地图核心方法</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tdtTk </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.env.VITE_APP_MapToken  </span><span style="color:#6A737D;">// 全局配置 - 天地图密钥</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">gisStoreData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gisDataStore</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 天地图底图配置</span></span>
<span class="line"><span style="color:#6A737D;">    天地图图层类型</span></span>
<span class="line"><span style="color:#6A737D;">    vec: 矢量底图</span></span>
<span class="line"><span style="color:#6A737D;">    cva: 矢量注记图层</span></span>
<span class="line"><span style="color:#6A737D;">    eva: 矢量注记图层-英文注记</span></span>
<span class="line"><span style="color:#6A737D;">    img: 影像底图</span></span>
<span class="line"><span style="color:#6A737D;">    cia: 影像注记图层</span></span>
<span class="line"><span style="color:#6A737D;">    eia: 影像注记图层 -英文</span></span>
<span class="line"><span style="color:#6A737D;">    ter: 地形底图</span></span>
<span class="line"><span style="color:#6A737D;">    cta: 地形注记图层</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">baseLayerUrlConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 天地图底图</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getBaseMapLayer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (item) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t3imgPrivatization&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/wtms/googlemaps/satellite/{z}/{y}/{x}.png&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t0vec&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://t0.tianditu.com/DataServer?T=vec_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 街道底图</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t3img&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://t3.tianditu.com/DataServer?T=img_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 卫星(影像)底图</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t4ter&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://t4.tianditu.com/DataServer?T=ter_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 地形底图</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t07vec&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://t{0-7}.tianditu.com/DataServer?T=vec_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 街道底图2</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t07img&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://t{0-7}.tianditu.com/DataServer?T=img_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 卫星底图2</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getBaseMapTxt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (item) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;empty&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 空注记</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t0cva&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">// 街道图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://t0.tianditu.com/DataServer?T=cva_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 街道图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t4cva&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">// 地形图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://t4.tianditu.com/DataServer?T=cva_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 地形图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t07cia&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://t{0-7}.tianditu.com/DataServer?T=cia_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t07cva&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://t{0-7}.tianditu.com/DataServer?T=cva_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置底图url</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setLayerUrl</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">hasToken</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (gisStoreData.mapToken </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tdtTk </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gisStoreData.mapToken</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (hasToken) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> tdtTk</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> url</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initOlMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    target,</span></span>
<span class="line"><span style="color:#E1E4E8;">    layers: mapInitConfig.layers,</span></span>
<span class="line"><span style="color:#E1E4E8;">    view: mapInitConfig.view,</span></span>
<span class="line"><span style="color:#E1E4E8;">    interactions: </span><span style="color:#B392F0;">defaults</span><span style="color:#E1E4E8;">({ mouseWheelZoom: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })  </span><span style="color:#6A737D;">// 禁止缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 地图初始化配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mapInitConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ol地图底图 - 默认街道底图</span></span>
<span class="line"><span style="color:#E1E4E8;">  layers: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 天地图底图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setBaseMapLayer</span><span style="color:#E1E4E8;">(baseLayerUrlConfig.</span><span style="color:#B392F0;">getBaseMapLayer</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;t3imgPrivatization&#39;</span><span style="color:#E1E4E8;">)),  </span><span style="color:#6A737D;">// 私有化底图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 天地图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setBaseMapTxt</span><span style="color:#E1E4E8;">(baseLayerUrlConfig.</span><span style="color:#B392F0;">getBaseMapTxt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;empty&#39;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ol地图基本配置 - View默认使用EPSG3857坐标系</span></span>
<span class="line"><span style="color:#E1E4E8;">  view: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">View</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    center: </span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">121.63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">29.88</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    zoom: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxZoom: </span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minZoom: </span><span style="color:#79B8FF;">13</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    constrainResolution: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 设置缩放级别为整数 </span></span>
<span class="line"><span style="color:#E1E4E8;">    smoothResolutionConstraint: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 关闭无级缩放地图</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 创建底图基础配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createBaseLayerConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">layerSourceConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#FFAB70;">layerConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLTile</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">XYZ</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      url,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">layerSourceConfig</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;baseLayer&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">layerConfig</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置地图底图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setBaseMapLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createBaseLayerConfig</span><span style="color:#E1E4E8;">(url, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    wrapX: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    crossOrigin: </span><span style="color:#9ECBFF;">&quot;anonymous&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, { layerType: </span><span style="color:#9ECBFF;">&#39;baseMapLayer&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置地图注记</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setBaseMapTxt</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createBaseLayerConfig</span><span style="color:#E1E4E8;">(url, {}, { layerType: </span><span style="color:#9ECBFF;">&#39;baseMapTxt&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 其他工具方法</span></span>
<span class="line"><span style="color:#6A737D;">// 销毁地图</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">destroyMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (olMap) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 销毁所有图层</span></span>
<span class="line"><span style="color:#E1E4E8;">    olMap.</span><span style="color:#B392F0;">getLayers</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">layer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      layer.</span><span style="color:#B392F0;">setMap</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 销毁视图</span></span>
<span class="line"><span style="color:#E1E4E8;">    olMap.</span><span style="color:#B392F0;">setView</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 销毁地图实例</span></span>
<span class="line"><span style="color:#E1E4E8;">    olMap.</span><span style="color:#B392F0;">setTarget</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    olMap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化所有控件</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetControls</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">getControls</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 重新添加控件（如果需要）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// olMap.addControl(new FullScreen());  // 全屏</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addControl</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Zoom</span><span style="color:#E1E4E8;">());  </span><span style="color:#6A737D;">// 缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addControl</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ZoomSlider</span><span style="color:#E1E4E8;">());  </span><span style="color:#6A737D;">// 缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addControl</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ScaleLine</span><span style="color:#E1E4E8;">());  </span><span style="color:#6A737D;">// 比例尺</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// olMap.addControl(new OverviewMap());  // 鹰眼</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 切换地图底图</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">switchBaseLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> txtType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (type) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 私有化底图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t3imgPrivatization&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      txtType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;empty&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 街道底图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t0vec&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      txtType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t0cva&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 街道图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 卫星(影像)底图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t3img&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      txtType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t07cia&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 地形底图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t4ter&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      txtType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t4cva&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 地形图注记\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 天地图底图</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> newBaseMapLayer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setBaseMapLayer</span><span style="color:#E1E4E8;">(baseLayerUrlConfig.</span><span style="color:#B392F0;">getBaseMapLayer</span><span style="color:#E1E4E8;">(type))</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 天地图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> newBaseMapTxt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setBaseMapTxt</span><span style="color:#E1E4E8;">(baseLayerUrlConfig.</span><span style="color:#B392F0;">getBaseMapTxt</span><span style="color:#E1E4E8;">(txtType))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;当前天地图token:&#39;</span><span style="color:#E1E4E8;">, tdtTk)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;当前天地图底图地址:&#39;</span><span style="color:#E1E4E8;">, newBaseMapLayer.values_.url)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;当前天地图注记地址:&#39;</span><span style="color:#E1E4E8;">, newBaseMapTxt.values_.url)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取当前地图中的所有图层</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mapLayers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getLayers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">getAllLayers</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (item.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;baseLayer&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (item.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;layerType&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;baseMapLayer&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          olMap.</span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">          mapLayers.</span><span style="color:#B392F0;">insertAt</span><span style="color:#E1E4E8;">(index, newBaseMapLayer)</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;baseMapTxt&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (newBaseMapTxt </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            olMap.</span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">            mapLayers.</span><span style="color:#B392F0;">insertAt</span><span style="color:#E1E4E8;">(index, newBaseMapTxt)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (newBaseMapTxt </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> newBaseMapTxtTmp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setBaseMapTxt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            olMap.</span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">            mapLayers.</span><span style="color:#B392F0;">insertAt</span><span style="color:#E1E4E8;">(index, newBaseMapTxtTmp)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 加载地图核心方法</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> tdtTk </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.env.VITE_APP_MapToken  </span><span style="color:#6A737D;">// 全局配置 - 天地图密钥</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">gisStoreData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gisDataStore</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 天地图底图配置</span></span>
<span class="line"><span style="color:#6A737D;">    天地图图层类型</span></span>
<span class="line"><span style="color:#6A737D;">    vec: 矢量底图</span></span>
<span class="line"><span style="color:#6A737D;">    cva: 矢量注记图层</span></span>
<span class="line"><span style="color:#6A737D;">    eva: 矢量注记图层-英文注记</span></span>
<span class="line"><span style="color:#6A737D;">    img: 影像底图</span></span>
<span class="line"><span style="color:#6A737D;">    cia: 影像注记图层</span></span>
<span class="line"><span style="color:#6A737D;">    eia: 影像注记图层 -英文</span></span>
<span class="line"><span style="color:#6A737D;">    ter: 地形底图</span></span>
<span class="line"><span style="color:#6A737D;">    cta: 地形注记图层</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">baseLayerUrlConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 天地图底图</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getBaseMapLayer</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (item) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t3imgPrivatization&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/wtms/googlemaps/satellite/{z}/{y}/{x}.png&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t0vec&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://t0.tianditu.com/DataServer?T=vec_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 街道底图</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t3img&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://t3.tianditu.com/DataServer?T=img_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 卫星(影像)底图</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t4ter&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://t4.tianditu.com/DataServer?T=ter_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 地形底图</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t07vec&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://t{0-7}.tianditu.com/DataServer?T=vec_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 街道底图2</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t07img&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://t{0-7}.tianditu.com/DataServer?T=img_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 卫星底图2</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getBaseMapTxt</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (item) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;empty&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 空注记</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t0cva&#39;</span><span style="color:#24292E;">: </span><span style="color:#6A737D;">// 街道图注记</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://t0.tianditu.com/DataServer?T=cva_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 街道图注记</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t4cva&#39;</span><span style="color:#24292E;">: </span><span style="color:#6A737D;">// 地形图注记</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://t4.tianditu.com/DataServer?T=cva_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 地形图注记</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t07cia&#39;</span><span style="color:#24292E;">: </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://t{0-7}.tianditu.com/DataServer?T=cia_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t07cva&#39;</span><span style="color:#24292E;">: </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://t{0-7}.tianditu.com/DataServer?T=cva_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置底图url</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setLayerUrl</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">hasToken</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (gisStoreData.mapToken </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    tdtTk </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> gisStoreData.mapToken</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (hasToken) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> url </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> tdtTk</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> url</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initOlMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">target</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    target,</span></span>
<span class="line"><span style="color:#24292E;">    layers: mapInitConfig.layers,</span></span>
<span class="line"><span style="color:#24292E;">    view: mapInitConfig.view,</span></span>
<span class="line"><span style="color:#24292E;">    interactions: </span><span style="color:#6F42C1;">defaults</span><span style="color:#24292E;">({ mouseWheelZoom: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> })  </span><span style="color:#6A737D;">// 禁止缩放</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 地图初始化配置</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mapInitConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ol地图底图 - 默认街道底图</span></span>
<span class="line"><span style="color:#24292E;">  layers: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 天地图底图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setBaseMapLayer</span><span style="color:#24292E;">(baseLayerUrlConfig.</span><span style="color:#6F42C1;">getBaseMapLayer</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;t3imgPrivatization&#39;</span><span style="color:#24292E;">)),  </span><span style="color:#6A737D;">// 私有化底图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 天地图注记</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setBaseMapTxt</span><span style="color:#24292E;">(baseLayerUrlConfig.</span><span style="color:#6F42C1;">getBaseMapTxt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;empty&#39;</span><span style="color:#24292E;">)),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ol地图基本配置 - View默认使用EPSG3857坐标系</span></span>
<span class="line"><span style="color:#24292E;">  view: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">View</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    center: </span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">121.63</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">29.88</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">    zoom: </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    maxZoom: </span><span style="color:#005CC5;">17</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    minZoom: </span><span style="color:#005CC5;">13</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    constrainResolution: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 设置缩放级别为整数 </span></span>
<span class="line"><span style="color:#24292E;">    smoothResolutionConstraint: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 关闭无级缩放地图</span></span>
<span class="line"><span style="color:#24292E;">  }),</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 创建底图基础配置</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createBaseLayerConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">layerSourceConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}, </span><span style="color:#E36209;">layerConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLTile</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XYZ</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      url,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">layerSourceConfig</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;baseLayer&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    url,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">layerConfig</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置地图底图</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setBaseMapLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createBaseLayerConfig</span><span style="color:#24292E;">(url, {</span></span>
<span class="line"><span style="color:#24292E;">    wrapX: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    crossOrigin: </span><span style="color:#032F62;">&quot;anonymous&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }, { layerType: </span><span style="color:#032F62;">&#39;baseMapLayer&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置地图注记</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setBaseMapTxt</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createBaseLayerConfig</span><span style="color:#24292E;">(url, {}, { layerType: </span><span style="color:#032F62;">&#39;baseMapTxt&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 其他工具方法</span></span>
<span class="line"><span style="color:#6A737D;">// 销毁地图</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">destroyMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (olMap) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 销毁所有图层</span></span>
<span class="line"><span style="color:#24292E;">    olMap.</span><span style="color:#6F42C1;">getLayers</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">layer</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      layer.</span><span style="color:#6F42C1;">setMap</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 销毁视图</span></span>
<span class="line"><span style="color:#24292E;">    olMap.</span><span style="color:#6F42C1;">setView</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 销毁地图实例</span></span>
<span class="line"><span style="color:#24292E;">    olMap.</span><span style="color:#6F42C1;">setTarget</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    olMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化所有控件</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetControls</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">getControls</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 重新添加控件（如果需要）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// olMap.addControl(new FullScreen());  // 全屏</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addControl</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Zoom</span><span style="color:#24292E;">());  </span><span style="color:#6A737D;">// 缩放</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addControl</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ZoomSlider</span><span style="color:#24292E;">());  </span><span style="color:#6A737D;">// 缩放</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addControl</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ScaleLine</span><span style="color:#24292E;">());  </span><span style="color:#6A737D;">// 比例尺</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// olMap.addControl(new OverviewMap());  // 鹰眼</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 切换地图底图</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">switchBaseLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> txtType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (type) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 私有化底图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t3imgPrivatization&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      txtType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;empty&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 街道底图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t0vec&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      txtType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t0cva&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 街道图注记</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 卫星(影像)底图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t3img&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      txtType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t07cia&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 卫星图注记</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 地形底图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t4ter&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      txtType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t4cva&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 地形图注记\`</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 天地图底图</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> newBaseMapLayer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setBaseMapLayer</span><span style="color:#24292E;">(baseLayerUrlConfig.</span><span style="color:#6F42C1;">getBaseMapLayer</span><span style="color:#24292E;">(type))</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 天地图注记</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> newBaseMapTxt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setBaseMapTxt</span><span style="color:#24292E;">(baseLayerUrlConfig.</span><span style="color:#6F42C1;">getBaseMapTxt</span><span style="color:#24292E;">(txtType))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;当前天地图token:&#39;</span><span style="color:#24292E;">, tdtTk)</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;当前天地图底图地址:&#39;</span><span style="color:#24292E;">, newBaseMapLayer.values_.url)</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;当前天地图注记地址:&#39;</span><span style="color:#24292E;">, newBaseMapTxt.values_.url)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取当前地图中的所有图层</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mapLayers</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getLayers</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">getAllLayers</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (item.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;baseLayer&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (item.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;layerType&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;baseMapLayer&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          olMap.</span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(item)</span></span>
<span class="line"><span style="color:#24292E;">          mapLayers.</span><span style="color:#6F42C1;">insertAt</span><span style="color:#24292E;">(index, newBaseMapLayer)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;baseMapTxt&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (newBaseMapTxt </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            olMap.</span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(item)</span></span>
<span class="line"><span style="color:#24292E;">            mapLayers.</span><span style="color:#6F42C1;">insertAt</span><span style="color:#24292E;">(index, newBaseMapTxt)</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (newBaseMapTxt </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> newBaseMapTxtTmp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setBaseMapTxt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            olMap.</span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(item)</span></span>
<span class="line"><span style="color:#24292E;">            mapLayers.</span><span style="color:#6F42C1;">insertAt</span><span style="color:#24292E;">(index, newBaseMapTxtTmp)</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br></div></div><h2 id="右键菜单封装" tabindex="-1">右键菜单封装 <a class="header-anchor" href="#右键菜单封装" aria-label="Permalink to &quot;右键菜单封装&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/index.vue</span></span>
<span class="line"><span style="color:#6A737D;">// 地图加载完初始化做的一些操作</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapInit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置鼠标右键属性</span></span>
<span class="line"><span style="color:#E1E4E8;">  mapUtils.</span><span style="color:#B392F0;">setContextmenu</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    olMap,</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">option</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(option, mapUtils.menuMethods);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">setMenuMethods</span><span style="color:#E1E4E8;">(option);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(props.currentPageType);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置鼠标右键菜单栏方法</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setMenuMethods</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">option</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;设置鼠标右键菜单栏方法&quot;, option, feature, pixelPoint);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 点击地图隐藏气泡窗</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  menuUtils.</span><span style="color:#B392F0;">setMenuMethods</span><span style="color:#E1E4E8;">(myOlMap, option, feature, pixelPoint, proxy)</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/mapUtils.js</span></span>
<span class="line"><span style="color:#6A737D;">// 重置右键属性菜单</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetContextMenu</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> mapWrap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.ol_map_wrap&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> menu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.menu_wrap&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 判断是否存在menu</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (menu) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mapWrap.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(menu);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(mapWrap)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取所有图层</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAllLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取当前地图上的所有图层</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> layers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getLayers</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取所有图层(从地图中移除所有图层)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> layers.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (layers[i] </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(layers[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 公共动态选项判断</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">condition</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">commonDynamicMenuMethod</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (condition) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (condition </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (condition.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(condition.get(&#39;tempType&#39;))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">menuAddSingleMethod</span><span style="color:#E1E4E8;">(commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (condition.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        menuUtils.commonMenuMethodsArr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> menuUtils.commonMenuMethodsArr.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (condition </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">condition.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tempType&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">menuAddSingleMethod</span><span style="color:#E1E4E8;">(commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">menuAddSingleMethod</span><span style="color:#E1E4E8;">(commonDynamicMenuMethod)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (condition.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          menuUtils.commonMenuMethodsArr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> menuUtils.commonMenuMethodsArr.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">condition </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> menuUtils.commonMenuMethodsArr.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(commonDynamicMenuMethod)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    menuUtils.commonMenuMethodsArr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> menuUtils.commonMenuMethodsArr.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置鼠标右键属性</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setContextmenu</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">setMenuConfig</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">commonDynamicMenu</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">singleMenu</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> menuUtils.menuMethodBtn  </span><span style="color:#6A737D;">// 公共动态选项,每个页面有需要才显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 添加右键菜单监听</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">getViewport</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;contextmenu&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(transformToLonlat(olMap.getEventCoordinate(e)))  // 经纬度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 阻止默认的右键菜单弹出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 子页动态选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (setMenuConfig) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">setMenuConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">currentPageType</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(&#39;当前页面&#39;, currentPageType)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏 - 子菜单在某些情况可能需要隐藏</span></span>
<span class="line"><span style="color:#E1E4E8;">        menuUtils.</span><span style="color:#B392F0;">setMentBtnExtendByPage</span><span style="color:#E1E4E8;">(currentPageType)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 屏幕坐标</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pixelPoint</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getEventCoordinate</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pixel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getPixelFromCoordinate</span><span style="color:#E1E4E8;">(pixelPoint)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">feature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">forEachFeatureAtPixel</span><span style="color:#E1E4E8;">(pixel, </span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> feature</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 获取所有layer并做判断</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> featureOnPage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []  </span><span style="color:#6A737D;">// 页面所有的feature</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myPointByMenuFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []  </span><span style="color:#6A737D;">// 所有自定义定位点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> POIPointByMenuFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []  </span><span style="color:#6A737D;">// 所有POI定位点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> drawTypeByMenuFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []  </span><span style="color:#6A737D;">// 所有绘制内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getAllLayer</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#FFAB70;">layerItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> layerItem.</span><span style="color:#B392F0;">getSource</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFeatures</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">currentFeature) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      featureOnPage.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(currentFeature)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (currentFeature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tempType&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;myPointByMenu&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        myPointByMenuFeature.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(currentFeature)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (currentFeature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;businessType&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;POIMarker&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        POIPointByMenuFeature.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(currentFeature)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (currentFeature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;drawType&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        drawTypeByMenuFeature.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(currentFeature)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 公共动态选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 判断是否显示清除所有要素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;">(featureOnPage, commonDynamicMenu.commonDynamicMenuMethod1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 判断是否显示当前要素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;">(feature, commonDynamicMenu.commonDynamicMenuMethod2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 判断是否需要显示停止绘制</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取绘制的图形</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">drawInteraction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getDrawInteraction</span><span style="color:#E1E4E8;">(olMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;">(drawInteraction, commonDynamicMenu.commonDynamicMenuMethod3)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 自定义定位点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;">(myPointByMenuFeature, </span><span style="color:#9ECBFF;">&#39;清空自定义标注点&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 自定义闪烁点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> flickerPointDom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.flicker_point&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;">(flickerPointDom, </span><span style="color:#9ECBFF;">&#39;清空自定义闪烁点&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 展示分析结果</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (feature) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (feature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;pointData&#39;</span><span style="color:#E1E4E8;">)?.isNeedAnalysis) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;">(feature, commonDynamicMenu.commonDynamicMenuMethod4)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 删除所有绘制内容  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;">(drawTypeByMenuFeature, commonDynamicMenu.commonDynamicMenuMethod5)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 子页动态选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 清除POI点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;">(POIPointByMenuFeature, singleMenu.singleMenuMethod2)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 重置右键属性菜单</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">resetContextMenu</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mapWrap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> menu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      menu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      menu.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;class&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;menu_wrap&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 自定义菜单项</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tempStr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      menuUtils.commonMenuMethodsArr.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        tempStr </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`&lt;li&gt;\${</span><span style="color:#E1E4E8;">item</span><span style="color:#9ECBFF;">}&lt;/li&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      menu.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        \${</span><span style="color:#E1E4E8;">tempStr</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 添加到页面上</span></span>
<span class="line"><span style="color:#E1E4E8;">      menu.style.position </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;fixed&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      menu.style.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">e</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">clientX</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      menu.style.top </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">e</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">clientY</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      mapWrap.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(menu);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 监听菜单项的点击事件（可选）</span></span>
<span class="line"><span style="color:#E1E4E8;">      menu.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">evt</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">option</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> evt.target.textContent;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">({ option, feature, pixelPoint })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 清理菜单</span></span>
<span class="line"><span style="color:#E1E4E8;">        mapWrap.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(menu);</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// menuUtils.js</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 维护右键菜单栏</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ElMessage } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> mapUtils </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./mapUtils.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> mittBus </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/utils/mittBus&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// mitt</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { copyTextToClipboard } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/utils/index.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 菜单项</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">menuMethodBtn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#E1E4E8;">    commonMenu: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// commonMenuMethod0: &#39;地图功能测试&#39;,  // 公共选项0</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// commonMenuMethod01: &#39;添加自定义标注点&#39;,  // 公共选项01</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// commonMenuMethod02: &#39;添加自定义闪烁点&#39;,  // 公共选项02</span></span>
<span class="line"><span style="color:#E1E4E8;">        commonMenuMethod1: </span><span style="color:#9ECBFF;">&#39;拷贝当前经纬度&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共选项1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// commonMenuMethod2: &#39;置顶要素&#39;,  // 公共选项2</span></span>
<span class="line"><span style="color:#E1E4E8;">        commonMenuMethod3: </span><span style="color:#9ECBFF;">&#39;切换天地图token&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共选项3</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 公共动态选项,每个页面有需要才显示</span></span>
<span class="line"><span style="color:#E1E4E8;">    commonDynamicMenu: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        commonDynamicMenuMethod1: </span><span style="color:#9ECBFF;">&#39;清除所有要素&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共选项3</span></span>
<span class="line"><span style="color:#E1E4E8;">        commonDynamicMenuMethod2: </span><span style="color:#9ECBFF;">&#39;显示当前要素信息&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共动态选项1</span></span>
<span class="line"><span style="color:#E1E4E8;">        commonDynamicMenuMethod3: </span><span style="color:#9ECBFF;">&#39;仅取消绘制状态&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共动态选项3</span></span>
<span class="line"><span style="color:#E1E4E8;">        commonDynamicMenuMethod4: </span><span style="color:#9ECBFF;">&#39;展示分析结果&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共动态选项4</span></span>
<span class="line"><span style="color:#E1E4E8;">        commonDynamicMenuMethod5: </span><span style="color:#9ECBFF;">&#39;删除所有绘制内容&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共动态选项5</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 子页动态选项, 单页面显示或单页面有需要显示</span></span>
<span class="line"><span style="color:#E1E4E8;">    singleMenu: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        singleMenuMethod1: </span><span style="color:#9ECBFF;">&#39;刷新地图&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 子页动态选项1</span></span>
<span class="line"><span style="color:#E1E4E8;">        singleMenuMethod2: </span><span style="color:#9ECBFF;">&#39;清除POI点&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 子页动态选项2</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// singleMenuMethod2: &#39;展示分析结果&#39;  // 子页动态选项2</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.env.</span><span style="color:#79B8FF;">VITE_APP_ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    menuMethodBtn.commonMenu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">menuMethodBtn.commonMenu,</span></span>
<span class="line"><span style="color:#E1E4E8;">        commonMenuMethod0: </span><span style="color:#9ECBFF;">&#39;地图功能测试&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共选项0</span></span>
<span class="line"><span style="color:#E1E4E8;">        commonMenuMethod01: </span><span style="color:#9ECBFF;">&#39;添加自定义标注点&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共选项01</span></span>
<span class="line"><span style="color:#E1E4E8;">        commonMenuMethod02: </span><span style="color:#9ECBFF;">&#39;添加自定义闪烁点&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共选项02</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 主菜单项</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">commonMenu</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> menuMethodBtn  </span><span style="color:#6A737D;">// 公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> commonMenuMethodsArr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []  </span><span style="color:#6A737D;">// 常驻菜单数组</span></span>
<span class="line"><span style="color:#6A737D;">// 将对象中的值传入数组</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> commonMenu) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    commonMenuMethodsArr.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(commonMenu[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 菜单项</span></span>
<span class="line"><span style="color:#E1E4E8;">    menuMethodBtn,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 常驻菜单数组</span></span>
<span class="line"><span style="color:#E1E4E8;">    commonMenuMethodsArr,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置鼠标右键菜单栏方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setMenuMethods</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">option</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">proxy</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(olMap, option, feature, pixelPoint, proxy)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 经纬度</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentLonlat </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapUtils.</span><span style="color:#B392F0;">transformToLonlat</span><span style="color:#E1E4E8;">(pixelPoint)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">         * 菜单栏</span></span>
<span class="line"><span style="color:#6A737D;">         * commonMenu  // 公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#6A737D;">         * commonDynamicMenu  // 公共动态选项,每个页面有需要才显示</span></span>
<span class="line"><span style="color:#6A737D;">         * singleMenu  // 子页动态选项, 单页面显示或单页面有需要显示</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">commonMenu</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">commonDynamicMenu</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">singleMenu</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.menuMethodBtn;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (option) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">             * ===========================</span></span>
<span class="line"><span style="color:#6A737D;">             *      公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#6A737D;">             * ===========================</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 地图功能测试</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonMenu.commonMenuMethod0:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;test&quot;, commonMenu.commonMenuMethod0);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">olMapTestCommon</span><span style="color:#E1E4E8;">(olMap, feature, pixelPoint);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 添加标注点</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonMenu.commonMenuMethod01:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;test&quot;, commonMenu.commonMenuMethod1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">addMyPointByMenu</span><span style="color:#E1E4E8;">(olMap, pixelPoint);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 清空自定义标注点</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;清空自定义标注点&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;test&quot;, &#39;清空自定义标注点&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 根据条件移除要素</span></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">removeByCondition</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#FFAB70;">currentFeature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> currentFeature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tempType&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;myPointByMenu&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                })</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 添加闪烁点</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonMenu.commonMenuMethod02:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;test&quot;, commonMenu.commonMenuMethod2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">addFlickerPoint</span><span style="color:#E1E4E8;">(olMap, pixelPoint);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 清空自定义闪烁点</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;清空自定义闪烁点&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;test&quot;, &#39;清空自定义闪烁点&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> flickerPointDom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.flicker_point&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                flickerPointDom.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    item.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;flicker_point&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 拷贝当前经纬度</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonMenu.commonMenuMethod1:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;拷贝当前经纬度&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">copyTextToClipboard</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[\${</span><span style="color:#E1E4E8;">currentLonlat</span><span style="color:#9ECBFF;">}]\`</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ElMessage.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`[\${</span><span style="color:#E1E4E8;">currentLonlat</span><span style="color:#9ECBFF;">}] 拷贝成功\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                });</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 置顶图层</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonMenu.commonMenuMethod2:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;置顶图层&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">featureToMaxTop</span><span style="color:#E1E4E8;">(olMap, feature);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 切换天地图token</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonMenu.commonMenuMethod3:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;切换天地图token&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                mittBus.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;showSetTokenDialog&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">             * =======================================</span></span>
<span class="line"><span style="color:#6A737D;">             *      公共动态选项,每个页面有需要才显示</span></span>
<span class="line"><span style="color:#6A737D;">             * =======================================</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 清除所有要素</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonDynamicMenu.commonDynamicMenuMethod1:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;清除所有要素&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">removeAllLayer</span><span style="color:#E1E4E8;">(olMap);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 显示当前要素信息</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonDynamicMenu.commonDynamicMenuMethod2:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;显示当前要素信息&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">                mittBus.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;singleFeaturesClick&quot;</span><span style="color:#E1E4E8;">, { feature, pixelPoint });</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 仅取消绘制状态</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonDynamicMenu.commonDynamicMenuMethod3:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;仅取消绘制状态&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">cancelDrawInteraction</span><span style="color:#E1E4E8;">(olMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 展示分析结果</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonDynamicMenu.commonDynamicMenuMethod4:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> feature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;pointData&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;展示分析结果&quot;, feature.get(&#39;pointData&#39;));</span></span>
<span class="line"><span style="color:#E1E4E8;">                mittBus.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;analysisPointData&quot;</span><span style="color:#E1E4E8;">, currentData);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 删除所有绘制内容</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> commonDynamicMenu.commonDynamicMenuMethod5:</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;删除所有绘制内容&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 根据条件移除要素</span></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">removeByCondition</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#FFAB70;">currentFeature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> currentFeature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;drawType&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// let currentData = feature.get(&#39;pointData&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// mittBus.emit(&quot;analysisPointData&quot;, currentData);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">             * =============================================</span></span>
<span class="line"><span style="color:#6A737D;">             *      子页动态选项, 单页面显示或单页面有需要显示</span></span>
<span class="line"><span style="color:#6A737D;">             * =============================================</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 刷新地图</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> singleMenu.singleMenuMethod1:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;刷新地图&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">                mittBus.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;reflashMap&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 清除POI点</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> singleMenu.singleMenuMethod2:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// console.log(&quot;清除POI点&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">removeLayerByBusinessType</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#9ECBFF;">&quot;POIMarker&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 根据类型移除图层</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setMentBtnExtendByPage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">currentPageType</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">singleMenu</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.menuMethodBtn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (currentPageType) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;gis&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">menuAddSingleMethod</span><span style="color:#E1E4E8;">(singleMenu.singleMenuMethod1)</span></span>
<span class="line"><span style="color:#E1E4E8;">                mapUtils.</span><span style="color:#B392F0;">menuAddSingleMethod</span><span style="color:#E1E4E8;">(singleMenu.singleMenuMethod2)</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/index.vue</span></span>
<span class="line"><span style="color:#6A737D;">// 地图加载完初始化做的一些操作</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapInit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置鼠标右键属性</span></span>
<span class="line"><span style="color:#24292E;">  mapUtils.</span><span style="color:#6F42C1;">setContextmenu</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    olMap,</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#E36209;">option</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(option, mapUtils.menuMethods);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">setMenuMethods</span><span style="color:#24292E;">(option);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(props.currentPageType);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置鼠标右键菜单栏方法</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setMenuMethods</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">option</span><span style="color:#24292E;">, </span><span style="color:#E36209;">feature</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;设置鼠标右键菜单栏方法&quot;, option, feature, pixelPoint);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 点击地图隐藏气泡窗</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  menuUtils.</span><span style="color:#6F42C1;">setMenuMethods</span><span style="color:#24292E;">(myOlMap, option, feature, pixelPoint, proxy)</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/mapUtils.js</span></span>
<span class="line"><span style="color:#6A737D;">// 重置右键属性菜单</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetContextMenu</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> mapWrap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.ol_map_wrap&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> menu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.menu_wrap&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 判断是否存在menu</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (menu) {</span></span>
<span class="line"><span style="color:#24292E;">    mapWrap.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(menu);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (next) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(mapWrap)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取所有图层</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAllLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取当前地图上的所有图层</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> layers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getLayers</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getArray</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取所有图层(从地图中移除所有图层)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> layers.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (layers[i] </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(layers[i])</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 公共动态选项判断</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">condition</span><span style="color:#24292E;">, </span><span style="color:#E36209;">commonDynamicMenuMethod</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (condition) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (condition </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (condition.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(condition.get(&#39;tempType&#39;))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">menuAddSingleMethod</span><span style="color:#24292E;">(commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (condition.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        menuUtils.commonMenuMethodsArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> menuUtils.commonMenuMethodsArr.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (condition </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">condition.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;tempType&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">menuAddSingleMethod</span><span style="color:#24292E;">(commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">menuAddSingleMethod</span><span style="color:#24292E;">(commonDynamicMenuMethod)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (condition.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          menuUtils.commonMenuMethodsArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> menuUtils.commonMenuMethodsArr.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">condition </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> menuUtils.commonMenuMethodsArr.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(commonDynamicMenuMethod)) {</span></span>
<span class="line"><span style="color:#24292E;">    menuUtils.commonMenuMethodsArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> menuUtils.commonMenuMethodsArr.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置鼠标右键属性</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setContextmenu</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">, </span><span style="color:#E36209;">setMenuConfig</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">commonDynamicMenu</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">singleMenu</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> menuUtils.menuMethodBtn  </span><span style="color:#6A737D;">// 公共动态选项,每个页面有需要才显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 添加右键菜单监听</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">getViewport</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;contextmenu&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">e</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(transformToLonlat(olMap.getEventCoordinate(e)))  // 经纬度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    e.</span><span style="color:#6F42C1;">preventDefault</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 阻止默认的右键菜单弹出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 子页动态选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (setMenuConfig) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">setMenuConfig</span><span style="color:#24292E;">(</span><span style="color:#E36209;">currentPageType</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(&#39;当前页面&#39;, currentPageType)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏 - 子菜单在某些情况可能需要隐藏</span></span>
<span class="line"><span style="color:#24292E;">        menuUtils.</span><span style="color:#6F42C1;">setMentBtnExtendByPage</span><span style="color:#24292E;">(currentPageType)</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 屏幕坐标</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pixelPoint</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getEventCoordinate</span><span style="color:#24292E;">(e)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pixel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getPixelFromCoordinate</span><span style="color:#24292E;">(pixelPoint)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">feature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">forEachFeatureAtPixel</span><span style="color:#24292E;">(pixel, </span><span style="color:#E36209;">feature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> feature</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 获取所有layer并做判断</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> featureOnPage </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []  </span><span style="color:#6A737D;">// 页面所有的feature</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myPointByMenuFeature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []  </span><span style="color:#6A737D;">// 所有自定义定位点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> POIPointByMenuFeature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []  </span><span style="color:#6A737D;">// 所有POI定位点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> drawTypeByMenuFeature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []  </span><span style="color:#6A737D;">// 所有绘制内容</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getAllLayer</span><span style="color:#24292E;">(olMap, </span><span style="color:#E36209;">layerItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentFeature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> layerItem.</span><span style="color:#6F42C1;">getSource</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFeatures</span><span style="color:#24292E;">()[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">currentFeature) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      featureOnPage.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(currentFeature)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (currentFeature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;tempType&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;myPointByMenu&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        myPointByMenuFeature.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(currentFeature)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (currentFeature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;businessType&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;POIMarker&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        POIPointByMenuFeature.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(currentFeature)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (currentFeature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;drawType&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">        drawTypeByMenuFeature.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(currentFeature)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 公共动态选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 判断是否显示清除所有要素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;">(featureOnPage, commonDynamicMenu.commonDynamicMenuMethod1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 判断是否显示当前要素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;">(feature, commonDynamicMenu.commonDynamicMenuMethod2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 判断是否需要显示停止绘制</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取绘制的图形</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">drawInteraction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getDrawInteraction</span><span style="color:#24292E;">(olMap)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;">(drawInteraction, commonDynamicMenu.commonDynamicMenuMethod3)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 自定义定位点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;">(myPointByMenuFeature, </span><span style="color:#032F62;">&#39;清空自定义标注点&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 自定义闪烁点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> flickerPointDom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.flicker_point&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;">(flickerPointDom, </span><span style="color:#032F62;">&#39;清空自定义闪烁点&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 展示分析结果</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (feature) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (feature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;pointData&#39;</span><span style="color:#24292E;">)?.isNeedAnalysis) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;">(feature, commonDynamicMenu.commonDynamicMenuMethod4)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 删除所有绘制内容  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;">(drawTypeByMenuFeature, commonDynamicMenu.commonDynamicMenuMethod5)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 子页动态选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 清除POI点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;">(POIPointByMenuFeature, singleMenu.singleMenuMethod2)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 重置右键属性菜单</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">resetContextMenu</span><span style="color:#24292E;">(</span><span style="color:#E36209;">mapWrap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> menu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      menu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      menu.</span><span style="color:#6F42C1;">setAttribute</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;class&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;menu_wrap&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 自定义菜单项</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> tempStr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">      menuUtils.commonMenuMethodsArr.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        tempStr </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`&lt;li&gt;\${</span><span style="color:#24292E;">item</span><span style="color:#032F62;">}&lt;/li&gt;\`</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      menu.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">      &lt;ul&gt;</span></span>
<span class="line"><span style="color:#032F62;">        \${</span><span style="color:#24292E;">tempStr</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">      &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#032F62;">    \`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 添加到页面上</span></span>
<span class="line"><span style="color:#24292E;">      menu.style.position </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;fixed&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      menu.style.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">e</span><span style="color:#032F62;">.</span><span style="color:#24292E;">clientX</span><span style="color:#032F62;">}px\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      menu.style.top </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">e</span><span style="color:#032F62;">.</span><span style="color:#24292E;">clientY</span><span style="color:#032F62;">}px\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      mapWrap.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(menu);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 监听菜单项的点击事件（可选）</span></span>
<span class="line"><span style="color:#24292E;">      menu.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">evt</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">option</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> evt.target.textContent;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">({ option, feature, pixelPoint })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 清理菜单</span></span>
<span class="line"><span style="color:#24292E;">        mapWrap.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(menu);</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// menuUtils.js</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 维护右键菜单栏</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ElMessage } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> mapUtils </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./mapUtils.js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> mittBus </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@/utils/mittBus&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// mitt</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { copyTextToClipboard } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@/utils/index.js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 菜单项</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">menuMethodBtn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#24292E;">    commonMenu: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// commonMenuMethod0: &#39;地图功能测试&#39;,  // 公共选项0</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// commonMenuMethod01: &#39;添加自定义标注点&#39;,  // 公共选项01</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// commonMenuMethod02: &#39;添加自定义闪烁点&#39;,  // 公共选项02</span></span>
<span class="line"><span style="color:#24292E;">        commonMenuMethod1: </span><span style="color:#032F62;">&#39;拷贝当前经纬度&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共选项1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// commonMenuMethod2: &#39;置顶要素&#39;,  // 公共选项2</span></span>
<span class="line"><span style="color:#24292E;">        commonMenuMethod3: </span><span style="color:#032F62;">&#39;切换天地图token&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共选项3</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 公共动态选项,每个页面有需要才显示</span></span>
<span class="line"><span style="color:#24292E;">    commonDynamicMenu: {</span></span>
<span class="line"><span style="color:#24292E;">        commonDynamicMenuMethod1: </span><span style="color:#032F62;">&#39;清除所有要素&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共选项3</span></span>
<span class="line"><span style="color:#24292E;">        commonDynamicMenuMethod2: </span><span style="color:#032F62;">&#39;显示当前要素信息&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共动态选项1</span></span>
<span class="line"><span style="color:#24292E;">        commonDynamicMenuMethod3: </span><span style="color:#032F62;">&#39;仅取消绘制状态&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共动态选项3</span></span>
<span class="line"><span style="color:#24292E;">        commonDynamicMenuMethod4: </span><span style="color:#032F62;">&#39;展示分析结果&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共动态选项4</span></span>
<span class="line"><span style="color:#24292E;">        commonDynamicMenuMethod5: </span><span style="color:#032F62;">&#39;删除所有绘制内容&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共动态选项5</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 子页动态选项, 单页面显示或单页面有需要显示</span></span>
<span class="line"><span style="color:#24292E;">    singleMenu: {</span></span>
<span class="line"><span style="color:#24292E;">        singleMenuMethod1: </span><span style="color:#032F62;">&#39;刷新地图&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 子页动态选项1</span></span>
<span class="line"><span style="color:#24292E;">        singleMenuMethod2: </span><span style="color:#032F62;">&#39;清除POI点&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 子页动态选项2</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// singleMenuMethod2: &#39;展示分析结果&#39;  // 子页动态选项2</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.env.</span><span style="color:#005CC5;">VITE_APP_ENV</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    menuMethodBtn.commonMenu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">menuMethodBtn.commonMenu,</span></span>
<span class="line"><span style="color:#24292E;">        commonMenuMethod0: </span><span style="color:#032F62;">&#39;地图功能测试&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共选项0</span></span>
<span class="line"><span style="color:#24292E;">        commonMenuMethod01: </span><span style="color:#032F62;">&#39;添加自定义标注点&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共选项01</span></span>
<span class="line"><span style="color:#24292E;">        commonMenuMethod02: </span><span style="color:#032F62;">&#39;添加自定义闪烁点&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共选项02</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 主菜单项</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">commonMenu</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> menuMethodBtn  </span><span style="color:#6A737D;">// 公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> commonMenuMethodsArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []  </span><span style="color:#6A737D;">// 常驻菜单数组</span></span>
<span class="line"><span style="color:#6A737D;">// 将对象中的值传入数组</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> commonMenu) {</span></span>
<span class="line"><span style="color:#24292E;">    commonMenuMethodsArr.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(commonMenu[i])</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 菜单项</span></span>
<span class="line"><span style="color:#24292E;">    menuMethodBtn,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 常驻菜单数组</span></span>
<span class="line"><span style="color:#24292E;">    commonMenuMethodsArr,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置鼠标右键菜单栏方法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setMenuMethods</span><span style="color:#24292E;">(</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">option</span><span style="color:#24292E;">, </span><span style="color:#E36209;">feature</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;">, </span><span style="color:#E36209;">proxy</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(olMap, option, feature, pixelPoint, proxy)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 经纬度</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentLonlat </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapUtils.</span><span style="color:#6F42C1;">transformToLonlat</span><span style="color:#24292E;">(pixelPoint)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">         * 菜单栏</span></span>
<span class="line"><span style="color:#6A737D;">         * commonMenu  // 公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#6A737D;">         * commonDynamicMenu  // 公共动态选项,每个页面有需要才显示</span></span>
<span class="line"><span style="color:#6A737D;">         * singleMenu  // 子页动态选项, 单页面显示或单页面有需要显示</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">commonMenu</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">commonDynamicMenu</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">singleMenu</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.menuMethodBtn;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (option) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">             * ===========================</span></span>
<span class="line"><span style="color:#6A737D;">             *      公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#6A737D;">             * ===========================</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 地图功能测试</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonMenu.commonMenuMethod0:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;test&quot;, commonMenu.commonMenuMethod0);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">olMapTestCommon</span><span style="color:#24292E;">(olMap, feature, pixelPoint);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 添加标注点</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonMenu.commonMenuMethod01:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;test&quot;, commonMenu.commonMenuMethod1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">addMyPointByMenu</span><span style="color:#24292E;">(olMap, pixelPoint);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 清空自定义标注点</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;清空自定义标注点&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;test&quot;, &#39;清空自定义标注点&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 根据条件移除要素</span></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">removeByCondition</span><span style="color:#24292E;">(olMap, </span><span style="color:#E36209;">currentFeature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> currentFeature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;tempType&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;myPointByMenu&#39;</span></span>
<span class="line"><span style="color:#24292E;">                })</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 添加闪烁点</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonMenu.commonMenuMethod02:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;test&quot;, commonMenu.commonMenuMethod2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">addFlickerPoint</span><span style="color:#24292E;">(olMap, pixelPoint);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 清空自定义闪烁点</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;清空自定义闪烁点&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;test&quot;, &#39;清空自定义闪烁点&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> flickerPointDom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.flicker_point&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                flickerPointDom.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    item.classList.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;flicker_point&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 拷贝当前经纬度</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonMenu.commonMenuMethod1:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;拷贝当前经纬度&quot;);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">copyTextToClipboard</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`[\${</span><span style="color:#24292E;">currentLonlat</span><span style="color:#032F62;">}]\`</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    ElMessage.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`[\${</span><span style="color:#24292E;">currentLonlat</span><span style="color:#032F62;">}] 拷贝成功\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                });</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 置顶图层</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonMenu.commonMenuMethod2:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;置顶图层&quot;);</span></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">featureToMaxTop</span><span style="color:#24292E;">(olMap, feature);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 切换天地图token</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonMenu.commonMenuMethod3:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;切换天地图token&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                mittBus.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;showSetTokenDialog&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">             * =======================================</span></span>
<span class="line"><span style="color:#6A737D;">             *      公共动态选项,每个页面有需要才显示</span></span>
<span class="line"><span style="color:#6A737D;">             * =======================================</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 清除所有要素</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonDynamicMenu.commonDynamicMenuMethod1:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;清除所有要素&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">removeAllLayer</span><span style="color:#24292E;">(olMap);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 显示当前要素信息</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonDynamicMenu.commonDynamicMenuMethod2:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;显示当前要素信息&quot;);</span></span>
<span class="line"><span style="color:#24292E;">                mittBus.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;singleFeaturesClick&quot;</span><span style="color:#24292E;">, { feature, pixelPoint });</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 仅取消绘制状态</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonDynamicMenu.commonDynamicMenuMethod3:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;仅取消绘制状态&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">cancelDrawInteraction</span><span style="color:#24292E;">(olMap)</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 展示分析结果</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonDynamicMenu.commonDynamicMenuMethod4:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> feature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;pointData&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;展示分析结果&quot;, feature.get(&#39;pointData&#39;));</span></span>
<span class="line"><span style="color:#24292E;">                mittBus.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;analysisPointData&quot;</span><span style="color:#24292E;">, currentData);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 删除所有绘制内容</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> commonDynamicMenu.commonDynamicMenuMethod5:</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;删除所有绘制内容&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 根据条件移除要素</span></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">removeByCondition</span><span style="color:#24292E;">(olMap, </span><span style="color:#E36209;">currentFeature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> currentFeature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;drawType&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// let currentData = feature.get(&#39;pointData&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// mittBus.emit(&quot;analysisPointData&quot;, currentData);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">             * =============================================</span></span>
<span class="line"><span style="color:#6A737D;">             *      子页动态选项, 单页面显示或单页面有需要显示</span></span>
<span class="line"><span style="color:#6A737D;">             * =============================================</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 刷新地图</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> singleMenu.singleMenuMethod1:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;刷新地图&quot;);</span></span>
<span class="line"><span style="color:#24292E;">                mittBus.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;reflashMap&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 清除POI点</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> singleMenu.singleMenuMethod2:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// console.log(&quot;清除POI点&quot;);</span></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">removeLayerByBusinessType</span><span style="color:#24292E;">(olMap, </span><span style="color:#032F62;">&quot;POIMarker&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 根据类型移除图层</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setMentBtnExtendByPage</span><span style="color:#24292E;">(</span><span style="color:#E36209;">currentPageType</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">singleMenu</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.menuMethodBtn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (currentPageType) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;gis&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">menuAddSingleMethod</span><span style="color:#24292E;">(singleMenu.singleMenuMethod1)</span></span>
<span class="line"><span style="color:#24292E;">                mapUtils.</span><span style="color:#6F42C1;">menuAddSingleMethod</span><span style="color:#24292E;">(singleMenu.singleMenuMethod2)</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br></div></div><h2 id="右键菜单修改token功能" tabindex="-1">右键菜单修改token功能 <a class="header-anchor" href="#右键菜单修改token功能" aria-label="Permalink to &quot;右键菜单修改token功能&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// OpenLayerBaseMap/menuUtils.js</span></span>
<span class="line"><span style="color:#E1E4E8;">mittBus.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;showSetTokenDialog&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenLayerBaseMap/index.vue</span></span>
<span class="line"><span style="color:#6A737D;">// 切换天地图token</span></span>
<span class="line"><span style="color:#E1E4E8;">mittBus.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;showSetTokenDialog&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  refSetTokenDialog.value?.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 根据不同token初始化地图</span></span>
<span class="line"><span style="color:#E1E4E8;">mittBus.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;initOlMapByToken&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">resetOlMap</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenLayerBaseMap/components/setTokenDialog.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;dialog_wrap&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;当前token: {{ currentToken }}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">el-autocomplete</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;selectedToken&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;width: 65%;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:fetch-suggestions=&quot;querySearch&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">popper-class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;my-autocomplete&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">placeholder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;请选择或者输入&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@select=&quot;handleSelect&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clearable</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">#suffix&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">&lt;template</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">#default=&quot;{</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">}&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">&lt;div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;input_wrap&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:class=&quot;{</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">current_selected:</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">item.value</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">currentToken</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">}&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">&lt;h3&gt;{{</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">item.name</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">}}</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">&lt;span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;item.value === currentToken&quot;</span><span style="color:#E1E4E8;">&gt;- 当前token&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{{ item.value }}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">template</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">el</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">autocomplete</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;margin-left: 25px;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;setTokenData&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">:disabled=&quot;selectedToken</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        确定</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">import { gisDataStore } from &#39;@/store/modules/gis.js&#39;  // store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">const { setMapToken } = gisDataStore()</span></span>
<span class="line"><span style="color:#9ECBFF;">const gisStoreData = gisDataStore()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">let currentToken = ref(i<wbr>mport.meta.env.VITE_APP_MapToken)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">const selectedToken = ref(&#39;&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">const links = ref([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">const querySearch = (queryString, cb) =&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">    const results = queryString</span></span>
<span class="line"><span style="color:#9ECBFF;">        ? links.value.filter(createFilter(queryString))</span></span>
<span class="line"><span style="color:#9ECBFF;">        : links.value</span></span>
<span class="line"><span style="color:#9ECBFF;">    // call callback function to return suggestion objects</span></span>
<span class="line"><span style="color:#9ECBFF;">    cb(results)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">const createFilter = (queryString) =&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">    return (restaurant) =&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">        return (</span></span>
<span class="line"><span style="color:#9ECBFF;">            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0</span></span>
<span class="line"><span style="color:#9ECBFF;">        )</span></span>
<span class="line"><span style="color:#9ECBFF;">    }</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">const handleSelect = (item) =&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">    setMapToken(item.value)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">const setTokenData = () =&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">    if (selectedToken.value.length !== 32) {</span></span>
<span class="line"><span style="color:#9ECBFF;">        ElMessage.warning(&quot;</span><span style="color:#FDAEB7;font-style:italic;">请输入正确的token&quot;)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">mittBus.emit(&#39;initOlMapByToken&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">mittBus.emit(&#39;resetSwitchLayer&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">refDialogInfo.value.hide()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">currentToken.value</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">selectedToken.value</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">onMounted(()</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    links.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadAll</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span><span style="color:#FDAEB7;font-style:italic;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadAll</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">()</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;token1&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;xxxxxx&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;token2&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;xxxxxx&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;token3&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;xxxxxx&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;token4&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;xxxxxx&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;token5&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&#39;xxxxxx&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/components/SwitchBaseLayer.vue</span></span>
<span class="line"><span style="color:#6A737D;">// 根据不同token初始化地图</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">mittBus.on(&quot;resetSwitchLayer&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">()</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  ruleForm.value.layerType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t3imgPrivatization&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span><span style="color:#FDAEB7;font-style:italic;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// OpenLayerBaseMap/menuUtils.js</span></span>
<span class="line"><span style="color:#24292E;">mittBus.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;showSetTokenDialog&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenLayerBaseMap/index.vue</span></span>
<span class="line"><span style="color:#6A737D;">// 切换天地图token</span></span>
<span class="line"><span style="color:#24292E;">mittBus.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;showSetTokenDialog&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  refSetTokenDialog.value?.</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 根据不同token初始化地图</span></span>
<span class="line"><span style="color:#24292E;">mittBus.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;initOlMapByToken&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">resetOlMap</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenLayerBaseMap/components/setTokenDialog.vue</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;dialog_wrap&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;当前token: {{ currentToken }}&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">el-autocomplete</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;selectedToken&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;width: 65%;&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:fetch-suggestions=&quot;querySearch&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">popper-class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;my-autocomplete&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">placeholder</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;请选择或者输入&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@select=&quot;handleSelect&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clearable</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">#suffix&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">&lt;template</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">#default=&quot;{</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">item</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">&lt;div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;input_wrap&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:class=&quot;{</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">current_selected:</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">item.value</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">===</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">currentToken</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">&lt;h3&gt;{{</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">item.name</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">}}</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">&lt;span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;item.value === currentToken&quot;</span><span style="color:#24292E;">&gt;- 当前token&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;{{ item.value }}&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">template</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">el</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">autocomplete</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;margin-left: 25px;&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;setTokenData&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">:disabled=&quot;selectedToken</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">        确定</span></span>
<span class="line"><span style="color:#032F62;">    &lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#032F62;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">import { gisDataStore } from &#39;@/store/modules/gis.js&#39;  // store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">const { setMapToken } = gisDataStore()</span></span>
<span class="line"><span style="color:#032F62;">const gisStoreData = gisDataStore()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">let currentToken = ref(i<wbr>mport.meta.env.VITE_APP_MapToken)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">const selectedToken = ref(&#39;&#39;)</span></span>
<span class="line"><span style="color:#032F62;">const links = ref([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">const querySearch = (queryString, cb) =&gt; {</span></span>
<span class="line"><span style="color:#032F62;">    const results = queryString</span></span>
<span class="line"><span style="color:#032F62;">        ? links.value.filter(createFilter(queryString))</span></span>
<span class="line"><span style="color:#032F62;">        : links.value</span></span>
<span class="line"><span style="color:#032F62;">    // call callback function to return suggestion objects</span></span>
<span class="line"><span style="color:#032F62;">    cb(results)</span></span>
<span class="line"><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">const createFilter = (queryString) =&gt; {</span></span>
<span class="line"><span style="color:#032F62;">    return (restaurant) =&gt; {</span></span>
<span class="line"><span style="color:#032F62;">        return (</span></span>
<span class="line"><span style="color:#032F62;">            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0</span></span>
<span class="line"><span style="color:#032F62;">        )</span></span>
<span class="line"><span style="color:#032F62;">    }</span></span>
<span class="line"><span style="color:#032F62;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">const handleSelect = (item) =&gt; {</span></span>
<span class="line"><span style="color:#032F62;">    setMapToken(item.value)</span></span>
<span class="line"><span style="color:#032F62;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">const setTokenData = () =&gt; {</span></span>
<span class="line"><span style="color:#032F62;">    if (selectedToken.value.length !== 32) {</span></span>
<span class="line"><span style="color:#032F62;">        ElMessage.warning(&quot;</span><span style="color:#B31D28;font-style:italic;">请输入正确的token&quot;)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">return</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">mittBus.emit(&#39;initOlMapByToken&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">mittBus.emit(&#39;resetSwitchLayer&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">refDialogInfo.value.hide()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">currentToken.value</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">selectedToken.value</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">onMounted(()</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    links.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadAll</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span><span style="color:#B31D28;font-style:italic;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadAll</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">()</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    return [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;token1&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&#39;xxxxxx&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;token2&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&#39;xxxxxx&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;token3&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&#39;xxxxxx&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;token4&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&#39;xxxxxx&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;token5&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&#39;xxxxxx&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/components/SwitchBaseLayer.vue</span></span>
<span class="line"><span style="color:#6A737D;">// 根据不同token初始化地图</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">mittBus.on(&quot;resetSwitchLayer&quot;,</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">()</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  ruleForm.value.layerType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t3imgPrivatization&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span><span style="color:#B31D28;font-style:italic;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br></div></div><h2 id="气泡窗封装" tabindex="-1">气泡窗封装 <a class="header-anchor" href="#气泡窗封装" aria-label="Permalink to &quot;气泡窗封装&quot;">​</a></h2><blockquote><p>点击标注弹出气泡窗,所以需要捕捉点击事件</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// OpenLayerBaseMap/index.vue</span></span>
<span class="line"><span style="color:#6A737D;">// 设置地图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setOlmap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mapEvent</span><span style="color:#E1E4E8;">(olMap); </span><span style="color:#6A737D;">// 地图事件</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapEvent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 监听鼠标单击事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    olMap.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;singleclick&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 这里需要判断点击的目标是否重叠,点击的是什么类型的图形</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> pixel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getEventPixel</span><span style="color:#E1E4E8;">(e.originalEvent);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> featureList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getFeaturesAtPixel</span><span style="color:#E1E4E8;">(pixel); </span><span style="color:#6A737D;">// 点击时获取所有features</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 这里为举例,假定点击的目标非重叠,且只是一个marker类型的feature</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(featureList.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">singleFeaturesClick</span><span style="color:#E1E4E8;">(olMap, featureList[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], e.coordinate);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 点击单个feature - map - click事件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">singleFeaturesClick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">featureItem</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;无重叠,单个feature&quot;, featureItem, featureItem.get(&quot;type&quot;));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (featureItem </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> featureItem.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;drawType&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> mapUtils.</span><span style="color:#B392F0;">getDrawInteraction</span><span style="color:#E1E4E8;">(olMap)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> popupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 点击点标注</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (featureItem </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> featureItem.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Marker&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;Marker点标注&#39;, featureItem);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    popupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> featureItem.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;pointData&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;获取点标注数据&#39;, popupData)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    refPopupCommon.value.</span><span style="color:#B392F0;">setCommonPopup</span><span style="color:#E1E4E8;">(olMap, pixelPoint, popupData, featureItem);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 点击扇形区域</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (featureItem </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> featureItem.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Curve&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;点击扇形区域&#39;, featureItem);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    popupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> featureItem.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;curveData&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;获取扇形区数据&#39;, popupData)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    refPopupCommon.value.</span><span style="color:#B392F0;">setCommonPopup</span><span style="color:#E1E4E8;">(olMap, pixelPoint, popupData);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 点击圆形区域</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 点击多边形</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/components/popup/PopupCommon.vue</span></span>
<span class="line"><span style="color:#6A737D;">// 通用信息展示弹窗</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setCommonPopup</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">popupData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">featureItem</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;点击标注弹出气泡&quot;, olMap, popupData, featureItem);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 判断是否有返回图标,有则删除 - 不为业务气泡窗不删除</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> popupBackDom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`#popupBack\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (popupBackDom) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (featureItem </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">featureItem.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;businessType&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      popupBackDom.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 经纬度</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> coordinate </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapUtils.</span><span style="color:#B392F0;">transformToLonlat</span><span style="color:#E1E4E8;">(pixelPoint);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 点击尺 （这里是尺(米)，并不是经纬度）;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> hdms </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapUtils.</span><span style="color:#B392F0;">getHdms</span><span style="color:#E1E4E8;">(pixelPoint); </span><span style="color:#6A737D;">// 转换为经纬度显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">popupObj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;通用信息展示弹窗&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    hdms,</span></span>
<span class="line"><span style="color:#E1E4E8;">    coordinate,</span></span>
<span class="line"><span style="color:#E1E4E8;">    popupData, </span><span style="color:#6A737D;">// 气泡窗业务数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  currentPopupObj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> popupObj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 修改通用展示窗数据 - 子组件使用</span></span>
<span class="line"><span style="color:#E1E4E8;">  mittBus.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;fixCommonPopupData&quot;</span><span style="color:#E1E4E8;">, popupObj);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  mapUtils.</span><span style="color:#B392F0;">setPopup</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    olMap,</span></span>
<span class="line"><span style="color:#E1E4E8;">    pixelPoint,</span></span>
<span class="line"><span style="color:#E1E4E8;">    popupInner.</span><span style="color:#B392F0;">commonPopupInner</span><span style="color:#E1E4E8;">(popupObj, featureItem),</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">popupClickEvent</span><span style="color:#E1E4E8;">(event);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 气泡弹出窗点击事件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">popupClickEvent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;气泡弹出窗点击事件&quot;, e)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">target</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e; </span><span style="color:#6A737D;">// 事件对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;点击气泡窗返回气泡窗中的dom对象&quot;, target);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 当前dom绑定的函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dataFunction </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> target.</span><span style="color:#B392F0;">getAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;data-function&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 点击气泡窗获取更多</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (dataFunction </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;getMore&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&quot;点击气泡窗获取更多&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getMore</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 点击唯一标识显示具体气泡信息</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (dataFunction </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;getSingleByFeatures&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(target.getAttribute(&quot;data-unique&quot;));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getSingleByFeatures</span><span style="color:#E1E4E8;">(target.</span><span style="color:#B392F0;">getAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;data-unique&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 点击popupDom返回</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (dataFunction </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;popupBack&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">popupBack</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 点击气泡窗获取更多</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getMore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;点击气泡窗获取更多&quot;); </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 气泡窗点击更多 - 子组件使用</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;气泡窗点击更多 - 子组件使用&#39;, currentPopupObj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  mittBus.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;popupDataGetMore&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentPopupObj,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">popupData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(&quot;fwdsdfsw&quot;, popupData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 获取完数据后进行弹窗</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">showPopupDialog</span><span style="color:#E1E4E8;">(popupData, props.currentPageType); </span><span style="color:#6A737D;">// 显示气泡弹出窗</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/mapUtils.js</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 设置气泡窗</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">olMap</span><span style="color:#6A737D;"> 地图对象</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">pixelPoint</span><span style="color:#6A737D;"> 屏幕坐标</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">popupData</span><span style="color:#6A737D;"> 气泡窗数据</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">next</span><span style="color:#6A737D;"> 事件处理方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setPopup</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">popupInner</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// const pixelPoint = e.coordinate  // 屏幕坐标</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">popupCommonConfig</span><span style="color:#E1E4E8;">(olMap, pixelPoint, popupInner, next, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoPan: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* autoPanAnimation: {</span></span>
<span class="line"><span style="color:#6A737D;">        duration: 250, // 自动平移效果的动画时间 9毫秒）</span></span>
<span class="line"><span style="color:#6A737D;">    }, */</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 气泡窗通用方法</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">olMap</span><span style="color:#6A737D;"> 地图对象</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">pixelPoint</span><span style="color:#6A737D;"> 屏幕坐标</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">popupData</span><span style="color:#6A737D;"> 气泡窗数据</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">next</span><span style="color:#6A737D;"> 事件方法</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">overlayConfig</span><span style="color:#6A737D;"> 气泡窗配置 </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">popupCommonConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">popupInner</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">overlayConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> container </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;popup&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;container&#39;, container)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> closer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;popup-closer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// let content = document.getElementById(&#39;popup-content&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  container.style.display </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;block&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> overlay </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Overlay</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    element: container, </span><span style="color:#6A737D;">//绑定 Overlay 对象和 DOM 对象的</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">overlayConfig,</span></span>
<span class="line"><span style="color:#E1E4E8;">    zIndex: </span><span style="color:#79B8FF;">9999</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addOverlay</span><span style="color:#E1E4E8;">(overlay);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  closer.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    overlay.</span><span style="color:#B392F0;">setPosition</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    closer.</span><span style="color:#B392F0;">blur</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    overlay </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(popupInner)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// content.innerHTML = popupData;  // 使用jsx,不直接进行inner</span></span>
<span class="line"><span style="color:#E1E4E8;">  overlay.</span><span style="color:#B392F0;">setPosition</span><span style="color:#E1E4E8;">(pixelPoint); </span><span style="color:#6A737D;">//把 overlay 显示到指定的 x,y坐标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 使用addEventListener会无限叠加事件,且不好使用removeEventListener移除(匿名函数)</span></span>
<span class="line"><span style="color:#E1E4E8;">  overlay.</span><span style="color:#B392F0;">getElement</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/components/popup/popupInner.js</span></span>
<span class="line"><span style="color:#6A737D;">// 通用气泡窗</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">commonPopupInner</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">popupObj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">featureItem</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mittBus.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setCommonPopupInner&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        popupObj, featureItem, </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">popupInnerDom</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 使用jsx,不需要return,直接将jsx结构render到dom即可</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(popupInnerDom, </span><span style="color:#B392F0;">innerDom</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 业务代码gis</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getPopupInnerDom, getPOIPopupInnerDom } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./components/popup/gisPopup.jsx&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 气泡窗dom</span></span>
<span class="line"><span style="color:#6A737D;">//  气泡窗点击更多 - 子组件使用</span></span>
<span class="line"><span style="color:#E1E4E8;">mittBus.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;popupDataGetMore&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">currentPopupObj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;气泡窗点击更多111&quot;, currentPopupObj);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">currentPopupObj.currentPopupData </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> currentPopupObj.popupData) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentPopupObj.currentPopupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentPopupObj.popupData</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 或者走接口,根据cgi获取详情</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">currentPopupAsyncObj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">apiCommon</span><span style="color:#E1E4E8;">(gisApi.queryCellByCgi, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cgi: currentPopupObj.currentPopupData </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> currentPopupObj.currentPopupData.cgi </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> currentPopupObj.cgi,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(currentPopupAsyncObj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">currentPopupAsyncObj.data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy.$modal.</span><span style="color:#B392F0;">msgWarning</span><span style="color:#E1E4E8;">(currentPopupAsyncObj.msg);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (currentPopupAsyncObj.data.networkType) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;4g&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentPopupObj.currentPopupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentPopupAsyncObj.data.cell4g;</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentPopupObj.currentPopupData.networkType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;4g&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentPopupObj.currentPopupData.newCellName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentPopupObj.currentPopupData.cellName;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;5g&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentPopupObj.currentPopupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentPopupAsyncObj.data.cell5g;</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentPopupObj.currentPopupData.networkType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;5g&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentPopupObj.currentPopupData.newCellName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentPopupObj.currentPopupData.nrCellName;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取完数据后进行弹窗</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">(currentPopupObj.currentPopupData);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 设置通用气泡窗html</span></span>
<span class="line"><span style="color:#E1E4E8;">mittBus.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;setCommonPopupInner&quot;</span><span style="color:#E1E4E8;">, ({ </span><span style="color:#FFAB70;">popupObj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">featureItem</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;设置通用气泡窗html&quot;, popupObj, featureItem);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">featureItem) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentPopupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> popupObj.currentPopupData</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">currentPopupData) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentPopupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> popupObj.popupData</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (currentPopupData.searchType </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;POI&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">getPOIPopupInnerDom</span><span style="color:#E1E4E8;">(popupObj));</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">getPopupInnerDom</span><span style="color:#E1E4E8;">(popupObj));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (featureItem.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;businessType&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;POIMarker&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">getPOIPopupInnerDom</span><span style="color:#E1E4E8;">(popupObj));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">getPopupInnerDom</span><span style="color:#E1E4E8;">(popupObj));</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// components/popup/gisPopup.jsx</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ElDescriptions, ElDescriptionsItem } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;element-plus&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getPopupInnerDom</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">popupObj</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> popupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (popupObj.currentPopupData) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        popupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> popupObj.currentPopupData;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        popupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> popupObj.popupData;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;common_popup_item&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#79B8FF;">ElDescriptions</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{popupData.newCellName} </span><span style="color:#B392F0;">border</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;margin-top&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">column</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">} </span><span style="color:#B392F0;">size</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#79B8FF;">ElDescriptionsItem</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;xxx&quot;</span><span style="color:#E1E4E8;">&gt;{popupData.county}&lt;/</span><span style="color:#79B8FF;">ElDescriptionsItem</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#79B8FF;">ElDescriptionsItem</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;xxx&quot;</span><span style="color:#E1E4E8;">&gt;{popupData.cgi}&lt;/</span><span style="color:#79B8FF;">ElDescriptionsItem</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {popupData.antDirectionAngle </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">                        &lt;</span><span style="color:#79B8FF;">ElDescriptionsItem</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;xxx&quot;</span><span style="color:#E1E4E8;">&gt;{popupData.antDirectionAngle}°&lt;/</span><span style="color:#79B8FF;">ElDescriptionsItem</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    )}</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#79B8FF;">ElDescriptionsItem</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;经纬度&quot;</span><span style="color:#E1E4E8;">&gt;[{popupData.longitude}, {popupData.latitude}]&lt;/</span><span style="color:#79B8FF;">ElDescriptionsItem</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;/</span><span style="color:#79B8FF;">ElDescriptions</span><span style="color:#E1E4E8;"> &gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;get_more&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-function</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;getMore&quot;</span><span style="color:#E1E4E8;">&gt;查看更多&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getPOIPopupInnerDom</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">popupObj</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> popupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (popupObj.currentPopupData) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        popupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> popupObj.currentPopupData;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        popupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> popupObj.popupData;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;common_popup_item&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;POI搜索结果&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        &lt;</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                            &lt;</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;地址:&lt;/</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                            &lt;</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;{popupData.address}&lt;/</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        &lt;/</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        &lt;</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                            &lt;</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;名称:&lt;/</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                            &lt;</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;{popupData.name}&lt;/</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        &lt;/</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        &lt;</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                            &lt;</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;经纬度:&lt;/</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                            &lt;</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;[{popupData.lonlat}]&lt;/</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        &lt;/</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// OpenLayerBaseMap/index.vue</span></span>
<span class="line"><span style="color:#6A737D;">// 设置地图</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setOlmap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mapEvent</span><span style="color:#24292E;">(olMap); </span><span style="color:#6A737D;">// 地图事件</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapEvent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 监听鼠标单击事件</span></span>
<span class="line"><span style="color:#24292E;">    olMap.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;singleclick&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 这里需要判断点击的目标是否重叠,点击的是什么类型的图形</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> pixel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getEventPixel</span><span style="color:#24292E;">(e.originalEvent);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> featureList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getFeaturesAtPixel</span><span style="color:#24292E;">(pixel); </span><span style="color:#6A737D;">// 点击时获取所有features</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 这里为举例,假定点击的目标非重叠,且只是一个marker类型的feature</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(featureList.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">singleFeaturesClick</span><span style="color:#24292E;">(olMap, featureList[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">], e.coordinate);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 点击单个feature - map - click事件</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">singleFeaturesClick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">featureItem</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;无重叠,单个feature&quot;, featureItem, featureItem.get(&quot;type&quot;));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (featureItem </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> featureItem.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;drawType&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> mapUtils.</span><span style="color:#6F42C1;">getDrawInteraction</span><span style="color:#24292E;">(olMap)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> popupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 点击点标注</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (featureItem </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> featureItem.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Marker&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;Marker点标注&#39;, featureItem);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    popupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> featureItem.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;pointData&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;获取点标注数据&#39;, popupData)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    refPopupCommon.value.</span><span style="color:#6F42C1;">setCommonPopup</span><span style="color:#24292E;">(olMap, pixelPoint, popupData, featureItem);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 点击扇形区域</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (featureItem </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> featureItem.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Curve&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;点击扇形区域&#39;, featureItem);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    popupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> featureItem.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;curveData&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;获取扇形区数据&#39;, popupData)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    refPopupCommon.value.</span><span style="color:#6F42C1;">setCommonPopup</span><span style="color:#24292E;">(olMap, pixelPoint, popupData);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 点击圆形区域</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 点击多边形</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/components/popup/PopupCommon.vue</span></span>
<span class="line"><span style="color:#6A737D;">// 通用信息展示弹窗</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setCommonPopup</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;">, </span><span style="color:#E36209;">popupData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">featureItem</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;点击标注弹出气泡&quot;, olMap, popupData, featureItem);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 判断是否有返回图标,有则删除 - 不为业务气泡窗不删除</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> popupBackDom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`#popupBack\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (popupBackDom) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (featureItem </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">featureItem.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;businessType&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">      popupBackDom.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 经纬度</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> coordinate </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapUtils.</span><span style="color:#6F42C1;">transformToLonlat</span><span style="color:#24292E;">(pixelPoint);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 点击尺 （这里是尺(米)，并不是经纬度）;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> hdms </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapUtils.</span><span style="color:#6F42C1;">getHdms</span><span style="color:#24292E;">(pixelPoint); </span><span style="color:#6A737D;">// 转换为经纬度显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">popupObj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;通用信息展示弹窗&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    hdms,</span></span>
<span class="line"><span style="color:#24292E;">    coordinate,</span></span>
<span class="line"><span style="color:#24292E;">    popupData, </span><span style="color:#6A737D;">// 气泡窗业务数据</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  currentPopupObj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> popupObj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 修改通用展示窗数据 - 子组件使用</span></span>
<span class="line"><span style="color:#24292E;">  mittBus.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;fixCommonPopupData&quot;</span><span style="color:#24292E;">, popupObj);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  mapUtils.</span><span style="color:#6F42C1;">setPopup</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    olMap,</span></span>
<span class="line"><span style="color:#24292E;">    pixelPoint,</span></span>
<span class="line"><span style="color:#24292E;">    popupInner.</span><span style="color:#6F42C1;">commonPopupInner</span><span style="color:#24292E;">(popupObj, featureItem),</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">popupClickEvent</span><span style="color:#24292E;">(event);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 气泡弹出窗点击事件</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">popupClickEvent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;气泡弹出窗点击事件&quot;, e)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">target</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e; </span><span style="color:#6A737D;">// 事件对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;点击气泡窗返回气泡窗中的dom对象&quot;, target);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 当前dom绑定的函数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dataFunction </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> target.</span><span style="color:#6F42C1;">getAttribute</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;data-function&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 点击气泡窗获取更多</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (dataFunction </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;getMore&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&quot;点击气泡窗获取更多&quot;);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getMore</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 点击唯一标识显示具体气泡信息</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (dataFunction </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;getSingleByFeatures&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(target.getAttribute(&quot;data-unique&quot;));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getSingleByFeatures</span><span style="color:#24292E;">(target.</span><span style="color:#6F42C1;">getAttribute</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;data-unique&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 点击popupDom返回</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (dataFunction </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;popupBack&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">popupBack</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 点击气泡窗获取更多</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getMore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;点击气泡窗获取更多&quot;); </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 气泡窗点击更多 - 子组件使用</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;气泡窗点击更多 - 子组件使用&#39;, currentPopupObj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  mittBus.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;popupDataGetMore&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    currentPopupObj,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">popupData</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(&quot;fwdsdfsw&quot;, popupData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 获取完数据后进行弹窗</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">showPopupDialog</span><span style="color:#24292E;">(popupData, props.currentPageType); </span><span style="color:#6A737D;">// 显示气泡弹出窗</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/mapUtils.js</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 设置气泡窗</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">olMap</span><span style="color:#6A737D;"> 地图对象</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">pixelPoint</span><span style="color:#6A737D;"> 屏幕坐标</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">popupData</span><span style="color:#6A737D;"> 气泡窗数据</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">next</span><span style="color:#6A737D;"> 事件处理方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setPopup</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;">, </span><span style="color:#E36209;">popupInner</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// const pixelPoint = e.coordinate  // 屏幕坐标</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">popupCommonConfig</span><span style="color:#24292E;">(olMap, pixelPoint, popupInner, next, {</span></span>
<span class="line"><span style="color:#24292E;">    autoPan: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* autoPanAnimation: {</span></span>
<span class="line"><span style="color:#6A737D;">        duration: 250, // 自动平移效果的动画时间 9毫秒）</span></span>
<span class="line"><span style="color:#6A737D;">    }, */</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 气泡窗通用方法</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">olMap</span><span style="color:#6A737D;"> 地图对象</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">pixelPoint</span><span style="color:#6A737D;"> 屏幕坐标</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">popupData</span><span style="color:#6A737D;"> 气泡窗数据</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">next</span><span style="color:#6A737D;"> 事件方法</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">overlayConfig</span><span style="color:#6A737D;"> 气泡窗配置 </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">popupCommonConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;">, </span><span style="color:#E36209;">popupInner</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">, </span><span style="color:#E36209;">overlayConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> container </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;popup&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;container&#39;, container)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> closer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;popup-closer&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// let content = document.getElementById(&#39;popup-content&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  container.style.display </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;block&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> overlay </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Overlay</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    element: container, </span><span style="color:#6A737D;">//绑定 Overlay 对象和 DOM 对象的</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">overlayConfig,</span></span>
<span class="line"><span style="color:#24292E;">    zIndex: </span><span style="color:#005CC5;">9999</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addOverlay</span><span style="color:#24292E;">(overlay);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  closer.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    overlay.</span><span style="color:#6F42C1;">setPosition</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    closer.</span><span style="color:#6F42C1;">blur</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    overlay </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(popupInner)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// content.innerHTML = popupData;  // 使用jsx,不直接进行inner</span></span>
<span class="line"><span style="color:#24292E;">  overlay.</span><span style="color:#6F42C1;">setPosition</span><span style="color:#24292E;">(pixelPoint); </span><span style="color:#6A737D;">//把 overlay 显示到指定的 x,y坐标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 使用addEventListener会无限叠加事件,且不好使用removeEventListener移除(匿名函数)</span></span>
<span class="line"><span style="color:#24292E;">  overlay.</span><span style="color:#6F42C1;">getElement</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">e</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(e)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// OpenlayerBaseMap/components/popup/popupInner.js</span></span>
<span class="line"><span style="color:#6A737D;">// 通用气泡窗</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">commonPopupInner</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">popupObj</span><span style="color:#24292E;">, </span><span style="color:#E36209;">featureItem</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    mittBus.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setCommonPopupInner&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">        popupObj, featureItem, </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">popupInnerDom</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 使用jsx,不需要return,直接将jsx结构render到dom即可</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(popupInnerDom, </span><span style="color:#6F42C1;">innerDom</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 业务代码gis</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getPopupInnerDom, getPOIPopupInnerDom } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./components/popup/gisPopup.jsx&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 气泡窗dom</span></span>
<span class="line"><span style="color:#6A737D;">//  气泡窗点击更多 - 子组件使用</span></span>
<span class="line"><span style="color:#24292E;">mittBus.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;popupDataGetMore&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">currentPopupObj</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;气泡窗点击更多111&quot;, currentPopupObj);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">currentPopupObj.currentPopupData </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> currentPopupObj.popupData) {</span></span>
<span class="line"><span style="color:#24292E;">    currentPopupObj.currentPopupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentPopupObj.popupData</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 或者走接口,根据cgi获取详情</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">currentPopupAsyncObj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">apiCommon</span><span style="color:#24292E;">(gisApi.queryCellByCgi, {</span></span>
<span class="line"><span style="color:#24292E;">    cgi: currentPopupObj.currentPopupData </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> currentPopupObj.currentPopupData.cgi </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> currentPopupObj.cgi,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(currentPopupAsyncObj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">currentPopupAsyncObj.data) {</span></span>
<span class="line"><span style="color:#24292E;">    proxy.$modal.</span><span style="color:#6F42C1;">msgWarning</span><span style="color:#24292E;">(currentPopupAsyncObj.msg);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (currentPopupAsyncObj.data.networkType) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;4g&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      currentPopupObj.currentPopupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentPopupAsyncObj.data.cell4g;</span></span>
<span class="line"><span style="color:#24292E;">      currentPopupObj.currentPopupData.networkType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;4g&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      currentPopupObj.currentPopupData.newCellName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentPopupObj.currentPopupData.cellName;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;5g&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      currentPopupObj.currentPopupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentPopupAsyncObj.data.cell5g;</span></span>
<span class="line"><span style="color:#24292E;">      currentPopupObj.currentPopupData.networkType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;5g&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      currentPopupObj.currentPopupData.newCellName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentPopupObj.currentPopupData.nrCellName;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取完数据后进行弹窗</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(currentPopupObj.currentPopupData);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 设置通用气泡窗html</span></span>
<span class="line"><span style="color:#24292E;">mittBus.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;setCommonPopupInner&quot;</span><span style="color:#24292E;">, ({ </span><span style="color:#E36209;">popupObj</span><span style="color:#24292E;">, </span><span style="color:#E36209;">featureItem</span><span style="color:#24292E;">, </span><span style="color:#E36209;">callback</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;设置通用气泡窗html&quot;, popupObj, featureItem);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">featureItem) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentPopupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> popupObj.currentPopupData</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">currentPopupData) {</span></span>
<span class="line"><span style="color:#24292E;">      currentPopupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> popupObj.popupData</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (currentPopupData.searchType </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;POI&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">getPOIPopupInnerDom</span><span style="color:#24292E;">(popupObj));</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">getPopupInnerDom</span><span style="color:#24292E;">(popupObj));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (featureItem.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;businessType&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;POIMarker&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">getPOIPopupInnerDom</span><span style="color:#24292E;">(popupObj));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">getPopupInnerDom</span><span style="color:#24292E;">(popupObj));</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// components/popup/gisPopup.jsx</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ElDescriptions, ElDescriptionsItem } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;element-plus&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getPopupInnerDom</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">popupObj</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> popupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (popupObj.currentPopupData) {</span></span>
<span class="line"><span style="color:#24292E;">        popupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> popupObj.currentPopupData;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        popupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> popupObj.popupData;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">        &lt;&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;common_popup_item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#005CC5;">ElDescriptions</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{popupData.newCellName} </span><span style="color:#6F42C1;">border</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;margin-top&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">column</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">} </span><span style="color:#6F42C1;">size</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;small&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#005CC5;">ElDescriptionsItem</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;xxx&quot;</span><span style="color:#24292E;">&gt;{popupData.county}&lt;/</span><span style="color:#005CC5;">ElDescriptionsItem</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#005CC5;">ElDescriptionsItem</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;xxx&quot;</span><span style="color:#24292E;">&gt;{popupData.cgi}&lt;/</span><span style="color:#005CC5;">ElDescriptionsItem</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    {popupData.antDirectionAngle </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">                        &lt;</span><span style="color:#005CC5;">ElDescriptionsItem</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;xxx&quot;</span><span style="color:#24292E;">&gt;{popupData.antDirectionAngle}°&lt;/</span><span style="color:#005CC5;">ElDescriptionsItem</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    )}</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#005CC5;">ElDescriptionsItem</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;经纬度&quot;</span><span style="color:#24292E;">&gt;[{popupData.longitude}, {popupData.latitude}]&lt;/</span><span style="color:#005CC5;">ElDescriptionsItem</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;/</span><span style="color:#005CC5;">ElDescriptions</span><span style="color:#24292E;"> &gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;get_more&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-function</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;getMore&quot;</span><span style="color:#24292E;">&gt;查看更多&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getPOIPopupInnerDom</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">popupObj</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> popupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (popupObj.currentPopupData) {</span></span>
<span class="line"><span style="color:#24292E;">        popupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> popupObj.currentPopupData;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        popupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> popupObj.popupData;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">        &lt;&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;common_popup_item&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;POI搜索结果&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        &lt;</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                            &lt;</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;地址:&lt;/</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                            &lt;</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;{popupData.address}&lt;/</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        &lt;/</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        &lt;</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                            &lt;</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;名称:&lt;/</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                            &lt;</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;{popupData.name}&lt;/</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        &lt;/</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        &lt;</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                            &lt;</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;经纬度:&lt;/</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                            &lt;</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;[{popupData.lonlat}]&lt;/</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        &lt;/</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br></div></div>`,14),e=[o];function c(t,r,E,y,i,u){return n(),a("div",null,e)}const F=s(l,[["render",c]]);export{b as __pageData,F as default};
//# sourceMappingURL=pages_note_front_project-note_project1_project1-note-7.md.3c4efca1.js.map
