# 封装一个全局导出功能
> - 原先的导出功能以及完成,现在新增了一个需求,在某些情况下,需要审核之后导出,但不可能在每个页面添加dialog,并且这样修改一个地方,其他地方也需要修改,所以需要封装一个全局的导出功能,在需要的时候调用即可
> - 但在每个页面还要进行引入,也十分麻烦,最好不需要在页面引入,直接可以在全局使用

<br />
我们开始  🐶

## 1. 创建全局文件夹(不需要手动引入)
> `@/components/global` ➡️ 我们默认该文件夹下的所有组件不需要引入就可以直接使用
- 在`@/components/`目录下新建一个index.js文件

## 2. 在全局引入
- 在`main.js`中引入文件
```js
import components from '@/components/index.js'

// ......
const app = createApp(App)

// 全局方法挂载
// app.config.globalProperties.useDict = useDict  // vue3种全局挂载方法
// 全局组件挂载
// app.component('DictTag', DictTag)  // 全局组件注册 - 和我们的方案差不多的实现效果,但每个组件都需要在这边进行注册

app.use(components)  // 我们这里使用use
```
- `@/components/index.js`
```js
/*
 * 全局注册组件
 */
import { defineAsyncComponent } from 'vue'

const components = import.meta.glob('./global/*.vue') // 异步方式

const install = (app) => {
    for (const [key, value] of Object.entries(components)) {
        const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
        app.component(name, defineAsyncComponent(value))
    }
}

export default install
```

## 3. 创建全局组件弹窗
- `@/components/global/ExportDialog.vue`
```vue
<template>
  <el-dialog class="export_dialog" width="20%" v-model="showDialog" :close-on-click-modal="false"
    :modal-append-to-body="false" :close-on-press-escape="false">
    <template #header>
      {{ dialogTitle }}
    </template>
    <div class="container">
      <p>......</p>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="directExport">直接导出</el-button>
        <el-button type="primary" plain @click="exportSubmit">提交审核</el-button>
        <el-button @click="showDialog = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useRoute } from 'vue-router'
// ......

const props = defineProps({
  serviceName: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
})

let queryParams = null

const router = useRouter();

// 自定义事件
const emit = defineEmits([
  "directExport",  // 直接导出
]);

const dialogTitle = ref('');
const showDialog = ref(false);

const currentRoute = router.currentRoute.value;
const { meta } = currentRoute

// 直接导出
const directExport = (width) => {
  emit('directExport')

  showDialog.value = false;
}

// 提交审核
const exportSubmit = async () => {
  const { userName } = userStoreData.userMseeage

  let params = {
    param: JSON.stringify(queryParams),  // 导出的查询参数
    creator: userName,  // 创建人
    serviceName: props.serviceName,
    type: props.type  // 导出类型
  }
  // console.log('params', params)

  let addExportRes = await apiCommon(exportApi.submitApprove, params);
  showDialog.value = false;

  ElMessage.success(`提交成功`);

  let time = setTimeout(() => {
    router.push({
      path: '/download',
      query: {
        title: meta.title
      }
    })
    clearTimeout(time)
  }, 1000)
}

/**
 * 父组件调弹框显示方法
 */
const show = (val) => {
  showDialog.value = true;

  dialogTitle.value = `导出 - ${meta.title}`

  queryParams = val
};

defineExpose({ show });
</script>

<style scoped lang="scss">
.export_dialog {
  .container {
    p {
      font-size: 14px;
      color: #333;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>

<style lang="scss">
.export_dialog {
  top: 16vh !important;
}
</style>
```
- 注意事项: 我们使用`router.currentRoute.value`获取当前路由的`meta.title`

## 4. 最后在页面上使用
- 不需要引入直接就可以在各个页面使用
```vue
<el-button type="primary" icon="Download" @click="refExportDialog.show(queryParams)">导出</el-button>

<export-dialog ref="refExportDialog" @directExport="exportData" :type="'导出类型'" />
```