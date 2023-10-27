import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start.md","filePath":"guide/start.md","lastUpdated":1698303382000}');
const _sfc_main = { name: "guide/start.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="测试内容" tabindex="-1">测试内容 <a class="header-anchor" href="#测试内容" aria-label="Permalink to &quot;测试内容&quot;">​</a></h2><blockquote><p>历史的博客都在上面记录，目前正在往现在这个vitepress版本上迁移</p></blockquote><p>vuepress代码地址：<a href="https://zmx2321.github.io/blog/" target="_blank" rel="noreferrer">https://zmx2321.github.io/blog/</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/start.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const start = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  start as default
};
