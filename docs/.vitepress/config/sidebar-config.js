import * as examples from "./sidebar-manage/examples"; // examples

import * as interview from "./sidebar-manage/interview"; // 面试题

module.exports = {
  // examples
  "/examples": examples.examples1Config,

  // 面试题
  "/pages/interview/foundation/": interview.interviewFoundation, // 前端基础面试题
  "/pages/interview/accumulate/": interview.interviewAccumulate, // 前端面试题积累
};
