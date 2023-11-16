/**
 * 前端相关学习笔记
 */
export const noteFront = {};

/**
 * 后端相关学习笔记
 */
export const noteBack = {
  java: [
    {
      items: [...require("./note-items/note-back-items/note-java-items")],
    },
  ],
  mysql: [
    {
      items: [...require("./note-items/note-back-items/note-mysql-items")],
    },
  ],
  linux: [
    {
      items: [...require("./note-items/note-back-items/note-linux-items")],
    },
  ],
};

/**
 * 其他笔记
 */
export const noteOther = {
  elk: [
    {
      items: [...require("./note-items/note-other-items/other-elk-items")],
    },
  ],
  git: [
    {
      items: [...require("./note-items/note-other-items/other-git-items")],
    },
  ],
  nginx: [
    {
      items: [...require("./note-items/note-other-items/other-nginx-items")],
    },
  ],
  other: [
    {
      text: "其他笔记",
      items: [
        {
          text: "笔记分类",
          link: "/pages/note/other/",
        },
      ],
    },
    {
      items: [...require("./note-items/note-other-items")],
    },
  ],
};
