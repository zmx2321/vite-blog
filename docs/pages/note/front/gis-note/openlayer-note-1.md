# openlayer工作积累

## openlayer相关概念
- openlayer中默认的投影坐标系不是经纬度的坐标系,而是墨卡托的坐标系,所以需要将经纬度转换为墨卡托坐标系才能在地图上显示
  - `fromLonLat([经度, 纬度], 'EPSG:3857')`
    - projection: 'EPSG:3857' 即就是墨卡托坐标系
  - projection: 'EPSG:4326' 即就是经纬度坐标系
```js
center: fromLonLat([121.63, 29.88]),
// 等同于
center: [121.63, 29.88],
projection: 'EPSG:4326', // 默认就是EPSG:4326
```
- 如果需要平移添加动画效果
```js
const view = map.getView();
view.animate({
    zoom: 10,
    center: fromLonLat([121.63, 29.88]),
    duration: 2000,
});
```
- extent: [minX, minY, maxX, maxY]
  - minX: 最小X坐标
  - minY: 最小Y坐标
  - maxX: 最大X坐标
  - maxY: 最大Y坐标
  - 通过该方法可以设置地图的边界
- openlayer的组成
  - layer => 图层
    - 切片图层 => TileLayer
      - 需要数据源 => source
        - OSM是ol自带的数据源瓦片服务,已经内置了,不需要额外引入,但他是国外的服务
        - tileSource => 瓦片
        - vectorSource => 矢量
        - imageSource => 图片
    - 矢量图层 => Vector Layer
      - 地图上的元素 => feature 
    - 图片图层 => Image Layer
    - WebGLPoints Layer
    - 热度图 => Heatmap Layer
  - view => 视图
  - interactions => 交互
  - controls => 控件
  - projection => 投影坐标系
- 创建一个矢量图层
```js
// source分三种
/**  
 * 第一种: 地图底图瓦片  new XYZ({})  或者 new OSM()
 * 第二种: 加载现有json new VectorSource({url: geojson , format: new GeoJSON()})
 * 第三种: 加载现自定义矢量数据 new VectorSource({features: [feature]}) 如下
 */

// 矢量图层
vectorLayer = new vectorLayer({
  source: vectorSource,
})

// 矢量数据源
vectorSource = new VectorSource({
  features: [polygon],
});

// 创建Feature
let polygon = new Feature({
  geometry: new Polygon([coords]),
  type: 'Polygon',
  ...polygonConfig,
});
polygon.setStyle(new Style({}))
// vectorSource.addFeatures(polygon);

/* let vectorLayer = new VectorLayer({
  source: new VectorSource({
    features: [polygon]
  })
});*/
olMap.addLayer(vectorLayer); // 将矢量图层添加到地图中
```
- 在地图上加dom
```js
// 添加闪烁点
export const addFlickerPoint = (olMap, pixelPoint, className = '', next) => {
  // console.log('添加闪烁点', olMap, pixelPoint)

  let point_div = document.createElement('div');
  point_div.className = `flicker_point ${className}`;
  let point_overlay = new Overlay({
    element: point_div,
    position: pixelPoint,   // 他是以左上角为原点的,可以使用offset进行偏移,或者也可以定义dom节点,然后用overlay进行关联
    // positioning: 'center-center'
    zIndex: 0
  });
  olMap.addOverlay(point_overlay);

  if (next) {
    point_div.addEventListener('click', () => {
      next()
    })
  }
}
```

## openlayer修改Feature坐标系
```js
import { transform, fromLonLat, toLonLat } from 'ol/proj';
 
// 假设feature是已有的Feature对象
let feature = /* 你的Feature对象 */;
 
// 从EPSG:4326转换到EPSG:3857
feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
 
// 或者使用内置的 fromLonLat 和 toLonLat 函数
feature.getGeometry().applyTransform(fromLonLat);
 
// 如果需要反向操作，即从EPSG:3857转换到EPSG:4326
feature.getGeometry().transform('EPSG:3857', 'EPSG:4326');
 
// 或者使用内置的 fromLonLat 和 toLonLat 函数
feature.getGeometry().applyTransform(toLonLat);
```
- 当资源加载完成之后执行
  - `map.getLayers().item(1).getSource().on('change', function (event) {})`

## 经纬度转屏幕坐标
```js
import { fromLonLat, toLonLat } from 'ol/proj';
 
// 定义一个经纬度点
const lonLatPoint = [123.456, -7.89]; // 经度, 纬度
 
// 将经纬度转换为屏幕坐标
const pixelPoint = fromLonLat(lonLatPoint);
 
// 将屏幕坐标转换为经纬度
const convertedLonLatPoint = toLonLat(pixelPoint);
 
console.log(pixelPoint); // 输出屏幕坐标
console.log(convertedLonLatPoint); // 输出经纬度
```

## 根据地图对象获取feature
- 需要事件对象
```js
// 获取图层
const feature = olMap.forEachFeatureAtPixel(e.pixel, (feature) => {
    return feature
})
```
- 根据layer获取要素
```js
let layers = olMap.getLayers().getArray();
layers.forEach(item => {
    if (item instanceof VectorLayer) {
        let currentFeature = item.getSource().getFeatures()
        console.log(currentFeature[0].get('type'))
    }
})
```
- 完整版
```js
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
```

## 绘制多边形
- 方案一
```js
olMap.addInteraction(new Draw({
  source: new VectorSource(),
  type: 'Polygon',
}),
  new Modify({
    source: new VectorSource(),
  }),
  new Snap({
    source: new VectorSource(),
  }));

// 获取绘制完成的多边形
const vectorSource = new VectorSource();
olMap.getInteractions().getArray().forEach(interaction => {
  if (interaction instanceof Draw) {
    interaction.on('drawend', (event) => {
      const geometry = event.feature.getGeometry();
      if (geometry instanceof Polygon) {
        // console.log("所选点位坐标", geometry.transform('EPSG:3857', 'EPSG:4326').getCoordinates());
      }
    });
  }
});

// 将获取的多边形添加到地图上
olMap.addLayer(new VectorLayer({
  source: vectorSource,
}));
```
- 方案二
```js
// 添加绘制交互：创建一个绘制交互对象，并将其添加到地图中
let draw = new Draw({
  source: new VectorSource(),
  type: 'Polygon'
});
olMap.addInteraction(draw);
// 监听绘制完成事件：监听绘制完成事件，并获取绘制的多边形几何对象。
draw.on('drawend', function (event) {
  const {feature} = event
  const geometry = feature.getGeometry();
  const lonlat = geometry.transform('EPSG:3857', 'EPSG:4326').getCoordinates()
  const coords = geometry.getCoordinates()
  // 处理绘制完成后的多边形几何对象
  console.log(coords)
});
```

## 缩放地图报错
- chunk-G3QDAIGZ.js?v=fdbdd27f:1249 Unable to preventDefault inside passive event listener invocation.
```js
// main.js 引入
// @/utils/browserPatch.js

; (function () {
    if (typeof EventTarget !== 'undefined') {
        const func = EventTarget.prototype.addEventListener
        EventTarget.prototype.addEventListener = function (type, fn, capture) {
            ; this.func = func
            if (typeof capture !== 'boolean') {
                capture = capture || {}
                capture.passive = false
            }
            ; this.func(type, fn, capture)
        }
    }
})()
```

## 根据contextmenu(右键菜单)获取feature
```js
const coordinate = olMap.getEventCoordinate(e)
const pixel = olMap.getPixelFromCoordinate(coordinate)
const feature = olMap.forEachFeatureAtPixel(pixel, feature => {
  return feature
})
console.log(feature)
```