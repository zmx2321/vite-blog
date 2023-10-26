import * as sideDemo from "./sidebarManage/sideDemo";
import * as sideNote from "./sidebarManage/sideNote";

module.exports = {
  "/pages/demo/demo1": sideDemo.demo1Config,
  "/pages/demo/demo2": sideDemo.demo2Config,
  "/pages/demo/demo3": sideDemo.demo3Config,

  "/pages/note/note1": sideNote.note1Config,
  "/pages/note/note2": sideNote.note2Config,
  "/pages/note/note3": sideNote.note3Config,
};
