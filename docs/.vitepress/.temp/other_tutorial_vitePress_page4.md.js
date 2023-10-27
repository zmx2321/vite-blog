import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"4.如何自定义布局页面模板？","description":"","frontmatter":{},"headers":[],"relativePath":"other/tutorial/vitePress/page4.md","filePath":"other/tutorial/vitePress/page4.md","lastUpdated":1698303382000}');
const _sfc_main = { name: "other/tutorial/vitePress/page4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_4-如何自定义布局页面模板" tabindex="-1">4.如何自定义布局页面模板？ <a class="header-anchor" href="#_4-如何自定义布局页面模板" aria-label="Permalink to &quot;4.如何自定义布局页面模板？&quot;">​</a></h1><p>更多内容请查 <a href="http://www.qianduan8.com/2041.html" target="_blank" rel="noreferrer">VitePress搭建博客教程系列(4) – 如何自定义首页布局和主题样式修改？</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("other/tutorial/vitePress/page4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  page4 as default
};
