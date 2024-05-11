# openlayer的简单使用说明

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