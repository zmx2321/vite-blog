# openlayer库完整代码
> OpenlayerBaseMap

## OpenlayerBaseMap/menuUtils.js
```js
/**
 * 维护右键菜单栏
 */

import { ElMessage } from 'element-plus'
import * as mapUtils from "./mapUtils.js";
import mittBus from "@/utils/mittBus"; // mitt
import { copyTextToClipboard } from "@/utils/index.js";

// 菜单项
const menuMethodBtn = {
    // 公共选项,常驻菜单
    commonMenu: {
        // commonMenuMethod0: '地图功能测试',  // 公共选项0
        // commonMenuMethod01: '添加自定义标注点',  // 公共选项01
        // commonMenuMethod02: '添加自定义闪烁点',  // 公共选项02
        commonMenuMethod1: '拷贝当前经纬度',  // 公共选项1
        // commonMenuMethod2: '置顶要素',  // 公共选项2
    },
    // 公共动态选项,每个页面有需要才显示
    commonDynamicMenu: {
        commonDynamicMenuMethod1: '清除所有要素',  // 公共选项3
        commonDynamicMenuMethod2: '显示当前要素信息',  // 公共动态选项1
        commonDynamicMenuMethod3: '仅取消绘制状态',  // 公共动态选项3
        commonDynamicMenuMethod4: '展示分析结果',  // 公共动态选项4
        commonDynamicMenuMethod5: '删除所有绘制内容',  // 公共动态选项5
    },
    // 子页动态选项, 单页面显示或单页面有需要显示
    singleMenu: {
        singleMenuMethod1: '刷新地图',  // 子页动态选项1
        singleMenuMethod2: '清除POI点',  // 子页动态选项2
        // singleMenuMethod2: '展示分析结果'  // 子页动态选项2
    },
}

if (import.meta.env.VITE_APP_ENV === 'development') {
    menuMethodBtn.commonMenu = {
        ...menuMethodBtn.commonMenu,
        commonMenuMethod0: '地图功能测试',  // 公共选项0
        commonMenuMethod01: '添加自定义标注点',  // 公共选项01
        commonMenuMethod02: '添加自定义闪烁点',  // 公共选项02
    }
}

// 主菜单项
const { commonMenu } = menuMethodBtn  // 公共选项,常驻菜单
let commonMenuMethodsArr = []  // 常驻菜单数组
// 将对象中的值传入数组
for (let i in commonMenu) {
    commonMenuMethodsArr.push(commonMenu[i])
}

export default {
    // 菜单项
    menuMethodBtn,

    // 常驻菜单数组
    commonMenuMethodsArr,

    // 设置鼠标右键菜单栏方法
    setMenuMethods(olMap, option, feature, pixelPoint, proxy) {
        // console.log(olMap, option, feature, pixelPoint, proxy)

        // 经纬度
        let currentLonlat = mapUtils.transformToLonlat(pixelPoint)

        /**
         * 菜单栏
         * commonMenu  // 公共选项,常驻菜单
         * commonDynamicMenu  // 公共动态选项,每个页面有需要才显示
         * singleMenu  // 子页动态选项, 单页面显示或单页面有需要显示
         */
        const { commonMenu, commonDynamicMenu, singleMenu } = this.menuMethodBtn;

        switch (option) {
            /**
             * ===========================
             *      公共选项,常驻菜单
             * ===========================
             */
            // 地图功能测试
            case commonMenu.commonMenuMethod0:
                // console.log("test", commonMenu.commonMenuMethod0);

                mapUtils.olMapTestCommon(olMap, feature, pixelPoint);
                break;
            // 添加标注点
            case commonMenu.commonMenuMethod01:
                // console.log("test", commonMenu.commonMenuMethod1);

                mapUtils.addMyPointByMenu(olMap, pixelPoint);
                break;
            // 清空自定义标注点
            case '清空自定义标注点':
                // console.log("test", '清空自定义标注点');

                // 根据条件移除要素
                mapUtils.removeByCondition(olMap, currentFeature => {
                    return currentFeature.get('tempType') === 'myPointByMenu'
                })
                break;
            // 添加闪烁点
            case commonMenu.commonMenuMethod02:
                // console.log("test", commonMenu.commonMenuMethod2);

                mapUtils.addFlickerPointByMenu(olMap, pixelPoint);
                break;
            // 清空自定义闪烁点
            case '清空自定义闪烁点':
                // console.log("test", '清空自定义闪烁点');

                let flickerPointDom = document.querySelectorAll('.flicker_point')

                flickerPointDom.forEach(item => {
                    item.classList.remove('flicker_point')
                })

                break;
            // 拷贝当前经纬度
            case commonMenu.commonMenuMethod1:
                // console.log("拷贝当前经纬度");
                copyTextToClipboard(`[${currentLonlat}]`, () => {
                    ElMessage.success(`[${currentLonlat}] 拷贝成功`);
                });
                break;
            // 置顶图层
            case commonMenu.commonMenuMethod2:
                // console.log("置顶图层");
                mapUtils.featureToMaxTop(olMap, feature);
                break;
            /**
             * =======================================
             *      公共动态选项,每个页面有需要才显示
             * =======================================
             */
            // 清除所有要素
            case commonDynamicMenu.commonDynamicMenuMethod1:
                // console.log("清除所有要素");

                mapUtils.removeAllLayer(olMap);
                break;
            // 显示当前要素信息
            case commonDynamicMenu.commonDynamicMenuMethod2:
                // console.log("显示当前要素信息");
                mittBus.emit("singleFeaturesClick", { feature, pixelPoint });
                break;
            // 仅取消绘制状态
            case commonDynamicMenu.commonDynamicMenuMethod3:
                // console.log("仅取消绘制状态");

                mapUtils.cancelDrawInteraction(olMap)
                break;
            // 展示分析结果
            case commonDynamicMenu.commonDynamicMenuMethod4:
                let currentData = feature.get('pointData')
                // console.log("展示分析结果", feature.get('pointData'));
                mittBus.emit("analysisPointData", currentData);
                break;
            // 删除所有绘制内容
            case commonDynamicMenu.commonDynamicMenuMethod5:
                console.log("删除所有绘制内容");

                // 根据条件移除要素
                mapUtils.removeByCondition(olMap, currentFeature => {
                    return currentFeature.get('drawType')
                })

                // let currentData = feature.get('pointData')

                // mittBus.emit("analysisPointData", currentData);
                break;
            /**
             * =============================================
             *      子页动态选项, 单页面显示或单页面有需要显示
             * =============================================
             */
            // 刷新地图
            case singleMenu.singleMenuMethod1:
                // console.log("刷新地图");
                mittBus.emit("reflashMap");
                break;
            // 清除POI点
            case singleMenu.singleMenuMethod2:
                // console.log("清除POI点");
                mapUtils.removeLayerByBusinessType(olMap, "POIMarker"); // 根据类型移除图层
                break;
        }
    },

    // 根据具体页面配置菜单栏
    setMentBtnExtendByPage(currentPageType) {
        const { singleMenu } = this.menuMethodBtn

        switch (currentPageType) {
            case 'gis':
                mapUtils.menuAddSingleMethod(singleMenu.singleMenuMethod1)
                mapUtils.menuAddSingleMethod(singleMenu.singleMenuMethod2)
                break;
        }
    }
}
```

