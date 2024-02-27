import{_ as e,o as t,c as a,e as i}from"./app.6f8159a9.js";const p=JSON.parse('{"title":"Vue和React对比","description":"","frontmatter":{},"headers":[],"relativePath":"pages/interview/other/interview-other-3.md","filePath":"pages/interview/other/interview-other-3.md","lastUpdated":1704261228000}'),l={name:"pages/interview/other/interview-other-3.md"},r=i('<h1 id="vue和react对比" tabindex="-1">Vue和React对比 <a class="header-anchor" href="#vue和react对比" aria-label="Permalink to &quot;Vue和React对比&quot;">​</a></h1><h2 id="共同点" tabindex="-1">共同点 <a class="header-anchor" href="#共同点" aria-label="Permalink to &quot;共同点&quot;">​</a></h2><ul><li>组件化 <ul><li>单向数据流，数据驱动视图</li><li>使用Virtual DOM + Diff算法渲染DOM <ul><li>但两者源码实现上有区别：</li><li>Vue Diff使用双向链表，边对比，边更新DOM</li><li>React主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM</li></ul></li></ul></li><li>为什么Vue和React都选择Virtual DOM</li><li>减少直接操作DOM，使用数据驱动视图</li><li>可以跨平台，渲染到Web之外的平台。比如ReactNative，Weex</li></ul><h2 id="不同点" tabindex="-1">不同点 <a class="header-anchor" href="#不同点" aria-label="Permalink to &quot;不同点&quot;">​</a></h2><ul><li>核心思想不同 <ul><li>Vue个人开发，推崇灵活易用（渐进式开发体验），双向数据绑定（依赖收集）</li><li>Facebook开发React，目的是颠覆前端开发方式，核心倡导函数式编程，函数式编程最大好处稳定性（无副作用）和可测试性（输入相同，输出一定相同）</li></ul></li><li>Vue使用模板拥抱 html，React使用JSX拥抱JS</li><li>Vue2使用声明式编程，Vue3之后和React一样更推崇函数式编程</li><li>Vue“自动挡”（自动监听数据变化渲染视图，提供大量语法糖和周边配套生态），React“手动挡”(手动setState修改状态，往往需要到社区寻找各种插件和解决方案)</li></ul>',5),o=[r];function c(u,n,s,h,_,d){return t(),a("div",null,o)}const V=e(l,[["render",c]]);export{p as __pageData,V as default};
