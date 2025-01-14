# vform3跨页面存储,使用indexdb

## 1. indexdb封装
- indexDb.js
```js
/**
 * 封装的方法以及用法
 * 打开数据库
 */
export const openDB = (dbName, storeName, version = 1) => {
    return new Promise((resolve, reject) => {
        let indexedDB = window.indexedDB
        let db
        const request = indexedDB.open(dbName, version)
        request.onsuccess = function (event) {
            db = event.target.result // 数据库对象
            console.log("开启数据库")
            resolve(db)
        }

        request.onerror = function (event) {
            reject(event)
        }

        request.onupgradeneeded = function (event) {
            // 数据库创建或升级的时候会触发
            console.log('onupgradeneeded')
            db = event.target.result // 数据库对象
            let objectStore
            if (!db.objectStoreNames.contains(storeName)) {
                objectStore = db.createObjectStore(storeName, { keyPath: 'id' }) // 创建表
                // objectStore.createIndex('name', 'name', { unique: true }) // 创建索引 可以让你搜索任意字段
            }
        }
    })
}

/**
 * 新增数据
 */
export const addData = (db, storeName, data) => {
    return new Promise((resolve, reject) => {
        let request = db.transaction([storeName], 'readwrite') // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
            .objectStore(storeName) // 仓库对象
            .add(data)

        request.onsuccess = function (event) {
            resolve(event)
        }

        request.onerror = function (event) {
            throw new Error(event.target.error)
            reject(event)
        }
    })
}

/**
 * 通过主键读取数据
 */
export const getDataByKey = (db, storeName, key) => {
    return new Promise((resolve, reject) => {
        let transaction = db.transaction([storeName]) // 事务
        let objectStore = transaction.objectStore(storeName) // 仓库对象
        let request = objectStore.get(key)

        request.onerror = function (event) {
            reject(event)
        }

        request.onsuccess = function (event) {
            resolve(request.result)
        }
    })
}

/**
 * 通过游标读取数据
 */
export const cursorGetData = (db, storeName) => {
    let list = []
    let store = db.transaction(storeName, 'readwrite') // 事务
        .objectStore(storeName) // 仓库对象
    let request = store.openCursor() // 指针对象
    return new Promise((resolve, reject) => {
        request.onsuccess = function (e) {
            let cursor = e.target.result
            if (cursor) {
                // 必须要检查
                list.push(cursor.value)
                cursor.continue() // 遍历了存储对象中的所有内容
            } else {
                resolve(list)
            }
        }
        request.onerror = function (e) {
            reject(e)
        }
    })
}

/**
 * 通过索引读取数据
 */
export const getDataByIndex = (db, storeName, indexName, indexValue) => {
    let store = db.transaction(storeName, 'readwrite').objectStore(storeName)
    let request = store.index(indexName).get(indexValue)
    return new Promise((resolve, reject) => {
        request.onerror = function (e) {
            reject(e)
        }
        request.onsuccess = function (e) {
            resolve(e.target.result)
        }
    })
}

/**
 * 通过索引和游标查询记录
 */
export const cursorGetDataByIndex = (db, storeName, indexName, indexValue) => {
    let list = []
    let store = db.transaction(storeName, 'readwrite').objectStore(storeName) // 仓库对象
    let request = store.index(indexName) // 索引对象
        .openCursor(IDBKeyRange.only(indexValue)) // 指针对象
    return new Promise((resolve, reject) => {
        request.onsuccess = function (e) {
            let cursor = e.target.result
            if (cursor) {
                list.push(cursor.value)
                cursor.continue() // 遍历了存储对象中的所有内容
            } else {
                resolve(list)
            }
        }
        request.onerror = function (ev) {
            reject(ev)
        }
    })
}

/**
 * 更新数据
 */
export const updateDB = (db, storeName, data) => {
    let request = db.transaction([storeName], 'readwrite') // 事务对象
        .objectStore(storeName) // 仓库对象
        .put(data)

    return new Promise((resolve, reject) => {
        request.onsuccess = function (ev) {
            resolve(ev)
        }

        request.onerror = function (ev) {
            resolve(ev)
        }
    })
}

/**
 * 删除数据
 */
export const deleteDB = (db, storeName, id) => {
    let request = db.transaction([storeName], 'readwrite').objectStore(storeName).delete(id)

    return new Promise((resolve, reject) => {
        request.onsuccess = function (ev) {
            resolve(ev)
        }

        request.onerror = function (ev) {
            resolve(ev)
        }
    })
}

/**
 * 删除数据库
 */
export const deleteDBAll = dbName => {
    // console.log(dbName)
    let deleteRequest = window.indexedDB.deleteDatabase(dbName)
    return new Promise((resolve, reject) => {
        deleteRequest.onerror = function (event) {
            console.log('删除失败')
        }
        deleteRequest.onsuccess = function (event) {
            console.log('删除成功')
        }
    })
}

/**
 * 关闭数据库
 */
export const closeDB = db => {
    db.close()
    console.log('数据库已关闭')
}
```