## OpenlayerBaseMap/mapUtils.js
```js
// map core
import 'ol/ol.css'
import { Map, View } from 'ol';
// map 加载底图相关
import { /* OSM, */ XYZ, Vector as VectorSource } from 'ol/source';
// map 坐标相关
import { fromLonLat, transform, toLonLat } from 'ol/proj';
import { getTopLeft, getBottomRight, getCenter } from 'ol/extent';
import { toStringHDMS } from 'ol/coordinate';
// map 控件相关
import { FullScreen, Zoom, ZoomSlider, ScaleLine } from "ol/control";
// map 图层相关
import Feature from 'ol/Feature';
import { Point, Circle, Polygon, LineString } from "ol/geom";
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';  // VectorLayer表示珊格图层
import LinearRing from 'ol/geom/LinearRing';
import Overlay from 'ol/Overlay';  // 气泡
import { getLength } from 'ol/sphere';
// map 样式
import { Circle as CircleStyle, Fill, Stroke, Style, Text, Icon } from 'ol/style';
// kml
import { KML/* , GeoJSON */ } from 'ol/format';
// 选择多边形
import { Draw, defaults/* , Modify, Snap */ } from 'ol/interaction';
// render
import { getVectorContext } from "ol/render";
// 菜单栏
import menuUtils from './menuUtils.js'

/******************************
 * 变量(非地图)
 * ****************************
 */
let count = 0  // 地图点击打点变量

/******************************
 * 地图变量(工具)
 * ****************************
 */
// 普通搜索
// https://api.tianditu.gov.cn/v2/search?postStr={%22queryType%22:13,%22start%22:0,%22count%22:5,%22specify%22:%22156110000%22,%22dataTypes%22:%22%E6%B3%95%E9%99%A2,%E5%85%AC%E5%9B%AD%22}&type=query&tk=02dd5ea16a6b869b3b37e12f269b1463
// 周边搜索
// https://api.tianditu.gov.cn/v2/search?postStr={%22keyWord%22:%22%E5%85%AC%E5%9B%AD%22,%22level%22:12,%22queryRadius%22:5000,%22pointLonlat%22:%22121.6262019920349,29.879795341283085%22,%22queryType%22:3,%22start%22:0,%22count%22:10}&type=query&tk=02dd5ea16a6b869b3b37e12f269b1463

const tdtTk = import.meta.env.VITE_APP_MapToken  // 全局配置 - 天地图密钥

// 设置底图url
const setLayerUrl = (url) => {
  return url + tdtTk
}
// 创建底图基础配置
const createBaseLayerConfig = (url, layerSourceConfig = {}, layerConfig = {}) => {
  return new TileLayer({
    source: new XYZ({
      url,
      ...layerSourceConfig
    }),
    type: 'baseLayer',
    ...layerConfig
  })
}

// 配置地图底图
const setBaseMapLayer = (url) => {
  return createBaseLayerConfig(url, {
    wrapX: false,
    crossOrigin: "anonymous",
  }, { layerType: 'baseMapLayer' })
}

// 配置地图注记
const setBaseMapTxt = (url) => {
  return createBaseLayerConfig(url, {}, { layerType: 'baseMapTxt' })
}

/**
 * 天地图底图配置
    天地图图层类型
    vec: 矢量底图
    cva: 矢量注记图层
    eva: 矢量注记图层-英文注记
    img: 影像底图
    cia: 影像注记图层
    eia: 影像注记图层 -英文
    ter: 地形底图
    cta: 地形注记图层
 */
const baseLayerUrlConfig = {
  // 天地图底图
  baseMapLayer: {
    t0vec: setLayerUrl("http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk="),  // 街道底图
    t3img: setLayerUrl("http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk="),  // 卫星(影像)底图
    t4ter: setLayerUrl("http://t4.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk="),  // 地形底图
    t07vec: setLayerUrl("http://t{0-7}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk="),  // 街道底图2
    t07img: setLayerUrl("http://t{0-7}.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk="),  // 卫星底图2
  },
  // 天地图注记
  baseMapTxt: {
    t0cva: setLayerUrl("http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk="),  // 街道图注记
    t4cva: setLayerUrl("http://t4.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk="),  // 地形图注记
    t07cia: setLayerUrl("http://t{0-7}.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk="),  // 卫星图注记
    t07cva: setLayerUrl("http://t{0-7}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=")  // 卫星图注记
  }
}

export const minRenderZoom = 15
// 地图初始化配置
const mapInitConfig = {
  // ol地图底图 - 默认街道底图
  layers: [
    // 天地图底图
    setBaseMapLayer(baseLayerUrlConfig.baseMapLayer.t0vec),
    // 天地图注记
    setBaseMapTxt(baseLayerUrlConfig.baseMapTxt.t0cva),
  ],
  // ol地图基本配置
  view: new View({
    center: fromLonLat([121.63, 29.88]),
    zoom: 16,
    maxZoom: 17,
    minZoom: 13,
    // center: fromLonLat([116.400819, 39.916263]),
    // View默认使用EPSG3857坐标系
    // projection: 'EPSG:4326',
    // zoom: 15,
    constrainResolution: true,  // 设置缩放级别为整数 
    smoothResolutionConstraint: false,  // 关闭无级缩放地图
  }),
}

/******************************
 * 地图核心辅助方法
 * ****************************
 */
// 公共动态选项判断
const setCommonMenuMethod = (condition, commonDynamicMenuMethod) => {
  if (condition) {
    if (condition instanceof Array) {
      if (condition.length !== 0) {
        // console.log(condition.get('tempType'))

        menuAddSingleMethod(commonDynamicMenuMethod)
      }

      if (condition.length === 0) {
        menuUtils.commonMenuMethodsArr = menuUtils.commonMenuMethodsArr.filter(item => item !== commonDynamicMenuMethod)
      }
    } else {
      if (condition instanceof Feature) {
        if (!condition.get('tempType')) {
          menuAddSingleMethod(commonDynamicMenuMethod)
        }
      } else {
        menuAddSingleMethod(commonDynamicMenuMethod)

        if (condition.length === 0) {
          menuUtils.commonMenuMethodsArr = menuUtils.commonMenuMethodsArr.filter(item => item !== commonDynamicMenuMethod)
        }
      }
    }
  }
  if (!condition && menuUtils.commonMenuMethodsArr.includes(commonDynamicMenuMethod)) {
    menuUtils.commonMenuMethodsArr = menuUtils.commonMenuMethodsArr.filter(item => item !== commonDynamicMenuMethod)
  }
}

/**
 * 标注点样式
 */
const pointCircleStyle = new Style({
  image: new CircleStyle({
    radius: 5,
    fill: new Fill({
      color: '#f49d41'
    }),
    stroke: new Stroke({
      color: '#836365',
      width: 1
    })
  }),
})
const pointIconleStyle = (src) => {
  return new Style({
    image: new Icon({
      src,
      // image: new CircleStyle({
      anchor: [0.5, 15],//图标的锚点,经纬度点所对应的图标的位置，默认是[0.5, 0.5]，即为标注图标的中心点位置
      anchorOrigin: 'top-right',//锚点的偏移位置，默认是top-left，
      anchorXUnits: 'fraction',//锚点X的单位，默认为百分比，也可以使用px
      anchorYUnits: 'pixels',//锚点Y的单位，默认为百分比，也可以使用px
      offsetOrigin: 'top-right',//原点偏移bottom-left, bottom-right, top-left, top-right,默认 top-left
      // offset:[0,10],
      //图标缩放比例
      // scale:0.5,//可以设置该比例实现，图标跟随地图层级缩放
      //透明度
      opacity: 0.75,//如果想隐藏某个图标，可以单独设置该值，透明度为0时，即可隐藏，此为隐藏元素的方法之一。
    }),
  })
}

/**
 * 绘制扇形核心方法
 * APIMethod:OpenLayers绘制扇形的接口扩展
 * @param origin 圆心
 * @param radius 半径
 * @param sides 边数
 * @param r 弧度
 * @param angel 旋转角度（扇形右边半径与x正向轴的角度）
 * @returns {OpenLayers.Geometry.Polygon}
 */
const createRegularPolygonCurve = (origin, radius, sides, r, angel) => {
  let rotation = 360 - r;
  let angle = Math.PI * ((1 / sides) - (1 / 2));
  if (rotation) {
    angle += (rotation / 180) * Math.PI;
  }
  let rotatedAngle, x, y;
  let points = [];
  for (let i = 0; i < sides; ++i) {
    let an = i * ((360 - rotation) / 360);
    rotatedAngle = angle + (an * 2 * Math.PI / sides);
    x = origin[0] + (radius * Math.cos(rotatedAngle));
    y = origin[1] + (radius * Math.sin(rotatedAngle));
    points.push([x, y]);
  }
  if (rotation != 0) {
    points.push(origin);
  }
  let ring = new LinearRing(points);
  ring.rotate(angel / 57.3, origin);
  let list = ring.getCoordinates()

  return new Polygon([list]);
}

// 移除地图Overlay元素
const removeAllOverlay = () => {
  let flickerPointDom = document.querySelectorAll('.flicker_point')

  flickerPointDom.forEach(item => {
    item.classList.remove('flicker_point')
  })
}

/******************************
 * 地图核心方法供出
 * ****************************
 */
// 初始化地图
export const initOlMap = (target) => {
  return new Map({
    target,
    layers: mapInitConfig.layers,
    view: mapInitConfig.view,
    interactions: defaults({ mouseWheelZoom: true })  // 禁止缩放
  });
}

// 切换地图底图
export const switchBaseLayer = (olMap, type) => {
  let txtType = ''

  switch (type) {
    // 街道底图
    case 't0vec':
      txtType = 't0cva'  // 街道图注记
      break
    // 卫星(影像)底图
    case 't3img':
      txtType = 't07cia'  // 卫星图注记
      break
    // 地形底图
    case 't4ter':
      txtType = 't4cva'  // 地形图注记
      break
  }
  // console.log(type, txtType)

  // 底图layer
  let newBaseMapLayer = setBaseMapLayer(eval(`baseLayerUrlConfig.baseMapLayer.${type}`))
  let newBaseMapTxt = setBaseMapTxt(eval(`baseLayerUrlConfig.baseMapTxt.${txtType}`))
  // 获取当前地图中的所有图层
  const mapLayers = olMap.getLayers();

  olMap.getAllLayers().forEach((item, index) => {
    if (item.get('type') === 'baseLayer') {
      switch (item.get('layerType')) {
        case 'baseMapLayer':
          olMap.removeLayer(item)
          mapLayers.insertAt(index, newBaseMapLayer)
          break
        case 'baseMapTxt':
          olMap.removeLayer(item)
          mapLayers.insertAt(index, newBaseMapTxt)
          break
      }
    }
  })
}

// 获取可视区域的左上角和右下角坐标
export const getCurrentViewPosition = (olMap) => {
  const extent = olMap.getView().calculateExtent(olMap.getSize());

  // 获取投影坐标系
  const topLeftCoord = getTopLeft(extent);  // 左上角
  const bottomRightCoord = getBottomRight(extent);  // 右下角
  // console.log(topLeftCoord, bottomRightCoord)

  // 将投影坐标转换为地理坐标
  const topLeft = transform(topLeftCoord, 'EPSG:3857', 'EPSG:4326');
  const bottomRight = transform(bottomRightCoord, 'EPSG:3857', 'EPSG:4326');
  // console.log(topLeft, bottomRight)

  return {
    topLeft,
    bottomRight,
  }
}

// 初始化所有控件
export const resetControls = (olMap) => {
  olMap.getControls().clear()

  // 重新添加控件（如果需要）
  // olMap.addControl(new FullScreen());  // 全屏
  olMap.addControl(new Zoom());  // 缩放
  olMap.addControl(new ZoomSlider());  // 缩放
  olMap.addControl(new ScaleLine());  // 比例尺


  // olMap.addControl(new OverviewMap());  // 鹰眼
}

// 判断menu是否存在,不存在新增
export const menuAddSingleMethod = (singleMethod) => {
  if (!menuUtils.commonMenuMethodsArr.includes(singleMethod)) {
    menuUtils.commonMenuMethodsArr.push(singleMethod)
  }
}

// 重置右键属性菜单
export const resetContextMenu = (next) => {
  let mapWrap = document.querySelector('.ol_map_wrap')
  let menu = document.querySelector('.menu_wrap')

  // 判断是否存在menu
  if (menu) {
    mapWrap.removeChild(menu);
  }

  if (next) {
    next(mapWrap)
  }
}

// 设置鼠标右键属性
export const setContextmenu = (olMap, next, setMenuConfig) => {
  const { commonDynamicMenu, singleMenu } = menuUtils.menuMethodBtn  // 公共动态选项,每个页面有需要才显示

  // 添加右键菜单监听
  olMap.getViewport().addEventListener('contextmenu', e => {
    // console.log(transformToLonlat(olMap.getEventCoordinate(e)))  // 经纬度

    e.preventDefault(); // 阻止默认的右键菜单弹出

    /**
     * 子页动态选项
     */
    // 根据具体页面配置菜单栏
    if (setMenuConfig) {
      setMenuConfig(currentPageType => {
        // console.log('当前页面', currentPageType)

        // 根据具体页面配置菜单栏 - 子菜单在某些情况可能需要隐藏
        menuUtils.setMentBtnExtendByPage(currentPageType)
      })
    }

    // 屏幕坐标
    const pixelPoint = olMap.getEventCoordinate(e)
    const pixel = olMap.getPixelFromCoordinate(pixelPoint)
    const feature = olMap.forEachFeatureAtPixel(pixel, feature => {
      return feature
    })


    /**
     * 获取所有layer并做判断
     */
    let featureOnPage = []  // 页面所有的feature
    let myPointByMenuFeature = []  // 所有自定义定位点
    let POIPointByMenuFeature = []  // 所有POI定位点
    let drawTypeByMenuFeature = []  // 所有绘制内容
    getAllLayer(olMap, layerItem => {
      let currentFeature = layerItem.getSource().getFeatures()[0]
      featureOnPage.push(currentFeature)

      if (currentFeature.get('tempType') === 'myPointByMenu') {
        myPointByMenuFeature.push(currentFeature)
      }
      if (currentFeature.get('businessType') === 'POIMarker') {
        POIPointByMenuFeature.push(currentFeature)
      }
      if (currentFeature.get('drawType')) {
        drawTypeByMenuFeature.push(currentFeature)
      }
    })

    /**
     * 公共动态选项
     */
    // 判断是否显示清除所有要素
    setCommonMenuMethod(featureOnPage, commonDynamicMenu.commonDynamicMenuMethod1)

    // 判断是否显示当前要素
    setCommonMenuMethod(feature, commonDynamicMenu.commonDynamicMenuMethod2)

    // 判断是否需要显示停止绘制
    // 获取绘制的图形
    const drawInteraction = getDrawInteraction(olMap)
    setCommonMenuMethod(drawInteraction, commonDynamicMenu.commonDynamicMenuMethod3)

    // 自定义定位点
    setCommonMenuMethod(myPointByMenuFeature, '清空自定义标注点')

    // 自定义闪烁点
    let flickerPointDom = document.querySelectorAll('.flicker_point')
    setCommonMenuMethod(flickerPointDom, '清空自定义闪烁点')

    // 展示分析结果
    if (feature) {
      if (feature.get('pointData')?.isNeedAnalysis) {
        setCommonMenuMethod(feature, commonDynamicMenu.commonDynamicMenuMethod4)
      }
    }

    // 删除所有绘制内容  
    setCommonMenuMethod(drawTypeByMenuFeature, commonDynamicMenu.commonDynamicMenuMethod5)

    /**
     * 子页动态选项
     */
    // 清除POI点
    setCommonMenuMethod(POIPointByMenuFeature, singleMenu.singleMenuMethod2)


    // 重置右键属性菜单
    resetContextMenu(mapWrap => {
      let menu = null

      menu = document.createElement('div');
      menu.setAttribute("class", "menu_wrap");

      // 自定义菜单项
      let tempStr = ''
      menuUtils.commonMenuMethodsArr.forEach(item => {
        tempStr += `<li>${item}</li>`
      })

      menu.innerHTML = `
      <ul>
        ${tempStr}
      </ul>
    `;

      // 添加到页面上
      menu.style.position = 'fixed';
      menu.style.left = `${e.clientX}px`;
      menu.style.top = `${e.clientY}px`;
      mapWrap.appendChild(menu);

      // 监听菜单项的点击事件（可选）
      menu.addEventListener('click', (evt) => {
        const option = evt.target.textContent;
        next({ option, feature, pixelPoint })

        // 清理菜单
        mapWrap.removeChild(menu);
      });
    })
  });
}

// 获取当前绘制状态
export const getDrawInteraction = (olMap) => {
  // 获取绘制的图形
  return olMap.getInteractions().getArray().find(
    (interaction) => interaction instanceof Draw
  );
}

// 取消绘制(点线面)
export const cancelDrawInteraction = (olMap) => {
  // console.log('取消绘制(点线面)', olMap)

  // 获取绘制的图形
  const drawInteraction = getDrawInteraction(olMap)

  olMap.removeInteraction(drawInteraction); // 从地图中移除交互
}

// 投影坐标转换
export const transformToLonlat = (coordinate) => {
  return transform(coordinate, "EPSG:3857", "EPSG:4326")
}

// 屏幕坐标转换
export const transformToPixelPoint = (lon, lat) => {
  return fromLonLat([lon, lat])
}

// 获取经纬度
export const getHdms = (pixelPoint) => {
  return toStringHDMS(toLonLat(pixelPoint)); // 转换为经纬度显示
}

// 获取多边形中心点
export const getPolygonCenter = (feature) => {
  const geometry = feature.getGeometry();
  if (geometry.getType() === "Polygon") {
    const polygon = geometry.clone();
    polygon.transform("EPSG:3857", "EPSG:4326"); // 如果多边形在Web墨卡托坐标系中，需要转换到WGS84
    const extent = polygon.getExtent();
    const center = getCenter(extent);
    return center;
  }
  return null;
}

// 设置标注点
export const addPoint = (olMap, pointBusinessData, src = '/', pointConfig = {}, zIndex = 1) => {
  // 创建点的数据源
  const vectorSource = new VectorSource({
    features: [],
  });

  // 创建点图层
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    zIndex,
    style: src === '/' ? pointCircleStyle : pointIconleStyle(src)
  });

  olMap.addLayer(vectorLayer);

  const featureConfig = (point, pointData) => {
    return {
      geometry: point,
      type: 'Marker',
      pointData,
      ...pointConfig,
    }
  }

  if (pointBusinessData instanceof Array) {
    pointBusinessData.forEach((item) => {
      const point = new Point(fromLonLat(item.lonlat));
      const feature = new Feature({
        ...featureConfig(point, item.pointData)
      });
      vectorSource.addFeature(feature);
    });
  } else {
    const point = new Point(fromLonLat(pointBusinessData.lonlat));
    const feature = new Feature({
      ...featureConfig(point, pointBusinessData.pointData)
    });
    vectorSource.addFeature(feature);
  }
}

/* // 添加单个点
export const addPointItem = (olMap, pointItem, src = '/', businessType = '', pointConfig) => {
  // 创建点的数据源
  const vectorSource = new VectorSource({
    features: [],
  });

  // 创建点图层
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    zIndex: 1,
    style: src === '/' ? pointCircleStyle : pointIconleStyle(src)
  });

  olMap.addLayer(vectorLayer);

  const point = new Point(fromLonLat(pointItem.lonlat));
  const feature = new Feature({
    geometry: point,
    type: 'Marker',
    businessType,
    ...pointConfig,
    pointData: pointItem.pointData
  });
  vectorSource.addFeature(feature);
} */

// 添加线
export const addLine = (olMap, position, lineConfig = {}, style) => {
  // 创建线要素并添加到地图上
  const lineFeature = new Feature({
    // geometry: new LineString([[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]),
    geometry: new LineString(position),
    type: 'Line',
    ...lineConfig
  });

  if (!style) {
    style = setFeaturesStyle('rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.5)', false, 3)
  }

  lineFeature.setStyle(style);
  // lineFeature.setStyle(styleFunction);

  const vectorSource = new VectorSource({
    features: [lineFeature],
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    zIndex: 9
  });

  olMap.addLayer(vectorLayer);
}

// 根据feature获取layer
export const getLayerByFeature = (feature = {}, map = {}) => {
  let layers = map.getLayers().getArray();
  for (let i in layers) {
    let source = layers[i].getSource();
    if (source instanceof VectorSource) {
      let features = source.getFeatures();
      if (features.length > 0) {
        for (let j in features) {
          if (features[j] === feature) {
            return layers[i];
          }
        }
      }
    }
  }
  return {};
}

// 设置Features样式
export const setFeaturesStyle = (fillColor, strokeColor, isImg = false, width = 2, radius = 5) => {
  return new Style(!isImg ? {
    fill: new Fill({
      color: fillColor
    }),
    stroke: new Stroke({
      color: strokeColor,
      width
    }),
  } : {
    image: new CircleStyle({
      radius,
      fill: new Fill({
        color: fillColor,
      }),
      stroke: new Stroke({
        color: strokeColor,
        width,
      }),
    }),
  })
}

// 绘制区域样式
const setDrawFeaturesStyle = () => {
  return setFeaturesStyle("rgba(32, 157, 230, 0.2)", "rgb(64 158 255)")
}

// 给某个feature置顶
export const featureToMaxTop = (olMap, feature) => {
  // console.log('给某个feature置顶', olMap, feature)

  let currentStyle = null

  switch (feature.get('type')) {
    case 'Marker':
      currentStyle = setFeaturesStyle('#409eff', '#f00', true, 2, 10)
      break
    case 'Curve':
      currentStyle = setFeaturesStyle('#409eff', '#f00', false, 5)
      break
  }

  feature.setStyle(currentStyle)

  feature.set('temp', true)

  // 顶层图层
  let topLayer = new VectorLayer({
    source: new VectorSource(),
    // style: [selectPointStyle],
    zIndex: 999 // zIndex全地图最大
  });

  /* getAllLayer(olMap, layerItem => {
    let currentFeature = layerItem.getSource().getFeatures()[0]

    if (currentFeature.get('temp')) {
      olMap.removeLayer(layerItem)
    }
  }) */
  // 根据条件移除要素
  removeByCondition(olMap, currentFeature => {
    return currentFeature.get('temp')
  })

  topLayer.setOpacity(1)
  topLayer.getSource().addFeature(feature);

  olMap.addLayer(topLayer)
}

// 创建文字图层
export const addTextPoint = (olMap, text, position, textPointConfig = {}, isRemove) => {
  // console.log('创建文字图层', olMap, gridData)

  // 创建文本样式
  const textStyle = new Style({
    text: new Text({
      text,
      fill: new Fill({ color: '#333333' }),
      // stroke: new Stroke({ color: '#fff', width: 2 }),
      font: '18px pingfang',
      textAlign: 'center', // 文本对齐
      textBaseline: 'bottom', // 文本基线
      padding: [5, 10, 5, 10], // 文本周围的填充
      offsetX: -20,
      offsetY: -13,
      overflow: true, // 允许文本溢出
      rotateWithView: false, // 不随地图旋转
      rotation: 0, // 文本旋转角度
    }),
  });

  if (isRemove) {
    // 根据条件移除要素
    removeByCondition(olMap, currentFeature => {
      return isRemove(currentFeature)
    })
  }

  // 创建文本特征
  const feature = new Feature({
    geometry: new Point(fromLonLat(position)),
    type: 'textPoint',
    ...textPointConfig
  });

  // 设置特征的样式
  feature.setStyle(textStyle);

  // 创建文本图层
  const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [feature],
    }),
    zIndex: 9
  });

  // 将文本图层添加到地图
  olMap.addLayer(vectorLayer);
}

/**
 * 气泡窗通用方法
 * @param {*} olMap 地图对象
 * @param {*} pixelPoint 屏幕坐标
 * @param {*} popupData 气泡窗数据
 * @param {*} next 事件方法
 * @param {*} overlayConfig 气泡窗配置 
 */
export const popupCommonConfig = (olMap, pixelPoint, popupInner, next, overlayConfig = null,) => {
  let container = document.getElementById('popup');
  let closer = document.getElementById('popup-closer');
  let content = document.getElementById('popup-content');
  container.style.display = 'block'

  let overlayContainer = document.querySelector('.ol-overlay-container')
  if (overlayContainer) {
    overlayContainer.remove()
  }

  let overlay = new Overlay({
    element: container, //绑定 Overlay 对象和 DOM 对象的
    ...overlayConfig
  });
  olMap.addOverlay(overlay);
  closer.onclick = () => {
    overlay.setPosition(undefined);
    closer.blur();
    overlay = null;
    return false;
  };

  // console.log(popupInner)
  // content.innerHTML = popupData;  // 使用jsx,不直接进行inner
  overlay.setPosition(pixelPoint); //把 overlay 显示到指定的 x,y坐标

  // 使用addEventListener会无限叠加事件,且不好使用removeEventListener移除(匿名函数)
  overlay.getElement().onclick = e => {
    next(e)
  }
}

/**
 * 添加扇形
 * 绘制扇形核心方法
 * APIMethod:OpenLayers绘制扇形的接口扩展
 * @param origin 圆心
 * @param radius 半径
 * @param sides 边数
 * @param r 弧度
 * @param angel 旋转角度（扇形右边半径与x正向轴的角度）
 * @returns {OpenLayers.Geometry.Polygon}
 */
// 根据频段展示不同颜色 有边缘  
export const addCurve = (olMap, curveDataList, isResetStyle) => {
  let featureList = []  // 扇区feature列表

  // 根据业务数据修改feature数据
  curveDataList.forEach(item => {
    // 频率
    // console.log(item.curveData.workFrequency)

    // 扇区样式
    let curveStyle = setFeaturesStyle(
      "rgba(32, 222, 230, 0.4)",
      'rgba(255, 205, 67, 0.3)'
    )
    // 扇区半径
    let curveRadius = 100

    if (isResetStyle) {
      let { myCurveStyle, myCurveRadius } = isResetStyle(item)

      curveStyle = myCurveStyle
      curveRadius = myCurveRadius
    }

    let origi_point = fromLonLat(item.lonlat);  // 绘制扇形的顶点
    // let circle = createRegularPolygonCurve(origi_point, 150, 100, 45, 90) // 调用绘制扇形的方法得到扇形
    let circle = createRegularPolygonCurve(origi_point, curveRadius, 100, 45, item.curveData.antDirectionAngle) // 调用绘制扇形的方法得到扇形
    let feature = new Feature(circle);  // 把扇形加入 feature

    feature.setStyle(curveStyle)
    feature.set('type', 'Curve')  // 这是给这个扇形添加额外的参数 ， 如果是设置id 用 setId方法
    // 这是给这个扇形添加额外的参数，这里的id和 setId的id没关系
    feature.set('curveData', item.curveData)
    featureList.push(feature)
  })

  let vectorSource = new VectorSource();  // 创建一个数据源
  vectorSource.addFeatures(featureList);   // 把两个扇形加进数据源
  let vectorLayer = new VectorLayer({     // 创建一个图层，把数据源加进图层
    source: vectorSource,
    zIndex: 1
  });
  olMap.addLayer(vectorLayer);   // 把图层加进地图
}

/**
 * 设置气泡窗
 * @param {*} olMap 地图对象
 * @param {*} pixelPoint 屏幕坐标
 * @param {*} popupData 气泡窗数据
 * @param {*} next 事件处理方法
 */
export const setPopup = (olMap, pixelPoint, popupInner, next) => {
  // const pixelPoint = e.coordinate  // 屏幕坐标
  popupCommonConfig(olMap, pixelPoint, popupInner, next, {
    autoPan: true, // 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果
    /* autoPanAnimation: {
        duration: 250, // 自动平移效果的动画时间 9毫秒）
    }, */
  })
}

// 自动弹出气泡窗
export const setAutoPopup = (pixelPoint, itemData, next) => {
  // 点击尺 （这里是尺(米)，并不是经纬度）;
  let hdms = getHdms(pixelPoint); // 转换为经纬度显示
  // let hdms = toStringHDMS(toLonLat(pixelPoint)); // 转换为经纬度显示

  const popupObj = {
    name: '通用信息展示弹窗',
    hdms,
    coordinate: [itemData.longitude, itemData.latitude],
    popupData: itemData  // 气泡窗业务数据
  }

  next(popupObj)
}

// 获取所有图层
export const getAllLayer = (olMap, next) => {
  // 获取当前地图上的所有图层
  let layers = olMap.getLayers().getArray();

  // 获取所有图层(从地图中移除所有图层)
  for (let i = layers.length - 1; i >= 0; --i) {
    if (layers[i] instanceof VectorLayer) {
      next(layers[i])
    };
  }
}

// 移除所有图层
export const removeAllLayer = (olMap) => {
  removeAllOverlay()  // 移除地图Overlay元素

  cancelDrawInteraction(olMap)  // 取消绘制(点线面)

  getAllLayer(olMap, layerItem => {
    olMap.removeLayer(layerItem)
  })
}

// 根据条件移除要素
export const removeByCondition = (olMap, condition) => {
  getAllLayer(olMap, layerItem => {
    let currentFeature = layerItem.getSource().getFeatures()[0]

    if (condition(currentFeature)) {
      olMap.removeLayer(layerItem)
    }
  })
}

// 根据类型移除图层
export const removeLayerByType = (olMap, type) => {
  removeByCondition(olMap, currentFeature => {
    if (currentFeature) {
      return currentFeature.get('type') === type
    }
  })
}

// 根据业务类型移除图层
export const removeLayerByBusinessType = (olMap, type) => {
  removeByCondition(olMap, currentFeature => {
    if (currentFeature) {
      return currentFeature.get('businessType') === type
    }
  })
}

// 移除所有默认图层
export const removeAllDefaultLayer = (olMap) => {
  // console.log(olMap)

  removeByCondition(olMap, currentFeature => {
    return (currentFeature.get('type') === 'Marker' || currentFeature.get('type') === 'Curve') && (!currentFeature.get('bussinessType'))
  })
}

// 刷新地图需要移除的元素
export const removeByReflashMap = (olMap) => {
  // 根据条件移除要素
  removeByCondition(olMap, currentFeature => {
    return currentFeature.get('tempType')
  })

  removeAllOverlay()  // 移除地图Overlay元素
}

// 飞到指定坐标
export const flyToCoordinate = (olMap, lonlat) => {
  olMap.getView().animate({
    center: fromLonLat(lonlat),
    duration: 800, // 飞行时间，单位毫秒
  });
}

// 获取所有feature
export const getAllFeature = (olMap, next) => {
  olMap.getLayers().forEach(item => {
    let source = null;
    if (item) {
      source = item.getSource();
    }
    if (source instanceof VectorSource) {
      source.forEachFeature(feature => {
        // console.log(feature.get('type'))

        next(feature)
      });
    }
  });
}

// 加载kml
export const loadKML = (olMap, text) => {
  // console.log('加载kml', olMap, text)

  const format = new KML({
    extractStyles: false //至关重要
  });
  const features = format.readFeatures(text);
  features.forEach(item => {
    // 从EPSG:4326转换到EPSG:3857
    item.getGeometry().transform('EPSG:4326', 'EPSG:3857')
  })
  const vectorSource = new VectorSource({
    features: features,
  });
  olMap.getView().fit(vectorSource.getExtent());
  olMap.getLayers().push(
    new VectorLayer({
      source: vectorSource,
      style: setFeaturesStyle('blue', 'red'),
      zIndex: 100
    })
  );
}

// 创建多边形(选区)
export const drawPolygon = (olMap) => {
  // console.log('创建多边形(选区)', olMap)

  olMap.addInteraction(new Draw({
    source: new VectorSource(),
    type: 'Polygon',
  }));

  // 获取绘制完成的多边形
  olMap.getInteractions().getArray().forEach(interaction => {
    if (interaction instanceof Draw) {
      interaction.on('drawend', (event) => {
        const { feature } = event
        const geometry = feature.getGeometry();
        const coords = geometry.getCoordinates()[0]
        const lonlat = geometry.transform('EPSG:3857', 'EPSG:4326').getCoordinates()[0]
        // console.log(lonlat, coords)
        if (geometry instanceof Polygon) {
          // console.log("所选点位坐标", geometry.getCoordinates());

          createPolygon(olMap, { coords, lonlat }, { drawType: 'polygon' })

          olMap.removeInteraction(interaction); // 从地图中移除交互
        }
      });
    }
  });
}

/**
 * 绘制多边形
 * 
 * @param {*} olMap 
 * @param {*} coords 多边形的坐标数组
 */
export const createPolygon = (olMap, { coords, lonlat, polygonData }, polygonConfig = {}, next, polygonStyle = setDrawFeaturesStyle()) => {
  // console.log(olMap, coords, lonlat)

  // 创建多边形
  let polygon = new Feature({
    geometry: new Polygon([coords]),
    type: 'Polygon',
    ...polygonConfig,
    polygonData: {
      coords,
      lonlat,
      ...polygonData
    }
  });

  // 设置多边形样式
  polygon.setStyle(polygonStyle)

  // 创建矢量图层并添加多边形
  let vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [polygon]
    })
  });

  olMap.addLayer(vectorLayer);

  if (next) {
    next(polygon)
  }
}

// 取消绘制多边形(取消选区)
export const cancelPolygon = (olMap) => {
  console.log('取消绘制多边形(取消选区)', olMap)

  // cancelDrawInteraction(olMap)
}

// 创建圆形(选区)
export const drawCircle = (olMap) => {
  console.log('创建圆形(选区)', olMap)

  olMap.addInteraction(new Draw({
    source: new VectorSource(),
    type: 'Circle',
  }));

  // 获取绘制完成的多边形
  olMap.getInteractions().getArray().forEach(interaction => {
    if (interaction instanceof Draw) {
      interaction.on('drawend', (event) => {
        const { feature } = event
        const geometry = feature.getGeometry();
        const lonlat = transform(geometry.getCenter(), 'EPSG:3857', 'EPSG:4326')
        // console.log(geometry, geometry.getRadius(), lonlat)

        let circleItem = {
          lonlat,
          radius: geometry.getRadius()
        }
        addCircle(olMap, circleItem, { drawType: 'Circle' })
      });
    }
  });
}

// 绘制圆
export const addCircle = (olMap, circleItem, circleConfig = {}, isFlicker, circleStyle) => {
  if (!circleItem.radius) {
    circleItem.radius = 550
  }

  let features = []

  /* const fillStyle = new Fill({
    color: 'rgba(32, 157, 230, 0.2)'
  }) */

  let feature = new Feature({
    type: "Circle",
    ...circleConfig,
    circleData: circleItem,
    // 圆心 - 半径
    geometry: new Circle(fromLonLat(circleItem.lonlat), circleItem.radius),
  })
  // feature.setStyle(
  //   /* style ? style : new Style({
  //     fill: fillStyle,
  //   }) */
  //   new Style({
  //     fill: fillStyle,
  //   })
  // )
  feature.setStyle(circleStyle ? circleStyle : setDrawFeaturesStyle())
  features.push(feature)
  let source = new VectorSource()
  source.addFeatures(features)
  let layer = new VectorLayer({
    // opacity: 0.2,
  })
  layer.setSource(source)
  olMap.addLayer(layer)

  // 需要闪烁时调用
  if (isFlicker) {
    let radius = 0
    layer.on('postrender', evt => {
      if (radius >= 20) radius = 0;
      var opacity = (20 - radius) * (1 / 20); //不透明度
      var pointStyle = new Style({
        radius: radius,
        stroke: new Stroke({
          color: "rgba(255,0,0" + opacity + ")",
          width: 10 - radius / 3, //设置宽度
        }),
      });
      // 获取矢量要素上下文
      let vectorContext = getVectorContext(evt);
      vectorContext.setStyle(pointStyle);
      vectorContext.drawGeometry(feature.getGeometry());
      radius = radius + 0.4; //调整闪烁速度
      //请求地图渲染（在下一个动画帧处）
      olMap.render();
    })
  }
}

// 测距
export const testDistance = (olMap, next) => {
  // console.log("测距", olMap)

  let measure = new Draw({
    source: new VectorSource(),
    type: 'LineString',
    /* style: new Style({
      fill: new Fill({ color: 'rgba(255, 255, 255, 0.2)' }),
      stroke: new Stroke({ color: 'rgba(0, 0, 0, 0.5)', width: 2 })
    }) */
  })
  olMap.addInteraction(measure);

  measure.on('drawend', (event) => {
    const { feature } = event
    const line = feature.getGeometry();

    let length = getLength(line);
    length = length.toFixed(2)

    const coords = line.getCoordinates()
    const lonlat = line.transform('EPSG:3857', 'EPSG:4326').getCoordinates()
    // console.log('Line length: ' + length + ' meters');

    // 如果需要外部提供数据
    if (next) {
      next(length)
    }

    // 创建线要素并添加到地图上
    addLine(olMap, coords, { drawType: 'TestDistance' })

    // 创建文本要素以显示距离
    addTextPoint(olMap, length + '米', lonlat[0], { drawType: 'TestDistance' })
  });
}

// 取消测距
export const cancelTestDistance = (olMap) => {
  // console.log('取消测距', olMap)

  // 根据条件移除要素
  removeByCondition(olMap, currentFeature => {
    currentFeature.get('drawType') === 'TestDistance'
  })
}

// 添加带箭头的线
export const addArrowLine = (olMap, position, src = '../src/components/OpenlayerBaseMap/icon/arrow.svg', businessType = 'arrowLine') => {
  // console.log('添加带箭头的线', olMap)

  function stylefunction(feature) {
    const geometry = feature.getGeometry()
    // 轨迹地理长度
    const totalLength = geometry.getLength()
    // 像素间隔步长
    let step = 50
    // 将像素步长转实际地理距离步长
    let StepLength = step * olMap.getView().getResolution()
    // 箭头总数
    let arrowNum = Math.floor(totalLength / StepLength)

    const styles = [
      // linestring
      new Style({
        stroke: new Stroke({
          // color: 'rgb(164 164 162 / 88%)',
          color: '#42b983',
          width: 5,
        }),
      }),
    ];

    const rotations = [];
    const distances = [0];
    geometry.forEachSegment(function (start, end) {
      let dx = end[0] - start[0];
      let dy = end[1] - start[1];
      let rotation = Math.atan2(dy, dx);
      distances.unshift(Math.sqrt(dx ** 2 + dy ** 2) + distances[0]);
      rotations.push(rotation);
    });

    for (let i = 1; i < arrowNum; i++) {
      let arrow_coor = geometry.getCoordinateAt(i * 1.0 / arrowNum)
      const d = i * StepLength;
      const grid = distances.findIndex((x) => x <= d);
      styles.push(
        new Style({
          geometry: new Point(arrow_coor),
          image: new Icon({
            src,
            opacity: 1,
            anchor: [0.5, 0.5],
            rotateWithView: true,
            rotation: - rotations[distances.length - grid - 1],
            scale: 0.8
          })
        })
      )
    }

    return styles
  }



  /* const styleFunction = function (feature) {
    const geometry = feature.getGeometry();
    const styles = [
      // linestring
      new Style({
        stroke: new Stroke({
          color: 'rgb(164 164 162 / 88%)',
          width: 5,
        }),
      }),
    ];

    geometry.forEachSegment(function (start, end) {
      const dx = end[0] - start[0];
      const dy = end[1] - start[1];
      const rotation = Math.atan2(dy, dx);
      const coord = [start[0] + dx / 2, start[1] + dy / 2]
      // arrows
      styles.push(
        new Style({
          geometry: new Point(coord),
          image: new Icon({
            src,
            anchor: [0.75, 0.5],
            rotateWithView: true,
            rotation: -rotation,
            scale: 0.03
          }),
        })
      );
    });

    return styles;
  }; */

  addLine(olMap, position, { businessType }, stylefunction)
  // addLine(olMap, position, { businessType }, styleFunction)
}

// 右键添加标注点
export const addMyPointByMenu = (olMap, pixelPoint) => {
  const features = [];

  const iconFeature = new Feature({
    geometry: new Point(pixelPoint),
    name: count++,
    location: pixelPoint,
    tempType: 'myPointByMenu'
  });
  const style = new Style({
    image: new CircleStyle({
      radius: 15,
      fill: new Fill({
        color: '#409eff'
      }),
      stroke: new Stroke({
        color: '#4440ff',
        width: 1
      })
    })
  });
  iconFeature.setStyle(style);
  features.push(iconFeature);
  const vectorSource = new VectorSource({
    features
  });
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    opacity: 0.8
  });
  olMap.addLayer(vectorLayer);
}

// 右键添加闪烁点
export const addFlickerPointByMenu = (olMap, pixelPoint) => {
  // console.log('添加闪烁点', olMap, pixelPoint)

  let point_div = document.createElement('div');
  point_div.className = "flicker_point";
  let point_overlay = new Overlay({
    element: point_div,
    // positioning: 'center-center'
  });
  olMap.addOverlay(point_overlay);

  point_overlay.setPosition(pixelPoint); //把 overlay 显示到指定的 x,y坐标
}

/******************************
 * 测试 
 * ****************************
 */
// 地图功能测试
export const olMapTestCommon = (olMap, feature, pixelPoint) => {
  console.log('地图功能测试', olMap, feature, pixelPoint)
  console.log('经纬度', transformToLonlat(pixelPoint))

  // 切换底图函数
  /* function switchBaseLayer(newBaseLayer) {
    // 获取地图中当前的图层
    var currentBaseLayer = olMap.getLayers().getArray().find(function (lyr) {
      return lyr.get('type') === 'base';
    });

    // 如果当前图层存在，则将其移除
    if (currentBaseLayer) {
      olMap.removeLayer(currentBaseLayer);
    }

    // 将新的图层添加到地图，并设置其为当前图层
    olMap.addLayer(newBaseLayer);
  } */

  /* const baseLayerList = olMap.getAllLayers().filter(item => item.get('type') === 'baseLayer')
  // console.log(baseLayerList)

  baseLayerList.forEach(item => {
    switch (item.get('layerType')) {
      case 'baseMapLayer':
        break
      case 'baseMapTxt':
        break
    }
  }) */
  /* // 天地图底图
  const newBaseMapLayer = createBaseLayerConfig(baseLayerUrlConfig.baseMapLayer.t3img)
  const newBaseMapTxt = createBaseLayerConfig(baseLayerUrlConfig.baseMapTxt.t07cia)
  const mapLayers = olMap.getLayers();//获取当前地图中的所有图层

  olMap.getAllLayers().forEach((item, index) => {
    if (item.get('type') === 'baseLayer') {
      console.log(item)
      switch (item.get('layerType')) {
        case 'baseMapLayer':
          olMap.removeLayer(item)
          mapLayers.insertAt(index, newBaseMapLayer)
          break
        case 'baseMapTxt':
          olMap.removeLayer(item)
          mapLayers.insertAt(index, newBaseMapTxt)
          break
      }
    }
  }) */

  // const baseLayer = olMap.getAllLayers()[0]//获取当前map的底图
  // console.log(baseLayer, baseLayer.get('type'))
  /* olMap.removeLayer(baseLayer)//移除该底图
  const mapLayers = olMap.getLayers();//获取当前地图中的所有图层

  // 天地图底图
  let newBaseLayer = createBaseLayerConfig(baseLayerUrlConfig.baseMapLayer.t3img)

  mapLayers.insertAt(0, newBaseLayer)//将新的图层对象插入到第一个位置。 */

  /* // 使用示例：切换到OpenStreetMap
  var osmLayer = createNewBaseLayer(baseLayerUrlConfig.baseMapLayer.t3img);
  osmLayer.set('type', 'base'); // 设置一个标识，以便识别是底图层

  // 切换到新创建的OpenStreetMap图层
  switchBaseLayer(osmLayer); */

  // olMap.addLayer(baseLayerUrlConfig.baseMapLayer.t3img);

  /* getAllLayer(olMap, layerItem => {
    let currentFeature = layerItem.getSource().getFeatures()

    if (currentFeature[0].get('type') === 'POIMarker') {
      console.log(currentFeature[0])
    }
  }) */

}

// 打点测试
export const setPointTest = (olMap) => {
  // fromLonLat([121.63, 29.88])

  const features = [];
  // console.log(e.coordinate); // 获取坐标

  const iconFeature = new Feature({
    geometry: new Point(fromLonLat([121.63, 29.88])),
    // name: count++,
    location: fromLonLat([121.63, 29.88])
  });
  const style = new Style({
    image: new CircleStyle({
      radius: 10,
      fill: new Fill({
        color: '#f49d41'
      }),
      stroke: new Stroke({
        color: '#836365',
        width: 1
      })
    })
  });
  iconFeature.setStyle(style);
  features.push(iconFeature);
  const vectorSource = new VectorSource({
    features
  });
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    opacity: 0.8
  });
  olMap.addLayer(vectorLayer);
}

// 移除标注测试
export const removePointTest = (olMap) => {
  const layers = olMap.getLayers();
  layers.forEach(item => {
    if (item instanceof VectorLayer) olMap.removeLayer(item);
  });
}

// 点击打点测试
export const clickSetPointTest = (olMap, e) => {
  const features = [];
  // console.log(e.coordinate); // 获取坐标

  const iconFeature = new Feature({
    geometry: new Point(e.coordinate),
    name: count++,
    location: e.coordinate
  });
  const style = new Style({
    image: new CircleStyle({
      radius: 10,
      fill: new Fill({
        color: '#f49d41'
      }),
      stroke: new Stroke({
        color: '#836365',
        width: 1
      })
    })
  });
  iconFeature.setStyle(style);
  features.push(iconFeature);
  const vectorSource = new VectorSource({
    features
  });
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    opacity: 0.8
  });
  olMap.addLayer(vectorLayer);
}

// 绘制扇形测试
export const addCurveTest = (olMap) => {
  let origi_point = fromLonLat([121.63, 29.88]);  // 绘制扇形的顶点
  let circle = createRegularPolygonCurve(origi_point, 500, 100, 30, 90) // 调用绘制扇形的方法得到扇形
  let feature = new Feature(circle);  // 把扇形加入 feature
  feature.setStyle(  // 设置一下这个扇形的样式
    new Style({
      fill: new Fill({
        color: 'rgba(32, 157, 230, 0.3)'
      }),
      stroke: new Stroke({
        color: 'rgba(255, 205, 67, 0.3)',
        width: 2
      }),
    })
  )
  feature.set('type', 'Curve')  // 这是给这个扇形添加额外的参数 ， 如果是设置id 用 setId方法
  feature.set('curve', {   // 这是给这个扇形添加额外的参数，这里的id和 setId的id没关系
    id: 1,
    title: '测试001',
    msg: '测试001-1',
    msg2: '测试001-2',
  })

  // 创建第二个扇形，和第一个一样
  let circle1 = createRegularPolygonCurve(origi_point, 500, 100, 30, 45)
  let feature1 = new Feature(circle1);
  feature1.setStyle(
    new Style({
      fill: new Fill({
        color: 'rgba(32, 157, 230, 0.3)'
      }),
      stroke: new Stroke({
        color: 'rgba(255, 205, 67, 0.3)',
        width: 2
      }),
    })
  )
  feature1.set('type', 'Curve')
  feature1.set('curve', {
    id: 2,
    title: '超级无敌炫酷爆龙战神',
    msg: '超级无敌炫酷爆龙战神 描述001',
    msg2: '超级无敌炫酷爆龙战神 描述002',
  })

  let vectorSource = new VectorSource();  // 创建一个数据源
  vectorSource.addFeatures([feature, feature1]);   // 把两个扇形加进数据源
  let vectorLayer = new VectorLayer({     // 创建一个图层，把数据源加进图层
    source: vectorSource
  });
  olMap.addLayer(vectorLayer);   // 把图层加进地图
}

// 绘制圆测试
export const addCircleTest = (olMap, circleList) => {
  let features = []

  circleList.forEach((item, index) => {
    let feature = new Feature({
      type: "Circle",
      title: item.name,
      geometry: new Circle(fromLonLat(item.site), 200),
    })
    feature.setStyle(
      new Style({
        fill: new Fill({
          color: 'rgba(32, 157, 230, 1)'
        }),
      })
    )
    features.push(feature)
  })
  let source = new VectorSource()
  source.addFeatures(features)
  let layer = new VectorLayer({
    opacity: 0.2
  })
  layer.setSource(source)
  olMap.addLayer(layer)
}

// 获取所有要素测试
export const getAllFeatureTest = (olMap) => {
  let layers = olMap.getLayers().getArray();
  layers.forEach(item => {
    if (item instanceof VectorLayer) {
      let currentFeature = item.getSource().getFeatures()
      console.log(currentFeature[0].get('type'))
    }
  })
}
```

