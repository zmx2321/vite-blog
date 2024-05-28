# openlayer创建各种Feature

## 设置标注点
```js
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
```
```js
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
```

## 绘制圆
```js
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
```

## 添加线
```js
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
```

## 创建文字图层
```js
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
```

## 绘制多边形
```js
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
```

## 使用draw创建多边形
```js
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
```

## 使用draw实现测距
```js
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
```