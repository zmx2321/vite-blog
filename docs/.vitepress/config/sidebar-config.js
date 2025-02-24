import * as examples from "./sidebar-manage/examples"; // examples

import * as interview from "./sidebar-manage/interview"; // 面试题

import * as note from "./sidebar-manage/note"; // 笔记

module.exports = {
  // examples
  "/examples": examples.examplesConfig,

  // 面试题
  "/pages/interview/foundation/": interview.interviewFoundation, // 前端基础面试题
  "/pages/interview/advanced/": interview.interviewAdvanced, // 前端进阶面试题
  "/pages/interview/accumulate/": interview.interviewAccumulate, // 前端面试题积累
  "/pages/interview/other/": interview.interviewOther, // 其他面试题

  /**
   * 笔记
   */
  // 前端相关
  "/pages/note/front/project-note": note.noteFront.project, // 项目笔记
  "/pages/note/front/js-note": note.noteFront.js, // js笔记
  "/pages/note/front/node-note": note.noteFront.node, // node笔记
  "/pages/note/front/vue-note": note.noteFront.vue, // vue笔记
  "/pages/note/front/gis-note": note.noteFront.gis, // gis笔记
  "/pages/note/front/v8-note": note.noteFront.v8, // v8笔记
  "/pages/note/front/algorithm-note": note.noteFront.algorithm, // 算法笔记
  "/pages/note/front/css-note": note.noteFront.css, // css笔记
  "/pages/note/front/react-note": note.noteFront.react, // react笔记
  "/pages/note/front/uniapp-note": note.noteFront.uniapp, // uniapp笔记
  "/pages/note/front/harmonyOS-note": note.noteFront.harmonyOS, // harmonyOS笔记

  // 后端相关
  "/pages/note/back/java-note": note.noteBack.java, // java笔记
  "/pages/note/back/mysql-note": note.noteBack.mysql, // mysql笔记
  "/pages/note/back/linux-note": note.noteBack.linux, // linux笔记
  "/pages/note/back/python-note": note.noteBack.python, // python笔记
  // 其他笔记
  "/pages/note/other/git-note": note.noteOther.git, // git笔记
  "/pages/note/other/nginx-note": note.noteOther.nginx, // nginx笔记
  "/pages/note/other/http-note": note.noteOther.http, // http笔记
  "/pages/note/other/elk-note": note.noteOther.elk, // elk笔记
  "/pages/note/other": note.noteOther.other, // 其他笔记
};
