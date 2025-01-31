/**
 * js笔记
 */
const baseUrl = "/pages/note/front/js-note";

// js中基础理论及常用api
const jsBaseConfig = [
  { text: "js中基础理论及常用api", link: `${baseUrl}/js-base-note-1` },
  { text: "js中的时间", link: `${baseUrl}/js-base-note-2` },
  { text: "js中的dom操作", link: `${baseUrl}/js-base-note-3` },
  { text: "echarts问题集锦", link: `${baseUrl}/js-base-note-4` },
  { text: "事件循环", link: `${baseUrl}/js-base-note-5` },
];

// js数据类型
const jsDataTypeConfig = [
  { text: "js中的数组操作", link: `${baseUrl}/js-data-type-note-1` },
  { text: "js中的字符串操作", link: `${baseUrl}/js-data-type-note-2` },
  { text: "js中的对象", link: `${baseUrl}/js-data-type-note-3` },
];

// js异步
const jsSyncConfig = [{ text: "js中的异步", link: `${baseUrl}/js-async-note-1` }];

// js正则
const jsRegConfig = [{ text: "js中的正则", link: `${baseUrl}/js-reg-note-1` }];

// js工具
const jsToolsConfig = [
  { text: "js工具库封装", link: `${baseUrl}/js-tools-note-1` },
  { text: "常用js工具方法", link: `${baseUrl}/js-tools-note-2` },
];

// ts笔记
const tsNoteConfig = [
  { text: "ts的常见使用", link: `${baseUrl}/ts-note-1` },
];

module.exports = [
  { text: "js笔记", items: [] },
  { text: "", items: jsBaseConfig },
  { text: "js数据类型", items: jsDataTypeConfig },
  { text: "", items: jsSyncConfig },
  { text: "", items: jsRegConfig },
  { text: "", items: jsToolsConfig },
  { text: "ts笔记", items: tsNoteConfig },
];
