# vue2工具库

## 1. upload不直接上传
```html
<el-upload
    class="upload_wrap"
    ref="upload"
    action="#"
    :limit="1"
    :show-file-list="true"
    :file-list="fileList"
    :on-exceed="handleExceed"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-change="uploadChange"
    :auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">支持扩展名：.doc .docx .pdf，文件小于5MB</div>
</el-upload>

<script>
data() {
    return {
        // 上传图片参数
        rawFile: {},  // 传值
        fileList: [],  // 页面显示
    }
}

/**
 * el-upload common
 */
// 删除文件之前的钩子
beforeRemove(file) {
    return this.$confirm(`确定移除 ${ file.name }？`);
},
handleExceed() {
    this.$message.warning(`文件超出上限`);
},
// 删除之后触发
handleRemove() {
    this.rawFile = []
},
// 上传文件时触发
uploadChange(file) {
    // console.log(file)

    this.rawFile = file.raw
},
</script>
```

## 2. 选项卡异步切换
```js
// 选项卡异步切换
switchTab(tab) {
    // console.log(tab)

    for (let [key] of Object.entries(this.tabRefresh)) {
    if (key == tab) {
        this.tabRefresh[key] = true;
    } else {
        this.tabRefresh[key] = false;
    }
    }
},

// 刷新节点
refreshNodes(tab) {
    // console.log(tab.label)

    this.tableData = []

    switch (tab.label) {
    case "aa":
        this.switchTab('jsgzVisible');
        break;
    case "bb":
        this.switchTab('znzzVisible');
        break;
    case "cc":
        this.switchTab('xxcyxmVisible');
        break;
    case "dd":
        this.switchTab('gcwlxmVisible');
        break;
    case "ee":
        this.switchTab('gyhlwptVisible');
        break;
    case "ff":
        this.switchTab('czfcxmVisible');
        break;
    }

    this.getTable()
},

// 刷新所有列表 - 判断当前tab项刷新
refreshList() {
    // console.log(this.librarybActive)

    this.tableData = []

    switch(this.librarybActive) {
    // 技术改造库
    case "jsgz":
        this.aa()
        break;
    // 智能制造库
    case "znzz":
        this.bb()
        break;
    // 新兴产业项目库
    case "xxcyxm":
        this.cc()
        break;
    // 工厂物联网项目库
    case "gcwlxm":
        this.dd()
        break;
    // 工业互联网平台项目库
    case "gyhlwpt":
        this.ee()
        break;
    // 财政扶持项目库
    case "czfcxm":
        this.ff()
        break;
    }

    this.getTable()
},
```

