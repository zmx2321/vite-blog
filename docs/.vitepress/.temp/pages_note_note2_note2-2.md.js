import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"note2-2","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/note2/note2-2.md","filePath":"pages/note/note2/note2-2.md","lastUpdated":1698303382000}');
const _sfc_main = { name: "pages/note/note2/note2-2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="note2-2" tabindex="-1">note2-2 <a class="header-anchor" href="#note2-2" aria-label="Permalink to &quot;note2-2&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/note/note2/note2-2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const note22 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  note22 as default
};
