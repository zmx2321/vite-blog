# uniapp工作积累
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 关于rpx
- rpx是基于整个屏幕为750px来进行匹配的
  - 即如果设置成375rpx,按照比例的话,它会是屏幕的一半
  - 如果换到其他不同分辨率的设备,它依旧会是占屏幕的一半

## uniapp中生命周期
- Page页面生命周期函数执行顺序
  - beforeCreate => onLoad => onShow => created => beforeMount => onReady => mounted
  - 刷新数据后
    - beforeUpdate => updated
- 页面加载过程： 
  - 加载=》显示=》加载完成=》页面隐藏=》页面卸载
- 触发页面生命周期： 
  - onLoad-监听页面加载 =》onShow-监听页面显示 =》 onReady-监听页面初次渲染完成 =》 onHide-监听页面隐藏 =》onUnload-监听页面卸载

## uniapp中使用地图
```vue
<template>
<map
  style="width: 100%; height: 300rpx"
  :show-location="true"
  :latitude="mapConfig.latitude"
  :longitude="mapConfig.longitude"
  :markers="mapConfig.marker"
  :scale="scale"
  @markertap="markertap"
  @callouttap="callouttap">
</map>
</template>

<script>
export default {
  data() {
    return {
      mapCtx: {},
      mapConfig: {
        latitude: 23.106574, //纬度
        longitude: 113.324587, //经度
        scale: 13, //缩放级别
        marker: [
          {
            id: 0,
            latitude: 23.13065, //纬度
            longitude: 113.3274, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            //   title:'我在这里',//标注点名
            alpha: 0.5, //透明度
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '天宝大厦', //文本
              color: '#ffffff', //文字颜色
              fontSize: 14, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '10',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          },
          {
            id: 1234597,
            latitude: 23.106574, //纬度
            longitude: 113.324587, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            //  title:'我在这里',//标注点名
            alpha: 0.5, //透明度
            //      label:{//为标记点旁边增加标签   //因背景颜色H5不支持
            //   color:'red',//文本颜色
            //      },
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '广州塔', //文本
              color: '#ffffff', //文字颜色
              fontSize: 14, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '10',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          },
          {
            id: 2,
            latitude: 23.1338, //纬度
            longitude: 113.33052, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            alpha: 0.5, //透明度
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '德隆大厦', //文本
              color: '#ffffff', //文字颜色
              fontSize: 14, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '10',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          },
          {
            id: 3,
            latitude: 23.136455, //纬度
            longitude: 113.329002, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            alpha: 0.5, //透明度
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '羊城国际商贸中心', //文本
              color: '#ffffff', //文字颜色
              fontSize: 14, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '10',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          },
          {
            id: 4,
            latitude: 23.224781, //纬度
            longitude: 113.293911, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            alpha: 0.5, //透明度
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '天瑞广场A座', //文本
              color: '#ffffff', //文字颜色
              fontSize: 16, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '12',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          },
          {
            id: 5,
            latitude: 23.072726, //纬度
            longitude: 113.277921, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            alpha: 0.5, //透明度
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '大米和小米儿童康复(广州盈丰)中心', //文本
              color: '#ffffff', //文字颜色
              fontSize: 14, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '8',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          }
        ]
      }
    }
  },

  computed: {
    marker1() {
      return [
        {
          id: 0,
          latitude: this.mapConfig.latitude, //纬度
          longitude: this.mapConfig.longitude, //经度
          iconPath: '', //显示的图标
          rotate: 0, // 旋转度数
          width: 20, //宽
          height: 30, //高
          title: '我在这里', //标注点名
          // alpha: 0.5, //透明度
          callout: {
            //自定义标记点上方的气泡窗口 点击有效
            content: '天宝大厦', //文本
            color: '#ffffff', //文字颜色
            fontSize: 14, //文本大小
            borderRadius: 15, //边框圆角
            borderWidth: '10',
            bgColor: '#e51860', //背景颜色
            display: 'ALWAYS' //常显
          },
          label: {
            content: '文本1',
            color: '#F76350',
            bgColor: '#fff',
            padding: 5,
            borderRadius: 4
          }
        }
      ]
    }
  },

  onReady() {
    this.mapCtx = wx.createMapContext('myMap')
    // console.log('onReady', this.mapCtx)
  },

  methods: {
    //地图点击事件
    markertap(e) {
      console.log('===你点击了标记点===', e)
    },
    //地图点击事件
    callouttap(e) {
      console.log('地图点击事件', e)
    }
  }
}
</script>
```

