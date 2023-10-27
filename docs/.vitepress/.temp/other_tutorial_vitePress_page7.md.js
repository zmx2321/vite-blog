import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"7. vitePress如何非自动化部署到Github Pages？","description":"","frontmatter":{},"headers":[],"relativePath":"other/tutorial/vitePress/page7.md","filePath":"other/tutorial/vitePress/page7.md","lastUpdated":1698303382000}');
const _sfc_main = { name: "other/tutorial/vitePress/page7.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_7-vitepress如何非自动化部署到github-pages" tabindex="-1">7. vitePress如何非自动化部署到Github Pages？ <a class="header-anchor" href="#_7-vitepress如何非自动化部署到github-pages" aria-label="Permalink to &quot;7. vitePress如何非自动化部署到Github Pages？&quot;">​</a></h1><p>更多内容请查</p><p><a href="http://www.qianduan8.com/2097.html" target="_blank" rel="noreferrer">VitePress搭建博客教程系列(7) – vitePress如何非自动化部署到Github Pages？</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("other/tutorial/vitePress/page7.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  page7 as default
};
