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