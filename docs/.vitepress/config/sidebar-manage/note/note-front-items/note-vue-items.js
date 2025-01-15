/**
 * vue笔记
 */
const baseUrl = "/pages/note/front/vue-note";

// vue2笔记
const vue2Config = [
  { text: "vue2项目开发基本知识点总结", link: `${baseUrl}/vue2-note-1` },
  { text: "vue2工作积累", link: `${baseUrl}/vue2-note-2` },
  { text: "vue2工具库", link: `${baseUrl}/vue2-note-3` },
  { text: "vue2配置", link: `${baseUrl}/vue2-note-4` },
  { text: "在vue2中使用MapLibre", link: `${baseUrl}/vue2-note-5` },
];

// vue3笔记
const vue3Config = [
  { text: "初识Vue3.0 + vite", link: `${baseUrl}/vue3-note-1` },
  { text: "Vue3.0中新特性及Compiler原理", link: `${baseUrl}/vue3-note-2` },
  { text: "vue3工作积累", link: `${baseUrl}/vue3-note-3` },
  { text: "vform3跨页面存储,使用indexdb", link: `${baseUrl}/vue3-note-4` },
];

module.exports = [
  { text: "vue笔记", items: [] },
  { text: "vue2笔记", items: vue2Config },
  { text: "vue3笔记", items: vue3Config },
];
