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
        name: "AI 搜索",
        desc: "最懂程序员的新一代 AI 搜索引擎",
        link: `${base}/guide/ask`,
      },
      {
        icon: "",
        name: "例子",
        desc: "一些博客使用上的案例的案例",
        link: `${base}/examples/button`,
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
  {
    title: "线上的优秀后台管理模板",
    items: [
      {
        icon: "",
        name: "vue3后台管理模板",
        desc: "Geeker-Admin 一款基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。项目提供强大的 ProTable 组件，在一定程度上提高您的开发效率。另外本项目还封装了一些常用组件、Hooks、指令、动态路由、按钮级别权限控制等功能。",
        link: `https://admin.spicyboy.cn/#/login`,
      },
      {
        icon: "",
        name: "react后台管理模板",
        desc: "🚀🚀🚀 Hooks Admin，基于 React18、React-Router v6、React-Hooks、Redux && Redux-Toolkit、TypeScript、Vite2、Ant-Design 开源的一套后台管理框架。🌈 Redux-Toolkit 版本请切换到 Redux-Toolkit 分支上🚀🚀🚀 Hooks Admin，基于 React18、React-Router v6、React-Hooks、Redux && Redux-Toolkit、TypeScript、Vite2、Ant-Design 开源的一套后台管理框架。",
        link: `https://hooks.spicyboy.cn/#/login`,
      },
      {
        icon: "",
        name: "后台管理模板gitee",
        desc: "大神的gitee代码仓库",
        link: `https://gitee.com/HalseySpicy`,
      },
      {
        icon: "",
        name: "后台管理模板github",
        desc: "大神的github代码仓库",
        link: `https://github.com/HalseySpicy`,
      },
    ],
  },
];

export default siteData;
