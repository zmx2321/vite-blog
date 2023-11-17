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
const jsToolsConfig = [{ text: "js工具库封装", link: `${baseUrl}/js-tools-note-1` }];
// js - node
const jsNodeConfig = [
  { text: "node爬虫相关", link: `${baseUrl}/js-node-note-1` },
  { text: "node-express-mysql入门小栗子", link: `${baseUrl}/js-node-note-2` },
  { text: "express登陆和注册", link: `${baseUrl}/js-node-note-3` },
  { text: "node中的日志文件", link: `${baseUrl}/js-node-note-4` },
  { text: "node定时任务", link: `${baseUrl}/js-node-note-5` },
  { text: "node爬虫案例-定时发送邮件", link: `${baseUrl}/js-node-note-6` },
  { text: "当node爬虫遇到登陆和验证码", link: `${baseUrl}/js-node-note-7` },
  { text: "node问题集锦", link: `${baseUrl}/js-node-note-8` },
];

module.exports = [
  { text: "js笔记", items: [] },
  { text: "", items: jsBaseConfig },
  { text: "js数据类型", items: jsDataTypeConfig },
  { text: "", items: jsSyncConfig },
  { text: "", items: jsRegConfig },
  { text: "", items: jsToolsConfig },
  { text: "node学习积累", items: jsNodeConfig },
];
