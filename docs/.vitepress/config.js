const navConfig = require("./config/navConfig");
const sidebarConfig = require("./config/sideBarConfig");

export default {
  title: "zmx的前端日志",
  description: "zmx2321",

  // 部署到github相关的配置
  base: "/vitepress_empty/",

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    // 增加一个自定义的 favicon(网页标签的图标)
    ["link", { rel: "icon", href: "/favicon.ico" }],
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
      pattern: "https://github.com/zmx2321/vitepress_empty",
      text: "在 github 上编辑此页",
    },

    // 站点页脚配置
    footer: {
      copyright: "MIT Licensed | Copyright © 2020-present zmx2321@gmail.com",
    },

    // lastUpdated: 'Last Updated', // string | boolean
    // 搜索
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },

    returnToTopLabel: "返回顶部",

    // 你可以通过 themeConfig.lastUpdated 选项来获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdatedText: "最后更新", // string

    // 默认值：false  显示所有页面的标题链接
    // displayAllHeaders: true,

    // 默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新
    activeHeaderLinks: true,

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // 当你提供了 themeConfig.repo 选项，将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接
    repo: "zmx2321/vitepress_empty",

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

    // 显示所有页面的标题链接
    // displayAllHeaders: true // 默认值：false
  },

  // 插件
  plugins: [
    "@vuepress/active-header-links", // 页面滚动时自动激活侧边栏链接的插件
    "@vuepress/back-to-top", // 返回顶部插件
    "@vuepress/medium-zoom", // 图片预览插件
    "@vuepress/nprogress", //页面顶部进度条
    /* [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: "#valine-vuepress-comment",
          appId: "PzBRAo1U271H7HJLjo1z72Nd-gzGzoHsz",
          appKey: "8eVX45J8i5VFTlkejnfBMuhh",
          visitor: false, // 阅读量统计
        },
      },
    ], */

    // 移除console
    // drop_console和pure_funcs的区别，drop_console是把console.log()注释掉了，而pure_funcs是把console.log()移除掉了
    /* new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
              warnings: false,
              drop_debugger: true, //debugger
              drop_console: true,// console
              pure_funcs:['console.log'] // 移除console
          },
        },
        sourceMap: false,
        parallel: true,
    }), */
  ],
};