## OpenlayerBaseMap/index.vue
```vue
<template>
  <section class="ol_map_wrap">
    <!-- 插槽 -->
    <slot></slot>

    <!-- 地图 -->
    <section id="olMap" class="ol_map"></section>

    <!-- 图例 -->
    <lend ref="refLend" :currentPageType="currentPageType" :isShowLend="isShowLend" />

    <!-- 概览信息显示隐藏 -->
    <div class="overview_info_toggle" :title="`点击${!toggleFlag ? '显示' : '隐藏'}`" @click="toggleOverviewInfo"
      v-if="isControlOverviewInfo"></div>
    <!-- <el-button type="primary" @click="toggleOverviewInfo" circle class="overview_info_toggle"
      :title="`${isShowSearch === 'none' ? '显示' : '关闭'}信息窗`">
      <el-icon>
        <Expand />
      </el-icon>
    </el-button> -->

    <!-- 切换底图控件 -->
    <switch-base-layer @switchBaseLayerType="switchBaseLayerType" />

    <!--  气泡窗 -->
    <popup-common ref="refPopupCommon" :currentPageType="currentPageType" />

    <!-- 底部信息 -->
    <div class="copyright_info" v-show="true">
      <p>Copyright © CMDI.vip All Rights Reserved.</p>
      <ul>
        <li>
          <dl>
            <dt>经纬度：</dt>
            <dd>{{ currentLonlat }}</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>当前层级：</dt>
            <dd>{{ currentZoomLevel }}</dd>
          </dl>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup name="gis">
// vue - core
import { ref, onMounted, defineEmits, nextTick } from "vue";
// map - core
import * as mapUtils from "./mapUtils.js";
import menuUtils from './menuUtils.js'
// 组件
import PopupCommon from "./components/popup/PopupCommon.vue"; // 气泡窗
import Lend from "./components/Lend.vue"; // 图例
import SwitchBaseLayer from "./components/SwitchBaseLayer.vue"; // 切换底图控件
// 工具
import { objIsEmpty } from "@/utils/index.js";
// 组件传参
import mittBus from "@/utils/mittBus"; // mitt
// 其他工具
import * as popupInner from "./components/popup/popupInner.js";
/* import { gisDataStore } from '@/store/modules/gis.js'  // store

const gisStoreData = gisDataStore() */

// 自定义事件
const emit = defineEmits([
  // 全局
  "getOlMapInstance",
  "getCurrentViewData",
  "reflashMap",
  'toggleOverviewInfo',
  // gis
  // ......
  // 投诉
  "getCircleData",
  "setCircleDialogData",
]);

const props = defineProps({
  // 当前页面类型
  currentPageType: {
    type: String,
    default: "",
  },
  // 是否需要自动加载数据 - false地图移动不加载,点击刷新加载
  isAutoRenderData: {
    type: Boolean,
    default: false,
  },
  // 是否显示图例
  isShowLend: {
    type: Boolean,
    default: true,
  },
  // 自组件是否需要控制概览信息显示隐藏
  isControlOverviewInfo: {
    type: Boolean,
    default: false,
  }
});

const { proxy } = getCurrentInstance();

let myOlMap = null;

const refPopupCommon = ref(null);
const refLend = ref(null);

let toggleFlag = ref(true);  // 概览信息默认显示

const currentZoomLevel = ref(0);
const currentLonlat = ref("");

const isRemoveMap = ref(true); // 判断渲染地图时是否移除当前地图要素

let currentSingleObjData = ref({}); // 当前检索到的数据

const mapCommonData = {
  minRenderZoom: mapUtils.minRenderZoom, // 最小渲染层级
};

// 概览信息显示隐藏
const toggleOverviewInfo = () => {
  toggleFlag.value = !toggleFlag.value;

  emit('toggleOverviewInfo', toggleFlag.value)
}

// 地图加载完初始化做的一些操作
const mapInit = (olMap) => {
  // console.log('地图加载完初始化做的一些操作', olMap)
  myOlMap = olMap; // 赋值全局变量,为后续业务操作做准备

  // 地图加载完初始化做的一些操作[业务相关]
  emit("getOlMapInstance", olMap, mapCommonData); // 向外供出olMap实例,以及一些公共数据

  mapUtils.resetControls(olMap); // 初始化所有控件

  // 设置鼠标右键属性
  mapUtils.setContextmenu(
    olMap,
    (option) => {
      // console.log(option, mapUtils.menuMethods);
      setMenuMethods(option);
    },
    (next) => {
      // 根据具体页面配置菜单栏
      next(props.currentPageType);
    }
  );
};

// 设置鼠标右键菜单栏方法
const setMenuMethods = ({ option, feature, pixelPoint }) => {
  // console.log("设置鼠标右键菜单栏方法", option, feature, pixelPoint);

  // 点击地图隐藏气泡窗
  refPopupCommon.value.hidePopup();

  menuUtils.setMenuMethods(myOlMap, option, feature, pixelPoint, proxy)
};

// 地图加载完初始化后获取地图的一些信息
const getMapInitInfo = (olMap) => {
  // console.log("地图加载完初始化后获取地图的一些信息", olMap)

  // 获取可视区域数据 - 如果不需要自动加载
  if (!props.isAutoRenderData) {
    // console.log('刷新加载地图', props.isAutoRenderData)
    emit("getCurrentViewData", olMap); // 地图加载时会自动触发一次
  }

  // 圆数据
  emit("getCircleData", olMap);
};

// 设置地图
const setOlmap = (olMap) => {
  mapEvent(olMap); // 地图事件
};

// 切换底图
const switchBaseLayerType = (val) => {
  // console.log('切换底图', val)

  mapUtils.switchBaseLayer(myOlMap, val)
}

/**
 * 业务方法
 */
// 根据数据渲染Feature
const renderFeatureByData = (olMap, dataList, renderFeature) => {
  // console.log("根据数据渲染Feature", dataList);

  refPopupCommon.value.hidePopup();

  if (isRemoveMap.value) {
    // mapUtils.removeAllLayer(myOlMap); // 移除所有图层
    mapUtils.removeAllDefaultLayer(myOlMap); // 移除所有默认图层
  }

  setTimeout(() => {
    // console.log(dataList)
    dataList.forEach((item) => {
      renderFeature(olMap, item);
    });
  }, 500);
};

// 通过气泡数据设置地图
const setMapByAutoPopupData = async (olMap, itemData, fixData, renderFeature) => {
  // console.log('通过气泡数据设置地图', olMap, itemData)

  const { arrData } = itemData

  if (fixData) {
    fixData(itemData);
  }

  // 选择数据隐藏气泡
  refPopupCommon.value.hidePopup();

  olMap.getView().setZoom(18);

  // 调用函数飞到指定的坐标
  flyToCoordinate(myOlMap, [itemData.longitude, itemData.latitude]);
  // mapUtils.flyToCoordinate(myOlMap, [itemData.longitude, itemData.latitude]);

  // 只显示一个Feature暂时使用此方案
  mapUtils.removeAllLayer(myOlMap); // 移除所有图层

  if (renderFeature) {
    renderFeature(olMap, [itemData]);
  }

  // 检索到当前要素
  setTimeout(() => {
    // 获取所有图层
    mapUtils.getAllFeature(olMap, (featureItem) => {
      let featureData = {};

      switch (featureItem.get("type")) {
        case "Marker":
          featureData = featureItem.get("pointData");
          break;
        case "Curve":
          featureData = featureItem.get("curveData");
          break;
      }

      if (featureData.xxx === itemData.xxx) {
        currentSingleObjData.value = { featureData, featureItem };
      }
    });
  }, 1000);

  // 将经纬度转换为屏幕坐标
  const pixelPoint = transformToPixelPoint(
    itemData.longitude,
    itemData.latitude
  );

  // 展示气泡窗
  mapUtils.setAutoPopup(pixelPoint, itemData, (popupObj) => {
    if (arrData) {
      popupObj.popupData = arrData
      popupObj.noFeature = true
    } else {
      let popupBack = document.querySelector(`#popupBack`)
      if (popupBack) {
        // 判断是否有返回图标,有则删除
        popupBack.remove();
      }
    }
    mapUtils.popupCommonConfig(
      olMap,
      pixelPoint,
      arrData ? popupInner.featuresPopupInner(popupObj) : popupInner.commonPopupInner(popupObj),
      (e) => {
        const { target } = e; // 事件对象

        // 点击气泡窗获取更多
        if (target.getAttribute("data-function") === "getMore") {
          /* if (JSON.stringify(gisStoreData.currentPopupData) !== '{}') {
            itemData.currentPopupData = gisStoreData.currentPopupData
          } else {
            itemData.currentPopupData = popupObj.popupData
          } */

          mittBus.emit("popupDataGetMore", {
            currentPopupObj: itemData,
            callback: (popupData) => {
              // console.log(popupData);

              mittBus.emit("showPopupDialog", popupData)
            },
          });
        }

        // 点击唯一标识显示具体气泡信息
        if (target.getAttribute("data-function") === "getSingleByFeatures") {
          mittBus.emit("getSingleByFeatures", { unique: target.getAttribute("data-unique").trim(), itemData });
        }

        // 返回
        // 点击popupDom返回
        if (target.getAttribute("data-function") === "popupBack") {
          mittBus.emit("popupBack");
        }
      }
    );
  });
};

