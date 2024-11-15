# openlayer中的feature元素

## 点相关(Point)
### 在地图上添加单个点
- 示例1: 添加单个固定点
```js
let count = 0  // 地图点击打点变量

// 打点测试
export const setPointTest = (olMap) => {
  // fromLonLat([121.63, 29.88])

  const features = [];
  // console.log(e.coordinate); // 获取坐标

  const iconFeature = new Feature({
    geometry: new Point(fromLonLat([121.63, 29.88])),
    name: count++,
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
- 示例2: 右键添加单个点
```js
// 右键添加标注点
export const addMyPointByMenu = (olMap, pixelPoint) => {
  const features = [];

  const iconFeature = new Feature({
    geometry: new Point(pixelPoint),
    name: count++,
    location: pixelPoint,
    tempType: 'myPointByMenu'
  });
  const style = new Style({
    image: new CircleStyle({
      radius: 15,
      fill: new Fill({
        color: '#409eff'
      }),
      stroke: new Stroke({
        color: '#4440ff',
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
- 示例3: 以Overlay的形式添加单个可以自定义样式的点
```js
// 添加闪烁点
// pixelPoint => 屏幕坐标
export const addFlickerPoint = (olMap, pixelPoint, className = '', next) => {
  // console.log('添加闪烁点', olMap, pixelPoint)

  let point_div = document.createElement('div');
  point_div.className = `flicker_point ${className}`;
  let point_overlay = new Overlay({
    element: point_div,
    position: pixelPoint,
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
- 点聚合
```js
// 点聚合
export const setCluster = (olMap, clusterBussinessData, src) => {
  // removeAllDefaultLayer(olMap); // 移除所有默认图层

  let source = new VectorSource();

  if (clusterBussinessData instanceof Array) {
    clusterBussinessData.forEach(item => {
      let coordinates = fromLonLat([item.longitude, item.latitude]);
      let feature = new Feature({
        geometry: new Point(coordinates),
        type: 'Marker',
        pointData: item
      });
      source.addFeature(feature);
    })
  } else {
    let coordinates = fromLonLat([clusterBussinessData.longitude, clusterBussinessData.latitude]);
    let feature = new Feature({
      geometry: new Point(coordinates),
      type: 'Marker',
      pointData: clusterBussinessData
    });
    source.addFeature(feature);
  }

  // 聚合
  let cluster = new Cluster({
    source: source,
    distance: 50
  })

  // 创建图层
  let clusterLayer = new VectorLayer({
    type: 'clusterLayer',
    source: cluster,
    style: function (feature) {
      feature.set('type', 'Cluster')
      let size = feature.get('features').length;

      // console.log(feature.get('features'))

      if (size === 1) {
        return src === '/' ? pointCircleStyle : pointIconleStyle(olMap, src)
      }
      else {
        return new Style({
          image: new CircleStyle({
            radius: 30,
            stroke: new Stroke({
              color: 'white'
            }),
            fill: new Fill({
              color: 'blue'
            })
          }),
          text: new Text({
            text: size.toString(),
            fill: new Fill({
              color: 'white'
            })
          })
        })
      }
    }
  });

  olMap.addLayer(clusterLayer);
}
```

### 设置多个标注点
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
const pointIconleStyle = (olMap, src) => {
  return new Style({
    image: new Icon({
      src,
      // image: new CircleStyle({
      anchor: [.8, 80],//图标的锚点,经纬度点所对应的图标的位置，默认是[0.5, 0.5]，即为标注图标的中心点位置
      anchorOrigin: 'top-right',//锚点的偏移位置，默认是top-left，
      anchorXUnits: 'fraction',//锚点X的单位，默认为百分比，也可以使用px
      anchorYUnits: 'pixels',//锚点Y的单位，默认为百分比，也可以使用px
      offsetOrigin: 'top-left',//原点偏移bottom-left, bottom-right, top-left, top-right,默认 top-left
      size: [100, 100],
      offset: [3, -32],
      //图标缩放比例
      // scale: 0.5,//可以设置该比例实现，图标跟随地图层级缩放
      scale: olMap.getView().getZoom() / 30,
      //透明度
      opacity: 0.75,//如果想隐藏某个图标，可以单独设置该值，透明度为0时，即可隐藏，此为隐藏元素的方法之一。
    }),
  })
}

// 设置标注点
export const addPoint = (olMap, pointBusinessData, src = '/', pointConfig = {}, zIndex = 1) => {
  // 创建点的数据源
  const vectorSource = new VectorSource({
    features: [],
  });

  // 创建点图层
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    zIndex,
    style: src === '/' ? pointCircleStyle : pointIconleStyle(olMap, src)
  });

  olMap.addLayer(vectorLayer);

  const featureConfig = (point, pointData) => {
    return {
      geometry: point,
      type: 'Marker',
      pointData,
      ...pointConfig,
    }
  }

  if (pointBusinessData instanceof Array) {
    pointBusinessData.forEach((item) => {
      const point = new Point(fromLonLat(item.lonlat));
      const feature = new Feature({
        ...featureConfig(point, item.pointData)
      });
      vectorSource.addFeature(feature);
    });
  } else {
    const point = new Point(fromLonLat(pointBusinessData.lonlat));
    const feature = new Feature({
      ...featureConfig(point, pointBusinessData.pointData)
    });
    vectorSource.addFeature(feature);
  }
}
```

## 线相关
- 渲染线
```js
// 添加线
export const addLine = (olMap, position, lineConfig = {}, style) => {
  // 创建线要素并添加到地图上
  const lineFeature = new Feature({
    // geometry: new LineString([[13538079.386677982, 3488521.2319548605], [13540229.178098504, 3488093.6623278903]]),
    geometry: new LineString(position),
    type: 'Line',
    ...lineConfig
  });

  if (!style) {
    style = new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new Stroke({
        color: 'rgba(0, 0, 0, 0.5)',
        width: 3
      }),
    })
  }

  lineFeature.setStyle(style);

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
- 测距
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
    addLine(olMap, coords, { drawType: 'TestDistance' })

    // 创建文本要素以显示距离
    addTextPoint(olMap, length + '米', lonlat[0], { drawType: 'TestDistance' })

    // olMap.removeInteraction(measure); // 从地图中移除交互
  });
}

// 取消测距
export const cancelTestDistance = (olMap) => {
  // console.log('取消测距', olMap)

  // 根据条件移除要素
  removeByCondition(olMap, currentFeature => {
    currentFeature.get('drawType') === 'TestDistance'
  })
}
```
- 添加带箭头的线
```js
export const addArrowLine = (olMap, position, src = '../src/components/OpenlayerBaseMap/icon/arrow.svg', businessType = 'arrowLine') => {
  console.log('添加带箭头的线', olMap)

  function stylefunction(feature) {
    const geometry = feature.getGeometry()
    // 轨迹地理长度
    const totalLength = geometry.getLength()
    // 像素间隔步长
    let step = 50
    // 将像素步长转实际地理距离步长
    let StepLength = step * olMap.getView().getResolution()
    // 箭头总数
    let arrowNum = Math.floor(totalLength / StepLength)

    const styles = [
      // linestring
      new Style({
        stroke: new Stroke({
          // color: 'rgb(164 164 162 / 88%)',
          color: '#42b983',
          width: 5,
        }),
      }),
    ];

    const rotations = [];
    const distances = [0];
    geometry.forEachSegment(function (start, end) {
      let dx = end[0] - start[0];
      let dy = end[1] - start[1];
      let rotation = Math.atan2(dy, dx);
      distances.unshift(Math.sqrt(dx ** 2 + dy ** 2) + distances[0]);
      rotations.push(rotation);
    });

    for (let i = 1; i < arrowNum; i++) {
      let arrow_coor = geometry.getCoordinateAt(i * 1.0 / arrowNum)
      const d = i * StepLength;
      const grid = distances.findIndex((x) => x <= d);
      styles.push(
        new Style({
          geometry: new Point(arrow_coor),
          image: new Icon({
            src,
            opacity: 1,
            anchor: [0.5, 0.5],
            rotateWithView: true,
            rotation: - rotations[distances.length - grid - 1],
            scale: 0.8
          })
        })
      )
    }

    return styles
  }


  addLine(olMap, position, { businessType }, stylefunction)
}
```

## 面相关
### 圆
- 添加圆测试
```js
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
- 添加圆
```js
// 添加圆
export const addCircle = (olMap, circleItem, circleConfig = {}, isFlicker, isHide = false) => {
  if (!circleItem.radius) {
    circleItem.radius = 550
  }

  let features = []

  let feature = new Feature({
    type: "Circle",
    ...circleConfig,
    circleData: circleItem,
    // 圆心 - 半径
    geometry: new Circle(fromLonLat(circleItem.lonlat), circleItem.radius),
  })

  feature.setStyle(!isHide ? new Style({
    fill: new Fill({
      color: 'rgba(32, 157, 230, 0.2)'
    }),
    stroke: new Stroke({
      color: 'rgb(64 158 255)',
      width: 2
    }),
  }) : new Style({
    fill: new Fill({
      color: 'rgba(255, 0, 0, 0)'
    }),
    stroke: new Stroke({
      color: '#f00',
      color: 'rgba(255, 0, 0, 0)'
    }),
  }))

  features.push(feature)
  let source = new VectorSource()
  source.addFeatures(features)
  let layer = new VectorLayer({
    // opacity: 0.2,
    zIndex: 100,
  })
  layer.setSource(source)
  olMap.addLayer(layer)

  // 需要闪烁时调用
  if (isFlicker) {
    let radius = 0
    layer.on('postrender', evt => {
      if (radius >= 20) radius = 0;
      var opacity = (20 - radius) * (1 / 20); // 不透明度
      var pointStyle = new Style({
        radius: radius,
        stroke: new Stroke({
          color: "rgba(255,60,5" + opacity + ")",
          width: 22 - radius / 2, // 设置宽度
        }),
      });
      // 获取矢量要素上下文
      let vectorContext = getVectorContext(evt);
      vectorContext.setStyle(pointStyle);
      vectorContext.drawGeometry(feature.getGeometry());
      radius = radius + 0.2; //调整闪烁速度
      //请求地图渲染（在下一个动画帧处）
      olMap.render();
    })
  }
}
```
- 绘制圆
```js
// 创建圆形(选区)
export const drawCircle = (olMap) => {
  // console.log('创建圆形(选区)', olMap)

  olMap.addInteraction(new Draw({
    source: new VectorSource(),
    type: 'Circle',
  }));

  // 获取绘制完成的多边形
  olMap.getInteractions().getArray().forEach(interaction => {
    if (interaction instanceof Draw) {
      interaction.on('drawend', (event) => {
        const { feature } = event
        const geometry = feature.getGeometry();
        const lonlat = transform(geometry.getCenter(), 'EPSG:3857', 'EPSG:4326')
        // console.log(geometry, geometry.getRadius(), lonlat)

        let circleItem = {
          lonlat,
          radius: geometry.getRadius()
        }
        addCircle(olMap, circleItem, { drawType: 'Circle' })

        olMap.removeInteraction(interaction); // 从地图中移除交互
      });
    }
  });
}
```

### 扇形
> 绘制扇形核心方法
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
> 绘制扇形
- 单个扇形
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
- 批量绘制
```js
/**
 * 添加扇形
 * 绘制扇形核心方法
 * APIMethod:OpenLayers绘制扇形的接口扩展
 * @param origin 圆心
 * @param radius 半径
 * @param sides 边数
 * @param r 弧度
 * @param angel 旋转角度（扇形右边半径与x正向轴的角度）
 * @returns {OpenLayers.Geometry.Polygon}
 */
// 根据频段展示不同颜色 有边缘  
export const addCurve = (olMap, curveDataList, isResetStyle) => {
  let featureList = []  // 扇区feature列表

  // 根据业务数据修改feature数据
  curveDataList.forEach(item => {
    // 频率
    // console.log(item.curveData.workFrequency)

    // 扇区样式
    let curveStyle = setFeaturesStyle(
      "rgba(32, 222, 230, 0.4)",
      'rgba(255, 205, 67, 0.3)'
    )
    // 扇区半径
    let curveRadius = 100

    if (isResetStyle) {
      let { myCurveStyle, myCurveRadius } = isResetStyle(item)

      curveStyle = myCurveStyle
      curveRadius = myCurveRadius
    }

    let origi_point = fromLonLat(item.lonlat);  // 绘制扇形的顶点
    // let circle = createRegularPolygonCurve(origi_point, 150, 100, 45, 90) // 调用绘制扇形的方法得到扇形
    let circle = createRegularPolygonCurve(origi_point, curveRadius, 100, 45, item.curveData.antDirectionAngle) // 调用绘制扇形的方法得到扇形
    let feature = new Feature(circle);  // 把扇形加入 feature

    feature.setStyle(curveStyle)
    feature.set('type', 'Curve')  // 这是给这个扇形添加额外的参数 ， 如果是设置id 用 setId方法
    // 这是给这个扇形添加额外的参数，这里的id和 setId的id没关系
    feature.set('curveData', item.curveData)
    featureList.push(feature)
  })

  let vectorSource = new VectorSource();  // 创建一个数据源
  vectorSource.addFeatures(featureList);   // 把两个扇形加进数据源
  let vectorLayer = new VectorLayer({     // 创建一个图层，把数据源加进图层
    source: vectorSource,
    zIndex: 1
  });
  olMap.addLayer(vectorLayer);   // 把图层加进地图
}

// 批量添加扇形
const addCurve = (olMap, pointList, isResetStyle) => {
  if (isResetStyle) {
    mapUtils.addCurve(olMap, pointList, (item) => {
      return isResetStyle(item);
    });
  } else {
    mapUtils.addCurve(olMap, pointList);
  }
};

// 批量添加扇形
refOpenlayerBaseMap.value.addCurve(olMap, outPoint, (item) => {
    return renderCurveByField(item.curveData);
});

// 根据字段渲染扇形
const renderCurveByField = (curveData, optity = 0.4) => {
  switch (currentRenderType) {
    case "aaa":
      return renderCurveByAaa(curveData, (optity = 0.4));
    case "bbb":
      return renderCurveByBbb(curveData, (optity = 0.4));
  }
};

// 根据aaa渲染扇形
const renderCurveByAaa = (curveData, optity = 0.4) => {
  let myStrokeColor = "rgba(255, 205, 67, 0.3)";
  let myCurveStyle = null; // 扇区样式
  let myCurveRadius = 0; // 扇区半径

  switch (curveData.aaa) {
    case "A":
      myCurveStyle = refOpenlayerBaseMap.value.setFeaturesStyle(
        `rgba(200, 22, 100, ${optity})`,
        myStrokeColor
      );
      myCurveRadius = 100;
      break;
    case "B":
      myCurveStyle = refOpenlayerBaseMap.value.setFeaturesStyle(
        `rgba(55, 33, 188, ${optity})`,
        myStrokeColor
      );
      myCurveRadius = 110;
      break;
    case "C":
      myCurveStyle = refOpenlayerBaseMap.value.setFeaturesStyle(
        `rgba(88, 99, 200, ${optity})`,
        myStrokeColor
      );
      myCurveRadius = 120;
      break;
    case "D":
      myCurveStyle = refOpenlayerBaseMap.value.setFeaturesStyle(
        `rgba(255, 255, 0, ${optity})`,
        myStrokeColor
      );
      myCurveRadius = 130;
      break;
    case "E":
      myCurveStyle = refOpenlayerBaseMap.value.setFeaturesStyle(
        `rgba(255, 76, 127, ${optity})`,
        myStrokeColor
      );
      myCurveRadius = 140;
      break;
    default:
      myCurveStyle = refOpenlayerBaseMap.value.setFeaturesStyle(
        `rgba(32, 222, 230, ${optity})`,
        myStrokeColor
      );
      myCurveRadius = 150;
      break;
  }

  return { myCurveStyle, myCurveRadius };
};

// 根据健康度渲染扇形
const renderCurveByBbb = (curveData, optity = 0.4) => {
  let myCurveStyle = null; // 扇区样式
  let myStrokeColor = "rgba(255, 205, 67, 0.3)";
  let myCurveRadius = 0; // 扇区半径

  switch (curveData.bbb) {
    case "A":
      myCurveStyle = refOpenlayerBaseMap.value.setFeaturesStyle(
        `rgba(200, 22, 100, ${optity})`,
        myStrokeColor
      );
      myCurveRadius = 100;
      break;
    case "B":
      myCurveStyle = refOpenlayerBaseMap.value.setFeaturesStyle(
        `rgba(55, 33, 188, ${optity})`,
        myStrokeColor
      );
      myCurveRadius = 110;
      break;
    default:
      myCurveStyle = refOpenlayerBaseMap.value.setFeaturesStyle(
        `rgba(32, 222, 230, ${optity})`,
        myStrokeColor
      );
      myCurveRadius = 150;
      break;
  }

  return { myCurveStyle, myCurveRadius };
};
```

### 多边形
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

          createPolygon(olMap, { coords, lonlat }, { drawType: 'polygon' })

          olMap.removeInteraction(interaction); // 从地图中移除交互
        }
      });
    }
  });
}

/**
 * 绘制多边形
 * 
 * @param {*} olMap 
 * @param {*} coords 多边形的坐标数组
 */
export const createPolygon = (olMap, { coords, lonlat, polygonData }, polygonConfig = {}, next, polygonStyle = setDrawFeaturesStyle()) => {
  // console.log(olMap, coords, lonlat)

  // 创建多边形
  let polygon = new Feature({
    geometry: new Polygon([coords]),
    type: 'Polygon',
    ...polygonConfig,
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

// 获取多边形中心点
export const getPolygonCenter = (feature) => {
  const geometry = feature.getGeometry();
  if (geometry.getType() === "Polygon") {
    const polygon = geometry.clone();
    polygon.transform("EPSG:3857", "EPSG:4326"); // 如果多边形在Web墨卡托坐标系中，需要转换到WGS84
    const extent = polygon.getExtent();
    const center = getCenter(extent);
    return center;
  }
  return null;
}
```

## 其他feature相关操作
- 创建文字图层
```js
// 创建文字图层
export const addTextPoint = (olMap, text, position, textPointConfig = {}, isRemove) => {
  // console.log('创建文字图层', olMap, gridData)

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
      offsetX: -20,
      offsetY: -13,
      overflow: true, // 允许文本溢出
      rotateWithView: false, // 不随地图旋转
      rotation: 0, // 文本旋转角度
      // scale: olMap.getView().getZoom() / 30,
    }),
  });

  if (isRemove) {
    // 根据条件移除要素
    removeByCondition(olMap, currentFeature => {
      return isRemove(currentFeature)
    })
  }

  // 创建文本特征
  const feature = new Feature({
    geometry: new Point(fromLonLat(position)),
    type: 'textPoint',
    ...textPointConfig
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
- 根据条件获取FeatureList
```js
// 根据条件获取FeatureList
export const getFeaturesByCondition = (olMap, condition) => {
  let featureList = []
  getAllLayer(olMap, layerItem => {
    let currentFeature = layerItem.getSource().getFeatures()[0]

    if (condition(currentFeature)) {
      featureList.push(currentFeature)
    }
  })

  return featureList
}
```
- 获取所有feature
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