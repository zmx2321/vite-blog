import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"6.如何用Github Actions自动化部署到Github Pages？","description":"","frontmatter":{},"headers":[],"relativePath":"other/tutorial/vitePress/page6.md","filePath":"other/tutorial/vitePress/page6.md","lastUpdated":1698303382000}');
const _sfc_main = { name: "other/tutorial/vitePress/page6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-如何用github-actions自动化部署到github-pages" tabindex="-1">6.如何用Github Actions自动化部署到Github Pages？ <a class="header-anchor" href="#_6-如何用github-actions自动化部署到github-pages" aria-label="Permalink to &quot;6.如何用Github Actions自动化部署到Github Pages？&quot;">​</a></h1><p>更多内容请查</p><p><a href="http://www.qianduan8.com/2072.html" target="_blank" rel="noreferrer">VitePress搭建博客教程系列(6) – 用Github Actions自动化部署到Github Pages</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("other/tutorial/vitePress/page6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  page6 as default
};