/**
 * 接收其他组件派发的方法
 */
/**
 * 刷新地图
 * 各个组件如果需要刷新地图通过派发组件,最终到这个文件里面去做最终地图的刷新
 * resetFlag true 不带任何条件查询,查全部
 */
mittBus.on("reflashMap", (resetFlag) => {
  // console.log("刷新地图", resetFlag);

  // 判断是否需要带条件
  if (
    Boolean(resetFlag) &&
    myOlMap.getView().getZoom() > mapUtils.minRenderZoom
  ) {
    // 如果需要带条件,需要出发点全局派发事件去修改按钮dom
    mittBus.emit("resetBtn");
  }

  mapUtils.removeByReflashMap(myOlMap)  // 刷新地图需要移除的元素

  // 最终的刷新需要自组件派发事件到父组件完成派发
  emit("reflashMap", resetFlag, () => {
    nextTick(() => {
      setTimeout(() => {
        // 刷新完成之后,需要对检索到的数据去做定位
        if (!objIsEmpty(currentSingleObjData.value)) {
          // console.log("当前有检索条件", currentSingleObjData.value);

          let { featureData, featureItem } = currentSingleObjData.value;
          // console.log(featureItem);

          // 置顶图层
          mapUtils.featureToMaxTop(myOlMap, featureItem);
        }
      }, 1000);
    });
  });
});

