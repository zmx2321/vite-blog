# openlayer其他功能的封装

## 坐标相关
```js
// 投影坐标转换
export const transformToLonlat = (coordinate) => {
  return transform(coordinate, "EPSG:3857", "EPSG:4326")
}

// 屏幕坐标转换
export const transformToPixelPoint = (lon, lat) => {
  return fromLonLat([lon, lat])
}

// 获取经纬度
export const getHdms = (pixelPoint) => {
  return toStringHDMS(toLonLat(pixelPoint)); // 转换为经纬度显示
}
```

## 图层相关
```js
// 根据feature获取layer
export const getLayerByFeature = (map = {}, feature = {}) => {
  let layers = map.getLayers().getArray();
  for (let i in layers) {
    let source = layers[i].getSource();
    if (source instanceof VectorSource) {
      let features = source.getFeatures();
      if (features.length > 0) {
        for (let j in features) {
          if (features[j] === feature) {
            return layers[i];
          }
        }
      }
    }
  }
  return {};
}

// 给某个feature置顶
export const featureToMaxTop = (olMap, feature) => {
  // console.log('给某个feature置顶', olMap, feature)

  let currentStyle = null

  switch (feature.get('type')) {
    case 'Marker':
      currentStyle = setFeaturesStyle('#409eff', '#f00', true, 2, 10)
      break
    case 'Curve':
      currentStyle = setFeaturesStyle('#409eff', '#f00', false, 5)
      break
  }

  feature.setStyle(currentStyle)

  feature.set('temp', true)

  // 顶层图层
  let topLayer = new VectorLayer({
    source: new VectorSource(),
    // style: [selectPointStyle],
    zIndex: 999 // zIndex全地图最大
  });

  /* getAllLayer(olMap, layerItem => {
    let currentFeature = layerItem.getSource().getFeatures()[0]

    if (currentFeature.get('temp')) {
      olMap.removeLayer(layerItem)
    }
  }) */
  // 根据条件移除要素
  removeByCondition(olMap, currentFeature => {
    return currentFeature.get('temp')
  })

  topLayer.setOpacity(1)
  topLayer.getSource().addFeature(feature);

  olMap.addLayer(topLayer)
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

// 移除所有图层
export const removeAllLayer = (olMap) => {
  removeAllOverlay()  // 移除地图Overlay元素

  cancelDrawInteraction(olMap)  // 取消绘制(点线面)

  getAllLayer(olMap, layerItem => {
    olMap.removeLayer(layerItem)
  })
}

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

// 根据条件移除要素
export const removeByCondition = (olMap, condition) => {
  getAllLayer(olMap, layerItem => {
    let currentFeature = layerItem.getSource().getFeatures()[0]

    if (condition(currentFeature)) {
      olMap.removeLayer(layerItem)
    }
  })
}

// 根据类型移除图层
export const removeLayerByType = (olMap, type) => {
  removeByCondition(olMap, currentFeature => {
    if (currentFeature) {
      return currentFeature.get('type') === type
    }
  })
}

// 根据业务类型移除图层
export const removeLayerByBusinessType = (olMap, type) => {
  removeByCondition(olMap, currentFeature => {
    if (currentFeature) {
      return currentFeature.get('businessType') === type
    }
  })
}

// 移除所有默认图层
export const removeAllDefaultLayer = (olMap) => {
  removeByCondition(olMap, currentFeature => {
    if (currentFeature) {
      return (currentFeature.get('type') === 'Marker' || currentFeature.get('type') === 'Curve' || currentFeature.get('type') === 'Cluster') && (!currentFeature.get('bussinessType'))
    }
  })
}

// 刷新地图需要移除的元素
export const removeByReflashMap = (olMap) => {
  // 根据条件移除要素
  removeByCondition(olMap, currentFeature => {
    if (currentFeature) {
      return currentFeature.get('tempType')
    }

  })

  removeAllOverlay()  // 移除地图Overlay元素
}

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

## 其他功能
```js
// 飞到指定坐标
export const flyToCoordinate = (olMap, lonlat) => {
  olMap.getView().animate({
    center: fromLonLat(lonlat),
    duration: 800, // 飞行时间，单位毫秒
  });
}

// 加载kml
export const loadKML = (olMap, text) => {
  // console.log('加载kml', olMap, text)

  const format = new KML({
    extractStyles: false //至关重要
  });
  const features = format.readFeatures(text);
  features.forEach(item => {
    // 从EPSG:4326转换到EPSG:3857
    item.getGeometry().transform('EPSG:4326', 'EPSG:3857')
  })
  const vectorSource = new VectorSource({
    features: features,
  });
  olMap.getView().fit(vectorSource.getExtent());
  olMap.getLayers().push(
    new VectorLayer({
      source: vectorSource,
      style: setFeaturesStyle('blue', 'red'),
      zIndex: 100
    })
  );
}
```