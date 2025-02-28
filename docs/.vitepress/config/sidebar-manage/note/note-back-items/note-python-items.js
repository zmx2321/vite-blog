/**
 * python学习笔记
 */
const baseUrl = "/pages/note/back/python-note";

// python课程学习笔记
const pythonCourseNoteConfig = [
  { text: "python基本概念", link: `${baseUrl}/python-course-note-1` },
  // { text: "python基础语法", link: `${baseUrl}/python-course-note-2` },
];

// python工作笔记
const pythonWorkNoteConfig = [
  { text: "python工作积累", link: `${baseUrl}/python-note-1` },
  // { text: "python爬虫", link: `${baseUrl}/python-note-2` },
];

// python-ai
const pythonAiNoteConfig = [{ text: "AGI到来", link: `${baseUrl}/python-ai-note-1` }];

module.exports = [
  { text: "python笔记", items: [] },
  { text: "python课程学习笔记", items: pythonCourseNoteConfig },
  { text: "python工作笔记", items: pythonWorkNoteConfig },
  { text: "pythonAi", items: pythonAiNoteConfig },
];
