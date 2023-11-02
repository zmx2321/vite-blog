module.exports = [
  // 以docs为根目录
  { text: "Home", link: "/" },

  {
    text: "demo",
    items: [
      { text: "demo1", link: "/pages/demo/demo1/index" },
      { text: "demo2", link: "/pages/demo/demo2/index" },
      { text: "demo3", link: "/pages/demo/demo3/index" },
    ],
  },
  {
    text: "note",
    items: [
      { text: "note1", link: "/pages/note/note1/index" },
      { text: "note2", link: "/pages/note/note2/index" },
      { text: "note3", link: "/pages/note/note3/index" },
    ],
  },
  {
    text: "examples",
    link: "/examples/",
  },
  {
    text: "前端导航",
    items: [
      { text: "前端综合", link: "/site/page" },
      { text: "HTML/CSS", link: "/site/html-css" },
      { text: "框架组件", link: "/site/framework" },
      { text: "地图相关", link: "/site/mapUrl" },
      { text: "前端工具集", link: "/site/tools" },
    ],
  },

  // { text: "更新日志", link: "https://github.com/zmx2321/vite-blog" },

  /* {
    text: "关于我",
    link: "/about/page",
  }, */
];
