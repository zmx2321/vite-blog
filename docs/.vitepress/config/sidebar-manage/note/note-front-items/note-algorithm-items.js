/**
 * 前端算法笔记
 */
const baseUrl = "/pages/note/front/algorithm-note";

// 算法基础
const algorithmBase = [
  { text: "数组冒泡", link: `${baseUrl}/algorithm-note-1` },
  { text: "从小到大排序", link: `${baseUrl}/algorithm-note-2` },
  { text: "数组插入排序", link: `${baseUrl}/algorithm-note-3` },
  { text: "数组递归", link: `${baseUrl}/algorithm-note-4` },
  { text: "数组快速排序", link: `${baseUrl}/algorithm-note-5` },
  { text: "数组去重", link: `${baseUrl}/algorithm-note-6` },
];

// 算法练习
const algorithmPractice = [
  { text: "算法练习 - 20200609", link: `${baseUrl}/algorithm-note-7` },
  { text: "完成 extname 函数", link: `${baseUrl}/algorithm-note-8` },
];

module.exports = [
  { text: "前端算法积累", items: [] },
  { text: "算法基础", items: algorithmBase },
  { text: "算法练习", items: algorithmPractice },
];
