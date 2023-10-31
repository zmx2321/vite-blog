/* 地图相关网址导航页面数据 **/
const siteData = [
  {
    title: "高德地图",
    items: [
      {
        icon: "",
        name: "官网",
        desc: "高德地图POI搜索",
        link: "https://www.amap.com/",
      },
      {
        icon: "",
        name: "拾取坐标",
        desc: "可以点击地图获取经纬度，可以根据经纬度进行检索，也可以根据地名获取经纬度",
        link: "https://lbs.amap.com/tools/picker",
      },
      {
        icon: "",
        name: "地图api",
        desc: "高德官方，原生js的地图api",
        link: "https://lbs.amap.com/demo/javascript-api-v2/example/map-lifecycle/map-show",
      },
    ],
  },
  {
    title: "其他",
    items: [
      {
        icon: "",
        name: "geojson选择器",
        desc: "点击地图，可以获取各省geojson数据，有外网地址，也可以下载之后使用",
        link: "https://datav.aliyun.com/portal/school/atlas/area_selector",
      },
      {
        icon: "",
        name: "天地图",
        desc: "未经过偏移的地图坐标",
        link: "https://map.tianditu.gov.cn/",
      },
    ],
  },
];

export default siteData;
