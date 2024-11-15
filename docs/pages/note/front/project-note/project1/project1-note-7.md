# openlayer主要工具
> 前文我们总结了openlayer的总体封装思路,本文将介绍在这层封装中最主要的几项功能

## 地图初始化及切换底图功能
- `OpenlayerBaseMap/index.vue`
```vue
<template>
    <section class="ol_map_wrap">
        <!-- 地图 -->
        <section id="olMap" class="ol_map"></section>

        <!-- 这里将工具全部列出来,下文就不展示html的内容了 -->
        <!-- 图例 -->
`       <lend ref="refLend" :currentPageType="currentPageType" :isShowLend="isShowLend" />

        <!-- 切换底图控件 -->
        <switch-base-layer @switchBaseLayerType="switchBaseLayerType" />

        <!--  气泡窗 -->
        <popup-common ref="refPopupCommon" :currentPageType="currentPageType" />`

        <!-- 切换天地图token 弹窗 -->
        <set-token-dialog ref="refSetTokenDialog" />
    </section>
</template>

<script>
// vue - core
import { ref, onMounted, defineEmits, nextTick } from "vue";
// map - core
import * as mapUtils from "./mapUtils.js";
// 组件
import PopupCommon from "./components/popup/PopupCommon.vue"; // 气泡窗
import Lend from "./components/Lend.vue"; // 图例
import SwitchBaseLayer from "./components/SwitchBaseLayer.vue"; // 切换底图控件
import SetTokenDialog from "./components/SetTokenDialog.vue"; // 切换天地图token
// store
import { gisDataStore } from '@/store/modules/gis.js'

// 自定义事件
const emit = defineEmits([
  // 全局
  "getOlMapInstance",
  "getCurrentViewData",
  "reflashMap",
]);

// ref
const refPopupCommon = ref(null);
const refLend = ref(null);
const refSetTokenDialog = ref(null);

// 地图数据
let myOlMap = null;
const mapCommonData = {
  minRenderZoom: mapUtils.minRenderZoom, // 最小渲染层级
};

// 销毁地图
const destroyMap = (olMap) => {
  if (olMap) {
    mapUtils.destroyMap(olMap)
  }
}

// 初始化地图
const resetOlMap = () => {
  destroyMap(myOlMap)

  const olMap = mapUtils.initOlMap("olMap"); // 初始化地图

  mapInit(olMap); // 地图加载完初始化做的一些操作
  getMapInitInfo(olMap); // 地图加载完初始化后获取地图的一些信息
  setOlmap(olMap); // 设置地图
}

// 地图加载完初始化做的一些操作
const mapInit = (olMap) => {
  // console.log('地图加载完初始化做的一些操作', olMap)
  myOlMap = olMap; // 赋值全局变量,为后续业务操作做准备

  // 地图加载完初始化做的一些操作[业务相关]
  emit("getOlMapInstance", olMap, mapCommonData); // 向外供出olMap实例,以及一些公共数据

  mapUtils.resetControls(olMap); // 初始化所有控件

  // 设置鼠标右键属性
  // ......
};

// 地图加载完初始化后获取地图的一些信息
const getMapInitInfo = (olMap) => {
  // console.log("地图加载完初始化后获取地图的一些信息", olMap)

  // 获取可视区域数据 - 如果不需要自动加载
  if (!props.isAutoRenderData) {
    // console.log('刷新加载地图', props.isAutoRenderData)
    emit("getCurrentViewData", olMap); // 地图加载时会自动触发一次
  }
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
 * vue生命周期函数
 * 挂载后触发
 */
onMounted(() => {
  resetOlMap()  // 初始化地图

  switchBaseLayerType('t3imgPrivatization')  // 页面初始化时加载默认底图(有时候加载不出来)
});
</script>
```
- `OpenlayerBaseMap/mapUtils.js`
```js
// 加载地图核心方法
let tdtTk = import.meta.env.VITE_APP_MapToken  // 全局配置 - 天地图密钥
const gisStoreData = gisDataStore()

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
  getBaseMapLayer(item) {
    switch (item) {
      case 't3imgPrivatization':
        return setLayerUrl("/wtms/googlemaps/satellite/{z}/{y}/{x}.png", false)
      case 't0vec':
        return setLayerUrl("http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=")  // 街道底图
      case 't3img':
        return setLayerUrl("http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=")  // 卫星(影像)底图
      case 't4ter':
        return setLayerUrl("http://t4.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=")  // 地形底图
      case 't07vec':
        return setLayerUrl("http://t{0-7}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=")  // 街道底图2
      case 't07img':
        return setLayerUrl("http://t{0-7}.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=")  // 卫星底图2
    }
  },
  getBaseMapTxt(item) {
    switch (item) {
      case 'empty':
        return setLayerUrl('', false)  // 空注记
      case 't0cva': // 街道图注记
        return setLayerUrl("http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=")  // 街道图注记
      case 't4cva': // 地形图注记
        return setLayerUrl("http://t4.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=")  // 地形图注记
      case 't07cia': // 卫星图注记
        return setLayerUrl("http://t{0-7}.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=")  // 卫星图注记
      case 't07cva': // 卫星图注记
        return setLayerUrl("http://t{0-7}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=")  // 卫星图注记
    }
  }
}

// 设置底图url
const setLayerUrl = (url, hasToken = true) => {
  if (gisStoreData.mapToken !== '') {
    tdtTk = gisStoreData.mapToken
  }
  if (hasToken) {
    return url + tdtTk
  }
  return url
}

// 初始化地图
export const initOlMap = (target) => {
  return new Map({
    target,
    layers: mapInitConfig.layers,
    view: mapInitConfig.view,
    interactions: defaults({ mouseWheelZoom: true })  // 禁止缩放
  });
}
// 地图初始化配置
const mapInitConfig = {
  // ol地图底图 - 默认街道底图
  layers: [
    // 天地图底图
    setBaseMapLayer(baseLayerUrlConfig.getBaseMapLayer('t3imgPrivatization')),  // 私有化底图
    // 天地图注记
    setBaseMapTxt(baseLayerUrlConfig.getBaseMapTxt('empty')),
  ],
  // ol地图基本配置 - View默认使用EPSG3857坐标系
  view: new View({
    center: fromLonLat([121.63, 29.88]),
    zoom: 16,
    maxZoom: 17,
    minZoom: 13,
    constrainResolution: true,  // 设置缩放级别为整数 
    smoothResolutionConstraint: false,  // 关闭无级缩放地图
  }),
}
// 创建底图基础配置
const createBaseLayerConfig = (url, layerSourceConfig = {}, layerConfig = {}) => {
  return new WebGLTile({
    source: new XYZ({
      url,
      ...layerSourceConfig
    }),
    type: 'baseLayer',
    url,
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

// 其他工具方法
// 销毁地图
export const destroyMap = (olMap) => {
  if (olMap) {
    // 销毁所有图层
    olMap.getLayers().forEach(function (layer) {
      layer.setMap(null);
    });

    // 销毁视图
    olMap.setView(null);

    // 销毁地图实例
    olMap.setTarget(null);
    olMap = null;
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

// 切换地图底图
export const switchBaseLayer = (olMap, type) => {
  let txtType = ''

  switch (type) {
    // 私有化底图
    case 't3imgPrivatization':
      txtType = 'empty'  // 卫星图注记
      break
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
      txtType = 't4cva'  // 地形图注记`
      break
  }

  // 天地图底图
  let newBaseMapLayer = setBaseMapLayer(baseLayerUrlConfig.getBaseMapLayer(type))
  // 天地图注记
  let newBaseMapTxt = setBaseMapTxt(baseLayerUrlConfig.getBaseMapTxt(txtType))

  console.log('当前天地图token:', tdtTk)
  console.log('当前天地图底图地址:', newBaseMapLayer.values_.url)
  console.log('当前天地图注记地址:', newBaseMapTxt.values_.url)

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
          if (newBaseMapTxt !== '') {
            olMap.removeLayer(item)
            mapLayers.insertAt(index, newBaseMapTxt)
          }

          if (newBaseMapTxt === '') {
            let newBaseMapTxtTmp = setBaseMapTxt('')
            olMap.removeLayer(item)
            mapLayers.insertAt(index, newBaseMapTxtTmp)
          }

          break
      }
    }
  })
}
```

## 右键菜单封装
```js
// OpenlayerBaseMap/index.vue
// 地图加载完初始化做的一些操作
const mapInit = (olMap) => {
    // ......

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
  // ......

  menuUtils.setMenuMethods(myOlMap, option, feature, pixelPoint, proxy)
};