## uniapp中转圈动画
```vue
<view class="pgmbask_bot">
  <image src="/static/2.1/cust_ico_cng.png" style="transition: 1s all" :style="rotationStyle" />
  <span @click="changeQues">换一换</span>
</view>

<script>
this.rotate = 0
data() {
  rotationStyle: '',
}

methods: {
  changeQues(e) {
    this.rotate += 360
    this.rotationStyle = `transform: rotate(${this.rotate}deg);`

    // this.getData()
  },
}
</script>
```

## uniapp外链
```vue
<li @click="linkTo"><span>查看官网</span></li>

<script>
linkTo() {
  let webUrl = 'https://xxxx/xx.html' // URL是要跳转的外部地址 作为参数
  uni.navigateTo({
    url: '/pages/components/webLink?url=' + webUrl
  })
},
</script>
```
```vue
<template>
  <web-view :src="pageUrl"></web-view>
</template>

<script>
export default {
  data() {
    return {
      pageUrl: ''
    }
  },
  onLoad(item) {
    // console.log(this.url)
    // 传入需要跳转的链接 使用web-view标签进行跳转
    this.pageUrl = decodeURIComponent(item.webUrl)
  }
}
</script>
```

## uniapp的安全区
```css
padding-bottom: env(safe-area-inset-bottom);
```

## u-view 上传
```js
// 获取文件类型
function getFileTypeUpload(fileName) {
  const index = fileName.lastIndexOf('.')
  const ext = fileName.substr(index + 1).toLowerCase()
  const aImageType = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'psd']
  const aVideoType = ['mp4', 'rmvb', 'flv']
  const aExcel = ['xlsx', 'xls']
  let fileType = -1 // -1-文件 0-表格 1-图片 2-视频
  if (aExcel.includes(ext)) {
    fileType = 0
  }
  if (aImageType.includes(ext)) {
    fileType = 1
  }
  if (aVideoType.includes(ext)) {
    fileType = 2
  }
  return fileType
}

export default function chooseAndUploadFile(files, vm) {
  let uploadArr = []
  const len = files.length
  let count = 0

  return new Promise((resolve, reject) => {
    if (!len) {
      return resolve([])
    }
    next()

    function next() {
      let cur = count++
      if (cur >= len) {
        return resolve(uploadArr)
      }
      const fileItem = files[cur]

      uni
        .uploadFile({
          url: baseURL + 'common/obsUpload',
          filePath: fileItem.url,
          formData: {
            fileType: getFileTypeUpload(fileItem.url),
            ident: 'ex-patrol'
          },
          name: 'file',
          header: { token: token }
        })
        .then(res => {
          let fileObject = JSON.parse(res[1].data).data
          uploadArr.push(fileObject)
          if (cur < len) {
            next()
          }
        })
        .catch(res => {
          if (cur < len) {
            next()
          }
        })
    }
  })
}
```
```vue
<u-upload :fileList="fileList" @afterRead="onListChange" @delete="deletePic" multiple :maxCount="4" width="154rpx" height="154rpx">
  <u-image :fade="false" src="" width="154rpx" height="154rpx"></u-image>
</u-upload>

<script>
data() {
  return {
    fileList: [],
  }
},
methods: {
  // 删除图片
  deletePic(event) {
    this[`fileList${event.name}`].splice(event.index, 1)
  },

  // 多
  onListChange(data) {
    uni.showLoading({ title: '文件上传中' })
    chooseAndUploadFile(data.file, this)
      .then(files => {
        uni.hideLoading()
        // this.fileList = [...this.fileList, ...files]  // 多
        // this.form.pictureUrl = files[0].url  // 单
        // console.log(this.fileList)
      })
      .catch(err => {
        this.fileList = []
        uni.hideLoading()
        uni.showToast({ title: '图片上传失败,请重新上传', icon: 'none', duration: 2000 })
      })
  },

  getImgStr() {
    if (this.fileList > 0) {
      this.fileList.forEach(item => {
        this.form.pictureUrl += item.url + ','
      })

      this.form.pictureUrl = this.form.pictureUrl.replace(/,$/gi, '')
    }
  }
}
</script>
```

