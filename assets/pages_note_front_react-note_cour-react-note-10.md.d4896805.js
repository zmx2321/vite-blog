import{_ as s,o as n,c as a,e as l}from"./app.435c5043.js";const d=JSON.parse('{"title":"使用WebPack配置正确React项目","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/front/react-note/cour-react-note-10.md","filePath":"pages/note/front/react-note/cour-react-note-10.md","lastUpdated":1700126610000}'),p={name:"pages/note/front/react-note/cour-react-note-10.md"},e=l(`<h1 id="使用webpack配置正确react项目" tabindex="-1">使用WebPack配置正确React项目 <a class="header-anchor" href="#使用webpack配置正确react项目" aria-label="Permalink to &quot;使用WebPack配置正确React项目&quot;">​</a></h1><h2 id="_1-复习webpack" tabindex="-1">1. 复习webpack <a class="header-anchor" href="#_1-复习webpack" aria-label="Permalink to &quot;1. 复习webpack&quot;">​</a></h2><h3 id="_1-几个基本概念" tabindex="-1">1. 几个基本概念 <a class="header-anchor" href="#_1-几个基本概念" aria-label="Permalink to &quot;1. 几个基本概念&quot;">​</a></h3><ul><li><a href="https://webpack.js.org/" target="_blank" rel="noreferrer">webpack</a> =&gt; 模块加载器 =&gt; 必须有node才能使用</li><li>webpack就是node里面的一个包</li><li>npm、cnpm、bower、yarn =&gt; 包管理器</li><li>根据官网显示，几乎任何web文件，经过webpack入口处理之后，基本就只有四种文件 <ul><li>js、css、jpg、png</li></ul></li></ul><h3 id="_2-安装webpack" tabindex="-1">2. 安装webpack <a class="header-anchor" href="#_2-安装webpack" aria-label="Permalink to &quot;2. 安装webpack&quot;">​</a></h3><ul><li>使用之前需要安装两个命令环境 <ul><li><code>npm install webpack -g</code></li><li><code>npm install webpack-dev-server -g</code> =&gt; 小服务器 <ul><li>这个需要基于webpack</li></ul></li></ul></li><li>查看是否安装只需要执行<code>webpack -v</code><ul><li>会显示出三个已安装文件 <ul><li>webpack 5.25.1</li><li>webpack-cli 4.4.0</li><li>webpack-dev-server 3.11.2</li></ul></li></ul></li></ul><h3 id="_3-webpack的组成" tabindex="-1">3. webpack的组成 <a class="header-anchor" href="#_3-webpack的组成" aria-label="Permalink to &quot;3. webpack的组成&quot;">​</a></h3><ul><li>需要有一个入口和出口 <ul><li>webpack本质就是把入口文件压缩成一个文件，让你的html去引用达到最精简的效果，还可以把你的代码进行压缩</li></ul></li><li>有一个loader（加载器）</li><li>还可以安装插件 =&gt; plugins</li></ul><h3 id="_4-运行一个简单的webpack" tabindex="-1">4. 运行一个简单的webpack <a class="header-anchor" href="#_4-运行一个简单的webpack" aria-label="Permalink to &quot;4. 运行一个简单的webpack&quot;">​</a></h3><blockquote><p>需要一个配置文件才可以运行 =&gt; webpack.config.js</p></blockquote><ul><li>创建脚本</li></ul><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- </span></span>
<span class="line"><span style="color:#6A737D;">  cd xxx =&gt; touch webpack.config.js</span></span>
<span class="line"><span style="color:#6A737D;">  touch index.html</span></span>
<span class="line"><span style="color:#6A737D;">  touch index.js</span></span>
<span class="line"><span style="color:#6A737D;">  进入到webpack.config.js根路径</span></span>
<span class="line"><span style="color:#6A737D;">  命令行执行命令 =&gt; webpack =&gt; 打包完成，执行index.html</span></span>
<span class="line"><span style="color:#6A737D;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- webpack.config.js --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 输出一个东西</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 入口文件 =&gt; 自己写的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: </span><span style="color:#9ECBFF;">&#39;./index.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 出口文件 =&gt; 打包之后的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 打包之后文件的名字</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- index.html --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;deist/bundle&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- index.js --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">alert(1);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- </span></span>
<span class="line"><span style="color:#6A737D;">  cd xxx =&gt; touch webpack.config.js</span></span>
<span class="line"><span style="color:#6A737D;">  touch index.html</span></span>
<span class="line"><span style="color:#6A737D;">  touch index.js</span></span>
<span class="line"><span style="color:#6A737D;">  进入到webpack.config.js根路径</span></span>
<span class="line"><span style="color:#6A737D;">  命令行执行命令 =&gt; webpack =&gt; 打包完成，执行index.html</span></span>
<span class="line"><span style="color:#6A737D;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- webpack.config.js --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 输出一个东西</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 入口文件 =&gt; 自己写的文件</span></span>
<span class="line"><span style="color:#24292E;">    entry: </span><span style="color:#032F62;">&#39;./index.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 出口文件 =&gt; 打包之后的文件</span></span>
<span class="line"><span style="color:#24292E;">    output: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 打包之后文件的名字</span></span>
<span class="line"><span style="color:#24292E;">      filename: </span><span style="color:#032F62;">&#39;bundle.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- index.html --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;deist/bundle&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- index.js --&gt;</span></span>
<span class="line"><span style="color:#24292E;">alert(1);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="_5-webpack的其他功能" tabindex="-1">5. webpack的其他功能 <a class="header-anchor" href="#_5-webpack的其他功能" aria-label="Permalink to &quot;5. webpack的其他功能&quot;">​</a></h3><ol><li>自动打包与实时刷新</li></ol><ul><li><code>webpack -w</code> =&gt; 在脚本运行之后，每次保存都会自动编译，打包文件会做响应修改 <ul><li>这里的w是watch的意思，表示持续监听，并且打包</li></ul></li><li><code>webpack -p</code> =&gt; 现在已经失效了 <ul><li>压缩打包</li></ul></li><li><code>webpack -pw</code> =&gt; 现在已经失效了 <ul><li>压缩打包并且持续监听</li></ul></li></ul><ol start="2"><li>支持es6模块语法</li></ol><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- index.js --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {a,b} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./a&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- a.js --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">a</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">b</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 或</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, b</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;">{a, b}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 或打包一个对象 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- index.js --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> json </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./a&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- a.js --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    b: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- index.js --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {a,b} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./a&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- a.js --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">a</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">b</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 或</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, b</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;">{a, b}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 或打包一个对象 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- index.js --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> json </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./a&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- a.js --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    b: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,17),o=[e];function c(t,r,i,E,y,b){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{d as __pageData,m as default};
