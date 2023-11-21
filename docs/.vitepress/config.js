const navConfig = require("./config/nav-config");
const sidebarConfig = require("./config/sidebar-config");

export default {
  title: "zmx的前端日志",
  description: "zmx2321",

  // 部署到github相关的配置
  base: "/vite-blog/",

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    // 增加一个自定义的 favicon(网页标签的图标)
    ["link", { rel: "icon", href: "/vite-blog/favicon.ico" }],
  ],

  markdown: {
    lineNumbers: true, // 代码块显示行号
  },

  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean

  // 导航栏
  themeConfig: {
    // 增加导航栏 Logo ，Logo 可以被放置在公共文件目录
    // logo: '/assets/img/logo.png',

    // 右侧边栏配置，默认值是"In hac pagina"
    outlineTitle: "本页目录",

    // 导航栏
    nav: navConfig,

    // 侧边栏
    sidebar: sidebarConfig,

    /**
     * 0 禁用header
     * 默认的深度是 1，它将提取到 h2 的标题
     * 最大的深度为 2，它将同时提取 h2 和 h3 标题
     */
    sidebarDepth: 2,

    // 编辑链接
    editLink: {
      pattern: "https://github.com/zmx2321/vite-blog",
      text: "在 github 上编辑此页",
    },

    // 站点页脚配置
    footer: {
      copyright: "MIT Licensed | Copyright © 2023-present zmx2321@gmail.com",
    },

    // 搜索
    /* algolia: {
      appId: "4QM57J77LG",
      apiKey: "dcfd99877026391712379be4bfa9708b",
      indexName: "zmx2321-184059744",
      chunkSize: 5000,
    }, */
    // 搜索框
    search: {
      provider: "local",
    },

    returnToTopLabel: "返回顶部",

    // 你可以通过 themeConfig.lastUpdated 选项来获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdatedText: "最后更新", // string

    // 默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新
    activeHeaderLinks: true,

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // 当你提供了 themeConfig.repo 选项，将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接
    repo: "zmx2321/vite-blog",

    // 假如文档不是放在仓库的根目录下
    docsDir: "docs",

    // 默认是 false, 设置为 true 来启用
    editLinks: true,

    // 默认为 "Edit this page"
    editLinkText: "在 GitHub 上编辑此页",

    // 启用页面滚动效果
    smoothScroll: true,

    // 是否开启 PWA
    serviceWorker: true,

    socialLinks: [{ icon: "github", link: "https://github.com/zmx2321/vite-blog" }], // 可以连接到 github

    /* carbonAds: {
      carbon: "CEBDT27Y",
      custom: "CKYD62QM",
      placement: "vuejsorg",
    }, */
  },

  // 插件
  plugins: [
    "@vuepress/active-header-links", // 页面滚动时自动激活侧边栏链接的插件
    "@vuepress/back-to-top", // 返回顶部插件
    "@vuepress/medium-zoom", // 图片预览插件
    "@vuepress/nprogress", //页面顶部进度条
  ],

  vite: {
    /* define: {
      __VUE_OPTIONS_API__: false,
    },
    optimizeDeps: {
      include: ["gsap", "dynamics.js"],
      exclude: ["@vue/repl"],
    },
    // @ts-ignore
    ssr: {
      external: ["@vue/repl"],
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ["../.."],
      },
    }, */
    /* build: {
      // chunkSizeWarningLimit: Infinity,
      chunkSizeWarningLimit: 1500,
    }, */
    /* json: {
      stringify: true,
    }, */
    /* build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          },
        },
      },
      chunkFileNames: chunkInfo => {
        const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split("/") : [];
        const fileName = facadeModuleId[facadeModuleId.length - 2] || "[name]";
        return `js/${fileName}/[name].[hash].js`;
      },
    }, */
    define: {
      __VUE_OPTIONS_API__: false, // Vue3中默认就是true，也就是默认支持OPTIONSAPI 咱们可以选择将其关闭，这样也可以减小打包之后的包体积
    },
    // 预编译1
    /* optimizeDeps: {
      include: ["gsap", "dynamics.js"],
      exclude: ["@vue/repl"],
    }, */
    server: {
      host: true,
      port: 6080,
      cors: true,
      fs: {
        // for when developing with locally linked theme
        allow: ["../.."],
      },
    },
    json: {
      stringify: true,
    },
    // @ts-ignore
    ssr: {
      external: ["@vue/repl"],
    },
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          },
          chunkFileNames: chunkInfo => {
            const facadeModuleId = chunkInfo.facadeModuleId
              ? chunkInfo.facadeModuleId.split("/")
              : [];
            const fileName = facadeModuleId[facadeModuleId.length - 2] || "[name]";
            return `js/${fileName}/[name].[hash].js`;
          },
        },
      },
    },
  },
};