// OpenlayerBaseMap/mapUtils.js
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

      if (!currentFeature) {
        return
      }

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

// menuUtils.js
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
        commonMenuMethod3: '切换天地图token',  // 公共选项3
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

                mapUtils.addFlickerPoint(olMap, pixelPoint);
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
            // 切换天地图token
            case commonMenu.commonMenuMethod3:
                // console.log("切换天地图token");

                mittBus.emit("showSetTokenDialog");
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

## 右键菜单修改token功能
```js
// OpenLayerBaseMap/menuUtils.js
mittBus.emit("showSetTokenDialog");

// OpenLayerBaseMap/index.vue
// 切换天地图token
mittBus.on("showSetTokenDialog", () => {
  refSetTokenDialog.value?.show();
})
// 根据不同token初始化地图
mittBus.on("initOlMapByToken", () => {
  resetOlMap()  // 初始化地图
});

// OpenLayerBaseMap/components/setTokenDialog.vue
<div class="dialog_wrap">
    <p>当前token: {{ currentToken }}</p>
    <el-autocomplete v-model="selectedToken" style="width: 65%;" :fetch-suggestions="querySearch"
        popper-class="my-autocomplete" placeholder="请选择或者输入" @select="handleSelect" clearable>
        <template #suffix>
        </template>
        <template #default="{ item }">
            <div class="input_wrap" :class="{ current_selected: item.value === currentToken }">
                <h3>{{ item.name }} <span v-if="item.value === currentToken">- 当前token</span></h3>
                <span>{{ item.value }}</span>
            </div>
        </template>
    </el-autocomplete>
    <el-button type="primary" style="margin-left: 25px;" @click="setTokenData"
        :disabled="selectedToken === ''">
        确定
    </el-button>
</div>

import { gisDataStore } from '@/store/modules/gis.js'  // store

const { setMapToken } = gisDataStore()
const gisStoreData = gisDataStore()

let currentToken = ref(import.meta.env.VITE_APP_MapToken)

const selectedToken = ref('')
const links = ref([])

const querySearch = (queryString, cb) => {
    const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value
    // call callback function to return suggestion objects
    cb(results)
}
const createFilter = (queryString) => {
    return (restaurant) => {
        return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
    }
}

const handleSelect = (item) => {
    setMapToken(item.value)
}

const setTokenData = () => {
    if (selectedToken.value.length !== 32) {
        ElMessage.warning("请输入正确的token")
        return
    }

    // 初始化地图
    mittBus.emit('initOlMapByToken')
    mittBus.emit('resetSwitchLayer')
    refDialogInfo.value.hide()

    currentToken.value = selectedToken.value
}


onMounted(() => {
    links.value = loadAll()
})

const loadAll = () => {
    return [
        { name: 'token1', value: 'xxxxxx' },
        { name: 'token2', value: 'xxxxxx' },
        { name: 'token3', value: 'xxxxxx' },
        { name: 'token4', value: 'xxxxxx' },
        { name: 'token5', value: 'xxxxxx' },
    ]
}

// OpenlayerBaseMap/components/SwitchBaseLayer.vue
// 根据不同token初始化地图
mittBus.on("resetSwitchLayer", () => {
  ruleForm.value.layerType = 't3imgPrivatization'
});
```

