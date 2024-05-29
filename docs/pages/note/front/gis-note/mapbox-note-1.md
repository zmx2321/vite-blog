# mapbox工作积累

## 重置地图
```js
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
```

## 初始化地图
```js
// 初始化地图
initMapConfig(next) {
    this.resetMap(()=> {
        next()

        // console.log('开始打点')
        mapUtils.setMapConfig(this.glMap)  // 地图配置
        this.glmapEvent()  // 绑定事件
    })
},

// 绑定点击事件
glmapEvent() {
    // 首页地图点击
    this.indexMapClick()
    
    // reload
    this.glMap.on('load', () => {
        // 设置图片标注 
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

    if(isTab) {
    el.addEventListener('click', e=> {
        // console.log(item)
        
        this.$emit('getMarkerData', item)
    })
    }

    // 设置标注
    mapUtils.setMarkerCommon(el, lonlat, popup, this.glMap)
},
```

## mapbox封装
- mapconfig
```js
export const glMapConfig = (id, geoData, center, zoom) => {
  return {
    container: id, //容器的id
    center: center ? center : [120.1, 29.25], // 初始位置，经度纬度 [lng, lat]
    zoom: zoom ? zoom : 6.45, // 初始缩放
    // minZoom: 6,
    pitch: 20,
    antialias: true, //抗锯齿
    style: {
      "version": 8,
      "sources": {
        // ......
        // 配置1内容，传入geojson
        [SOURCES.CITIES]: {
          type: 'geojson',
          data: geoData,
          generateId: true,
        },
      },
      "layers": [
        // 配置1内容-不带底图
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
      
      ]
    }
  }
}
```

- mapUtils
```js
/**
 * 地图相关工具方法
 */
import maplibregl from 'maplibre-gl';

import { glMapConfig, glMapConfigDev, glMapConfigTest3 } from './mapData/mapConfig'  // config

import zhejiangIndexGeo from './mapData/geoData/zhejiangIndex';  // 首页浙江
import zhejiangGeo from './mapData/geoData/zhejiang';  // 普通浙江
import shanghaiGeo from './mapData/geoData/shanghai';  // 上海

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
// 添加面和线图层
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
// 根据开发环境区分底图
const setMmapLayer = (geoData, center, zoom)=> {
    if(process.env.NODE_ENV === 'development') {
        return mapInitTool(glMapConfigDev, geoData, center, zoom)
    } else {
        // return mapInitTool(glMapConfigDev, geoData, center, zoom)
        return mapInitTool(glMapConfig, geoData, center, zoom)
    }
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
 * 首页浙江
 */
// 地图初始化
export const zhejiangMapIndex = () => {
    return setMmapLayer(zhejiangIndexGeo)
}
// 渲染geoData
export const renderGeoToZheJiangIndex = (map, next) => {
    // 定制首页地图geojson
    renderGeo(zhejiangIndexGeo, map, 'zhejiang_index', true, (el, item, name)=> {
        // console.log(el, item, name)

        setTimeout(()=> {
            switch(name) {
                case '浙北':
                    addMapLayer(map, item, 'zhebei', '#73BBBF', .4)
                    break
                case '浙南':
                    addMapLayer(map, item, 'zhenan', '#C29E35')
                    break
                case '浙西':
                    addMapLayer(map, item, 'zhexi', '#7BAD84', .6)
                    break
                case '浙东':
                    addMapLayer(map, item, 'zhedong', '#C6716D')
                    break
            }
        }, 0)

        // 标注点击事件
        el.addEventListener('click', e=> {
            let { textContent } = e.target
            // console.log(textContent)

            // 获取城市标注数据
            next(textContent)
        })
    })
}

/**
 * 上海
 */
export const shanghaiMap = () => {
    return setMmapLayer(shanghaiGeo, [121.4, 31.2], 8.9)
}
export const renderGeoToShangHai = map => {
    renderGeo(shanghaiGeo, map, 'shanghai')
}
```