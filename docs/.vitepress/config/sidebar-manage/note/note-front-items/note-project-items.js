/**
 * 项目笔记
 */
const baseUrl = "/pages/note/front/project-note";

// 项目一 - 宁波项目笔记
const project1Config = [
  { text: "大屏开发技巧整理", link: `${baseUrl}/project1/project1-note-1` },
  { text: "封装一个全局导出功能", link: `${baseUrl}/project1/project1-note-2` },
  { text: "实现全局水印功能", link: `${baseUrl}/project1/project1-note-3` }
];

// 项目二 - 项目笔记
const project2Config = [
  { text: "项目二知识点1", link: `${baseUrl}/project2/project2-note-1` }
];

module.exports = [
  // { text: "项目笔记", items: [] },
  { text: "项目笔记", link: `${baseUrl}/` },
  { text: "项目一",link: `${baseUrl}/project1/`, items: project1Config },
  { text: "项目二",link: `${baseUrl}/project2/`, items: project2Config },
];