## 3. 在vue项目中使用高德地图的geojson
- 安装vue-amap
- 在main.js中配置
```js
AMap.initAMapApiLoader({
    // 高德key
    key: 'key',
    // 插件集合 （插件按需引入）
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation', 'AMap.DistrictSearch', 'AMap.Marker']
})
``` 
- 在vue文件中引入并使用
    - 基础使用
    ```html
    <el-amap ref="map" class="amap-box" :vid="'amap-vue'" :center='center' :zoom='zoom' :events="events"></el-amap>

    <script>
    export default {
        data () {
            return {
                /**
                * 地图基础属性
                */
                center: [107.943579, 30.131735],
                zoom: 7,
                events: {
                    init: o=> {
                        // 供出地图的实例
                        window.amapview = o

                        // 获取geojson
                        this.getGeoJson()
                    }
                },
            }
        },

        computed: {
        },

        methods: {
            // 获取地图信息
            getMapInfo() {
                console.log("AMap", AMap)

                // 必须是异步
                setTimeout(() => {
                    console.log("amapview", window.amapview)

                    window.amapview.on('click', e=> {
                        // console.log("地图点击事件", e)

                        // 地图坐标
                        this.getPosition(e)
                    })

                    window.amapview.on('moveend', ()=> {
                        this.logMapinfo()
                    })
                }, 0);
            },

            // 获取地图信息
            logMapinfo() {
                console.log("当前级别", window.amapview.getZoom())
                console.log("当前中心点", window.amapview.getCenter())
            },

            // 地图坐标
            getPosition(e) {
                console.log('您在 ['+e.lnglat.getLng()+','+e.lnglat.getLat()+'] 的位置点击了地图');
            },
            
            // 获取geojson
            getGeoJson() {
                this.axios.get("https://a.amap.com/jsapi_demos/static/geojson/chongqing.json").then(res=> {
                    // console.log(res.data)

                    // 获取geojson数据
                    let geoJSONData = res.data;

                    // 初始化geojson，获取geojson地图对象
                    let geojsonLayer = new AMap.GeoJSON({
                        geoJSON: geoJSON,

                        // 还可以自定义getMarker和getPolyline
                        getPolygon: function(geojson, lnglats) {
                            // 计算面积
                            var area = AMap.GeometryUtil.ringArea(lnglats[0])

                            return new AMap.Polygon({
                                path: lnglats,
                                fillOpacity: 1 - Math.sqrt(area / 8000000000),// 面积越大透明度越高
                                strokeColor: 'white',
                                fillColor: 'red'
                            });
                        }

                        this.$message.success("geojson加载成功")

                        // 设置地图
                        geojsonLayer.setMap(window.amapview);
                }).catch({})
            },
        },

        created() {
            
        },

        mounted() {
        }
    }
    </script>

    ```
    - 将geojson功能封装并添加点击事件
        - GeojsonMap.vue
        ```html
        <template>
            <section class="main_cont amap-wrapper">
                <el-amap ref="map" class="amap-box" :vid="'amap-vue'" :center='center' :zoom='zoom' :events="events"></el-amap>
            </section>
        </template>

        <script>
        export default {
            name: "geojsonmap",

            props: {
                /* selCityName: {
                    type: String,
                    default: ""
                }, */
            },

            components: {

            },

            data () {
                return {
                    /**
                    * 地图基础属性
                    */
                    center: [107.943579, 30.131735],
                    zoom: 7,
                    events: {
                        init: o=> {
                            // 供出地图的实例
                            window.amapview = o

                            // 获取geojson
                            this.getGeoJson()
                        }
                    },
                    // polygon相关
                    polygonInitColor: "#f00",  // polygon初始化颜色
                    polygonMarkerColor: "#00f",  // polygon遮罩颜色
                    // geojson
                    globalGeoJsonData: {},  // 全局geojson
                }
            },

            computed: {
            },

            methods: {
                /**
                * geojsoon初始配置
                */
                // 初始化geojson配置，返回面
                initGeojsonLayer(data, fillColor) {
                    return new AMap.GeoJSON({
                        // 要加载的标准GeoJSON对象
                        geoJSON: data,

                        // 指定面要素的绘制方式，缺省时为Polygon的默认样式。
                        // geojson为当前要素对应的GeoJSON对象，lnglats为对应的面的路径
                        getPolygon(geojson, lnglats) {
                            // console.log(geojson)

                            let area = AMap.GeometryUtil.ringArea(lnglats[0])

                            return new AMap.Polygon({
                                // 路径
                                path: lnglats,
                                // 面
                                fillOpacity: 1 - Math.sqrt(area / 8000000000),// 面积越大透明度越高
                                // fillOpacity: 0.5,
                                fillColor: fillColor,
                                // 线
                                strokeColor: '#fff',
                                strokeWeight: 0.6,    //线宽
                                strokeStyle: "solid",
                                strokeOpacity: 1, //线透明度
                            });
                        }
                    })
                },
                // 跳转到geojson
                jumpToGeojson() {
                    window.amapview.setZoom(this.zoom); //设置地图层级
                    window.amapview.setCenter(this.center); //设置地图层级
                },
                // 初始化geojson
                initGeojsonPolygon() {
                    let polygonArr = window.amapview.getAllOverlays('polygon')

                    window.amapview.remove(polygonArr)
                },
                // 重置geojson
                resetMap() {
                    this.jumpToGeojson()  // 跳转到geojson

                    this.initGeojsonPolygon()  // 初始化geojson
                    this.setGeojsonMap(this.globalGeoJsonData)  // 加载geojson地图
                },

                /**
                * 获取并配置geojson
                */
                // 获取geojson - 并执行一系列方法
                getGeoJson() {
                    this.axios.get("https://a.amap.com/jsapi_demos/static/geojson/chongqing.json").then(res=> {
                        // console.log(res.data)

                        // 获取geojson数据
                        let geoJsonData = res.data

                        // 使geojson对象变成全局
                        this.globalGeoJsonData = geoJsonData

                        // 获取城市列表
                        this.$emit("getcityArray", geoJsonData)

                        // 加载geojson地图
                        this.setGeojsonMap(geoJsonData)

                        this.$message.success("geojson加载成功")
                    }).catch({})
                },

                // 初始化geojson并绑定事件
                setGeoJsonLayer(geoJsonData, color, event, next) {
                    // 获取第一层geojson地图对象
                    let geojsonLayer = this.initGeojsonLayer(geoJsonData, color)

                    // 第一层地图对象触发事件 - 初始化geojson并在地图上渲染
                    geojsonLayer.setMap(window.amapview);

                    // 遍历第一层地图对象遮罩层
                    geojsonLayer.eachOverlay(iterator => {
                        iterator.on(event, e=> {
                            // geojson地图对象事件内容 - 高亮
                            next(e, iterator)
                        })
                    })
                },

                // 加载geojson地图
                setGeojsonMap(geoJsonData) {
                    // 初始化geojson，获取geojson地图对象
                    this.setGeoJsonLayer(geoJsonData, this.polygonInitColor, 'click', (e, iterator)=> {
                        this.resetMap()

                        // 给当前面添加事件
                        this.getGeoEvent(e, iterator, geojsonItem=> {
                            // 处理业务流程
                            // console.log("处理geojson业务流程")

                            // 使用geojson示例
                            this.getGeoJsonData(geojsonItem)
                        })
                    })
                },

                // 配置geojson事件
                getGeoEvent(e, geoitem, next) {
                    // 将当前地图对象转换成geojson格式以便获取数据
                    let geojsonItem = geoitem.toGeoJSON()

                    // 处理业务流程
                    next(geojsonItem)

                    // 获取第二层geojson地图对象
                    let geojsonLayerItem = this.initGeojsonLayer(geojsonItem, this.polygonMarkerColor)

                    // 第二层地图对象触发事件 - 设置地图
                    geojsonLayerItem.setMap(window.amapview);

                    // console.log(geojsonItem)

                    // 第二层地图对象触发事件
                    this.geojsonEvent(geojsonLayerItem, ()=>{})
                },

                // 第二层地图对象触发事件
                geojsonEvent(geojsonLayerItem, next) {
                    // console.log(geojsonLayerItem)

                    // 第二层地图对象触发事件 - 鼠标移除
                    geojsonLayerItem.on('mouseout', e=> {
                        // console.log("鼠标移除事件")

                        // 鼠标移出，移除面
                        geojsonLayerItem.hide()
                    })

                    // 第二层地图对象触发事件 - 鼠标点击
                    geojsonLayerItem.on('click', ()=> {
                        console.log("鼠标点击事件")

                        // 鼠标点击，移除面
                        geojsonLayerItem.hide()
                        next()
                    })
                },

                /**
                * 供出地图数据，以方便业务使用
                * 业务流程
                */
                // 使用geojson示例
                getGeoJsonData(geojsonItem) {
                    // console.log("处理geojson业务流程")

                    let cityName = ""

                    if(typeof geojsonItem === "string") {
                        cityName = geojsonItem
                    } else {
                        cityName = geojsonItem.properties.name
                    }

                    this.$emit("getGeoJsonData", cityName)
                },

                // 根据按钮选择地图
                selectName(val) {
                    this.resetMap()

                    let pointPolygon = {}  // 选中面

                    this.globalGeoJsonData.features.forEach(item=> {
                        let geojsonLayerItem = this.initGeojsonLayer(item, this.polygonMarkerColor)
                        // console.log(geojsonLayerItem)

                        if(item.properties.name === val) {
                            // 拷贝对象
                            pointPolygon = geojsonLayerItem
                            // console.log(pointPolygon)

                            // 第二层地图对象触发事件
                            this.geojsonEvent(geojsonLayerItem, ()=>{
                                // console.log("第二层地图对象", item)

                                // 执行业务流
                                this.getGeoJsonData(val)
                            })
                        }
                    })

                    window.amapview.add(pointPolygon)
                    // pointPolygon.setMap(window.amapview);
                },
            },

            created() {
                
            },

            mounted() {
            }
        }
        </script>

        <style lang="less" scoped>
        .amap-wrapper {
            padding: 0;
            position: relative;
            width: 100%;
            height: 100%;

            .amap-box {
                position: absolute;
            }

            .amap-box {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                
            }
        }
        </style>
        ```
        - exam.vue
        ```html
        <template>
            <section class="main_cont">
                <div class="filter_wrap">
                    <el-button type="primary" @click="resetMap">初始化</el-button>
                    <el-select v-model="selCityName" placeholder="请选择城市" @change="selectName">
                        <el-option v-for="item in cityArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>

                <GeojsonMap ref="geojsonmap"
                    @getcityArray="getcityArray" 
                    @getGeoJsonData="getGeoJsonData"
                />

                <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    >
                    <span>这是一段信息</span>
                    <p>城市名称：{{ cityName }}</p>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false, resetForm()">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false, saveForm()">确 定</el-button>
                    </span>
                </el-dialog>
            </section>
        </template>

        <script>
        import GeojsonMap from '@/components/tools/GeojsonMap'

        export default {
            name: "testmap8",

            components: {
                GeojsonMap,
            },

            data () {
                return {
                    /**
                    * 业务
                    */
                    dialogVisible: false,
                    cityName: "",  // 存储当前城市名称
                    cityArr: [],  // 下拉框
                    selCityName: "",  // 点击按钮选择城市
                }
            },

            computed: {
            },

            methods: {
                /**
                * 地图
                */
                // 初始化地图
                resetMap() {
                    this.$refs.geojsonmap.resetMap()

                    this.resetForm()
                },

                // 初始化表单
                resetForm() {
                    this.selCityName = ""
                },

                /**
                * 业务流程
                */
                // 获取城市列表
                getcityArray(geoJsonData) {
                    // console.log("获取城市列表", geoJsonData)

                    geoJsonData.features.forEach(item=> {
                        // console.log(item.properties.name)
                        this.cityArr.push({
                            label: item.properties.name,
                            value: item.properties.name
                        })
                    })
                },

                // 获取geojson数据 - 处理geojson业务流程
                getGeoJsonData(cityName) {
                    console.log("获取geojson数据 - 处理geojson业务流程", cityName)

                    this.cityName = cityName

                    this.dialogVisible = true  // 显示弹窗
                },

                // 根据按钮选择地图
                selectName(val) {
                    console.log(val)
                    this.$refs.geojsonmap.selectName(val)
                },

                // 保存
                saveForm() {
                    this.selCityName = this.cityName
                }
            },

            created() {
            },

            mounted() {
            }
        }
        </script>

        <style lang="less" scoped>
        .main_cont {
            position: relative;
            width: 100%;
            height: 100%;
            padding: 0;

            .filter_wrap {
                position: absolute;
                z-index: 1;
                top: 10px;
                left: 10px;

                .el-button, .el-select {
                    margin-right: 15px;
                }
            }
        }
        </style>
        ```

