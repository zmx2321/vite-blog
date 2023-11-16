module.exports = [
  { text: "Home", link: "/" }, // 以docs为根目录

  {
    text: "面试题",
    items: [
      { text: "导航", link: "/pages/interview/index" },
      { text: "前端基础面试题", link: "/pages/interview/foundation/index" },
      { text: "前端面试题积累", link: "/pages/interview/accumulate/index" },
    ],
  },
  {
    text: "笔记",
    items: [
      { text: "前端相关", link: "/pages/note/front/index" },
      { text: "后端相关", link: "/pages/note/back/index" },
      { text: "其他笔记", link: "/pages/note/other/index" },
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
