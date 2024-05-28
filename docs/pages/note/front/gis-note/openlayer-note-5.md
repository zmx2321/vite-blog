# openlayer库完整代码

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
// kml test
import { KML/* , GeoJSON */ } from 'ol/format';
// 选择多边形
import { Draw, defaults/* , Modify, Snap */ } from 'ol/interaction';
// render
import { getVectorContext } from "ol/render";

/******************************
 * 变量(非地图)
 * ****************************
 */
let count = 0  // 地图点击打点变量

/******************************
 * 地图变量(工具)
 * ****************************
 */
const tdtTk = import.meta.env.VITE_APP_MapToken  // 全局配置

export const minRenderZoom = 15
// 地图初始化配置
const mapInitConfig = {
  // ol地图底图
  layers: [
    // 天地图底图
    new TileLayer({
      source: new XYZ({
        url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=" + tdtTk,
        wrapX: false,
        crossOrigin: "anonymous",
      })
    }),
    // 天地图注记
    new TileLayer({
      source: new XYZ({
        url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=" + tdtTk
      })
    })
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

// 菜单项
export const menuMethodBtn = {
  // 公共选项,常驻菜单
  commonMenu: {
    commonMenuMethod0: '地图功能测试',  // 公共选项0
    commonMenuMethod1: '拷贝当前经纬度',  // 公共选项1
    commonMenuMethod2: '清除所有要素',  // 公共选项3
    // commonMenuMethod4: '置顶要素',  // 公共选项4
  },
  // 公共动态选项,每个页面有需要才显示
  commonDynamicMenu: {
    commonDynamicMenuMethod1: '显示当前要素信息',  // 公共动态选项1
    commonDynamicMenuMethod2: '仅取消绘制状态',  // 公共动态选项2
  },
  // 子页动态选项, 单页面显示或单页面有需要显示
  singleMenu: {
    singleMenuMethod1: '刷新地图',  // 子页动态选项1
    // singleMenuMethod1: '刷新地图'  // 子页动态选项1
  },
}

// 主菜单项
const { commonMenu } = menuMethodBtn  // 公共选项,常驻菜单
let menuMethods = []
// 将对象中的值传入数组
for (let i in commonMenu) {
  menuMethods.push(commonMenu[i])
}

/******************************
 * 地图核心辅助方法
 * ****************************
 */
// 判断menu是否存在,不存在新增
const menuAddSingleMethod = (singleMethod) => {
  if (!menuMethods.includes(singleMethod)) {
    menuMethods.push(singleMethod)
  }
}

// 公共动态选项判断
const setCommonMenuMethod = (condition, commonDynamicMenuMethod) => {
  if (condition) {
    menuAddSingleMethod(commonDynamicMenuMethod)
  }
  if (!condition && menuMethods.includes(commonDynamicMenuMethod)) {
    menuMethods = menuMethods.filter(item => item !== commonDynamicMenuMethod)
  }
}

// 根据具体页面配置菜单栏
const setMentBtnExtendByPage = (currentPageType) => {
  const { singleMenu } = menuMethodBtn

  switch (currentPageType) {
    case 'gis':
      menuAddSingleMethod(singleMenu.singleMenuMethod1)
      break;
  }
}

// 移除图层方法
const removeLayer = (olMap, next) => {
  // 获取当前地图上的所有图层
  let layers = olMap.getLayers().getArray();

  // 从地图中移除所有图层
  for (let i = layers.length - 1; i >= 0; --i) {
    if (layers[i] instanceof VectorLayer) {
      next(layers[i])

      // olMap.removeLayer(layers[i])
    };
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
      // anchor: [0.5, 0.5],//图标的锚点,经纬度点所对应的图标的位置，默认是[0.5, 0.5]，即为标注图标的中心点位置
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
  const { commonDynamicMenu } = menuMethodBtn  // 公共动态选项,每个页面有需要才显示

  // 添加右键菜单监听
  olMap.getViewport().addEventListener('contextmenu', e => {
    // console.log(transformToLonlat(olMap.getEventCoordinate(e)))  // 经纬度

    e.preventDefault(); // 阻止默认的右键菜单弹出

    // 屏幕坐标
    const pixelPoint = olMap.getEventCoordinate(e)
    const pixel = olMap.getPixelFromCoordinate(pixelPoint)
    const feature = olMap.forEachFeatureAtPixel(pixel, feature => {
      return feature
    })
    /* if (feature && !menuMethods.includes(commonDynamicMenuMethod1)) {
      menuMethods.push(commonDynamicMenuMethod1)
    } */

    // commonDynamicMenuMethod1
    /**
     * 公共动态选项
     */
    // 判断是否显示当前要素
    setCommonMenuMethod(feature, commonDynamicMenu.commonDynamicMenuMethod1)

    // 判断是否需要显示停止绘制
    // 获取绘制的图形
    const drawInteraction = olMap.getInteractions().getArray().find(
      (interaction) => interaction instanceof Draw
    );
    setCommonMenuMethod(drawInteraction, commonDynamicMenu.commonDynamicMenuMethod2)

    /**
     * 子页动态选项
     */
    // 根据具体页面配置菜单栏
    if (setMenuConfig) {
      setMenuConfig(currentPageType => {
        // console.log('当前页面', currentPageType)

        // 根据具体页面配置菜单栏
        setMentBtnExtendByPage(currentPageType)
      })
    }

    // 重置右键属性菜单
    resetContextMenu(mapWrap => {
      let menu = null

      menu = document.createElement('div');
      menu.setAttribute("class", "menu_wrap");

      // 自定义菜单项
      let tempStr = ''
      menuMethods.forEach(item => {
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

// 取消绘制(点线面)
export const cancelDrawInteraction = (olMap) => {
  // console.log('取消绘制(点线面)', olMap)

  // 获取绘制的图形
  const drawInteraction = olMap.getInteractions().getArray().find(
    (interaction) => interaction instanceof Draw
  );
  // console.log(drawInteraction)

  olMap.removeInteraction(drawInteraction); // 从地图中移除交互
  // vectorLayer.getSource().clear(); // 清除绘制的几何形状
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
export const addPoint = (olMap, pointDataList, isIcon = false, src = '/') => {
  // mapUtils.setPointTest(olMap)

  // 创建点的数据源
  const vectorSource = new VectorSource({
    features: [],
  });

  // 创建点图层
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    zIndex: 1,
    style: !isIcon ? pointCircleStyle : pointIconleStyle(src)
  });

  olMap.addLayer(vectorLayer);

  pointDataList.forEach((item) => {
    const point = new Point(fromLonLat(item.lonlat));
    const feature = new Feature({
      geometry: point,
      type: 'Marker',
      pointData: item.pointData
    });
    vectorSource.addFeature(feature);
  });
}

// 添加线
export const addLine = (olMap, position, lineConfig = {}, style) => {
  // 创建线要素并添加到地图上
  const lineFeature = new Feature({
    // geometry: new LineString([[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]),
    geometry: new LineString(position),
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
export const getLayer = (feature = {}, map = {}) => {
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

  removeLayer(olMap, layerItem => {
    // olMap.removeLayer(layerItem)
    let currentFeature = layerItem.getSource().getFeatures()[0]

    if (currentFeature.get('temp')) {
      olMap.removeLayer(layerItem)
    }
  })

  topLayer.setOpacity(1)
  topLayer.getSource().addFeature(feature);

  olMap.addLayer(topLayer)
}

// 创建文字图层
export const addTextOverlay = (olMap, text, position, textOverlayConfig = {}, isRemove) => {
  // console.log('创建文字图层Overlay', olMap, gridData)

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
      overflow: true, // 允许文本溢出
      rotateWithView: false, // 不随地图旋转
      rotation: 0, // 文本旋转角度
    }),
  });

  if (isRemove) {
    // 清除某类图层
    removeLayer(olMap, layerItem => {
      // olMap.removeLayer(layerItem)
      let currentFeature = layerItem.getSource().getFeatures()[0]

      isRemove(layerItem, currentFeature)
    })
  }



  // 创建文本特征
  const feature = new Feature({
    geometry: new Point(fromLonLat(position)),
    ...textOverlayConfig
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
export const popupCommonConfig = (olMap, pixelPoint, popupData, next, overlayConfig = null,) => {
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

  content.innerHTML = popupData;
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
export const setPopup = (olMap, pixelPoint, popupData, next) => {
  // const pixelPoint = e.coordinate  // 屏幕坐标
  popupCommonConfig(olMap, pixelPoint, popupData, next, {
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

// 移除所有图层
export const removeAllLayer = (olMap) => {
  // console.log(olMap)

  // cancelDrawInteraction(olMap)

  removeLayer(olMap, layerItem => {
    olMap.removeLayer(layerItem)
  })
}

// 根据feature条件删除图层
const removeLayerByFeature = (olMap, condition) => {
  removeLayer(olMap, layerItem => {
    let currentFeature = layerItem.getSource().getFeatures()

    if (condition(currentFeature[0])) {
      olMap.removeLayer(layerItem)
    }
  })
}

// 根据类型移除图层
export const removeLayerByType = (olMap, type) => {
  removeLayerByFeature(olMap, currentFeature => {
    return currentFeature.get('type') === type
  })
}

// 移除所有默认图层
export const removeAllDefaultLayer = (olMap) => {
  // console.log(olMap)

  removeLayerByFeature(olMap, currentFeature => {
    return currentFeature.get('type') === 'Marker' || currentFeature.get('type') === 'Curve'
  })
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

          createPolygon(olMap, { coords, lonlat })

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
export const createPolygon = (olMap, { coords, lonlat, polygonData }, next, polygonStyle = setFeaturesStyle("rgba(0, 255, 0, 0.4)", "rgba(0, 255, 0, 1)")) => {
  // console.log(olMap, coords, lonlat)

  // 创建多边形
  let polygon = new Feature({
    geometry: new Polygon([coords]),
    type: 'Polygon',
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
  // console.log('取消绘制多边形(取消选区)', olMap)

  cancelDrawInteraction(olMap)
}

// 绘制圆
export const addCircle = (olMap, circleItem, isFlicker) => {
  let features = []

  const fillStyle = new Fill({
    color: 'rgba(32, 157, 230, 0.2)'
  })

  let feature = new Feature({
    type: "Circle",
    circleData: circleItem,
    // 圆心 - 半径
    geometry: new Circle(fromLonLat([circleItem.longitude, circleItem.latitude]), 550),
  })
  feature.setStyle(
    new Style({
      fill: fillStyle,
    })
  )
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
          width: 5 - radius / 6, //设置宽度
        }),
      });
      // 获取矢量要素上下文
      let vectorContext = getVectorContext(evt);
      vectorContext.setStyle(pointStyle);
      vectorContext.drawGeometry(feature.getGeometry());
      radius = radius + 0.3; //调整闪烁速度
      //请求地图渲染（在下一个动画帧处）
      olMap.render();
    })
  }
}

// 创建闪烁点
export const addFlickerDom = (olMap) => {
  // console.log('创建闪烁点', olMap)

  /* var point_div = document.createElement('div');
  point_div.className = "css_animation";
  point_overlay = new Overlay({
    element: point_div,
    positioning: 'center-center'
  });
  olMap.addOverlay(point_overlay); */

  // 121.63, 29.88
  // console.log(transformToPixelPoint(121.63, 29.88))

  // point_overlay.setPosition(coordinate);
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
    addLine(olMap, coords, { tempType: 'testDistanceTemp' })

    // 创建文本要素以显示距离
    addTextOverlay(olMap, length + '米', lonlat[0], { tempType: 'testDistanceTemp' })
  });
}

// 取消测距
export const cancelTestDistance = (olMap) => {
  // console.log('取消测距', olMap)

  // 清除某类图层
  removeLayer(olMap, layerItem => {
    // olMap.removeLayer(layerItem)
    let currentFeature = layerItem.getSource().getFeatures()[0]

    if (currentFeature.get('tempType') === 'testDistanceTemp') {
      olMap.removeLayer(layerItem)
    }
  })

  cancelDrawInteraction(olMap)
}

// 添加带箭头的线
export const addArrowLine = (olMap, position, src = '../src/components/OpenlayerBaseMap/icon/arrow.svg') => {
  // console.log('添加带箭头的线', olMap)

  const styleFunction = function (feature) {
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
            // src: 'https://bpic.51yuansu.com/pic2/cover/00/48/42/5815eb37ed3d8_610.jpg',
            // src: 'http://localhost:81/src/assets/icons/svg/checkbox.svg',
            // src: './arrow.svg',
            // src: '../src/components/OpenlayerBaseMap/icon/arrow.svg',
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
  };

  addLine(olMap, position, {}, styleFunction)

  // // 创建线要素并添加到地图上
  // const lineFeature = new Feature({
  //   geometry: new LineString(position),
  // });

  // /* lineFeature.setStyle(new Style({
  //   stroke: new Stroke({
  //     width: 3,
  //     color: 'blue',
  //   }),
  //   fill: new Fill({
  //     color: 'blue',
  //   }),
  // })); */
  // lineFeature.setStyle(styleFunction);

  // const vectorSource = new VectorSource({
  //   features: [lineFeature],
  // });

  // const vectorLayer = new VectorLayer({
  //   source: vectorSource,
  // });

  // olMap.addLayer(vectorLayer);

}

/******************************
 * 测试 
 * ****************************
 */
// 地图功能测试
export const olMapTestCommon = (olMap, feature, pixelPoint) => {
  console.log('地图功能测试', olMap, feature, pixelPoint)
  console.log('经纬度', transformToLonlat(pixelPoint))

  // testDistance(olMap)

  /* let measure = new Draw({
    source: new VectorSource(),
    type: 'LineString',
    style: new Style({
      fill: new Fill({ color: 'rgba(255, 255, 255, 0.2)' }),
      stroke: new Stroke({ color: 'rgba(0, 0, 0, 0.5)', width: 2 })
    })
  })

  olMap.addInteraction(measure);

  measure.on('drawend', (event) => {
    const { feature } = event
    const line = feature.getGeometry();

    let length = getLength(line);

    const coords = line.getCoordinates()
    const lonlat = line.transform('EPSG:3857', 'EPSG:4326').getCoordinates()
    console.log(lonlat)
    console.log('Line length: ' + length + ' meters');

    // 在测距工具容器中显示长度
    // document.getElementById('measure').innerHTML += '<p>' + length.toFixed(2) + ' meters</p>';

    // 清空已绘制的要素
    // source.clear();


    // 创建线要素并添加到地图上
    const lineFeature = new Feature({
      // geometry: new LineString([[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]),
      geometry: new LineString(coords),
    });

    lineFeature.setStyle(new Style({
      stroke: new Stroke({
        width: 3,
        color: 'blue',
      }),
      fill: new Fill({
        color: 'blue',
      }),
    }));
    // lineFeature.setStyle(styleFunction);

    const vectorSource = new VectorSource({
      features: [lineFeature],
    });

    const vectorLayer1 = new VectorLayer({
      source: vectorSource,
    });

    olMap.addLayer(vectorLayer1);



    // 创建文本样式
    const textStyle = new Style({
      text: new Text({
        text: length.toFixed(2) + '米',
        fill: new Fill({ color: '#333333' }),
        // stroke: new Stroke({ color: '#fff', width: 2 }),
        font: '18px pingfang',
        textAlign: 'center', // 文本对齐
        textBaseline: 'bottom', // 文本基线
        padding: [5, 10, 5, 10], // 文本周围的填充
        overflow: true, // 允许文本溢出
        rotateWithView: false, // 不随地图旋转
        rotation: 0, // 文本旋转角度
      }),
    });

    // // 清除某类图层
    // removeLayer(olMap, layerItem => {
    //   // olMap.removeLayer(layerItem)
    //   let currentFeature = layerItem.getSource().getFeatures()[0]

    //   if (currentFeature.get('tempType') === 'ceju') {
    //     olMap.removeLayer(layerItem)
    //   }
    // })


    // 创建文本特征
    const featurettt = new Feature({
      // geometry: new Point(fromLonLat(gridData.centerCoordinates)),
      geometry: new Point(fromLonLat(lonlat[0])),
      tempType: 'ceju'
    });

    // 设置特征的样式
    featurettt.setStyle(textStyle);

    // 创建文本图层
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [featurettt],
      }),
    });

    // 将文本图层添加到地图
    olMap.addLayer(vectorLayer);
  }); */


  /* // 创建测距工具
  var measure = new Draw({
    source: new VectorLayer(),
    type: 'LineString',
    style: new Style({
      fill: new Fill({ color: 'rgba(255, 255, 255, 0.2)' }),
      stroke: new Stroke({ color: 'rgba(0, 0, 0, 0.5)', width: 2 })
    })
  });
  // 添加测距工具到地图
  olMap.addInteraction(measure);

  measure.on('drawend', (event) => {
    const line = event.feature.getGeometry();
    const length = getLength(line);
    console.log('Line length: ' + length + ' meters');

    // 在测距工具容器中显示长度
    // document.getElementById('measure').innerHTML += '<p>' + length.toFixed(2) + ' meters</p>';

    // 清空已绘制的要素
    // source.clear();
  }); */

  // 监听地图单击事件，用于删除测距工具绘制的要素
  /* olMap.on('click', function (event) {
    var feature = olMap.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
      return feature;
    });

    if (feature) {
      // source.removeFeature(feature);
    }
  }); */
  /* // 监听绘制结束事件
  measure.on('drawend', function (event) {
    var geometry = event.feature.getGeometry();
    var coordinates = geometry.getCoordinates();
    var length = getLength(coordinates);

    // 在测距工具容器中显示长度
    document.getElementById('measure').innerHTML += '<p>' + length.toFixed(2) + ' meters</p>';

    // 清空已绘制的要素
    source.clear();
  }); */

  /* const vectorLayer = new VectorLayer({
    source: new VectorSource(),
    style: new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)',
      }),
      stroke: new Stroke({
        color: '#ffcc33',
        width: 2,
      }),
      image: new CircleStyle({
        radius: 7,
        fill: new Fill({
          color: '#ffcc33',
        }),
      }),
    }),
  });

  const draw = new Draw({
    source: vectorLayer.getSource(),
    type: 'LineString',
  });

  olMap.addInteraction(draw);

  draw.on('drawend', (event) => {
    const line = event.feature.getGeometry();
    const length = getLength(line);
    console.log('Line length: ' + length + ' meters');
  }); */

  /* let position = [[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]
  addArrowLine(olMap, position) */

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