## 4. vue中cascader级联选择器
```html
<template>
  <el-cascader v-model="currentAddressStr" :props="props" @change="addressHandleChange" />
</template>

<script>
// api

export default {
  data () {
    return {
      currentAddressStr: this.addressStr,  // vue不推荐直接在子组件中修改父组件传来的props的值
      props: {
        lazy: true,
        // heckStrictly: true,
        lazyLoad: (node, resolve) => {
          // 级联控件 - 选地址
          this.selectAddress(node, resolve)
        }
      },
    }
  },

  props: {
    // 级联控件数据 - 结果数据
    addressStr: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    /**
     * api
     */
    // 获取服务区地址 - 省
    getProvinceAreaList () {
      return new Promise((resolve, reject) => {
        getProvinceAreaList().then(res => {
          resolve(res.rows)
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 根据code获取区域地址
    getRegionsByCode (code) {
      return new Promise((resolve, reject) => {
        getRegionsByCode(code).then(res => {
          if (res.data) {
            resolve(res.data.serviceAreaList)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },

    /**
     * 控件
     */
    // 级联控件 - 选地址
    async selectAddress (node, resolve) {
      const { level } = node;

      if (level === 0) {
        let provinceAreaList = await this.getProvinceAreaList()
        // console.log(provinceAreaList)

        const nodes = provinceAreaList.map(item => ({
          value: item.regionCode,
          label: item.regionName,
          leaf: node.level >= 2,
        }))
        resolve(nodes);
      }

      if (level === 1) {
        if(node.value === 'xxx') {
            let data
            resolve(data)
            return
        }

        let regionsList = await this.getRegionsByCode(node.value)

        const nodes = regionsList.map(item => ({
          value: item.id.toString(),
          label: item.serviceAreaName + "(" + item.geographicalDivision + ")",
          leaf: node.level === 1,
        }))

        resolve(nodes);
      }
      
      // 到最后一级的时候消除加载圈及禁止继续请求
      if(level === 2) {
        let data
        resolve(data)
        return
      }
    },

    // 切换区域响应事件
    addressHandleChange (val) {
    //   console.log("tools", val)

      // 父组件修改子组件model时触发
      this.currentAddressStr = val

      if (val[0] === 'xxx') {
        return
      }

      this.$emit("addressHandleChange", val)
    }
  }
}
</script>

<!-- cascaderFlag 执行时显示，触发回调，走业务 -->
<cascader-tool ref="cascaderRef" @addressHandleChange="addressHandleChange" :addressStr="addressStr" v-if="cascaderFlag" />
```