// 删除所有绘制内容并取消状态 - 取消绘制(点线面)
mittBus.on("cancelDrawInteraction", () => {
  // console.log('drawPolygon')

  // 根据条件移除要素
  mapUtils.removeByCondition(myOlMap, currentFeature => {
    return currentFeature.get('drawType')
  })

  mapUtils.cancelDrawInteraction(myOlMap); // 绘制多边形
});

// 绘制多边形
mittBus.on("drawPolygon", () => {
  // console.log('drawPolygon')

  mapUtils.drawPolygon(myOlMap); // 绘制多边形
});

// 取消绘制多边形
mittBus.on("cancelPolygon", () => {
  // console.log('取消绘制多边形')

  mapUtils.cancelPolygon(myOlMap); // 绘制多边形
});

// 绘制圆形
mittBus.on("drawCircle", () => {
  // console.log('绘制圆形')

  mapUtils.drawCircle(myOlMap); // 绘制圆形
});

// 取消绘制圆形
mittBus.on("cancelCircle", () => {
  // console.log('取消绘制圆形')
});

// 测距
mittBus.on("testDistance", (next) => {
  // console.log("测距");

  // 测距
  mapUtils.testDistance(myOlMap, next);
});

// 取消测距
mittBus.on("cancelTestDistance", () => {
  // console.log("取消测距");

  mapUtils.cancelTestDistance(myOlMap); // 取消测距
});

/**
 * menu方法接收
 */
// 显示当前要素信息
mittBus.on("singleFeaturesClick", ({ feature, pixelPoint }) => {
  // console.log("显示当前要素信息", feature, pixelPoint);

  if (props.currentPageType === "Xxxxxxxx") {
    emit("setCircleDialogData", feature);

    return;
  }
  // 点击单个feature - map - click事件
  singleFeaturesClick(myOlMap, feature, pixelPoint);
});

/**
 * 地图工具方法
 */
