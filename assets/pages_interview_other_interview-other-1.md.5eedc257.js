import{_ as s,o as a,c as n,e}from"./app.7f3ff873.js";const u=JSON.parse('{"title":"如何让const [a,b] = {a:1,b:2}这行代码成立","description":"","frontmatter":{},"headers":[],"relativePath":"pages/interview/other/interview-other-1.md","filePath":"pages/interview/other/interview-other-1.md","lastUpdated":1703733994000}'),l={name:"pages/interview/other/interview-other-1.md"},p=e(`<h1 id="如何让const-a-b-a-1-b-2-这行代码成立" tabindex="-1">如何让<code>const [a,b] = {a:1,b:2}</code>这行代码成立 <a class="header-anchor" href="#如何让const-a-b-a-1-b-2-这行代码成立" aria-label="Permalink to &quot;如何让\`const [a,b] = {a:1,b:2}\`这行代码成立&quot;">​</a></h1><ul><li><p>根据报错信息得知，是类型错误，因为{a:1,b:2}不是可迭代的。</p></li><li><p>es6里面有一个可迭代协议，大体意思是，只要一个对象有一个属性【symbol.iterator】且它是一个函数，且返回一个迭代器，那么这个对象即可迭代。</p></li><li><p>解构赋值左边会得到右边的迭代器，不要求右边一定是数组，只要是可迭代对象即可</p></li><li><p>常见的可迭代对象就是数组，是因为数组里面有一个迭代器，可以在通过 console.log 打印看到数组的 prototype 属性上面的迭代器，如下图所示：</p></li><li><p>那么，只需给上面那个 {a:1,b:2} 加一个迭代器</p></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 给对象原型上加一个属性【symbol.iterator】，让它等于一个函数，且这个函数返回一个迭代器，其实就是按照es6的可迭代协议进行操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Object</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">[Symbol.iterator] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)[Symbol.iterator]() </span><span style="color:#6A737D;">//调用数组的迭代器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 给对象原型上加一个属性【symbol.iterator】，让它等于一个函数，且这个函数返回一个迭代器，其实就是按照es6的可迭代协议进行操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Object</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">[Symbol.iterator] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">values</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)[Symbol.iterator]() </span><span style="color:#6A737D;">//调用数组的迭代器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,3),o=[p];function t(r,c,i,y,b,E){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
//# sourceMappingURL=pages_interview_other_interview-other-1.md.5eedc257.js.map
