import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"关于我","description":"","frontmatter":{},"headers":[],"relativePath":"about/page.md","filePath":"about/page.md","lastUpdated":1698303382000}');
const _sfc_main = { name: "about/page.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="关于我" tabindex="-1">关于我 <a class="header-anchor" href="#关于我" aria-label="Permalink to &quot;关于我&quot;">​</a></h1><p><a href="https://vitepress.dev/" target="_blank" rel="noreferrer">vitepress</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("about/page.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  page as default
};