// 地图事件
const mapEvent = (olMap) => {
  // 监听鼠标移动事件
  olMap.on("pointermove", (e) => {
    // 鼠标移动到feature区域时变为手形
    let pixel = olMap.getEventPixel(e.originalEvent);
    let hit = olMap.hasFeatureAtPixel(pixel);
    olMap.getTargetElement().style.cursor = hit ? "pointer" : "";

    currentLonlat.value = mapUtils.transformToLonlat(e.coordinate);
  });

  // 监听鼠标单击事件
  olMap.on("singleclick", (e) => {
    // console.log("点击地图", mapUtils.transformToLonlat(e.coordinate));

    // 判断当前是否为绘制状态
    if (mapUtils.getDrawInteraction(olMap)) {
      return
    }

    // 点击地图隐藏气泡窗
    refPopupCommon.value.hidePopup();

    // 点击地图隐藏右键菜单
    mapUtils.resetContextMenu();

    // const pixelPoint = e.coordinate; // 屏幕坐标
    let pixel = olMap.getEventPixel(e.originalEvent);
    let featureList = olMap.getFeaturesAtPixel(pixel); // 点击时获取所有features

    const currentShapeFeature = (shape) => {
      return featureList.filter((item) => item.get("type") === shape);
    };

    const judgeShape = (shape) => {
      return JSON.stringify(currentShapeFeature(shape)) !== "[]";
    };

    // 在选区中点击时触发
    const innerClick = () => {
      // 图形中的要素
      let pointFeatureList = (currentShapeFeature("Marker")[0] || currentShapeFeature("Curve")[0])

      // 如果只有2个要素
      if (featureList.length === 2) {
        // 是标注
        if (pointFeatureList && pointFeatureList.get("type")) {
          singleFeaturesClick(myOlMap, pointFeatureList, e.coordinate);
        }
      } else {
        refPopupCommon.value.setFeaturesPopup(
          olMap,
          e.coordinate,
          featureList
        );
      }
    }

    // 如果feature数组存在(不为空)
    if (featureList) {
      // 点击单个feature
      if (featureList.length === 1) {
        // console.log("无重叠,单个feature", featureList);

        // refPopupCommon.value.showPopup(); // 需要气泡时弹出

        // 不显示气泡窗的要素禁止弹窗
        if (currentShapeFeature("Circle").length !== 0) {
          refPopupCommon.value.hidePopup();
        }

        // 点击单个feature - map - click事件
        singleFeaturesClick(olMap, featureList[0], e.coordinate);
      }

      // 多个feature
      if (featureList.length > 1) {
        // console.log("有重叠,多个feature", featureList);

        // console.log(currentShapeFeature("Circle"))

        // 点击时需要显示标注的选区
        if (judgeShape("Circle") || judgeShape("Polygon")) {
          innerClick()
        }

        // 如果重叠区存在圆形
        if (judgeShape("Circle")) {
          // console.log('点击圆区域内要素', featureList)

          /* if (pointFeatureList.get("bussinessType") === "analysisMarker") {
            return
          } */
        } else if (judgeShape("Polygon")) {
          // console.log('点击多边形区域内要素', featureList)
          /* let featureItem = featureList.filter(
            (item) => item.get("type") === "Polygon"
          );
          setPolygonDialogData(featureItem[0]); */
        } else {
          // 点击扇形弹出气泡
          if (
            featureList[0].get("type") === "Curve" ||
            featureList[0].get("type") === "Marker"
          ) {
            // refPopupCommon.value.showPopup(); // 需要气泡时弹出
            refPopupCommon.value.setFeaturesPopup(
              olMap,
              e.coordinate,
              featureList
            );
          }
        }
      }
    }
  });

  // 监听鼠标拖动地图事件
  olMap.on("moveend", (e) => {
    // console.log('拖拽移动触发事件', e)

    let view = myOlMap.getView();
    let zoom = view.getZoom();
    currentZoomLevel.value = zoom.toFixed(2);
    // console.log("当前缩放级别为：", zoom, mapUtils.minRenderZoom);

    // 获取当前中心点坐标
    let center = view.getCenter();
    mittBus.emit("getCurrentCenter", mapUtils.transformToLonlat(center));

    mittBus.emit("getCurrentZoom", {
      zoom,
      minRenderZoom: mapUtils.minRenderZoom,
    });

    if (props.isAutoRenderData) {
      // console.log('移动加载地图', props.isAutoRenderData)
      emit("getCurrentViewData", olMap); // 刷新地图
    }
  });
};

// 点击单个feature - map - click事件
const singleFeaturesClick = (olMap, featureItem, pixelPoint) => {
  // console.log("无重叠,单个feature", featureItem, featureItem.get("type"));

  if (featureItem && featureItem.get('drawType') && mapUtils.getDrawInteraction(olMap)) {
    return
  }

  let popupData = null;

  // 点击点标注
  if (featureItem && featureItem.get("type") === "Marker") {
    // console.log('Marker点标注', featureItem);

    popupData = featureItem.get("pointData");
    // console.log('获取点标注数据', popupData)

    refPopupCommon.value.setCommonPopup(olMap, pixelPoint, popupData, featureItem);
  }

  // 点击扇形区域
  if (featureItem && featureItem.get("type") === "Curve") {
    // console.log('点击扇形区域', featureItem);

    popupData = featureItem.get("curveData");
    // console.log('获取扇形区数据', popupData)

    refPopupCommon.value.setCommonPopup(olMap, pixelPoint, popupData);
  }

  // 点击圆形区域
  if (featureItem && featureItem.get("type") === "Circle") {
    // console.log("点击圆形区域", featureItem);

    setCircleDialogData(featureItem);
  }

  // 点击多边形
  if (featureItem && featureItem.get("type") === "Polygon") {
    // console.log("点击多边形", featureItem.get("polygonData"));

    const polygonData = featureItem.get("polygonData");

    // 网格
    if (featureItem.get('businessType') === "grid") {
      console.log("点击网格数据", polygonData);
      // return;
    }

    // 弹出多边形数据
    setPolygonDialogData(featureItem);
  }
};

// 点击圆形区域获取数据
const setCircleDialogData = (feature) => {
  let circleData = feature.get('circleData')

  mittBus.emit("setCircleDialogData", circleData);
};

// 弹出多边形数据
const setPolygonDialogData = (featureItem) => {
  const { coords, lonlat, name } = featureItem.get("polygonData");

  mittBus.emit("setPolygonDialogData", { lonlat, name });
};

/**
 * 地图方法供出
 */

// 获取可视区域坐标
const getCurrentViewPosition = (olMap) => {
  return mapUtils.getCurrentViewPosition(olMap);
};

// 屏幕坐标转换
const transformToPixelPoint = (lon, lat) => {
  return mapUtils.transformToPixelPoint(lon, lat)
}

// 添加圆
const addCircle = (olMap, item, circleConfig = {}, isFlicker) => {
  mapUtils.addCircle(olMap, item, circleConfig, isFlicker);
};

// 加载kml
const loadKML = (olMap, text) => {
  mapUtils.loadKML(olMap, text);
};

// 移除所有图层
const removeAllLayer = (olMap) => {
  // console.log(olMap, type);

  mapUtils.removeAllLayer(olMap);
};

// 根据类型移除图层
const removeLayerByType = (olMap, type) => {
  // console.log(olMap, type);

  mapUtils.removeLayerByType(olMap, type); // 移除所有图层
};
// 根据业务类型移除图层
const removeLayerByBusinessType = (olMap, type) => {
  // console.log(olMap, type);

  mapUtils.removeLayerByBusinessType(olMap, type); // 移除所有图层
};

// 批量添加点
const addPoint = (olMap, pointList, src, pointConfig = {}, zIndex) => {
  mapUtils.addPoint(olMap, pointList, src, pointConfig, zIndex);
};

// 设置 Features 样式
const setFeaturesStyle = (fillColor, strokeColor) => {
  return mapUtils.setFeaturesStyle(fillColor, strokeColor);
};

// 批量添加扇形
const addCurve = (olMap, pointList, isResetStyle) => {
  if (isResetStyle) {
    mapUtils.addCurve(olMap, pointList, (item) => {
      return isResetStyle(item);
    });
  } else {
    mapUtils.addCurve(olMap, pointList);
  }
};

const flyToCoordinate = (OlMap, lonlat) => {
  mapUtils.flyToCoordinate(OlMap, lonlat);
};

// 创建多边形
const createPolygon = (olMap, { coords, lonlat, polygonData }, polygonConfig, next, style) => {
  mapUtils.createPolygon(olMap, { coords, lonlat, polygonData }, polygonConfig, next, style);
};

// 创建文字图层
const addTextPoint = (olMap, text, position, businessType, textOverlayConfig = {}, isRemove) => {
  mapUtils.addTextPoint(olMap, text, position, { businessType, ...textOverlayConfig }, isRemove);
};

// 获取多边形中心点
const getPolygonCenter = (feature) => {
  return mapUtils.getPolygonCenter(feature);
};

// 添加带箭头的线
const addArrowLine = (olMap, position, src, businessType) => {
  mapUtils.addArrowLine(olMap, position, src, businessType)
}

/**
 * vue生命周期函数
 * 挂载后触发
 */
onMounted(() => {
  const olMap = mapUtils.initOlMap("olMap"); // 初始化地图

  mapInit(olMap); // 地图加载完初始化做的一些操作
  getMapInitInfo(olMap); // 地图加载完初始化后获取地图的一些信息
  setOlmap(olMap); // 设置地图
});

/**
 * 暴露方法
 */
defineExpose({
  renderFeatureByData, // 根据数据渲染Feature
  setMapByAutoPopupData, // 通过气泡数据设置地图

  // 地图方法供出
  getCurrentViewPosition, // 获取可视区域坐标
  transformToPixelPoint,  // 屏幕坐标转换
  addCircle, // 添加圆
  loadKML, // 加载kml
  removeAllLayer, // 移除所有图层
  removeLayerByType, // 根据类型移除图层
  removeLayerByBusinessType, // 根据业务类型移除图层
  addPoint, // 批量添加点
  addCurve, // 批量添加扇形
  createPolygon, // 创建多边形
  flyToCoordinate, // 飞到指定的坐标
  setFeaturesStyle, // 设置 Features 样式
  addTextPoint, // 创建文字图层
  getPolygonCenter, // 获取多边形中心点
  addArrowLine,  // 添加带箭头的线
});
</script>

<style lang="scss">
$zoomMargin: 10em;

.ol_map_wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 1250px;

  .ol_map {
    width: 100%;
    height: 100%;
    // overflow: hidden;

    .flicker_point {
      height: 50px;
      width: 50px;
      border-radius: 25px;
      background: rgba(255, 0, 0, 0.9);
      transform: scale(0);
      animation: flickerAnimation 3s;
      animation-iteration-count: infinite;
      cursor: pointer;
    }

    @keyframes flickerAnimation {
      to {
        transform: scale(2);
        background: rgba(0, 0, 0, 0);
      }
    }

    .ol-viewport {
      overflow: initial !important;
    }

    // 控件相关
    .ol-overlaycontainer-stopevent {
      // 全屏
      /* .ol-full-screen {
        position: absolute;
        top: -34px;
        right: 108px;
      } */

      // 缩放
      .ol-zoom,
      .ol-zoomslider {
        left: initial;
        right: 0.5em;
      }

      .ol-zoom {
        top: calc(0.5em + $zoomMargin);
      }

      .ol-zoomslider {
        top: calc(4.5em + $zoomMargin);
      }

      // 比例尺
      .ol-scale-line {
        position: absolute;
        bottom: 76px;
        background: initial;
      }

      /* // 鹰眼
      .ol-overviewmap {
        position: absolute;
        left: 0;
        bottom: 20px;

        .ol-overviewmap-map {
          width: 100px;
          height: 100px;
        }
      } */
    }
  }
}

.menu_wrap {
  padding: 3px;
  max-height: 157px;
  background: rgba(255, 255, 255, 0.8);
  border: solid 1px #777777;
  border-radius: 5px;
  overflow: auto;

  ul {
    padding-bottom: 3px;

    li {
      padding: 5px 10px;
      font-size: 12px;
      color: #000;
      border-radius: 3px 3px 0 0;
      cursor: pointer;
      transition: 0.3s linear;

      &:hover {
        color: #715f5f;
        background: rgba(128, 128, 128, 0.25);
        transition: 0.3s linear;
      }

      &:not(:last-child) {
        margin-bottom: 3px;
        border-bottom: solid 1px #b3b3b3;
      }
    }
  }
}

.overview_info_toggle {
  position: absolute;
  right: 9px;
  top: 45px;
  width: 25px;
  height: 25px;
  z-index: 1;
  background: url("./icon/expand.svg") center center no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}

.copyright_info {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-width: 800px;
  min-height: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 25px 0 12px;
  z-index: 1;
  background: #8a8888c4;

  p,
  dt,
  dd {
    height: 25px;
    line-height: 28px;
    font-size: 12px;
  }

  ul {
    li {
      display: inline-block;

      &:first-child {
        dd {
          min-width: 350px;
        }
      }

      dl {

        dt,
        dd {
          display: inline-block;
        }
      }
    }
  }
}
</style>
```

## svg
- back.svg
```txt
<svg t="1713927038909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1547" width="200" height="200"><path d="M482.7 249.9V106.1c0-37.4-45.3-56.2-71.7-29.7L140.3 347c-16.4 16.4-16.4 43 0 59.4L410.9 677c26.5 26.5 71.7 7.7 71.7-29.7v-155c96.1-0.3 271.5-10.7 271.5 227.7 0 118.1-92.8 216.8-216 239.6 198.1-24.4 326-236 326-361.9 0.1-292.6-309.4-346.3-381.4-347.8z" fill="#494949" p-id="1548"></path></svg>
```

## OpenlayerBaseMap/components/PopupCommon.vue
```vue
<template>
  <div id="popup" class="ol-popup popup_toggle" v-show="isShowPopup">
    <div class="popup_wrap">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-content" class="popup-content"></div>
    </div>
  </div>

  <!-- 气泡详情弹窗 -->
  <!-- gis页面 -->
  <gis-popup-detail-dialog ref="refGisPopupDetailDialog" />
  <!-- 投诉页面 -->
  <Xxxxxxxx-popup-detail-dialog ref="refXxxxxxxxPopupDetailDialog" />
