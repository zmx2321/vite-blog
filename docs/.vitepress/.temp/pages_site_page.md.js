import { useSSRContext, resolveComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
const siteData = [
  {
    title: "前端综合",
    items: [
      {
        icon: "",
        name: "stackoverflow",
        desc: "国外一个非常不错的IT技术问答网站",
        link: "http://stackoverflow.com/"
      },
      {
        icon: "",
        name: "掘金",
        desc: "是中国质量最高的技术分享社区，从前端到后端开发，从设计到产品，让每一个掘金用户都能挖掘到有价值的干货",
        link: "https://juejin.cn/"
      },
      {
        icon: "",
        name: "开源中国社区",
        desc: "为中国的IT技术人员提供一个全面的、快捷更新的用来检索开源软件以及交流使用开源经验的平台",
        link: "https://www.oschina.net/"
      }
    ]
  },
  {
    title: "前端团队",
    items: [
      {
        icon: "",
        name: "Taobao FED",
        desc: "淘宝前端团队",
        link: "https://fed.taobao.org/"
      },
      {
        icon: "",
        name: "Tencent AlloyTeam",
        desc: "腾讯 Web 前端团队",
        link: "http://alloyteam.github.io/"
      },
      {
        icon: "",
        name: "百度前端技术学园",
        desc: "由百度创办的免费前端技术学习实践、交流、分享平台",
        link: "http://ife.baidu.com/"
      }
    ]
  }
];
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"pageClass":"site-layout"},"headers":[],"relativePath":"pages/site/page.md","filePath":"pages/site/page.md","lastUpdated":1698303382000}');
const __default__ = { name: "pages/site/page.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteList = resolveComponent("SiteList");
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(siteData), (model) => {
        _push(ssrRenderComponent(_component_SiteList, {
          key: model.title,
          title: model.title,
          data: model.items
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/site/page.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
