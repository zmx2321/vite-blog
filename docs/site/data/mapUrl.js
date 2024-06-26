/* 地图相关网址导航页面数据 **/
const siteData = [
  {
    title: "高德地图",
    items: [
      {
        icon: "",
        name: "高德地图官网",
        desc: "高德地图POI搜索",
        link: "https://www.amap.com/",
      },
      {
        icon: "",
        name: "高德地图拾取坐标",
        desc: "可以点击地图获取经纬度，可以根据经纬度进行检索，也可以根据地名获取经纬度",
        link: "https://lbs.amap.com/tools/picker",
      },
      {
        icon: "",
        name: "高德地图地图api",
        desc: "高德官方，原生js的地图api",
        link: "https://lbs.amap.com/demo/javascript-api-v2/example/map-lifecycle/map-show",
      },
    ],
  },
  {
    title: "百度地图",
    items: [
      {
        icon: "",
        name: "百度地图拾取坐标",
        desc: "可以点击地图获取经纬度，可以根据经纬度进行检索，也可以根据地名获取经纬度",
        link: "https://api.map.baidu.com/lbsapi/getpoint/index.html",
      },
    ],
  },
  {
    title: "腾讯地图",
    items: [
      {
        icon: "",
        name: "腾讯地图拾取坐标",
        desc: "可以点击地图获取经纬度，可以根据经纬度进行检索，也可以根据地名获取经纬度",
        link: "https://lbs.qq.com/tool/getpoint/get-point.html",
      },
    ],
  },
  {
    title: "mapbox",
    items: [
      {
        icon: "",
        name: "mapbox",
        desc: "和Leaflet类似，一个开源比较能方便加载geojson的地图工具",
        link: "https://www.mapbox.com/",
      },
      {
        icon: "",
        name: "mapbox的github",
        desc: "",
        link: "https://github.com/mapbox",
      },
      {
        icon: "",
        name: "mapbox-gl文档",
        desc: "里面讲述了mapbox创建加载地图的一些简单示例，是英文文档",
        link: "https://docs.mapbox.com/mapbox-gl-js/example/",
      },
      {
        icon: "",
        name: "mapbox文档",
        desc: "mapbox文档，包含mapbox-gl文档",
        link: "https://docs.mapbox.com/",
      },
      {
        icon: "",
        name: "maplibre示例",
        desc: "maplibre是mapbox的免费开源分支，里面大大部分api是差不多的",
        link: "https://maplibre.org/maplibre-gl-js/docs/examples/",
      },
      {
        icon: "",
        name: "maplibre文档",
        desc: "maplibre的代码示例",
        link: "https://maplibre.org/maplibre-gl-js/docs/API/classes/maplibregl.Map/",
      },
      {
        icon: "",
        name: "mapbox介绍",
        desc: "掘金文章-mapbox+vue全攻略",
        link: "https://juejin.cn/post/7222938641034461245",
      },
    ],
  },
  {
    title: "openlayer",
    items: [
      {
        icon: "",
        name: "openlayer api",
        desc: "和Leaflet类似，一个开源比较能方便加载geojson的地图工具",
        link: "https://openlayers.org/",
      },
    ],
  },
  {
    title: "天地图",
    items: [
      {
        icon: "",
        name: "天地图网页开发文档",
        desc: "天地图各种js示例",
        link: "http://lbs.tianditu.gov.cn/api/js4.0/examples.html",
      },
    ],
  },
  {
    title: "三维地图",
    items: [
      {
        icon: "",
        name: "火星科技官网",
        desc: "3d地图渲染框架，基于cesium进行的二次开发，可以渲染各种数据类型的地图，主要是3dtiles",
        link: "http://mars3d.cn/",
      },
      {
        icon: "",
        name: "mars3d库代码示例",
        desc: "mars3d库代码示例，使用vue，react或者原生js",
        link: "http://mars3d.cn/example.html?type=vue",
      },
      {
        icon: "",
        name: "mars3d库开发教程",
        desc: "mars3d的库介绍以及使用说明",
        link: "http://mars3d.cn/doc.html",
      },
      {
        icon: "",
        name: "mars3d库项目模板",
        desc: "mars3d库项目示例，可以在线体验mars3d库可以实现的效果，也可以购买这个示例，在模板基础上进行开发，模板中已经有简单的一些功能",
        link: "http://mars3d.cn/template.html?type=vue",
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
        name: "基于mapbox的geojson选择器",
        desc: "基于mapbox的geojson选择器",
        link: "https://geojson.io/#map=6/38.831/39.331",
      },
      {
        icon: "",
        name: "天地图",
        desc: "未经过偏移的地图坐标",
        link: "https://map.tianditu.gov.cn/",
      },
    ],
  },
  {
    title: "资料",
    items: [
      {
        icon: "",
        name: "地图服务说明",
        desc: "Gis开发入门，OpenLayers、Leaflet、Maplibre-gl和Cesiumjs地图引擎介绍以及几种地图服务vms、vmts、TMS和XYZ介绍",
        link: "https://blog.csdn.net/eguid/article/details/130059771",
      },
      {
        icon: "",
        name: "坐标系简述",
        desc: "知乎里面的一个问题解答",
        link: "https://www.zhihu.com/question/24945193/answer/2820520273",
      },
      {
        icon: "",
        name: "坐标系转换工具",
        desc: "百度、高德、腾讯地图纠偏",
        link: "http://jingweidu.757dy.com/change",
      },
    ],
  },
];

export default siteData;
