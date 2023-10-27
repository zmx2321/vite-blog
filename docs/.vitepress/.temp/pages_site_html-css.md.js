import { useSSRContext, resolveComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
const siteData = [
  {
    title: "HTML相关",
    items: [
      {
        icon: "",
        name: "W3C-HTML5",
        desc: "w3c组织开源的HTML5开发文档",
        link: "https://www.w3.org/html/ig/zh/wiki/HTML5L"
      },
      {
        icon: "",
        name: "HTML指南",
        desc: "MDN的HTML指南",
        link: "https://developer.mozilla.org/zh-CN/docs/Web/HTML"
      },
      {
        icon: "",
        name: "HTML5产业联盟",
        desc: "HTML5中国产业联盟，是工信部下属单位，HTML5+规范",
        link: "https://www.html5plus.org/"
      },
      {
        icon: "",
        name: "Can I Use",
        desc: "检测桌面和移动浏览器支持HTML5，CSS3，SVG等的兼容性表",
        link: "https://caniuse.com/"
      }
    ]
  },
  {
    title: "CSS综合",
    items: [
      {
        icon: "",
        name: "CSS开发指南",
        desc: "MDN-Web开发者指南-css开发指南",
        link: "https://developer.mozilla.org/zh-CN/docs/Learn/CSS"
      },
      {
        icon: "",
        name: "browserhacks-浏览器hack大全",
        desc: "浏览器CSS和JS Hack 大全",
        link: "http://browserhacks.com/"
      },
      {
        icon: "",
        name: "Animate.css动画库",
        desc: "内置了很多典型的css3动画",
        link: "https://animate.style/"
      },
      {
        icon: "",
        name: "Hover.css",
        desc: "纯CSS3鼠标滑过效果动画库",
        link: "http://ianlunn.github.io/Hover/"
      },
      {
        icon: "",
        name: "Purgecss",
        desc: "PurgeCSS 是一个用来删除未使用的 CSS 代码的工具",
        link: "https://www.purgecss.cn/"
      }
    ]
  },
  {
    title: "CSS预处理器",
    items: [
      {
        icon: "",
        name: "Sass",
        desc: "Sass 是世界上最成熟、稳定、强大的专业级 CSS 扩展语言",
        link: "https://sass.bootcss.com/"
      },
      {
        icon: "",
        name: "Less",
        desc: "给 CSS 加点料,是一门向后兼容的 CSS 扩展语言",
        link: "https://less.bootcss.com/"
      },
      {
        icon: "",
        name: "Stylus",
        desc: "富于表现力、动态的、健壮的 CSS",
        link: "https://stylus-lang.com/"
      }
    ]
  },
  {
    title: "原子化CSS工具集",
    items: [
      {
        icon: "",
        name: "Tailwind CSS",
        desc: "只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站",
        link: "https://www.tailwindcss.cn/"
      },
      {
        icon: "",
        name: "UnoCSS",
        desc: "即时按需原子CSS引擎",
        link: "https://unocss.dev/"
      },
      {
        icon: "",
        name: "Windi CSS",
        desc: "下一代实用为先的CSS框架，它支持按需生成",
        link: "https://windicss.org/"
      }
    ]
  }
];
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"pageClass":"site-layout"},"headers":[],"relativePath":"pages/site/html-css.md","filePath":"pages/site/html-css.md","lastUpdated":1698303382000}');
const __default__ = { name: "pages/site/html-css.md" };
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/site/html-css.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
