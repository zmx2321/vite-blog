import{_ as s,o as n,c as a,e as l}from"./app.0b3d7ce0.js";const m=JSON.parse('{"title":"在vue2中使用MapLibre","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/vue-note/vue2-note-5.md","filePath":"pages/note/front/vue-note/vue2-note-5.md","lastUpdated":1700204718000}'),p={name:"pages/note/front/vue-note/vue2-note-5.md"},o=l(`<h1 id="在vue2中使用maplibre" tabindex="-1">在vue2中使用MapLibre <a class="header-anchor" href="#在vue2中使用maplibre" aria-label="Permalink to &quot;在vue2中使用MapLibre&quot;">​</a></h1><blockquote><p><a href="https://zmx2321.github.io/vue_demo/#/mapbox1" target="_blank" rel="noreferrer">演示</a></p></blockquote><h2 id="_1-maplibre和mapbox官网地址" tabindex="-1">1. mapLibre和mapbox官网地址 <a class="header-anchor" href="#_1-maplibre和mapbox官网地址" aria-label="Permalink to &quot;1. mapLibre和mapbox官网地址&quot;">​</a></h2><ul><li>mapLibre <ul><li><a href="https://maplibre.org" target="_blank" rel="noreferrer">https://maplibre.org</a></li><li><a href="https://maplibre.org/maplibre-gl-js-docs/example" target="_blank" rel="noreferrer">https://maplibre.org/maplibre-gl-js-docs/example</a></li></ul></li><li>mapbox <ul><li><a href="https://www.mapbox.com/" target="_blank" rel="noreferrer">https://www.mapbox.com/</a></li><li><a href="https://docs.mapbox.com/mapbox-gl-js/example" target="_blank" rel="noreferrer">https://docs.mapbox.com/mapbox-gl-js/example</a></li></ul></li></ul><h2 id="_2-在vue中引入并使用" tabindex="-1">2. 在vue中引入并使用 <a class="header-anchor" href="#_2-在vue中引入并使用" aria-label="Permalink to &quot;2. 在vue中引入并使用&quot;">​</a></h2><ul><li>yarn add maplibre-gl</li><li>使用</li><li>在public的index.html中添加 <ul><li><code>&lt;link href=&#39;https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css&#39; rel=&#39;stylesheet&#39; /&gt;</code></li></ul></li><li>默认配置</li></ul><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 创建一个地图容器 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;glMap&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;glMap_cont&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;width: 100%; height: 100%;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-loading</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mapLoading&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> maplibregl </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maplibre-gl&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//初始化地图实例</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> map </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> maplibregl.</span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    container: </span><span style="color:#9ECBFF;">&#39;glMap&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//容器的id</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// style: &#39;./static/map.json&#39;, //地图描述数据的路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    center: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 初始位置，经度纬度 [lng, lat]</span></span>
<span class="line"><span style="color:#E1E4E8;">    zoom: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 初始缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">    antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//抗锯齿</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 创建一个地图容器 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;glMap&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;glMap_cont&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;width: 100%; height: 100%;&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-loading</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mapLoading&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> maplibregl </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maplibre-gl&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//初始化地图实例</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> map </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> maplibregl.</span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    container: </span><span style="color:#032F62;">&#39;glMap&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//容器的id</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// style: &#39;./static/map.json&#39;, //地图描述数据的路径</span></span>
<span class="line"><span style="color:#24292E;">    center: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 初始位置，经度纬度 [lng, lat]</span></span>
<span class="line"><span style="color:#24292E;">    zoom: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 初始缩放</span></span>
<span class="line"><span style="color:#24292E;">    antialias: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//抗锯齿</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_3-封装初始化地图方法" tabindex="-1">3. 封装初始化地图方法 <a class="header-anchor" href="#_3-封装初始化地图方法" aria-label="Permalink to &quot;3. 封装初始化地图方法&quot;">​</a></h2><ul><li>mapConfig.js =&gt; 地图初始配置</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    WMS: </span><span style="color:#9ECBFF;">&#39;WMS&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    CITIES: </span><span style="color:#9ECBFF;">&#39;CITIES&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">LAYERS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    STATE_FILL: </span><span style="color:#9ECBFF;">&#39;city-fills&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">glMapConfigSingle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">geoData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">center</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">zoom</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        container: id, </span><span style="color:#6A737D;">//容器的id</span></span>
<span class="line"><span style="color:#E1E4E8;">        center: center </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> center </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">120.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">28.8</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 初始位置，经度纬度 [lng, lat]</span></span>
<span class="line"><span style="color:#E1E4E8;">        zoom: zoom </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> zoom </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6.5</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 初始缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">        pitch: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//抗锯齿</span></span>
<span class="line"><span style="color:#E1E4E8;">        style: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            version: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            sources: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              [</span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">WMS</span><span style="color:#E1E4E8;">]: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;raster&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                tileSize: </span><span style="color:#79B8FF;">256</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              [</span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">CITIES</span><span style="color:#E1E4E8;">]: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;geojson&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                data: geoData,</span></span>
<span class="line"><span style="color:#E1E4E8;">                generateId: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            layers: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  id: </span><span style="color:#9ECBFF;">&#39;city-shadow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type: </span><span style="color:#9ECBFF;">&#39;fill&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  source: </span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">CITIES</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  layout: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">                  paint: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&#39;fill-color&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#0239A8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&#39;fill-translate&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&#39;fill-translate-anchor&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;viewport&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  id: </span><span style="color:#9ECBFF;">&#39;city-shadow-light&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  source: </span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">CITIES</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  layout: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">                  paint: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&#39;line-color&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#02FDFE&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&#39;line-width&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&#39;line-translate&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&#39;line-translate-anchor&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;viewport&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#6A737D;">// 市</span></span>
<span class="line"><span style="color:#E1E4E8;">                  id: </span><span style="color:#79B8FF;">LAYERS</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">STATE_FILL</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type: </span><span style="color:#9ECBFF;">&#39;fill&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  source: </span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">CITIES</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  layout: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">                  paint: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&#39;fill-color&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">&#39;case&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        [</span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;feature-state&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hover&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">&#39;#26E3F0&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">&#39;#1151B1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#6A737D;">// 市界</span></span>
<span class="line"><span style="color:#E1E4E8;">                  id: </span><span style="color:#9ECBFF;">&#39;city-borders&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  type: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  source: </span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">CITIES</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  layout: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">                  paint: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">&#39;line-color&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#1cccff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">&#39;line-width&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      </span><span style="color:#9ECBFF;">&#39;line-opacity&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.7</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    WMS: </span><span style="color:#032F62;">&#39;WMS&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    CITIES: </span><span style="color:#032F62;">&#39;CITIES&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">LAYERS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    STATE_FILL: </span><span style="color:#032F62;">&#39;city-fills&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">glMapConfigSingle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">id</span><span style="color:#24292E;">, </span><span style="color:#E36209;">geoData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">center</span><span style="color:#24292E;">, </span><span style="color:#E36209;">zoom</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        container: id, </span><span style="color:#6A737D;">//容器的id</span></span>
<span class="line"><span style="color:#24292E;">        center: center </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> center </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">120.5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">28.8</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 初始位置，经度纬度 [lng, lat]</span></span>
<span class="line"><span style="color:#24292E;">        zoom: zoom </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> zoom </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6.5</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 初始缩放</span></span>
<span class="line"><span style="color:#24292E;">        pitch: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        antialias: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//抗锯齿</span></span>
<span class="line"><span style="color:#24292E;">        style: {</span></span>
<span class="line"><span style="color:#24292E;">            version: </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            sources: {</span></span>
<span class="line"><span style="color:#24292E;">              [</span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">WMS</span><span style="color:#24292E;">]: {</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;raster&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                tileSize: </span><span style="color:#005CC5;">256</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              [</span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">CITIES</span><span style="color:#24292E;">]: {</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;geojson&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                data: geoData,</span></span>
<span class="line"><span style="color:#24292E;">                generateId: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            layers: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                  id: </span><span style="color:#032F62;">&#39;city-shadow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  type: </span><span style="color:#032F62;">&#39;fill&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  source: </span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">CITIES</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  layout: {},</span></span>
<span class="line"><span style="color:#24292E;">                  paint: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&#39;fill-color&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#0239A8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&#39;fill-translate&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&#39;fill-translate-anchor&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;viewport&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                  id: </span><span style="color:#032F62;">&#39;city-shadow-light&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  type: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  source: </span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">CITIES</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  layout: {},</span></span>
<span class="line"><span style="color:#24292E;">                  paint: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&#39;line-color&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#02FDFE&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&#39;line-width&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&#39;line-translate&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&#39;line-translate-anchor&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;viewport&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6A737D;">// 市</span></span>
<span class="line"><span style="color:#24292E;">                  id: </span><span style="color:#005CC5;">LAYERS</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">STATE_FILL</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  type: </span><span style="color:#032F62;">&#39;fill&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  source: </span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">CITIES</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  layout: {},</span></span>
<span class="line"><span style="color:#24292E;">                  paint: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&#39;fill-color&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#032F62;">&#39;case&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        [</span><span style="color:#032F62;">&#39;boolean&#39;</span><span style="color:#24292E;">, [</span><span style="color:#032F62;">&#39;feature-state&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;hover&#39;</span><span style="color:#24292E;">], </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#032F62;">&#39;#26E3F0&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#032F62;">&#39;#1151B1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    ],</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6A737D;">// 市界</span></span>
<span class="line"><span style="color:#24292E;">                  id: </span><span style="color:#032F62;">&#39;city-borders&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  type: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  source: </span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">CITIES</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  layout: {},</span></span>
<span class="line"><span style="color:#24292E;">                  paint: {</span></span>
<span class="line"><span style="color:#24292E;">                      </span><span style="color:#032F62;">&#39;line-color&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#1cccff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                      </span><span style="color:#032F62;">&#39;line-width&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                      </span><span style="color:#032F62;">&#39;line-opacity&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.7</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  },</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div><ul><li>mapUtils.js =&gt; 地图核心配置</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> maplibregl </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maplibre-gl&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { glMapConfigSingle } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./mapData/mapConfig&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// config</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> zhejiangGeo </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./mapData/geoData/zhejiang&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 普通浙江</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图工具</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapInitTool</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">mapconfig</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">geoData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">center</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">zoom</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> maplibregl.</span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">mapconfig</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;glMap&#39;</span><span style="color:#E1E4E8;">, geoData, center, zoom));  </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 渲染geojson</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderGeo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">geoData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">map</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">className</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isSet</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(geoData)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    geoData.features.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { properties } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { name, centroid } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> properties</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">centroid) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          centroid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> properties.center</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> el </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`&lt;div class=&quot;title&quot;&gt;\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}&lt;/div&gt;\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.className </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`city-label \${</span><span style="color:#E1E4E8;">className</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 是否需要定制化</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(isSet) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(el, item, name)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> maplibregl.</span><span style="color:#B392F0;">Marker</span><span style="color:#E1E4E8;">({ element: el, anchor: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">setLngLat</span><span style="color:#E1E4E8;">(centroid).</span><span style="color:#B392F0;">addTo</span><span style="color:#E1E4E8;">(map);</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 添加面</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addMapLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">map</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">geoData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">idName</span><span style="color:#E1E4E8;"> , </span><span style="color:#FFAB70;">color</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">opacity</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 添加Source，类型是geojson</span></span>
<span class="line"><span style="color:#E1E4E8;">    map.</span><span style="color:#B392F0;">addSource</span><span style="color:#E1E4E8;">(idName, {       </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;geojson&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;data&#39;</span><span style="color:#E1E4E8;">: geoData</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 添加面</span></span>
<span class="line"><span style="color:#E1E4E8;">    map.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">: idName,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;fill&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// fill类型layer</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;source&#39;</span><span style="color:#E1E4E8;">: idName,         </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;layout&#39;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;paint&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;fill-color&#39;</span><span style="color:#E1E4E8;">: color,  </span><span style="color:#6A737D;">// fill颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;fill-opacity&#39;</span><span style="color:#E1E4E8;">: opacity </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> opacity </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.7</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// fill透明度</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 添加线</span></span>
<span class="line"><span style="color:#E1E4E8;">    map.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">: idName </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;source&#39;</span><span style="color:#E1E4E8;">: idName,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;layout&#39;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;layout&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;line-join&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;round&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;line-cap&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;round&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;paint&quot;</span><span style="color:#E1E4E8;">: { </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;line-color&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;line-width&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;line-dasharray&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图供出方法</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图核心方法供出</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 地图配置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setMapConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">map</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 添加相关的地图控件</span></span>
<span class="line"><span style="color:#E1E4E8;">    map.</span><span style="color:#B392F0;">addControl</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> maplibregl.</span><span style="color:#B392F0;">FullscreenControl</span><span style="color:#E1E4E8;">(),</span><span style="color:#9ECBFF;">&#39;top-right&#39;</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// this.glMap.addControl(new maplibregl.NavigationControl()); </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// this.glMap.scrollZoom.disable();  // 禁用地图缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 设置标注</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setMarkerCommon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lonlat</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">popup</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">map</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果map为空，表示三个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">map) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 无气泡</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> map </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> popup</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> maplibregl.</span><span style="color:#B392F0;">Marker</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">setLngLat</span><span style="color:#E1E4E8;">(lonlat)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">addTo</span><span style="color:#E1E4E8;">(map);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 有气泡</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> maplibregl.</span><span style="color:#B392F0;">Marker</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">setLngLat</span><span style="color:#E1E4E8;">(lonlat)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">setPopup</span><span style="color:#E1E4E8;">(popup) </span><span style="color:#6A737D;">// sets a popup on this marker</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">addTo</span><span style="color:#E1E4E8;">(map);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 设置气泡</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setPopupCommon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">map</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">linlat</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">inner</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> maplibregl.</span><span style="color:#B392F0;">Popup</span><span style="color:#E1E4E8;">({ closeOnClick: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">setLngLat</span><span style="color:#E1E4E8;">(linlat)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">setHTML</span><span style="color:#E1E4E8;">(inner)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">addTo</span><span style="color:#E1E4E8;">(map);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图数据及渲染方法供出</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 浙江</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">zhejiangMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapInitTool</span><span style="color:#E1E4E8;">(glMapConfigSingle, zhejiangGeo)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderGeoToZheJiang</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">map</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">renderGeo</span><span style="color:#E1E4E8;">(zhejiangGeo, map, </span><span style="color:#9ECBFF;">&#39;zhejiang&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 上海</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shanghaiMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// return mapInitTool(glMapConfigSingle, shanghaiGeo, [121.5, 31.1], 8.3)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapInitTool</span><span style="color:#E1E4E8;">(glMapConfigSingle, shanghaiGeo, [</span><span style="color:#79B8FF;">121.4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">31.2</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">8.9</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderGeoToShangHai</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">map</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">renderGeo</span><span style="color:#E1E4E8;">(shanghaiGeo, map, </span><span style="color:#9ECBFF;">&#39;shanghai&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> maplibregl </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maplibre-gl&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { glMapConfigSingle } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./mapData/mapConfig&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// config</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> zhejiangGeo </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./mapData/geoData/zhejiang&#39;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 普通浙江</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图工具</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapInitTool</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">mapconfig</span><span style="color:#24292E;">, </span><span style="color:#E36209;">geoData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">center</span><span style="color:#24292E;">, </span><span style="color:#E36209;">zoom</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> maplibregl.</span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">mapconfig</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;glMap&#39;</span><span style="color:#24292E;">, geoData, center, zoom));  </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 渲染geojson</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">renderGeo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">geoData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">map</span><span style="color:#24292E;">, </span><span style="color:#E36209;">className</span><span style="color:#24292E;">, </span><span style="color:#E36209;">isSet</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(geoData)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    geoData.features.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { properties } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { name, centroid } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> properties</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">centroid) {</span></span>
<span class="line"><span style="color:#24292E;">          centroid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> properties.center</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> el </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      el.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`&lt;div class=&quot;title&quot;&gt;\${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}&lt;/div&gt;\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      el.className </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`city-label \${</span><span style="color:#24292E;">className</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 是否需要定制化</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(isSet) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(el, item, name)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> maplibregl.</span><span style="color:#6F42C1;">Marker</span><span style="color:#24292E;">({ element: el, anchor: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">setLngLat</span><span style="color:#24292E;">(centroid).</span><span style="color:#6F42C1;">addTo</span><span style="color:#24292E;">(map);</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 添加面</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addMapLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">map</span><span style="color:#24292E;">, </span><span style="color:#E36209;">geoData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">idName</span><span style="color:#24292E;"> , </span><span style="color:#E36209;">color</span><span style="color:#24292E;">, </span><span style="color:#E36209;">opacity</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 添加Source，类型是geojson</span></span>
<span class="line"><span style="color:#24292E;">    map.</span><span style="color:#6F42C1;">addSource</span><span style="color:#24292E;">(idName, {       </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;geojson&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;data&#39;</span><span style="color:#24292E;">: geoData</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 添加面</span></span>
<span class="line"><span style="color:#24292E;">    map.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;">: idName,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;fill&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// fill类型layer</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;source&#39;</span><span style="color:#24292E;">: idName,         </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;layout&#39;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;paint&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;fill-color&#39;</span><span style="color:#24292E;">: color,  </span><span style="color:#6A737D;">// fill颜色</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;fill-opacity&#39;</span><span style="color:#24292E;">: opacity </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> opacity </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.7</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// fill透明度</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 添加线</span></span>
<span class="line"><span style="color:#24292E;">    map.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;">: idName </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;source&#39;</span><span style="color:#24292E;">: idName,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;layout&#39;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;layout&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;line-join&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;round&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;line-cap&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;round&quot;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;paint&quot;</span><span style="color:#24292E;">: { </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;line-color&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;line-width&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;line-dasharray&quot;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图供出方法</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图核心方法供出</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 地图配置</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setMapConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">map</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 添加相关的地图控件</span></span>
<span class="line"><span style="color:#24292E;">    map.</span><span style="color:#6F42C1;">addControl</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> maplibregl.</span><span style="color:#6F42C1;">FullscreenControl</span><span style="color:#24292E;">(),</span><span style="color:#032F62;">&#39;top-right&#39;</span><span style="color:#24292E;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// this.glMap.addControl(new maplibregl.NavigationControl()); </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// this.glMap.scrollZoom.disable();  // 禁用地图缩放</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 设置标注</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setMarkerCommon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">el</span><span style="color:#24292E;">, </span><span style="color:#E36209;">lonlat</span><span style="color:#24292E;">, </span><span style="color:#E36209;">popup</span><span style="color:#24292E;">, </span><span style="color:#E36209;">map</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果map为空，表示三个参数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">map) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 无气泡</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> map </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> popup</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> maplibregl.</span><span style="color:#6F42C1;">Marker</span><span style="color:#24292E;">(el)</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">setLngLat</span><span style="color:#24292E;">(lonlat)</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">addTo</span><span style="color:#24292E;">(map);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 有气泡</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> maplibregl.</span><span style="color:#6F42C1;">Marker</span><span style="color:#24292E;">(el)</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">setLngLat</span><span style="color:#24292E;">(lonlat)</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">setPopup</span><span style="color:#24292E;">(popup) </span><span style="color:#6A737D;">// sets a popup on this marker</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">addTo</span><span style="color:#24292E;">(map);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 设置气泡</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setPopupCommon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">map</span><span style="color:#24292E;">, </span><span style="color:#E36209;">linlat</span><span style="color:#24292E;">, </span><span style="color:#E36209;">inner</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> maplibregl.</span><span style="color:#6F42C1;">Popup</span><span style="color:#24292E;">({ closeOnClick: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">setLngLat</span><span style="color:#24292E;">(linlat)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">setHTML</span><span style="color:#24292E;">(inner)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">addTo</span><span style="color:#24292E;">(map);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图数据及渲染方法供出</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 浙江</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">zhejiangMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapInitTool</span><span style="color:#24292E;">(glMapConfigSingle, zhejiangGeo)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">renderGeoToZheJiang</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">map</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">renderGeo</span><span style="color:#24292E;">(zhejiangGeo, map, </span><span style="color:#032F62;">&#39;zhejiang&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 上海</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shanghaiMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// return mapInitTool(glMapConfigSingle, shanghaiGeo, [121.5, 31.1], 8.3)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapInitTool</span><span style="color:#24292E;">(glMapConfigSingle, shanghaiGeo, [</span><span style="color:#005CC5;">121.4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">31.2</span><span style="color:#24292E;">], </span><span style="color:#005CC5;">8.9</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">renderGeoToShangHai</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">map</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">renderGeo</span><span style="color:#24292E;">(shanghaiGeo, map, </span><span style="color:#032F62;">&#39;shanghai&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br></div></div><ul><li>MapMain.vue =&gt; 地图核心文件</li></ul><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;glMap&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;glMap_cont&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;width: 100%; height: 100%;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-loading</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mapLoading&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 图例 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">map-lend</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mapLendRef&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@removePopup</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;removePopup&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// map-core</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> mapUtils </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./mapUtils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      glMap: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      mainPopupData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mpdt0: </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, </span></span>
<span class="line"><span style="color:#E1E4E8;">      type0Data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type0dt1: </span><span style="color:#9ECBFF;">&#39;xxxx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type0dt2: </span><span style="color:#9ECBFF;">&#39;xxxx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type0table: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          columns: [</span><span style="color:#9ECBFF;">&#39;指标&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;数据&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          type0tbData: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              type0tdCol1: </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              type0tdCol2: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                num: </span><span style="color:#9ECBFF;">&#39;123&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                unit: </span><span style="color:#9ECBFF;">&#39;万&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              type0tdCol1: </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              type0tdCol2: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                num: </span><span style="color:#9ECBFF;">&#39;456&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                unit: </span><span style="color:#9ECBFF;">&#39;万&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      tabCurrent: </span><span style="color:#9ECBFF;">&#39;浙江&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mainPopup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`&lt;section class=&quot;popupp_wrap main_popupp&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;li&gt;\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">mainPopupData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">mpdt0</span><span style="color:#9ECBFF;">}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;/section&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// type0气泡</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">type0Popup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">       * table</span></span>
<span class="line"><span style="color:#6A737D;">       */</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tbThStr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tbTbdStr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.type0Data.type0table.columns.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        tbThStr </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`&lt;th&gt;\${</span><span style="color:#E1E4E8;">item</span><span style="color:#9ECBFF;">}&lt;/th&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.type0Data.type0table.type0tbData.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        tbTbdStr </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`&lt;tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">          &lt;td&gt;\${</span><span style="color:#E1E4E8;">item</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">cszhtdCol1</span><span style="color:#9ECBFF;">}&lt;/td&gt; </span></span>
<span class="line"><span style="color:#9ECBFF;">          &lt;td&gt;\${</span><span style="color:#F97583;">typeof</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">item</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">cszhtdCol2</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> </span><span style="color:#9ECBFF;">&#39;object&#39;</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;"> </span><span style="color:#9ECBFF;">&#39;&lt;span&gt;&#39;</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">item</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">cszhtdCol2</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">num</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&#39;&lt;/span&gt;&#39;</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">item</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">cszhtdCol2</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">unit</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">item</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">cszhtdCol2</span><span style="color:#9ECBFF;">}&lt;/td&gt; </span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/tr&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`&lt;section class=&quot;popupp_wrap gaosushiyou_popupp&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;li&gt;名称：\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">type0Data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">type0dt1</span><span style="color:#9ECBFF;">}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;li&gt;简介：\${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">type0Data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">type0dt2</span><span style="color:#9ECBFF;">}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;table&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;thead&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                      \${</span><span style="color:#E1E4E8;">tbThStr</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;/thead&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;tbody&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                      \${</span><span style="color:#E1E4E8;">tbTbdStr</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;/tbody&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/table&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;/section&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * map init</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 重置地图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">resetMap</span><span style="color:#E1E4E8;">(next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeAllMarker</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initMapConfig</span><span style="color:#E1E4E8;">(next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resetMap</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(&#39;开始打点&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">        mapUtils.</span><span style="color:#B392F0;">setMapConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap)  </span><span style="color:#6A737D;">// 地图配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">glmapEvent</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 绑定事件</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * map tools</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 移除所有标注</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">removeAllMarker</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(&quot;移除所有标注&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 清除气泡</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removePopup</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 清除标注</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> markerList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.map_marker&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(markerList)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(markerList.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> markerParentNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> markerList[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].parentNode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        markerList.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// console.log(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">          markerParentNode.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 移除气泡</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">removePopup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> mapNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#glMap&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(mapNode)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> popupNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.maplibregl-popup&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(popupNode.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mapNode.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(popupNode[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * map core</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 绑定点击事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">glmapEvent</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 监听地图缩放事件</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moveend&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 移入地图</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mouseover&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 地图点击事件</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// reload</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;load&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$nextTick</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getImgMarker</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 设置图片标注</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 配置标注</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">lonlat</span><span style="color:#6A737D;"> 经纬度  [120.5, 30]</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">mapPopup</span><span style="color:#6A737D;">  气泡</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">markerClass</span><span style="color:#6A737D;">  标注样式</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setMarkerConfig</span><span style="color:#E1E4E8;">(lonlat, mapPopup, markerClass, isTab</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, item) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log()</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> popup </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapUtils.</span><span style="color:#B392F0;">setPopupCommon</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap, lonlat, mapPopup)  </span><span style="color:#6A737D;">// 气泡</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> el </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      el.className </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`map_marker \${</span><span style="color:#E1E4E8;">markerClass</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 设置标注</span></span>
<span class="line"><span style="color:#E1E4E8;">      mapUtils.</span><span style="color:#B392F0;">setMarkerCommon</span><span style="color:#E1E4E8;">(el, lonlat, popup, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 判断标注</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">checkMapMarker</span><span style="color:#E1E4E8;">(item, label, popup, node) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(node) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(item.business_type.</span><span style="color:#B392F0;">search</span><span style="color:#E1E4E8;">(label) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setMarkerConfig</span><span style="color:#E1E4E8;">([item.longitude, item.latitude], popup, node)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        node </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> popup</span></span>
<span class="line"><span style="color:#E1E4E8;">        popup </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> label</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setMarkerConfig</span><span style="color:#E1E4E8;">([item.longitude, item.latitude], popup, node)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置图片标注</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getImgMarker</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mapDataList.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;">(item.newcompany_id) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setType0Marker</span><span style="color:#E1E4E8;">(item)  </span><span style="color:#6A737D;">// type0标注</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setMainMarker</span><span style="color:#E1E4E8;">(item)  </span><span style="color:#6A737D;">// 首页</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 配置地图标注</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setMainMarker</span><span style="color:#E1E4E8;">(item) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainPopupData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mpdt0: item.xxx,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      mapUtils.</span><span style="color:#B392F0;">setPopupCommon</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap, lonlat, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainPopup)  </span><span style="color:#6A737D;">// 浙江气泡</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// type0标注</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setType0Marker</span><span style="color:#E1E4E8;">(item) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(item.shop_name, item.adress)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.type0Data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type0dt1: item.x1,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type0dt2: item.x2,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type0table: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          columns: [</span><span style="color:#9ECBFF;">&#39;指标&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;数据&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          type0tbData: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              type0tdCol1: </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              type0tdCol2: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                num: item.x3,</span></span>
<span class="line"><span style="color:#E1E4E8;">                unit: </span><span style="color:#9ECBFF;">&#39;万&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              type0tdCol1: </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              type0tdCol2: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                num: item.x4,</span></span>
<span class="line"><span style="color:#E1E4E8;">                unit: </span><span style="color:#9ECBFF;">&#39;万&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checkMapMarker</span><span style="color:#E1E4E8;">(item, </span><span style="color:#9ECBFF;">&#39;肯德基&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.type0Popup, </span><span style="color:#9ECBFF;">&#39;map6_mksty1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * map render</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化浙江</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initZheJiang</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapUtils.</span><span style="color:#B392F0;">zhejiangMap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      mapUtils.</span><span style="color:#B392F0;">renderGeoToZheJiang</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化上海</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initShangHai</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapUtils.</span><span style="color:#B392F0;">shanghaiMap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      mapUtils.</span><span style="color:#B392F0;">renderGeoToShangHai</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 业务</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置地图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initMap</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initMapConfig</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.tabCurrent) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;浙江&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initZheJiang</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 初始化浙江</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;上海&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initShangHai</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initZheJiang</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initMap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">destroyed</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;glMap&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;glMap_cont&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;width: 100%; height: 100%;&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-loading</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mapLoading&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 图例 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">map-lend</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mapLendRef&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@removePopup</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;removePopup&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// map-core</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> mapUtils </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./mapUtils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      glMap: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      mainPopupData: {</span></span>
<span class="line"><span style="color:#24292E;">        mpdt0: </span><span style="color:#032F62;">&#39;xxx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      }, </span></span>
<span class="line"><span style="color:#24292E;">      type0Data: {</span></span>
<span class="line"><span style="color:#24292E;">        type0dt1: </span><span style="color:#032F62;">&#39;xxxx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type0dt2: </span><span style="color:#032F62;">&#39;xxxx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type0table: {</span></span>
<span class="line"><span style="color:#24292E;">          columns: [</span><span style="color:#032F62;">&#39;指标&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;数据&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          type0tbData: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              type0tdCol1: </span><span style="color:#032F62;">&#39;xxx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              type0tdCol2: {</span></span>
<span class="line"><span style="color:#24292E;">                num: </span><span style="color:#032F62;">&#39;123&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                unit: </span><span style="color:#032F62;">&#39;万&#39;</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              type0tdCol1: </span><span style="color:#032F62;">&#39;xxx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              type0tdCol2: {</span></span>
<span class="line"><span style="color:#24292E;">                num: </span><span style="color:#032F62;">&#39;456&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                unit: </span><span style="color:#032F62;">&#39;万&#39;</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      tabCurrent: </span><span style="color:#032F62;">&#39;浙江&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  computed: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mainPopup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`&lt;section class=&quot;popupp_wrap main_popupp&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;li&gt;\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">mainPopupData</span><span style="color:#032F62;">.</span><span style="color:#24292E;">mpdt0</span><span style="color:#032F62;">}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#032F62;">              &lt;/section&gt;\`</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// type0气泡</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">type0Popup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">       * table</span></span>
<span class="line"><span style="color:#6A737D;">       */</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> tbThStr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> tbTbdStr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.type0Data.type0table.columns.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        tbThStr </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`&lt;th&gt;\${</span><span style="color:#24292E;">item</span><span style="color:#032F62;">}&lt;/th&gt;\`</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.type0Data.type0table.type0tbData.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        tbTbdStr </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`&lt;tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">          &lt;td&gt;\${</span><span style="color:#24292E;">item</span><span style="color:#032F62;">.</span><span style="color:#24292E;">cszhtdCol1</span><span style="color:#032F62;">}&lt;/td&gt; </span></span>
<span class="line"><span style="color:#032F62;">          &lt;td&gt;\${</span><span style="color:#D73A49;">typeof</span><span style="color:#032F62;"> </span><span style="color:#24292E;">item</span><span style="color:#032F62;">.</span><span style="color:#24292E;">cszhtdCol2</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">===</span><span style="color:#032F62;"> </span><span style="color:#032F62;">&#39;object&#39;</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">?</span><span style="color:#032F62;"> </span><span style="color:#032F62;">&#39;&lt;span&gt;&#39;</span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> </span><span style="color:#24292E;">item</span><span style="color:#032F62;">.</span><span style="color:#24292E;">cszhtdCol2</span><span style="color:#032F62;">.</span><span style="color:#24292E;">num</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&#39;&lt;/span&gt;&#39;</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> </span><span style="color:#24292E;">item</span><span style="color:#032F62;">.</span><span style="color:#24292E;">cszhtdCol2</span><span style="color:#032F62;">.</span><span style="color:#24292E;">unit</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">:</span><span style="color:#032F62;"> </span><span style="color:#24292E;">item</span><span style="color:#032F62;">.</span><span style="color:#24292E;">cszhtdCol2</span><span style="color:#032F62;">}&lt;/td&gt; </span></span>
<span class="line"><span style="color:#032F62;">        &lt;/tr&gt;\`</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`&lt;section class=&quot;popupp_wrap gaosushiyou_popupp&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;ul&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;li&gt;名称：\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">type0Data</span><span style="color:#032F62;">.</span><span style="color:#24292E;">type0dt1</span><span style="color:#032F62;">}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;li&gt;简介：\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">type0Data</span><span style="color:#032F62;">.</span><span style="color:#24292E;">type0dt2</span><span style="color:#032F62;">}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;table&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;thead&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">                      \${</span><span style="color:#24292E;">tbThStr</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;/thead&gt;</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;tbody&gt;</span></span>
<span class="line"><span style="color:#032F62;">                      \${</span><span style="color:#24292E;">tbTbdStr</span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;/tbody&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;/table&gt;</span></span>
<span class="line"><span style="color:#032F62;">              &lt;/section&gt;\`</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">methods</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * map init</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 重置地图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">resetMap</span><span style="color:#24292E;">(next) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">removeAllMarker</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(next) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initMapConfig</span><span style="color:#24292E;">(next) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resetMap</span><span style="color:#24292E;">(()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(&#39;开始打点&#39;)</span></span>
<span class="line"><span style="color:#24292E;">        mapUtils.</span><span style="color:#6F42C1;">setMapConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap)  </span><span style="color:#6A737D;">// 地图配置</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">glmapEvent</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// 绑定事件</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * map tools</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 移除所有标注</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">removeAllMarker</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(&quot;移除所有标注&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 清除气泡</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">removePopup</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 清除标注</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> markerList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.map_marker&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(markerList)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(markerList.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> markerParentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> markerList[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].parentNode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        markerList.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// console.log(item)</span></span>
<span class="line"><span style="color:#24292E;">          markerParentNode.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(item)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 移除气泡</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">removePopup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> mapNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#glMap&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(mapNode)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> popupNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.maplibregl-popup&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(popupNode.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        mapNode.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(popupNode[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * map core</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 绑定点击事件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">glmapEvent</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 监听地图缩放事件</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;moveend&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">e</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 移入地图</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mouseover&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">e</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 地图点击事件</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">e</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// reload</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;load&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$nextTick</span><span style="color:#24292E;">(()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getImgMarker</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// 设置图片标注</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 配置标注</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">lonlat</span><span style="color:#6A737D;"> 经纬度  [120.5, 30]</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">mapPopup</span><span style="color:#6A737D;">  气泡</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">markerClass</span><span style="color:#6A737D;">  标注样式</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setMarkerConfig</span><span style="color:#24292E;">(lonlat, mapPopup, markerClass, isTab</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, item) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log()</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> popup </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapUtils.</span><span style="color:#6F42C1;">setPopupCommon</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap, lonlat, mapPopup)  </span><span style="color:#6A737D;">// 气泡</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> el </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      el.className </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`map_marker \${</span><span style="color:#24292E;">markerClass</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 设置标注</span></span>
<span class="line"><span style="color:#24292E;">      mapUtils.</span><span style="color:#6F42C1;">setMarkerCommon</span><span style="color:#24292E;">(el, lonlat, popup, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 判断标注</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">checkMapMarker</span><span style="color:#24292E;">(item, label, popup, node) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(node) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(item.business_type.</span><span style="color:#6F42C1;">search</span><span style="color:#24292E;">(label) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setMarkerConfig</span><span style="color:#24292E;">([item.longitude, item.latitude], popup, node)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        node </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> popup</span></span>
<span class="line"><span style="color:#24292E;">        popup </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> label</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setMarkerConfig</span><span style="color:#24292E;">([item.longitude, item.latitude], popup, node)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置图片标注</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getImgMarker</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.mapDataList.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;">(item.newcompany_id) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setType0Marker</span><span style="color:#24292E;">(item)  </span><span style="color:#6A737D;">// type0标注</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setMainMarker</span><span style="color:#24292E;">(item)  </span><span style="color:#6A737D;">// 首页</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 配置地图标注</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setMainMarker</span><span style="color:#24292E;">(item) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.mainPopupData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        mpdt0: item.xxx,</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      mapUtils.</span><span style="color:#6F42C1;">setPopupCommon</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap, lonlat, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.mainPopup)  </span><span style="color:#6A737D;">// 浙江气泡</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// type0标注</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setType0Marker</span><span style="color:#24292E;">(item) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(item.shop_name, item.adress)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.type0Data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        type0dt1: item.x1,</span></span>
<span class="line"><span style="color:#24292E;">        type0dt2: item.x2,</span></span>
<span class="line"><span style="color:#24292E;">        type0table: {</span></span>
<span class="line"><span style="color:#24292E;">          columns: [</span><span style="color:#032F62;">&#39;指标&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;数据&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          type0tbData: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              type0tdCol1: </span><span style="color:#032F62;">&#39;xxx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              type0tdCol2: {</span></span>
<span class="line"><span style="color:#24292E;">                num: item.x3,</span></span>
<span class="line"><span style="color:#24292E;">                unit: </span><span style="color:#032F62;">&#39;万&#39;</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              type0tdCol1: </span><span style="color:#032F62;">&#39;xxx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              type0tdCol2: {</span></span>
<span class="line"><span style="color:#24292E;">                num: item.x4,</span></span>
<span class="line"><span style="color:#24292E;">                unit: </span><span style="color:#032F62;">&#39;万&#39;</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">checkMapMarker</span><span style="color:#24292E;">(item, </span><span style="color:#032F62;">&#39;肯德基&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.type0Popup, </span><span style="color:#032F62;">&#39;map6_mksty1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * map render</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化浙江</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initZheJiang</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapUtils.</span><span style="color:#6F42C1;">zhejiangMap</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      mapUtils.</span><span style="color:#6F42C1;">renderGeoToZheJiang</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化上海</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initShangHai</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapUtils.</span><span style="color:#6F42C1;">shanghaiMap</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      mapUtils.</span><span style="color:#6F42C1;">renderGeoToShangHai</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 业务</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置地图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initMap</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initMapConfig</span><span style="color:#24292E;">(()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.tabCurrent) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;浙江&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initZheJiang</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// 初始化浙江</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;上海&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initShangHai</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initZheJiang</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initMap</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">destroyed</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br></div></div><ul><li>MapLend.vue =&gt; 图例封装</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 点击显示隐藏</span></span>
<span class="line"><span style="color:#6A737D;">// toggle</span></span>
<span class="line"><span style="color:#B392F0;">toggleLend</span><span style="color:#E1E4E8;">(calss) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dnCls </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;f-dn&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$el.parentNode.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(calss).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">item.classList.</span><span style="color:#B392F0;">contains</span><span style="color:#E1E4E8;">(dnCls)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      item.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(dnCls)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      item.classList.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(dnCls)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 点击显示隐藏</span></span>
<span class="line"><span style="color:#6A737D;">// toggle</span></span>
<span class="line"><span style="color:#6F42C1;">toggleLend</span><span style="color:#24292E;">(calss) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dnCls </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;f-dn&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$el.parentNode.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(calss).</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">item.classList.</span><span style="color:#6F42C1;">contains</span><span style="color:#24292E;">(dnCls)) {</span></span>
<span class="line"><span style="color:#24292E;">      item.classList.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(dnCls)</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      item.classList.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(dnCls)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,16),e=[o];function c(r,t,E,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{m as __pageData,u as default};
