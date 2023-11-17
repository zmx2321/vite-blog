# 在vue2中使用MapLibre

> [演示](https://zmx2321.github.io/vue_demo/#/mapbox1)

## 1. mapLibre和mapbox官网地址
- mapLibre
  - https://maplibre.org
  - https://maplibre.org/maplibre-gl-js-docs/example
- mapbox
  - https://www.mapbox.com/
  - https://docs.mapbox.com/mapbox-gl-js/example

## 2. 在vue中引入并使用
- yarn add maplibre-gl
- 使用
- 在public的index.html中添加
  - `<link href='https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css' rel='stylesheet' />`
- 默认配置
```html
<!-- 创建一个地图容器 -->
<div id='glMap' class="glMap_cont" style='width: 100%; height: 100%;' v-loading="mapLoading"></div>

<script>
  import maplibregl from 'maplibre-gl';
  //初始化地图实例
  let map = new maplibregl.Map({
    container: 'glMap', //容器的id
    // style: './static/map.json', //地图描述数据的路径
    center: [0, 0], // 初始位置，经度纬度 [lng, lat]
    zoom: 1, // 初始缩放
    antialias: true, //抗锯齿
  });
</script>
```

## 3. 封装初始化地图方法
- mapConfig.js => 地图初始配置
```js
const SOURCES = {
    WMS: 'WMS',
    CITIES: 'CITIES',
};
const LAYERS = {
    STATE_FILL: 'city-fills',
};

export const glMapConfigSingle = (id, geoData, center, zoom) => {
    return {
        container: id, //容器的id
        center: center ? center : [120.5, 28.8], // 初始位置，经度纬度 [lng, lat]
        zoom: zoom ? zoom : 6.5, // 初始缩放
        pitch: 20,
        antialias: true, //抗锯齿
        style: {
            version: 8,
            sources: {
              [SOURCES.WMS]: {
                type: 'raster',
                tileSize: 256,
              },
              [SOURCES.CITIES]: {
                type: 'geojson',
                data: geoData,
                generateId: true,
              },
            },
            layers: [
                {
                  id: 'city-shadow',
                  type: 'fill',
                  source: SOURCES.CITIES,
                  layout: {},
                  paint: {
                    'fill-color': '#0239A8',
                    'fill-translate': [5, 10],
                    'fill-translate-anchor': 'viewport',
                  },
                },
                {
                  id: 'city-shadow-light',
                  type: 'line',
                  source: SOURCES.CITIES,
                  layout: {},
                  paint: {
                    'line-color': '#02FDFE',
                    'line-width': 2,
                    'line-translate': [5, 10],
                    'line-translate-anchor': 'viewport',
                  },
                },
                {
                  // 市
                  id: LAYERS.STATE_FILL,
                  type: 'fill',
                  source: SOURCES.CITIES,
                  layout: {},
                  paint: {
                    'fill-color': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        '#26E3F0',
                        '#1151B1',
                    ],
                  },
                },
                {
                  // 市界
                  id: 'city-borders',
                  type: 'line',
                  source: SOURCES.CITIES,
                  layout: {},
                  paint: {
                      'line-color': '#1cccff',
                      'line-width': 0.5,
                      'line-opacity': 0.7,
                  },
              },
            ],
        },
    }
}
```
- mapUtils.js => 地图核心配置
```js
import maplibregl from 'maplibre-gl';
import { glMapConfigSingle } from './mapData/mapConfig'  // config
import zhejiangGeo from './mapData/geoData/zhejiang';  // 普通浙江

/******************************
 * 地图工具
 * ****************************
 */
// 初始化地图
const mapInitTool = (mapconfig, geoData, center, zoom) => {
    return new maplibregl.Map(mapconfig('glMap', geoData, center, zoom));  // 初始化地图
}
// 渲染geojson
const renderGeo = (geoData, map, className, isSet=false, next) => {
    // console.log(geoData)

    geoData.features.forEach(item=> {
      let { properties } = item
      let { name, centroid } = properties

      if(!centroid) {
          centroid = properties.center
      }

      let el = document.createElement('div');
      el.innerHTML = `<div class="title">${name}</div>`;
      el.className = `city-label ${className}`;

      // 是否需要定制化
      if(isSet) {
          next(el, item, name)
      }

      new maplibregl.Marker({ element: el, anchor: 'center' }).setLngLat(centroid).addTo(map);
    })
}
// 添加面
const addMapLayer = (map, geoData, idName , color, opacity)=> {
    // 添加Source，类型是geojson
    map.addSource(idName, {       
        'type': 'geojson',
        'data': geoData
    });
    // 添加面
    map.addLayer({
        'id': idName,
        'type': 'fill',  // fill类型layer
        'source': idName,         
        'layout': {},
        'paint': {
            'fill-color': color,  // fill颜色
            'fill-opacity': opacity ? opacity : 0.7  // fill透明度
        }
    });
    // 添加线
    map.addLayer({
      'id': idName + '_line',
      'type': 'line',
      'source': idName,
      'layout': {},
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": { 
        "line-color": '#fff',
        "line-width": 1,
        "line-dasharray": [2, 4],
      }
  });
}

/******************************
 * 地图供出方法
 * ****************************
 */
/**
 * 地图核心方法供出
 */
// 地图配置
export const setMapConfig = (map)=> {
    // 添加相关的地图控件
    map.addControl(new maplibregl.FullscreenControl(),'top-right'); 

    // this.glMap.addControl(new maplibregl.NavigationControl()); 
    // this.glMap.scrollZoom.disable();  // 禁用地图缩放
}
// 设置标注
export const setMarkerCommon = (el, lonlat, popup, map)=> {
    // 如果map为空，表示三个参数
    if(!map) {
        // 无气泡
        let map = popup
        new maplibregl.Marker(el)
        .setLngLat(lonlat)
        .addTo(map);
    } else {
        // 有气泡
        new maplibregl.Marker(el)
        .setLngLat(lonlat)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
    }
}
// 设置气泡
export const setPopupCommon = (map, linlat, inner)=> {
    return new maplibregl.Popup({ closeOnClick: true })
    .setLngLat(linlat)
    .setHTML(inner)
    .addTo(map);
}

/**
 * 地图数据及渲染方法供出
 */
/**
 * 浙江
 */
export const zhejiangMap = () => {
    return mapInitTool(glMapConfigSingle, zhejiangGeo)
}
export const renderGeoToZheJiang = map => {
    renderGeo(zhejiangGeo, map, 'zhejiang')
}

/**
 * 上海
 */
export const shanghaiMap = () => {
    // return mapInitTool(glMapConfigSingle, shanghaiGeo, [121.5, 31.1], 8.3)
    return mapInitTool(glMapConfigSingle, shanghaiGeo, [121.4, 31.2], 8.9)
}
export const renderGeoToShangHai = map => {
    renderGeo(shanghaiGeo, map, 'shanghai')
}
```
- MapMain.vue => 地图核心文件
```vue
<template>
  <div id='glMap' class="glMap_cont" style='width: 100%; height: 100%;' v-loading="mapLoading"></div>

  <!-- 图例 -->
  <map-lend ref="mapLendRef" @removePopup="removePopup" />
</template>

<script>
// map-core
import * as mapUtils from './mapUtils'

export default {
  data() {
    return {
      glMap: null,
      mainPopupData: {
        mpdt0: 'xxx',
      }, 
      type0Data: {
        type0dt1: 'xxxx',
        type0dt2: 'xxxx',
        type0table: {
          columns: ['指标', '数据'],
          type0tbData: [
            {
              type0tdCol1: 'xxx',
              type0tdCol2: {
                num: '123',
                unit: '万'
              }
            },
            {
              type0tdCol1: 'xxx',
              type0tdCol2: {
                num: '456',
                unit: '万'
              }
            },
          ]
        }
      }
      tabCurrent: '浙江'
    }
  }
  computed: {
    mainPopup() {
      return `<section class="popupp_wrap main_popupp">
                <ul>
                  <li>${this.mainPopupData.mpdt0}</li>
                </ul>
              </section>`
    },
    // type0气泡
    type0Popup() {
      /**
       * table
       */
      let tbThStr = '' 
      let tbTbdStr = '' 
      this.type0Data.type0table.columns.forEach(item=> {
        tbThStr += `<th>${item}</th>`
      })
      this.type0Data.type0table.type0tbData.forEach(item=> {
        tbTbdStr += `<tr>
          <td>${item.cszhtdCol1}</td> 
          <td>${typeof item.cszhtdCol2 === 'object' ? '<span>'+ item.cszhtdCol2.num +'</span>' + item.cszhtdCol2.unit : item.cszhtdCol2}</td> 
        </tr>`
      })

      return `<section class="popupp_wrap gaosushiyou_popupp">
                <ul>
                  <li>名称：${this.type0Data.type0dt1}</li>
                  <li>简介：${this.type0Data.type0dt2}</li>
                </ul>
                <table>
                  <thead>
                    <tr>
                      ${tbThStr}
                    </tr>
                  </thead>
                  <tbody>
                      ${tbTbdStr}
                  </tbody>
                </table>
              </section>`
    },
  },
  methods() {
    /**
     * map init
     */
    // 重置地图
    resetMap(next) {
      this.removeAllMarker()

      if(this.glMap) {
        this.glMap.remove()
      }

      if(next) {
        next()
      }
    },
    // 初始化地图
    initMapConfig(next) {
      this.resetMap(()=> {
        next()

        // console.log('开始打点')
        mapUtils.setMapConfig(this.glMap)  // 地图配置
        this.glmapEvent()  // 绑定事件
      })
    },

    /**
     * map tools
     */
    // 移除所有标注
    removeAllMarker() {
      // console.log("移除所有标注")

      // 清除气泡
      this.removePopup()

      // 清除标注
      let markerList = document.querySelectorAll('.map_marker')
      // console.log(markerList)
      if(markerList.length !== 0) {
        let markerParentNode = markerList[0].parentNode

        markerList.forEach(item=> {
          // console.log(item)
          markerParentNode.removeChild(item)
        })
      }
    },
    // 移除气泡
    removePopup() {
      let mapNode = document.querySelector('#glMap')
      // console.log(mapNode)

      let popupNode = document.querySelectorAll('.maplibregl-popup')
      if(popupNode.length !== 0) {
        mapNode.removeChild(popupNode[0])
      }
    },

    /**
     * map core
     */
    // 绑定点击事件
    glmapEvent() {
      // 监听地图缩放事件
      this.glMap.on('moveend', e => {
      });
      // 移入地图
      this.glMap.on('mouseover', e => {
      });

      // 地图点击事件
      this.glMap.on('click', e => {
      });

      // reload
      this.glMap.on('load', () => {
        this.$nextTick(()=> {
          this.getImgMarker()  // 设置图片标注
        })
      });
    },
    
    /**
     * 配置标注
     * @param {*} lonlat 经纬度  [120.5, 30]
     * @param {*} mapPopup  气泡
     * @param {*} markerClass  标注样式
     */
    setMarkerConfig(lonlat, mapPopup, markerClass, isTab=false, item) {
      // console.log()
      let popup = mapUtils.setPopupCommon(this.glMap, lonlat, mapPopup)  // 气泡

      let el = document.createElement('div');
      el.className = `map_marker ${markerClass}`;

      // 设置标注
      mapUtils.setMarkerCommon(el, lonlat, popup, this.glMap)
    },
    // 判断标注
    checkMapMarker(item, label, popup, node) {
      if(node) {
        if(item.business_type.search(label) === 0) {
          this.setMarkerConfig([item.longitude, item.latitude], popup, node)
        }
      } else {
        node = popup
        popup = label
        
        this.setMarkerConfig([item.longitude, item.latitude], popup, node)
      }
    },
    // 设置图片标注
    getImgMarker() {
      this.mapDataList.forEach(item=> {
        switch(item.newcompany_id) {
          case '3':
            this.setType0Marker(item)  // type0标注
            break
          default:
            this.setMainMarker(item)  // 首页
        }
      })
    },
    // 配置地图标注
    setMainMarker(item) {
      this.mainPopupData = {
        mpdt0: item.xxx,
      }
      mapUtils.setPopupCommon(this.glMap, lonlat, this.mainPopup)  // 浙江气泡
    },
    // type0标注
    setType0Marker(item) {
      // console.log(item.shop_name, item.adress)

      this.type0Data = {
        type0dt1: item.x1,
        type0dt2: item.x2,
        type0table: {
          columns: ['指标', '数据'],
          type0tbData: [
            {
              type0tdCol1: 'xxx',
              type0tdCol2: {
                num: item.x3,
                unit: '万'
              }
            },
            {
              type0tdCol1: 'xxx',
              type0tdCol2: {
                num: item.x4,
                unit: '万'
              }
            },
          ]
        }
      }

      this.checkMapMarker(item, '肯德基', this.type0Popup, 'map6_mksty1')
    },

    /**
     * map render
     */
    // 初始化浙江
    initZheJiang() {
      this.glMap = mapUtils.zhejiangMap()
      mapUtils.renderGeoToZheJiang(this.glMap)
    },
    // 初始化上海
    initShangHai() {
      this.glMap = mapUtils.shanghaiMap()
      mapUtils.renderGeoToShangHai(this.glMap)
    },

    /**
     * 业务
     */
    // 设置地图
    initMap() {
      this.initMapConfig(()=> {
        switch(this.tabCurrent) {
          case '浙江':
            this.initZheJiang()  // 初始化浙江
            break
          case '上海':
            this.initShangHai()
            break
          default:
            this.initZheJiang()
        }
      })
    },
  },
  created() {
    this.initMap()
  },
  destroyed() {
    if(this.glMap) {
      this.glMap.remove()
    }
  },
}
</script>
```
- MapLend.vue => 图例封装
```js
// 点击显示隐藏
// toggle
toggleLend(calss) {
  let dnCls = 'f-dn'

  this.$el.parentNode.querySelectorAll(calss).forEach(item=> {
    if(!item.classList.contains(dnCls)) {
      item.classList.add(dnCls)
    } else {
      item.classList.remove(dnCls)
    }
  })
},
```