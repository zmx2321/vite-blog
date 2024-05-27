import{_ as s,o as n,c as a,e}from"./app.5c435236.js";const m=JSON.parse('{"title":"elasticSearch的requestBody查询","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/other/elk-note/elk-note-8.md","filePath":"pages/note/other/elk-note/elk-note-8.md","lastUpdated":1700115938000}'),l={name:"pages/note/other/elk-note/elk-note-8.md"},p=e(`<h1 id="elasticsearch的requestbody查询" tabindex="-1">elasticSearch的requestBody查询 <a class="header-anchor" href="#elasticsearch的requestbody查询" aria-label="Permalink to &quot;elasticSearch的requestBody查询&quot;">​</a></h1><h2 id="_1-简单示例" tabindex="-1">1. 简单示例 <a class="header-anchor" href="#_1-简单示例" aria-label="Permalink to &quot;1. 简单示例&quot;">​</a></h2><ol><li>查询下雨天</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 匹配的方式和上文url查询一样</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_flights/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 固定写法</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 匹配方式</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      # 属性名和值</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;OriginWeather&quot;: &quot;Rain&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 匹配的方式和上文url查询一样</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_flights/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  # 固定写法</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    # 匹配方式</span></span>
<span class="line"><span style="color:#24292e;">    &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      # 属性名和值</span></span>
<span class="line"><span style="color:#24292e;">      &quot;OriginWeather&quot;: &quot;Rain&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="2"><li>范围查询以及分页查询</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET movies/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 范围查询</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;range&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      # 大于等于1990，小于等于1992</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;year&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;gte&quot;: 1990,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;lte&quot;: 1992</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 从第五页开始，查询20条数据</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;from&quot;: 5,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;size&quot;: 20</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET movies/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    # 范围查询</span></span>
<span class="line"><span style="color:#24292e;">    &quot;range&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      # 大于等于1990，小于等于1992</span></span>
<span class="line"><span style="color:#24292e;">      &quot;year&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;gte&quot;: 1990,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;lte&quot;: 1992</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  # 从第五页开始，查询20条数据</span></span>
<span class="line"><span style="color:#24292e;">  &quot;from&quot;: 5,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;size&quot;: 20</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="3"><li>只查询部分属性</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_flights/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 查询结果只带两个字段</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;_source&quot;: [&quot;OriginWeather&quot;, &quot;OriginCityName&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;OriginWeather&quot;: &quot;Rain&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET kibana_sample_data_flights/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  # 查询结果只带两个字段</span></span>
<span class="line"><span style="color:#24292e;">  &quot;_source&quot;: [&quot;OriginWeather&quot;, &quot;OriginCityName&quot;],</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;OriginWeather&quot;: &quot;Rain&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="3"><li>联合查询</li></ol><ul><li>query只能放一种查询方式</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET movies/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 多条件查询需要使用bool</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      # 这里面可以放多种查询，一个查询一个对象</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;must&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 第一种查询方式</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;range&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            # 大于等于1990，小于等于1992</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;year&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">              &quot;gte&quot;: 1990,</span></span>
<span class="line"><span style="color:#e1e4e8;">              &quot;lte&quot;: 1992</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">          },</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 第二种查询方式</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;title&quot;: &quot;but test&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET movies/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    # 多条件查询需要使用bool</span></span>
<span class="line"><span style="color:#24292e;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      # 这里面可以放多种查询，一个查询一个对象</span></span>
<span class="line"><span style="color:#24292e;">      &quot;must&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        # 第一种查询方式</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;range&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            # 大于等于1990，小于等于1992</span></span>
<span class="line"><span style="color:#24292e;">            &quot;year&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">              &quot;gte&quot;: 1990,</span></span>
<span class="line"><span style="color:#24292e;">              &quot;lte&quot;: 1992</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">          },</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        # 第二种查询方式</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;title&quot;: &quot;but test&quot;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="_2-term查询" tabindex="-1">2. term查询 <a class="header-anchor" href="#_2-term查询" aria-label="Permalink to &quot;2. term查询&quot;">​</a></h2><blockquote><p>term是表达语义的最小单位，不会进行分词处理</p></blockquote><ol><li>简单使用</li></ol><ul><li>区分大小写(分词会将大写转换成小写)</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET movies/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;title&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 使用大写数据就没了</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;value&quot;: &quot;beautiful&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET movies/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;title&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        # 使用大写数据就没了</span></span>
<span class="line"><span style="color:#24292e;">        &quot;value&quot;: &quot;beautiful&quot;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2"><li>匹配多个单词</li></ol><ul><li>使用terms查询</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET movies/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;terms&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;title&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;but&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;test&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET movies/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;terms&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;title&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;but&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;test&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="3"><li>排序</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET movies/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;terms&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;title&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;but&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;test&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 排序</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;sort&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 根据年份降序</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;year&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;order&quot;: &quot;desc&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">          # &quot;order&quot;: &quot;asc&quot;  # 升序</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET movies/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;terms&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;title&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;but&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;test&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    # 排序</span></span>
<span class="line"><span style="color:#24292e;">    &quot;sort&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        # 根据年份降序</span></span>
<span class="line"><span style="color:#24292e;">        &quot;year&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;order&quot;: &quot;desc&quot;</span></span>
<span class="line"><span style="color:#24292e;">          # &quot;order&quot;: &quot;asc&quot;  # 升序</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="4"><li>constantScore</li></ol><ul><li>算分（匹配有多少相似文字）</li><li>took表示响应时间</li><li>只能使用term查询</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET movies/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 不进行算分，查询数据进行缓存，提高效率</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 相当于过滤</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;constant_score&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;filter&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;title&quot;: &quot;beautiful&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET movies/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    # 不进行算分，查询数据进行缓存，提高效率</span></span>
<span class="line"><span style="color:#24292e;">    # 相当于过滤</span></span>
<span class="line"><span style="color:#24292e;">    &quot;constant_score&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;filter&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;title&quot;: &quot;beautiful&quot;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_3-测试所有代码" tabindex="-1">3. 测试所有代码 <a class="header-anchor" href="#_3-测试所有代码" aria-label="Permalink to &quot;3. 测试所有代码&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># elasticSearch的requestBody查询</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_flights/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;OriginWeather&quot;: &quot;Rain&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查询部分数据</span></span>
<span class="line"><span style="color:#e1e4e8;">GET kibana_sample_data_flights/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;_source&quot;: [&quot;OriginWeather&quot;, &quot;OriginCityName&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;OriginWeather&quot;: &quot;Rain&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># elasticSearch的requestBody查询</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_flights/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;OriginWeather&quot;: &quot;Rain&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查询部分数据</span></span>
<span class="line"><span style="color:#24292e;">GET kibana_sample_data_flights/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;_source&quot;: [&quot;OriginWeather&quot;, &quot;OriginCityName&quot;],</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;OriginWeather&quot;: &quot;Rain&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_4-修改索引限制" tabindex="-1">4. 修改索引限制 <a class="header-anchor" href="#_4-修改索引限制" aria-label="Permalink to &quot;4. 修改索引限制&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改ES中所有的index配置 </span></span>
<span class="line"><span style="color:#e1e4e8;">PUT _all/_settings</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;index&quot;:{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;max_result_window&quot;: 100000 </span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改ES中指定的index配置</span></span>
<span class="line"><span style="color:#e1e4e8;">PUT index_name/_settings</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;index&quot;:{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;max_result_window&quot;: 100000</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 修改ES中所有的index配置 </span></span>
<span class="line"><span style="color:#24292e;">PUT _all/_settings</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;index&quot;:{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;max_result_window&quot;: 100000 </span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;"># 修改ES中指定的index配置</span></span>
<span class="line"><span style="color:#24292e;">PUT index_name/_settings</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;index&quot;:{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;max_result_window&quot;: 100000</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_5-实例" tabindex="-1">5. 实例 <a class="header-anchor" href="#_5-实例" aria-label="Permalink to &quot;5. 实例&quot;">​</a></h2><ul><li>使用match多条件查询</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 根据时间和id查询机组组合状态列表</span></span>
<span class="line"><span style="color:#e1e4e8;">GET need_status/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;must&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;id&quot;: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;time&quot;: &quot;2021-04-07&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 根据时间和id查询机组组合状态列表</span></span>
<span class="line"><span style="color:#24292e;">GET need_status/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;must&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;id&quot;: 1</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;time&quot;: &quot;2021-04-07&quot;</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>使用term多条件查询</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GET need_status/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;filter&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;id&quot;: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;time&quot;: &quot;2021-04-07&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET need_status/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;filter&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;id&quot;: 1</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;time&quot;: &quot;2021-04-07&quot;</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,33),o=[p];function c(t,r,i,u,b,y){return n(),a("div",null,o)}const d=s(l,[["render",c]]);export{m as __pageData,d as default};