</template>

<script setup lang="jsx">
// vue core
import { nextTick, ref, h, render } from "vue";
// map data
import * as popupInner from "./popupInner";
// import { gisDataStore } from '@/store/modules/gis.js'  // store
// map core
import * as mapUtils from "../../mapUtils.js";
// 组件传参
import mittBus from "@/utils/mittBus"; // mitt
// 组件
import GisPopupDetailDialog from "@/views/gis/components/popup/GisPopupDetailDialog.vue";
import XxxxxxxxPopupDetailDialog from "@/views/Xxxxxxxx/components/popup/XxxxxxxxPopupDetailDialog.vue";

// 如果popup不设置overflow的话,会在左下角显示,这里在一开始进行隐藏
let isShowPopup = ref(false);
let currentPopupObj = {};

let refGisPopupDetailDialog = ref(null);
let refXxxxxxxxPopupDetailDialog = ref(null);

// const { setCurrentPopupData } = gisDataStore()

const props = defineProps({
  currentPageType: {
    type: String,
    default: "",
  },
});

/**
 * 接收其他组件派发的方法
 */
// 显示气泡弹出窗
mittBus.on("showPopupDialog", (popupData) => {
  // console.log(popupData, props.currentPageType);
  showPopupDialog(popupData, props.currentPageType); // 显示气泡弹出窗
});
// 点击唯一标识显示具体气泡信息
mittBus.on("getSingleByFeatures", ({ unique, itemData }) => {
  // console.log('点击唯一标识显示具体气泡信息', unique, itemData);

  let uniqueArr = unique.split(':')

  const { arrData } = itemData
  currentPopupObj.arrData = arrData

  arrData.forEach(item => {
    if (item[uniqueArr[0]] === uniqueArr[1]) {
      currentPopupObj.currentPopupData = item

      popupInner.commonPopupInner(currentPopupObj)
      setPopupBackDom(currentPopupObj)
    }
  })
});
// 点击popupDom返回
mittBus.on("popupBack", () => {
  // popupObj.popupData = arrData
  currentPopupObj.popupData = currentPopupObj.arrData
  currentPopupObj.noFeature = true
  popupInner.featuresPopupInner(currentPopupObj)
  // popupBack();
});

// 设置返回气泡窗返回dom
const setPopupBackDom = (inner) => {
  let content = document.getElementById("popup-content");
  popupInner.commonPopupInner(inner)  // jsx不需要赋值

  const backDom = document.createElement("b");
  backDom.setAttribute("data-function", "popupBack");
  backDom.setAttribute("id", "popupBack");
  backDom.setAttribute("title", "返回");
  backDom.innerHTML = "";
  content.appendChild(backDom);
}

// 显示气泡弹出窗
const showPopupDialog = (popupData, currentPageType) => {
  // console.log(currentPageType);

  // 弹出相对应气泡窗
  switch (currentPageType) {
    case "gis":
      nextTick(() => {
        refGisPopupDetailDialog.value.show(popupData);
      });
      break;
    case "Xxxxxxxx":
      nextTick(() => {
        refXxxxxxxxPopupDetailDialog.value.show(popupData);
      });
      break;
  }
};

const showPopup = () => {
  isShowPopup.value = true;
};

const hidePopup = () => {
  isShowPopup.value = false;
};

// 通用信息展示弹窗
const setCommonPopup = (olMap, pixelPoint, popupData, featureItem) => {
  // console.log("点击标注弹出气泡", olMap, popupData, featureItem);

  // 判断是否有返回图标,有则删除 - 不为业务气泡窗不删除
  let popupBackDom = document.querySelector(`#popupBack`)
  if (popupBackDom) {
    if (!featureItem.get('businessType')) {
      popupBackDom.remove();
    }
  }

  // 经纬度
  let coordinate = mapUtils.transformToLonlat(pixelPoint);
  // 点击尺 （这里是尺(米)，并不是经纬度）;
  let hdms = mapUtils.getHdms(pixelPoint); // 转换为经纬度显示

  const popupObj = {
    name: "通用信息展示弹窗",
    hdms,
    coordinate,
    popupData, // 气泡窗业务数据
  };
  currentPopupObj = popupObj;

  // 修改通用展示窗数据 - 子组件使用
  mittBus.emit("fixCommonPopupData", popupObj);

  mapUtils.setPopup(
    olMap,
    pixelPoint,
    popupInner.commonPopupInner(popupObj, featureItem),
    (event) => {
      popupClickEvent(event);
    }
  );
};

// 点击多个feature弹出气泡
const setFeaturesPopup = (olMap, pixelPoint, popupData) => {
  // console.log("点击多个feature弹出气泡", olMap);
  // console.log(popupData)

  // 经纬度
  let coordinate = mapUtils.transformToLonlat(pixelPoint);
  // 点击尺 （这里是尺(米)，并不是经纬度）;
  let hdms = mapUtils.getHdms(pixelPoint); // 转换为经纬度显示

  let popupTypeArr = [];
  popupData.forEach((item) => {
    switch (item.get("type")) {
      case "Marker":
        popupTypeArr.push("标注点");
        break;
      case "Curve":
        popupTypeArr.push("扇区");
        break;
    }
  });

  const popupObj = {
    name: popupTypeArr.length + "个重叠要素",
    type: Array.from(new Set(popupTypeArr)).join(","), // 去重转字符串以逗号隔开
    hdms, // 经纬度
    coordinate, // 坐标
    popupData, // 窗口业务数据 - 这里指所有的feature
  };
  //   console.log(hdms);
  currentPopupObj = popupObj;

  mapUtils.setPopup(
    olMap,
    // e.coordinate,
    pixelPoint,
    popupInner.featuresPopupInner(popupObj, (currentDataList) => {
      // console.log("输出业务数据", currentDataList);

      currentPopupObj.currentDataList = currentDataList;
    }),
    (event) => {
      popupClickEvent(event);
    }
  );
};

// 气泡弹出窗点击事件
const popupClickEvent = async (e) => {
  // console.log("气泡弹出窗点击事件", e)

  const { target } = e; // 事件对象
  // console.log("点击气泡窗返回气泡窗中的dom对象", target);

  // 当前dom绑定的函数
  let dataFunction = target.getAttribute("data-function");

  // 点击气泡窗获取更多
  if (dataFunction === "getMore") {
    getMore();
  }

  // 点击唯一标识显示具体气泡信息
  if (dataFunction === "getSingleByFeatures") {
    // console.log(target.getAttribute("data-unique"));

    getSingleByFeatures(target.getAttribute("data-unique"));
  }

  // 点击popupDom返回
  if (dataFunction === "popupBack") {
    popupBack();
  }
};

// 点击唯一标识显示具体气泡信息
const getSingleByFeatures = (unique) => {
  // console.log("点击唯一标识显示具体气泡信息", unique);

  if (!unique) {
    return
  }

  // console.log(currentPopupObj)
  let uniqueArr = unique.split(':')

  const getObjData = (item, type) => {
    if (item.get('noPopup')) {
      return
    }

    if (item.get(type)[uniqueArr[0]] === uniqueArr[1]) {
      currentPopupObj.currentPopupData = item.get(type)
      return item
    }
  }

  currentPopupObj.currentPopupFeature = currentPopupObj.popupData.filter(item => {
    switch (item.get('type')) {
      case 'Marker':
        return getObjData(item, 'pointData')
      case 'Curve':
        return getObjData(item, 'curveData')
    }
  })
  // console.log(currentPopupObj.currentPopupFeature, currentPopupObj.currentPopupData)

  setPopupBackDom(currentPopupObj, currentPopupObj.currentPopupFeature[0])
};

// 点击popupDom返回
const popupBack = () => {
  if (currentPopupObj.popupData instanceof Array) {
    popupInner.featuresPopupInner(currentPopupObj)
  }
};

// 点击气泡窗获取更多
const getMore = () => {
  // 气泡窗点击更多 - 子组件使用
  // console.log('气泡窗点击更多 - 子组件使用', currentPopupObj)
  mittBus.emit("popupDataGetMore", {
    currentPopupObj,
    callback: (popupData) => {
      // console.log(popupData);

      // 获取完数据后进行弹窗
      showPopupDialog(popupData, props.currentPageType); // 显示气泡弹出窗
    },
  });
};

/**
 * 暴露方法 - 供父组件执行
 */
defineExpose({
  showPopup,
  hidePopup,
  setCommonPopup,
  setFeaturesPopup,
});
</script>

<style lang="scss" scoped>
// $popupBg: rgba(111, 168, 247, 0.8);
$popupBg: rgba(255, 255, 255, 0.8);

