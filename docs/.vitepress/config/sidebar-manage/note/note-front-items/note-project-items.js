/**
 * 项目笔记
 */
const baseUrl = "/pages/note/front/project-note";

// 项目一 - 宁波项目笔记
const project1Config = [
  { text: "大屏开发技巧整理", link: `${baseUrl}/project1/project1-note-1` },
  { text: "封装一个全局导出功能", link: `${baseUrl}/project1/project1-note-2` },
  { text: "实现全局水印功能", link: `${baseUrl}/project1/project1-note-3` },
  { text: "封装一个公共的dialog组件", link: `${baseUrl}/project1/project1-note-4` },
  { text: "封装el-card和表格", link: `${baseUrl}/project1/project1-note-5` },
  { text: "openlayer工具库封装流程", link: `${baseUrl}/project1/project1-note-6` },
  { text: "openlayer主要工具", link: `${baseUrl}/project1/project1-note-7` },
  { text: "openlayer中的feature元素", link: `${baseUrl}/project1/project1-note-8` },
  { text: "openlayer其他功能的封装", link: `${baseUrl}/project1/project1-note-9` },
];

// 项目二 - 项目笔记
const project2Config = [{ text: "项目二知识点1", link: `${baseUrl}/project2/project2-note-1` }];

module.exports = [
  // { text: "项目笔记", items: [] },
  { text: "项目笔记", link: `${baseUrl}/` },
  { text: "项目一", link: `${baseUrl}/project1/`, items: project1Config },
  { text: "项目二", link: `${baseUrl}/project2/`, items: project2Config },
];