## 5. 使用vue-simple-uploader分片上传
- 安装vue-simple-uploader并使用
- yarn add vue-simple-uploader
```main.js
import uploader from 'vue-simple-uploader';
Vue.use(uploader)

import uploadToolsBig from './components/managerTools/uploadManager/uploadToolsBig'
Vue.component("uploadToolsBig", uploadToolsBig);
```
- uploadToolsBig
```html
<template>
  <!-- 上传器 -->
  <uploader ref="uploader" :options="options" :autoStart=false :file-status-text="fileStatusText"
    @file-added="onFileAdded" @file-success="onFileSuccess" @file-progress="onFileProgress" @file-error="onFileError"
    class="uploader-ui">
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <div>
        <uploader-btn id="global-uploader-btn" :attrs="attrs" ref="uploadBtn">选择文件<i
            class="el-icon-upload el-icon--right"></i></uploader-btn>
      </div>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
</template>

<script>
import { ACCEPT_CONFIG } from './config';
import SparkMD5 from 'spark-md5';
import { mergeFile } from "@/api/common";

export default {
  data() {
    return {
      options: {
        //目标上传 URL，默认POST
        // target: process.env.VUE_APP_PROX + "/uploader/chunk",
        target: process.env.VUE_APP_BASE_UPLOAD_API + "/uploader/chunk",
        //分块大小(单位：字节)
        chunkSize: '2048000',
        //上传文件时文件内容的参数名，对应chunk里的Multipart对象名，默认对象名为file
        fileParameterName: 'upfile',
        //失败后最多自动重试上传次数
        maxChunkRetries: 3,
        //是否开启服务器分片校验，对应GET类型同名的target URL
        testChunks: true,
        /*
        服务器分片校验函数，判断秒传及断点续传,传入的参数是Uploader.Chunk实例以及请求响应信息
        reponse码是successStatuses码时，才会进入该方法
        reponse码如果返回的是permanentErrors 中的状态码，不会进入该方法，直接进入onFileError函数 ，并显示上传失败
        reponse码是其他状态码，不会进入该方法，正常走标准上传
        checkChunkUploadedByResponse函数直接return true的话，不再调用上传接口
        */
        checkChunkUploadedByResponse: function (chunk, response_msg) {
          let objMessage = JSON.parse(response_msg);
          if (objMessage.skipUpload) {
            return true;
          }
          return (objMessage.uploadedChunks || []).indexOf(chunk.offset + 1) >= 0;
        }
      },
      attrs: {
        accept: ACCEPT_CONFIG.getAll()
      },
      fileStatusText: {
        success: '上传成功',
        error: '上传失败',
        uploading: '上传中',
        paused: '暂停',
        waiting: '等待上传'
      },
    }
  },
  methods: {
    onFileAdded(file) {
      this.computeMD5(file);
    },
    /*
    第一个参数 rootFile 就是成功上传的文件所属的根 Uploader.File 对象，它应该包含或者等于成功上传文件；
    第二个参数 file 就是当前成功的 Uploader.File 对象本身；
    第三个参数就是 message 就是服务端响应内容，永远都是字符串；
    第四个参数 chunk 就是 Uploader.Chunk 实例，它就是该文件的最后一个块实例，如果你想得到请求响应码的话，chunk.xhr.status就是
    */
    onFileSuccess(rootFile, file, response, chunk) {
      //refProjectId为预留字段，可关联附件所属目标，例如所属档案，所属工程等
      file.refProjectId = "123456789";
      mergeFile(file).then(responseData => {
        if (responseData.data.code === 415) {
          console.log("合并操作未成功，结果码：" + responseData.data.code);
        }
      }).catch(function (error) {
        console.log("合并后捕获的未知异常：" + error);
      });
    },
    onFileError(rootFile, file, response, chunk) {
      console.log('上传完成后异常信息：' + response);
    },

    /**
     * 计算md5，实现断点续传及秒传
     * @param file
     */
    computeMD5(file) {
      file.pause();

      //单个文件的大小限制2G
      let fileSizeLimit = 2 * 1024 * 1024 * 1024;
      console.log("文件大小：" + file.size);
      console.log("限制大小：" + fileSizeLimit);
      if (file.size > fileSizeLimit) {
        this.$message({
          showClose: true,
          message: '文件大小不能超过2G'
        });
        file.cancel();
      }

      let fileReader = new FileReader();
      let time = new Date().getTime();
      let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
      let currentChunk = 0;
      const chunkSize = 10 * 1024 * 1000;
      let chunks = Math.ceil(file.size / chunkSize);
      let spark = new SparkMD5.ArrayBuffer();
      //由于计算整个文件的Md5太慢，因此采用只计算第1块文件的md5的方式
      let chunkNumberMD5 = 1;

      loadNext();

      fileReader.onload = (e => {
        spark.append(e.target.result);

        if (currentChunk < chunkNumberMD5) {
          loadNext();
        } else {
          let md5 = spark.end();
          file.uniqueIdentifier = md5 + time;
          file.resume();
          console.log(`MD5计算完毕：${file.name} \nMD5：${md5 + time} \n分片：${chunks} 大小:${file.size} 用时：${new Date().getTime() - time} ms`);
        }
      });

      fileReader.onerror = function () {
        this.error(`文件${file.name}读取出错，请检查该文件`)
        file.cancel();
      };

      function loadNext() {
        let start = currentChunk * chunkSize;
        let end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

        fileReader.readAsArrayBuffer(blobSlice.call(file.file, start, end));
        currentChunk++;
        console.log("计算第" + currentChunk + "块");
      }
    },
    close() {
      this.uploader.cancel();
    },
    error(msg) {
      this.$notify({
        title: '错误',
        message: msg,
        type: 'error',
        duration: 2000
      })
    },
    onFileProgress(e) {
      console.log(e)
    }
  }
}
</script>

<style>
.uploader-ui {
  padding: 15px;
  margin: 40px auto 0;
  font-size: 12px;
  font-family: Microsoft YaHei;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.uploader-ui .uploader-btn {
  margin-right: 4px;
  font-size: 12px;
  border-radius: 3px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
}
.uploader-ui .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
```
- config.js
```js
export const ACCEPT_CONFIG = {
  image: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'],
  video: ['.mp4', '.rmvb', '.mkv', '.wmv', '.flv'],
  document: ['.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.tif', '.tiff', '.rar', '.zip'],
  getAll() {
    return [...this.image, ...this.video, ...this.document]
  },
};
```
- axios.js
```js
import axios from 'axios'

const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_UPLOAD_API,
    timeout: 5000
});

export const requestApi = (option) => {
  if (option.isJson && JSON.stringify(option.data) !== {}) {
    return service({
      method: option.method,
      url: `${option.url}`,
      data: option.data,
      headers: {
          'Content-Type': 'application/json'
      }
    })
  } else if (option.isJson && JSON.stringify(option.data) === {}) {
    return service({
      method: option.method,
      url: `${option.url}`,
      data: option.data,
      headers: {
          'Content-Type': 'application/json'
      }
    })
  } else if (!option.isJson && JSON.stringify(option.data) !== {}) {
    return service({
      method: option.method,
      url: `${option.url}`,
      params: option.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  } else if (!option.isJson && JSON.stringify(option.data) === {}) {
    return service({
      method: option.method,
      url: `${option.url}`
    })
  }
}
```
- api.js  (uploadFile.js)
```js
import {requestApi} from '@/utils/axios'

export const mergeFile = data => {
  return  requestApi({
      url: '/uploader/mergeFile',
      method: 'post',
      isJson: true,
      data: JSON.stringify(data)
  });
}
```
- uploadFile.js完整
```js
import {requestApi} from '@/utils/axios'

const option = (url, data, method)=> {
  return {
    url,
    method: ''? method:'post',
    isJson: true,
    data
  }
}

export const mergeFile = data => {
  return requestApi(option('/uploader/mergeFile', JSON.stringify(data)));
}

export const selectFileList = params => {
  return requestApi(option('/uploader/selectFileList', params));
}

export const deleteFile = params => {
  return requestApi(option('/uploader/deleteFile', params));
}

export const deleteFilePhysics = params => {
  return requestApi(option('/uploader/deleteFilePhysics', params));
}

export const downloadFile = params => {
  return requestApi(option('/uploader/download', params));
}

```
- 显示 - uploadRes.vue
```html
<template>
  <section class="upload_table" :style="{width:uploadWidth}">
    <!-- table主要区域 begin -->
    <el-table :data="fileList" stripe class="table" ref="multipleTable" header-cell-class-name="table-header" v-loading="loading" v-if="total!==0">
      <!-- <el-table-column label="序号" type="index" width="55" align="center"></el-table-column> -->
      <el-table-column prop="id" label="ID" align="center" v-if="isShow"></el-table-column>
      <el-table-column prop="filename" label="文件名" show-overflow-tooltip></el-table-column>
      <el-table-column prop="totalSizeName" label="文件大小" width="100"></el-table-column>
      <el-table-column prop="location" label="location" align="center" v-if="isShow"></el-table-column>
      <el-table-column prop="identifier" label="identifier" align="center" v-if="isShow"></el-table-column>
      <el-table-column prop="isDelete" label="是否逻辑删除" v-if="isSurper"></el-table-column>
      <el-table-column prop="createTime" label="上传时间" width="100">
        <template slot-scope="scope">
          {{ scope.row.createTime.substring(0, 10) }}
        </template>
      </el-table-column>
      <!-- <el-table-column prop="updateTime" label="上传时间" width="160"></el-table-column> -->
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-download" class="blue" @click="handleDownload(scope.$index, scope.row)">下载</el-button>
          <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)" v-if="!isView">{{ isSurper?'逻辑删除':'删除' }}</el-button >
          <el-button type="text" icon="el-icon-delete" class="red" @click="handleDeletePhysics(scope.$index, scope.row)" v-if="isSurper">物理删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <pagination
        v-show="queryParams.pageSize/total<1"
        :total="total"
        :page.sync="queryParams.pageIndex"
        :limit.sync="queryParams.pageSize"
        @pagination="initTable" /> -->
  </section>
</template>

<script>
import { selectFileList, deleteFile, deleteFilePhysics } from "@/api/uploadFile";

const pageSizeLimit = 50
export default {
  props: {
    isView: {
      type: Boolean,
      default: false
    },
    isSurper: {
      type: Boolean,
      default: false
    },
    uploadWidth: {
      type: String,
      default: '38%'
    }
  },

  data () {
    return {
      loading: false,
      isShow: false,
      queryParams: {
        pageIndex: 1,
        pageSize: pageSizeLimit,
        isDelete: '0'
      },
      total: 0,
      fileList: [],
      deltxt: '删除',
    }
  },

  methods: {
    initTable(query) {
      this.loading = true

      if(query) {
        this.queryParams = Object.assign(this.queryParams, query)
      }

      selectFileList(this.queryParams).then(res=> {
        this.loading = false
        this.total = res.data.data.total
        this.fileList = res.data.data.list

        /* console.log(res.data.data.total)
        if(this.total === 0) {

        } */
      })
    },
    //下载
    handleDownload(index, row) {
      this.loadingOverLay = this.$loading({
        lock: true,
        text: '文件生成中',
        spinner: 'el-icon-loading',
        background: 'rgba(0,0,0,0.7)'
      });
      var elemIF = document.createElement('iframe');
      elemIF.src =
        process.env.VUE_APP_BASE_UPLOAD_API +
        '/uploader/download?id=' +
        row.id +
        '&filename=' +
        row.filename +
        '&location=' +
        row.location;
      elemIF.style.display = 'none';
      document.body.appendChild(elemIF);
      this.loadingOverLay.close();
    },
    // 删除操作
    handleDelete(index, row) {
      // 二次确认删除
      this.$confirm('确定要删除吗？', '提示', {
        type: 'warning'
      }).then(async () => {
        let result = await deleteFile(row);
        let { code } = result.data
        if(code === 200) {
          this.$message.success('删除成功');

          this.initTable()
        }
      });
    },
    // 物理删除-操作
    handleDeletePhysics(index, row) {
      // 二次确认删除
      this.$confirm('确定要删除吗？', '提示', {
        type: 'warning'
      }).then(async () => {
        let result = await deleteFilePhysics(row);
        let { code } = result.data
        if(code === 200) {
          this.$message.success('物理删除成功');

          this.initTable()
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .el-table {
  position: initial;
  margin-top: -6px;

  .el-table__header-wrapper {
    display: none;
  }

  .el-table__body-wrapper {
    td {
      padding: 0;
      border: none;

      button {
        margin: 0;
        padding: 0;

        span, i {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
```
- 使用
```html
<template>
<uploadToolsBig :btnTxt="btnTxt"
                :typeSubmitInfo="typeSubmitInfo"
                :ifCover="ifCover"
                :uploadParams="uploadParams"
                @getRowData="getUploadParams(1)"
                @initUploadTable="initCurrentUploadTable(1)" />
<uploadRes ref="uploadRes1Ref" :uploadWidth="uploadWidth" />

<uploadToolsBig :btnTxt="btnTxt"
                :typeSubmitInfo="typeSubmitInfo"
                :ifCover="ifCover"
                :uploadParams="uploadParams"
                @getRowData="getUploadParams(2)"
                @initUploadTable="initCurrentUploadTable(2)" />
<uploadRes ref="uploadRes2Ref" :uploadWidth="uploadWidth" />

<uploadToolsBig :btnTxt="btnTxt"
                :typeSubmitInfo="typeSubmitInfo"
                :ifCover="ifCover"
                :uploadParams="uploadParams"
                @getRowData="getUploadParams(9)"
                @initUploadTable="initCurrentUploadTable(4)" />
<uploadRes ref="uploadRes4Ref" :uploadWidth="uploadWidth" />
</template>

<script>
export default {
  data () {
    return {
      uploadWidth: '88%',
      btnTxt: '上传文件',
      typeSubmitInfo: "支持扩展名：.rar .zip .doc .docx .pdf .jpg...",
      ifCover: 1,
      uploadParams: {
        itemId: this.$route.query.id,  // 对象id
        fileType: 2,  // 文件类型 - 资质审查资料
        shopModel: 1,  // 默认品牌直营
        fileModel: 1,  // 品牌直营1
        // objectId: undefined
      },
    }
  },

  methods: {
    // 获取ref
    getCurrentRef(val) {
      return this.$refs[`uploadRes${val}Ref`]
    },
    // 渲染所有文件列表
    initUpload() {
      console.log("渲染所有文件列表")
      // this.uploadParams.fileModel = 2

      const setObj =val=> {
        return {
          fileModel: val
        }
      }
      const ifRef = (ref, params)=> {
        if(ref) {
          ref.initTable(params)
          // next()
        }
      }
      const parseObj = val=> {
        return JSON.parse(JSON.stringify(Object.assign(this.uploadParams, setObj(val))))
      }

      let uploadParams1 = parseObj(1)
      let uploadParams2 = parseObj(2)
      let uploadParams4 = parseObj(9)

      this.$nextTick(()=> {
        this.getCurrentRef(1).initTable(uploadParams1)
        this.getCurrentRef(2).initTable(uploadParams2)

        ifRef(this.getCurrentRef(4), uploadParams4)
      })
    },
    initCurrentUploadTable(val) {
      // console.log("000", val, this.uploadParams)

      this.$nextTick(()=> {
        this.getCurrentRef(val).initTable(this.uploadParams)
      })
    },
    // 父级传的方法
    showUpload(val) {
      // console.log(val)

      /* this.uploadParams.objectId = val.brandMerchantNo

      this.uploadDialogVisible = true */

      this.initUpload()
    },
    // 父级传的方法
    handleClick(tab) {
      // console.log(this.$refs)

      if(tab.name === 'ppzy') {
        this.uploadParams.shopModel = 1
      } else {
        this.uploadParams.shopModel = 2
      }

      this.initUpload()
    },

    // 获取上传参数
    getUploadParams(num) {
      // console.log(num)

      this.uploadParams.fileModel = num
    },
  },
}
</script>

<style lang="scss" scoped>
$borderStyle: solid 1px #dbdbdb;

.upload_dialog_wrap {
  ::v-deep .el-dialog {
    .el-dialog__header {
      border-bottom: $borderStyle;

      button {
        display: none;
      }
    }

    .el-dialog__body {
      padding: 0;

      .upload_dialog_cont {
        width: 92%;
        margin: 10px auto;

        .digupload_left, .digupload_right {
          dl {
            &:not(:last-child) {
              margin-bottom: 18px;
            }
            &:last-child {
              margin-bottom: 13px;
            }

            dt {
              position: relative;
              margin-bottom: 10px;
              left: 10px;

              &::before {
                content: '*';
                position: absolute;
                left: -10px;
                top: 50%;
                transform: translateY(-50%);
                width: 7px;
                height: 7px;
                color: #f00;
              }
            }
          }
        }

        .digupload_left, .digupload_right {
          min-width: 49.9%;
        }

        .digupload_left {
          dl.type4 {
            // background: #f00;
            ul {
              li {
                margin-bottom: 10px;

                dl:first-child {
                  margin-bottom: 0px;
                }
              }
            }
          }
        }
      }

      .upload_diagcont_btn {
        border-top: $borderStyle;
        text-align: right;
        padding: 20px 30px;
      }
    }
  }
}
</style>
```

