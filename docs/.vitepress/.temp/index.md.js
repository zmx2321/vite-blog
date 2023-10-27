import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"image":{"src":"/logo.png","alt":"zmx2321"},"name":"zmx的前端日志","text":"关注web前端开发为主的博客网站和网址导航","tagline":"An elegant solution for keeping track of reality .","actions":[{"theme":"brand","text":"开始使用","link":"/guide/start"},{"theme":"alt","text":"我的GitHub","link":"https://github.com/zmx2321"},{"theme":"alt","text":"我的vuepress","link":"https://zmx2321.github.io/blog/"},{"theme":"alt","text":"当前地址","link":"https://zmx2321.github.io/vite-blog/"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1698388561000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Home = resolveComponent("Home");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Home, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
