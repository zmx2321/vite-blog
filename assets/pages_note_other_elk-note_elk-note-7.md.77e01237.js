import{_ as s,o as a,c as n,e}from"./app.4d0300d2.js";const _=JSON.parse('{"title":"elasticSearch相关基础","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/other/elk-note/elk-note-7.md","filePath":"pages/note/other/elk-note/elk-note-7.md","lastUpdated":1700115938000}'),l={name:"pages/note/other/elk-note/elk-note-7.md"},p=e(`<h1 id="elasticsearch相关基础" tabindex="-1">elasticSearch相关基础 <a class="header-anchor" href="#elasticsearch相关基础" aria-label="Permalink to &quot;elasticSearch相关基础&quot;">​</a></h1><h2 id="_1-elasticsearch相关基本概念" tabindex="-1">1. elasticSearch相关基本概念 <a class="header-anchor" href="#_1-elasticsearch相关基本概念" aria-label="Permalink to &quot;1. elasticSearch相关基本概念&quot;">​</a></h2><h3 id="_1-1-索引的含义" tabindex="-1">1.1. 索引的含义 <a class="header-anchor" href="#_1-1-索引的含义" aria-label="Permalink to &quot;1.1. 索引的含义&quot;">​</a></h3><ol><li>某一类文档的集合构成一个索引，类比到数据库就是一个数据表(7.x之后)</li></ol><ul><li>一个索引就是一张表</li></ul><ol start="2"><li>他还描述了一个动作，就是将某个文档保存在elasticSearch的过程也叫索引</li><li>倒排索引</li></ol><h3 id="_1-2-什么是mapping" tabindex="-1">1.2. 什么是mapping <a class="header-anchor" href="#_1-2-什么是mapping" aria-label="Permalink to &quot;1.2. 什么是mapping&quot;">​</a></h3><ul><li>多个文档形成了一个索引</li><li>mapping是ES每个文档的约束信息，例如属性类型，能否被索引等</li></ul><h3 id="_1-3-什么是dsl" tabindex="-1">1.3. 什么是DSL <a class="header-anchor" href="#_1-3-什么是dsl" aria-label="Permalink to &quot;1.3. 什么是DSL&quot;">​</a></h3><ul><li>DSL是ES的查询语言</li></ul><h2 id="_2-查看所有索引" tabindex="-1">2. 查看所有索引 <a class="header-anchor" href="#_2-查看所有索引" aria-label="Permalink to &quot;2. 查看所有索引&quot;">​</a></h2><ul><li><code>GET _cat/indices</code></li></ul><h2 id="_3-查看某个索引下有哪些数据" tabindex="-1">3. 查看某个索引下有哪些数据 <a class="header-anchor" href="#_3-查看某个索引下有哪些数据" aria-label="Permalink to &quot;3. 查看某个索引下有哪些数据&quot;">​</a></h2><ul><li><code>GET 索引名称/_search</code><ul><li>主要看hits，表示查出来的数据</li><li>hits是对象数组，里面的每一个对象就是一个文档</li><li>_index表示当前文档所处索引</li><li>_source才表示数据本身</li><li>多个文档形成了一个索引</li></ul></li></ul><h2 id="_4-dsl基本的crud" tabindex="-1">4. DSL基本的crud <a class="header-anchor" href="#_4-dsl基本的crud" aria-label="Permalink to &quot;4. DSL基本的crud&quot;">​</a></h2><h3 id="_1-基本的新增和查询" tabindex="-1">1. 基本的新增和查询 <a class="header-anchor" href="#_1-基本的新增和查询" aria-label="Permalink to &quot;1. 基本的新增和查询&quot;">​</a></h3><ul><li><code>GET movies/_search</code> =&gt; 查询movies的数据</li><li><code>GET movies/_count</code> =&gt; 查询movies的总数</li><li><code>GET movies/_doc/24</code> =&gt; 查询索引中id为24的数据</li><li>添加 <ul><li>添加id为1的文档，如果没有指定id，es自动生成，定义id比较危险</li><li>如果id相同会直接将数据覆盖调</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">POST kibana_sample_data_logs/_doc/aa1</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;bytes&quot;: &quot;666&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">POST kibana_sample_data_logs/_doc/aa1</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;bytes&quot;: &quot;666&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li>创建 <ul><li>创建id为2的文档，如果索引中存在相同id，会报错，一般使用这个命令</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">POST kibana_sample_data_logs/_create/aa2</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;bytes&quot;: &quot;777&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">POST kibana_sample_data_logs/_create/aa2</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;bytes&quot;: &quot;777&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><h3 id="_2-如果需要在某文档下追加数据" tabindex="-1">2. 如果需要在某文档下追加数据 <a class="header-anchor" href="#_2-如果需要在某文档下追加数据" aria-label="Permalink to &quot;2. 如果需要在某文档下追加数据&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">POST kibana_sample_data_logs/_update/aa2</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;doc&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;test&quot;: &quot;测试777&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">POST kibana_sample_data_logs/_update/aa2</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;doc&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;test&quot;: &quot;测试777&quot;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_5-put命令" tabindex="-1">5. PUT命令 <a class="header-anchor" href="#_5-put命令" aria-label="Permalink to &quot;5. PUT命令&quot;">​</a></h2><ul><li>_doc用法和post一样</li><li>-create用法和post一样</li><li>没有_update命令</li></ul><h2 id="_6-删除数据" tabindex="-1">6. 删除数据 <a class="header-anchor" href="#_6-删除数据" aria-label="Permalink to &quot;6. 删除数据&quot;">​</a></h2><ol><li>删除数据</li></ol><ul><li>删除id为aa2的数据 <ul><li><code>DELETE kibana_sample_data_logs/_doc/aa2</code></li></ul></li></ul><ol start="2"><li>删除索引</li></ol><ul><li><code>DELETE kibana_sample_data_logs</code></li><li><code>GET _cat/indices</code></li></ul><h2 id="_7-批量提交数据" tabindex="-1">7. 批量提交数据 <a class="header-anchor" href="#_7-批量提交数据" aria-label="Permalink to &quot;7. 批量提交数据&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">POST kibana_sample_data_logs/_bulk</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa1&quot;}}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;bytes&quot;: &quot;111&quot;, &quot;extension&quot;: &quot;eee&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa2&quot;}}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;bytes&quot;: &quot;222&quot;, &quot;extension&quot;: &quot;rrr&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa3&quot;}}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;bytes&quot;: &quot;333&quot;, &quot;extension&quot;: &quot;ttt&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa1</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa2</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">POST kibana_sample_data_logs/_bulk</span></span>
<span class="line"><span style="color:#24292e;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa1&quot;}}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;bytes&quot;: &quot;111&quot;, &quot;extension&quot;: &quot;eee&quot;}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa2&quot;}}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;bytes&quot;: &quot;222&quot;, &quot;extension&quot;: &quot;rrr&quot;}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa3&quot;}}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;bytes&quot;: &quot;333&quot;, &quot;extension&quot;: &quot;ttt&quot;}</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa1</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa2</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_8-批量查询" tabindex="-1">8. 批量查询 <a class="header-anchor" href="#_8-批量查询" aria-label="Permalink to &quot;8. 批量查询&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET /_mget</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;docs&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa1&quot;}, </span></span>
<span class="line"><span style="color:#e1e4e8;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa2&quot;}, </span></span>
<span class="line"><span style="color:#e1e4e8;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa3&quot;} </span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET /_mget</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;docs&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa1&quot;}, </span></span>
<span class="line"><span style="color:#24292e;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa2&quot;}, </span></span>
<span class="line"><span style="color:#24292e;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa3&quot;} </span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_9-elasticsearch的url查询" tabindex="-1">9. elasticSearch的url查询 <a class="header-anchor" href="#_9-elasticsearch的url查询" aria-label="Permalink to &quot;9. elasticSearch的url查询&quot;">​</a></h2><blockquote><p>泛查询</p></blockquote><ol><li>查询包含2012的数据</li></ol><ul><li><code>GET movies/_search?q=2012</code></li><li>q是一个固定值，表示query</li><li>任何一个字段只要包含2012就会查询出来</li><li>多个条件的泛查询 <ul><li><code>GET movies/_search?q=2012&amp;df=title</code></li><li>df =&gt; 默认的属性</li><li>从title中查找包含2012的所有文档</li><li>简写 <ul><li><code>GET movies/_search?q=title:2012</code></li></ul></li></ul></li></ul><ol start="2"><li>查询title中包含but或者test的文档</li></ol><ul><li><code>GET movies/_search?q=title:but test</code></li><li>另一种写法 <ul><li><code>GET movies/_search?q=title:(but test)</code></li></ul></li></ul><ol start="3"><li>查询title中包含but不包含test的文档</li></ol><ul><li><code>GET movies/_search?q=title:(but -test)</code></li><li><code>GET movies/_search?q=title:(+but - test)</code>=&gt;加号可省略</li></ul><ol start="4"><li>都包含</li></ol><ul><li><code>GET movies/_search?q=title:(but AND test)</code><ul><li>小写表示或</li></ul></li></ul><ol start="5"><li>包含短语</li></ol><ul><li><code>GET movies/_search?q=title:&quot;but test&quot;</code></li></ul><ol start="6"><li>查询分页</li></ol><ul><li><code>GET movies/_search?q=title:2012&amp;from=3&amp;size=3</code></li><li>从第3页查询3条</li></ul><ol start="7"><li>范围查询</li></ol><ul><li><code>GET movies/_search?q=year:&gt;=2016</code></li><li><code>GET movies/_search?q=year:(&gt;=1990 AND &lt;=1992)</code></li><li><code>GET movies/_search?q=year:{1990 TO 1992]</code><ul><li>前面大括号中括号都可以，后面必须中括号</li></ul></li></ul><ol start="8"><li>查询电影名字中包含beautiful或mind,并且上映的年份在[1990-1992]所有电影</li></ol><ul><li><code>GET movies/_search?q=year:(&gt;=1990 AND &lt;=1992) AND title:beautiful mind</code></li></ul><ol start="9"><li>通配符</li></ol><ul><li><code>GET movies/_search?q=title:min?</code><ul><li>?表示任意字符，只能是一个字符</li></ul></li><li><code>GET movies/_search?q=title:min*</code><ul><li>*表示0到多个</li></ul></li></ul><h2 id="_10-测试所有代码" tabindex="-1">10. 测试所有代码 <a class="header-anchor" href="#_10-测试所有代码" aria-label="Permalink to &quot;10. 测试所有代码&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查询所有数据</span></span>
<span class="line"><span style="color:#e1e4e8;">GET _search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;match_all&quot;: {}</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查询航班所有数据</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_flights/_search</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查询所有索引</span></span>
<span class="line"><span style="color:#e1e4e8;">GET _cat/indices</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查询日志所有数据</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_search</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查询日志索引数量</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_count</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 在索引中添加文档 - id重复会覆盖</span></span>
<span class="line"><span style="color:#e1e4e8;">POST kibana_sample_data_logs/_doc/aa1</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;bytes&quot;: &quot;666&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"># 根据文档id查询</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 在索引中创建文档 - id重复会报错</span></span>
<span class="line"><span style="color:#e1e4e8;">POST kibana_sample_data_logs/_create/aa2</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;bytes&quot;: &quot;777&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改文档结构</span></span>
<span class="line"><span style="color:#e1e4e8;">POST kibana_sample_data_logs/_update/aa2</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;doc&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;test&quot;: &quot;测试777&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除id为aa2的文档</span></span>
<span class="line"><span style="color:#e1e4e8;">DELETE kibana_sample_data_logs/_doc/aa2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 批量提交数据</span></span>
<span class="line"><span style="color:#e1e4e8;">POST kibana_sample_data_logs/_bulk</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa1&quot;}}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;bytes&quot;: &quot;111&quot;, &quot;extension&quot;: &quot;eee&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa2&quot;}}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;bytes&quot;: &quot;222&quot;, &quot;extension&quot;: &quot;rrr&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa3&quot;}}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;bytes&quot;: &quot;333&quot;, &quot;extension&quot;: &quot;ttt&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa1</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa2</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_logs/_doc/aa3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 批量查询</span></span>
<span class="line"><span style="color:#e1e4e8;">GET _mget</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;docs&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa1&quot;}, </span></span>
<span class="line"><span style="color:#e1e4e8;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa2&quot;}, </span></span>
<span class="line"><span style="color:#e1e4e8;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa3&quot;} </span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查询所有数据</span></span>
<span class="line"><span style="color:#24292e;">GET _search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;match_all&quot;: {}</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查询航班所有数据</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_flights/_search</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查询所有索引</span></span>
<span class="line"><span style="color:#24292e;">GET _cat/indices</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查询日志所有数据</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_search</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查询日志索引数量</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_count</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 在索引中添加文档 - id重复会覆盖</span></span>
<span class="line"><span style="color:#24292e;">POST kibana_sample_data_logs/_doc/aa1</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;bytes&quot;: &quot;666&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"># 根据文档id查询</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 在索引中创建文档 - id重复会报错</span></span>
<span class="line"><span style="color:#24292e;">POST kibana_sample_data_logs/_create/aa2</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;bytes&quot;: &quot;777&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 修改文档结构</span></span>
<span class="line"><span style="color:#24292e;">POST kibana_sample_data_logs/_update/aa2</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;doc&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;test&quot;: &quot;测试777&quot;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 删除id为aa2的文档</span></span>
<span class="line"><span style="color:#24292e;">DELETE kibana_sample_data_logs/_doc/aa2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 批量提交数据</span></span>
<span class="line"><span style="color:#24292e;">POST kibana_sample_data_logs/_bulk</span></span>
<span class="line"><span style="color:#24292e;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa1&quot;}}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;bytes&quot;: &quot;111&quot;, &quot;extension&quot;: &quot;eee&quot;}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa2&quot;}}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;bytes&quot;: &quot;222&quot;, &quot;extension&quot;: &quot;rrr&quot;}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;index&quot;: {&quot;_id&quot;: &quot;aa3&quot;}}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;bytes&quot;: &quot;333&quot;, &quot;extension&quot;: &quot;ttt&quot;}</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa1</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa2</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_logs/_doc/aa3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 批量查询</span></span>
<span class="line"><span style="color:#24292e;">GET _mget</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;docs&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa1&quot;}, </span></span>
<span class="line"><span style="color:#24292e;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa2&quot;}, </span></span>
<span class="line"><span style="color:#24292e;">    {&quot;_index&quot;: &quot;kibana_sample_data_logs&quot;, &quot;_id&quot;: &quot;aa3&quot;} </span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div>`,52),o=[p];function t(i,c,r,u,d,q){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{_ as __pageData,m as default};
//# sourceMappingURL=pages_note_other_elk-note_elk-note-7.md.77e01237.js.map
