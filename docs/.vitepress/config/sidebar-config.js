import * as examples from "./sidebar-manage/examples"; // examples

/* import * as sideDemo from "./sidebar-manage/sideDemo"; // demo
import * as sideNote from "./sidebar-manage/sideNote"; // note */

import * as interview from "./sidebar-manage/interview"; // 面试题

module.exports = {
  // examples
  "/examples": examples.examples1Config,

  /* // demo
  "/pages/demo/demo1": sideDemo.demo1Config,
  "/pages/demo/demo2": sideDemo.demo2Config,
  "/pages/demo/demo3": sideDemo.demo3Config,

  // note
  "/pages/note/note1": sideNote.note1Config,
  "/pages/note/note2": sideNote.note2Config,
  "/pages/note/note3": sideNote.note3Config, */

  // 面试题
  "/pages/interview/foundation/": interview.interviewFoundation, // 前端基础面试题
  "/pages/interview/accumulate/": interview.interviewAccumulate, // 前端面试题积累
};
