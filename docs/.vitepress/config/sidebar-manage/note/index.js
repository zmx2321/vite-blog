/**
 * 前端相关学习笔记
 */
export const noteFront = {
  css: require("./note-front-items/note-css-items"), // css学习笔记
  js: require("./note-front-items/note-js-items"), // js学习笔记
  vue: require("./note-front-items/note-vue-items"), // vue学习笔记
  react: require("./note-front-items/note-react-items"), // react学习笔记
  algorithm: require("./note-front-items/note-algorithm-items"), // 算法
};

/**
 * 后端相关学习笔记
 */
export const noteBack = {
  java: [{ items: [...require("./note-back-items/note-java-items")] }],
  mysql: [{ items: [...require("./note-back-items/note-mysql-items")] }],
  linux: [{ items: [...require("./note-back-items/note-linux-items")] }],
};

/**
 * 其他笔记
 */
export const noteOther = {
  git: [{ items: [...require("./note-other-items/other-git-items")] }],
  nginx: [{ items: [...require("./note-other-items/other-nginx-items")] }],
  elk: [{ items: [...require("./note-other-items/other-elk-items")] }],
  other: [
    { text: "其他笔记", items: [{ text: "笔记分类", link: "/pages/note/other/" }] },
    { items: [...require("./note-other-items")] },
  ],
};