## 筛选框封装
- 使用
```vue
<!-- 筛选表单 -->
<form-layer #scrollView :filterOptions="filterOptions" @getFormData="getFormData"></form-layer>

<script setup>
import dayjs from 'dayjs'
import FormLayer from '@/components/form-picker/FormLayer.vue'

const formData = ref({
  // 默认时间
  startTime: dayjs(Date.now() - 60 * 60 * 24 * 1000 * 15).format('YYYY-MM-DD HH:mm'),
  endTime: dayjs(Date.now()).format('YYYY-MM-DD HH:mm')
})

const getFormData = (val) => {
  formData.value = val
  // console.log(formData.value)

  getList()
}

// 状态Map值
const statusMap = new Map([
  [1, '生效'],
  [2, '作废']
])

const filterOptions = ref([
  {
    type: 'datetime',
    label: '开始时间',
    defaultTime: formData.value.startTime
  },
  {
    type: 'datetime',
    label: '结束时间',
    defaultTime: formData.value.endTime
  },
  {
    type: 'picker',
    label: '类型',
    props: 'auditType',
    pickerColumns: [
      [
        {
          label: '全部',
          value: ''
        },
        {
          label: auditTypeMap.get(0),
          value: 0
        },
        {
          label: auditTypeMap.get(1),
          value: 1
        },
        {
          label: auditTypeMap.get(2),
          value: 2
        }
      ]
    ]
  },
  {
    type: 'picker',
    label: '状态',
    props: 'status',
    pickClass: 'wd80',
    pickerColumns: [
      [
        {
          label: '全部',
          value: ''
        },
        {
          label: statusMap.get(1),
          value: 1
        },
        {
          label: statusMap.get(2),
          value: 2
        }
      ]
    ]
  }
])
</script>
```
- FormLayer.vue
```vue
<template>
  <!-- <scroll-view scroll-x class="nav_scroll"> -->
  <div class="nav_scroll" :class="{ nowrap: tagValue === '' }">
    <ul class="nav_ul">
      <li class="nav_li" v-for="(item, index) in filterOptions" :key="index">
        <date-time v-if="item.type === 'datetime'" :defaultTime="item.defaultTime" :label="item.label" @getDateTime="getDateTime" />
        <select-picker
          v-if="item.type === 'picker'"
          @getPickerData="getPickerData"
          :pickClass="item.pickClass"
          :pickLabel="item.label"
          :pickProps="item.props"
          :pickerColumns="item.pickerColumns" />
      </li>
    </ul>

    <b class="tag" @click="getMore">{{ tagValue }}</b>
  </div>
  <!-- </scroll-view> -->

  <view style="position: absolute; right: 0; top: 0; background: #f7f8fa; height: 74rpx; width: 20rpx">
  </view>
</template>

<script setup>
import SelectPicker from '@/components/form-picker/SelectPicker.vue'
import DateTime from '@/components/form-picker/DateTime.vue'

import { ref } from 'vue'

const emit = defineEmits(['getFormData'])

const props = defineProps({
  filterOptions: Array
})

const formData = {}

const tagValue = ref('...')

const getMore = () => {
  // console.log('12456')

  switch (tagValue.value) {
    case '':
      tagValue.value = '...'
      break
    case '...':
      tagValue.value = ''
      break
  }
}

const getDateTime = (val, mode) => {
  // console.log(val, mode)

  switch (mode) {
    case '开始时间':
      formData.startTime = val
      break
    case '结束时间':
      formData.endTime = val
      break
  }

  emit('getFormData', formData)
}

const getPickerData = (obj, mode, keyValue) => {
  // console.log(obj, mode, keyValue)

  formData[mode] = obj[keyValue]

  emit('getFormData', formData)
}
</script>

<style scoped lang="scss">
$navHeight: 80rpx;

.nav_scroll {
  position: relative;
  white-space: nowrap;
  height: 75rpx;
  background: #f7f8fa;

  .nav_ul {
    height: $navHeight;
    width: 92%;
    overflow: hidden;

    .nav_li {
      display: inline-block;
      height: $navHeight;
      line-height: $navHeight;
    }
  }

  .tag {
    position: absolute;
    right: 18rpx;
    top: 1rpx;
    font-size: 18px;
    letter-spacing: 1px;
    z-index: 9999;
  }

  &.nowrap {
    white-space: initial;
    height: initial;

    .nav_ul {
      height: initial;
      overflow: initial;
    }

    .tag {
      top: initial;
      bottom: 22rpx;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 10px solid #8c8c8c;
    }
  }
  // padding: 0 22rpx;

  /* ::-webkit-scrollbar {
    width: 4px !important;
    height: 1px !important;
    overflow: auto !important;
    background: transparent !important;
    -webkit-appearance: auto !important;
    display: block;
  } */

  /* .item {
    display: inline-block; // 设置为行内块
    line-height: 95rpx;
    padding: 0 22rpx;
  } */
}
</style>

```
- DateTime.vue
```vue
<template>
  <input class="input_wrap" v-model="selectTime" @click="showDatetime = true" :disabled="true" :placeholder="label" />

  <u-datetime-picker
    :show="showDatetime"
    v-model="timeDate"
    mode="datetime"
    @cancel="showDatetime = false"
    @confirm="onConfirm"
    :closeOnClickOverlay="true"
    @close="showDatetime = false"></u-datetime-picker>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  formatTimeRule: {
    type: String,
    default: 'YYYY-MM-DD HH:mm:ss'
  },
  defaultTime: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['getEndDateTime'])

const timeDate = ref(Date.now())
const showDatetime = ref(false)
const selectTime = ref(props.defaultTime)

const onConfirm = (e) => {
  selectTime.value = selectTime.value = dayjs(e.value).format('YYYY-MM-DD HH:mm')

  showDatetime.value = false

  // console.log(selectTime.value)

  emit('getDateTime', selectTime.value, props.label)
}
</script>

<style scoped lang="scss">
.input_wrap {
  position: relative;
  width: 263rpx;
  display: inline-block;
  line-height: 95rpx;
  padding-right: 42rpx;
  padding-left: 15rpx;
  margin-right: 25rpx;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;

    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000;
  }
}
</style>
```
- SelectPicker.vue
```vue
<template>
  <input class="input_wrap" :class="pickClass" v-model="currentPicker" @click="setPickData(pickLabel)" :disabled="true" :placeholder="pickLabel" />

  <u-picker
    :show="showPicker"
    :columns="pickerColumns"
    :closeOnClickOverlay="true"
    @close="showPicker = false"
    @cancel="showPicker = false"
    @confirm="onConfirm"
    :keyName="keyName"
    :keyValue="keyValue"></u-picker>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  pickLabel: String,
  pickProps: String,
  pickerColumns: {
    type: Array,
    default: () => []
  },
  keyName: {
    type: String,
    default: 'label'
  },
  keyValue: {
    type: String,
    default: 'value'
  },
  pickClass: {
    type: String
  }
})

const emit = defineEmits(['getPickerData'])

const showPicker = ref(false)
const currentPicker = ref('')

const setPickData = (mode) => {
  // console.log(mode)

  showPicker.value = true
}

const onConfirm = (e) => {
  showPicker.value = false

  // console.log(e.value[0])

  currentPicker.value = e.value[0].label

  emit('getPickerData', e.value[0], props.pickProps, props.keyValue)
}
</script>

<style scoped lang="scss">
.input_wrap {
  position: relative;
  width: 126rpx;
  display: inline-block;
  line-height: 95rpx;
  padding-right: 85rpx;
  padding-left: 15rpx;
  margin-right: 60rpx;

  @for $i from 80 through 126 {
    &.wd#{$i} {
      width: #{$i}rpx !important;
    }
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;

    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000;
  }
}
</style>
```

