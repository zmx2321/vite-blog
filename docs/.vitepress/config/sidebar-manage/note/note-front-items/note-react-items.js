/**
 * 前端算法笔记
 */
const baseUrl = "/pages/note/front/react-note";

// react学习笔记
const reactCourseConfig = [
  { text: "React入门简介", link: `${baseUrl}/cour-react-note-1` },
  { text: "React组件及Class、参数、状态的使用", link: `${baseUrl}/cour-react-note-2` },
  { text: "React组件示例", link: `${baseUrl}/cour-react-note-3` },
  { text: "React获取节点、双向绑定", link: `${baseUrl}/cour-react-note-4` },
  { text: "React生命周期", link: `${baseUrl}/cour-react-note-5` },
  { text: "React表单和数据交互", link: `${baseUrl}/cour-react-note-6` },
  { text: "React中父子级组件通信", link: `${baseUrl}/cour-react-note-7` },
  { text: "React小栗子(选项卡和jsonP)", link: `${baseUrl}/cour-react-note-8` },
  { text: "React高级选项卡(轮播图)", link: `${baseUrl}/cour-react-note-9` },
  { text: "使用WebPack配置正确React项目", link: `${baseUrl}/cour-react-note-10` },
];
// react积累
const reactConfig = [{ text: "react积累-1", link: `${baseUrl}/react-note-1` }];

module.exports = [
  { text: "react", items: [] },
  { text: "react学习笔记", items: reactCourseConfig },
  { text: "react积累", items: reactConfig },
];