## 5. input快捷限制
```js
<el-input
  type="number"
  oninput="if(value.length>5)value=value.slice(0,4)"
  v-model="zytrtj.inputNum"
  placeholder="请输入"
  class="f-fl"
/>
```

## 6. vue项目添加水印
- `utils/watermark.js`
```js
let watermark = {}
  
let setWatermark = (text, sourceBody) => {
  let id = Math.random()*10000+'-'+Math.random()*10000+'/'+Math.random()*10000
  
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
  
  let can = document.createElement('canvas')
  can.width = 150
  can.height = 120
  
  let cans = can.getContext('2d')
  cans.rotate(-20 * Math.PI / 180)
  cans.font = '15px Vedana'
  cans.fillStyle = 'rgba(0, 0, 0, .5)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  cans.fillText(text, can.width / 20, can.height )
  
  let water_div = document.createElement('div')
  water_div.id = id
  water_div.style.pointerEvents = 'none'
  water_div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  if(sourceBody){
    water_div.style.width = '100%'
    water_div.style.height = '100%'
    sourceBody.appendChild(water_div)
  }else{
    water_div.style.top = '3px'
    water_div.style.left = '0px'
    water_div.style.position = 'fixed'
    water_div.style.zIndex = '100000'
    water_div.style.width = document.documentElement.clientWidth  + 'px'
    water_div.style.height = document.documentElement.clientHeight  + 'px'
    document.body.appendChild(water_div)
  }
  
  return id
}
  
/**
 *  该方法只允许调用一次
 *  @param:
 *  @text == 水印内容
 *  @sourceBody == 水印添加在哪里，不传就是body
 * */
watermark.set = (text, sourceBody) => {
  let id = setWatermark(text, sourceBody)
  setInterval(() => {
    if (document.getElementById(id) === null) {
      id = setWatermark(text, sourceBody)
    }
  }, 2000)
  window.onresize = () => {
    setWatermark(text, sourceBody)
  }
}
  
export default watermark
```
- `main.js`
```js
// 水印
import watermark from './utils/watermark.js'
Vue.prototype.$watermark = watermark
```
- vue文件使用
```js
this.$watermark.set("水印内容")
```
- `utils/watermark.js` 支持换行（根据两个空格）
```js
let watermark = {}
  
let setWatermark = (text, sourceBody) => {
  let id = Math.random()*10000+'-'+Math.random()*10000+'/'+Math.random()*10000
  
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }

  let textRes = text.split("  ")
  
  let can = document.createElement('canvas')
  can.width = 200
  can.height = 150

  let cans=can.getContext("2d"); 
  cans.rotate(-20 * Math.PI / 180)
  cans.font = '13px Vedana'
  cans.fillStyle = 'rgba(255, 255, 255, .3)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  
  let initHeight = 35;//绘制字体距离canvas顶部初始的高度

  for(let i=0;i<textRes.length;i++){ 
    cans.fillText(textRes[i],0,initHeight);//绘制截取部分
    initHeight+=20;//20为字体的高度
  }
  
  let water_div = document.createElement('div')
  water_div.id = id
  water_div.style.pointerEvents = 'none'
  water_div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  if(sourceBody){
    water_div.style.width = '100%'
    water_div.style.height = '100%'
    sourceBody.appendChild(water_div)
  }else{
    water_div.style.top = '3px'
    water_div.style.left = '0px'
    water_div.style.position = 'fixed'
    water_div.style.zIndex = '100000'
    water_div.style.width = document.documentElement.clientWidth  + 'px'
    water_div.style.height = document.documentElement.clientHeight  + 'px'
    document.body.appendChild(water_div)
  }
  
  return id
}
  
/**
 *  该方法只允许调用一次
 *  @param:
 *  @text == 水印内容
 *  @sourceBody == 水印添加在哪里，不传就是body
 * */
watermark.set = (text, sourceBody) => {
  let id = setWatermark(text, sourceBody)
  setInterval(() => {
    if (document.getElementById(id) === null) {
      id = setWatermark(text, sourceBody)
    }
  }, 2000)
  window.onresize = () => {
    setWatermark(text, sourceBody)
  }
}
  
export default watermark
```