## uniapp校验
```vue
<template>
  <u-modal :show="modalShow" :title="taskTitle" @confirm="submit" @cancel="modalShow = false" :showCancelButton="true">
    <u--form labelPosition="left" :model="formData" ref="refUForm" labelWidth="100" :rules="rules">
      <u-form-item prop="cancelRemark" label="作废备注" v-if="taskTitle === 'zf'">
        <u--input
          placeholder="请输入"
          type="textarea"
          height="100rpx"
          auto-height="true"
          v-model="formData.cancelRemark"
          :border="true"
          border-color="black"></u--input>
      </u-form-item>
      <u-form-item prop="abnormalCause" label="异常原因" v-if="taskTitle === 'cdk'">
        <u--input
          placeholder="请输入"
          type="textarea"
          height="100rpx"
          auto-height="true"
          v-model="formData.abnormalCause"
          :border="true"
          border-color="black"></u--input>
      </u-form-item>
      <u-form-item prop="handlerRemark" label="处理备注" v-if="taskTitle === 'cdk'">
        <u--input
          placeholder="请输入"
          type="textarea"
          height="100rpx"
          auto-height="true"
          v-model="formData.handlerRemark"
          :border="true"
          border-color="black"></u--input>
      </u-form-item>
    </u--form>
  </u-modal>
</template>

<script setup name="process">
import { ref } from 'vue'
import { http } from '@/api/index.js'
// import { getStorage } from '@/utils/storage'

const emit = defineEmits(['dialogClosed'])
const dialogClosed = () => {
  emit('dialogClosed')
}

const refUForm = ref(null)

const modalShow = ref(false)
const taskTitle = ref('')

const formData = ref({
  cancelRemark: '',
  abnormalCause: '',
  handlerRemark: ''
})

const rules = ref({
  cancelRemark: {
    type: 'string',
    required: true,
    message: '请填写',
    trigger: ['blur', 'change']
  },
  abnormalCause: {
    type: 'string',
    required: true,
    message: '请填写',
    trigger: ['blur', 'change']
  },
  handlerRemark: {
    type: 'string',
    required: true,
    message: '请填写',
    trigger: ['blur', 'change']
  }
})

const showModal = (id, mode) => {
  // console.log(id, mode)

  modalShow.value = true

  taskTitle.value = mode

  formData.value = {
    id
  }
}

const submit = () => {
  refUForm.value
    .validate()
    .then((res) => {
      // console.log(res)
      setTaskComfirm()
    })
    .catch((errors) => {
      console.log(errors)
      // uni.$u.toast('校验失败')
    })
}

const setTaskComfirm = async () => {
  let apiName = ref('')

  switch (taskTitle.value) {
    case 'zf':
      apiName.value = 'cancellationAuditTaskResult'
      break
    case 'cdk':
      apiName.value = 'disposeAuditTaskResult'
      break
    default:
      break
  }

  const params = {
    ...formData.value
  }

  // console.log(params)

  uni.showToast({
    title: '操作成功',
    icon: 'none'
  })
  // modalShow.value = false

  try {
    let res = await http(apiName.value, params)
    if (res.isError) return showReqError(res)
    uni.showToast({
      title: '操作成功',
      icon: 'none'
    })
    modalShow.value = false
    dialogClosed()
  } catch (error) {
    console.log(error)
  }
}

defineExpose({ showModal })
</script>
<style scoped lang="scss">
.btn {
  width: 120rpx;
  height: 60rpx;
  background: #c3a767;
  border-radius: 40rpx;
  color: #ffffff;
  font-weight: bold;
  font-size: 24rpx;
}
</style>

```