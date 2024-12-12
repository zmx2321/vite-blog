import{_ as s,o as n,c as a,e as p}from"./app.435c5043.js";const d=JSON.parse('{"title":"css高级用法","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/css-note/css-note-2.md","filePath":"pages/note/front/css-note/css-note-2.md","lastUpdated":1702954749000}'),l={name:"pages/note/front/css-note/css-note-2.md"},o=p(`<h1 id="css高级用法" tabindex="-1">css高级用法 <a class="header-anchor" href="#css高级用法" aria-label="Permalink to &quot;css高级用法&quot;">​</a></h1><h2 id="css计算" tabindex="-1">css计算 <a class="header-anchor" href="#css计算" aria-label="Permalink to &quot;css计算&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// 输入框宽度</span></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#E1E4E8;"> $width in 180, 220, 240, 260, 300 {</span></span>
<span class="line"><span style="color:#E1E4E8;">  // @each可以遍历列表$list中的值</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.w</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: #{$width}px !important; // 通过变量直接计算出每个class的transition-delay值</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 字号大小 */</span></span>
<span class="line"><span style="color:#F97583;">@for</span><span style="color:#E1E4E8;"> $i from 12 through 40 {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.ft</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 外边距、内边距全局样式 */</span></span>
<span class="line"><span style="color:#F97583;">@for</span><span style="color:#E1E4E8;"> $i from 0 through 40 {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.mt</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin-top</span><span style="color:#E1E4E8;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.mr</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin-right</span><span style="color:#E1E4E8;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.mb</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin-bottom</span><span style="color:#E1E4E8;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.ml</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin-left</span><span style="color:#E1E4E8;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.pt</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding-top</span><span style="color:#E1E4E8;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.pr</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding-right</span><span style="color:#E1E4E8;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.pb</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding-bottom</span><span style="color:#E1E4E8;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.pl</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding-left</span><span style="color:#E1E4E8;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// 输入框宽度</span></span>
<span class="line"><span style="color:#D73A49;">@each</span><span style="color:#24292E;"> $width in 180, 220, 240, 260, 300 {</span></span>
<span class="line"><span style="color:#24292E;">  // @each可以遍历列表$list中的值</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.w</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: #{$width}px !important; // 通过变量直接计算出每个class的transition-delay值</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 字号大小 */</span></span>
<span class="line"><span style="color:#D73A49;">@for</span><span style="color:#24292E;"> $i from 12 through 40 {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.ft</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 外边距、内边距全局样式 */</span></span>
<span class="line"><span style="color:#D73A49;">@for</span><span style="color:#24292E;"> $i from 0 through 40 {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.mt</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin-top</span><span style="color:#24292E;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.mr</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin-right</span><span style="color:#24292E;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.mb</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin-bottom</span><span style="color:#24292E;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.ml</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin-left</span><span style="color:#24292E;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.pt</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding-top</span><span style="color:#24292E;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.pr</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding-right</span><span style="color:#24292E;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.pb</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding-bottom</span><span style="color:#24292E;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.pl</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding-left</span><span style="color:#24292E;">: #{$i}px !important;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="css变量的使用" tabindex="-1">css变量的使用 <a class="header-anchor" href="#css变量的使用" aria-label="Permalink to &quot;css变量的使用&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\`--dropdownThemeColor:\${themeColor};--dropdownThemeColorRgb:\${hexToRgb(themeColor)}\`&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">props</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 主题的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">		themeColor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#9ECBFF;">&quot;#3185FF&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scope</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.le-dropdown-filter-box-active</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--dropdownThemeColor</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">rgba</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--dropdownThemeColorRgb</span><span style="color:#E1E4E8;">), </span><span style="color:#79B8FF;">0.04</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\`--dropdownThemeColor:\${themeColor};--dropdownThemeColorRgb:\${hexToRgb(themeColor)}\`&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">props</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineProps</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 主题的颜色</span></span>
<span class="line"><span style="color:#24292E;">		themeColor: {</span></span>
<span class="line"><span style="color:#24292E;">			type: String,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#032F62;">&quot;#3185FF&quot;</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scope</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.le-dropdown-filter-box-active</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--dropdownThemeColor</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">rgba</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--dropdownThemeColorRgb</span><span style="color:#24292E;">), </span><span style="color:#005CC5;">0.04</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,5),e=[o];function r(c,t,E,y,i,b){return n(),a("div",null,e)}const u=s(l,[["render",r]]);export{d as __pageData,u as default};
