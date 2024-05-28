import{_ as s,o as n,c as a,e as l}from"./app.9e423c91.js";const u=JSON.parse('{"title":"openlayer库完整代码","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/gis-note/openlayer-note-4.md","filePath":"pages/note/front/gis-note/openlayer-note-4.md","lastUpdated":1716863044000}'),p={name:"pages/note/front/gis-note/openlayer-note-4.md"},o=l(`<h1 id="openlayer库完整代码" tabindex="-1">openlayer库完整代码 <a class="header-anchor" href="#openlayer库完整代码" aria-label="Permalink to &quot;openlayer库完整代码&quot;">​</a></h1><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// map core</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/ol.css&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Map, View } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map 加载底图相关</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">/* OSM, */</span><span style="color:#E1E4E8;"> XYZ, Vector </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> VectorSource } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/source&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map 坐标相关</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fromLonLat, transform, toLonLat } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/proj&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getTopLeft, getBottomRight, getCenter } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/extent&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { toStringHDMS } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/coordinate&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map 控件相关</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FullScreen, Zoom, ZoomSlider, ScaleLine } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ol/control&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map 图层相关</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Feature </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/Feature&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Point, Circle, Polygon, LineString } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ol/geom&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Tile </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> TileLayer, Vector </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> VectorLayer } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/layer&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// VectorLayer表示珊格图层</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> LinearRing </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/geom/LinearRing&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Overlay </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/Overlay&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 气泡</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getLength } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/sphere&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map 样式</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Circle </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> CircleStyle, Fill, Stroke, Style, Text, Icon } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/style&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// kml test</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { KML</span><span style="color:#6A737D;">/* , GeoJSON */</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/format&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 选择多边形</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Draw, defaults</span><span style="color:#6A737D;">/* , Modify, Snap */</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ol/interaction&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// render</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getVectorContext } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ol/render&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 变量(非地图)</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 地图点击打点变量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图变量(工具)</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tdtTk</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.env.VITE_APP_MapToken  </span><span style="color:#6A737D;">// 全局配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">minRenderZoom</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">15</span></span>
<span class="line"><span style="color:#6A737D;">// 地图初始化配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mapInitConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ol地图底图</span></span>
<span class="line"><span style="color:#E1E4E8;">  layers: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 天地图底图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TileLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      source: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">XYZ</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&quot;http://t0.tianditu.com/DataServer?T=vec_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> tdtTk,</span></span>
<span class="line"><span style="color:#E1E4E8;">        wrapX: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        crossOrigin: </span><span style="color:#9ECBFF;">&quot;anonymous&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 天地图注记</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TileLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      source: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">XYZ</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&quot;http://t0.tianditu.com/DataServer?T=cva_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> tdtTk</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ol地图基本配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  view: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">View</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    center: </span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">121.63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">29.88</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    zoom: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxZoom: </span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    minZoom: </span><span style="color:#79B8FF;">13</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// center: fromLonLat([116.400819, 39.916263]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// View默认使用EPSG3857坐标系</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// projection: &#39;EPSG:4326&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// zoom: 15,</span></span>
<span class="line"><span style="color:#E1E4E8;">    constrainResolution: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 设置缩放级别为整数 </span></span>
<span class="line"><span style="color:#E1E4E8;">    smoothResolutionConstraint: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 关闭无级缩放地图</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 菜单项</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">menuMethodBtn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#E1E4E8;">  commonMenu: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    commonMenuMethod0: </span><span style="color:#9ECBFF;">&#39;地图功能测试&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共选项0</span></span>
<span class="line"><span style="color:#E1E4E8;">    commonMenuMethod1: </span><span style="color:#9ECBFF;">&#39;拷贝当前经纬度&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共选项1</span></span>
<span class="line"><span style="color:#E1E4E8;">    commonMenuMethod2: </span><span style="color:#9ECBFF;">&#39;清除所有要素&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共选项3</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// commonMenuMethod4: &#39;置顶要素&#39;,  // 公共选项4</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 公共动态选项,每个页面有需要才显示</span></span>
<span class="line"><span style="color:#E1E4E8;">  commonDynamicMenu: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    commonDynamicMenuMethod1: </span><span style="color:#9ECBFF;">&#39;显示当前要素信息&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共动态选项1</span></span>
<span class="line"><span style="color:#E1E4E8;">    commonDynamicMenuMethod2: </span><span style="color:#9ECBFF;">&#39;仅取消绘制状态&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 公共动态选项2</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 子页动态选项, 单页面显示或单页面有需要显示</span></span>
<span class="line"><span style="color:#E1E4E8;">  singleMenu: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    singleMenuMethod1: </span><span style="color:#9ECBFF;">&#39;刷新地图&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 子页动态选项1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// singleMenuMethod1: &#39;刷新地图&#39;  // 子页动态选项1</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 主菜单项</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">commonMenu</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> menuMethodBtn  </span><span style="color:#6A737D;">// 公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> menuMethods </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#6A737D;">// 将对象中的值传入数组</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> commonMenu) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  menuMethods.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(commonMenu[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图核心辅助方法</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 判断menu是否存在,不存在新增</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">menuAddSingleMethod</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">singleMethod</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">menuMethods.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(singleMethod)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    menuMethods.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(singleMethod)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 公共动态选项判断</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">condition</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">commonDynamicMenuMethod</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (condition) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">menuAddSingleMethod</span><span style="color:#E1E4E8;">(commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">condition </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> menuMethods.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(commonDynamicMenuMethod)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    menuMethods </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> menuMethods.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setMentBtnExtendByPage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">currentPageType</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">singleMenu</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> menuMethodBtn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (currentPageType) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;gis&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">menuAddSingleMethod</span><span style="color:#E1E4E8;">(singleMenu.singleMenuMethod1)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除图层方法</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取当前地图上的所有图层</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> layers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getLayers</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 从地图中移除所有图层</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> layers.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (layers[i] </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(layers[i])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// olMap.removeLayer(layers[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 标注点样式</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pointCircleStyle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  image: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CircleStyle</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    radius: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fill: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fill</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      color: </span><span style="color:#9ECBFF;">&#39;#f49d41&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    stroke: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Stroke</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      color: </span><span style="color:#9ECBFF;">&#39;#836365&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      width: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pointIconleStyle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    image: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Icon</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      src,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// image: new CircleStyle({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// anchor: [0.5, 0.5],//图标的锚点,经纬度点所对应的图标的位置，默认是[0.5, 0.5]，即为标注图标的中心点位置</span></span>
<span class="line"><span style="color:#E1E4E8;">      anchorOrigin: </span><span style="color:#9ECBFF;">&#39;top-right&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//锚点的偏移位置，默认是top-left，</span></span>
<span class="line"><span style="color:#E1E4E8;">      anchorXUnits: </span><span style="color:#9ECBFF;">&#39;fraction&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//锚点X的单位，默认为百分比，也可以使用px</span></span>
<span class="line"><span style="color:#E1E4E8;">      anchorYUnits: </span><span style="color:#9ECBFF;">&#39;pixels&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//锚点Y的单位，默认为百分比，也可以使用px</span></span>
<span class="line"><span style="color:#E1E4E8;">      offsetOrigin: </span><span style="color:#9ECBFF;">&#39;top-right&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//原点偏移bottom-left, bottom-right, top-left, top-right,默认 top-left</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// offset:[0,10],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//图标缩放比例</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// scale:0.5,//可以设置该比例实现，图标跟随地图层级缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//透明度</span></span>
<span class="line"><span style="color:#E1E4E8;">      opacity: </span><span style="color:#79B8FF;">0.75</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//如果想隐藏某个图标，可以单独设置该值，透明度为0时，即可隐藏，此为隐藏元素的方法之一。</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 绘制扇形核心方法</span></span>
<span class="line"><span style="color:#6A737D;"> * APIMethod:OpenLayers绘制扇形的接口扩展</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">origin</span><span style="color:#6A737D;"> 圆心</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">radius</span><span style="color:#6A737D;"> 半径</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">sides</span><span style="color:#6A737D;"> 边数</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">r</span><span style="color:#6A737D;"> 弧度</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">angel</span><span style="color:#6A737D;"> 旋转角度（扇形右边半径与x正向轴的角度）</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{OpenLayers.Geometry.Polygon}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRegularPolygonCurve</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">origin</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">radius</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">sides</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">angel</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> rotation </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">360</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> angle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> ((</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> sides) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (rotation) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    angle </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> (rotation </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">180</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> rotatedAngle, x, y;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> points </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> sides; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> an </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> ((</span><span style="color:#79B8FF;">360</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> rotation) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">360</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    rotatedAngle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> angle </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (an </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> sides);</span></span>
<span class="line"><span style="color:#E1E4E8;">    x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> origin[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (radius </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">cos</span><span style="color:#E1E4E8;">(rotatedAngle));</span></span>
<span class="line"><span style="color:#E1E4E8;">    y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> origin[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (radius </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">sin</span><span style="color:#E1E4E8;">(rotatedAngle));</span></span>
<span class="line"><span style="color:#E1E4E8;">    points.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">([x, y]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (rotation </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    points.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(origin);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> ring </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LinearRing</span><span style="color:#E1E4E8;">(points);</span></span>
<span class="line"><span style="color:#E1E4E8;">  ring.</span><span style="color:#B392F0;">rotate</span><span style="color:#E1E4E8;">(angel </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">57.3</span><span style="color:#E1E4E8;">, origin);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ring.</span><span style="color:#B392F0;">getCoordinates</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Polygon</span><span style="color:#E1E4E8;">([list]);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图核心方法供出</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initOlMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    target,</span></span>
<span class="line"><span style="color:#E1E4E8;">    layers: mapInitConfig.layers,</span></span>
<span class="line"><span style="color:#E1E4E8;">    view: mapInitConfig.view,</span></span>
<span class="line"><span style="color:#E1E4E8;">    interactions: </span><span style="color:#B392F0;">defaults</span><span style="color:#E1E4E8;">({ mouseWheelZoom: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })  </span><span style="color:#6A737D;">// 禁止缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取可视区域的左上角和右下角坐标</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentViewPosition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">extent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getView</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">calculateExtent</span><span style="color:#E1E4E8;">(olMap.</span><span style="color:#B392F0;">getSize</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取投影坐标系</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">topLeftCoord</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getTopLeft</span><span style="color:#E1E4E8;">(extent);  </span><span style="color:#6A737D;">// 左上角</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">bottomRightCoord</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getBottomRight</span><span style="color:#E1E4E8;">(extent);  </span><span style="color:#6A737D;">// 右下角</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(topLeftCoord, bottomRightCoord)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 将投影坐标转换为地理坐标</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">topLeft</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(topLeftCoord, </span><span style="color:#9ECBFF;">&#39;EPSG:3857&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;EPSG:4326&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">bottomRight</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(bottomRightCoord, </span><span style="color:#9ECBFF;">&#39;EPSG:3857&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;EPSG:4326&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(topLeft, bottomRight)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    topLeft,</span></span>
<span class="line"><span style="color:#E1E4E8;">    bottomRight,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
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
<span class="line"><span style="color:#6A737D;">// 设置鼠标右键属性</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setContextmenu</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">setMenuConfig</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">commonDynamicMenu</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> menuMethodBtn  </span><span style="color:#6A737D;">// 公共动态选项,每个页面有需要才显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 添加右键菜单监听</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">getViewport</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;contextmenu&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(transformToLonlat(olMap.getEventCoordinate(e)))  // 经纬度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 阻止默认的右键菜单弹出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 屏幕坐标</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pixelPoint</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getEventCoordinate</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pixel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getPixelFromCoordinate</span><span style="color:#E1E4E8;">(pixelPoint)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">feature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">forEachFeatureAtPixel</span><span style="color:#E1E4E8;">(pixel, </span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> feature</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* if (feature &amp;&amp; !menuMethods.includes(commonDynamicMenuMethod1)) {</span></span>
<span class="line"><span style="color:#6A737D;">      menuMethods.push(commonDynamicMenuMethod1)</span></span>
<span class="line"><span style="color:#6A737D;">    } */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// commonDynamicMenuMethod1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 公共动态选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 判断是否显示当前要素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;">(feature, commonDynamicMenu.commonDynamicMenuMethod1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 判断是否需要显示停止绘制</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取绘制的图形</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">drawInteraction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getInteractions</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getArray</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      (</span><span style="color:#FFAB70;">interaction</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> interaction </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Draw</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCommonMenuMethod</span><span style="color:#E1E4E8;">(drawInteraction, commonDynamicMenu.commonDynamicMenuMethod2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 子页动态选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (setMenuConfig) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">setMenuConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">currentPageType</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(&#39;当前页面&#39;, currentPageType)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">setMentBtnExtendByPage</span><span style="color:#E1E4E8;">(currentPageType)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
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
<span class="line"><span style="color:#E1E4E8;">      menuMethods.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
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
<span class="line"><span style="color:#6A737D;">// 取消绘制(点线面)</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cancelDrawInteraction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;取消绘制(点线面)&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取绘制的图形</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">drawInteraction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getInteractions</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getArray</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">interaction</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> interaction </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Draw</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(drawInteraction)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">removeInteraction</span><span style="color:#E1E4E8;">(drawInteraction); </span><span style="color:#6A737D;">// 从地图中移除交互</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// vectorLayer.getSource().clear(); // 清除绘制的几何形状</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 投影坐标转换</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transformToLonlat</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">coordinate</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(coordinate, </span><span style="color:#9ECBFF;">&quot;EPSG:3857&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;EPSG:4326&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 屏幕坐标转换</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transformToPixelPoint</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">lon</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lat</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">([lon, lat])</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取经纬度</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getHdms</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toStringHDMS</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">toLonLat</span><span style="color:#E1E4E8;">(pixelPoint)); </span><span style="color:#6A737D;">// 转换为经纬度显示</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取多边形中心点</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getPolygonCenter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">geometry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> feature.</span><span style="color:#B392F0;">getGeometry</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (geometry.</span><span style="color:#B392F0;">getType</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Polygon&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">polygon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> geometry.</span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    polygon.</span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;EPSG:3857&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;EPSG:4326&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 如果多边形在Web墨卡托坐标系中，需要转换到WGS84</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">extent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> polygon.</span><span style="color:#B392F0;">getExtent</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCenter</span><span style="color:#E1E4E8;">(extent);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> center;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置标注点</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addPoint</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pointDataList</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isIcon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// mapUtils.setPointTest(olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建点的数据源</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vectorSource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    features: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建点图层</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vectorLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: vectorSource,</span></span>
<span class="line"><span style="color:#E1E4E8;">    zIndex: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    style: </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isIcon </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> pointCircleStyle </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pointIconleStyle</span><span style="color:#E1E4E8;">(src)</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(vectorLayer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  pointDataList.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">point</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Point</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">(item.lonlat));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">feature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      geometry: point,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;Marker&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      pointData: item.pointData</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    vectorSource.</span><span style="color:#B392F0;">addFeature</span><span style="color:#E1E4E8;">(feature);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加线</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addLine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">position</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lineConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#FFAB70;">style</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建线要素并添加到地图上</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">lineFeature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// geometry: new LineString([[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LineString</span><span style="color:#E1E4E8;">(position),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">lineConfig</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">style) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    style </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setFeaturesStyle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;rgba(255, 255, 255, 0.2)&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;rgba(0, 0, 0, 0.5)&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  lineFeature.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(style);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// lineFeature.setStyle(styleFunction);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vectorSource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    features: [lineFeature],</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vectorLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: vectorSource,</span></span>
<span class="line"><span style="color:#E1E4E8;">    zIndex: </span><span style="color:#79B8FF;">9</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(vectorLayer);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据feature获取layer</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#FFAB70;">map</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> layers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> map.</span><span style="color:#B392F0;">getLayers</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> layers) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> source </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> layers[i].</span><span style="color:#B392F0;">getSource</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (source </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> features </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> source.</span><span style="color:#B392F0;">getFeatures</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (features.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> features) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (features[j] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> feature) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> layers[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置Features样式</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setFeaturesStyle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">fillColor</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">strokeColor</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isImg</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">radius</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">isImg </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    fill: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fill</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      color: fillColor</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    stroke: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Stroke</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      color: strokeColor,</span></span>
<span class="line"><span style="color:#E1E4E8;">      width</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    image: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CircleStyle</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      radius,</span></span>
<span class="line"><span style="color:#E1E4E8;">      fill: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fill</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: fillColor,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      stroke: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Stroke</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: strokeColor,</span></span>
<span class="line"><span style="color:#E1E4E8;">        width,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 给某个feature置顶</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">featureToMaxTop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;给某个feature置顶&#39;, olMap, feature)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentStyle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (feature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Marker&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentStyle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setFeaturesStyle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#409eff&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#f00&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Curve&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentStyle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setFeaturesStyle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#409eff&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#f00&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  feature.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(currentStyle)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  feature.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;temp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 顶层图层</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> topLayer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// style: [selectPointStyle],</span></span>
<span class="line"><span style="color:#E1E4E8;">    zIndex: </span><span style="color:#79B8FF;">999</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// zIndex全地图最大</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#FFAB70;">layerItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// olMap.removeLayer(layerItem)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> layerItem.</span><span style="color:#B392F0;">getSource</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFeatures</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (currentFeature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;temp&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      olMap.</span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(layerItem)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  topLayer.</span><span style="color:#B392F0;">setOpacity</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  topLayer.</span><span style="color:#B392F0;">getSource</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">addFeature</span><span style="color:#E1E4E8;">(feature);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(topLayer)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建文字图层</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addTextOverlay</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">position</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">textOverlayConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}, </span><span style="color:#FFAB70;">isRemove</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;创建文字图层Overlay&#39;, olMap, gridData)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建文本样式</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">textStyle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Text</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      text,</span></span>
<span class="line"><span style="color:#E1E4E8;">      fill: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fill</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#9ECBFF;">&#39;#333333&#39;</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// stroke: new Stroke({ color: &#39;#fff&#39;, width: 2 }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      font: </span><span style="color:#9ECBFF;">&#39;18px pingfang&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textAlign: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 文本对齐</span></span>
<span class="line"><span style="color:#E1E4E8;">      textBaseline: </span><span style="color:#9ECBFF;">&#39;bottom&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 文本基线</span></span>
<span class="line"><span style="color:#E1E4E8;">      padding: [</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 文本周围的填充</span></span>
<span class="line"><span style="color:#E1E4E8;">      overflow: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 允许文本溢出</span></span>
<span class="line"><span style="color:#E1E4E8;">      rotateWithView: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 不随地图旋转</span></span>
<span class="line"><span style="color:#E1E4E8;">      rotation: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 文本旋转角度</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (isRemove) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 清除某类图层</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#FFAB70;">layerItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// olMap.removeLayer(layerItem)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> layerItem.</span><span style="color:#B392F0;">getSource</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFeatures</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">isRemove</span><span style="color:#E1E4E8;">(layerItem, currentFeature)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建文本特征</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">feature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Point</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">(position)),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">textOverlayConfig</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置特征的样式</span></span>
<span class="line"><span style="color:#E1E4E8;">  feature.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(textStyle);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建文本图层</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vectorLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      features: [feature],</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    zIndex: </span><span style="color:#79B8FF;">9</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 将文本图层添加到地图</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(vectorLayer);</span></span>
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
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">popupCommonConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">popupData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">overlayConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> container </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;popup&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> closer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;popup-closer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> content </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;popup-content&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  container.style.display </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;block&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> overlayContainer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.ol-overlay-container&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (overlayContainer) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    overlayContainer.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> overlay </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Overlay</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    element: container, </span><span style="color:#6A737D;">//绑定 Overlay 对象和 DOM 对象的</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">overlayConfig</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addOverlay</span><span style="color:#E1E4E8;">(overlay);</span></span>
<span class="line"><span style="color:#E1E4E8;">  closer.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    overlay.</span><span style="color:#B392F0;">setPosition</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    closer.</span><span style="color:#B392F0;">blur</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    overlay </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  content.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> popupData;</span></span>
<span class="line"><span style="color:#E1E4E8;">  overlay.</span><span style="color:#B392F0;">setPosition</span><span style="color:#E1E4E8;">(pixelPoint); </span><span style="color:#6A737D;">//把 overlay 显示到指定的 x,y坐标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 使用addEventListener会无限叠加事件,且不好使用removeEventListener移除(匿名函数)</span></span>
<span class="line"><span style="color:#E1E4E8;">  overlay.</span><span style="color:#B392F0;">getElement</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 添加扇形</span></span>
<span class="line"><span style="color:#6A737D;"> * 绘制扇形核心方法</span></span>
<span class="line"><span style="color:#6A737D;"> * APIMethod:OpenLayers绘制扇形的接口扩展</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">origin</span><span style="color:#6A737D;"> 圆心</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">radius</span><span style="color:#6A737D;"> 半径</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">sides</span><span style="color:#6A737D;"> 边数</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">r</span><span style="color:#6A737D;"> 弧度</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">angel</span><span style="color:#6A737D;"> 旋转角度（扇形右边半径与x正向轴的角度）</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{OpenLayers.Geometry.Polygon}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 根据频段展示不同颜色 有边缘  </span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addCurve</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">curveDataList</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isResetStyle</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> featureList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []  </span><span style="color:#6A737D;">// 扇区feature列表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 根据业务数据修改feature数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  curveDataList.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 频率</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(item.curveData.workFrequency)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 扇区样式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> curveStyle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setFeaturesStyle</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;rgba(32, 222, 230, 0.4)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;rgba(255, 205, 67, 0.3)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 扇区半径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> curveRadius </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (isResetStyle) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { myCurveStyle, myCurveRadius } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isResetStyle</span><span style="color:#E1E4E8;">(item)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      curveStyle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> myCurveStyle</span></span>
<span class="line"><span style="color:#E1E4E8;">      curveRadius </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> myCurveRadius</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> origi_point </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">(item.lonlat);  </span><span style="color:#6A737D;">// 绘制扇形的顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// let circle = createRegularPolygonCurve(origi_point, 150, 100, 45, 90) // 调用绘制扇形的方法得到扇形</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> circle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRegularPolygonCurve</span><span style="color:#E1E4E8;">(origi_point, curveRadius, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">, item.curveData.antDirectionAngle) </span><span style="color:#6A737D;">// 调用绘制扇形的方法得到扇形</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> feature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">(circle);  </span><span style="color:#6A737D;">// 把扇形加入 feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    feature.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(curveStyle)</span></span>
<span class="line"><span style="color:#E1E4E8;">    feature.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Curve&#39;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 这是给这个扇形添加额外的参数 ， 如果是设置id 用 setId方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这是给这个扇形添加额外的参数，这里的id和 setId的id没关系</span></span>
<span class="line"><span style="color:#E1E4E8;">    feature.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;curveData&#39;</span><span style="color:#E1E4E8;">, item.curveData)</span></span>
<span class="line"><span style="color:#E1E4E8;">    featureList.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(feature)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> vectorSource </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// 创建一个数据源</span></span>
<span class="line"><span style="color:#E1E4E8;">  vectorSource.</span><span style="color:#B392F0;">addFeatures</span><span style="color:#E1E4E8;">(featureList);   </span><span style="color:#6A737D;">// 把两个扇形加进数据源</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> vectorLayer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({     </span><span style="color:#6A737D;">// 创建一个图层，把数据源加进图层</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: vectorSource,</span></span>
<span class="line"><span style="color:#E1E4E8;">    zIndex: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(vectorLayer);   </span><span style="color:#6A737D;">// 把图层加进地图</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 设置气泡窗</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">olMap</span><span style="color:#6A737D;"> 地图对象</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">pixelPoint</span><span style="color:#6A737D;"> 屏幕坐标</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">popupData</span><span style="color:#6A737D;"> 气泡窗数据</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">next</span><span style="color:#6A737D;"> 事件处理方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setPopup</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">popupData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// const pixelPoint = e.coordinate  // 屏幕坐标</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">popupCommonConfig</span><span style="color:#E1E4E8;">(olMap, pixelPoint, popupData, next, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    autoPan: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* autoPanAnimation: {</span></span>
<span class="line"><span style="color:#6A737D;">        duration: 250, // 自动平移效果的动画时间 9毫秒）</span></span>
<span class="line"><span style="color:#6A737D;">    }, */</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自动弹出气泡窗</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setAutoPopup</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">itemData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 点击尺 （这里是尺(米)，并不是经纬度）;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> hdms </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getHdms</span><span style="color:#E1E4E8;">(pixelPoint); </span><span style="color:#6A737D;">// 转换为经纬度显示</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// let hdms = toStringHDMS(toLonLat(pixelPoint)); // 转换为经纬度显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">popupObj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;通用信息展示弹窗&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    hdms,</span></span>
<span class="line"><span style="color:#E1E4E8;">    coordinate: [itemData.longitude, itemData.latitude],</span></span>
<span class="line"><span style="color:#E1E4E8;">    popupData: itemData  </span><span style="color:#6A737D;">// 气泡窗业务数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(popupObj)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除所有图层</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeAllLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cancelDrawInteraction(olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#FFAB70;">layerItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    olMap.</span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(layerItem)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据feature条件删除图层</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeLayerByFeature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">condition</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#FFAB70;">layerItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> layerItem.</span><span style="color:#B392F0;">getSource</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFeatures</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">condition</span><span style="color:#E1E4E8;">(currentFeature[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">])) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      olMap.</span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(layerItem)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据类型移除图层</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeLayerByType</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">removeLayerByFeature</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#FFAB70;">currentFeature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> currentFeature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> type</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除所有默认图层</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeAllDefaultLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">removeLayerByFeature</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#FFAB70;">currentFeature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> currentFeature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Marker&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> currentFeature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Curve&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 飞到指定坐标</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flyToCoordinate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lonlat</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">getView</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">animate</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    center: </span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">(lonlat),</span></span>
<span class="line"><span style="color:#E1E4E8;">    duration: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 飞行时间，单位毫秒</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取所有feature</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAllFeature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">getLayers</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> source </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (item) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      source </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item.</span><span style="color:#B392F0;">getSource</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (source </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      source.</span><span style="color:#B392F0;">forEachFeature</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(feature.get(&#39;type&#39;))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(feature)</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 加载kml</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadKML</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">text</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;加载kml&#39;, olMap, text)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">format</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">KML</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    extractStyles: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//至关重要</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">features</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> format.</span><span style="color:#B392F0;">readFeatures</span><span style="color:#E1E4E8;">(text);</span></span>
<span class="line"><span style="color:#E1E4E8;">  features.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从EPSG:4326转换到EPSG:3857</span></span>
<span class="line"><span style="color:#E1E4E8;">    item.</span><span style="color:#B392F0;">getGeometry</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;EPSG:4326&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;EPSG:3857&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vectorSource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    features: features,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">getView</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">fit</span><span style="color:#E1E4E8;">(vectorSource.</span><span style="color:#B392F0;">getExtent</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">getLayers</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      source: vectorSource,</span></span>
<span class="line"><span style="color:#E1E4E8;">      style: </span><span style="color:#B392F0;">setFeaturesStyle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;blue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      zIndex: </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建多边形(选区)</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">drawPolygon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;创建多边形(选区)&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addInteraction</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Draw</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;Polygon&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取绘制完成的多边形</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">getInteractions</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getArray</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">interaction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (interaction </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Draw</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      interaction.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;drawend&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">feature</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">geometry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> feature.</span><span style="color:#B392F0;">getGeometry</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">coords</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> geometry.</span><span style="color:#B392F0;">getCoordinates</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">lonlat</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> geometry.</span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;EPSG:3857&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;EPSG:4326&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getCoordinates</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(lonlat, coords)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (geometry </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Polygon</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// console.log(&quot;所选点位坐标&quot;, geometry.getCoordinates());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">createPolygon</span><span style="color:#E1E4E8;">(olMap, { coords, lonlat })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          olMap.</span><span style="color:#B392F0;">removeInteraction</span><span style="color:#E1E4E8;">(interaction); </span><span style="color:#6A737D;">// 从地图中移除交互</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 绘制多边形</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">olMap</span><span style="color:#6A737D;"> </span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">coords</span><span style="color:#6A737D;"> 多边形的坐标数组</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPolygon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">coords</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">lonlat</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">polygonData</span><span style="color:#E1E4E8;"> }, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">polygonStyle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setFeaturesStyle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;rgba(0, 255, 0, 0.4)&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;rgba(0, 255, 0, 1)&quot;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(olMap, coords, lonlat)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建多边形</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> polygon </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Polygon</span><span style="color:#E1E4E8;">([coords]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;Polygon&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    polygonData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      coords,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lonlat,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">polygonData</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置多边形样式</span></span>
<span class="line"><span style="color:#E1E4E8;">  polygon.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(polygonStyle)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建矢量图层并添加多边形</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> vectorLayer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      features: [polygon]</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(vectorLayer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(polygon)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 取消绘制多边形(取消选区)</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cancelPolygon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;取消绘制多边形(取消选区)&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">cancelDrawInteraction</span><span style="color:#E1E4E8;">(olMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 绘制圆</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addCircle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">circleItem</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">isFlicker</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> features </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fillStyle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fill</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#9ECBFF;">&#39;rgba(32, 157, 230, 0.2)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> feature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;Circle&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    circleData: circleItem,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 圆心 - 半径</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Circle</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">([circleItem.longitude, circleItem.latitude]), </span><span style="color:#79B8FF;">550</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  feature.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      fill: fillStyle,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">  features.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(feature)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> source </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  source.</span><span style="color:#B392F0;">addFeatures</span><span style="color:#E1E4E8;">(features)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> layer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// opacity: 0.2,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  layer.</span><span style="color:#B392F0;">setSource</span><span style="color:#E1E4E8;">(source)</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(layer)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 需要闪烁时调用</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (isFlicker) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> radius </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    layer.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;postrender&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">evt</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (radius </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">) radius </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> opacity </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> radius) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">//不透明度</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> pointStyle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        radius: radius,</span></span>
<span class="line"><span style="color:#E1E4E8;">        stroke: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Stroke</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&quot;rgba(255,0,0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> opacity </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> radius </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//设置宽度</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 获取矢量要素上下文</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> vectorContext </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getVectorContext</span><span style="color:#E1E4E8;">(evt);</span></span>
<span class="line"><span style="color:#E1E4E8;">      vectorContext.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(pointStyle);</span></span>
<span class="line"><span style="color:#E1E4E8;">      vectorContext.</span><span style="color:#B392F0;">drawGeometry</span><span style="color:#E1E4E8;">(feature.</span><span style="color:#B392F0;">getGeometry</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      radius </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> radius </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//调整闪烁速度</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//请求地图渲染（在下一个动画帧处）</span></span>
<span class="line"><span style="color:#E1E4E8;">      olMap.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建闪烁点</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addFlickerDom</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;创建闪烁点&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* var point_div = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">  point_div.className = &quot;css_animation&quot;;</span></span>
<span class="line"><span style="color:#6A737D;">  point_overlay = new Overlay({</span></span>
<span class="line"><span style="color:#6A737D;">    element: point_div,</span></span>
<span class="line"><span style="color:#6A737D;">    positioning: &#39;center-center&#39;</span></span>
<span class="line"><span style="color:#6A737D;">  });</span></span>
<span class="line"><span style="color:#6A737D;">  olMap.addOverlay(point_overlay); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 121.63, 29.88</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(transformToPixelPoint(121.63, 29.88))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// point_overlay.setPosition(coordinate);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测距</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">testDistance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;测距&quot;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> measure </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Draw</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;LineString&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* style: new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      fill: new Fill({ color: &#39;rgba(255, 255, 255, 0.2)&#39; }),</span></span>
<span class="line"><span style="color:#6A737D;">      stroke: new Stroke({ color: &#39;rgba(0, 0, 0, 0.5)&#39;, width: 2 })</span></span>
<span class="line"><span style="color:#6A737D;">    }) */</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addInteraction</span><span style="color:#E1E4E8;">(measure);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  measure.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;drawend&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">feature</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> event</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> feature.</span><span style="color:#B392F0;">getGeometry</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getLength</span><span style="color:#E1E4E8;">(line);</span></span>
<span class="line"><span style="color:#E1E4E8;">    length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> length.</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">coords</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> line.</span><span style="color:#B392F0;">getCoordinates</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">lonlat</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> line.</span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;EPSG:3857&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;EPSG:4326&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getCoordinates</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;Line length: &#39; + length + &#39; meters&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果需要外部提供数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(length)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建线要素并添加到地图上</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">addLine</span><span style="color:#E1E4E8;">(olMap, coords, { tempType: </span><span style="color:#9ECBFF;">&#39;testDistanceTemp&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建文本要素以显示距离</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">addTextOverlay</span><span style="color:#E1E4E8;">(olMap, length </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;米&#39;</span><span style="color:#E1E4E8;">, lonlat[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">], { tempType: </span><span style="color:#9ECBFF;">&#39;testDistanceTemp&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 取消测距</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cancelTestDistance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;取消测距&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 清除某类图层</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(olMap, </span><span style="color:#FFAB70;">layerItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// olMap.removeLayer(layerItem)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> layerItem.</span><span style="color:#B392F0;">getSource</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFeatures</span><span style="color:#E1E4E8;">()[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (currentFeature.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tempType&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;testDistanceTemp&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      olMap.</span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(layerItem)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">cancelDrawInteraction</span><span style="color:#E1E4E8;">(olMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加带箭头的线</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addArrowLine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">position</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../src/components/OpenlayerBaseMap/icon/arrow.svg&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&#39;添加带箭头的线&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">styleFunction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">geometry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> feature.</span><span style="color:#B392F0;">getGeometry</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">styles</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// linestring</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        stroke: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Stroke</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&#39;rgb(164 164 162 / 88%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    geometry.</span><span style="color:#B392F0;">forEachSegment</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">start</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">end</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dx</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> end[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> start[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> end[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> start[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rotation</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">atan2</span><span style="color:#E1E4E8;">(dy, dx);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">coord</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [start[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dx </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, start[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> dy </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// arrows</span></span>
<span class="line"><span style="color:#E1E4E8;">      styles.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          geometry: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Point</span><span style="color:#E1E4E8;">(coord),</span></span>
<span class="line"><span style="color:#E1E4E8;">          image: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Icon</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// src: &#39;https://bpic.51yuansu.com/pic2/cover/00/48/42/5815eb37ed3d8_610.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// src: &#39;http://localhost:81/src/assets/icons/svg/checkbox.svg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// src: &#39;./arrow.svg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// src: &#39;../src/components/OpenlayerBaseMap/icon/arrow.svg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            src,</span></span>
<span class="line"><span style="color:#E1E4E8;">            anchor: [</span><span style="color:#79B8FF;">0.75</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            rotateWithView: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            rotation: </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rotation,</span></span>
<span class="line"><span style="color:#E1E4E8;">            scale: </span><span style="color:#79B8FF;">0.03</span></span>
<span class="line"><span style="color:#E1E4E8;">          }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> styles;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">addLine</span><span style="color:#E1E4E8;">(olMap, position, {}, styleFunction)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// // 创建线要素并添加到地图上</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// const lineFeature = new Feature({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   geometry: new LineString(position),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// /* lineFeature.setStyle(new Style({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   stroke: new Stroke({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     width: 3,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     color: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   fill: new Fill({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//     color: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// })); */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// lineFeature.setStyle(styleFunction);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// const vectorSource = new VectorSource({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   features: [lineFeature],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// const vectorLayer = new VectorLayer({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   source: vectorSource,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// olMap.addLayer(vectorLayer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 测试 </span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 地图功能测试</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">olMapTestCommon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">feature</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pixelPoint</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;地图功能测试&#39;</span><span style="color:#E1E4E8;">, olMap, feature, pixelPoint)</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;经纬度&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">transformToLonlat</span><span style="color:#E1E4E8;">(pixelPoint))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// testDistance(olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* let measure = new Draw({</span></span>
<span class="line"><span style="color:#6A737D;">    source: new VectorSource(),</span></span>
<span class="line"><span style="color:#6A737D;">    type: &#39;LineString&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    style: new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      fill: new Fill({ color: &#39;rgba(255, 255, 255, 0.2)&#39; }),</span></span>
<span class="line"><span style="color:#6A737D;">      stroke: new Stroke({ color: &#39;rgba(0, 0, 0, 0.5)&#39;, width: 2 })</span></span>
<span class="line"><span style="color:#6A737D;">    })</span></span>
<span class="line"><span style="color:#6A737D;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  olMap.addInteraction(measure);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  measure.on(&#39;drawend&#39;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">    const { feature } = event</span></span>
<span class="line"><span style="color:#6A737D;">    const line = feature.getGeometry();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    let length = getLength(line);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    const coords = line.getCoordinates()</span></span>
<span class="line"><span style="color:#6A737D;">    const lonlat = line.transform(&#39;EPSG:3857&#39;, &#39;EPSG:4326&#39;).getCoordinates()</span></span>
<span class="line"><span style="color:#6A737D;">    console.log(lonlat)</span></span>
<span class="line"><span style="color:#6A737D;">    console.log(&#39;Line length: &#39; + length + &#39; meters&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在测距工具容器中显示长度</span></span>
<span class="line"><span style="color:#6A737D;">    // document.getElementById(&#39;measure&#39;).innerHTML += &#39;&lt;p&gt;&#39; + length.toFixed(2) + &#39; meters&lt;/p&gt;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 清空已绘制的要素</span></span>
<span class="line"><span style="color:#6A737D;">    // source.clear();</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建线要素并添加到地图上</span></span>
<span class="line"><span style="color:#6A737D;">    const lineFeature = new Feature({</span></span>
<span class="line"><span style="color:#6A737D;">      // geometry: new LineString([[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]),</span></span>
<span class="line"><span style="color:#6A737D;">      geometry: new LineString(coords),</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    lineFeature.setStyle(new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      stroke: new Stroke({</span></span>
<span class="line"><span style="color:#6A737D;">        width: 3,</span></span>
<span class="line"><span style="color:#6A737D;">        color: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">      fill: new Fill({</span></span>
<span class="line"><span style="color:#6A737D;">        color: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">    }));</span></span>
<span class="line"><span style="color:#6A737D;">    // lineFeature.setStyle(styleFunction);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    const vectorSource = new VectorSource({</span></span>
<span class="line"><span style="color:#6A737D;">      features: [lineFeature],</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    const vectorLayer1 = new VectorLayer({</span></span>
<span class="line"><span style="color:#6A737D;">      source: vectorSource,</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    olMap.addLayer(vectorLayer1);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建文本样式</span></span>
<span class="line"><span style="color:#6A737D;">    const textStyle = new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      text: new Text({</span></span>
<span class="line"><span style="color:#6A737D;">        text: length.toFixed(2) + &#39;米&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        fill: new Fill({ color: &#39;#333333&#39; }),</span></span>
<span class="line"><span style="color:#6A737D;">        // stroke: new Stroke({ color: &#39;#fff&#39;, width: 2 }),</span></span>
<span class="line"><span style="color:#6A737D;">        font: &#39;18px pingfang&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        textAlign: &#39;center&#39;, // 文本对齐</span></span>
<span class="line"><span style="color:#6A737D;">        textBaseline: &#39;bottom&#39;, // 文本基线</span></span>
<span class="line"><span style="color:#6A737D;">        padding: [5, 10, 5, 10], // 文本周围的填充</span></span>
<span class="line"><span style="color:#6A737D;">        overflow: true, // 允许文本溢出</span></span>
<span class="line"><span style="color:#6A737D;">        rotateWithView: false, // 不随地图旋转</span></span>
<span class="line"><span style="color:#6A737D;">        rotation: 0, // 文本旋转角度</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // // 清除某类图层</span></span>
<span class="line"><span style="color:#6A737D;">    // removeLayer(olMap, layerItem =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">    //   // olMap.removeLayer(layerItem)</span></span>
<span class="line"><span style="color:#6A737D;">    //   let currentFeature = layerItem.getSource().getFeatures()[0]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    //   if (currentFeature.get(&#39;tempType&#39;) === &#39;ceju&#39;) {</span></span>
<span class="line"><span style="color:#6A737D;">    //     olMap.removeLayer(layerItem)</span></span>
<span class="line"><span style="color:#6A737D;">    //   }</span></span>
<span class="line"><span style="color:#6A737D;">    // })</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建文本特征</span></span>
<span class="line"><span style="color:#6A737D;">    const featurettt = new Feature({</span></span>
<span class="line"><span style="color:#6A737D;">      // geometry: new Point(fromLonLat(gridData.centerCoordinates)),</span></span>
<span class="line"><span style="color:#6A737D;">      geometry: new Point(fromLonLat(lonlat[0])),</span></span>
<span class="line"><span style="color:#6A737D;">      tempType: &#39;ceju&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 设置特征的样式</span></span>
<span class="line"><span style="color:#6A737D;">    featurettt.setStyle(textStyle);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建文本图层</span></span>
<span class="line"><span style="color:#6A737D;">    const vectorLayer = new VectorLayer({</span></span>
<span class="line"><span style="color:#6A737D;">      source: new VectorSource({</span></span>
<span class="line"><span style="color:#6A737D;">        features: [featurettt],</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 将文本图层添加到地图</span></span>
<span class="line"><span style="color:#6A737D;">    olMap.addLayer(vectorLayer);</span></span>
<span class="line"><span style="color:#6A737D;">  }); */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* // 创建测距工具</span></span>
<span class="line"><span style="color:#6A737D;">  var measure = new Draw({</span></span>
<span class="line"><span style="color:#6A737D;">    source: new VectorLayer(),</span></span>
<span class="line"><span style="color:#6A737D;">    type: &#39;LineString&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    style: new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      fill: new Fill({ color: &#39;rgba(255, 255, 255, 0.2)&#39; }),</span></span>
<span class="line"><span style="color:#6A737D;">      stroke: new Stroke({ color: &#39;rgba(0, 0, 0, 0.5)&#39;, width: 2 })</span></span>
<span class="line"><span style="color:#6A737D;">    })</span></span>
<span class="line"><span style="color:#6A737D;">  });</span></span>
<span class="line"><span style="color:#6A737D;">  // 添加测距工具到地图</span></span>
<span class="line"><span style="color:#6A737D;">  olMap.addInteraction(measure);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  measure.on(&#39;drawend&#39;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">    const line = event.feature.getGeometry();</span></span>
<span class="line"><span style="color:#6A737D;">    const length = getLength(line);</span></span>
<span class="line"><span style="color:#6A737D;">    console.log(&#39;Line length: &#39; + length + &#39; meters&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在测距工具容器中显示长度</span></span>
<span class="line"><span style="color:#6A737D;">    // document.getElementById(&#39;measure&#39;).innerHTML += &#39;&lt;p&gt;&#39; + length.toFixed(2) + &#39; meters&lt;/p&gt;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 清空已绘制的要素</span></span>
<span class="line"><span style="color:#6A737D;">    // source.clear();</span></span>
<span class="line"><span style="color:#6A737D;">  }); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 监听地图单击事件，用于删除测距工具绘制的要素</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* olMap.on(&#39;click&#39;, function (event) {</span></span>
<span class="line"><span style="color:#6A737D;">    var feature = olMap.forEachFeatureAtPixel(event.pixel, function (feature, layer) {</span></span>
<span class="line"><span style="color:#6A737D;">      return feature;</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    if (feature) {</span></span>
<span class="line"><span style="color:#6A737D;">      // source.removeFeature(feature);</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">  }); */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* // 监听绘制结束事件</span></span>
<span class="line"><span style="color:#6A737D;">  measure.on(&#39;drawend&#39;, function (event) {</span></span>
<span class="line"><span style="color:#6A737D;">    var geometry = event.feature.getGeometry();</span></span>
<span class="line"><span style="color:#6A737D;">    var coordinates = geometry.getCoordinates();</span></span>
<span class="line"><span style="color:#6A737D;">    var length = getLength(coordinates);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在测距工具容器中显示长度</span></span>
<span class="line"><span style="color:#6A737D;">    document.getElementById(&#39;measure&#39;).innerHTML += &#39;&lt;p&gt;&#39; + length.toFixed(2) + &#39; meters&lt;/p&gt;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 清空已绘制的要素</span></span>
<span class="line"><span style="color:#6A737D;">    source.clear();</span></span>
<span class="line"><span style="color:#6A737D;">  }); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* const vectorLayer = new VectorLayer({</span></span>
<span class="line"><span style="color:#6A737D;">    source: new VectorSource(),</span></span>
<span class="line"><span style="color:#6A737D;">    style: new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      fill: new Fill({</span></span>
<span class="line"><span style="color:#6A737D;">        color: &#39;rgba(255, 255, 255, 0.2)&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">      stroke: new Stroke({</span></span>
<span class="line"><span style="color:#6A737D;">        color: &#39;#ffcc33&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        width: 2,</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">      image: new CircleStyle({</span></span>
<span class="line"><span style="color:#6A737D;">        radius: 7,</span></span>
<span class="line"><span style="color:#6A737D;">        fill: new Fill({</span></span>
<span class="line"><span style="color:#6A737D;">          color: &#39;#ffcc33&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        }),</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">    }),</span></span>
<span class="line"><span style="color:#6A737D;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  const draw = new Draw({</span></span>
<span class="line"><span style="color:#6A737D;">    source: vectorLayer.getSource(),</span></span>
<span class="line"><span style="color:#6A737D;">    type: &#39;LineString&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  olMap.addInteraction(draw);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  draw.on(&#39;drawend&#39;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">    const line = event.feature.getGeometry();</span></span>
<span class="line"><span style="color:#6A737D;">    const length = getLength(line);</span></span>
<span class="line"><span style="color:#6A737D;">    console.log(&#39;Line length: &#39; + length + &#39; meters&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">  }); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* let position = [[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]</span></span>
<span class="line"><span style="color:#6A737D;">  addArrowLine(olMap, position) */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打点测试</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setPointTest</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// fromLonLat([121.63, 29.88])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">features</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(e.coordinate); // 获取坐标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">iconFeature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Point</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">121.63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">29.88</span><span style="color:#E1E4E8;">])),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// name: count++,</span></span>
<span class="line"><span style="color:#E1E4E8;">    location: </span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">121.63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">29.88</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    image: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CircleStyle</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      radius: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      fill: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fill</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#f49d41&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      stroke: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Stroke</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#836365&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  iconFeature.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(style);</span></span>
<span class="line"><span style="color:#E1E4E8;">  features.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(iconFeature);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vectorSource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    features</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vectorLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: vectorSource,</span></span>
<span class="line"><span style="color:#E1E4E8;">    opacity: </span><span style="color:#79B8FF;">0.8</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(vectorLayer);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除标注测试</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removePointTest</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">layers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getLayers</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  layers.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (item </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">) olMap.</span><span style="color:#B392F0;">removeLayer</span><span style="color:#E1E4E8;">(item);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 点击打点测试</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clickSetPointTest</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">features</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(e.coordinate); // 获取坐标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">iconFeature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Point</span><span style="color:#E1E4E8;">(e.coordinate),</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    location: e.coordinate</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    image: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CircleStyle</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      radius: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      fill: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fill</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#f49d41&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      stroke: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Stroke</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#836365&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  iconFeature.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(style);</span></span>
<span class="line"><span style="color:#E1E4E8;">  features.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(iconFeature);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vectorSource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    features</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vectorLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: vectorSource,</span></span>
<span class="line"><span style="color:#E1E4E8;">    opacity: </span><span style="color:#79B8FF;">0.8</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(vectorLayer);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 绘制扇形测试</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addCurveTest</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> origi_point </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">121.63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">29.88</span><span style="color:#E1E4E8;">]);  </span><span style="color:#6A737D;">// 绘制扇形的顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> circle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRegularPolygonCurve</span><span style="color:#E1E4E8;">(origi_point, </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 调用绘制扇形的方法得到扇形</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> feature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">(circle);  </span><span style="color:#6A737D;">// 把扇形加入 feature</span></span>
<span class="line"><span style="color:#E1E4E8;">  feature.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(  </span><span style="color:#6A737D;">// 设置一下这个扇形的样式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      fill: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fill</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;rgba(32, 157, 230, 0.3)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      stroke: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Stroke</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;rgba(255, 205, 67, 0.3)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">  feature.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Curve&#39;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 这是给这个扇形添加额外的参数 ， 如果是设置id 用 setId方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  feature.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;curve&#39;</span><span style="color:#E1E4E8;">, {   </span><span style="color:#6A737D;">// 这是给这个扇形添加额外的参数，这里的id和 setId的id没关系</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;测试001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    msg: </span><span style="color:#9ECBFF;">&#39;测试001-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    msg2: </span><span style="color:#9ECBFF;">&#39;测试001-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建第二个扇形，和第一个一样</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> circle1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRegularPolygonCurve</span><span style="color:#E1E4E8;">(origi_point, </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> feature1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">(circle1);</span></span>
<span class="line"><span style="color:#E1E4E8;">  feature1.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      fill: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fill</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;rgba(32, 157, 230, 0.3)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      stroke: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Stroke</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;rgba(255, 205, 67, 0.3)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">  feature1.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Curve&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  feature1.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;curve&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;超级无敌炫酷爆龙战神&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    msg: </span><span style="color:#9ECBFF;">&#39;超级无敌炫酷爆龙战神 描述001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    msg2: </span><span style="color:#9ECBFF;">&#39;超级无敌炫酷爆龙战神 描述002&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> vectorSource </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// 创建一个数据源</span></span>
<span class="line"><span style="color:#E1E4E8;">  vectorSource.</span><span style="color:#B392F0;">addFeatures</span><span style="color:#E1E4E8;">([feature, feature1]);   </span><span style="color:#6A737D;">// 把两个扇形加进数据源</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> vectorLayer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({     </span><span style="color:#6A737D;">// 创建一个图层，把数据源加进图层</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: vectorSource</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(vectorLayer);   </span><span style="color:#6A737D;">// 把图层加进地图</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 绘制圆测试</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addCircleTest</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">circleList</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> features </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  circleList.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> feature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&quot;Circle&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: item.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      geometry: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Circle</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fromLonLat</span><span style="color:#E1E4E8;">(item.site), </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    feature.</span><span style="color:#B392F0;">setStyle</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Style</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        fill: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fill</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&#39;rgba(32, 157, 230, 1)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">    features.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(feature)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> source </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorSource</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  source.</span><span style="color:#B392F0;">addFeatures</span><span style="color:#E1E4E8;">(features)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> layer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    opacity: </span><span style="color:#79B8FF;">0.2</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  layer.</span><span style="color:#B392F0;">setSource</span><span style="color:#E1E4E8;">(source)</span></span>
<span class="line"><span style="color:#E1E4E8;">  olMap.</span><span style="color:#B392F0;">addLayer</span><span style="color:#E1E4E8;">(layer)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取所有要素测试</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAllFeatureTest</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">olMap</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> layers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> olMap.</span><span style="color:#B392F0;">getLayers</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  layers.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (item </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VectorLayer</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentFeature </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item.</span><span style="color:#B392F0;">getSource</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getFeatures</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(currentFeature[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// map core</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/ol.css&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Map, View } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map 加载底图相关</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">/* OSM, */</span><span style="color:#24292E;"> XYZ, Vector </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> VectorSource } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/source&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map 坐标相关</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { fromLonLat, transform, toLonLat } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/proj&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getTopLeft, getBottomRight, getCenter } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/extent&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { toStringHDMS } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/coordinate&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map 控件相关</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { FullScreen, Zoom, ZoomSlider, ScaleLine } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ol/control&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map 图层相关</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Feature </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/Feature&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Point, Circle, Polygon, LineString } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ol/geom&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Tile </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> TileLayer, Vector </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> VectorLayer } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/layer&#39;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// VectorLayer表示珊格图层</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> LinearRing </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/geom/LinearRing&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Overlay </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/Overlay&#39;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 气泡</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getLength } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/sphere&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// map 样式</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Circle </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> CircleStyle, Fill, Stroke, Style, Text, Icon } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/style&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// kml test</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { KML</span><span style="color:#6A737D;">/* , GeoJSON */</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/format&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 选择多边形</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Draw, defaults</span><span style="color:#6A737D;">/* , Modify, Snap */</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ol/interaction&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// render</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getVectorContext } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ol/render&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 变量(非地图)</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 地图点击打点变量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图变量(工具)</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tdtTk</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.env.VITE_APP_MapToken  </span><span style="color:#6A737D;">// 全局配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">minRenderZoom</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">15</span></span>
<span class="line"><span style="color:#6A737D;">// 地图初始化配置</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mapInitConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ol地图底图</span></span>
<span class="line"><span style="color:#24292E;">  layers: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 天地图底图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TileLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      source: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XYZ</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        url: </span><span style="color:#032F62;">&quot;http://t0.tianditu.com/DataServer?T=vec_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> tdtTk,</span></span>
<span class="line"><span style="color:#24292E;">        wrapX: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        crossOrigin: </span><span style="color:#032F62;">&quot;anonymous&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 天地图注记</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TileLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      source: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XYZ</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        url: </span><span style="color:#032F62;">&quot;http://t0.tianditu.com/DataServer?T=cva_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> tdtTk</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ol地图基本配置</span></span>
<span class="line"><span style="color:#24292E;">  view: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">View</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    center: </span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">121.63</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">29.88</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">    zoom: </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    maxZoom: </span><span style="color:#005CC5;">17</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    minZoom: </span><span style="color:#005CC5;">13</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// center: fromLonLat([116.400819, 39.916263]),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// View默认使用EPSG3857坐标系</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// projection: &#39;EPSG:4326&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// zoom: 15,</span></span>
<span class="line"><span style="color:#24292E;">    constrainResolution: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 设置缩放级别为整数 </span></span>
<span class="line"><span style="color:#24292E;">    smoothResolutionConstraint: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 关闭无级缩放地图</span></span>
<span class="line"><span style="color:#24292E;">  }),</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 菜单项</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">menuMethodBtn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#24292E;">  commonMenu: {</span></span>
<span class="line"><span style="color:#24292E;">    commonMenuMethod0: </span><span style="color:#032F62;">&#39;地图功能测试&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共选项0</span></span>
<span class="line"><span style="color:#24292E;">    commonMenuMethod1: </span><span style="color:#032F62;">&#39;拷贝当前经纬度&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共选项1</span></span>
<span class="line"><span style="color:#24292E;">    commonMenuMethod2: </span><span style="color:#032F62;">&#39;清除所有要素&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共选项3</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// commonMenuMethod4: &#39;置顶要素&#39;,  // 公共选项4</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 公共动态选项,每个页面有需要才显示</span></span>
<span class="line"><span style="color:#24292E;">  commonDynamicMenu: {</span></span>
<span class="line"><span style="color:#24292E;">    commonDynamicMenuMethod1: </span><span style="color:#032F62;">&#39;显示当前要素信息&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共动态选项1</span></span>
<span class="line"><span style="color:#24292E;">    commonDynamicMenuMethod2: </span><span style="color:#032F62;">&#39;仅取消绘制状态&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 公共动态选项2</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 子页动态选项, 单页面显示或单页面有需要显示</span></span>
<span class="line"><span style="color:#24292E;">  singleMenu: {</span></span>
<span class="line"><span style="color:#24292E;">    singleMenuMethod1: </span><span style="color:#032F62;">&#39;刷新地图&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 子页动态选项1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// singleMenuMethod1: &#39;刷新地图&#39;  // 子页动态选项1</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 主菜单项</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">commonMenu</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> menuMethodBtn  </span><span style="color:#6A737D;">// 公共选项,常驻菜单</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> menuMethods </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#6A737D;">// 将对象中的值传入数组</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> commonMenu) {</span></span>
<span class="line"><span style="color:#24292E;">  menuMethods.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(commonMenu[i])</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图核心辅助方法</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 判断menu是否存在,不存在新增</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">menuAddSingleMethod</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">singleMethod</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">menuMethods.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(singleMethod)) {</span></span>
<span class="line"><span style="color:#24292E;">    menuMethods.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(singleMethod)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 公共动态选项判断</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">condition</span><span style="color:#24292E;">, </span><span style="color:#E36209;">commonDynamicMenuMethod</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (condition) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">menuAddSingleMethod</span><span style="color:#24292E;">(commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">condition </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> menuMethods.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(commonDynamicMenuMethod)) {</span></span>
<span class="line"><span style="color:#24292E;">    menuMethods </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> menuMethods.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> commonDynamicMenuMethod)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setMentBtnExtendByPage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">currentPageType</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">singleMenu</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> menuMethodBtn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (currentPageType) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;gis&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">menuAddSingleMethod</span><span style="color:#24292E;">(singleMenu.singleMenuMethod1)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除图层方法</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取当前地图上的所有图层</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> layers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getLayers</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getArray</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 从地图中移除所有图层</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> layers.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (layers[i] </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(layers[i])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// olMap.removeLayer(layers[i])</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 标注点样式</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pointCircleStyle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  image: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CircleStyle</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    radius: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    fill: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fill</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      color: </span><span style="color:#032F62;">&#39;#f49d41&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    stroke: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Stroke</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      color: </span><span style="color:#032F62;">&#39;#836365&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      width: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }),</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pointIconleStyle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">src</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    image: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Icon</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      src,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// image: new CircleStyle({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// anchor: [0.5, 0.5],//图标的锚点,经纬度点所对应的图标的位置，默认是[0.5, 0.5]，即为标注图标的中心点位置</span></span>
<span class="line"><span style="color:#24292E;">      anchorOrigin: </span><span style="color:#032F62;">&#39;top-right&#39;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//锚点的偏移位置，默认是top-left，</span></span>
<span class="line"><span style="color:#24292E;">      anchorXUnits: </span><span style="color:#032F62;">&#39;fraction&#39;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//锚点X的单位，默认为百分比，也可以使用px</span></span>
<span class="line"><span style="color:#24292E;">      anchorYUnits: </span><span style="color:#032F62;">&#39;pixels&#39;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//锚点Y的单位，默认为百分比，也可以使用px</span></span>
<span class="line"><span style="color:#24292E;">      offsetOrigin: </span><span style="color:#032F62;">&#39;top-right&#39;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//原点偏移bottom-left, bottom-right, top-left, top-right,默认 top-left</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// offset:[0,10],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//图标缩放比例</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// scale:0.5,//可以设置该比例实现，图标跟随地图层级缩放</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//透明度</span></span>
<span class="line"><span style="color:#24292E;">      opacity: </span><span style="color:#005CC5;">0.75</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//如果想隐藏某个图标，可以单独设置该值，透明度为0时，即可隐藏，此为隐藏元素的方法之一。</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 绘制扇形核心方法</span></span>
<span class="line"><span style="color:#6A737D;"> * APIMethod:OpenLayers绘制扇形的接口扩展</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">origin</span><span style="color:#6A737D;"> 圆心</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">radius</span><span style="color:#6A737D;"> 半径</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">sides</span><span style="color:#6A737D;"> 边数</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">r</span><span style="color:#6A737D;"> 弧度</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">angel</span><span style="color:#6A737D;"> 旋转角度（扇形右边半径与x正向轴的角度）</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{OpenLayers.Geometry.Polygon}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRegularPolygonCurve</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">origin</span><span style="color:#24292E;">, </span><span style="color:#E36209;">radius</span><span style="color:#24292E;">, </span><span style="color:#E36209;">sides</span><span style="color:#24292E;">, </span><span style="color:#E36209;">r</span><span style="color:#24292E;">, </span><span style="color:#E36209;">angel</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> rotation </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">360</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> angle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> ((</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> sides) </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (rotation) {</span></span>
<span class="line"><span style="color:#24292E;">    angle </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> (rotation </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> Math.</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> rotatedAngle, x, y;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> points </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> sides; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> an </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> ((</span><span style="color:#005CC5;">360</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> rotation) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">360</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    rotatedAngle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> angle </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> (an </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> Math.</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> sides);</span></span>
<span class="line"><span style="color:#24292E;">    x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> origin[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> (radius </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">cos</span><span style="color:#24292E;">(rotatedAngle));</span></span>
<span class="line"><span style="color:#24292E;">    y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> origin[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> (radius </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">sin</span><span style="color:#24292E;">(rotatedAngle));</span></span>
<span class="line"><span style="color:#24292E;">    points.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">([x, y]);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (rotation </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    points.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(origin);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> ring </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LinearRing</span><span style="color:#24292E;">(points);</span></span>
<span class="line"><span style="color:#24292E;">  ring.</span><span style="color:#6F42C1;">rotate</span><span style="color:#24292E;">(angel </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">57.3</span><span style="color:#24292E;">, origin);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ring.</span><span style="color:#6F42C1;">getCoordinates</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Polygon</span><span style="color:#24292E;">([list]);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图核心方法供出</span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initOlMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">target</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    target,</span></span>
<span class="line"><span style="color:#24292E;">    layers: mapInitConfig.layers,</span></span>
<span class="line"><span style="color:#24292E;">    view: mapInitConfig.view,</span></span>
<span class="line"><span style="color:#24292E;">    interactions: </span><span style="color:#6F42C1;">defaults</span><span style="color:#24292E;">({ mouseWheelZoom: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> })  </span><span style="color:#6A737D;">// 禁止缩放</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取可视区域的左上角和右下角坐标</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentViewPosition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">extent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getView</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">calculateExtent</span><span style="color:#24292E;">(olMap.</span><span style="color:#6F42C1;">getSize</span><span style="color:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取投影坐标系</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">topLeftCoord</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getTopLeft</span><span style="color:#24292E;">(extent);  </span><span style="color:#6A737D;">// 左上角</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">bottomRightCoord</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getBottomRight</span><span style="color:#24292E;">(extent);  </span><span style="color:#6A737D;">// 右下角</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(topLeftCoord, bottomRightCoord)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 将投影坐标转换为地理坐标</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">topLeft</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(topLeftCoord, </span><span style="color:#032F62;">&#39;EPSG:3857&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;EPSG:4326&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">bottomRight</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(bottomRightCoord, </span><span style="color:#032F62;">&#39;EPSG:3857&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;EPSG:4326&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(topLeft, bottomRight)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    topLeft,</span></span>
<span class="line"><span style="color:#24292E;">    bottomRight,</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
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
<span class="line"><span style="color:#6A737D;">// 设置鼠标右键属性</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setContextmenu</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">, </span><span style="color:#E36209;">setMenuConfig</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">commonDynamicMenu</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> menuMethodBtn  </span><span style="color:#6A737D;">// 公共动态选项,每个页面有需要才显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 添加右键菜单监听</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">getViewport</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;contextmenu&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">e</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(transformToLonlat(olMap.getEventCoordinate(e)))  // 经纬度</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    e.</span><span style="color:#6F42C1;">preventDefault</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 阻止默认的右键菜单弹出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 屏幕坐标</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pixelPoint</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getEventCoordinate</span><span style="color:#24292E;">(e)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pixel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getPixelFromCoordinate</span><span style="color:#24292E;">(pixelPoint)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">feature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">forEachFeatureAtPixel</span><span style="color:#24292E;">(pixel, </span><span style="color:#E36209;">feature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> feature</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* if (feature &amp;&amp; !menuMethods.includes(commonDynamicMenuMethod1)) {</span></span>
<span class="line"><span style="color:#6A737D;">      menuMethods.push(commonDynamicMenuMethod1)</span></span>
<span class="line"><span style="color:#6A737D;">    } */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// commonDynamicMenuMethod1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 公共动态选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 判断是否显示当前要素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;">(feature, commonDynamicMenu.commonDynamicMenuMethod1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 判断是否需要显示停止绘制</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取绘制的图形</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">drawInteraction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getInteractions</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getArray</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      (</span><span style="color:#E36209;">interaction</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> interaction </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Draw</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setCommonMenuMethod</span><span style="color:#24292E;">(drawInteraction, commonDynamicMenu.commonDynamicMenuMethod2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * 子页动态选项</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (setMenuConfig) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">setMenuConfig</span><span style="color:#24292E;">(</span><span style="color:#E36209;">currentPageType</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(&#39;当前页面&#39;, currentPageType)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 根据具体页面配置菜单栏</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setMentBtnExtendByPage</span><span style="color:#24292E;">(currentPageType)</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
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
<span class="line"><span style="color:#24292E;">      menuMethods.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
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
<span class="line"><span style="color:#6A737D;">// 取消绘制(点线面)</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cancelDrawInteraction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;取消绘制(点线面)&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取绘制的图形</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">drawInteraction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getInteractions</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getArray</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#E36209;">interaction</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> interaction </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Draw</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(drawInteraction)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">removeInteraction</span><span style="color:#24292E;">(drawInteraction); </span><span style="color:#6A737D;">// 从地图中移除交互</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// vectorLayer.getSource().clear(); // 清除绘制的几何形状</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 投影坐标转换</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transformToLonlat</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">coordinate</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(coordinate, </span><span style="color:#032F62;">&quot;EPSG:3857&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;EPSG:4326&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 屏幕坐标转换</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transformToPixelPoint</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">lon</span><span style="color:#24292E;">, </span><span style="color:#E36209;">lat</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">([lon, lat])</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取经纬度</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getHdms</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toStringHDMS</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">toLonLat</span><span style="color:#24292E;">(pixelPoint)); </span><span style="color:#6A737D;">// 转换为经纬度显示</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取多边形中心点</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getPolygonCenter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">feature</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">geometry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> feature.</span><span style="color:#6F42C1;">getGeometry</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (geometry.</span><span style="color:#6F42C1;">getType</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Polygon&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">polygon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> geometry.</span><span style="color:#6F42C1;">clone</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    polygon.</span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;EPSG:3857&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;EPSG:4326&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 如果多边形在Web墨卡托坐标系中，需要转换到WGS84</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">extent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> polygon.</span><span style="color:#6F42C1;">getExtent</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">center</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCenter</span><span style="color:#24292E;">(extent);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> center;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置标注点</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addPoint</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pointDataList</span><span style="color:#24292E;">, </span><span style="color:#E36209;">isIcon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#E36209;">src</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// mapUtils.setPointTest(olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建点的数据源</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vectorSource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    features: [],</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建点图层</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vectorLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source: vectorSource,</span></span>
<span class="line"><span style="color:#24292E;">    zIndex: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    style: </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">isIcon </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> pointCircleStyle </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pointIconleStyle</span><span style="color:#24292E;">(src)</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(vectorLayer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  pointDataList.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">point</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Point</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">(item.lonlat));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">feature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      geometry: point,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;Marker&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      pointData: item.pointData</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    vectorSource.</span><span style="color:#6F42C1;">addFeature</span><span style="color:#24292E;">(feature);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加线</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addLine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">position</span><span style="color:#24292E;">, </span><span style="color:#E36209;">lineConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}, </span><span style="color:#E36209;">style</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建线要素并添加到地图上</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">lineFeature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// geometry: new LineString([[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]),</span></span>
<span class="line"><span style="color:#24292E;">    geometry: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LineString</span><span style="color:#24292E;">(position),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">lineConfig</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">style) {</span></span>
<span class="line"><span style="color:#24292E;">    style </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setFeaturesStyle</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;rgba(255, 255, 255, 0.2)&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;rgba(0, 0, 0, 0.5)&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  lineFeature.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(style);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// lineFeature.setStyle(styleFunction);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vectorSource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    features: [lineFeature],</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vectorLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source: vectorSource,</span></span>
<span class="line"><span style="color:#24292E;">    zIndex: </span><span style="color:#005CC5;">9</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(vectorLayer);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据feature获取layer</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">feature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}, </span><span style="color:#E36209;">map</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> layers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> map.</span><span style="color:#6F42C1;">getLayers</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getArray</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> layers) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> source </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> layers[i].</span><span style="color:#6F42C1;">getSource</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (source </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> features </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> source.</span><span style="color:#6F42C1;">getFeatures</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (features.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> features) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (features[j] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> feature) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> layers[i];</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置Features样式</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setFeaturesStyle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">fillColor</span><span style="color:#24292E;">, </span><span style="color:#E36209;">strokeColor</span><span style="color:#24292E;">, </span><span style="color:#E36209;">isImg</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#E36209;">width</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#E36209;">radius</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">isImg </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    fill: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fill</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      color: fillColor</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    stroke: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Stroke</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      color: strokeColor,</span></span>
<span class="line"><span style="color:#24292E;">      width</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    image: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CircleStyle</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      radius,</span></span>
<span class="line"><span style="color:#24292E;">      fill: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fill</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        color: fillColor,</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">      stroke: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Stroke</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        color: strokeColor,</span></span>
<span class="line"><span style="color:#24292E;">        width,</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 给某个feature置顶</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">featureToMaxTop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">feature</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;给某个feature置顶&#39;, olMap, feature)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (feature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Marker&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      currentStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setFeaturesStyle</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#409eff&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;#f00&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Curve&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      currentStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setFeaturesStyle</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#409eff&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;#f00&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  feature.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(currentStyle)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  feature.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;temp&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 顶层图层</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> topLayer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// style: [selectPointStyle],</span></span>
<span class="line"><span style="color:#24292E;">    zIndex: </span><span style="color:#005CC5;">999</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// zIndex全地图最大</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(olMap, </span><span style="color:#E36209;">layerItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// olMap.removeLayer(layerItem)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentFeature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> layerItem.</span><span style="color:#6F42C1;">getSource</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFeatures</span><span style="color:#24292E;">()[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (currentFeature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;temp&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">      olMap.</span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(layerItem)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  topLayer.</span><span style="color:#6F42C1;">setOpacity</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  topLayer.</span><span style="color:#6F42C1;">getSource</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">addFeature</span><span style="color:#24292E;">(feature);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(topLayer)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建文字图层</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addTextOverlay</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">text</span><span style="color:#24292E;">, </span><span style="color:#E36209;">position</span><span style="color:#24292E;">, </span><span style="color:#E36209;">textOverlayConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}, </span><span style="color:#E36209;">isRemove</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;创建文字图层Overlay&#39;, olMap, gridData)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建文本样式</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">textStyle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Text</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      text,</span></span>
<span class="line"><span style="color:#24292E;">      fill: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fill</span><span style="color:#24292E;">({ color: </span><span style="color:#032F62;">&#39;#333333&#39;</span><span style="color:#24292E;"> }),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// stroke: new Stroke({ color: &#39;#fff&#39;, width: 2 }),</span></span>
<span class="line"><span style="color:#24292E;">      font: </span><span style="color:#032F62;">&#39;18px pingfang&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      textAlign: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 文本对齐</span></span>
<span class="line"><span style="color:#24292E;">      textBaseline: </span><span style="color:#032F62;">&#39;bottom&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 文本基线</span></span>
<span class="line"><span style="color:#24292E;">      padding: [</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 文本周围的填充</span></span>
<span class="line"><span style="color:#24292E;">      overflow: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 允许文本溢出</span></span>
<span class="line"><span style="color:#24292E;">      rotateWithView: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 不随地图旋转</span></span>
<span class="line"><span style="color:#24292E;">      rotation: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 文本旋转角度</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (isRemove) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 清除某类图层</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(olMap, </span><span style="color:#E36209;">layerItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// olMap.removeLayer(layerItem)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentFeature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> layerItem.</span><span style="color:#6F42C1;">getSource</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFeatures</span><span style="color:#24292E;">()[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">isRemove</span><span style="color:#24292E;">(layerItem, currentFeature)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建文本特征</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">feature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    geometry: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Point</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">(position)),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">textOverlayConfig</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置特征的样式</span></span>
<span class="line"><span style="color:#24292E;">  feature.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(textStyle);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建文本图层</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vectorLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      features: [feature],</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    zIndex: </span><span style="color:#005CC5;">9</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 将文本图层添加到地图</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(vectorLayer);</span></span>
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
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">popupCommonConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;">, </span><span style="color:#E36209;">popupData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">, </span><span style="color:#E36209;">overlayConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> container </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;popup&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> closer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;popup-closer&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> content </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;popup-content&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  container.style.display </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;block&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> overlayContainer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.ol-overlay-container&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (overlayContainer) {</span></span>
<span class="line"><span style="color:#24292E;">    overlayContainer.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> overlay </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Overlay</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    element: container, </span><span style="color:#6A737D;">//绑定 Overlay 对象和 DOM 对象的</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">overlayConfig</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addOverlay</span><span style="color:#24292E;">(overlay);</span></span>
<span class="line"><span style="color:#24292E;">  closer.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    overlay.</span><span style="color:#6F42C1;">setPosition</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    closer.</span><span style="color:#6F42C1;">blur</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    overlay </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  content.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> popupData;</span></span>
<span class="line"><span style="color:#24292E;">  overlay.</span><span style="color:#6F42C1;">setPosition</span><span style="color:#24292E;">(pixelPoint); </span><span style="color:#6A737D;">//把 overlay 显示到指定的 x,y坐标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 使用addEventListener会无限叠加事件,且不好使用removeEventListener移除(匿名函数)</span></span>
<span class="line"><span style="color:#24292E;">  overlay.</span><span style="color:#6F42C1;">getElement</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">e</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(e)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 添加扇形</span></span>
<span class="line"><span style="color:#6A737D;"> * 绘制扇形核心方法</span></span>
<span class="line"><span style="color:#6A737D;"> * APIMethod:OpenLayers绘制扇形的接口扩展</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">origin</span><span style="color:#6A737D;"> 圆心</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">radius</span><span style="color:#6A737D;"> 半径</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">sides</span><span style="color:#6A737D;"> 边数</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">r</span><span style="color:#6A737D;"> 弧度</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">angel</span><span style="color:#6A737D;"> 旋转角度（扇形右边半径与x正向轴的角度）</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{OpenLayers.Geometry.Polygon}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 根据频段展示不同颜色 有边缘  </span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addCurve</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">curveDataList</span><span style="color:#24292E;">, </span><span style="color:#E36209;">isResetStyle</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> featureList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []  </span><span style="color:#6A737D;">// 扇区feature列表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 根据业务数据修改feature数据</span></span>
<span class="line"><span style="color:#24292E;">  curveDataList.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 频率</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(item.curveData.workFrequency)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 扇区样式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> curveStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setFeaturesStyle</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;rgba(32, 222, 230, 0.4)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;rgba(255, 205, 67, 0.3)&#39;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 扇区半径</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> curveRadius </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (isResetStyle) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { myCurveStyle, myCurveRadius } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isResetStyle</span><span style="color:#24292E;">(item)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      curveStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> myCurveStyle</span></span>
<span class="line"><span style="color:#24292E;">      curveRadius </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> myCurveRadius</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> origi_point </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">(item.lonlat);  </span><span style="color:#6A737D;">// 绘制扇形的顶点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// let circle = createRegularPolygonCurve(origi_point, 150, 100, 45, 90) // 调用绘制扇形的方法得到扇形</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> circle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRegularPolygonCurve</span><span style="color:#24292E;">(origi_point, curveRadius, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">, item.curveData.antDirectionAngle) </span><span style="color:#6A737D;">// 调用绘制扇形的方法得到扇形</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> feature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">(circle);  </span><span style="color:#6A737D;">// 把扇形加入 feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    feature.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(curveStyle)</span></span>
<span class="line"><span style="color:#24292E;">    feature.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Curve&#39;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 这是给这个扇形添加额外的参数 ， 如果是设置id 用 setId方法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这是给这个扇形添加额外的参数，这里的id和 setId的id没关系</span></span>
<span class="line"><span style="color:#24292E;">    feature.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;curveData&#39;</span><span style="color:#24292E;">, item.curveData)</span></span>
<span class="line"><span style="color:#24292E;">    featureList.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(feature)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> vectorSource </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">// 创建一个数据源</span></span>
<span class="line"><span style="color:#24292E;">  vectorSource.</span><span style="color:#6F42C1;">addFeatures</span><span style="color:#24292E;">(featureList);   </span><span style="color:#6A737D;">// 把两个扇形加进数据源</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> vectorLayer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({     </span><span style="color:#6A737D;">// 创建一个图层，把数据源加进图层</span></span>
<span class="line"><span style="color:#24292E;">    source: vectorSource,</span></span>
<span class="line"><span style="color:#24292E;">    zIndex: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(vectorLayer);   </span><span style="color:#6A737D;">// 把图层加进地图</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 设置气泡窗</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">olMap</span><span style="color:#6A737D;"> 地图对象</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">pixelPoint</span><span style="color:#6A737D;"> 屏幕坐标</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">popupData</span><span style="color:#6A737D;"> 气泡窗数据</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">next</span><span style="color:#6A737D;"> 事件处理方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setPopup</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;">, </span><span style="color:#E36209;">popupData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// const pixelPoint = e.coordinate  // 屏幕坐标</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">popupCommonConfig</span><span style="color:#24292E;">(olMap, pixelPoint, popupData, next, {</span></span>
<span class="line"><span style="color:#24292E;">    autoPan: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* autoPanAnimation: {</span></span>
<span class="line"><span style="color:#6A737D;">        duration: 250, // 自动平移效果的动画时间 9毫秒）</span></span>
<span class="line"><span style="color:#6A737D;">    }, */</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自动弹出气泡窗</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setAutoPopup</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;">, </span><span style="color:#E36209;">itemData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 点击尺 （这里是尺(米)，并不是经纬度）;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> hdms </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getHdms</span><span style="color:#24292E;">(pixelPoint); </span><span style="color:#6A737D;">// 转换为经纬度显示</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// let hdms = toStringHDMS(toLonLat(pixelPoint)); // 转换为经纬度显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">popupObj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;通用信息展示弹窗&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    hdms,</span></span>
<span class="line"><span style="color:#24292E;">    coordinate: [itemData.longitude, itemData.latitude],</span></span>
<span class="line"><span style="color:#24292E;">    popupData: itemData  </span><span style="color:#6A737D;">// 气泡窗业务数据</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(popupObj)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除所有图层</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeAllLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cancelDrawInteraction(olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(olMap, </span><span style="color:#E36209;">layerItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    olMap.</span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(layerItem)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据feature条件删除图层</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeLayerByFeature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">condition</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(olMap, </span><span style="color:#E36209;">layerItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentFeature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> layerItem.</span><span style="color:#6F42C1;">getSource</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFeatures</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">condition</span><span style="color:#24292E;">(currentFeature[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">])) {</span></span>
<span class="line"><span style="color:#24292E;">      olMap.</span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(layerItem)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据类型移除图层</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeLayerByType</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">removeLayerByFeature</span><span style="color:#24292E;">(olMap, </span><span style="color:#E36209;">currentFeature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> currentFeature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> type</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除所有默认图层</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeAllDefaultLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">removeLayerByFeature</span><span style="color:#24292E;">(olMap, </span><span style="color:#E36209;">currentFeature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> currentFeature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Marker&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> currentFeature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Curve&#39;</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 飞到指定坐标</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flyToCoordinate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">lonlat</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">getView</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">animate</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    center: </span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">(lonlat),</span></span>
<span class="line"><span style="color:#24292E;">    duration: </span><span style="color:#005CC5;">800</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 飞行时间，单位毫秒</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取所有feature</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAllFeature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">getLayers</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> source </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (item) {</span></span>
<span class="line"><span style="color:#24292E;">      source </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item.</span><span style="color:#6F42C1;">getSource</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (source </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      source.</span><span style="color:#6F42C1;">forEachFeature</span><span style="color:#24292E;">(</span><span style="color:#E36209;">feature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(feature.get(&#39;type&#39;))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(feature)</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 加载kml</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadKML</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">text</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;加载kml&#39;, olMap, text)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">format</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">KML</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    extractStyles: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//至关重要</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">features</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> format.</span><span style="color:#6F42C1;">readFeatures</span><span style="color:#24292E;">(text);</span></span>
<span class="line"><span style="color:#24292E;">  features.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从EPSG:4326转换到EPSG:3857</span></span>
<span class="line"><span style="color:#24292E;">    item.</span><span style="color:#6F42C1;">getGeometry</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;EPSG:4326&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;EPSG:3857&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vectorSource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    features: features,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">getView</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">fit</span><span style="color:#24292E;">(vectorSource.</span><span style="color:#6F42C1;">getExtent</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">getLayers</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      source: vectorSource,</span></span>
<span class="line"><span style="color:#24292E;">      style: </span><span style="color:#6F42C1;">setFeaturesStyle</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;blue&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      zIndex: </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建多边形(选区)</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">drawPolygon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;创建多边形(选区)&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addInteraction</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Draw</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;Polygon&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取绘制完成的多边形</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">getInteractions</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getArray</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">interaction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (interaction </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Draw</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      interaction.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;drawend&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">feature</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">geometry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> feature.</span><span style="color:#6F42C1;">getGeometry</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">coords</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> geometry.</span><span style="color:#6F42C1;">getCoordinates</span><span style="color:#24292E;">()[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">lonlat</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> geometry.</span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;EPSG:3857&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;EPSG:4326&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getCoordinates</span><span style="color:#24292E;">()[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(lonlat, coords)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (geometry </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Polygon</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// console.log(&quot;所选点位坐标&quot;, geometry.getCoordinates());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">createPolygon</span><span style="color:#24292E;">(olMap, { coords, lonlat })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          olMap.</span><span style="color:#6F42C1;">removeInteraction</span><span style="color:#24292E;">(interaction); </span><span style="color:#6A737D;">// 从地图中移除交互</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 绘制多边形</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">olMap</span><span style="color:#6A737D;"> </span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">coords</span><span style="color:#6A737D;"> 多边形的坐标数组</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPolygon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">coords</span><span style="color:#24292E;">, </span><span style="color:#E36209;">lonlat</span><span style="color:#24292E;">, </span><span style="color:#E36209;">polygonData</span><span style="color:#24292E;"> }, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">, </span><span style="color:#E36209;">polygonStyle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setFeaturesStyle</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;rgba(0, 255, 0, 0.4)&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;rgba(0, 255, 0, 1)&quot;</span><span style="color:#24292E;">)) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(olMap, coords, lonlat)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建多边形</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> polygon </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    geometry: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Polygon</span><span style="color:#24292E;">([coords]),</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;Polygon&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    polygonData: {</span></span>
<span class="line"><span style="color:#24292E;">      coords,</span></span>
<span class="line"><span style="color:#24292E;">      lonlat,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">polygonData</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置多边形样式</span></span>
<span class="line"><span style="color:#24292E;">  polygon.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(polygonStyle)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建矢量图层并添加多边形</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> vectorLayer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      features: [polygon]</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(vectorLayer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (next) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(polygon)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 取消绘制多边形(取消选区)</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cancelPolygon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;取消绘制多边形(取消选区)&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">cancelDrawInteraction</span><span style="color:#24292E;">(olMap)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 绘制圆</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addCircle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">circleItem</span><span style="color:#24292E;">, </span><span style="color:#E36209;">isFlicker</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> features </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fillStyle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fill</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#032F62;">&#39;rgba(32, 157, 230, 0.2)&#39;</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> feature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;Circle&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    circleData: circleItem,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 圆心 - 半径</span></span>
<span class="line"><span style="color:#24292E;">    geometry: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Circle</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">([circleItem.longitude, circleItem.latitude]), </span><span style="color:#005CC5;">550</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  feature.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      fill: fillStyle,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">  features.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(feature)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> source </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  source.</span><span style="color:#6F42C1;">addFeatures</span><span style="color:#24292E;">(features)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> layer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// opacity: 0.2,</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  layer.</span><span style="color:#6F42C1;">setSource</span><span style="color:#24292E;">(source)</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(layer)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 需要闪烁时调用</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (isFlicker) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> radius </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    layer.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;postrender&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">evt</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (radius </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) radius </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> opacity </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">20</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> radius) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">//不透明度</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> pointStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        radius: radius,</span></span>
<span class="line"><span style="color:#24292E;">        stroke: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Stroke</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&quot;rgba(255,0,0&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> opacity </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> radius </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//设置宽度</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 获取矢量要素上下文</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> vectorContext </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getVectorContext</span><span style="color:#24292E;">(evt);</span></span>
<span class="line"><span style="color:#24292E;">      vectorContext.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(pointStyle);</span></span>
<span class="line"><span style="color:#24292E;">      vectorContext.</span><span style="color:#6F42C1;">drawGeometry</span><span style="color:#24292E;">(feature.</span><span style="color:#6F42C1;">getGeometry</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">      radius </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> radius </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.3</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//调整闪烁速度</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//请求地图渲染（在下一个动画帧处）</span></span>
<span class="line"><span style="color:#24292E;">      olMap.</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建闪烁点</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addFlickerDom</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;创建闪烁点&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* var point_div = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">  point_div.className = &quot;css_animation&quot;;</span></span>
<span class="line"><span style="color:#6A737D;">  point_overlay = new Overlay({</span></span>
<span class="line"><span style="color:#6A737D;">    element: point_div,</span></span>
<span class="line"><span style="color:#6A737D;">    positioning: &#39;center-center&#39;</span></span>
<span class="line"><span style="color:#6A737D;">  });</span></span>
<span class="line"><span style="color:#6A737D;">  olMap.addOverlay(point_overlay); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 121.63, 29.88</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(transformToPixelPoint(121.63, 29.88))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// point_overlay.setPosition(coordinate);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测距</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">testDistance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;测距&quot;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> measure </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Draw</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;LineString&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* style: new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      fill: new Fill({ color: &#39;rgba(255, 255, 255, 0.2)&#39; }),</span></span>
<span class="line"><span style="color:#6A737D;">      stroke: new Stroke({ color: &#39;rgba(0, 0, 0, 0.5)&#39;, width: 2 })</span></span>
<span class="line"><span style="color:#6A737D;">    }) */</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addInteraction</span><span style="color:#24292E;">(measure);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  measure.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;drawend&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">feature</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> event</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> feature.</span><span style="color:#6F42C1;">getGeometry</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getLength</span><span style="color:#24292E;">(line);</span></span>
<span class="line"><span style="color:#24292E;">    length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> length.</span><span style="color:#6F42C1;">toFixed</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">coords</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> line.</span><span style="color:#6F42C1;">getCoordinates</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">lonlat</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> line.</span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;EPSG:3857&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;EPSG:4326&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getCoordinates</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;Line length: &#39; + length + &#39; meters&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果需要外部提供数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (next) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(length)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建线要素并添加到地图上</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">addLine</span><span style="color:#24292E;">(olMap, coords, { tempType: </span><span style="color:#032F62;">&#39;testDistanceTemp&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建文本要素以显示距离</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">addTextOverlay</span><span style="color:#24292E;">(olMap, length </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;米&#39;</span><span style="color:#24292E;">, lonlat[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">], { tempType: </span><span style="color:#032F62;">&#39;testDistanceTemp&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 取消测距</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cancelTestDistance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;取消测距&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 清除某类图层</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(olMap, </span><span style="color:#E36209;">layerItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// olMap.removeLayer(layerItem)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentFeature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> layerItem.</span><span style="color:#6F42C1;">getSource</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFeatures</span><span style="color:#24292E;">()[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (currentFeature.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;tempType&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;testDistanceTemp&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      olMap.</span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(layerItem)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">cancelDrawInteraction</span><span style="color:#24292E;">(olMap)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加带箭头的线</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addArrowLine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">position</span><span style="color:#24292E;">, </span><span style="color:#E36209;">src</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../src/components/OpenlayerBaseMap/icon/arrow.svg&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&#39;添加带箭头的线&#39;, olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">styleFunction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">feature</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">geometry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> feature.</span><span style="color:#6F42C1;">getGeometry</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">styles</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// linestring</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        stroke: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Stroke</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&#39;rgb(164 164 162 / 88%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    geometry.</span><span style="color:#6F42C1;">forEachSegment</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">start</span><span style="color:#24292E;">, </span><span style="color:#E36209;">end</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dx</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> end[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> start[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> end[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> start[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rotation</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">atan2</span><span style="color:#24292E;">(dy, dx);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">coord</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [start[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> dx </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, start[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> dy </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// arrows</span></span>
<span class="line"><span style="color:#24292E;">      styles.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          geometry: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Point</span><span style="color:#24292E;">(coord),</span></span>
<span class="line"><span style="color:#24292E;">          image: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Icon</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// src: &#39;https://bpic.51yuansu.com/pic2/cover/00/48/42/5815eb37ed3d8_610.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// src: &#39;http://localhost:81/src/assets/icons/svg/checkbox.svg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// src: &#39;./arrow.svg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// src: &#39;../src/components/OpenlayerBaseMap/icon/arrow.svg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            src,</span></span>
<span class="line"><span style="color:#24292E;">            anchor: [</span><span style="color:#005CC5;">0.75</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">            rotateWithView: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            rotation: </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">rotation,</span></span>
<span class="line"><span style="color:#24292E;">            scale: </span><span style="color:#005CC5;">0.03</span></span>
<span class="line"><span style="color:#24292E;">          }),</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> styles;</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">addLine</span><span style="color:#24292E;">(olMap, position, {}, styleFunction)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// // 创建线要素并添加到地图上</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// const lineFeature = new Feature({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   geometry: new LineString(position),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// /* lineFeature.setStyle(new Style({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   stroke: new Stroke({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     width: 3,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     color: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   fill: new Fill({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//     color: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   }),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// })); */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// lineFeature.setStyle(styleFunction);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// const vectorSource = new VectorSource({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   features: [lineFeature],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// const vectorLayer = new VectorLayer({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   source: vectorSource,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// olMap.addLayer(vectorLayer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/******************************</span></span>
<span class="line"><span style="color:#6A737D;"> * 测试 </span></span>
<span class="line"><span style="color:#6A737D;"> * ****************************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 地图功能测试</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">olMapTestCommon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">feature</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pixelPoint</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;地图功能测试&#39;</span><span style="color:#24292E;">, olMap, feature, pixelPoint)</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;经纬度&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">transformToLonlat</span><span style="color:#24292E;">(pixelPoint))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// testDistance(olMap)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* let measure = new Draw({</span></span>
<span class="line"><span style="color:#6A737D;">    source: new VectorSource(),</span></span>
<span class="line"><span style="color:#6A737D;">    type: &#39;LineString&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    style: new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      fill: new Fill({ color: &#39;rgba(255, 255, 255, 0.2)&#39; }),</span></span>
<span class="line"><span style="color:#6A737D;">      stroke: new Stroke({ color: &#39;rgba(0, 0, 0, 0.5)&#39;, width: 2 })</span></span>
<span class="line"><span style="color:#6A737D;">    })</span></span>
<span class="line"><span style="color:#6A737D;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  olMap.addInteraction(measure);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  measure.on(&#39;drawend&#39;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">    const { feature } = event</span></span>
<span class="line"><span style="color:#6A737D;">    const line = feature.getGeometry();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    let length = getLength(line);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    const coords = line.getCoordinates()</span></span>
<span class="line"><span style="color:#6A737D;">    const lonlat = line.transform(&#39;EPSG:3857&#39;, &#39;EPSG:4326&#39;).getCoordinates()</span></span>
<span class="line"><span style="color:#6A737D;">    console.log(lonlat)</span></span>
<span class="line"><span style="color:#6A737D;">    console.log(&#39;Line length: &#39; + length + &#39; meters&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在测距工具容器中显示长度</span></span>
<span class="line"><span style="color:#6A737D;">    // document.getElementById(&#39;measure&#39;).innerHTML += &#39;&lt;p&gt;&#39; + length.toFixed(2) + &#39; meters&lt;/p&gt;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 清空已绘制的要素</span></span>
<span class="line"><span style="color:#6A737D;">    // source.clear();</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建线要素并添加到地图上</span></span>
<span class="line"><span style="color:#6A737D;">    const lineFeature = new Feature({</span></span>
<span class="line"><span style="color:#6A737D;">      // geometry: new LineString([[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]),</span></span>
<span class="line"><span style="color:#6A737D;">      geometry: new LineString(coords),</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    lineFeature.setStyle(new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      stroke: new Stroke({</span></span>
<span class="line"><span style="color:#6A737D;">        width: 3,</span></span>
<span class="line"><span style="color:#6A737D;">        color: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">      fill: new Fill({</span></span>
<span class="line"><span style="color:#6A737D;">        color: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">    }));</span></span>
<span class="line"><span style="color:#6A737D;">    // lineFeature.setStyle(styleFunction);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    const vectorSource = new VectorSource({</span></span>
<span class="line"><span style="color:#6A737D;">      features: [lineFeature],</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    const vectorLayer1 = new VectorLayer({</span></span>
<span class="line"><span style="color:#6A737D;">      source: vectorSource,</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    olMap.addLayer(vectorLayer1);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建文本样式</span></span>
<span class="line"><span style="color:#6A737D;">    const textStyle = new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      text: new Text({</span></span>
<span class="line"><span style="color:#6A737D;">        text: length.toFixed(2) + &#39;米&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        fill: new Fill({ color: &#39;#333333&#39; }),</span></span>
<span class="line"><span style="color:#6A737D;">        // stroke: new Stroke({ color: &#39;#fff&#39;, width: 2 }),</span></span>
<span class="line"><span style="color:#6A737D;">        font: &#39;18px pingfang&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        textAlign: &#39;center&#39;, // 文本对齐</span></span>
<span class="line"><span style="color:#6A737D;">        textBaseline: &#39;bottom&#39;, // 文本基线</span></span>
<span class="line"><span style="color:#6A737D;">        padding: [5, 10, 5, 10], // 文本周围的填充</span></span>
<span class="line"><span style="color:#6A737D;">        overflow: true, // 允许文本溢出</span></span>
<span class="line"><span style="color:#6A737D;">        rotateWithView: false, // 不随地图旋转</span></span>
<span class="line"><span style="color:#6A737D;">        rotation: 0, // 文本旋转角度</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // // 清除某类图层</span></span>
<span class="line"><span style="color:#6A737D;">    // removeLayer(olMap, layerItem =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">    //   // olMap.removeLayer(layerItem)</span></span>
<span class="line"><span style="color:#6A737D;">    //   let currentFeature = layerItem.getSource().getFeatures()[0]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    //   if (currentFeature.get(&#39;tempType&#39;) === &#39;ceju&#39;) {</span></span>
<span class="line"><span style="color:#6A737D;">    //     olMap.removeLayer(layerItem)</span></span>
<span class="line"><span style="color:#6A737D;">    //   }</span></span>
<span class="line"><span style="color:#6A737D;">    // })</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建文本特征</span></span>
<span class="line"><span style="color:#6A737D;">    const featurettt = new Feature({</span></span>
<span class="line"><span style="color:#6A737D;">      // geometry: new Point(fromLonLat(gridData.centerCoordinates)),</span></span>
<span class="line"><span style="color:#6A737D;">      geometry: new Point(fromLonLat(lonlat[0])),</span></span>
<span class="line"><span style="color:#6A737D;">      tempType: &#39;ceju&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 设置特征的样式</span></span>
<span class="line"><span style="color:#6A737D;">    featurettt.setStyle(textStyle);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 创建文本图层</span></span>
<span class="line"><span style="color:#6A737D;">    const vectorLayer = new VectorLayer({</span></span>
<span class="line"><span style="color:#6A737D;">      source: new VectorSource({</span></span>
<span class="line"><span style="color:#6A737D;">        features: [featurettt],</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 将文本图层添加到地图</span></span>
<span class="line"><span style="color:#6A737D;">    olMap.addLayer(vectorLayer);</span></span>
<span class="line"><span style="color:#6A737D;">  }); */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* // 创建测距工具</span></span>
<span class="line"><span style="color:#6A737D;">  var measure = new Draw({</span></span>
<span class="line"><span style="color:#6A737D;">    source: new VectorLayer(),</span></span>
<span class="line"><span style="color:#6A737D;">    type: &#39;LineString&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">    style: new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      fill: new Fill({ color: &#39;rgba(255, 255, 255, 0.2)&#39; }),</span></span>
<span class="line"><span style="color:#6A737D;">      stroke: new Stroke({ color: &#39;rgba(0, 0, 0, 0.5)&#39;, width: 2 })</span></span>
<span class="line"><span style="color:#6A737D;">    })</span></span>
<span class="line"><span style="color:#6A737D;">  });</span></span>
<span class="line"><span style="color:#6A737D;">  // 添加测距工具到地图</span></span>
<span class="line"><span style="color:#6A737D;">  olMap.addInteraction(measure);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  measure.on(&#39;drawend&#39;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">    const line = event.feature.getGeometry();</span></span>
<span class="line"><span style="color:#6A737D;">    const length = getLength(line);</span></span>
<span class="line"><span style="color:#6A737D;">    console.log(&#39;Line length: &#39; + length + &#39; meters&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在测距工具容器中显示长度</span></span>
<span class="line"><span style="color:#6A737D;">    // document.getElementById(&#39;measure&#39;).innerHTML += &#39;&lt;p&gt;&#39; + length.toFixed(2) + &#39; meters&lt;/p&gt;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 清空已绘制的要素</span></span>
<span class="line"><span style="color:#6A737D;">    // source.clear();</span></span>
<span class="line"><span style="color:#6A737D;">  }); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 监听地图单击事件，用于删除测距工具绘制的要素</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* olMap.on(&#39;click&#39;, function (event) {</span></span>
<span class="line"><span style="color:#6A737D;">    var feature = olMap.forEachFeatureAtPixel(event.pixel, function (feature, layer) {</span></span>
<span class="line"><span style="color:#6A737D;">      return feature;</span></span>
<span class="line"><span style="color:#6A737D;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    if (feature) {</span></span>
<span class="line"><span style="color:#6A737D;">      // source.removeFeature(feature);</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">  }); */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* // 监听绘制结束事件</span></span>
<span class="line"><span style="color:#6A737D;">  measure.on(&#39;drawend&#39;, function (event) {</span></span>
<span class="line"><span style="color:#6A737D;">    var geometry = event.feature.getGeometry();</span></span>
<span class="line"><span style="color:#6A737D;">    var coordinates = geometry.getCoordinates();</span></span>
<span class="line"><span style="color:#6A737D;">    var length = getLength(coordinates);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 在测距工具容器中显示长度</span></span>
<span class="line"><span style="color:#6A737D;">    document.getElementById(&#39;measure&#39;).innerHTML += &#39;&lt;p&gt;&#39; + length.toFixed(2) + &#39; meters&lt;/p&gt;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 清空已绘制的要素</span></span>
<span class="line"><span style="color:#6A737D;">    source.clear();</span></span>
<span class="line"><span style="color:#6A737D;">  }); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* const vectorLayer = new VectorLayer({</span></span>
<span class="line"><span style="color:#6A737D;">    source: new VectorSource(),</span></span>
<span class="line"><span style="color:#6A737D;">    style: new Style({</span></span>
<span class="line"><span style="color:#6A737D;">      fill: new Fill({</span></span>
<span class="line"><span style="color:#6A737D;">        color: &#39;rgba(255, 255, 255, 0.2)&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">      stroke: new Stroke({</span></span>
<span class="line"><span style="color:#6A737D;">        color: &#39;#ffcc33&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        width: 2,</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">      image: new CircleStyle({</span></span>
<span class="line"><span style="color:#6A737D;">        radius: 7,</span></span>
<span class="line"><span style="color:#6A737D;">        fill: new Fill({</span></span>
<span class="line"><span style="color:#6A737D;">          color: &#39;#ffcc33&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">        }),</span></span>
<span class="line"><span style="color:#6A737D;">      }),</span></span>
<span class="line"><span style="color:#6A737D;">    }),</span></span>
<span class="line"><span style="color:#6A737D;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  const draw = new Draw({</span></span>
<span class="line"><span style="color:#6A737D;">    source: vectorLayer.getSource(),</span></span>
<span class="line"><span style="color:#6A737D;">    type: &#39;LineString&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  olMap.addInteraction(draw);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  draw.on(&#39;drawend&#39;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">    const line = event.feature.getGeometry();</span></span>
<span class="line"><span style="color:#6A737D;">    const length = getLength(line);</span></span>
<span class="line"><span style="color:#6A737D;">    console.log(&#39;Line length: &#39; + length + &#39; meters&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">  }); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* let position = [[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]</span></span>
<span class="line"><span style="color:#6A737D;">  addArrowLine(olMap, position) */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打点测试</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setPointTest</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// fromLonLat([121.63, 29.88])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">features</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(e.coordinate); // 获取坐标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">iconFeature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    geometry: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Point</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">121.63</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">29.88</span><span style="color:#24292E;">])),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// name: count++,</span></span>
<span class="line"><span style="color:#24292E;">    location: </span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">121.63</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">29.88</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">style</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    image: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CircleStyle</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      radius: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      fill: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fill</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#f49d41&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">      stroke: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Stroke</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#836365&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        width: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  iconFeature.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(style);</span></span>
<span class="line"><span style="color:#24292E;">  features.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(iconFeature);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vectorSource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    features</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vectorLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source: vectorSource,</span></span>
<span class="line"><span style="color:#24292E;">    opacity: </span><span style="color:#005CC5;">0.8</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(vectorLayer);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除标注测试</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removePointTest</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">layers</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getLayers</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  layers.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (item </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">) olMap.</span><span style="color:#6F42C1;">removeLayer</span><span style="color:#24292E;">(item);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 点击打点测试</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clickSetPointTest</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">features</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(e.coordinate); // 获取坐标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">iconFeature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    geometry: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Point</span><span style="color:#24292E;">(e.coordinate),</span></span>
<span class="line"><span style="color:#24292E;">    name: count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    location: e.coordinate</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">style</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    image: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CircleStyle</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      radius: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      fill: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fill</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#f49d41&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">      stroke: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Stroke</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#836365&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        width: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  iconFeature.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(style);</span></span>
<span class="line"><span style="color:#24292E;">  features.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(iconFeature);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vectorSource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    features</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vectorLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source: vectorSource,</span></span>
<span class="line"><span style="color:#24292E;">    opacity: </span><span style="color:#005CC5;">0.8</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(vectorLayer);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 绘制扇形测试</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addCurveTest</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> origi_point </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">121.63</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">29.88</span><span style="color:#24292E;">]);  </span><span style="color:#6A737D;">// 绘制扇形的顶点</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> circle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRegularPolygonCurve</span><span style="color:#24292E;">(origi_point, </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">90</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 调用绘制扇形的方法得到扇形</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> feature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">(circle);  </span><span style="color:#6A737D;">// 把扇形加入 feature</span></span>
<span class="line"><span style="color:#24292E;">  feature.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(  </span><span style="color:#6A737D;">// 设置一下这个扇形的样式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      fill: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fill</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;rgba(32, 157, 230, 0.3)&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">      stroke: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Stroke</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;rgba(255, 205, 67, 0.3)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        width: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">  feature.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Curve&#39;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 这是给这个扇形添加额外的参数 ， 如果是设置id 用 setId方法</span></span>
<span class="line"><span style="color:#24292E;">  feature.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;curve&#39;</span><span style="color:#24292E;">, {   </span><span style="color:#6A737D;">// 这是给这个扇形添加额外的参数，这里的id和 setId的id没关系</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;测试001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    msg: </span><span style="color:#032F62;">&#39;测试001-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    msg2: </span><span style="color:#032F62;">&#39;测试001-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建第二个扇形，和第一个一样</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> circle1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRegularPolygonCurve</span><span style="color:#24292E;">(origi_point, </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> feature1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">(circle1);</span></span>
<span class="line"><span style="color:#24292E;">  feature1.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      fill: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fill</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;rgba(32, 157, 230, 0.3)&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">      stroke: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Stroke</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;rgba(255, 205, 67, 0.3)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        width: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">  feature1.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Curve&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  feature1.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;curve&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;超级无敌炫酷爆龙战神&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    msg: </span><span style="color:#032F62;">&#39;超级无敌炫酷爆龙战神 描述001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    msg2: </span><span style="color:#032F62;">&#39;超级无敌炫酷爆龙战神 描述002&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> vectorSource </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">// 创建一个数据源</span></span>
<span class="line"><span style="color:#24292E;">  vectorSource.</span><span style="color:#6F42C1;">addFeatures</span><span style="color:#24292E;">([feature, feature1]);   </span><span style="color:#6A737D;">// 把两个扇形加进数据源</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> vectorLayer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({     </span><span style="color:#6A737D;">// 创建一个图层，把数据源加进图层</span></span>
<span class="line"><span style="color:#24292E;">    source: vectorSource</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(vectorLayer);   </span><span style="color:#6A737D;">// 把图层加进地图</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 绘制圆测试</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">addCircleTest</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">, </span><span style="color:#E36209;">circleList</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> features </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  circleList.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> feature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&quot;Circle&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      title: item.name,</span></span>
<span class="line"><span style="color:#24292E;">      geometry: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Circle</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">fromLonLat</span><span style="color:#24292E;">(item.site), </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    feature.</span><span style="color:#6F42C1;">setStyle</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Style</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        fill: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fill</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&#39;rgba(32, 157, 230, 1)&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">    features.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(feature)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> source </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorSource</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  source.</span><span style="color:#6F42C1;">addFeatures</span><span style="color:#24292E;">(features)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> layer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    opacity: </span><span style="color:#005CC5;">0.2</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  layer.</span><span style="color:#6F42C1;">setSource</span><span style="color:#24292E;">(source)</span></span>
<span class="line"><span style="color:#24292E;">  olMap.</span><span style="color:#6F42C1;">addLayer</span><span style="color:#24292E;">(layer)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取所有要素测试</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAllFeatureTest</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">olMap</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> layers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> olMap.</span><span style="color:#6F42C1;">getLayers</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getArray</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  layers.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (item </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VectorLayer</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentFeature </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item.</span><span style="color:#6F42C1;">getSource</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getFeatures</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(currentFeature[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br><span class="line-number">535</span><br><span class="line-number">536</span><br><span class="line-number">537</span><br><span class="line-number">538</span><br><span class="line-number">539</span><br><span class="line-number">540</span><br><span class="line-number">541</span><br><span class="line-number">542</span><br><span class="line-number">543</span><br><span class="line-number">544</span><br><span class="line-number">545</span><br><span class="line-number">546</span><br><span class="line-number">547</span><br><span class="line-number">548</span><br><span class="line-number">549</span><br><span class="line-number">550</span><br><span class="line-number">551</span><br><span class="line-number">552</span><br><span class="line-number">553</span><br><span class="line-number">554</span><br><span class="line-number">555</span><br><span class="line-number">556</span><br><span class="line-number">557</span><br><span class="line-number">558</span><br><span class="line-number">559</span><br><span class="line-number">560</span><br><span class="line-number">561</span><br><span class="line-number">562</span><br><span class="line-number">563</span><br><span class="line-number">564</span><br><span class="line-number">565</span><br><span class="line-number">566</span><br><span class="line-number">567</span><br><span class="line-number">568</span><br><span class="line-number">569</span><br><span class="line-number">570</span><br><span class="line-number">571</span><br><span class="line-number">572</span><br><span class="line-number">573</span><br><span class="line-number">574</span><br><span class="line-number">575</span><br><span class="line-number">576</span><br><span class="line-number">577</span><br><span class="line-number">578</span><br><span class="line-number">579</span><br><span class="line-number">580</span><br><span class="line-number">581</span><br><span class="line-number">582</span><br><span class="line-number">583</span><br><span class="line-number">584</span><br><span class="line-number">585</span><br><span class="line-number">586</span><br><span class="line-number">587</span><br><span class="line-number">588</span><br><span class="line-number">589</span><br><span class="line-number">590</span><br><span class="line-number">591</span><br><span class="line-number">592</span><br><span class="line-number">593</span><br><span class="line-number">594</span><br><span class="line-number">595</span><br><span class="line-number">596</span><br><span class="line-number">597</span><br><span class="line-number">598</span><br><span class="line-number">599</span><br><span class="line-number">600</span><br><span class="line-number">601</span><br><span class="line-number">602</span><br><span class="line-number">603</span><br><span class="line-number">604</span><br><span class="line-number">605</span><br><span class="line-number">606</span><br><span class="line-number">607</span><br><span class="line-number">608</span><br><span class="line-number">609</span><br><span class="line-number">610</span><br><span class="line-number">611</span><br><span class="line-number">612</span><br><span class="line-number">613</span><br><span class="line-number">614</span><br><span class="line-number">615</span><br><span class="line-number">616</span><br><span class="line-number">617</span><br><span class="line-number">618</span><br><span class="line-number">619</span><br><span class="line-number">620</span><br><span class="line-number">621</span><br><span class="line-number">622</span><br><span class="line-number">623</span><br><span class="line-number">624</span><br><span class="line-number">625</span><br><span class="line-number">626</span><br><span class="line-number">627</span><br><span class="line-number">628</span><br><span class="line-number">629</span><br><span class="line-number">630</span><br><span class="line-number">631</span><br><span class="line-number">632</span><br><span class="line-number">633</span><br><span class="line-number">634</span><br><span class="line-number">635</span><br><span class="line-number">636</span><br><span class="line-number">637</span><br><span class="line-number">638</span><br><span class="line-number">639</span><br><span class="line-number">640</span><br><span class="line-number">641</span><br><span class="line-number">642</span><br><span class="line-number">643</span><br><span class="line-number">644</span><br><span class="line-number">645</span><br><span class="line-number">646</span><br><span class="line-number">647</span><br><span class="line-number">648</span><br><span class="line-number">649</span><br><span class="line-number">650</span><br><span class="line-number">651</span><br><span class="line-number">652</span><br><span class="line-number">653</span><br><span class="line-number">654</span><br><span class="line-number">655</span><br><span class="line-number">656</span><br><span class="line-number">657</span><br><span class="line-number">658</span><br><span class="line-number">659</span><br><span class="line-number">660</span><br><span class="line-number">661</span><br><span class="line-number">662</span><br><span class="line-number">663</span><br><span class="line-number">664</span><br><span class="line-number">665</span><br><span class="line-number">666</span><br><span class="line-number">667</span><br><span class="line-number">668</span><br><span class="line-number">669</span><br><span class="line-number">670</span><br><span class="line-number">671</span><br><span class="line-number">672</span><br><span class="line-number">673</span><br><span class="line-number">674</span><br><span class="line-number">675</span><br><span class="line-number">676</span><br><span class="line-number">677</span><br><span class="line-number">678</span><br><span class="line-number">679</span><br><span class="line-number">680</span><br><span class="line-number">681</span><br><span class="line-number">682</span><br><span class="line-number">683</span><br><span class="line-number">684</span><br><span class="line-number">685</span><br><span class="line-number">686</span><br><span class="line-number">687</span><br><span class="line-number">688</span><br><span class="line-number">689</span><br><span class="line-number">690</span><br><span class="line-number">691</span><br><span class="line-number">692</span><br><span class="line-number">693</span><br><span class="line-number">694</span><br><span class="line-number">695</span><br><span class="line-number">696</span><br><span class="line-number">697</span><br><span class="line-number">698</span><br><span class="line-number">699</span><br><span class="line-number">700</span><br><span class="line-number">701</span><br><span class="line-number">702</span><br><span class="line-number">703</span><br><span class="line-number">704</span><br><span class="line-number">705</span><br><span class="line-number">706</span><br><span class="line-number">707</span><br><span class="line-number">708</span><br><span class="line-number">709</span><br><span class="line-number">710</span><br><span class="line-number">711</span><br><span class="line-number">712</span><br><span class="line-number">713</span><br><span class="line-number">714</span><br><span class="line-number">715</span><br><span class="line-number">716</span><br><span class="line-number">717</span><br><span class="line-number">718</span><br><span class="line-number">719</span><br><span class="line-number">720</span><br><span class="line-number">721</span><br><span class="line-number">722</span><br><span class="line-number">723</span><br><span class="line-number">724</span><br><span class="line-number">725</span><br><span class="line-number">726</span><br><span class="line-number">727</span><br><span class="line-number">728</span><br><span class="line-number">729</span><br><span class="line-number">730</span><br><span class="line-number">731</span><br><span class="line-number">732</span><br><span class="line-number">733</span><br><span class="line-number">734</span><br><span class="line-number">735</span><br><span class="line-number">736</span><br><span class="line-number">737</span><br><span class="line-number">738</span><br><span class="line-number">739</span><br><span class="line-number">740</span><br><span class="line-number">741</span><br><span class="line-number">742</span><br><span class="line-number">743</span><br><span class="line-number">744</span><br><span class="line-number">745</span><br><span class="line-number">746</span><br><span class="line-number">747</span><br><span class="line-number">748</span><br><span class="line-number">749</span><br><span class="line-number">750</span><br><span class="line-number">751</span><br><span class="line-number">752</span><br><span class="line-number">753</span><br><span class="line-number">754</span><br><span class="line-number">755</span><br><span class="line-number">756</span><br><span class="line-number">757</span><br><span class="line-number">758</span><br><span class="line-number">759</span><br><span class="line-number">760</span><br><span class="line-number">761</span><br><span class="line-number">762</span><br><span class="line-number">763</span><br><span class="line-number">764</span><br><span class="line-number">765</span><br><span class="line-number">766</span><br><span class="line-number">767</span><br><span class="line-number">768</span><br><span class="line-number">769</span><br><span class="line-number">770</span><br><span class="line-number">771</span><br><span class="line-number">772</span><br><span class="line-number">773</span><br><span class="line-number">774</span><br><span class="line-number">775</span><br><span class="line-number">776</span><br><span class="line-number">777</span><br><span class="line-number">778</span><br><span class="line-number">779</span><br><span class="line-number">780</span><br><span class="line-number">781</span><br><span class="line-number">782</span><br><span class="line-number">783</span><br><span class="line-number">784</span><br><span class="line-number">785</span><br><span class="line-number">786</span><br><span class="line-number">787</span><br><span class="line-number">788</span><br><span class="line-number">789</span><br><span class="line-number">790</span><br><span class="line-number">791</span><br><span class="line-number">792</span><br><span class="line-number">793</span><br><span class="line-number">794</span><br><span class="line-number">795</span><br><span class="line-number">796</span><br><span class="line-number">797</span><br><span class="line-number">798</span><br><span class="line-number">799</span><br><span class="line-number">800</span><br><span class="line-number">801</span><br><span class="line-number">802</span><br><span class="line-number">803</span><br><span class="line-number">804</span><br><span class="line-number">805</span><br><span class="line-number">806</span><br><span class="line-number">807</span><br><span class="line-number">808</span><br><span class="line-number">809</span><br><span class="line-number">810</span><br><span class="line-number">811</span><br><span class="line-number">812</span><br><span class="line-number">813</span><br><span class="line-number">814</span><br><span class="line-number">815</span><br><span class="line-number">816</span><br><span class="line-number">817</span><br><span class="line-number">818</span><br><span class="line-number">819</span><br><span class="line-number">820</span><br><span class="line-number">821</span><br><span class="line-number">822</span><br><span class="line-number">823</span><br><span class="line-number">824</span><br><span class="line-number">825</span><br><span class="line-number">826</span><br><span class="line-number">827</span><br><span class="line-number">828</span><br><span class="line-number">829</span><br><span class="line-number">830</span><br><span class="line-number">831</span><br><span class="line-number">832</span><br><span class="line-number">833</span><br><span class="line-number">834</span><br><span class="line-number">835</span><br><span class="line-number">836</span><br><span class="line-number">837</span><br><span class="line-number">838</span><br><span class="line-number">839</span><br><span class="line-number">840</span><br><span class="line-number">841</span><br><span class="line-number">842</span><br><span class="line-number">843</span><br><span class="line-number">844</span><br><span class="line-number">845</span><br><span class="line-number">846</span><br><span class="line-number">847</span><br><span class="line-number">848</span><br><span class="line-number">849</span><br><span class="line-number">850</span><br><span class="line-number">851</span><br><span class="line-number">852</span><br><span class="line-number">853</span><br><span class="line-number">854</span><br><span class="line-number">855</span><br><span class="line-number">856</span><br><span class="line-number">857</span><br><span class="line-number">858</span><br><span class="line-number">859</span><br><span class="line-number">860</span><br><span class="line-number">861</span><br><span class="line-number">862</span><br><span class="line-number">863</span><br><span class="line-number">864</span><br><span class="line-number">865</span><br><span class="line-number">866</span><br><span class="line-number">867</span><br><span class="line-number">868</span><br><span class="line-number">869</span><br><span class="line-number">870</span><br><span class="line-number">871</span><br><span class="line-number">872</span><br><span class="line-number">873</span><br><span class="line-number">874</span><br><span class="line-number">875</span><br><span class="line-number">876</span><br><span class="line-number">877</span><br><span class="line-number">878</span><br><span class="line-number">879</span><br><span class="line-number">880</span><br><span class="line-number">881</span><br><span class="line-number">882</span><br><span class="line-number">883</span><br><span class="line-number">884</span><br><span class="line-number">885</span><br><span class="line-number">886</span><br><span class="line-number">887</span><br><span class="line-number">888</span><br><span class="line-number">889</span><br><span class="line-number">890</span><br><span class="line-number">891</span><br><span class="line-number">892</span><br><span class="line-number">893</span><br><span class="line-number">894</span><br><span class="line-number">895</span><br><span class="line-number">896</span><br><span class="line-number">897</span><br><span class="line-number">898</span><br><span class="line-number">899</span><br><span class="line-number">900</span><br><span class="line-number">901</span><br><span class="line-number">902</span><br><span class="line-number">903</span><br><span class="line-number">904</span><br><span class="line-number">905</span><br><span class="line-number">906</span><br><span class="line-number">907</span><br><span class="line-number">908</span><br><span class="line-number">909</span><br><span class="line-number">910</span><br><span class="line-number">911</span><br><span class="line-number">912</span><br><span class="line-number">913</span><br><span class="line-number">914</span><br><span class="line-number">915</span><br><span class="line-number">916</span><br><span class="line-number">917</span><br><span class="line-number">918</span><br><span class="line-number">919</span><br><span class="line-number">920</span><br><span class="line-number">921</span><br><span class="line-number">922</span><br><span class="line-number">923</span><br><span class="line-number">924</span><br><span class="line-number">925</span><br><span class="line-number">926</span><br><span class="line-number">927</span><br><span class="line-number">928</span><br><span class="line-number">929</span><br><span class="line-number">930</span><br><span class="line-number">931</span><br><span class="line-number">932</span><br><span class="line-number">933</span><br><span class="line-number">934</span><br><span class="line-number">935</span><br><span class="line-number">936</span><br><span class="line-number">937</span><br><span class="line-number">938</span><br><span class="line-number">939</span><br><span class="line-number">940</span><br><span class="line-number">941</span><br><span class="line-number">942</span><br><span class="line-number">943</span><br><span class="line-number">944</span><br><span class="line-number">945</span><br><span class="line-number">946</span><br><span class="line-number">947</span><br><span class="line-number">948</span><br><span class="line-number">949</span><br><span class="line-number">950</span><br><span class="line-number">951</span><br><span class="line-number">952</span><br><span class="line-number">953</span><br><span class="line-number">954</span><br><span class="line-number">955</span><br><span class="line-number">956</span><br><span class="line-number">957</span><br><span class="line-number">958</span><br><span class="line-number">959</span><br><span class="line-number">960</span><br><span class="line-number">961</span><br><span class="line-number">962</span><br><span class="line-number">963</span><br><span class="line-number">964</span><br><span class="line-number">965</span><br><span class="line-number">966</span><br><span class="line-number">967</span><br><span class="line-number">968</span><br><span class="line-number">969</span><br><span class="line-number">970</span><br><span class="line-number">971</span><br><span class="line-number">972</span><br><span class="line-number">973</span><br><span class="line-number">974</span><br><span class="line-number">975</span><br><span class="line-number">976</span><br><span class="line-number">977</span><br><span class="line-number">978</span><br><span class="line-number">979</span><br><span class="line-number">980</span><br><span class="line-number">981</span><br><span class="line-number">982</span><br><span class="line-number">983</span><br><span class="line-number">984</span><br><span class="line-number">985</span><br><span class="line-number">986</span><br><span class="line-number">987</span><br><span class="line-number">988</span><br><span class="line-number">989</span><br><span class="line-number">990</span><br><span class="line-number">991</span><br><span class="line-number">992</span><br><span class="line-number">993</span><br><span class="line-number">994</span><br><span class="line-number">995</span><br><span class="line-number">996</span><br><span class="line-number">997</span><br><span class="line-number">998</span><br><span class="line-number">999</span><br><span class="line-number">1000</span><br><span class="line-number">1001</span><br><span class="line-number">1002</span><br><span class="line-number">1003</span><br><span class="line-number">1004</span><br><span class="line-number">1005</span><br><span class="line-number">1006</span><br><span class="line-number">1007</span><br><span class="line-number">1008</span><br><span class="line-number">1009</span><br><span class="line-number">1010</span><br><span class="line-number">1011</span><br><span class="line-number">1012</span><br><span class="line-number">1013</span><br><span class="line-number">1014</span><br><span class="line-number">1015</span><br><span class="line-number">1016</span><br><span class="line-number">1017</span><br><span class="line-number">1018</span><br><span class="line-number">1019</span><br><span class="line-number">1020</span><br><span class="line-number">1021</span><br><span class="line-number">1022</span><br><span class="line-number">1023</span><br><span class="line-number">1024</span><br><span class="line-number">1025</span><br><span class="line-number">1026</span><br><span class="line-number">1027</span><br><span class="line-number">1028</span><br><span class="line-number">1029</span><br><span class="line-number">1030</span><br><span class="line-number">1031</span><br><span class="line-number">1032</span><br><span class="line-number">1033</span><br><span class="line-number">1034</span><br><span class="line-number">1035</span><br><span class="line-number">1036</span><br><span class="line-number">1037</span><br><span class="line-number">1038</span><br><span class="line-number">1039</span><br><span class="line-number">1040</span><br><span class="line-number">1041</span><br><span class="line-number">1042</span><br><span class="line-number">1043</span><br><span class="line-number">1044</span><br><span class="line-number">1045</span><br><span class="line-number">1046</span><br><span class="line-number">1047</span><br><span class="line-number">1048</span><br><span class="line-number">1049</span><br><span class="line-number">1050</span><br><span class="line-number">1051</span><br><span class="line-number">1052</span><br><span class="line-number">1053</span><br><span class="line-number">1054</span><br><span class="line-number">1055</span><br><span class="line-number">1056</span><br><span class="line-number">1057</span><br><span class="line-number">1058</span><br><span class="line-number">1059</span><br><span class="line-number">1060</span><br><span class="line-number">1061</span><br><span class="line-number">1062</span><br><span class="line-number">1063</span><br><span class="line-number">1064</span><br><span class="line-number">1065</span><br><span class="line-number">1066</span><br><span class="line-number">1067</span><br><span class="line-number">1068</span><br><span class="line-number">1069</span><br><span class="line-number">1070</span><br><span class="line-number">1071</span><br><span class="line-number">1072</span><br><span class="line-number">1073</span><br><span class="line-number">1074</span><br><span class="line-number">1075</span><br><span class="line-number">1076</span><br><span class="line-number">1077</span><br><span class="line-number">1078</span><br><span class="line-number">1079</span><br><span class="line-number">1080</span><br><span class="line-number">1081</span><br><span class="line-number">1082</span><br><span class="line-number">1083</span><br><span class="line-number">1084</span><br><span class="line-number">1085</span><br><span class="line-number">1086</span><br><span class="line-number">1087</span><br><span class="line-number">1088</span><br><span class="line-number">1089</span><br><span class="line-number">1090</span><br><span class="line-number">1091</span><br><span class="line-number">1092</span><br><span class="line-number">1093</span><br><span class="line-number">1094</span><br><span class="line-number">1095</span><br><span class="line-number">1096</span><br><span class="line-number">1097</span><br><span class="line-number">1098</span><br><span class="line-number">1099</span><br><span class="line-number">1100</span><br><span class="line-number">1101</span><br><span class="line-number">1102</span><br><span class="line-number">1103</span><br><span class="line-number">1104</span><br><span class="line-number">1105</span><br><span class="line-number">1106</span><br><span class="line-number">1107</span><br><span class="line-number">1108</span><br><span class="line-number">1109</span><br><span class="line-number">1110</span><br><span class="line-number">1111</span><br><span class="line-number">1112</span><br><span class="line-number">1113</span><br><span class="line-number">1114</span><br><span class="line-number">1115</span><br><span class="line-number">1116</span><br><span class="line-number">1117</span><br><span class="line-number">1118</span><br><span class="line-number">1119</span><br><span class="line-number">1120</span><br><span class="line-number">1121</span><br><span class="line-number">1122</span><br><span class="line-number">1123</span><br><span class="line-number">1124</span><br><span class="line-number">1125</span><br><span class="line-number">1126</span><br><span class="line-number">1127</span><br><span class="line-number">1128</span><br><span class="line-number">1129</span><br><span class="line-number">1130</span><br><span class="line-number">1131</span><br><span class="line-number">1132</span><br><span class="line-number">1133</span><br><span class="line-number">1134</span><br><span class="line-number">1135</span><br><span class="line-number">1136</span><br><span class="line-number">1137</span><br><span class="line-number">1138</span><br><span class="line-number">1139</span><br><span class="line-number">1140</span><br><span class="line-number">1141</span><br><span class="line-number">1142</span><br><span class="line-number">1143</span><br><span class="line-number">1144</span><br><span class="line-number">1145</span><br><span class="line-number">1146</span><br><span class="line-number">1147</span><br><span class="line-number">1148</span><br><span class="line-number">1149</span><br><span class="line-number">1150</span><br><span class="line-number">1151</span><br><span class="line-number">1152</span><br><span class="line-number">1153</span><br><span class="line-number">1154</span><br><span class="line-number">1155</span><br><span class="line-number">1156</span><br><span class="line-number">1157</span><br><span class="line-number">1158</span><br><span class="line-number">1159</span><br><span class="line-number">1160</span><br><span class="line-number">1161</span><br><span class="line-number">1162</span><br><span class="line-number">1163</span><br><span class="line-number">1164</span><br><span class="line-number">1165</span><br><span class="line-number">1166</span><br><span class="line-number">1167</span><br><span class="line-number">1168</span><br><span class="line-number">1169</span><br><span class="line-number">1170</span><br><span class="line-number">1171</span><br><span class="line-number">1172</span><br><span class="line-number">1173</span><br><span class="line-number">1174</span><br><span class="line-number">1175</span><br><span class="line-number">1176</span><br><span class="line-number">1177</span><br><span class="line-number">1178</span><br><span class="line-number">1179</span><br><span class="line-number">1180</span><br><span class="line-number">1181</span><br><span class="line-number">1182</span><br><span class="line-number">1183</span><br><span class="line-number">1184</span><br><span class="line-number">1185</span><br><span class="line-number">1186</span><br><span class="line-number">1187</span><br><span class="line-number">1188</span><br><span class="line-number">1189</span><br><span class="line-number">1190</span><br><span class="line-number">1191</span><br><span class="line-number">1192</span><br><span class="line-number">1193</span><br><span class="line-number">1194</span><br><span class="line-number">1195</span><br><span class="line-number">1196</span><br><span class="line-number">1197</span><br><span class="line-number">1198</span><br><span class="line-number">1199</span><br><span class="line-number">1200</span><br><span class="line-number">1201</span><br><span class="line-number">1202</span><br><span class="line-number">1203</span><br><span class="line-number">1204</span><br><span class="line-number">1205</span><br><span class="line-number">1206</span><br><span class="line-number">1207</span><br><span class="line-number">1208</span><br><span class="line-number">1209</span><br><span class="line-number">1210</span><br><span class="line-number">1211</span><br><span class="line-number">1212</span><br><span class="line-number">1213</span><br><span class="line-number">1214</span><br><span class="line-number">1215</span><br><span class="line-number">1216</span><br><span class="line-number">1217</span><br><span class="line-number">1218</span><br><span class="line-number">1219</span><br><span class="line-number">1220</span><br><span class="line-number">1221</span><br><span class="line-number">1222</span><br><span class="line-number">1223</span><br><span class="line-number">1224</span><br><span class="line-number">1225</span><br><span class="line-number">1226</span><br><span class="line-number">1227</span><br><span class="line-number">1228</span><br><span class="line-number">1229</span><br><span class="line-number">1230</span><br><span class="line-number">1231</span><br><span class="line-number">1232</span><br><span class="line-number">1233</span><br><span class="line-number">1234</span><br><span class="line-number">1235</span><br><span class="line-number">1236</span><br><span class="line-number">1237</span><br><span class="line-number">1238</span><br><span class="line-number">1239</span><br><span class="line-number">1240</span><br><span class="line-number">1241</span><br><span class="line-number">1242</span><br><span class="line-number">1243</span><br><span class="line-number">1244</span><br><span class="line-number">1245</span><br><span class="line-number">1246</span><br><span class="line-number">1247</span><br><span class="line-number">1248</span><br><span class="line-number">1249</span><br><span class="line-number">1250</span><br><span class="line-number">1251</span><br><span class="line-number">1252</span><br><span class="line-number">1253</span><br><span class="line-number">1254</span><br><span class="line-number">1255</span><br><span class="line-number">1256</span><br><span class="line-number">1257</span><br><span class="line-number">1258</span><br><span class="line-number">1259</span><br><span class="line-number">1260</span><br><span class="line-number">1261</span><br><span class="line-number">1262</span><br><span class="line-number">1263</span><br><span class="line-number">1264</span><br><span class="line-number">1265</span><br><span class="line-number">1266</span><br><span class="line-number">1267</span><br><span class="line-number">1268</span><br><span class="line-number">1269</span><br><span class="line-number">1270</span><br><span class="line-number">1271</span><br><span class="line-number">1272</span><br><span class="line-number">1273</span><br><span class="line-number">1274</span><br><span class="line-number">1275</span><br><span class="line-number">1276</span><br><span class="line-number">1277</span><br><span class="line-number">1278</span><br><span class="line-number">1279</span><br><span class="line-number">1280</span><br><span class="line-number">1281</span><br><span class="line-number">1282</span><br><span class="line-number">1283</span><br><span class="line-number">1284</span><br><span class="line-number">1285</span><br><span class="line-number">1286</span><br><span class="line-number">1287</span><br><span class="line-number">1288</span><br><span class="line-number">1289</span><br><span class="line-number">1290</span><br><span class="line-number">1291</span><br><span class="line-number">1292</span><br><span class="line-number">1293</span><br><span class="line-number">1294</span><br><span class="line-number">1295</span><br><span class="line-number">1296</span><br><span class="line-number">1297</span><br><span class="line-number">1298</span><br><span class="line-number">1299</span><br><span class="line-number">1300</span><br><span class="line-number">1301</span><br><span class="line-number">1302</span><br><span class="line-number">1303</span><br><span class="line-number">1304</span><br><span class="line-number">1305</span><br><span class="line-number">1306</span><br><span class="line-number">1307</span><br><span class="line-number">1308</span><br><span class="line-number">1309</span><br><span class="line-number">1310</span><br><span class="line-number">1311</span><br><span class="line-number">1312</span><br><span class="line-number">1313</span><br><span class="line-number">1314</span><br><span class="line-number">1315</span><br><span class="line-number">1316</span><br><span class="line-number">1317</span><br><span class="line-number">1318</span><br><span class="line-number">1319</span><br><span class="line-number">1320</span><br><span class="line-number">1321</span><br><span class="line-number">1322</span><br><span class="line-number">1323</span><br><span class="line-number">1324</span><br><span class="line-number">1325</span><br><span class="line-number">1326</span><br><span class="line-number">1327</span><br><span class="line-number">1328</span><br><span class="line-number">1329</span><br><span class="line-number">1330</span><br><span class="line-number">1331</span><br><span class="line-number">1332</span><br><span class="line-number">1333</span><br><span class="line-number">1334</span><br><span class="line-number">1335</span><br><span class="line-number">1336</span><br><span class="line-number">1337</span><br><span class="line-number">1338</span><br><span class="line-number">1339</span><br><span class="line-number">1340</span><br><span class="line-number">1341</span><br><span class="line-number">1342</span><br><span class="line-number">1343</span><br><span class="line-number">1344</span><br><span class="line-number">1345</span><br><span class="line-number">1346</span><br><span class="line-number">1347</span><br><span class="line-number">1348</span><br><span class="line-number">1349</span><br><span class="line-number">1350</span><br><span class="line-number">1351</span><br><span class="line-number">1352</span><br><span class="line-number">1353</span><br><span class="line-number">1354</span><br><span class="line-number">1355</span><br><span class="line-number">1356</span><br><span class="line-number">1357</span><br><span class="line-number">1358</span><br><span class="line-number">1359</span><br><span class="line-number">1360</span><br><span class="line-number">1361</span><br><span class="line-number">1362</span><br><span class="line-number">1363</span><br><span class="line-number">1364</span><br><span class="line-number">1365</span><br><span class="line-number">1366</span><br><span class="line-number">1367</span><br><span class="line-number">1368</span><br><span class="line-number">1369</span><br><span class="line-number">1370</span><br><span class="line-number">1371</span><br><span class="line-number">1372</span><br><span class="line-number">1373</span><br><span class="line-number">1374</span><br><span class="line-number">1375</span><br><span class="line-number">1376</span><br><span class="line-number">1377</span><br><span class="line-number">1378</span><br><span class="line-number">1379</span><br><span class="line-number">1380</span><br><span class="line-number">1381</span><br><span class="line-number">1382</span><br><span class="line-number">1383</span><br><span class="line-number">1384</span><br><span class="line-number">1385</span><br><span class="line-number">1386</span><br><span class="line-number">1387</span><br><span class="line-number">1388</span><br><span class="line-number">1389</span><br><span class="line-number">1390</span><br><span class="line-number">1391</span><br><span class="line-number">1392</span><br><span class="line-number">1393</span><br><span class="line-number">1394</span><br><span class="line-number">1395</span><br><span class="line-number">1396</span><br><span class="line-number">1397</span><br><span class="line-number">1398</span><br><span class="line-number">1399</span><br><span class="line-number">1400</span><br><span class="line-number">1401</span><br><span class="line-number">1402</span><br><span class="line-number">1403</span><br><span class="line-number">1404</span><br><span class="line-number">1405</span><br><span class="line-number">1406</span><br><span class="line-number">1407</span><br><span class="line-number">1408</span><br><span class="line-number">1409</span><br><span class="line-number">1410</span><br><span class="line-number">1411</span><br><span class="line-number">1412</span><br><span class="line-number">1413</span><br><span class="line-number">1414</span><br><span class="line-number">1415</span><br><span class="line-number">1416</span><br><span class="line-number">1417</span><br><span class="line-number">1418</span><br><span class="line-number">1419</span><br><span class="line-number">1420</span><br><span class="line-number">1421</span><br><span class="line-number">1422</span><br><span class="line-number">1423</span><br><span class="line-number">1424</span><br><span class="line-number">1425</span><br><span class="line-number">1426</span><br><span class="line-number">1427</span><br><span class="line-number">1428</span><br><span class="line-number">1429</span><br><span class="line-number">1430</span><br><span class="line-number">1431</span><br><span class="line-number">1432</span><br><span class="line-number">1433</span><br><span class="line-number">1434</span><br><span class="line-number">1435</span><br><span class="line-number">1436</span><br><span class="line-number">1437</span><br><span class="line-number">1438</span><br><span class="line-number">1439</span><br><span class="line-number">1440</span><br><span class="line-number">1441</span><br><span class="line-number">1442</span><br><span class="line-number">1443</span><br><span class="line-number">1444</span><br><span class="line-number">1445</span><br><span class="line-number">1446</span><br><span class="line-number">1447</span><br><span class="line-number">1448</span><br><span class="line-number">1449</span><br><span class="line-number">1450</span><br><span class="line-number">1451</span><br><span class="line-number">1452</span><br><span class="line-number">1453</span><br><span class="line-number">1454</span><br><span class="line-number">1455</span><br><span class="line-number">1456</span><br><span class="line-number">1457</span><br><span class="line-number">1458</span><br><span class="line-number">1459</span><br><span class="line-number">1460</span><br><span class="line-number">1461</span><br><span class="line-number">1462</span><br><span class="line-number">1463</span><br></div></div>`,2),e=[o];function c(r,t,E,y,i,b){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