## 7. 全屏和取消全屏
```html
<button class="full_screen_wrap qp" @click="setFullScreen"></button>

<script>
  export default {
    data() {
      return {
        fullscreen: false,  // 是否全屏
      }
    },

    methods: {
      // 全屏
      setFullScreen() {
        // console.log('全屏')

        // document.documentElement.webkitRequestFullScreen();
        let element = document.documentElement;
          // 判断是否已经是全屏
          // 如果是全屏，退出
          if (this.fullscreen) {
              if (document.exitFullscreen) {
                  document.exitFullscreen();
              } else if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
              } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
              } else if (document.msExitFullscreen) {
                  document.msExitFullscreen();
              }
              
              let fullDom = document.querySelector('.full_screen_wrap')
              fullDom.classList.remove('qp0')
              fullDom.classList.add('qp')

              // console.log('已还原！');
          } else {    // 否则，进入全屏
              if (element.requestFullscreen) {
                  element.requestFullscreen();
              } else if (element.webkitRequestFullScreen) {
                  element.webkitRequestFullScreen();
              } else if (element.mozRequestFullScreen) {
                  element.mozRequestFullScreen();
              } else if (element.msRequestFullscreen) {
                  // IE11
                  element.msRequestFullscreen();
              }
              
              let fullDom = document.querySelector('.full_screen_wrap')
              fullDom.classList.remove('qp')
              fullDom.classList.add('qp0')

              // console.log('已全屏！');
          }
          // 改变当前全屏状态
          this.fullscreen = !this.fullscreen;
      },
    }
  }
</script>

<style lang="less" scoped>
.full_screen_wrap {
  position: absolute;
  top: 14px;
  right: 31px;
  width: 21px;
  height: 21px;
  border: none;

  &.qp {
    background: url('/qp.png') top no-repeat;
    background-size: 100%;
  }

  &.qp0 {
    background: url('/qp0.png') top no-repeat;
    background-size: 100%;
  }
}
</style>
```

