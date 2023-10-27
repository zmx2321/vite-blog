import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"demo3-1","description":"","frontmatter":{},"headers":[],"relativePath":"pages/demo/demo3/demo3-1.md","filePath":"pages/demo/demo3/demo3-1.md","lastUpdated":1698303382000}');
const _sfc_main = { name: "pages/demo/demo3/demo3-1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="demo3-1" tabindex="-1">demo3-1 <a class="header-anchor" href="#demo3-1" aria-label="Permalink to &quot;demo3-1&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/demo3/demo3-1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const demo31 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  demo31 as default
};
