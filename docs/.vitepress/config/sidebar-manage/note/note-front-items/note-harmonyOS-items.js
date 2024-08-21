/**
 * harmonyOS笔记
 */
const baseUrl = "/pages/note/front/harmonyOS-note";

// harmonyOS
const arktsConfig = [
  { text: "arkts笔记-1", link: `${baseUrl}/arkts-note-1` },
  { text: "arkts笔记-2", link: `${baseUrl}/arkts-note-2` },
];

module.exports = [
  { text: "harmonyOS笔记", items: [] },
  { text: "arkts笔记", items: arktsConfig },
];
