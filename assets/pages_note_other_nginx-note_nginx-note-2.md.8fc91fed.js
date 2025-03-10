import{_ as s,o as n,c as a,e as l}from"./app.ef4be69b.js";const u=JSON.parse('{"title":"Nginx配置前端 web 服务","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/other/nginx-note/nginx-note-2.md","filePath":"pages/note/other/nginx-note/nginx-note-2.md","lastUpdated":1702602853000}'),p={name:"pages/note/other/nginx-note/nginx-note-2.md"},e=l(`<h1 id="nginx配置前端-web-服务" tabindex="-1">Nginx配置前端 web 服务 <a class="header-anchor" href="#nginx配置前端-web-服务" aria-label="Permalink to &quot;Nginx配置前端 web 服务&quot;">​</a></h1><h2 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">user                            root;</span></span>
<span class="line"><span style="color:#E1E4E8;">worker_processes                </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">events {</span></span>
<span class="line"><span style="color:#E1E4E8;">  worker_connections            </span><span style="color:#79B8FF;">10240</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">http {</span></span>
<span class="line"><span style="color:#E1E4E8;">  log_format                    </span><span style="color:#9ECBFF;">&#39;$remote_addr - $remote_user [$time_local] &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&quot;$request&quot; $status $body_bytes_sent &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&quot;$http_referer&quot; &quot;$http_user_agent&quot;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  include                       mime.types;</span></span>
<span class="line"><span style="color:#E1E4E8;">  default_type                  application</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">octet</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">stream;</span></span>
<span class="line"><span style="color:#E1E4E8;">  sendfile                      on;</span></span>
<span class="line"><span style="color:#E1E4E8;">  #autoindex                    on;</span></span>
<span class="line"><span style="color:#E1E4E8;">  #autoindex_exact_size         off;</span></span>
<span class="line"><span style="color:#E1E4E8;">  autoindex_localtime           on;</span></span>
<span class="line"><span style="color:#E1E4E8;">  keepalive_timeout             </span><span style="color:#79B8FF;">65</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  gzip                          on;</span></span>
<span class="line"><span style="color:#E1E4E8;">  gzip_disable                  </span><span style="color:#9ECBFF;">&quot;msie6&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  gzip_min_length               </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  gzip_buffers                  </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> 16k;</span></span>
<span class="line"><span style="color:#E1E4E8;">  gzip_comp_level               </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  gzip_types                  text</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">plain application</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">x</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">javascript text</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">css application</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">xml text</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">javascript application</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">x</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">httpd</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">php image</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">jpeg image</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">gif image</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">png;</span></span>
<span class="line"><span style="color:#E1E4E8;">  gzip_types                    </span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  gzip_vary                     off;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_tokens                 off;</span></span>
<span class="line"><span style="color:#E1E4E8;">  client_max_body_size          200m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  server {</span></span>
<span class="line"><span style="color:#E1E4E8;">    listen                      </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;"> default_server;</span></span>
<span class="line"><span style="color:#E1E4E8;">    server_name                 _;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">                      </span><span style="color:#79B8FF;">403</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">www</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">403</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  include                       ..</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">serve</span><span style="color:#6A737D;">/*.conf;</span></span>
<span class="line"><span style="color:#6A737D;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">user                            root;</span></span>
<span class="line"><span style="color:#24292E;">worker_processes                </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">events {</span></span>
<span class="line"><span style="color:#24292E;">  worker_connections            </span><span style="color:#005CC5;">10240</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">http {</span></span>
<span class="line"><span style="color:#24292E;">  log_format                    </span><span style="color:#032F62;">&#39;$remote_addr - $remote_user [$time_local] &#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&quot;$request&quot; $status $body_bytes_sent &#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&quot;$http_referer&quot; &quot;$http_user_agent&quot;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  include                       mime.types;</span></span>
<span class="line"><span style="color:#24292E;">  default_type                  application</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">octet</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">stream;</span></span>
<span class="line"><span style="color:#24292E;">  sendfile                      on;</span></span>
<span class="line"><span style="color:#24292E;">  #autoindex                    on;</span></span>
<span class="line"><span style="color:#24292E;">  #autoindex_exact_size         off;</span></span>
<span class="line"><span style="color:#24292E;">  autoindex_localtime           on;</span></span>
<span class="line"><span style="color:#24292E;">  keepalive_timeout             </span><span style="color:#005CC5;">65</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  gzip                          on;</span></span>
<span class="line"><span style="color:#24292E;">  gzip_disable                  </span><span style="color:#032F62;">&quot;msie6&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  gzip_min_length               </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  gzip_buffers                  </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> 16k;</span></span>
<span class="line"><span style="color:#24292E;">  gzip_comp_level               </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  gzip_types                  text</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">plain application</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">x</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">javascript text</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">css application</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">xml text</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">javascript application</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">x</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">httpd</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">php image</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">jpeg image</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">gif image</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">png;</span></span>
<span class="line"><span style="color:#24292E;">  gzip_types                    </span><span style="color:#032F62;">&quot;*&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  gzip_vary                     off;</span></span>
<span class="line"><span style="color:#24292E;">  server_tokens                 off;</span></span>
<span class="line"><span style="color:#24292E;">  client_max_body_size          200m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  server {</span></span>
<span class="line"><span style="color:#24292E;">    listen                      </span><span style="color:#005CC5;">80</span><span style="color:#24292E;"> default_server;</span></span>
<span class="line"><span style="color:#24292E;">    server_name                 _;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">                      </span><span style="color:#005CC5;">403</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">www</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">403</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  include                       ..</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">serve</span><span style="color:#6A737D;">/*.conf;</span></span>
<span class="line"><span style="color:#6A737D;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="隐藏-nginx-版本信息" tabindex="-1">隐藏 Nginx 版本信息 <a class="header-anchor" href="#隐藏-nginx-版本信息" aria-label="Permalink to &quot;隐藏 Nginx 版本信息&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">http {</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_tokens         off;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">http {</span></span>
<span class="line"><span style="color:#24292E;">  server_tokens         off;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="禁止ip直接访问80端口" tabindex="-1">禁止ip直接访问80端口 <a class="header-anchor" href="#禁止ip直接访问80端口" aria-label="Permalink to &quot;禁止ip直接访问80端口&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">  listen                </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_name           _;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">  listen                </span><span style="color:#005CC5;">80</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  server_name           _;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">                </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="启动-web-服务-vue-项目为例" tabindex="-1">启动 web 服务 (vue 项目为例) <a class="header-anchor" href="#启动-web-服务-vue-项目为例" aria-label="Permalink to &quot;启动 web 服务 (vue 项目为例)&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">  # 项目启动端口</span></span>
<span class="line"><span style="color:#E1E4E8;">  listen            </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  # 域名（localhost）</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_name       _;</span></span>
<span class="line"><span style="color:#E1E4E8;">  # 禁止 iframe 嵌套</span></span>
<span class="line"><span style="color:#E1E4E8;">  add_header        </span><span style="color:#79B8FF;">X</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Frame</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Options </span><span style="color:#79B8FF;">SAMEORIGIN</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  # 访问地址 根路径配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    # 项目目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    root 	    html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    # 默认读取文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    index           index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    # 配置 history 模式的刷新空白</span></span>
<span class="line"><span style="color:#E1E4E8;">    try_files       $uri $uri</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  # 后缀匹配，解决静态资源找不到问题</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">~*</span><span style="color:#E1E4E8;"> \\.(gif</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">jpg</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">jpeg</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">png</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">css</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">js</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">ico)$ { </span></span>
<span class="line"><span style="color:#E1E4E8;">    root           html</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">static</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  # 图片防盗链</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">~</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">static</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">.</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">\\.(jpg</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">jpeg</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">png</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">gif</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">webp)$ {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root              html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    valid_referers    </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">.deeruby.com;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($invalid_referer) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">403</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  # 访问限制</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">static {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root               html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    # allow 允许</span></span>
<span class="line"><span style="color:#E1E4E8;">    allow              39.xxx.xxx.xxx;</span></span>
<span class="line"><span style="color:#E1E4E8;">    # deny  拒绝</span></span>
<span class="line"><span style="color:#E1E4E8;">    deny               all;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">  # 项目启动端口</span></span>
<span class="line"><span style="color:#24292E;">  listen            </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  # 域名（localhost）</span></span>
<span class="line"><span style="color:#24292E;">  server_name       _;</span></span>
<span class="line"><span style="color:#24292E;">  # 禁止 iframe 嵌套</span></span>
<span class="line"><span style="color:#24292E;">  add_header        </span><span style="color:#005CC5;">X</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Frame</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Options </span><span style="color:#005CC5;">SAMEORIGIN</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  # 访问地址 根路径配置</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    # 项目目录</span></span>
<span class="line"><span style="color:#24292E;">    root 	    html;</span></span>
<span class="line"><span style="color:#24292E;">    # 默认读取文件</span></span>
<span class="line"><span style="color:#24292E;">    index           index.html;</span></span>
<span class="line"><span style="color:#24292E;">    # 配置 history 模式的刷新空白</span></span>
<span class="line"><span style="color:#24292E;">    try_files       $uri $uri</span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  # 后缀匹配，解决静态资源找不到问题</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">~*</span><span style="color:#24292E;"> \\.(gif</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">jpg</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">jpeg</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">png</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">css</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">js</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">ico)$ { </span></span>
<span class="line"><span style="color:#24292E;">    root           html</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">static</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  # 图片防盗链</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">~</span><span style="color:#032F62;">/static/</span><span style="color:#24292E;">.</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">\\.(jpg</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">jpeg</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">png</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">gif</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">webp)$ {</span></span>
<span class="line"><span style="color:#24292E;">    root              html;</span></span>
<span class="line"><span style="color:#24292E;">    valid_referers    </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">.deeruby.com;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($invalid_referer) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">          </span><span style="color:#005CC5;">403</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  # 访问限制</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">static {</span></span>
<span class="line"><span style="color:#24292E;">    root               html;</span></span>
<span class="line"><span style="color:#24292E;">    # allow 允许</span></span>
<span class="line"><span style="color:#24292E;">    allow              39.xxx.xxx.xxx;</span></span>
<span class="line"><span style="color:#24292E;">    # deny  拒绝</span></span>
<span class="line"><span style="color:#24292E;">    deny               all;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="pc端和移动端使用不同的项目文件映射" tabindex="-1">PC端和移动端使用不同的项目文件映射 <a class="header-anchor" href="#pc端和移动端使用不同的项目文件映射" aria-label="Permalink to &quot;PC端和移动端使用不同的项目文件映射&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">home</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">static</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">pc;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($http_user_agent </span><span style="color:#F97583;">~*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;(mobile|android|iphone|ipad|phone)&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      root </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">home</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">static</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">mobile;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    index index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">......</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    root </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">home</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">static</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">pc;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($http_user_agent </span><span style="color:#D73A49;">~*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;(mobile|android|iphone|ipad|phone)&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      root </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">home</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">static</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">mobile;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    index index.html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="一个web服务-配置多个项目-location-匹配路由区别" tabindex="-1">一个web服务，配置多个项目 (location 匹配路由区别) <a class="header-anchor" href="#一个web服务-配置多个项目-location-匹配路由区别" aria-label="Permalink to &quot;一个web服务，配置多个项目 (location 匹配路由区别)&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">  listen                </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_name           _;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  # 主应用</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root          html</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">main;</span></span>
<span class="line"><span style="color:#E1E4E8;">    index               index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    try_files           $uri $uri</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  # 子应用一</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">^~</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">store</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_pass          </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//localhost:8001;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_redirect      off;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_set_header    </span><span style="color:#79B8FF;">X</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Real</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">IP</span><span style="color:#E1E4E8;"> $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_set_header    </span><span style="color:#79B8FF;">X</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Forwarded</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">For</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_set_header    </span><span style="color:#79B8FF;">X</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Forwarded</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  # 子应用二</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">^~</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">school</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_pass          </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//localhost:8002;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_redirect      off;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_set_header    </span><span style="color:#79B8FF;">X</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Real</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">IP</span><span style="color:#E1E4E8;"> $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_set_header    </span><span style="color:#79B8FF;">X</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Forwarded</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  # 静态资源读取不到问题处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  rewrite </span><span style="color:#F97583;">^/</span><span style="color:#E1E4E8;">api</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">profile</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">(.</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)$ </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">(替换成正确路径的文件的上一层目录)</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">$1 last;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 子应用一服务</span></span>
<span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">  listen                </span><span style="color:#79B8FF;">8001</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_name           _;</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root          html</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">store;</span></span>
<span class="line"><span style="color:#E1E4E8;">    index               index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    try_files           $uri $uri</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">^~</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">store</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias               html</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">store</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    index               index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">    try_files           $uri </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">store</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  # 接口代理</span></span>
<span class="line"><span style="color:#E1E4E8;">  location  </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">api {</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_pass          </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//localhost:8089;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># 子应用二服务</span></span>
<span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">  listen                </span><span style="color:#79B8FF;">8002</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_name           _;</span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root          html</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">school;</span></span>
<span class="line"><span style="color:#E1E4E8;">    index               index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    try_files           $uri $uri</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">^~</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">school</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias               html</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">school</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    index               index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">    try_files           $uri </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">school</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  # 接口代理</span></span>
<span class="line"><span style="color:#E1E4E8;">  location  </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">api {</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_pass          </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//localhost:10010;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">  listen                </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  server_name           _;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  # 主应用</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    root          html</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">main;</span></span>
<span class="line"><span style="color:#24292E;">    index               index.html;</span></span>
<span class="line"><span style="color:#24292E;">    try_files           $uri $uri</span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  # 子应用一</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">^~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/store/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    proxy_pass          </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//localhost:8001;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_redirect      off;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_set_header    </span><span style="color:#005CC5;">X</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Real</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">IP</span><span style="color:#24292E;"> $remote_addr;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_set_header    </span><span style="color:#005CC5;">X</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Forwarded</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">For</span></span>
<span class="line"><span style="color:#24292E;">    proxy_set_header    </span><span style="color:#005CC5;">X</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Forwarded</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  # 子应用二</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">^~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/school/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    proxy_pass          </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//localhost:8002;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_redirect      off;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_set_header    Host $host;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_set_header    </span><span style="color:#005CC5;">X</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Real</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">IP</span><span style="color:#24292E;"> $remote_addr;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_set_header    </span><span style="color:#005CC5;">X</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Forwarded</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  # 静态资源读取不到问题处理</span></span>
<span class="line"><span style="color:#24292E;">  rewrite </span><span style="color:#D73A49;">^/</span><span style="color:#24292E;">api</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">profile</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">(.</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)$ </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">(替换成正确路径的文件的上一层目录)</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">$1 last;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 子应用一服务</span></span>
<span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">  listen                </span><span style="color:#005CC5;">8001</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  server_name           _;</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    root          html</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">store;</span></span>
<span class="line"><span style="color:#24292E;">    index               index.html;</span></span>
<span class="line"><span style="color:#24292E;">    try_files           $uri $uri</span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">^~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/store/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    alias               html</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">store</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    index               index.html index.htm;</span></span>
<span class="line"><span style="color:#24292E;">    try_files           $uri </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">store</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  # 接口代理</span></span>
<span class="line"><span style="color:#24292E;">  location  </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">api {</span></span>
<span class="line"><span style="color:#24292E;">    proxy_pass          </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//localhost:8089;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># 子应用二服务</span></span>
<span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">  listen                </span><span style="color:#005CC5;">8002</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  server_name           _;</span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    root          html</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">school;</span></span>
<span class="line"><span style="color:#24292E;">    index               index.html;</span></span>
<span class="line"><span style="color:#24292E;">    try_files           $uri $uri</span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">^~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/school/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    alias               html</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">school</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    index               index.html index.htm;</span></span>
<span class="line"><span style="color:#24292E;">    try_files           $uri </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">school</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  # 接口代理</span></span>
<span class="line"><span style="color:#24292E;">  location  </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">api {</span></span>
<span class="line"><span style="color:#24292E;">    proxy_pass          </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//localhost:10010;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><h2 id="配置负载均衡" tabindex="-1">配置负载均衡 <a class="header-anchor" href="#配置负载均衡" aria-label="Permalink to &quot;配置负载均衡&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">upstream my_upstream {</span></span>
<span class="line"><span style="color:#E1E4E8;">  server                </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//localhost:9001;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server                </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//localhost:9002;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server                </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//localhost:9003;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">  listen                </span><span style="color:#79B8FF;">9000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_name           test.com;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_pass          my_upstream;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_set_header    Host $proxy_host;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_set_header    </span><span style="color:#79B8FF;">X</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Real</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">IP</span><span style="color:#E1E4E8;"> $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy_set_header    </span><span style="color:#79B8FF;">X</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">Forwarded</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">upstream my_upstream {</span></span>
<span class="line"><span style="color:#24292E;">  server                </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//localhost:9001;</span></span>
<span class="line"><span style="color:#24292E;">  server                </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//localhost:9002;</span></span>
<span class="line"><span style="color:#24292E;">  server                </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//localhost:9003;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">  listen                </span><span style="color:#005CC5;">9000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  server_name           test.com;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    proxy_pass          my_upstream;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_set_header    Host $proxy_host;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_set_header    </span><span style="color:#005CC5;">X</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Real</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">IP</span><span style="color:#24292E;"> $remote_addr;</span></span>
<span class="line"><span style="color:#24292E;">    proxy_set_header    </span><span style="color:#005CC5;">X</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">Forwarded</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="ssl-配置-https" tabindex="-1">SSL 配置 HTTPS <a class="header-anchor" href="#ssl-配置-https" aria-label="Permalink to &quot;SSL 配置 HTTPS&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">  listen                      </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="color:#E1E4E8;">  # 将 http 重定向转移到 https</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">301</span><span style="color:#E1E4E8;"> https:</span><span style="color:#6A737D;">//$server_name$request_uri;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">  listen                      </span><span style="color:#79B8FF;">443</span><span style="color:#E1E4E8;"> ssl;</span></span>
<span class="line"><span style="color:#E1E4E8;">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ssl_certificate             </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">etc</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">nginx</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">ssl</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">www.xxx.com.pem;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ssl_certificate_key         </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">etc</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">nginx</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">ssl</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">www.xxx.com.key;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ssl_session_timeout         10m;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ssl_ciphers                 </span><span style="color:#79B8FF;">ECDHE</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">RSA</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">AES128</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">GCM</span><span style="color:#F97583;">-</span><span style="color:#B392F0;">SHA256</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">ECDHE</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">ECDH</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">AES</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">HIGH</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">NULL</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">aNULL</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">MD5</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">ADH</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">RC4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ssl_protocols               TLSv1 TLSv1.</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> TLSv1.</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ssl_prefer_server_ciphers   on;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root                    </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">project</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">xxx;</span></span>
<span class="line"><span style="color:#E1E4E8;">    index                   index.html index.htm index.md;</span></span>
<span class="line"><span style="color:#E1E4E8;">    try_files               $uri $uri</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">  listen                      </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="color:#24292E;">  # 将 http 重定向转移到 https</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">301</span><span style="color:#24292E;"> https:</span><span style="color:#6A737D;">//$server_name$request_uri;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">server {</span></span>
<span class="line"><span style="color:#24292E;">  listen                      </span><span style="color:#005CC5;">443</span><span style="color:#24292E;"> ssl;</span></span>
<span class="line"><span style="color:#24292E;">  server_name                 www.xxx.com;</span></span>
<span class="line"><span style="color:#24292E;">  ssl_certificate             </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">etc</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">nginx</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">ssl</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">www.xxx.com.pem;</span></span>
<span class="line"><span style="color:#24292E;">  ssl_certificate_key         </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">etc</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">nginx</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">ssl</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">www.xxx.com.key;</span></span>
<span class="line"><span style="color:#24292E;">  ssl_session_timeout         10m;</span></span>
<span class="line"><span style="color:#24292E;">  ssl_ciphers                 </span><span style="color:#005CC5;">ECDHE</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">RSA</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">AES128</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">GCM</span><span style="color:#D73A49;">-</span><span style="color:#6F42C1;">SHA256</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">ECDHE</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">ECDH</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">AES</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">HIGH</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">NULL</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">aNULL</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">MD5</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">ADH</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">RC4</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  ssl_protocols               TLSv1 TLSv1.</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> TLSv1.</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  ssl_prefer_server_ciphers   on;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    root                    </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">project</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">xxx;</span></span>
<span class="line"><span style="color:#24292E;">    index                   index.html index.htm index.md;</span></span>
<span class="line"><span style="color:#24292E;">    try_files               $uri $uri</span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,17),o=[e];function r(c,t,E,y,i,b){return n(),a("div",null,o)}const d=s(p,[["render",r]]);export{u as __pageData,d as default};
//# sourceMappingURL=pages_note_other_nginx-note_nginx-note-2.md.8fc91fed.js.map
