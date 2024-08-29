# 封装el-card和表格
> 项目要求在一个弹窗中显示一个个card模块,并且在里面加入表格,因为card比较多,字段也比较多,所以还是需要进行封装

## 封装card核心代码
- IndexDialogInfo
```vue
<template>
    <dialog-info ref="refIndexDialogInfo" class="dialog_info_wrap" :isShowFotter="true">
        <!-- 标题 -->
        <template #DialogTitle>
            <span>{{ currentData.networkType }} xxx - {{ currentData.cellName }}</span>
        </template>
        <!-- 内容 -->
        <template #DialogContainer>
            <div class="dialog_wrap">
                <div class="index4g_wrap index_wrap" v-if="currentData.networkType === '4G'">
                    <index-card v-for='(item, index) in cardColumnData.card4GColumnList' :key="index"
                        :indexCardTitle="cardColumnTitle.card4GColumnTitle[index.split('List')[1] - 1]"
                        :indexCardColumns="item" :indexCardTableData="getCardItemData(4, index)" />
                
                    <!-- 不进行遍历写法
                    <index-card :indexCardTitle="'card1title'"
                        :indexCardTableData="indexCardList.card4GDataList.card4GDataList1"
                        :indexCardColumns="cardColumnData.card4GColumnList.card4GColumnList1" />

                    <index-card :indexCardTitle="'card2title'"
                        :indexCardTableData="indexCardList.card4GDataList.card4GDataList2"
                        :indexCardColumns="cardColumnData.card4GColumnList.card4GColumnList2" /> -->
                </div>
                <div class="index5g_wrap index_wrap" v-if="currentData.networkType === '5G'">
                    <index-card v-for='(item, index) in cardColumnData.card5GColumnList' :key="index"
                        :indexCardTitle="cardColumnTitle.card5GColumnTitle[index.split('List')[1] - 1]"
                        :indexCardColumns="item" :indexCardTableData="getCardItemData(5, index)" />
                </div>
            </div>
        </template>
    </dialog-info>
</template>

<script setup>
import { ref, nextTick } from "vue";
// 组件
import IndexCard from "./IndexCard.vue";
// api相关 - 工具
import { apiCommon } from "@/utils/index.js";
// import * as xxxApi from "@/api/xxx/xxx";
// 数据
import { cardColumnData, cardColumnTitle } from './data/cardColumnData'
import { cardTableData } from './data/cardTableData'  // mock数据

const router = useRouter();
const { proxy } = getCurrentInstance();

const refIndexDialogInfo = ref(null);

const currentData = ref({});
const indexCardList = ref({});

// 遍历获取表格数据
const getCardItemData = (type, index) => {
    return eval(`cardTableData.card${type}GDataList.card${type}GDataList${index.split('List')[1]}`)
}

const getIndexData = async () => {
    console.log("获取数据", cardTableData, cardColumnData)

    let params = {
        ...currentData.value
    }
    console.log(params);
    // let resData = await apiCommon(xxxApi.xxx, params);
    // console.log(resData);

    // 处理数据
    indexCardList.value = cardTableData
};

/**
 * 业务
 */
const show = (val) => {
    currentData.value = val

    getIndexData();

    refIndexDialogInfo.value.show();
    // refIndexDialogInfo.value.setDialogWidth('30%');
};

defineExpose({
    show,
});
</script>

<style lang="scss" scoped>
.dialog_info_wrap {
    .dialog_wrap {
        .index_wrap {
            .el-card {
                cursor: pointer;

                &:not(:last-child) {
                    margin-bottom: 20px;
                }
            }

            .index_cont {}
        }
    }
}
</style>
```
- IndexCard.vue
```vue
<template>
    <el-card shadow="hover">
        <template #header>
            <div class="card-header">
                <span>{{ indexCardTitle }}</span>
            </div>
        </template>
        <div class="index_cont">
            <el-table :data="indexCardTableData" style="width: 100%">
                <el-table-column v-for="(item, index) in indexCardColumns" :key="index" :prop="item.prop" :width="item.width" :label="item.label" />
            </el-table>
        </div>
    </el-card>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    indexCardTitle: {
        type: String,
        default: '',
    },
    indexCardColumns: {
        type: Array,
        default: () => []
    },
    indexCardTableData: {
        type: Array,
        default: () => []
    },
});
</script>
```

## 使用组件
```vue
<index-dialog-info ref="refIndexDialogInfo" />
<el-button link type="primary" size="small" @click="refIndexDialogInfo.value.show(scope.row)">xxx</el-button>
```

## 数据格式
- cardColumnData.js ➡️ 表格字段,不可删
```js
/**
 * 字段数据,不可删
 */
export const cardColumnData = {
    // 4gxxx
    card4GColumnList: {
        // list1
        card4GColumnList1: [
            { prop: 'date1', label: '日期', width: 'auto' },
            { prop: 'name1', label: 'Name', width: 'auto' },
            { prop: 'address1', label: 'address', width: 'auto' }
        ],
        // list2
        card4GColumnList2: [
            { prop: 'date2', label: '日期', width: 'auto' },
            { prop: 'name2', label: 'Name', width: 'auto' },
            { prop: 'address2', label: 'address', width: 'auto' }
        ],
        // list3
        card4GColumnList3: [
            { prop: 'date3', label: '日期', width: 'auto' },
            { prop: 'name3', label: 'Name', width: 'auto' },
            { prop: 'address3', label: 'address', width: 'auto' }
        ],
    },

    // 5gxxx
    card5GColumnList: {
        // list1
        card5GColumnList1: [
            { prop: 'date', label: '日期', width: 'auto' },
            { prop: 'name', label: 'Name', width: 'auto' },
            { prop: 'address', label: 'address', width: 'auto' }
        ],
        // list2
        card5GColumnList2: [
            { prop: 'date', label: '日期', width: 'auto' },
            { prop: 'name', label: 'Name', width: 'auto' },
            { prop: 'address', label: 'address', width: 'auto' }
        ],
    },
};

export const cardColumnTitle = {
    // 4g指标标题
    card4GColumnTitle: [
        'card1title',
        'card2title',
        'card3title',
    ],

    // 5g指标标题
    card5GColumnTitle: [
        'card1title',
        'card2title',
    ]
}
```
- cardTableData.js ➡️ 模拟表格数据
```js
/**
 * mock数据
 */
export const cardTableData = {
    // 4gxxx
    card4GDataList: {
        // list1
        card4GDataList1: [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ],
        // list2
        card4GDataList2: [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ],
        // list3
        card4GDataList3: [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ],
    },

    // 5gxxx
    card5GDataList: {
        // list1
        card5GDataList1: [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ],
        // list2
        card5GDataList2: [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ],
    },
};
```

## 公共DialogInfo代码
> 具体使用方法可以移步前文 -> [封装一个公共的dialog组件](/pages/note/front/project-note/project1/project1-note-4) 查阅
