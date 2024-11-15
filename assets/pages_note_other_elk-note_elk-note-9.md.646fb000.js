import{_ as s,o as n,c as a,e}from"./app.2ae8a2c9.js";const m=JSON.parse('{"title":"es查询","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/other/elk-note/elk-note-9.md","filePath":"pages/note/other/elk-note/elk-note-9.md","lastUpdated":1700115938000}'),l={name:"pages/note/other/elk-note/elk-note-9.md"},p=e(`<h1 id="es查询" tabindex="-1">es查询 <a class="header-anchor" href="#es查询" aria-label="Permalink to &quot;es查询&quot;">​</a></h1><h2 id="_1-查询所有数据" tabindex="-1">1. 查询所有数据 <a class="header-anchor" href="#_1-查询所有数据" aria-label="Permalink to &quot;1. 查询所有数据&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">GET</span><span style="color:#E1E4E8;"> _search</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;match_all&quot;</span><span style="color:#E1E4E8;">: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">GET</span><span style="color:#24292E;"> _search</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;query&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;match_all&quot;</span><span style="color:#24292E;">: {}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_2-范围查询" tabindex="-1">2. 范围查询 <a class="header-anchor" href="#_2-范围查询" aria-label="Permalink to &quot;2. 范围查询&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 范围</span></span>
<span class="line"><span style="color:#e1e4e8;">GET result/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">GET result/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;must&quot;:[</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;id.keyword&quot;: &quot;1&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;range&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;time&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">              &quot;from&quot;: &quot;2021-01-01T00:00:00.000Z&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">              &quot;to&quot;: &quot;2021-01-01T23:30:00.000Z&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ] </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">GET result/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;filter&quot;:[</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;id.keyword&quot;: &quot;1&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;range&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;time&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">              &quot;from&quot;: &quot;2021-01-01T00:00:00.000Z&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">              &quot;to&quot;: &quot;2021-01-01T23:30:00.000Z&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ] </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 范围</span></span>
<span class="line"><span style="color:#24292e;">GET result/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">GET result/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;must&quot;:[</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;match&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;id.keyword&quot;: &quot;1&quot;</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;range&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;time&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">              &quot;from&quot;: &quot;2021-01-01T00:00:00.000Z&quot;,</span></span>
<span class="line"><span style="color:#24292e;">              &quot;to&quot;: &quot;2021-01-01T23:30:00.000Z&quot;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ] </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">GET result/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;filter&quot;:[</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;id.keyword&quot;: &quot;1&quot;</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;range&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;time&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">              &quot;from&quot;: &quot;2021-01-01T00:00:00.000Z&quot;,</span></span>
<span class="line"><span style="color:#24292e;">              &quot;to&quot;: &quot;2021-01-01T23:30:00.000Z&quot;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ] </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h2 id="_2-查询多个索引" tabindex="-1">2. 查询多个索引 <a class="header-anchor" href="#_2-查询多个索引" aria-label="Permalink to &quot;2. 查询多个索引&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查询多个索引</span></span>
<span class="line"><span style="color:#e1e4e8;">POST /_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;should&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;filter&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">              {</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                  &quot;_index&quot;: &quot;kibana_sample_data_flights1&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">              }</span></span>
<span class="line"><span style="color:#e1e4e8;">            ]</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;filter&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">              {</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                  &quot;_index&quot;: &quot;kibana_sample_data_flights2&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">              }</span></span>
<span class="line"><span style="color:#e1e4e8;">            ]</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;filter&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">              {</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                  &quot;_index&quot;: &quot;kibana_sample_data_flights3&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">              },</span></span>
<span class="line"><span style="color:#e1e4e8;">              {</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">                  &quot;id&quot;: &quot;10&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">              }</span></span>
<span class="line"><span style="color:#e1e4e8;">            ]</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;size&quot;: 2000</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 或</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查询多个索引</span></span>
<span class="line"><span style="color:#e1e4e8;">GET /load_forecast,price_forecast,elec_forecast/_search</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 或</span></span>
<span class="line"><span style="color:#e1e4e8;">GET /load_*/_search</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查询多个索引</span></span>
<span class="line"><span style="color:#24292e;">POST /_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;should&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;filter&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">              {</span></span>
<span class="line"><span style="color:#24292e;">                &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">                  &quot;_index&quot;: &quot;kibana_sample_data_flights1&quot;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">              }</span></span>
<span class="line"><span style="color:#24292e;">            ]</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;filter&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">              {</span></span>
<span class="line"><span style="color:#24292e;">                &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">                  &quot;_index&quot;: &quot;kibana_sample_data_flights2&quot;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">              }</span></span>
<span class="line"><span style="color:#24292e;">            ]</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;filter&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">              {</span></span>
<span class="line"><span style="color:#24292e;">                &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">                  &quot;_index&quot;: &quot;kibana_sample_data_flights3&quot;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">              },</span></span>
<span class="line"><span style="color:#24292e;">              {</span></span>
<span class="line"><span style="color:#24292e;">                &quot;term&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">                  &quot;id&quot;: &quot;10&quot;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">              }</span></span>
<span class="line"><span style="color:#24292e;">            ]</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  &quot;size&quot;: 2000</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 或</span></span>
<span class="line"><span style="color:#24292e;"># 查询多个索引</span></span>
<span class="line"><span style="color:#24292e;">GET /load_forecast,price_forecast,elec_forecast/_search</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 或</span></span>
<span class="line"><span style="color:#24292e;">GET /load_*/_search</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h2 id="_3-清空所有索引数据" tabindex="-1">3. 清空所有索引数据 <a class="header-anchor" href="#_3-清空所有索引数据" aria-label="Permalink to &quot;3. 清空所有索引数据&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">POST blackout_plan/_doc/_delete_by_query</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;match_all&quot;: {}</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">POST blackout_plan/_doc/_delete_by_query</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;match_all&quot;: {}</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="_4-创建" tabindex="-1">4. 创建 <a class="header-anchor" href="#_4-创建" aria-label="Permalink to &quot;4. 创建&quot;">​</a></h1><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建索引</span></span>
<span class="line"><span style="color:#e1e4e8;">PUT /test</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查询</span></span>
<span class="line"><span style="color:#e1e4e8;">GET test/_search</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 造数据</span></span>
<span class="line"><span style="color:#e1e4e8;">POST test/_doc</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;id&quot; : 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;time&quot;: &quot;2021-05-14&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;tempurature&quot; : &quot;25℃&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 清空所有数据</span></span>
<span class="line"><span style="color:#e1e4e8;">POST test/_doc/_delete_by_query</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;match_all&quot;: {}</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 创建索引</span></span>
<span class="line"><span style="color:#24292e;">PUT /test</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查询</span></span>
<span class="line"><span style="color:#24292e;">GET test/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;size&quot;: 1000</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 造数据</span></span>
<span class="line"><span style="color:#24292e;">POST test/_doc</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;id&quot; : 1,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;time&quot;: &quot;2021-05-14&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;tempurature&quot; : &quot;25℃&quot;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 清空所有数据</span></span>
<span class="line"><span style="color:#24292e;">POST test/_doc/_delete_by_query</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;match_all&quot;: {}</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="_5-模糊查询" tabindex="-1">5. 模糊查询 <a class="header-anchor" href="#_5-模糊查询" aria-label="Permalink to &quot;5. 模糊查询&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 根据已知对象动态生成es查询语句 - 模糊查询</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getDynamicParams1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">paramsData</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> filterArr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];  </span><span style="color:#6A737D;">// 存放最终查询语句</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> paramsData) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果paramsData[item]为真就执行后面的方法,并return</span></span>
<span class="line"><span style="color:#E1E4E8;">        paramsData[item] </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> filterArr.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#9ECBFF;">&quot;wildcard&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    [item]: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        </span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> paramsData[item] </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                            })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> filterArr;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 根据已知对象动态生成es查询语句 - 模糊查询</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getDynamicParams1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">paramsData</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> filterArr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];  </span><span style="color:#6A737D;">// 存放最终查询语句</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> paramsData) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果paramsData[item]为真就执行后面的方法,并return</span></span>
<span class="line"><span style="color:#24292E;">        paramsData[item] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> filterArr.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#032F62;">&quot;wildcard&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                                    [item]: {</span></span>
<span class="line"><span style="color:#24292E;">                                        </span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;*&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> paramsData[item] </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#24292E;">                                    }</span></span>
<span class="line"><span style="color:#24292E;">                                }</span></span>
<span class="line"><span style="color:#24292E;">                            })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> filterArr;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,13),o=[p];function c(r,t,i,u,y,b){return n(),a("div",null,o)}const d=s(l,[["render",c]]);export{m as __pageData,d as default};
