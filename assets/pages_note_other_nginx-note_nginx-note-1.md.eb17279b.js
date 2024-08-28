import{_ as s,o as n,c as a,e as l}from"./app.1426208b.js";const F=JSON.parse('{"title":"nginx工作积累","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/other/nginx-note/nginx-note-1.md","filePath":"pages/note/other/nginx-note/nginx-note-1.md","lastUpdated":1702602853000}'),p={name:"pages/note/other/nginx-note/nginx-note-1.md"},e=l(`<h1 id="nginx工作积累" tabindex="-1">nginx工作积累 <a class="header-anchor" href="#nginx工作积累" aria-label="Permalink to &quot;nginx工作积累&quot;">​</a></h1><h2 id="_1-vue项目中使用proxy之后-在nginx中如何代理" tabindex="-1">1. vue项目中使用proxy之后，在nginx中如何代理 <a class="header-anchor" href="#_1-vue项目中使用proxy之后-在nginx中如何代理" aria-label="Permalink to &quot;1. vue项目中使用proxy之后，在nginx中如何代理&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">      listen       </span><span style="color:#79B8FF;">8000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      server_name  web;</span></span>
<span class="line"><span style="color:#E1E4E8;">      root         </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">usr</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">share</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">nginx</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      location </span><span style="color:#F97583;">^~/</span><span style="color:#E1E4E8;">api {</span></span>
<span class="line"><span style="color:#E1E4E8;">           proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">           proxy_set_header </span><span style="color:#79B8FF;">X</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Real</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">IP</span><span style="color:#E1E4E8;"> $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">           proxy_set_header </span><span style="color:#79B8FF;">X</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Forwarded</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">           proxy_buffering off;</span></span>
<span class="line"><span style="color:#E1E4E8;">           rewrite </span><span style="color:#F97583;">^</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">api</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">(.</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)$ </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">$1 </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">           proxy_pass </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//gateway;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">      listen       </span><span style="color:#005CC5;">8000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      server_name  web;</span></span>
<span class="line"><span style="color:#24292E;">      root         </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">usr</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">share</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">nginx</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      location </span><span style="color:#D73A49;">^~/</span><span style="color:#24292E;">api {</span></span>
<span class="line"><span style="color:#24292E;">           proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#24292E;">           proxy_set_header </span><span style="color:#005CC5;">X</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Real</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">IP</span><span style="color:#24292E;"> $remote_addr;</span></span>
<span class="line"><span style="color:#24292E;">           proxy_set_header </span><span style="color:#005CC5;">X</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Forwarded</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292E;">           proxy_buffering off;</span></span>
<span class="line"><span style="color:#24292E;">           rewrite </span><span style="color:#D73A49;">^</span><span style="color:#032F62;">/api/</span><span style="color:#24292E;">(.</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)$ </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">$1 </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">           proxy_pass </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//gateway;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>在app.json文件中的page数组中添加路径，会自动创建文件夹，并生成其相对应的js、json、wxml和wxss文件</p><h2 id="_2-nginx中解决请求模型地址跨域问题" tabindex="-1">2. nginx中解决请求模型地址跨域问题 <a class="header-anchor" href="#_2-nginx中解决请求模型地址跨域问题" aria-label="Permalink to &quot;2. nginx中解决请求模型地址跨域问题&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// config.json</span></span>
<span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">  listen       </span><span style="color:#79B8FF;">6080</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      root   </span><span style="color:#B392F0;">E</span><span style="color:#E1E4E8;">:\\workspace\\_poj;</span></span>
<span class="line"><span style="color:#E1E4E8;">      index  index.html index.htm;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      include       nginx_cors;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  error_page   </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">50x.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">50x.html {</span></span>
<span class="line"><span style="color:#E1E4E8;">      root   html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// nginx_cors</span></span>
<span class="line"><span style="color:#E1E4E8;">#坑：</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">、</span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Credentials&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> 是不能</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">  可以 add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#E1E4E8;"> $http_origin;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($request_method </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;OPTIONS&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;GET, POST, OPTIONS&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	# Custom headers and headers various browsers </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">should</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> be </span><span style="color:#79B8FF;">OK</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> but aren</span><span style="color:#9ECBFF;">&#39;t</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Headers&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	# Tell client that </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;"> pre</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">flight info is valid for </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> days </span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Max-Age&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1728000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;text/plain charset=UTF-8&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Content-Length&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">204</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($request_method </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;GET, POST, OPTIONS&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Headers&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($request_method </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;GET, POST, OPTIONS&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	add_header </span><span style="color:#9ECBFF;">&#39;Access-Control-Allow-Headers&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// config.json</span></span>
<span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">  listen       </span><span style="color:#005CC5;">6080</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      root   </span><span style="color:#6F42C1;">E</span><span style="color:#24292E;">:\\workspace\\_poj;</span></span>
<span class="line"><span style="color:#24292E;">      index  index.html index.htm;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      include       nginx_cors;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  error_page   </span><span style="color:#005CC5;">500</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">502</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">503</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">504</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">50x.html;</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">50x.html {</span></span>
<span class="line"><span style="color:#24292E;">      root   html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// nginx_cors</span></span>
<span class="line"><span style="color:#24292E;">#坑：</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">、</span><span style="color:#032F62;">&#39;Access-Control-Allow-Credentials&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> 是不能</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">  可以 add_header </span><span style="color:#032F62;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#24292E;"> $http_origin;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($request_method </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;OPTIONS&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;*&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;GET, POST, OPTIONS&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	# Custom headers and headers various browsers </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">should</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> be </span><span style="color:#005CC5;">OK</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> but aren</span><span style="color:#032F62;">&#39;t</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Access-Control-Allow-Headers&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	# Tell client that </span><span style="color:#005CC5;">this</span><span style="color:#24292E;"> pre</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">flight info is valid for </span><span style="color:#005CC5;">20</span><span style="color:#24292E;"> days </span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Access-Control-Max-Age&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1728000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;text/plain charset=UTF-8&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Content-Length&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">204</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($request_method </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;*&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;GET, POST, OPTIONS&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Access-Control-Allow-Headers&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($request_method </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;GET&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Access-Control-Allow-Origin&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;*&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;GET, POST, OPTIONS&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	add_header </span><span style="color:#032F62;">&#39;Access-Control-Allow-Headers&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="_3-nginx中设置密码" tabindex="-1">3. nginx中设置密码 <a class="header-anchor" href="#_3-nginx中设置密码" aria-label="Permalink to &quot;3. nginx中设置密码&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">    listen       </span><span style="color:#79B8FF;">6080</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        root   </span><span style="color:#B392F0;">E</span><span style="color:#E1E4E8;">:\\workspace\\_poj;</span></span>
<span class="line"><span style="color:#E1E4E8;">        index  index.html index.htm;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        auth_basic </span><span style="color:#9ECBFF;">&quot;BasicAuth&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        auth_basic_user_file htpd;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        include       nginx_cors;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    location @rewrites {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rewrite </span><span style="color:#F97583;">^</span><span style="color:#E1E4E8;">(.</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">)$ </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html last;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    error_page   </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">50x.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    location </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">50x.html {</span></span>
<span class="line"><span style="color:#E1E4E8;">        root   html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// htpd</span></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">123456</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">    listen       </span><span style="color:#005CC5;">6080</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        root   </span><span style="color:#6F42C1;">E</span><span style="color:#24292E;">:\\workspace\\_poj;</span></span>
<span class="line"><span style="color:#24292E;">        index  index.html index.htm;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        auth_basic </span><span style="color:#032F62;">&quot;BasicAuth&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        auth_basic_user_file htpd;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        include       nginx_cors;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    location @rewrites {</span></span>
<span class="line"><span style="color:#24292E;">        rewrite </span><span style="color:#D73A49;">^</span><span style="color:#24292E;">(.</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">)$ </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html last;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    error_page   </span><span style="color:#005CC5;">500</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">502</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">503</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">504</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">50x.html;</span></span>
<span class="line"><span style="color:#24292E;">    location </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">50x.html {</span></span>
<span class="line"><span style="color:#24292E;">        root   html;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// htpd</span></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">123456</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_4-vue中proxy的反向代理" tabindex="-1">4. vue中proxy的反向代理 <a class="header-anchor" href="#_4-vue中proxy的反向代理" aria-label="Permalink to &quot;4. vue中proxy的反向代理&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">include </span><span style="color:#E1E4E8;">      nginx_cors;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">^~/api </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_buffering </span><span style="color:#E1E4E8;">off;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">rewrite</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">^/api/(.*)$</span><span style="color:#E1E4E8;"> /$1 </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://192.168.2.245:8031/;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> error_page </span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;">  /50x.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/50x.html </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">  html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">include </span><span style="color:#24292E;">      nginx_cors;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">^~/api </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">Host $host;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_buffering </span><span style="color:#24292E;">off;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">rewrite</span><span style="color:#24292E;"> </span><span style="color:#032F62;">^/api/(.*)$</span><span style="color:#24292E;"> /$1 </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_pass </span><span style="color:#24292E;">http://192.168.2.245:8031/;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> error_page </span><span style="color:#24292E;">  </span><span style="color:#005CC5;">500</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">502</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">503</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">504</span><span style="color:#24292E;">  /50x.html;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/50x.html </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> root </span><span style="color:#24292E;">  html;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,10),o=[e];function r(c,t,E,y,i,d){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{F as __pageData,u as default};
