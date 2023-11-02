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
    ],
  },
];

export default siteData;