## 气泡窗封装
> 点击标注弹出气泡窗,所以需要捕捉点击事件
```js
// OpenLayerBaseMap/index.vue
// 设置地图
const setOlmap = (olMap) => {
  mapEvent(olMap); // 地图事件
};

const mapEvent = (olMap) => {
    // 监听鼠标单击事件
    olMap.on("singleclick", (e) => {
        // 这里需要判断点击的目标是否重叠,点击的是什么类型的图形
        let pixel = olMap.getEventPixel(e.originalEvent);
        let featureList = olMap.getFeaturesAtPixel(pixel); // 点击时获取所有features

        // 这里为举例,假定点击的目标非重叠,且只是一个marker类型的feature
        if(featureList.length === 1) {
            singleFeaturesClick(olMap, featureList[0], e.coordinate);
        }
    })
}

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
  // ......

  // 点击多边形
  // ......
};

// OpenlayerBaseMap/components/popup/PopupCommon.vue
// 通用信息展示弹窗
const setCommonPopup = (olMap, pixelPoint, popupData, featureItem) => {
  // console.log("点击标注弹出气泡", olMap, popupData, featureItem);

  // 判断是否有返回图标,有则删除 - 不为业务气泡窗不删除
  let popupBackDom = document.querySelector(`#popupBack`)
  if (popupBackDom) {
    if (featureItem && !featureItem.get('businessType')) {
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

// 气泡弹出窗点击事件
const popupClickEvent = async (e) => {
  // console.log("气泡弹出窗点击事件", e)

  const { target } = e; // 事件对象
  // console.log("点击气泡窗返回气泡窗中的dom对象", target);

  // 当前dom绑定的函数
  let dataFunction = target.getAttribute("data-function");

  // 点击气泡窗获取更多
  if (dataFunction === "getMore") {
    // console.log("点击气泡窗获取更多");
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

// 点击气泡窗获取更多
const getMore = () => {
  // console.log("点击气泡窗获取更多"); 
  // 气泡窗点击更多 - 子组件使用
  // console.log('气泡窗点击更多 - 子组件使用', currentPopupObj)

  mittBus.emit("popupDataGetMore", {
    currentPopupObj,
    callback: (popupData) => {
      // console.log("fwdsdfsw", popupData);

      // 获取完数据后进行弹窗
      showPopupDialog(popupData, props.currentPageType); // 显示气泡弹出窗
    },
  });
};

// OpenlayerBaseMap/mapUtils.js
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
  // console.log('container', container)
  let closer = document.getElementById('popup-closer');
  // let content = document.getElementById('popup-content');
  container.style.display = 'block'

  let overlay = new Overlay({
    element: container, //绑定 Overlay 对象和 DOM 对象的
    ...overlayConfig,
    zIndex: 9999,
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

// OpenlayerBaseMap/components/popup/popupInner.js
// 通用气泡窗
export const commonPopupInner = (popupObj, featureItem) => {
    mittBus.emit('setCommonPopupInner', {
        popupObj, featureItem, callback: (popupInnerDom) => {
            // 使用jsx,不需要return,直接将jsx结构render到dom即可
            render(popupInnerDom, innerDom())
        }
    })
}

// 业务代码gis
import { getPopupInnerDom, getPOIPopupInnerDom } from "./components/popup/gisPopup.jsx"; // 气泡窗dom
//  气泡窗点击更多 - 子组件使用
mittBus.on("popupDataGetMore", async ({ currentPopupObj, callback }) => {
  // console.log("气泡窗点击更多111", currentPopupObj);

  if (!currentPopupObj.currentPopupData && currentPopupObj.popupData) {
    currentPopupObj.currentPopupData = currentPopupObj.popupData
  }

  // 或者走接口,根据cgi获取详情
  const currentPopupAsyncObj = await apiCommon(gisApi.queryCellByCgi, {
    cgi: currentPopupObj.currentPopupData ? currentPopupObj.currentPopupData.cgi : currentPopupObj.cgi,
  });
  // console.log(currentPopupAsyncObj)

  if (!currentPopupAsyncObj.data) {
    proxy.$modal.msgWarning(currentPopupAsyncObj.msg);
    return
  }

  switch (currentPopupAsyncObj.data.networkType) {
    case "4g":
      currentPopupObj.currentPopupData = currentPopupAsyncObj.data.cell4g;
      currentPopupObj.currentPopupData.networkType = "4g";
      currentPopupObj.currentPopupData.newCellName = currentPopupObj.currentPopupData.cellName;
      break;
    case "5g":
      currentPopupObj.currentPopupData = currentPopupAsyncObj.data.cell5g;
      currentPopupObj.currentPopupData.networkType = "5g";
      currentPopupObj.currentPopupData.newCellName = currentPopupObj.currentPopupData.nrCellName;
      break;
  }

  // 获取完数据后进行弹窗
  callback(currentPopupObj.currentPopupData);
});
// 设置通用气泡窗html
mittBus.on("setCommonPopupInner", ({ popupObj, featureItem, callback }) => {
  // console.log("设置通用气泡窗html", popupObj, featureItem);

  if (!featureItem) {
    let currentPopupData = popupObj.currentPopupData
    if (!currentPopupData) {
      currentPopupData = popupObj.popupData
    }
    if (currentPopupData.searchType === 'POI') {
      callback(getPOIPopupInnerDom(popupObj));
      return
    }
    callback(getPopupInnerDom(popupObj));
    return
  }

  if (featureItem.get('businessType') === 'POIMarker') {
    callback(getPOIPopupInnerDom(popupObj));
    return
  }
  callback(getPopupInnerDom(popupObj));
});

// components/popup/gisPopup.jsx
import { ElDescriptions, ElDescriptionsItem } from "element-plus";

export const getPopupInnerDom = (popupObj) => {
    let popupData = null;

    if (popupObj.currentPopupData) {
        popupData = popupObj.currentPopupData;
    } else {
        popupData = popupObj.popupData;
    }

    return (
        <>
            <div class="common_popup_item">
                <ElDescriptions title={popupData.newCellName} border class="margin-top" column={2} size="small">
                    <ElDescriptionsItem label="xxx">{popupData.county}</ElDescriptionsItem>
                    <ElDescriptionsItem label="xxx">{popupData.cgi}</ElDescriptionsItem>
                    {popupData.antDirectionAngle && (
                        <ElDescriptionsItem label="xxx">{popupData.antDirectionAngle}°</ElDescriptionsItem>
                    )}
                    <ElDescriptionsItem label="经纬度">[{popupData.longitude}, {popupData.latitude}]</ElDescriptionsItem>
                </ElDescriptions >

                <span class='get_more' data-function="getMore">查看更多</span>
            </div>
        </>
    );
};

export const getPOIPopupInnerDom = (popupObj) => {
    let popupData = null;

    if (popupObj.currentPopupData) {
        popupData = popupObj.currentPopupData;
    } else {
        popupData = popupObj.popupData;
    }

    return (
        <>
            <div class="common_popup_item">
                <h3>POI搜索结果</h3>
                <ul>
                    <li>
                        <dl>
                            <dt>地址:</dt>
                            <dd>{popupData.address}</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>名称:</dt>
                            <dd>{popupData.name}</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>经纬度:</dt>
                            <dd>[{popupData.lonlat}]</dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </>
    );
};
```