/**
 * 开始博客快捷导航
 */
const base = "/vite-blog";

const siteData = [
  /* {
    title: "博客快捷导航",
  }, */
  {
    title: "examples",
    items: [
      {
        icon: "",
        name: "例子",
        desc: "一些博客使用上的案例的案例",
        link: `${base}/examples/`,
      },
    ],
  },
  {
    title: "代码案例",
    items: [
      {
        icon: "",
        name: "前端基础面试题",
        desc: "基础面试题代码案例",
        link: `https://zmx2321.github.io/blog_code/interview/interview-one-side/`,
      },
      {
        icon: "",
        name: "vue2的一些案例",
        desc: "使用vue2做的一些案例",
        link: `https://zmx2321.github.io/vue_demo/`,
      },
      {
        icon: "",
        name: "vue3的一些案例",
        desc: "使用vue3做的一些案例",
        link: `https://zmx2321.github.io/vue3-demo/`,
      },
    ],
  },
];

export default siteData;
