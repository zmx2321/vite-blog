import * as examples from "./sidebar-manage/examples"; // examples

import * as interview from "./sidebar-manage/interview"; // 面试题

import * as note from "./sidebar-manage/note"; // 笔记

module.exports = {
  // examples
  "/examples": examples.examples1Config,

  // 面试题
  "/pages/interview/foundation/": interview.interviewFoundation, // 前端基础面试题
  "/pages/interview/accumulate/": interview.interviewAccumulate, // 前端面试题积累

  /**
   * 笔记
   */
  // 前端相关
  // 后端相关
  "/pages/note/back/java-note": note.noteBack.java, // java学习笔记
  "/pages/note/back/mysql-note": note.noteBack.mysql, // mysql学习笔记
  "/pages/note/back/linux-note": note.noteBack.linux, // linux学习笔记
  // 其他笔记
  "/pages/note/other/elk-note": note.noteOther.elk, // elk学习笔记
  "/pages/note/other/git-note": note.noteOther.git, // git学习笔记
  "/pages/note/other/nginx-note": note.noteOther.nginx, // nginx学习笔记
  "/pages/note/other": note.noteOther.other, // 其他学习笔记,
};
