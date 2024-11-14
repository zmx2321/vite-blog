# openlayer工具库封装流程

## 目录结构
> 原则是公共的地图部分进行封装,业务上的内容由业务组件单独编写
> 地图的引入只在一个js文件里面引入,业务组件中不引入地图,只进行渲染
> 维护一个公共的地图工具组件,所有的地图核心方法都放在这个工具组件中,业务组件只调用工具组件中的方法
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
            ├── SelectDetailDialog.vue  // 公共弹窗 - 个性化定制
            ├── SetTokenDialog.vue  // 自定义token - 个性化定制
        ├── icon
        ├── index.vue  // openlayer核心组件,供出核心方法
        ├── mapUtils.js  // openlayer核心封装代码
        ├── menuUtils.js // openlayer右键菜单
    ├── views
        ├── gis
            ├── index.vue  // 业务相关代码
```

## `mapUtils.js`工具库
```js
/******************************
 * 所有引入库
 * ****************************
 */
// map core
import 'ol/ol.css'
import { Map, View } from 'ol';
// ......其他引入

/******************************
 * openlayer功能方法封装
 * ****************************
 */
export const removeAllLayer = (olMap) => {
  // 以removeAllLayer移除所有图层为例
}
// ......其他方法
```

## openlayer核心组件
> openlayer核心组件,供出核心方法
```vue
<template>
  <!-- 地图 -->
  <section id="olMap" class="ol_map"></section>
</template>

<script setup>
// map - core
import * as mapUtils from "./mapUtils.js";

// 移除所有图层
const removeAllLayer = (olMap) => {
  mapUtils.removeAllLayer(olMap);
};

// 初始化地图
const resetOlMap = () => {
  if (myOlMap) {
    mapUtils.destroyMap(myOlMap)
  }

  const olMap = mapUtils.initOlMap("olMap"); // 初始化地图

  mapInit(olMap); // 地图加载完初始化做的一些操作
  getMapInitInfo(olMap); // 地图加载完初始化后获取地图的一些信息
  setOlmap(olMap); // 设置地图
}

onMounted(() => {
  resetOlMap()  // 初始化地图
});

/**
 * 暴露方法
 */
defineExpose({
  removeAllLayer, // 移除所有图层
})
</script>
```

## 业务组件 - openlayer工具库使用
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

    refOpenlayerBaseMap.value.removeAllLayer(olMap); // 移除所有图层
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