/**
 * 前端相关笔记
 */
export const noteFront = {
  project: require("./note-front-items/note-project-items"), // 项目笔记
  js: require("./note-front-items/note-js-items"), // js笔记
  node: require("./note-front-items/note-node-items"), // node笔记
  vue: require("./note-front-items/note-vue-items"), // vue笔记
  gis: require("./note-front-items/note-gis-items"), // gis笔记
  v8: require("./note-front-items/note-v8-items"), // v8笔记
  algorithm: require("./note-front-items/note-algorithm-items"), // 算法笔记
  css: require("./note-front-items/note-css-items"), // css笔记
  react: require("./note-front-items/note-react-items"), // react笔记
  uniapp: require("./note-front-items/note-uniapp-items"), // uniapp笔记
  harmonyOS: require("./note-front-items/note-harmonyOS-items"), // harmonyOS笔记
};

/**
 * 后端相关笔记
 */
export const noteBack = {
  java: [{ items: [...require("./note-back-items/note-java-items")] }],
  mysql: [{ items: [...require("./note-back-items/note-mysql-items")] }],
  linux: [{ items: [...require("./note-back-items/note-linux-items")] }],
  python: [{ items: [...require("./note-back-items/note-python-items")] }],
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
  http: setOtherNote([
    { text: "", items: [...require("./note-other-items/note-list-items")] },
    { text: "http笔记", items: [...require("./note-other-items/other-http-items")] },
  ]),
  elk: setOtherNote([
    { text: "", items: [...require("./note-other-items/note-list-items")] },
    { text: "elk笔记", items: [...require("./note-other-items/other-elk-items")] },
  ]),
  computer: setOtherNote([
    { text: "", items: [...require("./note-other-items/note-list-items")] },
    { text: "计算机常识笔记", items: [...require("./note-other-items/other-computer-items")] },
  ]),
  other: setOtherNote([]),
};
