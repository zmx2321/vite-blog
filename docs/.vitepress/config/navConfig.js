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
    link: "/pages/examples/button",
  },
  {
    text: "前端导航",
    items: [
      { text: "前端综合", link: "/pages/site/page" },
      { text: "HTML/CSS", link: "/pages/site/html-css" },
      { text: "框架组件", link: "/pages/site/framework" },
    ],
  },

  { text: "更新日志", link: "https://github.com/zmx2321/vitepress_empty" },

  {
    text: "关于我",
    link: "/about/page",
  },
];
