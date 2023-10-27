import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/demo/demo1/demo1-3.md","filePath":"pages/demo/demo1/demo1-3.md","lastUpdated":1698388561000}');
const _sfc_main = { name: "pages/demo/demo1/demo1-3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_valine = resolveComponent("valine");
  _push(`<div${ssrRenderAttrs(_attrs)}><hr>`);
  _push(ssrRenderComponent(_component_valine, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/demo1/demo1-3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const demo13 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  demo13 as default
};
