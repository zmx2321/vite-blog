# openlayer工具库封装

## 目录结构
```js
├── src
    ├── components
    ├── OpenlayerBaseMap
        ├── components
            ├── popup  // 气泡窗
                ├── PopupCommon.vue  // openlayer气泡窗封装
                ├── popupInner.js  // openlayer气泡窗内容工具方法
            ├── DetailDialog.vue  // 弹窗封装
            ├── Lend.vue  // 图例
            ├── SwitchBaseLayer.vue  // 底图切换工具
            ├── SelectDetailDialog.vue  // 公共弹窗
        ├── icon
        ├── index.vue  // openlayer核心组件,供出核心方法
        ├── mapUtils.js  // openlayer核心封装代码
        ├── menuUtils.js // openlayer右键菜单
    ├── views
        ├── gis
            ├── index.vue  // 业务相关代码
```

## openlayer工具库使用
> 无业务页面
```vue
<template>
    <openlayer-base-map class="openlayer_map" 
                        ref="refOpenlayerBaseMap" 
                        :isShowLend="false"
                        :currentPageType="'empty-map'" 
                        @getOlMapInstance="getOlMapInstance" 
                        @getCurrentViewData="getCurrentViewData">
    </openlayer-base-map>
</template>

<script setup>
// vue - core
import { ref, onUnmounted } from "vue";
// 组件
import OpenlayerBaseMap from "@/components/OpenlayerBaseMap/index.vue";

const refOpenlayerBaseMap = ref(null); // 地图核心元素
const { proxy } = getCurrentInstance();

let myOlMap = null;
let myMapCommonData = null;

/**
 * 业务方法
 */
// 获取地图实例 - 地图加载完初始化做的一些操作[业务相关]
const getOlMapInstance = (olMap, mapCommonData) => {
    // console.log("获取地图实例 - 地图加载完初始化做的一些操作[业务相关]", olMap);

    myOlMap = olMap; // 赋值全局变量,为后续业务操作做准备
    myMapCommonData = mapCommonData;

    // console.log(myOlMap, myMapCommonData)
};
// 获取可视区域数据 (主入口)
const getCurrentViewData = async (olMap) => {
    console.log('获取可视区域数据 (主入口)', olMap, getCurrentPositionParams(olMap))
};

/**
 * 工具方法
 */
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
</script>
```

## `mapUtils.js`文件构成
```js
/******************************
 * 所有引入库
 * ****************************
 */
// map core
import 'ol/ol.css'
import { Map, View } from 'ol';
// map 加载底图相关
import { /* OSM, */ XYZ, Vector as VectorSource, Cluster } from 'ol/source';
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
import { KML, GeoJSON } from 'ol/format';
// 选择多边形
import { Draw, defaults/* , Modify, Snap */ } from 'ol/interaction';
// render
import { getVectorContext } from "ol/render";
// 菜单栏
import menuUtils from './menuUtils.js'

/******************************
 * 所有引入库
 * ****************************
 */
```

## openlayer工具库封装流程
> 以`removeAllLayer`移除所有图层为例
- `mapUtils.js`
```js
// 移除所有图层
export const removeAllLayer = (olMap) => {
  removeAllOverlay()  // 移除地图Overlay元素

  cancelDrawInteraction(olMap)  // 取消绘制(点线面)

  getAllLayer(olMap, layerItem => {
    olMap.removeLayer(layerItem)
  })
}

/******************************
 * 地图核心辅助方法 - 不供出
 * ****************************
 */
// 获取当前绘制状态
const getDrawInteraction = (olMap) => {
  // 获取绘制的图形
  return olMap.getInteractions().getArray().find(
    (interaction) => interaction instanceof Draw
  );
}

/******************************
 * 需要供出外部使用,也需要内部使用
 * ****************************
 */
// 取消绘制(点线面)
export const cancelDrawInteraction = (olMap) => {
  // console.log('取消绘制(点线面)', olMap)

  // 获取绘制的图形
  const drawInteraction = getDrawInteraction(olMap)

  olMap.removeInteraction(drawInteraction); // 从地图中移除交互
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
```