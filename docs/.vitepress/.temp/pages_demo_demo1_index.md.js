import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"demo1","description":"","frontmatter":{},"headers":[],"relativePath":"pages/demo/demo1/index.md","filePath":"pages/demo/demo1/index.md","lastUpdated":1698388561000}');
const _sfc_main = { name: "pages/demo/demo1/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_valine = resolveComponent("valine");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="demo1" tabindex="-1">demo1 <a class="header-anchor" href="#demo1" aria-label="Permalink to &quot;demo1&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_valine, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/demo1/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
