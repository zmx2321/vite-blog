export const demo1Config = [
  {
    text: "demo1",
    items: [
      {
        text: "demo1",
        link: "/pages/demo/demo1/",
      },
      ...require("./sideDemoItems/demo1ConfigItems"),
    ],
  },
];
export const demo2Config = [
  {
    // text: "demo2",
    items: [
      {
        text: "demo2",
        link: "/pages/demo/demo2/",
      },
      ...require("./sideDemoItems/demo2ConfigItems"),
    ],
  },
];
export const demo3Config = [
  {
    text: "demo3",
    items: require("./sideDemoItems/demo3ConfigItems"),
  },
];
