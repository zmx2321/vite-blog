# openlayer测试案例

## 打点测试
```js
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
```

## 移除标注测试
```js
// 移除标注测试
export const removePointTest = (olMap) => {
  const layers = olMap.getLayers();
  layers.forEach(item => {
    if (item instanceof VectorLayer) olMap.removeLayer(item);
  });
}
```

## 点击打点测试
```js
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
```

## 绘制扇形测试
```js
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
```
```js
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
```

## 绘制圆测试
```js
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
```

## 获取所有要素测试
```js
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











