module.exports = [
  { text: "Home", link: "/" }, // 以docs为根目录

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
    text: "前端导航",
    items: [
      { text: "前端综合", link: "/site/page" },
      { text: "HTML/CSS", link: "/site/html-css" },
      { text: "框架组件", link: "/site/framework" },
      { text: "地图相关", link: "/site/mapUrl" },
      { text: "前端工具集", link: "/site/tools" },
      { text: "其他导航", link: "/site/other" },
    ],
  },
];