.ol-popup {
  position: absolute;
  left: -50px;
  bottom: 12px;
  padding: 15px;
  background: $popupBg;

  .popup_wrap {
    margin-top: 10px;
    min-height: 20px;
    overflow: auto;
  }

  &::after,
  &::before {
    top: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .ol-popup:after {
    border-top-color: $popupBg;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
  }

  &::before {
    border-top-color: $popupBg;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
  }

  .ol-popup-closer {
    position: absolute;
    top: 3px;
    right: 6px;
    width: 10px;
    height: 10px;
    cursor: pointer;

    &::after {
      content: "✖";
    }
  }

  /**
     * 此处开始气泡窗内容样式
     */
  :deep .popup-content {
    margin-right: 8px;
    margin-top: 5px;

    p,
    span,
    h3,
    li,
    dt,
    dd {
      font-size: 12px;
      color: #514b4b;
    }

    // 重叠feature气泡窗样式
    ul.features_top {
      li {
        margin-bottom: 5px;
        // color: #494949;
        color: #222222;
      }
    }

    .feature_item {
      margin-bottom: 10px;
      padding: 6px;
      transition: 0.2s linear;
      border-bottom: dashed 1px #707070;
      border-radius: 3px 3px 0 0;
      cursor: pointer;

      &:hover {
        background: rgb(193 231 254 / 80%);
        transition: 0.3s linear;
      }

      span {
        display: block;
        margin-bottom: 3px;
      }

      dl {
        margin-bottom: 2px;

        dt,
        dd {
          display: inline-block;
        }
      }
    }

    .common_simple_popup_item,
    .common_popup_item {
      &+b {
        position: absolute;
        top: 4px;
        left: 8px;
        width: 17px;
        height: 20px;
        background: url("../../icon/back.svg") center center no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
    }

    .common_simple_popup_item {
      min-width: 88px;
      max-width: 300px;
    }

    .common_features_popup_item {
      position: relative;
      min-width: 400px;
      max-height: 260px;
    }

    // 通用气泡窗样式
    .common_popup_item {
      position: relative;

      min-width: 400px;
      max-height: 260px;

      // background: #f00;
      h3 {
        font-size: 15px;
        margin-bottom: 10px;
        color: #494949;
      }

      ul {
        li {
          margin-bottom: 6px;

          dl {

            dt,
            dd {
              display: inline-block;
            }

            dt {
              font-weight: bold;
              margin-right: 5px;
              font-size: 13px;
            }
          }
        }
      }

      span.get_more {
        position: absolute;
        right: -5px;
        bottom: -33px;
        padding: 6px 10px;
        background: #70b5fa;
        color: #fff;
        border-radius: 6px;
        transition: 0.2s linear;
        cursor: pointer;

        &:hover {
          background: #2c94fe;
          transition: 0.3s linear;
        }
      }
    }
  }
}
</style>
```

## OpenlayerBaseMap/components/popupInner.js
```js
/**
 * 气泡窗管理
 * @param {*} popupObj 
 * @returns 
 */

// 工具
import mittBus from "@/utils/mittBus"; // mitt - 组件传参工具
import { render } from 'vue';  // jsx渲染到dom需要使用vue自带的render函数

const innerDom = () => {
    return document.querySelector('#popup-content')
}

// 通用气泡窗
export const commonPopupInner = (popupObj, featureItem) => {
    mittBus.emit('setCommonPopupInner', {
        popupObj, featureItem, callback: (popupInnerDom) => {
            // 使用jsx,不需要return,直接将jsx结构render到dom即可
            render(popupInnerDom, innerDom())
        }
    })
}

// 多个feature气泡窗
export const featuresPopupInner = (popupObj, next) => {
    // console.log('多个feature气泡窗', popupObj)

    let featureDataList = []
    // 设置重叠要素气泡窗html
    mittBus.emit('setFeaturesPopupInner', {
        popupObj, callback: (popupInnerDom) => {
            render(popupInnerDom, innerDom())
        }, next: currentDataList => {
            featureDataList = currentDataList
        }
    })

    if (next) {
        next(featureDataList)
    }
}
```

## OpenlayerBaseMap/components/DetailDialog.vue
```vue
<template>
  <el-dialog width v-model="showDialog" :close-on-click-modal="false" :modal-append-to-body="false"
    :close-on-press-escape="false">
    <template #header>
      <slot name="DialogTitle"></slot>
    </template>
    <div class="container">
      <slot name="DialogContainer"></slot>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <slot name="extendBtn"></slot>
        <el-button @click="showDialog = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
// core
import { ref } from "vue";

const props = defineProps({
  width: {
    type: String,
    default: "80%",
  },
});

const showDialog = ref(false);

/**
 * 父组件调弹框显示方法
 */
const show = () => {
  showDialog.value = true;
};

defineExpose({ show });
</script>
```

## 使用地图组件
### index.vue
```vue
<template>
  <openlayer-base-map class="xxxxxxxx_map" ref="refOpenlayerBaseMap" :currentPageType="'xxxxxxxx'" :isShowLend="false"
    @getOlMapInstance="getOlMapInstance" @getCurrentViewData="getCurrentViewData" :isAutoRenderData="true"
    :isControlOverviewInfo="true" @getCircleData="getXxxxxxxxData" @reflashMap="reflashMap"
    @toggleOverviewInfo="toggleOverviewInfo">

    <el-button type="primary" @click="reflashMap" class="reflash_map">刷新地图</el-button>

    <!-- 右侧信息 - 投诉信息 -->
    <xxxxxxxx-common v-show="isShowXxxxxxxxCommon" />

    <!-- 自定义圆形数据 -->
    <circle-info-dialog ref="refCircleInfoDialog" />
  </openlayer-base-map>
</template>

<script setup>
// vue - core
import { ref, onUnmounted } from "vue";
// 组件
import OpenlayerBaseMap from "@/components/OpenlayerBaseMap/index.vue";
import CircleInfoDialog from "./components/CircleInfoDialog.vue"; // 点击圆信息
import XxxxxxxxCommon from "./components/XxxxxxxxCommon.vue"; // 投诉信息
import { getPopupInnerDom, getPopupAnalysisDom, getFeaturesPopupInnerDom } from "./components/popup/xxxxxxxxPopup.jsx"; // 气泡窗dom
// api相关 - 工具
import { apiCommon, getNow, getFormulateDate, moreArraysIsEmpty } from "@/utils/index.js";
import * as xxxxxxxxApi from "@/api/xxxxxxxx/xxxxxxxx";
// 工具
import mittBus from "@/utils/mittBus"; // mitt - 组件传参工具
// svg
import xxxxxxxxMarker from "./icon/Xxxxxxxx_marker.svg";
import arrow from "./icon/arrow.svg";
import alarmPoint from "./icon/analysisPoint/alarmPoint.svg";
import interferencePoint from "./icon/analysisPoint/interferencePoint.svg";
import loadPoint from "./icon/analysisPoint/loadPoint.svg";
import performancePoint from "./icon/analysisPoint/performancePoint.svg";

const refOpenlayerBaseMap = ref(null); // 地图核心元素

const { proxy } = getCurrentInstance();

const refCircleDetailDialog = ref(null);
const refCircleInfoDialog = ref(null);

let isShowXxxxxxxxCommon = ref(true)

let myOlMap = null;
let myMapCommonData = null;

let xxxxxxxxDataList = null

/**
 * 接收其他组件派发的方法
 */
/**
 * 气泡窗
 */
// 设置通用气泡窗html
mittBus.on("setCommonPopupInner", ({ popupObj, featureItem, callback }) => {
  // console.log("设置通用气泡窗html", popupObj, featureItem, featureItem.get('bussinessType'), featureItem.get('bussinessType'), 'analysisMarker');

  if (featureItem && featureItem.get('bussinessType') === 'analysisMarker') {
    callback(getPopupAnalysisDom(popupObj));
  } else {
    callback(getPopupInnerDom(popupObj));
  }

});
// 设置重叠要素气泡窗html
mittBus.on('setFeaturesPopupInner', ({ popupObj, callback, next }) => {
  // console.log(popupObj, callback)

  callback(getFeaturesPopupInnerDom(popupObj, currentDataList => {
    // console.log(currentDataList)

    currentDataList = currentDataList.filter(item => item)
    // console.log(currentDataList)

    next(currentDataList)
  }));
})
//  气泡窗点击更多 - 子组件使用
mittBus.on("popupDataGetMore", async ({ currentPopupObj, callback }) => {
  // console.log("气泡窗点击更多", currentPopupObj);

  // 或者走接口,根据xxx获取详情
  const currentPopupAsyncObj = await apiCommon(XxxxxxxxApi.queryXxxxxxxxtInfo, {
    XxxxxxxxtId: currentPopupObj.popupData.XxxxxxxxtId,
  });
  currentPopupObj = currentPopupAsyncObj.data;

  // 获取完数据后进行弹窗
  callback(currentPopupObj);
});
//  数据分析
mittBus.on("analysisPointData", async (currentData) => {
  // console.log("数据分析", currentData.longitude, currentData.latitude);

  let startPixelPoint = refOpenlayerBaseMap.value.transformToPixelPoint(currentData.longitude, currentData.latitude)
  // console.log(currentPixelPoint)

  /* 分析状态[空 - 未匹配到分析结果.完成 - loadResult]
  未匹配到小区

  展示分析结果 */
  let analysisPointRes = await apiCommon(XxxxxxxxApi.queryXxxxxxxxtAnalysisResult, currentData.csId);
  // let analysisPointRes = await apiCommon(XxxxxxxxApi.queryXxxxxxxxtAnalysisResult, '20240603103828X13147');
  analysisPointRes = analysisPointRes.data;

  if (analysisPointRes) {
    const { alarmResult, interferenceResult, loadResult, performanceResult } = analysisPointRes
    const tempArr = [alarmResult, interferenceResult, loadResult, performanceResult]

    if (moreArraysIsEmpty(tempArr)) {
      proxy.$modal.msgWarning(`未匹配到小区`);
      return
    }

    refOpenlayerBaseMap.value.removeLayerByBusinessType(myOlMap, "analysisMarker"); // 根据类型移除图层 - 分析标注
    refOpenlayerBaseMap.value.removeLayerByBusinessType(myOlMap, "XxxxxxxxArrowLine"); // 根据类型移除图层 - 分析箭头
    refOpenlayerBaseMap.value.removeLayerByBusinessType(myOlMap, "XxxxxxxxTextPoint"); // 根据类型移除图层 - 分析文本

    // console.log(alarmResult, interferenceResult, loadResult, performanceResult)
    setXxxxxxxxAnalysisData(alarmResult, startPixelPoint, '故障分析', alarmPoint)
    setXxxxxxxxAnalysisData(interferenceResult, startPixelPoint, '高干扰分析', interferencePoint)
    setXxxxxxxxAnalysisData(loadResult, startPixelPoint, '性能分析', loadPoint)
    setXxxxxxxxAnalysisData(performanceResult, startPixelPoint, '高负荷分析', performancePoint)
  }
});
// 设置圆形数据
mittBus.on("setCircleDialogData", (circleData) => {
  refCircleInfoDialog.value.show(circleData);
});

/**
 * 工具方法
 */
// 分析数据批量处理要素
const setXxxxxxxxAnalysisData = (resDataList, startPixelPoint, typeTxt, pointIcon) => {
  if (resDataList.length !== 0) {
    resDataList.forEach(item => {

      item.analysisType = typeTxt

      let analysisPointItem = {
        lonlat: [item.longitude, item.latitude],
        pointData: item,
      }

      let endPixelPoint = refOpenlayerBaseMap.value.transformToPixelPoint(item.longitude, item.latitude)

      let position = [startPixelPoint, endPixelPoint]
      refOpenlayerBaseMap.value.addArrowLine(myOlMap, position, arrow, 'XxxxxxxxArrowLine')

      // 创建文本要素以显示距离
      refOpenlayerBaseMap.value.addTextPoint(myOlMap, typeTxt, [item.longitude, item.latitude], 'XxxxxxxxTextPoint')

      refOpenlayerBaseMap.value.addPoint(
        myOlMap,
        analysisPointItem,
        pointIcon,
        { bussinessType: 'analysisMarker', 'noPopup': true }, 999
      );
    })
  }
}

// 显示隐藏概览
const toggleOverviewInfo = (val) => {
  // console.log('显示隐藏概览', val)

  isShowXxxxxxxxCommon.value = val
}
// 刷新地图
const reflashMap = () => {
  refOpenlayerBaseMap.value.removeAllLayer(myOlMap)

  getXxxxxxxxData(myOlMap)
  getCurrentViewData(myOlMap)
}
// 获取可视区域坐标参数
const getCurrentPositionParams = (olMap) => {
  let viewPosition = refOpenlayerBaseMap.value.getCurrentViewPosition(olMap);
  // console.log("获取可视区域的左上角和右下角坐标", viewPosition)

  return {
    minLatitude: viewPosition.bottomRight[1],
    maxLatitude: viewPosition.topLeft[1],
    minLongitude: viewPosition.topLeft[0],
    maxLongitude: viewPosition.bottomRight[0],
  };
};

/**
 * 业务方法
 */
// 获取地图实例 - 地图加载完初始化做的一些操作[业务相关]
const getOlMapInstance = (olMap, mapCommonData) => {
  // console.log("获取地图实例 - 地图加载完初始化做的一些操作[业务相关]", olMap);

  myOlMap = olMap; // 赋值全局变量,为后续业务操作做准备

  myMapCommonData = mapCommonData;
};
// 获取可视区域数据 (主入口)
const getCurrentViewData = async (olMap) => {
  let params = {
    ...getCurrentPositionParams(olMap),
    // dateString: '2024-05-23'
    dateString: getNow()
  };

  xxxxxxxxDataList = await apiCommon(XxxxxxxxApi.queryXxxxxxxxtList, params);
  xxxxxxxxDataList = xxxxxxxxDataList.data;
  // console.log(xxxxxxxxDataList);

  renderFeatureByData(olMap, xxxxxxxxDataList);
};

// 根据数据渲染Feature
const renderFeatureByData = (olMap, dataList) => {
  refOpenlayerBaseMap.value.renderFeatureByData(
    olMap,
    dataList,
    (olMap, item) => {
      // console.log(olMap, item);

      item.dispatchTime = getFormulateDate(item.dispatchTime)
      item.isNeedAnalysis = true  // 判断是否需要进行数据分析

      // 批量添加点
      refOpenlayerBaseMap.value.addPoint(
        olMap,
        {
          lonlat: [item.longitude, item.latitude],
          pointData: item,
        },
        XxxxxxxxMarker
      );
    }
  );
};

// 设置圆数据(投诉)
const getXxxxxxxxData = async (olMap) => {
  // console.log(olMap);
  let params = {
    // date: '2024-05-23'
    date: getNow()
  }

  let circleList = await apiCommon(XxxxxxxxApi.queryXxxxxxxxtCluster, params);
  circleList = circleList.data
  // console.log(circleList)

  refOpenlayerBaseMap.value.renderFeatureByData(
    olMap,
    circleList,
    (olMap, item) => {

      item.lonlat = [item.longitude, item.latitude]

      // 添加圆
      refOpenlayerBaseMap.value.addCircle(olMap, item, { bussinessType: 'Xxxxxxxx' }, true);
    }
  );
};

/**
 * 生命周期
 */
onUnmounted(() => {
})
</script>

<style lang="scss" scoped>
.reflash_map {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
}

:deep .ol-popup {
  // background: #f00;
}

:deep.xxxxxxxx_map {

  // 控件相关
  .ol-overlaycontainer-stopevent {
    .ol-scale-line {
      bottom: 38px;
    }
  }
}
</style>
```

### popup
```jsx
export const getPopupInnerDom = (popupObj) => {
    return (
        <div class="common_popup_item">
            <h3>xxxx: {popupData.id}</h3>
            <ul>
                <li>
                    <dl>
                        <dt>xxxx:</dt>
                        <dd>{popupData.xxxx}</dd>
                    </dl>
                </li>
            </ul>

            <span class='get_more' data-function="getMore">查看更多</span>
        </div>
    )
}

export const getPopupAnalysisDom = (popupObj) => {
    return (<div class='common_simple_popup_item'>{popupData.analysisType}</div>)
}

export const getFeaturesPopupInnerDom = (popupObj, next) => {
    // console.log(popupObj)

    let currentDataList = []; // 数据集合

    const featuresPopupStr = popupObj.popupData.map(item => {
        let currentData = item.get('pointData')

        currentDataList.push(currentData)

        if (!currentData) {
            return
        }

        if (!currentData.analysisType) {
            return (
                <div class="feature_item" data-function='getSingleByFeatures' data-unique={`xxx:${currentData.xxx}`}>
                    <span data-function='getSingleByFeatures' data-unique={`xxx:${currentData.xxx}`}>ID: {currentData.id}</span>
                    <dl data-function='getSingleByFeatures' data-unique={`xxx:${currentData.xxx}`}>
                        <dt>xxx:</dt>
                        <dd>{currentData.xxx}</dd>
                    </dl>
                    <dl data-function='getSingleByFeatures' data-unique={`xxx:${currentData.xxx}`}>
                        <dt>xxxx:</dt>
                        <dd>{currentData.category}</dd>
                    </dl>
                </div>
            )
        } else {
            return (
                <div class="feature_item">
                    <span>xxx: {currentData.xxx}</span>
                    <span>xxxx: {currentData.networkType}</span>
                    <dl>
                        <dt>xxxx:</dt>
                        <dd>{currentData.analysisType}</dd>
                    </dl>
                </div>
            )
        }
    })

    next(currentDataList)  // 输出业务数据

    return (
        <>
            <div class="common_features_popup_item">
                {
                    <ul class="features_top">
                        <li>{popupObj.name}</li>
                        <li>类型: {popupObj.type}</li>
                    </ul>
                }
                {featuresPopupStr}
            </div>
        </>
    );
}
```

### dialog.vue
```vue
<template>
    <detail-dialog ref="refDetailDialog">
        <!-- 标题 -->
        <template #DialogTitle>
            <span>xxxx</span>
        </template>

        <!-- 内容 -->
        <template #DialogContainer>
            xxxx内容
        </template>
    </detail-dialog>
</template>

<script setup>
import { ref } from 'vue'
import DetailDialog from "@/components/OpenlayerBaseMap/components/DetailDialog.vue";

const refDetailDialog = ref(null);
const currentData = ref({});

/**
 * 业务
 */
const show = (val) => {
    refDetailDialog.value.show();
    currentData.value = val; // 基本信息数据
};

defineExpose({
    show,
});

</script>

<style lang="scss" scoped></style>
```