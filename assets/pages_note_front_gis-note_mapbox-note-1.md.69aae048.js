import{_ as s,o as n,c as a,e as l}from"./app.1d3e5273.js";const m=JSON.parse('{"title":"mapbox工作积累","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/gis-note/mapbox-note-1.md","filePath":"pages/note/front/gis-note/mapbox-note-1.md","lastUpdated":1716969580000}'),p={name:"pages/note/front/gis-note/mapbox-note-1.md"},o=l(`<h1 id="mapbox工作积累" tabindex="-1">mapbox工作积累 <a class="header-anchor" href="#mapbox工作积累" aria-label="Permalink to &quot;mapbox工作积累&quot;">​</a></h1><h2 id="重置地图" tabindex="-1">重置地图 <a class="header-anchor" href="#重置地图" aria-label="Permalink to &quot;重置地图&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 移除所有标注</span></span>
<span class="line"><span style="color:#B392F0;">removeAllMarker</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&quot;移除所有标注&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 清除气泡</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removePopup</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 清除标注</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> markerList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.map_marker&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(markerList)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(markerList.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> markerParentNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> markerList[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].parentNode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    markerList.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">        markerParentNode.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 移除气泡</span></span>
<span class="line"><span style="color:#B392F0;">removePopup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> mapNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#glMap&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(mapNode)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> popupNode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.maplibregl-popup&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(popupNode.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mapNode.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(popupNode[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 重置地图</span></span>
<span class="line"><span style="color:#B392F0;">resetMap</span><span style="color:#E1E4E8;">(next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">removeAllMarker</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 移除所有标注</span></span>
<span class="line"><span style="color:#6F42C1;">removeAllMarker</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&quot;移除所有标注&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 清除气泡</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">removePopup</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 清除标注</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> markerList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.map_marker&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(markerList)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(markerList.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> markerParentNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> markerList[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].parentNode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    markerList.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(item)</span></span>
<span class="line"><span style="color:#24292E;">        markerParentNode.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(item)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 移除气泡</span></span>
<span class="line"><span style="color:#6F42C1;">removePopup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> mapNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#glMap&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(mapNode)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> popupNode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.maplibregl-popup&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(popupNode.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        mapNode.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(popupNode[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 重置地图</span></span>
<span class="line"><span style="color:#6F42C1;">resetMap</span><span style="color:#24292E;">(next) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">removeAllMarker</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(next) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="初始化地图" tabindex="-1">初始化地图 <a class="header-anchor" href="#初始化地图" aria-label="Permalink to &quot;初始化地图&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#B392F0;">initMapConfig</span><span style="color:#E1E4E8;">(next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resetMap</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(&#39;开始打点&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">        mapUtils.</span><span style="color:#B392F0;">setMapConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap)  </span><span style="color:#6A737D;">// 地图配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">glmapEvent</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">// 绑定事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 绑定点击事件</span></span>
<span class="line"><span style="color:#B392F0;">glmapEvent</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 首页地图点击</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">indexMapClick</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// reload</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;load&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 设置图片标注 </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 配置标注</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">lonlat</span><span style="color:#6A737D;"> 经纬度  [120.5, 30]</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">mapPopup</span><span style="color:#6A737D;">  气泡</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">markerClass</span><span style="color:#6A737D;">  标注样式</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">setMarkerConfig</span><span style="color:#E1E4E8;">(lonlat, mapPopup, markerClass, isTab</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, item) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> popup </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mapUtils.</span><span style="color:#B392F0;">setPopupCommon</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap, lonlat, mapPopup)  </span><span style="color:#6A737D;">// 气泡</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> el </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.className </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`map_marker \${</span><span style="color:#E1E4E8;">markerClass</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(isTab) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    el.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;getMarkerData&#39;</span><span style="color:#E1E4E8;">, item)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置标注</span></span>
<span class="line"><span style="color:#E1E4E8;">    mapUtils.</span><span style="color:#B392F0;">setMarkerCommon</span><span style="color:#E1E4E8;">(el, lonlat, popup, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.glMap)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 初始化地图</span></span>
<span class="line"><span style="color:#6F42C1;">initMapConfig</span><span style="color:#24292E;">(next) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resetMap</span><span style="color:#24292E;">(()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(&#39;开始打点&#39;)</span></span>
<span class="line"><span style="color:#24292E;">        mapUtils.</span><span style="color:#6F42C1;">setMapConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap)  </span><span style="color:#6A737D;">// 地图配置</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">glmapEvent</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">// 绑定事件</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 绑定点击事件</span></span>
<span class="line"><span style="color:#6F42C1;">glmapEvent</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 首页地图点击</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">indexMapClick</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// reload</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;load&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 设置图片标注 </span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 配置标注</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">lonlat</span><span style="color:#6A737D;"> 经纬度  [120.5, 30]</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">mapPopup</span><span style="color:#6A737D;">  气泡</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{*}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">markerClass</span><span style="color:#6A737D;">  标注样式</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">setMarkerConfig</span><span style="color:#24292E;">(lonlat, mapPopup, markerClass, isTab</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, item) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> popup </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mapUtils.</span><span style="color:#6F42C1;">setPopupCommon</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap, lonlat, mapPopup)  </span><span style="color:#6A737D;">// 气泡</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> el </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    el.className </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`map_marker \${</span><span style="color:#24292E;">markerClass</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(isTab) {</span></span>
<span class="line"><span style="color:#24292E;">    el.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">e</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(item)</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;getMarkerData&#39;</span><span style="color:#24292E;">, item)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置标注</span></span>
<span class="line"><span style="color:#24292E;">    mapUtils.</span><span style="color:#6F42C1;">setMarkerCommon</span><span style="color:#24292E;">(el, lonlat, popup, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.glMap)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="mapbox封装" tabindex="-1">mapbox封装 <a class="header-anchor" href="#mapbox封装" aria-label="Permalink to &quot;mapbox封装&quot;">​</a></h2><ul><li>mapconfig</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">glMapConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">geoData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">center</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">zoom</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    container: id, </span><span style="color:#6A737D;">//容器的id</span></span>
<span class="line"><span style="color:#E1E4E8;">    center: center </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> center </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">120.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">29.25</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 初始位置，经度纬度 [lng, lat]</span></span>
<span class="line"><span style="color:#E1E4E8;">    zoom: zoom </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> zoom </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6.45</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 初始缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// minZoom: 6,</span></span>
<span class="line"><span style="color:#E1E4E8;">    pitch: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//抗锯齿</span></span>
<span class="line"><span style="color:#E1E4E8;">    style: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;sources&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 配置1内容，传入geojson</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">CITIES</span><span style="color:#E1E4E8;">]: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;geojson&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          data: geoData,</span></span>
<span class="line"><span style="color:#E1E4E8;">          generateId: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;layers&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 配置1内容-不带底图</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;city-shadow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;fill&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        source: </span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">CITIES</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        layout: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        paint: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;fill-color&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#0239A8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;fill-translate&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;fill-translate-anchor&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;viewport&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;city-shadow-light&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        source: </span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">CITIES</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        layout: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        paint: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;line-color&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#02FDFE&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;line-width&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;line-translate&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;line-translate-anchor&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;viewport&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 市</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#79B8FF;">LAYERS</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">STATE_FILL</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;fill&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        source: </span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">CITIES</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        layout: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        paint: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;fill-color&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;case&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            [</span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;feature-state&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hover&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;#26E3F0&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;#1151B1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 市界</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;city-borders&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        source: </span><span style="color:#79B8FF;">SOURCES</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">CITIES</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        layout: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        paint: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;line-color&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#1cccff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;line-width&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;line-opacity&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0.7</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">glMapConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">id</span><span style="color:#24292E;">, </span><span style="color:#E36209;">geoData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">center</span><span style="color:#24292E;">, </span><span style="color:#E36209;">zoom</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    container: id, </span><span style="color:#6A737D;">//容器的id</span></span>
<span class="line"><span style="color:#24292E;">    center: center </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> center </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">120.1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">29.25</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 初始位置，经度纬度 [lng, lat]</span></span>
<span class="line"><span style="color:#24292E;">    zoom: zoom </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> zoom </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6.45</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 初始缩放</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// minZoom: 6,</span></span>
<span class="line"><span style="color:#24292E;">    pitch: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    antialias: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//抗锯齿</span></span>
<span class="line"><span style="color:#24292E;">    style: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;sources&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 配置1内容，传入geojson</span></span>
<span class="line"><span style="color:#24292E;">        [</span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">CITIES</span><span style="color:#24292E;">]: {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;geojson&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          data: geoData,</span></span>
<span class="line"><span style="color:#24292E;">          generateId: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;layers&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 配置1内容-不带底图</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;city-shadow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;fill&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        source: </span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">CITIES</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        layout: {},</span></span>
<span class="line"><span style="color:#24292E;">        paint: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;fill-color&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#0239A8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;fill-translate&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;fill-translate-anchor&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;viewport&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;city-shadow-light&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        source: </span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">CITIES</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        layout: {},</span></span>
<span class="line"><span style="color:#24292E;">        paint: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;line-color&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#02FDFE&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;line-width&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;line-translate&#39;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;line-translate-anchor&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;viewport&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 市</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#005CC5;">LAYERS</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">STATE_FILL</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;fill&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        source: </span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">CITIES</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        layout: {},</span></span>
<span class="line"><span style="color:#24292E;">        paint: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;fill-color&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;case&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            [</span><span style="color:#032F62;">&#39;boolean&#39;</span><span style="color:#24292E;">, [</span><span style="color:#032F62;">&#39;feature-state&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;hover&#39;</span><span style="color:#24292E;">], </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;#26E3F0&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;#1151B1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 市界</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;city-borders&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        source: </span><span style="color:#005CC5;">SOURCES</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">CITIES</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        layout: {},</span></span>
<span class="line"><span style="color:#24292E;">        paint: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;line-color&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#1cccff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;line-width&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;line-opacity&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.7</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div><ul><li>mapUtils</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图相关工具方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> maplibregl </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maplibre-gl&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { glMapConfig, glMapConfigDev, glMapConfigTest3 } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./mapData/mapConfig&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> zhejiangIndexGeo </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./mapData/geoData/zhejiangIndex&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 首页浙江</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> zhejiangGeo </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./mapData/geoData/zhejiang&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 普通浙江</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> shanghaiGeo </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./mapData/geoData/shanghai&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 上海</span></span>
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
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { properties } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { name, centroid } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> properties</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">centroid) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            centroid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> properties.center</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> el </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        el.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`&lt;div class=&quot;title&quot;&gt;\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}&lt;/div&gt;\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        el.className </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`city-label \${</span><span style="color:#E1E4E8;">className</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是否需要定制化</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(isSet) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(el, item, name)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> maplibregl.</span><span style="color:#B392F0;">Marker</span><span style="color:#E1E4E8;">({ element: el, anchor: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">setLngLat</span><span style="color:#E1E4E8;">(centroid).</span><span style="color:#B392F0;">addTo</span><span style="color:#E1E4E8;">(map);</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 添加面和线图层</span></span>
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
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">: idName </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;source&#39;</span><span style="color:#E1E4E8;">: idName,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;layout&#39;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;layout&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;line-join&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;round&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;line-cap&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;round&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;paint&quot;</span><span style="color:#E1E4E8;">: { </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;line-color&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;line-width&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;line-dasharray&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 根据开发环境区分底图</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setMmapLayer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">geoData</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">center</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">zoom</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p<wbr>rocess.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapInitTool</span><span style="color:#E1E4E8;">(glMapConfigDev, geoData, center, zoom)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// return mapInitTool(glMapConfigDev, geoData, center, zoom)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mapInitTool</span><span style="color:#E1E4E8;">(glMapConfig, geoData, center, zoom)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图数据及渲染方法供出</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 首页浙江</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 地图初始化</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">zhejiangMapIndex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setMmapLayer</span><span style="color:#E1E4E8;">(zhejiangIndexGeo)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 渲染geoData</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderGeoToZheJiangIndex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">map</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 定制首页地图geojson</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">renderGeo</span><span style="color:#E1E4E8;">(zhejiangIndexGeo, map, </span><span style="color:#9ECBFF;">&#39;zhejiang_index&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(el, item, name)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;">(name) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;浙北&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">addMapLayer</span><span style="color:#E1E4E8;">(map, item, </span><span style="color:#9ECBFF;">&#39;zhebei&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#73BBBF&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">.4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;浙南&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">addMapLayer</span><span style="color:#E1E4E8;">(map, item, </span><span style="color:#9ECBFF;">&#39;zhenan&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#C29E35&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;浙西&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">addMapLayer</span><span style="color:#E1E4E8;">(map, item, </span><span style="color:#9ECBFF;">&#39;zhexi&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#7BAD84&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">.6</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;浙东&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">addMapLayer</span><span style="color:#E1E4E8;">(map, item, </span><span style="color:#9ECBFF;">&#39;zhedong&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#C6716D&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 标注点击事件</span></span>
<span class="line"><span style="color:#E1E4E8;">        el.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">e</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { textContent } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e.target</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// console.log(textContent)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 获取城市标注数据</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(textContent)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 上海</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shanghaiMap</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setMmapLayer</span><span style="color:#E1E4E8;">(shanghaiGeo, [</span><span style="color:#79B8FF;">121.4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">31.2</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">8.9</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderGeoToShangHai</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">map</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">renderGeo</span><span style="color:#E1E4E8;">(shanghaiGeo, map, </span><span style="color:#9ECBFF;">&#39;shanghai&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图相关工具方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> maplibregl </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maplibre-gl&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { glMapConfig, glMapConfigDev, glMapConfigTest3 } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./mapData/mapConfig&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> zhejiangIndexGeo </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./mapData/geoData/zhejiangIndex&#39;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 首页浙江</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> zhejiangGeo </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./mapData/geoData/zhejiang&#39;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 普通浙江</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> shanghaiGeo </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./mapData/geoData/shanghai&#39;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 上海</span></span>
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
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { properties } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { name, centroid } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> properties</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">centroid) {</span></span>
<span class="line"><span style="color:#24292E;">            centroid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> properties.center</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> el </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        el.innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`&lt;div class=&quot;title&quot;&gt;\${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}&lt;/div&gt;\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        el.className </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`city-label \${</span><span style="color:#24292E;">className</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 是否需要定制化</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(isSet) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(el, item, name)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> maplibregl.</span><span style="color:#6F42C1;">Marker</span><span style="color:#24292E;">({ element: el, anchor: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">setLngLat</span><span style="color:#24292E;">(centroid).</span><span style="color:#6F42C1;">addTo</span><span style="color:#24292E;">(map);</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 添加面和线图层</span></span>
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
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;">: idName </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;source&#39;</span><span style="color:#24292E;">: idName,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;layout&#39;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;layout&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;line-join&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;round&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;line-cap&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;round&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;paint&quot;</span><span style="color:#24292E;">: { </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;line-color&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;line-width&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;line-dasharray&quot;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 根据开发环境区分底图</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setMmapLayer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">geoData</span><span style="color:#24292E;">, </span><span style="color:#E36209;">center</span><span style="color:#24292E;">, </span><span style="color:#E36209;">zoom</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p<wbr>rocess.env.</span><span style="color:#005CC5;">NODE_ENV</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapInitTool</span><span style="color:#24292E;">(glMapConfigDev, geoData, center, zoom)</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// return mapInitTool(glMapConfigDev, geoData, center, zoom)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mapInitTool</span><span style="color:#24292E;">(glMapConfig, geoData, center, zoom)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 地图数据及渲染方法供出</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 首页浙江</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 地图初始化</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">zhejiangMapIndex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setMmapLayer</span><span style="color:#24292E;">(zhejiangIndexGeo)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 渲染geoData</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">renderGeoToZheJiangIndex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">map</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 定制首页地图geojson</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">renderGeo</span><span style="color:#24292E;">(zhejiangIndexGeo, map, </span><span style="color:#032F62;">&#39;zhejiang_index&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">el</span><span style="color:#24292E;">, </span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">name</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(el, item, name)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;">(name) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;浙北&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">addMapLayer</span><span style="color:#24292E;">(map, item, </span><span style="color:#032F62;">&#39;zhebei&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;#73BBBF&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">.4</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;浙南&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">addMapLayer</span><span style="color:#24292E;">(map, item, </span><span style="color:#032F62;">&#39;zhenan&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;#C29E35&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;浙西&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">addMapLayer</span><span style="color:#24292E;">(map, item, </span><span style="color:#032F62;">&#39;zhexi&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;#7BAD84&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">.6</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;浙东&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">addMapLayer</span><span style="color:#24292E;">(map, item, </span><span style="color:#032F62;">&#39;zhedong&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;#C6716D&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 标注点击事件</span></span>
<span class="line"><span style="color:#24292E;">        el.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">e</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { textContent } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e.target</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// console.log(textContent)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 获取城市标注数据</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(textContent)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 上海</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shanghaiMap</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setMmapLayer</span><span style="color:#24292E;">(shanghaiGeo, [</span><span style="color:#005CC5;">121.4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">31.2</span><span style="color:#24292E;">], </span><span style="color:#005CC5;">8.9</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">renderGeoToShangHai</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">map</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">renderGeo</span><span style="color:#24292E;">(shanghaiGeo, map, </span><span style="color:#032F62;">&#39;shanghai&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br></div></div>`,10),e=[o];function c(r,t,E,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{m as __pageData,u as default};
//# sourceMappingURL=pages_note_front_gis-note_mapbox-note-1.md.69aae048.js.map
