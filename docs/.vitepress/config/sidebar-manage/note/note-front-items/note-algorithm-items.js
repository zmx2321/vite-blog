/**
 * 前端算法笔记
 */
const baseUrl = "/pages/note/front/algorithm-note";

// 算法基础
const algorithmBaseConfig = [
  { text: "数组冒泡", link: `${baseUrl}/algorithm-base-note-1` },
  { text: "从小到大排序", link: `${baseUrl}/algorithm-base-note-2` },
  { text: "数组插入排序", link: `${baseUrl}/algorithm-base-note-3` },
  { text: "数组递归", link: `${baseUrl}/algorithm-base-note-4` },
  { text: "数组快速排序", link: `${baseUrl}/algorithm-base-note-5` },
  { text: "数组去重", link: `${baseUrl}/algorithm-base-note-6` },
];

// 算法练习
const algorithmPracticeConfig = [
  { text: "算法练习 - 20200609", link: `${baseUrl}/algorithm-practice-note-1` },
  { text: "完成 extname 函数", link: `${baseUrl}/algorithm-practice-note-2` },
];

module.exports = [
  { text: "前端算法积累", items: [] },
  { text: "算法基础", items: algorithmBaseConfig },
  { text: "算法练习", items: algorithmPracticeConfig },
];