## 存储
- vform.vue
```vue
<template>
    <v-form-designer class="vform_designer_wrap" ref="VFormDesignerRef" :banned-widgets="bannedWidgets"
        :designer-config="designerConfig" :form-templates="formTemplates"
        @generatePage="generatePage"></v-form-designer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";

import * as indexDb from '@/utils/indexDb.js'
import { ElMessage } from 'element-plus';

const router = useRouter();

const VFormDesignerRef = ref(null)

/* let formData = {
    config: null
} */

// 禁止显示的表单组件
const bannedWidgets = [
    // 'tab',
    /* 'tab',
    'time-range',
    'date-range',
    'table',
    'rate',
    'html-text',
    'color',
    'slider',
    'picture-upload',
    'file-upload',
    'rich-editor',
    'cascader' */
]
// 显示的内容
const designerConfig = {
    /* //是否显示语言切换菜单
    languageMenu: false,
    //是否显示GitHub、文档等外部链接
    externalLink: false,
    //是否显示表单模板
    formTemplates: true,
    //是否禁止修改唯一名称
    widgetNameReadonly: false,
    //是否显示组件事件属性折叠面板
    eventCollapse: true,
    //是否显示清空设计器按钮
    clearDesignerButton: true,
    //是否显示预览表单按钮
    previewFormButton: true,
    //是否显示导入JSON按钮
    importJsonButton: true,
    //是否显示导出JSON器按钮
    exportJsonButton: true,
    //是否显示导出代码按钮
    exportCodeButton: false,
    //是否显示生成SFC按钮
    generateSFCButton: false,
    //是否显示生成页面按钮
    generatePageButton: false,
    toolbarMaxWidth: 300,
    toolbarMinWidth: 300,
    //表单设计器预设CSS代码
    presetCssCode: '' */
}

// 模板
const formTemplates = [
    {
        title: '一个简单的人员信息登记表',
        imgUrl: '/vform-template/image/test1.png',
        jsonUrl: '/vform-template/json/test1.json',
        // description: '表单模板详细说明...'
    },
    {
        title: 'test2',
        imgUrl: '/vform-template/image/drone.jpg',
        jsonUrl: '/vform-template/json/drone.json',
        // description: '表单模板详细说明...'
    },
    {
        title: 'test3',
        imgUrl: '/vform-template/image/highway.jpg',
        jsonUrl: '/vform-template/json/highway.json',
        // description: '表单模板详细说明...'
    }
]

const initIndexDb = async (obj) => {
    const dbName = 'myVFormDB', storeName = 'myVFormStore'
    const db = await indexDb.openDB(dbName, storeName, 1)

    const serchData = async () => {
        return await indexDb.getDataByKey(db, storeName, 'myVFormId_1')
    }

    /**
     * 先查询
     * 如果数据库为空,创建
     * 如果数据库不为空,更新
     */
    serchData().then(async (res) => {
        if (!res) {
            await indexDb.addData(db, storeName, {
                id: "myVFormId_1", // 必须且值唯一
                config: JSON.stringify(obj)
            })
        } else {
            // console.log('已有数据', res)

            await indexDb.updateDB(db, storeName, { id: "myVFormId_1", config: JSON.stringify(obj) })
        }

        await indexDb.closeDB(db)
        ElMessage.success('保存成功')
    })
}

const generatePage = formJson => {
    // console.log('generatePage', formJson)

    initIndexDb(formJson)

    router.push("/complain/vformRender")

    /* router.push({
        path: "/complain/vformRender",
        query: { formJson: JSON.stringify(formJson) },
    }); */
}

// 保存表单
/* function saveFormJson() {
    let formJson = VFormDesignerRef.value.getFormJson()
    formData.config = JSON.stringify(formJson)

    console.log('formData数据', formJson)
} */
</script>

<style lang="scss" scoped>
.vform_designer_wrap {
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;

    :deep .main-content {
        aside.el-aside {
            height: 90vh !important;
            overflow-y: auto;
        }

        section.el-container {
            main.el-main {
                height: 84vh !important;
                overflow-y: auto;
            }
        }
    }

    :deep .float-right.external-link {
        display: none;
    }

    :deep .el-header.main-header {
        display: none;
    }

    :deep .el-container.full-height {
        overflow-y: auto;
    }
}
</style>
```

## 读取
- vformRender.vue
```vue
<template>
    <section class="vformRender">
        <el-button @click="renderFrom">生成表单</el-button>
        <el-button @click="back">返回</el-button>

        <div class="render_wrap" v-loading="false">
            <v-form-render v-if="renderFlag" :form-json="formJson" :form-data="formData" ref="vFormRenderRef" />
        </div>
    </section>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue'
import { useRouter, useRoute } from "vue-router";
import * as indexDb from '@/utils/indexDb.js'

const router = useRouter();
const route = useRoute();

const vFormRenderRef = ref(null)
let renderFlag = ref(false)

let formJson = reactive({})
const formData = reactive({})

const renderFrom = async () => {
    const dbName = 'myVFormDB', storeName = 'myVFormStore'
    const db = await indexDb.openDB(dbName, storeName, 1)

    let data = await indexDb.getDataByKey(db, storeName, 'myVFormId_1')

    formJson = JSON.parse(data.config)
    console.log(formJson)

    renderFlag.value = true

    // formJson = JSON.parse(data.config)

    // renderFlag.value = false

    /* setTimeout(() => {
        if (route.query.formJson) {
            formJson = JSON.parse(route.query.formJson)

            renderFlag.value = true
        }
    }, 1000); */
}

const back = async () => {
    router.push('/complain/vform')
    await indexDb.deleteDBAll('myVFormDB')
}

onUnmounted(async () => {
    await indexDb.closeDB(db)
})
</script>

<style lang="scss" scoped></style>
```