import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/tutorial/react.md","filePath":"other/tutorial/react.md","lastUpdated":1698303382000}');
const _sfc_main = { name: "other/tutorial/react.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="react学习笔记" tabindex="-1">React学习笔记 <a class="header-anchor" href="#react学习笔记" aria-label="Permalink to &quot;React学习笔记&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>这是一个专门写React相关的文档, 可在tip后面加 自定义标题</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("other/tutorial/react.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const react = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  react as default
};
