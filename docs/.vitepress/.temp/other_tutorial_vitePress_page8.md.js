import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"8. vitePress部署到Github Pages后发现样式错乱怎么办？","description":"","frontmatter":{},"headers":[],"relativePath":"other/tutorial/vitePress/page8.md","filePath":"other/tutorial/vitePress/page8.md","lastUpdated":1698303382000}');
const _sfc_main = { name: "other/tutorial/vitePress/page8.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_8-vitepress部署到github-pages后发现样式错乱怎么办" tabindex="-1">8. vitePress部署到Github Pages后发现样式错乱怎么办？ <a class="header-anchor" href="#_8-vitepress部署到github-pages后发现样式错乱怎么办" aria-label="Permalink to &quot;8. vitePress部署到Github Pages后发现样式错乱怎么办？&quot;">​</a></h1><p>更多内容请查</p><p><a href="http://www.qianduan8.com/2099.html" target="_blank" rel="noreferrer">VitePress部署到Github Pages后发现样式全错乱了怎么办？</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("other/tutorial/vitePress/page8.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  page8 as default
};
