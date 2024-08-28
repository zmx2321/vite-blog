import{_ as s,o as n,c as a,e as l}from"./app.e06d76d1.js";const u=JSON.parse('{"title":"大屏开发技巧整理","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/project-note/project1/project1-note-1.md","filePath":"pages/note/front/project-note/project1/project1-note-1.md","lastUpdated":1724831194000}'),p={name:"pages/note/front/project-note/project1/project1-note-1.md"},o=l(`<h1 id="大屏开发技巧整理" tabindex="-1">大屏开发技巧整理 <a class="header-anchor" href="#大屏开发技巧整理" aria-label="Permalink to &quot;大屏开发技巧整理&quot;">​</a></h1><blockquote><p>此次项目大屏的需求是需要嵌入管理页面中,并且需要放大缩小时两边不能留白,即因不能等比缩放,所以不能使用市面上使用比较多的transform: scale的方法,后来使用vw方案,效果不是很理想,最终使用百分比以及弹性盒子方案来做整体框架布局,为了不影响使用,需要在页面变形前加入滚动条,上下滚动的话在各个子模块中使用滚动,不在全局使用</p></blockquote><h2 id="自适应方案" tabindex="-1">自适应方案 <a class="header-anchor" href="#自适应方案" aria-label="Permalink to &quot;自适应方案&quot;">​</a></h2><ul><li>鉴于以上需求,并且在页面缩小的时候不影响使用效果,我们在最外层盒子上面添加如下样式</li></ul><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_screen_container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scale_box&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.data_screen_container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow-x</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow-y</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 全局禁用y轴滚动条</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.scale_box</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./images/bg.png&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">no-repeat</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 背景图</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">background-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1380</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 页面缩小时不影响布局</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_screen_container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scale_box&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.data_screen_container</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow-x</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow-y</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 全局禁用y轴滚动条</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.scale_box</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./images/bg.png&quot;</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">top</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">no-repeat</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 背景图</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">background-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1380</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 页面缩小时不影响布局</span></span>
<span class="line"><span style="color:#24292E;">    } </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>在内容主体上我们使用上下结构,先设置两个盒子的宽高</li><li>主体内容的宽度我们可以用flex也预先定义好</li></ul><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scale_box&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_screen_header&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_screen_main&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_screen_lf&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_screen_ct&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_screen_rg&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#FFAB70;">$topHeight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">92</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 头部高度</span></span>
<span class="line"><span style="color:#B392F0;">.scale_box</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.data_screen_header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 里面的内容需要绝对定位</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">max-height</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$topHeight</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.data_screen_main</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// flex弹性盒子布局</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">justify-content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">space-between</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 子div撑开并且左右对齐</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">99</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 两边需要留点白</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.3</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 上下需要留点白,并且水平居中</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">$topHeight</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">.3</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);  </span><span style="color:#6A737D;">// 按照百分比来计算,除去留白部分的主题内容</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.data_screen_lf</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.data_screen_rg</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">26</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 左右两块宽度</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.data_screen_ct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 刨去左右两边,中间自适应</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scale_box&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_screen_header&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_screen_main&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_screen_lf&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_screen_ct&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_screen_rg&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#E36209;">$topHeight</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">92</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 头部高度</span></span>
<span class="line"><span style="color:#6F42C1;">.scale_box</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.data_screen_header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 里面的内容需要绝对定位</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">max-height</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$topHeight</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.data_screen_main</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// flex弹性盒子布局</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">justify-content</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">space-between</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 子div撑开并且左右对齐</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">99</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 两边需要留点白</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.3</span><span style="color:#D73A49;">vw</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 上下需要留点白,并且水平居中</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">calc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#E36209;">$topHeight</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">.3</span><span style="color:#D73A49;">vw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);  </span><span style="color:#6A737D;">// 按照百分比来计算,除去留白部分的主题内容</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">z-index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.data_screen_lf</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.data_screen_rg</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">26</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 左右两块宽度</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.data_screen_ct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 刨去左右两边,中间自适应</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><ul><li>主体区域的宽度和高度已经设置好了,接下来我们设置主题内容块样式</li><li>主体内容有三裂,横向布局使用flex,纵向为100%,我们按情况进行切割</li><li>主体内容高度为100%,但我们需要在页面缩小到形变的时候,加入滚动条,并且滚动条需要被隐藏</li></ul><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_screen_main&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_screen_lf&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scroll_auto&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dt_scrn_item&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dt_scrn_item&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dt_scrn_item&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_screen_ct&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scroll_auto&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dsren_ct_top&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dt_scrn_item&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dt_scrn_item&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dsren_ct_bot&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dt_scrn_item&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dt_scrn_item&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_screen_rg&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scroll_auto&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dt_scrn_item&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dt_scrn_item&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dt_scrn_item&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#FFAB70;">$marginBetween</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.data_screen_main</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 三纵列的公共样式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.data_screen_lf</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.data_screen_ct</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.data_screen_rg</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 需要滚动</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">scrollbar-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 并且隐藏滚动条</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.scroll_auto</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">min-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">678</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 滚动区域</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 主体区域的宽度,上面已经使用flex设置好了,这边就不作赘述了</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这里主要展示内部怎么分层</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 左右两边样式 - 因为是对称的,所以两边应该是相同的</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.data_screen_lf</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.data_screen_rg</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-48</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 按照需求,左右两边需要向上提</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">48</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);  </span><span style="color:#6A737D;">// 向上提之后,高度增加了,需要在100%的高度基础上增加</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 接下来设置左右两边内部一个个子模块的高度,宽度则是100%</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.dt_scrn_item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);  </span><span style="color:#6A737D;">// 高度为z了精确,我们直接进行计算,三等分</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 中间样式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.data_screen_ct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 中间需要留白,为了留白距离一样,我们设置变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">$marginBetween</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 先设置中间上下两个盒子的高度,第一个盒子要高一些</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.dsren_ct_top</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">63</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">margin-bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$marginBetween</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.dsren_ct_bot</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 第二个盒子直接用百分比进行计算,并且减去留白</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">63</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">$marginBetween</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 至此中间的两个盒子宽高都填充完成了,接下来就是内部子模块的填充</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 上下两个盒子,第一个盒子和第二个盒子需要上下对齐,即它们的高度相同,所以需要同时进行设置</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.dsren_ct_top</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.dsren_ct_bot</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 高度默认是100%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">.dt_scrn_item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 两个盒子的第一列</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">:first-child</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">65</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">margin-right</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$marginBetween</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 两个盒子的第二列</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">:last-child</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 刨去第一列和留白,flex会自动进行填充</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_screen_main&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_screen_lf&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scroll_auto&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dt_scrn_item&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dt_scrn_item&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dt_scrn_item&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_screen_ct&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scroll_auto&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dsren_ct_top&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dt_scrn_item&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dt_scrn_item&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dsren_ct_bot&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dt_scrn_item&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dt_scrn_item&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_screen_rg&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scroll_auto&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dt_scrn_item&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dt_scrn_item&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dt_scrn_item&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#E36209;">$marginBetween</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.data_screen_main</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 三纵列的公共样式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.data_screen_lf</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.data_screen_ct</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.data_screen_rg</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 需要滚动</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">scrollbar-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 并且隐藏滚动条</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.scroll_auto</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">min-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">678</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 滚动区域</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 主体区域的宽度,上面已经使用flex设置好了,这边就不作赘述了</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这里主要展示内部怎么分层</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 左右两边样式 - 因为是对称的,所以两边应该是相同的</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.data_screen_lf</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.data_screen_rg</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-48</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 按照需求,左右两边需要向上提</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">calc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">48</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);  </span><span style="color:#6A737D;">// 向上提之后,高度增加了,需要在100%的高度基础上增加</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 接下来设置左右两边内部一个个子模块的高度,宽度则是100%</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.dt_scrn_item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">calc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);  </span><span style="color:#6A737D;">// 高度为z了精确,我们直接进行计算,三等分</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 中间样式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.data_screen_ct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 中间需要留白,为了留白距离一样,我们设置变量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#E36209;">$marginBetween</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 先设置中间上下两个盒子的高度,第一个盒子要高一些</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.dsren_ct_top</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">63</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">margin-bottom</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$marginBetween</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.dsren_ct_bot</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 第二个盒子直接用百分比进行计算,并且减去留白</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">calc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">63</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#E36209;">$marginBetween</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 至此中间的两个盒子宽高都填充完成了,接下来就是内部子模块的填充</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 上下两个盒子,第一个盒子和第二个盒子需要上下对齐,即它们的高度相同,所以需要同时进行设置</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.dsren_ct_top</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.dsren_ct_bot</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 高度默认是100%</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">.dt_scrn_item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 两个盒子的第一列</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">:first-child</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">65</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">margin-right</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$marginBetween</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 两个盒子的第二列</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">:last-child</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 刨去第一列和留白,flex会自动进行填充</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><ul><li>至此,整个页面的整体布局就完成了,这也是我们此次大屏自适应的核心方案</li></ul><h2 id="纵向排列的dom如何进行自适应" tabindex="-1">纵向排列的dom如何进行自适应 <a class="header-anchor" href="#纵向排列的dom如何进行自适应" aria-label="Permalink to &quot;纵向排列的dom如何进行自适应&quot;">​</a></h2><ul><li>页面里面还有一个点的样式需要单独拉出来讲一下,纵向排列的有序列表,如何在盒子中进行等分排列,并且页面不管如何缩放都是等分排列的</li><li>这一点困扰了我很久,我把我捣鼓出来的解决方案分享一下</li></ul><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data_dot_list&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">(item</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dataDotList)</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item.id&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">&lt;!-- 这里是一个小图标 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;xxxx&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;/</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;/</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;xxxx&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;/</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;/</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">dt</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;xxxx&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    &lt;/</span><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;/</span><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dataDotList</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 我们默认data_dot_list是一个100%</span></span>
<span class="line"><span style="color:#B392F0;">.data_dot_list</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">flex-direction</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">column</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 纵向排列</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 设置文本内容的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">80</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2.6</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 设置每个子项文本的高度</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// height: calc(100% / 8 - .6%);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 或者动态获取</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">v-bind</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;dataDotList.length&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">.6</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 其他就是简单的样式,不作赘述了</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data_dot_list&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">(item</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">in</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dataDotList)</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item.id&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">&lt;!-- 这里是一个小图标 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;xxxx&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;/</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;/</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;xxxx&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;/</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;/</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">dt</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;xxxx&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                    &lt;/</span><span style="color:#22863A;">dd</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;/</span><span style="color:#22863A;">dl</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dataDotList</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 我们默认data_dot_list是一个100%</span></span>
<span class="line"><span style="color:#6F42C1;">.data_dot_list</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ul</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">flex-direction</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">column</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 纵向排列</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 设置文本内容的位置</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">80</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2.6</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 设置每个子项文本的高度</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">li</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// height: calc(100% / 8 - .6%);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 或者动态获取</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">calc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">v-bind</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;dataDotList.length&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">.6</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 其他就是简单的样式,不作赘述了</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h2 id="遇到渐变色时-如果使用transition过渡属性" tabindex="-1">遇到渐变色时,如果使用transition过渡属性 <a class="header-anchor" href="#遇到渐变色时-如果使用transition过渡属性" aria-label="Permalink to &quot;遇到渐变色时,如果使用transition过渡属性&quot;">​</a></h2><ul><li>页面上我们需要做一个平行四边形效果,背景色渐变,并且需要过渡效果,但是在渐变的时候transition失效,于是我使用了另外一种方案尽量避开渐变和transition的冲突</li></ul><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn_list&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btnListLink&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;box&quot;</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;aaaa&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;box&quot;</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;bbbb&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;box&quot;</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;cccc&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;box&quot;</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;dddd&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;box&quot;</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;eeee&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 整个盒子我们设置绝对定位,不过这里和我们要说的点没有关系</span></span>
<span class="line"><span style="color:#85E89D;">ul</span><span style="color:#B392F0;">.btn_list</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">7</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pointer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 我们使用li来作为每个需要添加效果的盒子,并设置相对定位</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">inline-block</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 横向排列</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">88</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">26</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pointer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">:not</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">:last-child</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">margin-right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 刨去最后一个,给每个盒子设置间距</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 上下两个大盒子,一个是用来作效果的,一个用来放文字</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.box</span><span style="color:#E1E4E8;">, </span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">88</span><span style="color:#F97583;">px</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 这里开始效果展示 - 核心代码</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 这个box就是平行四边形</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.box</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">skew</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">-20</span><span style="color:#F97583;">deg</span><span style="color:#E1E4E8;">);  </span><span style="color:#6A737D;">// 旋转 - 平行四边形核心代码</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// transform: skew(23deg);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">linear-gradient</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#1F4F8A</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#0f275a</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 平行四边形里面的小盒子用来展示鼠标移入的渐变效果</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 默认是隐藏,即透明度为0</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 鼠标移入实际上是移到b标签这个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">linear-gradient</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">right</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#1F4F8A</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#0f275a</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.5</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">linear</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// + 表示兄弟属性,这里的文字也需要在鼠标移入的时候变亮</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">&amp;</span><span style="color:#E1E4E8;">+</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">51</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">translate</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">-50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">-50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">font-family</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$mainFontFamily</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">16</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#4ABEFE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.8</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.8</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">linear</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 在鼠标移入box的时候触发hover效果</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 并且需要作用在box的兄弟元素span和b上</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">:hover</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">.box</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">&amp;</span><span style="color:#E1E4E8;">+</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#85E89D;">b</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">opacity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.8</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">linear</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 使用冒泡的方式捕获dom并设置dom下的所有事件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">btnListLink</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">target</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">innerText</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> target</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(innerText)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (innerText) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;aaaa&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aaaa&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bbbb&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;bbbb&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;cccc&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cccc&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;dddd&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dddd&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;eeee&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;eeee&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn_list&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btnListLink&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;box&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;aaaa&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;box&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;bbbb&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;box&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;cccc&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;box&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;dddd&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;box&quot;</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">b</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;eeee&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 整个盒子我们设置绝对定位,不过这里和我们要说的点没有关系</span></span>
<span class="line"><span style="color:#22863A;">ul</span><span style="color:#6F42C1;">.btn_list</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">absolute</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">7</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">z-index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">cursor</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">pointer</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 我们使用li来作为每个需要添加效果的盒子,并设置相对定位</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">li</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">inline-block</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 横向排列</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">88</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">26</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">cursor</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">pointer</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">:not</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">:last-child</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">margin-right</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 刨去最后一个,给每个盒子设置间距</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 上下两个大盒子,一个是用来作效果的,一个用来放文字</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.box</span><span style="color:#24292E;">, </span><span style="color:#22863A;">span</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">absolute</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">88</span><span style="color:#D73A49;">px</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 这里开始效果展示 - 核心代码</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 这个box就是平行四边形</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.box</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">skew</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">-20</span><span style="color:#D73A49;">deg</span><span style="color:#24292E;">);  </span><span style="color:#6A737D;">// 旋转 - 平行四边形核心代码</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// transform: skew(23deg);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">linear-gradient</span><span style="color:#24292E;">(</span><span style="color:#E36209;">to</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">left</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#1F4F8A</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#0f275a</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 平行四边形里面的小盒子用来展示鼠标移入的渐变效果</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 默认是隐藏,即透明度为0</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 鼠标移入实际上是移到b标签这个位置</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">b</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">linear-gradient</span><span style="color:#24292E;">(</span><span style="color:#E36209;">to</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">right</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#1F4F8A</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#0f275a</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">opacity</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">transition</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.5</span><span style="color:#D73A49;">s</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">linear</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// + 表示兄弟属性,这里的文字也需要在鼠标移入的时候变亮</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">&amp;</span><span style="color:#24292E;">+</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">51</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">translate</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">-50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">-50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">font-family</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$mainFontFamily</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">16</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#4ABEFE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">opacity</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.8</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">transition</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.8</span><span style="color:#D73A49;">s</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">linear</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 在鼠标移入box的时候触发hover效果</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 并且需要作用在box的兄弟元素span和b上</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">:hover</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">.box</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">&amp;</span><span style="color:#24292E;">+</span><span style="color:#22863A;">span</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#22863A;">b</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">opacity</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">transition</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.8</span><span style="color:#D73A49;">s</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">linear</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 使用冒泡的方式捕获dom并设置dom下的所有事件</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">btnListLink</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">target</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">innerText</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> target</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(innerText)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (innerText) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;aaaa&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;aaaa&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bbbb&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;bbbb&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;cccc&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;cccc&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;dddd&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dddd&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;eeee&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;eeee&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br></div></div><ul><li>以上就完成了在渐变色遇上过度效果时,如何共存的问题,主要就是使用加一个div上去用来显示鼠标移入后的效果,默认为透明,然后鼠标移入的时候,改变透明度,这样就可以实现渐变色和过度效果共存了</li><li>同时为了方便,直接使用冒泡去捕获<code>btn_list</code>盒子下的所有dom,并为其设置事件</li></ul><h2 id="监听dom以到达自适应效果" tabindex="-1">监听dom以到达自适应效果 <a class="header-anchor" href="#监听dom以到达自适应效果" aria-label="Permalink to &quot;监听dom以到达自适应效果&quot;">​</a></h2><blockquote><p>怎么做到若伊框架侧边栏展开或收起时,大屏页面自适应</p></blockquote><ul><li>侧栏收起,框架是使用cookie去控制open变量,又是通过open变量去控制openSidebar和hideSidebar,所以我们可以监听openSidebar和hideSidebar的变化,从而实现自适应</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 初始化子页面图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetAllChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      refLeftPage.value </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> refLeftPage.value.</span><span style="color:#B392F0;">resetChart</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      refCenterPage.value </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> refCenterPage.value.</span><span style="color:#B392F0;">resetChart</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      refRightPage.value </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> refRightPage.value.</span><span style="color:#B392F0;">resetChart</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听dom变化,在展开或者收起的时候重新渲染图表</span></span>
<span class="line"><span style="color:#6A737D;">// 创建Observer实例，并指定回调函数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">observer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MutationObserver</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mutations</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mutations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mutations</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 处理DOM变化</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">resetAllChart</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 需要被监听的dom</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">targetNode</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.app-wrapper&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// observer.observe(targetNode, { childList: true, subtree: true, attributes: true, characterData: true });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果dom存在,则监听dom的某几个属性</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (targetNode) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(targetNode, { attributes: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, attributeFilter: [</span><span style="color:#9ECBFF;">&#39;class&#39;</span><span style="color:#E1E4E8;">] });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 初始化子页面图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetAllChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      refLeftPage.value </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> refLeftPage.value.</span><span style="color:#6F42C1;">resetChart</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      refCenterPage.value </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> refCenterPage.value.</span><span style="color:#6F42C1;">resetChart</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      refRightPage.value </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> refRightPage.value.</span><span style="color:#6F42C1;">resetChart</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }, </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听dom变化,在展开或者收起的时候重新渲染图表</span></span>
<span class="line"><span style="color:#6A737D;">// 创建Observer实例，并指定回调函数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">observer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MutationObserver</span><span style="color:#24292E;">(</span><span style="color:#E36209;">mutations</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    mutations.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">mutations</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 处理DOM变化</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">resetAllChart</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 需要被监听的dom</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">targetNode</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.app-wrapper&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// observer.observe(targetNode, { childList: true, subtree: true, attributes: true, characterData: true });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果dom存在,则监听dom的某几个属性</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (targetNode) {</span></span>
<span class="line"><span style="color:#24292E;">    observer.</span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(targetNode, { attributes: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, attributeFilter: [</span><span style="color:#032F62;">&#39;class&#39;</span><span style="color:#24292E;">] });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="echarts封装-新的取值方式" tabindex="-1">echarts封装,新的取值方式 <a class="header-anchor" href="#echarts封装-新的取值方式" aria-label="Permalink to &quot;echarts封装,新的取值方式&quot;">​</a></h2><blockquote><ul><li>vue3种echart的封装使用方式大体和之前相同,但里面随着页面的缩小放大,echarts需要重新渲染的功能之前使用mix的方式写的,vue3中我们来重新弄一下</li><li>这里将echart组件整个粘贴过来了,后面组件主要是在option里面作了修改,大体结构都是一样的,其他echart组件都可以参考本节</li></ul></blockquote><h3 id="修改之后的echarts封装" tabindex="-1">修改之后的echarts封装 <a class="header-anchor" href="#修改之后的echarts封装" aria-label="Permalink to &quot;修改之后的echarts封装&quot;">​</a></h3><ul><li>在页面使用时,echarts子组件的渲染会在父组件之前,即先渲染子组件,再渲染父组件</li><li>这样导致了,每次echarts里面是没有数据的,同时数据传递是异步的,就更加影响组件的渲染了</li><li>梳理一下,我们不做任何操作,页面逻辑是这样的 子组件渲染(数据默认为空) =&gt; 父组件渲染 =&gt; 异步获取接口数据</li><li>但是我们需要 父组件渲染 =&gt; 异步获取接口数据 =&gt; 子组件渲染</li><li>所以我们需要设置监听从父组件传到子组件的数据,在数据加载完成之后再进行渲染</li><li>有两种方式,一种是设置flag,在数据请求完成之后,flag为true,再进行渲染图表,但这种方案在echart组件比较多的时候比较麻烦</li><li>我们使用第二种,监听,但监听有一个弊端,echart组件是一直存在的,就是数据为空的时候会进行一次加载,所以在echarts里面需要进行一次非空判断</li><li>注: 里面还包含了轮播代码</li></ul><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;refChart&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;chart_wrap&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;className&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ height: height, width: width }&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onMounted, onBeforeUnmount, ref, watch, nextTick } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> echarts </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;echarts&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { myDebounce } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/utils/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 父组件参数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">props</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  className: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;chart&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;100%&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;100%&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  chartFontColor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&#39;#000&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  autoResize: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  chartData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">    required: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  txtFontSize: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#79B8FF;">15</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 定义变量</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 图表ref</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> changePieInterval </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">chartConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  barWidth: </span><span style="color:#9ECBFF;">&#39;10&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fontSize: </span><span style="color:#79B8FF;">10.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#9ECBFF;">&#39;rgba(255, 255, 255, .6)&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 设置横坐标线颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// width: 2, // 设置横坐标线宽度</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 监听数据</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// setoption解构传参用这种监听</span></span>
<span class="line"><span style="color:#6A737D;">/* watch(</span></span>
<span class="line"><span style="color:#6A737D;">  props.chartData,</span></span>
<span class="line"><span style="color:#6A737D;">  (val) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">    setOption(val)</span></span>
<span class="line"><span style="color:#6A737D;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  { deep: true }</span></span>
<span class="line"><span style="color:#6A737D;">) */</span></span>
<span class="line"><span style="color:#6A737D;">// 重新修改传值方式之后,监听需要修改</span></span>
<span class="line"><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> props.chartData, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(val)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 工具方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setProxyData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">proxyData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(proxyData))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 图表相关</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 销毁图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">destroyChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (myChart) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">dispose</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 重置图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resetChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// console.log(&quot;初始化图表&quot;, myChart)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">destroyChart</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 重新启动图表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initChart</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(refChart.value, </span><span style="color:#9ECBFF;">&#39;macarons&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(props.chartData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用防抖减少渲染次数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在页面放大或缩小时,重新渲染echart</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;resize&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">myDebounce</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">resetChart</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 轮播</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">chartAuto</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">option</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(props.chartData) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{}&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> intervaltime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">clearInterval</span><span style="color:#E1E4E8;">(changePieInterval)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 当前高亮图形在饼图数据中的下标</span></span>
<span class="line"><span style="color:#E1E4E8;">  changePieInterval </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setInterval</span><span style="color:#E1E4E8;">(selectChart, intervaltime); </span><span style="color:#6A737D;">// 设置自动切换高亮图形的定时器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 取消所有高亮并高亮当前图形</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">highlightChart</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">myChart) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> idx </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> option.series[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 遍历饼图数据，取消所有图形的高亮效果</span></span>
<span class="line"><span style="color:#E1E4E8;">      myChart.</span><span style="color:#B392F0;">dispatchAction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;showTip&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        seriesIndex: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        dataIndex: idx</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 高亮当前图形</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">dispatchAction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;showTip&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      seriesIndex: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      dataIndex: currentIndex</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 用户鼠标悬浮到某一图形时，停止自动切换并高亮鼠标悬浮的图形</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mouseover&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">clearInterval</span><span style="color:#E1E4E8;">(changePieInterval);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> params.dataIndex;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">highlightChart</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 用户鼠标移出时，重新开始自动切换</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mouseout&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">clearInterval</span><span style="color:#E1E4E8;">(changePieInterval);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    changePieInterval </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setInterval</span><span style="color:#E1E4E8;">(selectChart, intervaltime);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 高亮效果切换到下一个图形</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">selectChart</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (option.series[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> dataLen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> option.series[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (currentIndex </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> dataLen;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">highlightChart</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">chartData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">chartData) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ----------------------------  图表配置开始</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">option</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&#39;单位(分)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      top: </span><span style="color:#9ECBFF;">&quot;2.5%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      right: </span><span style="color:#9ECBFF;">&#39;2%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fontSize: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    tooltip: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      trigger: </span><span style="color:#9ECBFF;">&#39;axis&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fontSize: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisPointer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;cross&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        crossStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    grid: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      left: </span><span style="color:#9ECBFF;">&#39;3%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      right: </span><span style="color:#9ECBFF;">&#39;4%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      bottom: </span><span style="color:#9ECBFF;">&#39;5%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: </span><span style="color:#9ECBFF;">&#39;83%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      containLabel: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    xAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;category&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      offset: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 隐藏刻度线</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        lineStyle: chartConfig.lineStyle</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        padding: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        interval: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 横轴信息全部显示</span></span>
<span class="line"><span style="color:#E1E4E8;">        rotate: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">chartConfig.textStyle,</span></span>
<span class="line"><span style="color:#E1E4E8;">        align: </span><span style="color:#9ECBFF;">&#39;left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: chartData.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.name),  </span><span style="color:#6A737D;">// 对象数组使用map转换成name的数组传入</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    yAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 隐藏刻度线</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 显示y轴线</span></span>
<span class="line"><span style="color:#E1E4E8;">        lineStyle: chartConfig.lineStyle</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLabel: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fontSize: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;健康度&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: chartConfig.barWidth,</span></span>
<span class="line"><span style="color:#E1E4E8;">        smooth: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        showSymbol: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 在 tooltip hover 的时候显示</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&#39;rgba(82, 217, 95, 0.8)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&#39;#52D95F&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 设置线宽</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        areaStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> echarts.graphic.</span><span style="color:#B392F0;">LinearGradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, color: </span><span style="color:#9ECBFF;">&#39;rgba(82, 217, 95, 0.3)&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { offset: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, color: </span><span style="color:#9ECBFF;">&#39;rgba(0,211,252,0)&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]),</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: chartData.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.healthLevel),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ----------------------------  图表配置结束</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 绘制图表</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(option)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 轮播</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">chartAuto</span><span style="color:#E1E4E8;">(option)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 生命周期</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initChart</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#B392F0;">onBeforeUnmount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">destroyChart</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 销毁图表</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 暴露方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">defineExpose</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  resetChart</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">section</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;refChart&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;chart_wrap&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;className&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ height: height, width: width }&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { onMounted, onBeforeUnmount, ref, watch, nextTick } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> echarts </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;echarts&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { myDebounce } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/utils/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 父组件参数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">props</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineProps</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  className: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&#39;chart&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  width: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&#39;100%&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  height: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&#39;100%&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  chartFontColor: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&#39;#000&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  autoResize: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  chartData: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Object,</span></span>
<span class="line"><span style="color:#24292E;">    required: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  txtFontSize: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Number,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#005CC5;">15</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 定义变量</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 图表ref</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> changePieInterval </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">chartConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  barWidth: </span><span style="color:#032F62;">&#39;10&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    fontSize: </span><span style="color:#005CC5;">10.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#032F62;">&#39;rgba(255, 255, 255, .6)&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 设置横坐标线颜色</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// width: 2, // 设置横坐标线宽度</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 监听数据</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// setoption解构传参用这种监听</span></span>
<span class="line"><span style="color:#6A737D;">/* watch(</span></span>
<span class="line"><span style="color:#6A737D;">  props.chartData,</span></span>
<span class="line"><span style="color:#6A737D;">  (val) =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">    setOption(val)</span></span>
<span class="line"><span style="color:#6A737D;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  { deep: true }</span></span>
<span class="line"><span style="color:#6A737D;">) */</span></span>
<span class="line"><span style="color:#6A737D;">// 重新修改传值方式之后,监听需要修改</span></span>
<span class="line"><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> props.chartData, </span><span style="color:#E36209;">val</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(val)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 工具方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setProxyData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">proxyData</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(proxyData))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 图表相关</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 销毁图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">destroyChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (myChart) {</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">dispose</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (next) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 重置图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resetChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// console.log(&quot;初始化图表&quot;, myChart)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">destroyChart</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 重新启动图表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initChart</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(refChart.value, </span><span style="color:#032F62;">&#39;macarons&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(props.chartData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用防抖减少渲染次数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在页面放大或缩小时,重新渲染echart</span></span>
<span class="line"><span style="color:#24292E;">    window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;resize&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">myDebounce</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">resetChart</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 轮播</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">chartAuto</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">option</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(props.chartData) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{}&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> intervaltime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clearInterval</span><span style="color:#24292E;">(changePieInterval)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 当前高亮图形在饼图数据中的下标</span></span>
<span class="line"><span style="color:#24292E;">  changePieInterval </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setInterval</span><span style="color:#24292E;">(selectChart, intervaltime); </span><span style="color:#6A737D;">// 设置自动切换高亮图形的定时器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 取消所有高亮并高亮当前图形</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">highlightChart</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">myChart) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> idx </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> option.series[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].data) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 遍历饼图数据，取消所有图形的高亮效果</span></span>
<span class="line"><span style="color:#24292E;">      myChart.</span><span style="color:#6F42C1;">dispatchAction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;showTip&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        seriesIndex: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        dataIndex: idx</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 高亮当前图形</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">dispatchAction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;showTip&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      seriesIndex: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      dataIndex: currentIndex</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 用户鼠标悬浮到某一图形时，停止自动切换并高亮鼠标悬浮的图形</span></span>
<span class="line"><span style="color:#24292E;">  myChart.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mouseover&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearInterval</span><span style="color:#24292E;">(changePieInterval);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    currentIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> params.dataIndex;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">highlightChart</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 用户鼠标移出时，重新开始自动切换</span></span>
<span class="line"><span style="color:#24292E;">  myChart.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mouseout&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearInterval</span><span style="color:#24292E;">(changePieInterval);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    changePieInterval </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setInterval</span><span style="color:#24292E;">(selectChart, intervaltime);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 高亮效果切换到下一个图形</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">selectChart</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (option.series[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].data) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> dataLen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> option.series[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].data.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      currentIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (currentIndex </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> dataLen;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">highlightChart</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">chartData</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">chartData) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ----------------------------  图表配置开始</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">option</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    title: {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&#39;单位(分)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      top: </span><span style="color:#032F62;">&quot;2.5%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      right: </span><span style="color:#032F62;">&#39;2%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fontSize: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    tooltip: {</span></span>
<span class="line"><span style="color:#24292E;">      trigger: </span><span style="color:#032F62;">&#39;axis&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fontSize: </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisPointer: {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;cross&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        crossStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&#39;#fff&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    grid: {</span></span>
<span class="line"><span style="color:#24292E;">      left: </span><span style="color:#032F62;">&#39;3%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      right: </span><span style="color:#032F62;">&#39;4%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      bottom: </span><span style="color:#032F62;">&#39;5%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      height: </span><span style="color:#032F62;">&#39;83%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      containLabel: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    xAxis: {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;category&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      offset: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 隐藏刻度线</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        lineStyle: chartConfig.lineStyle</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisLabel: {</span></span>
<span class="line"><span style="color:#24292E;">        padding: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        interval: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 横轴信息全部显示</span></span>
<span class="line"><span style="color:#24292E;">        rotate: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">chartConfig.textStyle,</span></span>
<span class="line"><span style="color:#24292E;">        align: </span><span style="color:#032F62;">&#39;left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      data: chartData.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.name),  </span><span style="color:#6A737D;">// 对象数组使用map转换成name的数组传入</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    yAxis: {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 隐藏刻度线</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 显示y轴线</span></span>
<span class="line"><span style="color:#24292E;">        lineStyle: chartConfig.lineStyle</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisLabel: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fontSize: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    series: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;健康度&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: chartConfig.barWidth,</span></span>
<span class="line"><span style="color:#24292E;">        smooth: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        showSymbol: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 在 tooltip hover 的时候显示</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&#39;rgba(82, 217, 95, 0.8)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&#39;#52D95F&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 设置线宽</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        areaStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> echarts.graphic.</span><span style="color:#6F42C1;">LinearGradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#24292E;">            { offset: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, color: </span><span style="color:#032F62;">&#39;rgba(82, 217, 95, 0.3)&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            { offset: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, color: </span><span style="color:#032F62;">&#39;rgba(0,211,252,0)&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          ]),</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        data: chartData.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.healthLevel),</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ----------------------------  图表配置结束</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 绘制图表</span></span>
<span class="line"><span style="color:#24292E;">  myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(option)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 轮播</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">chartAuto</span><span style="color:#24292E;">(option)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 生命周期</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initChart</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6F42C1;">onBeforeUnmount</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">destroyChart</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 销毁图表</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 暴露方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">defineExpose</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  resetChart</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br></div></div><h3 id="在页面中使用" tabindex="-1">在页面中使用 <a class="header-anchor" href="#在页面中使用" aria-label="Permalink to &quot;在页面中使用&quot;">​</a></h3><ul><li>在之前的封装中,是字段名和值分开传入,每次都需要将对象数组重组传入,我们现在直接将对象数组传入echart组件中,用map的形式将数组传入</li><li>具体代码见上</li></ul><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">right-chart-1</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;refRightChart1&quot;</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">chart-data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">rightChart1Data</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> RightChart1 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../components/chart/RightChart1.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refRightChart1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rightChart1Data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取接口数据</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getRightChart1Data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取接口数据接口</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">resDataData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">apiCommon</span><span style="color:#E1E4E8;">(screenApi.xxxxxx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 数据处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 假数据 - 使用对象数组</span></span>
<span class="line"><span style="color:#E1E4E8;">  rightChart1Data.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;慈溪市&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">85</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;余姚市&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">66</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;海曙区&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">88</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;江北区&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">78</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;镇海区&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">70</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;奉化区&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;鄞州区&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">72</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;北仑区&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">33</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;宁海县&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">95</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;象山县&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">right-chart-1</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;refRightChart1&quot;</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">chart-data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">rightChart1Data</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> RightChart1 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../components/chart/RightChart1.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refRightChart1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rightChart1Data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取接口数据</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getRightChart1Data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取接口数据接口</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">resDataData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">apiCommon</span><span style="color:#24292E;">(screenApi.xxxxxx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 数据处理</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ......</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 假数据 - 使用对象数组</span></span>
<span class="line"><span style="color:#24292E;">  rightChart1Data.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;慈溪市&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">85</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;余姚市&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">66</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;海曙区&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">88</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;江北区&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">78</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;镇海区&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">70</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;奉化区&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">12</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;鄞州区&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">72</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;北仑区&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">33</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;宁海县&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">95</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;象山县&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">75</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="代码中使用的防抖" tabindex="-1">代码中使用的防抖 <a class="header-anchor" href="#代码中使用的防抖" aria-label="Permalink to &quot;代码中使用的防抖&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myDebounce</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">delay</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// timer是在闭包中的 =&gt; 下面的if(timer)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这样不会被外界轻易拿到 =&gt; 即不对外暴露</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 我们在外面使用不需要关心</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 同时也是在debounce的作用域中</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 闭包的使用场景：函数当做返回值或者参数传入</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 函数作为返回值，这就形成闭包了</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 这里面的timer需要在它定义的作用域往上寻找</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (timer) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">clearTimeout</span><span style="color:#E1E4E8;">(timer)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 触发change事件</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 第一个参数是改变this指向</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 第二个参数是获取所有的参数</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// apply第二个参数开始，只接收数组</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// fn函数在执行的时候，argument传进来</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// debounce返回的函数可能会传进来一些参数</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 面试使用fn()也没问题</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// fn()</span></span>
<span class="line"><span style="color:#E1E4E8;">      fn.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 清空定时器</span></span>
<span class="line"><span style="color:#E1E4E8;">      timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, delay)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myDebounce</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">delay</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// timer是在闭包中的 =&gt; 下面的if(timer)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这样不会被外界轻易拿到 =&gt; 即不对外暴露</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 我们在外面使用不需要关心</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 同时也是在debounce的作用域中</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 闭包的使用场景：函数当做返回值或者参数传入</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 函数作为返回值，这就形成闭包了</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 这里面的timer需要在它定义的作用域往上寻找</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (timer) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearTimeout</span><span style="color:#24292E;">(timer)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 触发change事件</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 第一个参数是改变this指向</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 第二个参数是获取所有的参数</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// apply第二个参数开始，只接收数组</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// fn函数在执行的时候，argument传进来</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// debounce返回的函数可能会传进来一些参数</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 面试使用fn()也没问题</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// fn()</span></span>
<span class="line"><span style="color:#24292E;">      fn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 清空定时器</span></span>
<span class="line"><span style="color:#24292E;">      timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    }, delay)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="进行全屏时遇到的一些问题" tabindex="-1">进行全屏时遇到的一些问题 <a class="header-anchor" href="#进行全屏时遇到的一些问题" aria-label="Permalink to &quot;进行全屏时遇到的一些问题&quot;">​</a></h2><blockquote><p>因为大屏是作为子页面的,有时候有菜单栏,有时候没有,有时候菜单栏收起,有时候展开,有4种情况</p></blockquote><ul><li>全屏代码 - 常规的全屏按钮</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// falg为当前的全屏状态</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setFullScreen</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">falg</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">falg) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 全屏</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (document.documentElement.requestFullscreen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.documentElement.</span><span style="color:#B392F0;">requestFullscreen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (document.documentElement.mozRequestFullScreen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.documentElement.</span><span style="color:#B392F0;">mozRequestFullScreen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (document.documentElement.webkitRequestFullscreen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.documentElement.</span><span style="color:#B392F0;">webkitRequestFullscreen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (element.msRequestFullscreen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.documentElement.</span><span style="color:#B392F0;">msRequestFullscreen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 退出全屏</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (document.exitFullscreen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">exitFullscreen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (document.mozCancelFullScreen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">mozCancelFullScreen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (document.webkitExitFullscreen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">webkitExitFullscreen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (document.msExitFullscreen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">msExitFullscreen</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用</span></span>
<span class="line"><span style="color:#6A737D;">// api相关</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { setFullScreen } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@/utils/index.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;setFullScreen(isFullscreen)&quot;&gt;{{</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isFullscreen</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;退出全屏&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;全屏&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">}}&lt;button&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// falg为当前的全屏状态</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setFullScreen</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">falg</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">falg) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 全屏</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (document.documentElement.requestFullscreen) {</span></span>
<span class="line"><span style="color:#24292E;">      document.documentElement.</span><span style="color:#6F42C1;">requestFullscreen</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (document.documentElement.mozRequestFullScreen) {</span></span>
<span class="line"><span style="color:#24292E;">      document.documentElement.</span><span style="color:#6F42C1;">mozRequestFullScreen</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (document.documentElement.webkitRequestFullscreen) {</span></span>
<span class="line"><span style="color:#24292E;">      document.documentElement.</span><span style="color:#6F42C1;">webkitRequestFullscreen</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (element.msRequestFullscreen) {</span></span>
<span class="line"><span style="color:#24292E;">      document.documentElement.</span><span style="color:#6F42C1;">msRequestFullscreen</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 退出全屏</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (document.exitFullscreen) {</span></span>
<span class="line"><span style="color:#24292E;">      document.</span><span style="color:#6F42C1;">exitFullscreen</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (document.mozCancelFullScreen) {</span></span>
<span class="line"><span style="color:#24292E;">      document.</span><span style="color:#6F42C1;">mozCancelFullScreen</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (document.webkitExitFullscreen) {</span></span>
<span class="line"><span style="color:#24292E;">      document.</span><span style="color:#6F42C1;">webkitExitFullscreen</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (document.msExitFullscreen) {</span></span>
<span class="line"><span style="color:#24292E;">      document.</span><span style="color:#6F42C1;">msExitFullscreen</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用</span></span>
<span class="line"><span style="color:#6A737D;">// api相关</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { setFullScreen } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@/utils/index.js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;setFullScreen(isFullscreen)&quot;&gt;{{</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isFullscreen</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;退出全屏&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;全屏&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">}}&lt;button&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><ul><li>上面是根据状态来进行全屏操作的,所以需要监听全屏状态的变化,来修改flag状态,上面那个方法才能生效</li><li>如果在全屏的状态,点击跳转到单独的大屏页面,页面是重新加载了,但状态值还没有发生改变,所以要在页面一加载的时候就判断当前的全屏状态</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 判断是否全屏方法封装</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getIsFullScreenStatus</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">into</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">out</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (document.fullscreenElement </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> document.webkitIsFullScreen </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> document.mozFullScreen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    isFullscreen.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (into) { </span><span style="color:#B392F0;">into</span><span style="color:#E1E4E8;">() }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    isFullscreen.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (out) { </span><span style="color:#B392F0;">out</span><span style="color:#E1E4E8;">() }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听全屏状态修改标识</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setFullScreenFlag</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getIsFullScreenStatus</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 页面一加载就先判断是否全屏</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 监听是否全屏事件</span></span>
<span class="line"><span style="color:#E1E4E8;">  window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fullscreenchange&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 可以写一些进出全屏的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getIsFullScreenStatus</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(&#39;进入全屏模式&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// console.log(&#39;退出全屏模式&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initPage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setFullScreenFlag</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 监听全屏状态修改标识</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 判断是否全屏方法封装</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getIsFullScreenStatus</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">into</span><span style="color:#24292E;">, </span><span style="color:#E36209;">out</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (document.fullscreenElement </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> document.webkitIsFullScreen </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> document.mozFullScreen) {</span></span>
<span class="line"><span style="color:#24292E;">    isFullscreen.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (into) { </span><span style="color:#6F42C1;">into</span><span style="color:#24292E;">() }</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    isFullscreen.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (out) { </span><span style="color:#6F42C1;">out</span><span style="color:#24292E;">() }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听全屏状态修改标识</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setFullScreenFlag</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getIsFullScreenStatus</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 页面一加载就先判断是否全屏</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 监听是否全屏事件</span></span>
<span class="line"><span style="color:#24292E;">  window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fullscreenchange&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 可以写一些进出全屏的回调</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getIsFullScreenStatus</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(&#39;进入全屏模式&#39;);</span></span>
<span class="line"><span style="color:#24292E;">    }, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// console.log(&#39;退出全屏模式&#39;);</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initPage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setFullScreenFlag</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 监听全屏状态修改标识</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="echarts三维地图是怎么形成的" tabindex="-1">echarts三维地图是怎么形成的 <a class="header-anchor" href="#echarts三维地图是怎么形成的" aria-label="Permalink to &quot;echarts三维地图是怎么形成的&quot;">​</a></h2><ul><li>这里贴出三维地图的echart配置</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">center-chart-1</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;refCenterChart1&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:chart-data=&quot;centerChart1Data&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">centerChart1Data.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;aaaa&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data1: </span><span style="color:#79B8FF;">99</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;bbbb&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data1: </span><span style="color:#79B8FF;">85</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;cccc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data1: </span><span style="color:#79B8FF;">88</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;refChart&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> nbGeoJSON </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./GEOJSON/nbGeoJSON.json&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(refChart.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">  echarts.</span><span style="color:#B392F0;">registerMap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ningbo&quot;</span><span style="color:#E1E4E8;">, nbGeoJSON);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(props.chartData);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">option</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tooltip: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            fontSize: </span><span style="color:#79B8FF;">13</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        trigger: </span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        backgroundColor: </span><span style="color:#9ECBFF;">&quot;rgba(0,0,0,0.3)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        borderColor: </span><span style="color:#9ECBFF;">&#39;rgba(74,190,254,0.5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        borderWidth: </span><span style="color:#79B8FF;">2.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { data } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> params;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;div class=&quot;chart_tooltip&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;h3&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                        &lt;li&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                            &lt;dl&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                                &lt;dt&gt;xxxxxx:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                                &lt;dd&gt;\${</span><span style="color:#E1E4E8;">data</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">data1</span><span style="color:#9ECBFF;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                            &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                        &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#9ECBFF;">                    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            \`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> str;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;map3D&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 系列类型</span></span>
<span class="line"><span style="color:#E1E4E8;">            map: </span><span style="color:#9ECBFF;">&quot;ningbo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            data: chartData,</span></span>
<span class="line"><span style="color:#E1E4E8;">            label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 标签的相关设置</span></span>
<span class="line"><span style="color:#E1E4E8;">                show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// (地图上的城市名称)是否显示标签 [ default: false ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 标签的字体样式</span></span>
<span class="line"><span style="color:#E1E4E8;">                color: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 地图初始化区域字体颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">                fontSize: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 字体大小</span></span>
<span class="line"><span style="color:#E1E4E8;">                opacity: </span><span style="color:#79B8FF;">.8</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 字体透明度</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                color: </span><span style="color:#9ECBFF;">&#39;#0b3eb3&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 地图板块的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">                borderWidth: </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                borderColor: </span><span style="color:#9ECBFF;">&#39;rgba(0, 178, 255, 1)&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 图形描边的颜色。[ default: #333 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            emphasis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否显示高亮</span></span>
<span class="line"><span style="color:#E1E4E8;">                    color: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 高亮文字颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">                    fontSize: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    color: </span><span style="color:#9ECBFF;">&#39;#00ade0&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 地图高亮颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">                    borderWidth: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分界线wdith</span></span>
<span class="line"><span style="color:#E1E4E8;">                    borderColor: </span><span style="color:#9ECBFF;">&#39;#00ade0&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 分界线颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            shading: </span><span style="color:#9ECBFF;">&#39;realistic&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            groundPlane: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。</span></span>
<span class="line"><span style="color:#E1E4E8;">                show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否显示地面。[ default: false ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                color: </span><span style="color:#9ECBFF;">&#39;#0C264D&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 地面颜色。[ default: &#39;#aaa&#39; ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            shading: </span><span style="color:#9ECBFF;">&#39;realistic&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 三维地理坐标系组件中三维图形的着色效果，echarts-gl 中支持下面三种着色方式:</span></span>
<span class="line"><span style="color:#E1E4E8;">            realisticMaterial: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// detailTexture: &#39;https://cdn.polyhaven.com/asset_img/primary/kloppenheim_06_puresky.png?height=780&#39;, // 纹理贴图</span></span>
<span class="line"><span style="color:#E1E4E8;">                detailTexture: mapbg, </span><span style="color:#6A737D;">// 纹理贴图</span></span>
<span class="line"><span style="color:#E1E4E8;">                textureTiling: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 纹理平铺，1是拉伸，数字表示纹理平铺次数</span></span>
<span class="line"><span style="color:#E1E4E8;">                roughness: </span><span style="color:#79B8FF;">.8</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 材质粗糙度，0完全光滑，1完全粗糙</span></span>
<span class="line"><span style="color:#E1E4E8;">                metalness: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 0材质是非金属 ，1金属</span></span>
<span class="line"><span style="color:#E1E4E8;">            }, </span><span style="color:#6A737D;">// 真实感材质相关的配置项，在 shading 为&#39;realistic&#39;时有效。</span></span>
<span class="line"><span style="color:#E1E4E8;">            light: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 光照相关的设置。在 shading 为 &#39;color&#39; 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。</span></span>
<span class="line"><span style="color:#E1E4E8;">                main: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    color: </span><span style="color:#9ECBFF;">&#39;#ffe&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    intensity: </span><span style="color:#79B8FF;">1.1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    shadow: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    shadowQuality: </span><span style="color:#9ECBFF;">&#39;high&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    alpha: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    beta: </span><span style="color:#79B8FF;">40</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ambient: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 全局的环境光设置。</span></span>
<span class="line"><span style="color:#E1E4E8;">                    color: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 环境光的颜色。[ default: #fff ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                    intensity: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 环境光的强度。[ default: 0.2 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            viewControl: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 用于鼠标的旋转，缩放等视角控制。</span></span>
<span class="line"><span style="color:#E1E4E8;">                projection: </span><span style="color:#9ECBFF;">&#39;orthographic&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 投影方式，默认为透视投影&#39;perspective&#39;，也支持设置为正交投影&#39;orthographic&#39;。</span></span>
<span class="line"><span style="color:#E1E4E8;">                autoRotate: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否开启视角绕物体的自动旋转查看。[ default: false ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                autoRotateDirection: </span><span style="color:#9ECBFF;">&#39;ccw&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 物体自传的方向。默认是 &#39;cw&#39; 也就是从上往下看是顺时针方向，也可以取 &#39;ccw&#39;，既从上往下看为逆时针方向。</span></span>
<span class="line"><span style="color:#E1E4E8;">                autoRotateSpeed: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。</span></span>
<span class="line"><span style="color:#E1E4E8;">                autoRotateAfterStill: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                damping: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                rotateSensitivity: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。默认为1, 设置为0后无法旋转。	rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。</span></span>
<span class="line"><span style="color:#E1E4E8;">                zoomSensitivity: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。</span></span>
<span class="line"><span style="color:#E1E4E8;">                panSensitivity: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 平移操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法平移。支持使用数组分别设置横向和纵向的平移灵敏度</span></span>
<span class="line"><span style="color:#E1E4E8;">                panMouseButton: </span><span style="color:#9ECBFF;">&#39;middle&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 平移操作使用的鼠标按键，支持：&#39;left&#39; 鼠标左键（默认）;&#39;middle&#39; 鼠标中键 ;&#39;right&#39; 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)</span></span>
<span class="line"><span style="color:#E1E4E8;">                rotateMouseButton: </span><span style="color:#9ECBFF;">&#39;left&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 旋转操作使用的鼠标按键，支持：&#39;left&#39; 鼠标左键;&#39;middle&#39; 鼠标中键（默认）;&#39;right&#39; 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                alpha: </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                beta: </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                minAlpha: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                maxAlpha: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                minBeta: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">360</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                maxBeta: </span><span style="color:#79B8FF;">360</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                center: [</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                animation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否开启动画。[ default: true ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                animationDurationUpdate: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 过渡动画的时长。[ default: 1000 ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                animationEasingUpdate: </span><span style="color:#9ECBFF;">&#39;cubicInOut&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 过渡动画的缓动效果。[ default: cubicInOut ]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 缩放大小，数值越大，地图越小</span></span>
<span class="line"><span style="color:#E1E4E8;">                zoomSensitivity: </span><span style="color:#79B8FF;">0.5</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">center-chart-1</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;refCenterChart1&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:chart-data=&quot;centerChart1Data&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">centerChart1Data.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;aaaa&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data1: </span><span style="color:#005CC5;">99</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;bbbb&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data1: </span><span style="color:#005CC5;">85</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;cccc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data1: </span><span style="color:#005CC5;">88</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">section</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;refChart&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> nbGeoJSON </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./GEOJSON/nbGeoJSON.json&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(refChart.value);</span></span>
<span class="line"><span style="color:#24292E;">  echarts.</span><span style="color:#6F42C1;">registerMap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;ningbo&quot;</span><span style="color:#24292E;">, nbGeoJSON);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(props.chartData);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">option</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    tooltip: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            fontSize: </span><span style="color:#005CC5;">13</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        trigger: </span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        backgroundColor: </span><span style="color:#032F62;">&quot;rgba(0,0,0,0.3)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        borderColor: </span><span style="color:#032F62;">&#39;rgba(74,190,254,0.5)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        borderWidth: </span><span style="color:#005CC5;">2.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { data } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> params;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">                &lt;div class=&quot;chart_tooltip&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;h3&gt;\${</span><span style="color:#24292E;">data</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#032F62;">                    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#032F62;">                        &lt;li&gt;</span></span>
<span class="line"><span style="color:#032F62;">                            &lt;dl&gt;</span></span>
<span class="line"><span style="color:#032F62;">                                &lt;dt&gt;xxxxxx:&lt;/dt&gt;</span></span>
<span class="line"><span style="color:#032F62;">                                &lt;dd&gt;\${</span><span style="color:#24292E;">data</span><span style="color:#032F62;">.</span><span style="color:#24292E;">data1</span><span style="color:#032F62;">}&lt;/dd&gt;</span></span>
<span class="line"><span style="color:#032F62;">                            &lt;/dl&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                        &lt;/li&gt;  </span></span>
<span class="line"><span style="color:#032F62;">                    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#032F62;">            \`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> str;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    series: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;map3D&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 系列类型</span></span>
<span class="line"><span style="color:#24292E;">            map: </span><span style="color:#032F62;">&quot;ningbo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            data: chartData,</span></span>
<span class="line"><span style="color:#24292E;">            label: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 标签的相关设置</span></span>
<span class="line"><span style="color:#24292E;">                show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// (地图上的城市名称)是否显示标签 [ default: false ]</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 标签的字体样式</span></span>
<span class="line"><span style="color:#24292E;">                color: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 地图初始化区域字体颜色</span></span>
<span class="line"><span style="color:#24292E;">                fontSize: </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 字体大小</span></span>
<span class="line"><span style="color:#24292E;">                opacity: </span><span style="color:#005CC5;">.8</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 字体透明度</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                color: </span><span style="color:#032F62;">&#39;#0b3eb3&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 地图板块的颜色</span></span>
<span class="line"><span style="color:#24292E;">                borderWidth: </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]</span></span>
<span class="line"><span style="color:#24292E;">                borderColor: </span><span style="color:#032F62;">&#39;rgba(0, 178, 255, 1)&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 图形描边的颜色。[ default: #333 ]</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            emphasis: {</span></span>
<span class="line"><span style="color:#24292E;">                label: {</span></span>
<span class="line"><span style="color:#24292E;">                    show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否显示高亮</span></span>
<span class="line"><span style="color:#24292E;">                    color: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 高亮文字颜色</span></span>
<span class="line"><span style="color:#24292E;">                    fontSize: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                    color: </span><span style="color:#032F62;">&#39;#00ade0&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 地图高亮颜色</span></span>
<span class="line"><span style="color:#24292E;">                    borderWidth: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分界线wdith</span></span>
<span class="line"><span style="color:#24292E;">                    borderColor: </span><span style="color:#032F62;">&#39;#00ade0&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 分界线颜色</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            shading: </span><span style="color:#032F62;">&#39;realistic&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            groundPlane: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。</span></span>
<span class="line"><span style="color:#24292E;">                show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否显示地面。[ default: false ]</span></span>
<span class="line"><span style="color:#24292E;">                color: </span><span style="color:#032F62;">&#39;#0C264D&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 地面颜色。[ default: &#39;#aaa&#39; ]</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            shading: </span><span style="color:#032F62;">&#39;realistic&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 三维地理坐标系组件中三维图形的着色效果，echarts-gl 中支持下面三种着色方式:</span></span>
<span class="line"><span style="color:#24292E;">            realisticMaterial: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// detailTexture: &#39;https://cdn.polyhaven.com/asset_img/primary/kloppenheim_06_puresky.png?height=780&#39;, // 纹理贴图</span></span>
<span class="line"><span style="color:#24292E;">                detailTexture: mapbg, </span><span style="color:#6A737D;">// 纹理贴图</span></span>
<span class="line"><span style="color:#24292E;">                textureTiling: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 纹理平铺，1是拉伸，数字表示纹理平铺次数</span></span>
<span class="line"><span style="color:#24292E;">                roughness: </span><span style="color:#005CC5;">.8</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 材质粗糙度，0完全光滑，1完全粗糙</span></span>
<span class="line"><span style="color:#24292E;">                metalness: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 0材质是非金属 ，1金属</span></span>
<span class="line"><span style="color:#24292E;">            }, </span><span style="color:#6A737D;">// 真实感材质相关的配置项，在 shading 为&#39;realistic&#39;时有效。</span></span>
<span class="line"><span style="color:#24292E;">            light: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 光照相关的设置。在 shading 为 &#39;color&#39; 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。</span></span>
<span class="line"><span style="color:#24292E;">                main: {</span></span>
<span class="line"><span style="color:#24292E;">                    color: </span><span style="color:#032F62;">&#39;#ffe&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    intensity: </span><span style="color:#005CC5;">1.1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    shadow: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    shadowQuality: </span><span style="color:#032F62;">&#39;high&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    alpha: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    beta: </span><span style="color:#005CC5;">40</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                ambient: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 全局的环境光设置。</span></span>
<span class="line"><span style="color:#24292E;">                    color: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 环境光的颜色。[ default: #fff ]</span></span>
<span class="line"><span style="color:#24292E;">                    intensity: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 环境光的强度。[ default: 0.2 ]</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            viewControl: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 用于鼠标的旋转，缩放等视角控制。</span></span>
<span class="line"><span style="color:#24292E;">                projection: </span><span style="color:#032F62;">&#39;orthographic&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 投影方式，默认为透视投影&#39;perspective&#39;，也支持设置为正交投影&#39;orthographic&#39;。</span></span>
<span class="line"><span style="color:#24292E;">                autoRotate: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否开启视角绕物体的自动旋转查看。[ default: false ]</span></span>
<span class="line"><span style="color:#24292E;">                autoRotateDirection: </span><span style="color:#032F62;">&#39;ccw&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 物体自传的方向。默认是 &#39;cw&#39; 也就是从上往下看是顺时针方向，也可以取 &#39;ccw&#39;，既从上往下看为逆时针方向。</span></span>
<span class="line"><span style="color:#24292E;">                autoRotateSpeed: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。</span></span>
<span class="line"><span style="color:#24292E;">                autoRotateAfterStill: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]</span></span>
<span class="line"><span style="color:#24292E;">                damping: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]</span></span>
<span class="line"><span style="color:#24292E;">                rotateSensitivity: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。默认为1, 设置为0后无法旋转。	rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。</span></span>
<span class="line"><span style="color:#24292E;">                zoomSensitivity: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。</span></span>
<span class="line"><span style="color:#24292E;">                panSensitivity: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 平移操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法平移。支持使用数组分别设置横向和纵向的平移灵敏度</span></span>
<span class="line"><span style="color:#24292E;">                panMouseButton: </span><span style="color:#032F62;">&#39;middle&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 平移操作使用的鼠标按键，支持：&#39;left&#39; 鼠标左键（默认）;&#39;middle&#39; 鼠标中键 ;&#39;right&#39; 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)</span></span>
<span class="line"><span style="color:#24292E;">                rotateMouseButton: </span><span style="color:#032F62;">&#39;left&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 旋转操作使用的鼠标按键，支持：&#39;left&#39; 鼠标左键;&#39;middle&#39; 鼠标中键（默认）;&#39;right&#39; 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                alpha: </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]</span></span>
<span class="line"><span style="color:#24292E;">                beta: </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]</span></span>
<span class="line"><span style="color:#24292E;">                minAlpha: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]</span></span>
<span class="line"><span style="color:#24292E;">                maxAlpha: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]</span></span>
<span class="line"><span style="color:#24292E;">                minBeta: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">360</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]</span></span>
<span class="line"><span style="color:#24292E;">                maxBeta: </span><span style="color:#005CC5;">360</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                center: [</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1.5</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                animation: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否开启动画。[ default: true ]</span></span>
<span class="line"><span style="color:#24292E;">                animationDurationUpdate: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 过渡动画的时长。[ default: 1000 ]</span></span>
<span class="line"><span style="color:#24292E;">                animationEasingUpdate: </span><span style="color:#032F62;">&#39;cubicInOut&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 过渡动画的缓动效果。[ default: cubicInOut ]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 缩放大小，数值越大，地图越小</span></span>
<span class="line"><span style="color:#24292E;">                zoomSensitivity: </span><span style="color:#005CC5;">0.5</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br></div></div><h2 id="如何让eacharts饼图颜色渐变" tabindex="-1">如何让eacharts饼图颜色渐变 <a class="header-anchor" href="#如何让eacharts饼图颜色渐变" aria-label="Permalink to &quot;如何让eacharts饼图颜色渐变&quot;">​</a></h2><ul><li>如果要单独设置饼图数据的颜色,需要在series的data属性里面单独作配置</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;refChart&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置图表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">chartData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">chartData) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ----------------------------  图表配置开始</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">option</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tooltip: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      trigger: </span><span style="color:#9ECBFF;">&#39;item&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fontSize: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> curData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        chartData.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (item.name </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> name)</span></span>
<span class="line"><span style="color:#E1E4E8;">            curData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> item.value</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">curData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}：\${</span><span style="color:#E1E4E8;">curData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}个 (\${</span><span style="color:#B392F0;">parseFloat</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">curData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">/</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">sum</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">100</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}%)\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&#39;基站个数&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      right: </span><span style="color:#9ECBFF;">&quot;24.2%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      top: </span><span style="color:#9ECBFF;">&quot;16%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textAlign: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fontSize: </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        align: </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fontWeight: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    legend: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      orient: </span><span style="color:#9ECBFF;">&#39;vertical&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemWidth: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemHeight: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;rect&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      top: </span><span style="color:#9ECBFF;">&#39;32%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      right: </span><span style="color:#9ECBFF;">&#39;8%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      padding: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: </span><span style="color:#9ECBFF;">&#39;100%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemGap: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,       </span><span style="color:#6A737D;">// 设置图例项之间的间隔</span></span>
<span class="line"><span style="color:#E1E4E8;">      textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fontSize: </span><span style="color:#9ECBFF;">&#39;11.5px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      tooltip: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> curData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> avage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        chartData.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (item.name </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> name)</span></span>
<span class="line"><span style="color:#E1E4E8;">            curData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">          sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> item.value</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (sum </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          avage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseFloat</span><span style="color:#E1E4E8;">(curData.value </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">curData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}：\${</span><span style="color:#E1E4E8;">curData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">} 个 (\${</span><span style="color:#E1E4E8;">avage</span><span style="color:#9ECBFF;">}%)\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;pie&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        radius: [</span><span style="color:#9ECBFF;">&#39;49%&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;81.5%&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        center: [</span><span style="color:#9ECBFF;">&#39;28.5%&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;51.5%&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: chartData,  </span><span style="color:#6A737D;">// 在这里使用数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        labelLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          show: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          position: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">formatter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> curData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            chartData.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (item.name </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> name) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                curData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`{title|\${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}} </span><span style="color:#79B8FF;">\\n\\n</span><span style="color:#9ECBFF;"> {num|\${</span><span style="color:#E1E4E8;">curData</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}个}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        emphasis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            rich: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">// 标题</span></span>
<span class="line"><span style="color:#E1E4E8;">              title: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                fontSize: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                fontWeight: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              num: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                color: </span><span style="color:#9ECBFF;">&quot;#4ABEFE&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                fontSize: </span><span style="color:#79B8FF;">22</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                fontWeight: </span><span style="color:#79B8FF;">900</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ----------------------------  图表配置结束</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 绘制图表</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(option)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 轮播</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">chartAuto</span><span style="color:#E1E4E8;">(option)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对外供出渐变色方法</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">color1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">color2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> echarts.graphic.</span><span style="color:#B392F0;">LinearGradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, color: color1 },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { offset: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, color: color2 }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ])</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 生命周期</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initChart</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onBeforeUnmount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">destroyChart</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 销毁图表</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 暴露方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">defineExpose</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  resetChart,</span></span>
<span class="line"><span style="color:#E1E4E8;">  setColor</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">section</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;refChart&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">section</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置图表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">chartData</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">chartData) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ----------------------------  图表配置开始</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">option</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    tooltip: {</span></span>
<span class="line"><span style="color:#24292E;">      trigger: </span><span style="color:#032F62;">&#39;item&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fontSize: </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> curData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> sum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        chartData.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (item.name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> name)</span></span>
<span class="line"><span style="color:#24292E;">            curData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          sum </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> item.value</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">curData</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}：\${</span><span style="color:#24292E;">curData</span><span style="color:#032F62;">.</span><span style="color:#24292E;">value</span><span style="color:#032F62;">}个 (\${</span><span style="color:#6F42C1;">parseFloat</span><span style="color:#032F62;">(</span><span style="color:#24292E;">curData</span><span style="color:#032F62;">.</span><span style="color:#24292E;">value</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">/</span><span style="color:#032F62;"> </span><span style="color:#24292E;">sum</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">*</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">100</span><span style="color:#032F62;">).</span><span style="color:#6F42C1;">toFixed</span><span style="color:#032F62;">(</span><span style="color:#005CC5;">2</span><span style="color:#032F62;">)</span><span style="color:#032F62;">}%)\`</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    title: {</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&#39;基站个数&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      right: </span><span style="color:#032F62;">&quot;24.2%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      top: </span><span style="color:#032F62;">&quot;16%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      textAlign: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fontSize: </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        align: </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fontWeight: </span><span style="color:#005CC5;">800</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    legend: {</span></span>
<span class="line"><span style="color:#24292E;">      show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      orient: </span><span style="color:#032F62;">&#39;vertical&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      itemWidth: </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      itemHeight: </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;rect&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      top: </span><span style="color:#032F62;">&#39;32%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      right: </span><span style="color:#032F62;">&#39;8%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      padding: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      height: </span><span style="color:#032F62;">&#39;100%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      itemGap: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,       </span><span style="color:#6A737D;">// 设置图例项之间的间隔</span></span>
<span class="line"><span style="color:#24292E;">      textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fontSize: </span><span style="color:#032F62;">&#39;11.5px&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      tooltip: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">: </span><span style="color:#E36209;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> curData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> sum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> avage </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        chartData.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (item.name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> name)</span></span>
<span class="line"><span style="color:#24292E;">            curData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">          sum </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> item.value</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (sum </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          avage </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseFloat</span><span style="color:#24292E;">(curData.value </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> sum </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">toFixed</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">curData</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}：\${</span><span style="color:#24292E;">curData</span><span style="color:#032F62;">.</span><span style="color:#24292E;">value</span><span style="color:#032F62;">} 个 (\${</span><span style="color:#24292E;">avage</span><span style="color:#032F62;">}%)\`</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    series: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;pie&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        radius: [</span><span style="color:#032F62;">&#39;49%&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;81.5%&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        center: [</span><span style="color:#032F62;">&#39;28.5%&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;51.5%&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        data: chartData,  </span><span style="color:#6A737D;">// 在这里使用数据</span></span>
<span class="line"><span style="color:#24292E;">        labelLine: {</span></span>
<span class="line"><span style="color:#24292E;">          show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        label: {</span></span>
<span class="line"><span style="color:#24292E;">          show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          position: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> curData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            chartData.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (item.name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> name) {</span></span>
<span class="line"><span style="color:#24292E;">                curData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`{title|\${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}} </span><span style="color:#005CC5;">\\n\\n</span><span style="color:#032F62;"> {num|\${</span><span style="color:#24292E;">curData</span><span style="color:#032F62;">.</span><span style="color:#24292E;">value</span><span style="color:#032F62;">}个}\`</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        emphasis: {</span></span>
<span class="line"><span style="color:#24292E;">          label: {</span></span>
<span class="line"><span style="color:#24292E;">            show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            rich: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">// 标题</span></span>
<span class="line"><span style="color:#24292E;">              title: {</span></span>
<span class="line"><span style="color:#24292E;">                color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                fontSize: </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                fontWeight: </span><span style="color:#005CC5;">800</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              num: {</span></span>
<span class="line"><span style="color:#24292E;">                color: </span><span style="color:#032F62;">&quot;#4ABEFE&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                fontSize: </span><span style="color:#005CC5;">22</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                fontWeight: </span><span style="color:#005CC5;">900</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ----------------------------  图表配置结束</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 绘制图表</span></span>
<span class="line"><span style="color:#24292E;">  myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(option)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 轮播</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">chartAuto</span><span style="color:#24292E;">(option)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对外供出渐变色方法</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">color1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">color2</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> echarts.graphic.</span><span style="color:#6F42C1;">LinearGradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#24292E;">    { offset: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, color: color1 },</span></span>
<span class="line"><span style="color:#24292E;">    { offset: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, color: color2 }</span></span>
<span class="line"><span style="color:#24292E;">  ])</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 生命周期</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initChart</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 初始化图表</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">onBeforeUnmount</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">destroyChart</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 销毁图表</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 暴露方法</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">defineExpose</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  resetChart,</span></span>
<span class="line"><span style="color:#24292E;">  setColor</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br></div></div><ul><li>使用</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">left-chart-2</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;refLeftChart2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:chart-data=&quot;leftChart2Data&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refLeftChart2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">leftChart2Data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 接口数据</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getLeftChart2Data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取接口数据接口</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">resDataData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">apiCommon</span><span style="color:#E1E4E8;">(screenApi.getDistributionInfo);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">opacity</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;.35&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// const colorArr = [&#39;#D65755&#39;, &#39;#8B6BE9&#39;, &#39;#F0D18C&#39;, &#39;#4389F6&#39;, &#39;#EE9D73&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">colorArr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    refLeftChart2.value.</span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#D65755&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`rgba(214, 87, 85, \${</span><span style="color:#E1E4E8;">opacity</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    refLeftChart2.value.</span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#8B6BE9&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`rgba(139, 107, 233, \${</span><span style="color:#E1E4E8;">opacity</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    refLeftChart2.value.</span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#F0D18C&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`rgba(240, 107, 140, \${</span><span style="color:#E1E4E8;">opacity</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    refLeftChart2.value.</span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#4389F6&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`rgba(67, 137, 246, \${</span><span style="color:#E1E4E8;">opacity</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    refLeftChart2.value.</span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#EE9D73&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`rgba(238, 157, 115, \${</span><span style="color:#E1E4E8;">opacity</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 数据处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  leftChart2Data.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> resDataData.data.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: item.section,</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: item.stationCount,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemStyle: { color: colorArr[index] }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 假数据 -- 数据处理已完成,使用接口数据,假数据注释即可</span></span>
<span class="line"><span style="color:#E1E4E8;">  leftChart2Data.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;90-100分&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: refLeftChart2.value.</span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#D65755&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`rgba(214, 87, 85, \${</span><span style="color:#E1E4E8;">opacity</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;80-90分&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: refLeftChart2.value.</span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#8B6BE9&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`rgba(139, 107, 233, \${</span><span style="color:#E1E4E8;">opacity</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;70-80分&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: refLeftChart2.value.</span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#F0D18C&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`rgba(240, 107, 140, \${</span><span style="color:#E1E4E8;">opacity</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;60-70分&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: refLeftChart2.value.</span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#4389F6&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`rgba(67, 137, 246, \${</span><span style="color:#E1E4E8;">opacity</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;60分以下&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: refLeftChart2.value.</span><span style="color:#B392F0;">setColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#EE9D73&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">\`rgba(238, 157, 115, \${</span><span style="color:#E1E4E8;">opacity</span><span style="color:#9ECBFF;">})\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化图表数据</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initChartData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getLeftChart2Data</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">left-chart-2</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;refLeftChart2&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:chart-data=&quot;leftChart2Data&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refLeftChart2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">leftChart2Data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 接口数据</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getLeftChart2Data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取接口数据接口</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">resDataData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">apiCommon</span><span style="color:#24292E;">(screenApi.getDistributionInfo);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">opacity</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;.35&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// const colorArr = [&#39;#D65755&#39;, &#39;#8B6BE9&#39;, &#39;#F0D18C&#39;, &#39;#4389F6&#39;, &#39;#EE9D73&#39;]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">colorArr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    refLeftChart2.value.</span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#D65755&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`rgba(214, 87, 85, \${</span><span style="color:#24292E;">opacity</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    refLeftChart2.value.</span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#8B6BE9&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`rgba(139, 107, 233, \${</span><span style="color:#24292E;">opacity</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    refLeftChart2.value.</span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#F0D18C&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`rgba(240, 107, 140, \${</span><span style="color:#24292E;">opacity</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    refLeftChart2.value.</span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#4389F6&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`rgba(67, 137, 246, \${</span><span style="color:#24292E;">opacity</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    refLeftChart2.value.</span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#EE9D73&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`rgba(238, 157, 115, \${</span><span style="color:#24292E;">opacity</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 数据处理</span></span>
<span class="line"><span style="color:#24292E;">  leftChart2Data.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> resDataData.data.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      name: item.section,</span></span>
<span class="line"><span style="color:#24292E;">      value: item.stationCount,</span></span>
<span class="line"><span style="color:#24292E;">      itemStyle: { color: colorArr[index] }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 假数据 -- 数据处理已完成,使用接口数据,假数据注释即可</span></span>
<span class="line"><span style="color:#24292E;">  leftChart2Data.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;90-100分&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: refLeftChart2.value.</span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#D65755&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`rgba(214, 87, 85, \${</span><span style="color:#24292E;">opacity</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;80-90分&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: refLeftChart2.value.</span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#8B6BE9&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`rgba(139, 107, 233, \${</span><span style="color:#24292E;">opacity</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;70-80分&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: refLeftChart2.value.</span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#F0D18C&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`rgba(240, 107, 140, \${</span><span style="color:#24292E;">opacity</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;60-70分&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: refLeftChart2.value.</span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#4389F6&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`rgba(67, 137, 246, \${</span><span style="color:#24292E;">opacity</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;60分以下&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: refLeftChart2.value.</span><span style="color:#6F42C1;">setColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#EE9D73&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">\`rgba(238, 157, 115, \${</span><span style="color:#24292E;">opacity</span><span style="color:#032F62;">})\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化图表数据</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initChartData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getLeftChart2Data</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><h2 id="echarts轮播是怎么实现的" tabindex="-1">echarts轮播是怎么实现的 <a class="header-anchor" href="#echarts轮播是怎么实现的" aria-label="Permalink to &quot;echarts轮播是怎么实现的&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> changePieInterval </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 轮播</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">chartAuto</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">option</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(props.chartData) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{}&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> intervaltime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">clearInterval</span><span style="color:#E1E4E8;">(changePieInterval)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> currentIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 当前高亮图形在饼图数据中的下标</span></span>
<span class="line"><span style="color:#E1E4E8;">  changePieInterval </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setInterval</span><span style="color:#E1E4E8;">(selectChart, intervaltime); </span><span style="color:#6A737D;">// 设置自动切换高亮图形的定时器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 取消所有高亮并高亮当前图形</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">highlightChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">myChart) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> idx </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> option.series[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 遍历饼图数据，取消所有图形的高亮效果</span></span>
<span class="line"><span style="color:#E1E4E8;">      myChart.</span><span style="color:#B392F0;">dispatchAction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;showTip&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        seriesIndex: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        dataIndex: idx</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 高亮当前图形</span></span>
<span class="line"><span style="color:#E1E4E8;">    myChart.</span><span style="color:#B392F0;">dispatchAction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;showTip&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      seriesIndex: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      dataIndex: currentIndex</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 用户鼠标悬浮到某一图形时，停止自动切换并高亮鼠标悬浮的图形</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mouseover&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">clearInterval</span><span style="color:#E1E4E8;">(changePieInterval);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    currentIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> params.dataIndex;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">highlightChart</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 用户鼠标移出时，重新开始自动切换</span></span>
<span class="line"><span style="color:#E1E4E8;">  myChart.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mouseout&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">clearInterval</span><span style="color:#E1E4E8;">(changePieInterval);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    changePieInterval </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setInterval</span><span style="color:#E1E4E8;">(selectChart, intervaltime);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 高亮效果切换到下一个图形</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">selectChart</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (option.series[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> dataLen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> option.series[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (currentIndex </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> dataLen;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">highlightChart</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> changePieInterval </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 轮播</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">chartAuto</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">option</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(props.chartData) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{}&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> intervaltime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clearInterval</span><span style="color:#24292E;">(changePieInterval)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> currentIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 当前高亮图形在饼图数据中的下标</span></span>
<span class="line"><span style="color:#24292E;">  changePieInterval </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setInterval</span><span style="color:#24292E;">(selectChart, intervaltime); </span><span style="color:#6A737D;">// 设置自动切换高亮图形的定时器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 取消所有高亮并高亮当前图形</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">highlightChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">myChart) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> idx </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> option.series[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].data) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 遍历饼图数据，取消所有图形的高亮效果</span></span>
<span class="line"><span style="color:#24292E;">      myChart.</span><span style="color:#6F42C1;">dispatchAction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;showTip&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        seriesIndex: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        dataIndex: idx</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 高亮当前图形</span></span>
<span class="line"><span style="color:#24292E;">    myChart.</span><span style="color:#6F42C1;">dispatchAction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;showTip&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      seriesIndex: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      dataIndex: currentIndex</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 用户鼠标悬浮到某一图形时，停止自动切换并高亮鼠标悬浮的图形</span></span>
<span class="line"><span style="color:#24292E;">  myChart.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mouseover&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearInterval</span><span style="color:#24292E;">(changePieInterval);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    currentIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> params.dataIndex;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">highlightChart</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 用户鼠标移出时，重新开始自动切换</span></span>
<span class="line"><span style="color:#24292E;">  myChart.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mouseout&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (changePieInterval) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearInterval</span><span style="color:#24292E;">(changePieInterval);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    changePieInterval </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setInterval</span><span style="color:#24292E;">(selectChart, intervaltime);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 高亮效果切换到下一个图形</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">selectChart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (option.series[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].data) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> dataLen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> option.series[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].data.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      currentIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (currentIndex </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> dataLen;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">highlightChart</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><h2 id="如何让雷达图好看一些" tabindex="-1">如何让雷达图好看一些 <a class="header-anchor" href="#如何让雷达图好看一些" aria-label="Permalink to &quot;如何让雷达图好看一些&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">chartConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  barWidth: </span><span style="color:#9ECBFF;">&#39;12&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fontSize: </span><span style="color:#79B8FF;">10.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#9ECBFF;">&#39;rgba(255, 255, 255, .6)&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 设置横坐标线颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// width: 2, // 设置横坐标线宽度</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">indicator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(props.chartData) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[]&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [  </span><span style="color:#6A737D;">//配置各个维度的最大值</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, max: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> props.chartData.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: item.name,</span></span>
<span class="line"><span style="color:#E1E4E8;">      max: </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ----------------------------  图表配置开始</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">option</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tooltip: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      trigger: </span><span style="color:#9ECBFF;">&#39;item&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&#39;#000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fontSize: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    legend: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemWidth: </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      itemHeight: </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&quot;rect&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        color: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fontSize: </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      left: </span><span style="color:#9ECBFF;">&#39;left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      top: </span><span style="color:#9ECBFF;">&#39;3.5%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      left: </span><span style="color:#9ECBFF;">&#39;3.1%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    radar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      center: [</span><span style="color:#9ECBFF;">&#39;50%&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;57.5%&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      radius: </span><span style="color:#9ECBFF;">&#39;60%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitNumber: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      shape: </span><span style="color:#9ECBFF;">&#39;circle&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 设置为圆形</span></span>
<span class="line"><span style="color:#E1E4E8;">      indicator: indicator.value,</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&#39;rgba(255,255,255,0.6)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;dashed&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&#39;rgba(255,255,255,0.5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;dashed&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitArea: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        areaStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: [</span><span style="color:#9ECBFF;">&#39;rgba(17,85,231,.3)&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;transparent&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;radar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        animation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&quot;当日各维度评分(分)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          value: chartData.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.value),</span></span>
<span class="line"><span style="color:#E1E4E8;">          areaStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 填充区颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> echarts.graphic.</span><span style="color:#B392F0;">LinearGradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { offset: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, color: </span><span style="color:#9ECBFF;">&#39;rgba(22, 62, 112, .8)&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { offset: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, color: </span><span style="color:#9ECBFF;">&#39;rgb(74,190,254,.6)&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ])</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 线条样式</span></span>
<span class="line"><span style="color:#E1E4E8;">          lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;rgb(74,194,254,.5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            width: </span><span style="color:#79B8FF;">1.5</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          symbol: </span><span style="color:#9ECBFF;">&#39;circle&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 拐点形状，rect=矩形，circle=圆形</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 拐点的大小</span></span>
<span class="line"><span style="color:#E1E4E8;">          symbolSize: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 小圆点（拐点）设置为白色</span></span>
<span class="line"><span style="color:#E1E4E8;">          itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&#39;#4abefe&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        }]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// ----------------------------  图表配置结束</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">chartConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  barWidth: </span><span style="color:#032F62;">&#39;12&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    fontSize: </span><span style="color:#005CC5;">10.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#032F62;">&#39;rgba(255, 255, 255, .6)&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 设置横坐标线颜色</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// width: 2, // 设置横坐标线宽度</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">indicator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(props.chartData) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[]&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [  </span><span style="color:#6A737D;">//配置各个维度的最大值</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, max: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> props.chartData.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      name: item.name,</span></span>
<span class="line"><span style="color:#24292E;">      max: </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ----------------------------  图表配置开始</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">option</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    tooltip: {</span></span>
<span class="line"><span style="color:#24292E;">      trigger: </span><span style="color:#032F62;">&#39;item&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;#000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fontSize: </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    legend: {</span></span>
<span class="line"><span style="color:#24292E;">      itemWidth: </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      itemHeight: </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&quot;rect&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fontSize: </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      left: </span><span style="color:#032F62;">&#39;left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      top: </span><span style="color:#032F62;">&#39;3.5%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      left: </span><span style="color:#032F62;">&#39;3.1%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    radar: {</span></span>
<span class="line"><span style="color:#24292E;">      center: [</span><span style="color:#032F62;">&#39;50%&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;57.5%&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      radius: </span><span style="color:#032F62;">&#39;60%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      splitNumber: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      shape: </span><span style="color:#032F62;">&#39;circle&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 设置为圆形</span></span>
<span class="line"><span style="color:#24292E;">      indicator: indicator.value,</span></span>
<span class="line"><span style="color:#24292E;">      axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&#39;rgba(255,255,255,0.6)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;dashed&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&#39;rgba(255,255,255,0.5)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;dashed&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      splitArea: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        areaStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          color: [</span><span style="color:#032F62;">&#39;rgba(17,85,231,.3)&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;transparent&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    series: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;radar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        animation: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data: [{</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&quot;当日各维度评分(分)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          value: chartData.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.value),</span></span>
<span class="line"><span style="color:#24292E;">          areaStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 填充区颜色</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> echarts.graphic.</span><span style="color:#6F42C1;">LinearGradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#24292E;">              { offset: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, color: </span><span style="color:#032F62;">&#39;rgba(22, 62, 112, .8)&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">              { offset: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, color: </span><span style="color:#032F62;">&#39;rgb(74,190,254,.6)&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ])</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 线条样式</span></span>
<span class="line"><span style="color:#24292E;">          lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;rgb(74,194,254,.5)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            width: </span><span style="color:#005CC5;">1.5</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          symbol: </span><span style="color:#032F62;">&#39;circle&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 拐点形状，rect=矩形，circle=圆形</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 拐点的大小</span></span>
<span class="line"><span style="color:#24292E;">          symbolSize: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 小圆点（拐点）设置为白色</span></span>
<span class="line"><span style="color:#24292E;">          itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;#4abefe&#39;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        }]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// ----------------------------  图表配置结束</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br></div></div>`,49),e=[o];function c(r,t,E,y,i,b){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
