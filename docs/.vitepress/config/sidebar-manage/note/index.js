/**
 * 前端相关学习笔记
 */
export const noteFront = {
  js: require("./note-front-items/note-js-items"), // js学习笔记
  node: require("./note-front-items/note-node-items"), // node学习笔记
  gis: require("./note-front-items/note-gis-items"), // gis学习笔记
  v8: require("./note-front-items/note-v8-items"), // v8学习笔记
  algorithm: require("./note-front-items/note-algorithm-items"), // 算法笔记
  vue: require("./note-front-items/note-vue-items"), // vue学习笔记
  react: require("./note-front-items/note-react-items"), // react学习笔记
  uniapp: require("./note-front-items/note-uniapp-items"), // uniapp笔记
  css: require("./note-front-items/note-css-items"), // css学习笔记
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
 *
 */
const setOtherNote = obj => {
  if (obj) {
    return [
      { text: "", items: [{ text: "笔记分类", link: "/pages/note/other/" }] },
      ...obj,
      { items: [...require("./note-other-items")] },
    ];
  }
};
export const noteOther = {
  git: setOtherNote([
    { text: "", items: [...require("./note-other-items/note-list-items")] },
    { text: "git笔记", items: [...require("./note-other-items/other-git-items")] },
  ]),
  nginx: setOtherNote([
    { text: "", items: [...require("./note-other-items/note-list-items")] },
    { text: "nginx笔记", items: [...require("./note-other-items/other-nginx-items")] },
  ]),
  elk: setOtherNote([
    { text: "", items: [...require("./note-other-items/note-list-items")] },
    { text: "elk笔记", items: [...require("./note-other-items/other-elk-items")] },
  ]),
  other: setOtherNote([]),
};
