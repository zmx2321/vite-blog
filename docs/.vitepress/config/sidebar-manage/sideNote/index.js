const noteConfig1 = () => [
  {
    text: "note1-3",
    items: [
      /* {
        text: "demo1",
        link: "/pages/demo/demo1/",
      }, */
      ...require("./sideNoteItems/note1ConfigItems"),
      ...require("./sideNoteItems/note2ConfigItems"),
      ...require("./sideNoteItems/note3ConfigItems"),
    ],
  },
];
const noteConfig2 = () => [
  {
    items: require("./sideNoteItems/note1ConfigItems"),
  },
  {
    items: require("./sideNoteItems/note2ConfigItems"),
  },
  {
    items: require("./sideNoteItems/note3ConfigItems"),
  },
];

export const note1Config = noteConfig1();
export const note2Config = noteConfig1();
export const note3Config = [
  {
    text: "demo1",
    link: "/pages/demo/demo1/",
  },
  ...noteConfig2(),
];
