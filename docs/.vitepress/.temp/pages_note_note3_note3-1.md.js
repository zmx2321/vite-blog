import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"note3-1","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/note3/note3-1.md","filePath":"pages/note/note3/note3-1.md","lastUpdated":1698388561000}');
const _sfc_main = { name: "pages/note/note3/note3-1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_fileName = resolveComponent("fileName");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="note3-1" tabindex="-1">note3-1 <a class="header-anchor" href="#note3-1" aria-label="Permalink to &quot;note3-1&quot;">​</a></h1><h1 id="" tabindex="-1">`);
  _push(ssrRenderComponent(_component_fileName, null, null, _parent));
  _push(` <a class="header-anchor" href="#" aria-label="Permalink to &quot;&lt;fileName /&gt;&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/note/note3/note3-1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const note31 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  note31 as default
};