## 水印纯css实现
```html
<div v-if="JSON.stringify(urlObj) !== '{}'" class="shuiyin">
  <div class="itemWarp1"  v-for="(item1, i1) in 8" :key="i1" :style="`top:${140 * i1}px`">
    <div class="item" v-for="(item, i) in 10" :key="i" :style="`left:${200 * i + 20}px`">
      <p style="margin-bottom: 3px">{{ urlObj.userName }}&nbsp;&nbsp;{{ urlObj.suffixPhone }}</p>
      <p>
        {{ `${new Date().getFullYear()}`.slice(2) }}
        {{ `${new Date().getMonth() + 1}`.padStart(2, "0") }}
        {{ `${new Date().getDate()}`.padStart(2, "0") }}
      </p>
    </div>
  </div>
</div>

<style>
.shuiyin {
  position: fixed;
  width: 100%;
  height: 1080px;
  top: 0;
  left: 0;
  .itemWarp1 {
    position: absolute;
    height: 50px;
    width: 100%;
    left: 0;
    .item {
      position: absolute;
      top: 10px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.2);
      transform: rotateZ(-25deg);
    }
  }
}
</style>
```

## 大屏自适应示例
```html
<!-- app.vue -->
<script>
import lodash from "lodash";
export default {
  name: 'App',
  data() {
    return {
      style: {
        transform: "scale(1) translate(-50%, -50%)",
        width: "1920px",
        height: "1080px"
      },
    }
  },
  mounted () {
    this.setScale()
    window.addEventListener("resize", lodash.debounce(this.setScale, 1000));
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("resize", this.setScale);
    });
  },
  methods: {
    setScale() {
      const w = window.innerWidth / 1920
      const h = window.innerHeight / 1080
      this.style.transform = `scale(${w},${h}) translate(-50%, -50%)`
    }
  },
}
</script>

<style lang="less" scope>
  #app {
    font-size: 12px;
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transition: 0.1s;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>
```