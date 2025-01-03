# vue3工作积累

## vue3 模板
### vue3 模板 1

```js
<template>
  <section>
    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <br />

    {{ name }} - {{ age }}
    <button @click="changeAge">+age</button>
    <br />

    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改firstName</button>
  </section>
</template>

<script>
import { ref, toRefs, toRef, reactive, computed } from 'vue'

export default {
  props: {
    /* message: {
      type: String,
      default: '',
      required: true
    } */
  },
  setup() {
    // counter编程一个ref的可响应式的引用
    // counter = 100;
    let counter = ref(100)
    const firstName = ref('Kobe')
    const lastName = ref('Bryant')

    // 响应式数据
    const state = reactive({})
    const info = reactive({ name: 'why', age: 18 })
    // let { name, age } = toRefs(info)  // 对所有属性转换成响应式
    let { name } = info
    let age = toRef(info, 'age') // 对一个属性转换成响应式

    // 计算属性 - 数据需要响应式
    // const fullName = computed(() => firstName.value + ' ' + lastName.value)  // 只读,需要重写set方法
    const fullName = computed({
      get: () => firstName.value + ' ' + lastName.value,
      set(newValue) {
        const names = newValue.split(' ')
        firstName.value = names[0]
        lastName.value = names[1]
      }
    })

    // 局部函数
    const increment = () => {
      counter.value++
      console.log(counter.value)
    }
    const changeAge = () => {
      age.value++
      // info.age++
      console.log(age.value)
    }
    const changeName = () => {
      // firstName.value = "James"
      fullName.value = 'test ddd'
    }

    return {
      // reactive数据
      state,

      // 数据
      counter,
      name,
      age,
      fullName,

      // 方法
      increment,
      changeAge,
      changeName
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
```

### vue3 模板 2

```js
<template>
  <section>
    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <br />

    {{ name }} - {{ age }}
    <button @click="changeAge">+age</button>
    <br />

    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改firstName</button>
  </section>
</template>

<script setup>
import { ref, toRefs, toRef, reactive, computed, defineProps } from 'vue'

const props = defineProps({
  /* message: {
    type: String,
    default: '',
    required: true
  } */
})

// counter编程一个ref的可响应式的引用
// counter = 100;
let counter = ref(100)
const firstName = ref('Kobe')
const lastName = ref('Bryant')

// 响应式数据
const state = reactive({})
const info = reactive({ name: 'why', age: 18 })
// let { name, age } = toRefs(info)  // 对所有属性转换成响应式
let { name } = info
let age = toRef(info, 'age') // 对一个属性转换成响应式

// 计算属性 - 数据需要响应式
// const fullName = computed(() => firstName.value + ' ' + lastName.value)  // 只读,需要重写set方法
const fullName = computed({
  get: () => firstName.value + ' ' + lastName.value,
  set(newValue) {
    const names = newValue.split(' ')
    firstName.value = names[0]
    lastName.value = names[1]
  }
})

// 局部函数
const increment = () => {
  counter.value++
  console.log(counter.value)
}
const changeAge = () => {
  age.value++
  // info.age++
  console.log(age.value)
}
const changeName = () => {
  // firstName.value = "James"
  fullName.value = 'test ddd'
}
</script>

<style lang="scss" scoped>
</style>
```

## vue3 定义全局事件总线

- main.js

```js
// eventbus.js
import mitt from "mitt";
const emitter = mitt();
export default emitter;

// 引入事件总线库
import emitter from "@/utils/eventbus";

app.config.globalProperties.$emitter = emitter; // 定义全局事件总线
```

## vue3 的 elementPlus 中 el-dropdown 传参

```html
<el-dropdown
  @command="
    (command) => {
    handleCommand(command, slotProps.row)
    }
"
>
  <span class="el-dropdown-link">
    更多
    <el-icon class="el-icon--right">
      <arrow-down />
    </el-icon>
  </span>
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item command="create">xxx</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>

<script setup>
  const handleCommand = (command, row) => {};
</script>
```

## el-tree 中不能全选

```css
:deep(.el-tree) {
  .el-icon.el-tree-node__expand-icon {
    &.is-leaf {
      display: none;
    }

    &:not(.is-leaf) {
      & + .el-checkbox {
        display: none;
      }
    }
  }
}
```

## vite 跨域配置

```js
proxy: {
  '/proxyApi1': {
    target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL1,
    ws: true, // 是否启用websockets
    changeOrigin: true, // 运行跨域
    rewrite: (path) => path.replace(/^\/proxyApi1/, '') // 重写路径
  }
}
```

## vue3 日期选择器截止昨天

```html
<el-date-picker
  v-model="form.endTime"
  style="width: 238px"
  type="date"
  placeholder="请选择时间"
  :disabled-date="disabledDate"
  format="YYYY-MM-DD"
  value-format="YYYY-MM-DD"
></el-date-picker>

<script setup>
  const disabledDate = (time) => {
    return time.getTime() < Date.now() - 8.64e7;
  };
</script>
```

## el-tree 以及 checkbox 单选

```js
// @check-change="handleSelectedTreeUser"
const handleSelectedTreeUser = (val, selected) => {
  if (val.type === 2 && selected) {
    refMyTree.value.setCheckedKeys([]);
    refMyTree.value.setChecked(val, true);
    selectedUsers.value = [val];
    // console.log(selectedUsers.value)
  }
};

// @change="getSingleUser(item)"
const getSingleUser = (val) => {
  console.log(val);

  selectedUsers.value = selectedUsers.value.includes(val) ? [val] : [];
};
```

## form 表单中自定义校验

```js
const validDataBank = (rule, value, callback) => {
  // const pattern = /[`~!-\·\.@#$^&*()=|{}':;',\\\[\]\.<>\/\+?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g
  const pattern1 = /([\u4e00-\u9fa5])/g // 中文
  // const pattern2 = /[`~,.<>;':"\/\[\]\|{}()-=_+]/g // 特殊字符
  const pattern2 = /[`@&<>~\+\-=_,.\/\[\]\|{}()]/g // 特殊字符
  // const pattern2 = /[~,.<>;':"\/\[\]\|{}()-=_+]/g // 特殊字符
  if (value) {
    var newValue = value.replace(pattern1, '').replace(pattern2, '')
    if (value !== newValue) {
      callback(new Error('不可使用特殊字符'))
    }
    callback()
  }
}

{ validator: validDataBank, trigger: 'blur' }
```

## el-table 动态合并单元格

```vue
<template>
  <el-table
    :data="tableData"
    :border="true"
    show-summary
    height="800"
    :summary-method="getSummaries"
    style="width: 100%"
    :span-method="arraySpanMethod"
    :cell-style="cellStyleMethod"
  >
    <el-table-column
      type="index"
      width="82"
      label="序号"
      fixed
      min-width="200"
    />
    ......
  </el-table>
</template>

<script setup>
import { ref, toRefs, toRef, reactive, computed, nextTick } from "vue";

let tableData = ref([]);
let tableColumn = ref([]);
let mergeDate = [];
let temData = {};
let spanNameArr = []; // 处理要合并的数据

const getSummaries = (param) => {
  const { columns, data } = param;
  let temData = data.filter((item) => item.date === "汇总");
  const sums = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = "汇总计算";
      return;
    }
    const values = temData.map((item) => Number(item[column.property]));
    if (!values.every((value) => isNaN(value))) {
      sums[index] = values.reduce((prev, curr) => {
        const value = Number(curr);
        if (!isNaN(value)) {
          let temValue1 = prev + curr;
          let temValue2 = temValue1.toString().match(/^\d+(?:\.\d{0,2})?/);
          return Number(temValue2);
        } else {
          return prev;
        }
      }, 0);
      sums[index];
    } else {
      sums[index] = "-,--";
    }
  });
  mergeDate = sums;
  return sums;
};

function arraySpanMethod({ row, column, rowIndex, columnIndex }) {
  if (row.date === "汇总") {
    if (columnIndex === 1) {
      return [0, 0];
    } else if (columnIndex === 2) {
      return [1, 1];
    }
  } else {
    if (columnIndex == 1) {
      const _row = spanNameArr[rowIndex];
      const _col = _row > 0 ? 1 : 0;
      return {
        // [0,0] 表示这一行不显示， [2,1]表示行的合并数
        rowspan: _row,
        colspan: _col,
      };
    }
  }
}

function cellStyleMethod({ row, column, rowIndex, columnIndex }) {
  if (row.date === "汇总" || row.name === "汇总计算") {
    if (columnIndex !== 0) {
      return {
        backgroundColor: "var(--el-table-row-hover-bg-color)",
        fontWeight: 500,
      };
    }
  }
}
</script>
```

## vue3 数组应用

- 过滤 sizeOptions 对象数组，判断 val 数组中是否包含 id，将包含该 id 的对象数组返回
- 改造对象数组，用 map 获取值，改造直接返回

```js
// val是一个[1,2,3]
sizeTableData.value = sizeOptions.value
  .filter((item) => val.includes(item.id))
  .map((item) => ({
    sizeTypeId: item.id,
    sizeTypeName: item.name,
    price: "",
    sequence: "",
  }));
```

## vue3 下拼音插件的使用

- `"js-pinyin": "^0.2.4",`

```js
import pinyin from "js-pinyin";
pinyin.setOptions({ checkPolyphone: false, charCase: 0 });

watch(ruleForm, (newValue) => {
  if (newValue) {
    ruleForm.value.janeSearch = pinyin.getCamelChars(newValue.name);
  }
});
```

## vue3 富文本使用

- 安装

```json
"@wangeditor/editor": "^5.1.23",
"@wangeditor/editor-for-vue": "^5.1.12",
```

- 运行

```js
<div style="width: 1000px; border: 1px solid #ccc">
  <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :default-config="toolbarConfig" />
  <Editor
    v-model="ruleForm.description"
    style="height: 120px; overflow-y: hidden"
    :default-config="editorConfig"
    :mode="mode"
    @onCreated="onCreated" />
</div>

import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const editor = ref(null)
const toolbarConfig = ref({})
const goodUploadImg = ref('')
const editorConfig = ref({
  placeholder: '请输入内容...',
  MENU_CONF: {
    uploadImage: {
      customUpload: goodUploadImg.value
    }
  }
})
const mode = ref('default') // or 'simple'

const onCreated = (val) => {
  editor.value = Object.seal(val) // 一定要用 Object.seal() ，否则会报错
}


<style src="@wangeditor/editor/dist/css/style.css"></style>
```

## vue3 下拉框与表格联动

```js
const setSize = (val) => {
  // if (val.length !== 0) {
  //  表格数据增加判断
  if (val.length > sizeTableData.value.length) {
    // console.log('select选择数量大于表格数目，说明此时是新增操作')

    /**
     * 添加：
     * 当前的选项是val数组的最后一项，即获取最后一项的id
     * 根据最后一项的id，匹配下拉列表，获取规格名称
     * 将匹配的规格名称添加到表格中
     */

    // 获取当前添加项
    let currentSelect = sizeOptions.value.filter(
      (item) => item.id === val[val.length - 1]
    )[0];
    sizeTableData.value.push({
      sizeTypeId: currentSelect.id,
      sizeTypeName: currentSelect.name,
      price: "",
      sequence: "",
    });
  }

  //  减少数据表格判断
  if (val.length < sizeTableData.value.length) {
    // console.log('select选择数量小于表格数目，说明此时是减少操作')

    /**
     * 删除：
     * 减少之后，val数组中数据会少一项，判断进入减少操作
     * 遍历表格数据，与val数组做比较，找到减少的那一项
     * 在表格中删除那一项
     */
    /* let currentDelete = sizeTableData.value.filter((item) => !val.includes(item.sizeTypeId))
    console.log(currentDelete) */
    sizeTableData.value.forEach((item, index) => {
      if (!val.includes(item.sizeTypeId)) {
        sizeTableData.value.splice(index, 1);
      }
    });
  }
  // }

  // 将表格数据赋值到表单数据
  ruleForm.value.sizeList = sizeTableData.value;
};
```

## emit 执行组件方法

```js
import { ref, getCurrentInstance } from "vue";
const instance = getCurrentInstance();

// 定义
instance?.proxy?.emitter.on("refreshReportTable", () => {
  getTableData(setProxy(queryParams.value));
});

// 执行
instance?.proxy?.emitter.emit("refreshReportTable");
```

## 判断对象数组中是否包含某个值

```js
let isHasId = businessOptions.value.some(
  (item) => item.id === res.content.businessId
);
```

## 校验正数，保留一位小数

```js
@input='checkInputData'
const checkInputData = () => {
  let reg = /^\d+(\.\d{1,1})?$/

  if (!reg.test(formData.value.promotionY) || parseFloat(formData.value.promotionY) <= 0 || parseFloat(formData.value.promotionY) > 10) {
    formData.value.promotionY = formData.value.promotionY.slice(0, formData.value.promotionY.length - 1)
  }
}
```

## 获取对象数组中某个字段，转换成字符串

```js
data.userRoles = data.roleDTOS.map((item) => item.name).join(",");
```

## js 如何判断小数点后有几位

```js
<script>var n=3.143423423; alert(n.toString().split(".")[1].length);</script>
```

## cascader 获取 name 值

```js
industryRef.value.getCheckedNodes()[0].pathLabels.join("-");
```

## vue3 中跳转不刷新

```js
import { useRoute } from 'vue-router'
const route = useRoute()
 <router-view :key="route.fullPath"></router-view>
```

## pina 的使用

```js
// store/index.js
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// pinia persist
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

// store/modules/demo-store-data.js
import { defineStore } from "pinia";

export const demoStoreData = defineStore({
  id: "demo-store-data",

  state: () => ({
    currentBunkList: [], // 过滤后的店铺数据
  }),

  actions: {
    setCurrentBunkList(currentBunkList) {
      this.currentBunkList = currentBunkList;
    },
  },
});

// 使用 - 设置值
// store
import { demoStoreData } from "@/store/modules/demo-store-data.js";
let { setCurrentBunkList } = demoStoreData();
setCurrentBunkList(bunkData.content.filter((item) => item.type === 1));

// 使用 - 获取值
import { demoStoreData } from "@/store/modules/demo-store-data.js";
const demoDataStore = demoStoreData();
const currentBunkList = demoDataStore.currentBunkList;
```

## mitt 事件总线的使用

```js
// util/mittBus
import mitt from "mitt";
const mittBus = mitt();
export default mittBus;

// 使用 - 定义事件
import mittBus from "@/util/mitt-bus.js"; // mitt
mittBus.emit("clickArea", tipNum);

// 使用 - 执行事件
import mittBus from "@/util/mitt-bus.js"; // mitt
mittBus.on("clickArea", (tipNum) => {
  // console.log(tipNum)

  showDetailDialog(tipNum);
  // xxxxxx
});
```

## 星期选择

```js
<el-select style="width: 240px" v-model="ruleForm.week" multiple placeholder="请选择">
  <el-option :label="item" :value="item" v-for="item in 7" :key="item" :disabled="isHasWeek(item)">
    {{ item }}
  </el-option>
</el-select>

const isHasWeek = (item) => {
  if (ruleForm.value) {
    if (ruleForm.value.week.length !== 0) {
      return ruleForm.value.week.map((jItem) => parseInt(jItem, 10)).includes(item)
    }
  }
}
```

## v-model遇上props
- 所有的 props 都遵循着单向绑定原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着你不应该在子组件中去更改一个 prop。若你这么做了，Vue 会在控制台上向你抛出警告：
  - v-model cannot be used on a prop, because local prop bindings are not writable
- 创建一个中间值，v-model绑定中间值，监听传过来的数据，当prop数据发生改变,立即改变v-model的数据
```html
<le-dropdown
v-model:menuList="currentMenuList"
@onConfirm="onConfirm"
/>

<script setup>
const props = defineProps({
  // 导航数据
  menuList: {
    type: Array,
    default: () => DropdownList
  }
})

const currentMenuList = ref(props.menuList)

watch(
  () => props.menuList,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
    currentMenuList.value = newVal
  }
)
  </script>
```

## vue3的v-model
- v-model 默认绑定的属性名为：modelValue
- v-model 默认绑定的事件名为：update:modelValue
```js
// 所以我们需要使用 modelValue 和 update:modelValue 来接收
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
```

## element-plus中date-picker组件属性default-time不生效解决办法
```js
<el-date-picker
    v-model="ruleForm.datePicker"
    type="datetimerange"
    range-separator="—"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :default-time="defaultTime"
    format="YYYY-MM-DD HH:mm:ss"
    value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>

const defaultTime = reactive([new Date(0, 0, 0, 0, 0, 0), new Date(0, 0, 0, 23, 59, 59)])
```

## el-table中使用el-image的预览属性导致样式重叠
```html
<el-image src={scope.row.picUrl} preview-src-list={[scope.row.picUrl]} style="width:60px;height:60px"></el-image>

<style>
  /* 单元格样式 */
.el-table__cell {
   position: static !important; /* 解决el-image 和 el-table冲突层级冲突问题 */
}
</style>
```

- 选项卡
```js
<div  class="xny_part1_items" @click="itemTitle = '光伏'" :class="itemTitle === '光伏' && 'active'"></div>
...

<div class="lgcb_sub_cont" v-if="itemTitle === '光伏'"></div>

let itemTitle = ref("光伏");
```

## proxy.$modal相关方法
```js
// poxy对象
const { proxy } = getCurrentInstance();

proxy.$modal.msgError('msg');
proxy.$modal.alert('msg');
proxy.$modal.msgWarning('msg');
proxy.$modal.msgSuccess('msg');
proxy.$modal.loading("正在提交，请稍候...");
proxy.$modal.closeLoading();

proxy.$modal.confirm(
    `确定移除 ${file.name} ?`
).then(
    () => true,
    () => false
)
```

## 封装api
```js
// api 封装
export const apiCommon = (api, params, header = undefined) => {
  return new Promise((resolve, reject) => {
    api(params, header).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
      return
    })
  })
}
```

## 模糊搜索封装
```vue
<template>
  <el-form ref="ruleFormRef" :inline="true" :model="ruleForm" label-width="80px">
    <!-- <xxxxxx -->

    <el-form-item label="" style="margin-left: 13px">
      <el-autocomplete v-model="ruleForm.dynamicFieldsValue" :fetch-suggestions="querySearch"
        @select="selectGisSearchSubmit" style="width: 400px" placeholder="请输入" clearable :trigger-on-focus="true"
        :debounce="100" :disabled="renderFlag">
        <template #prepend>
          <el-select v-model="ruleForm.searchType" style="width: 115px" @change="selectSearchCriteria">
            <el-option v-for="(item, index) in searchCriteriaList" :key="index" :label="item.label"
              :value="item.prop" />
          </el-select>
        </template>
        <template #default="{ item }">
          <div class="auto_cellname_item_wrap">
            <!-- 自定义搜索列表 -->
            <!-- ...... -->
          </div>
        </template>
        <template #append>
          <el-button type="primary" @click="setGisSearchSubmit">
            <el-icon>
              <Search />
            </el-icon>
          </el-button>
        </template>
      </el-autocomplete>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, computed } from "vue";
// 组件传参
import mittBus from "@/utils/mittBus"; // mitt
// api相关
import { apiCommon } from "@/utils/index.js";
import * as gisApi from "@/api/gis/gis";

const ruleFormRef = ref(null);
let currentZoom = ref(0);
let currentMinRenderZoom = 0;

let renderFlag = computed(() => {
  return parseInt(currentZoom.value) < currentMinRenderZoom;
});

// 搜索条件
const searchCriteriaList = ref([
  {
    label: "xxx",
    prop: "name",
    eventName: "searchByName",
    isShowSelect: true,
  },
  {
    label: "xxx",
    prop: "name",
    eventName: "searchByName1",
    isShowSelect: false,
  },
]);

const ruleForm = ref({
  searchType: searchCriteriaList.value[0].prop, // 搜索条件
  dynamicFieldsValue: "", // 动态字段结果
});

/**
 * 接收其他组件派发的方法
 */
// 获取当前zoom
mittBus.on("getCurrentZoom", ({ zoom, minRenderZoom }) => {
  // console.log("当前缩放级别为：" + zoom, minRenderZoom);

  currentZoom.value = zoom;
  currentMinRenderZoom = minRenderZoom;
});

/**
 * 业务
 */
// 选择搜索条件
const selectSearchCriteria = () => {
  // console.log('搜索类型', ruleForm.value.searchType, ruleForm.value.dynamicFieldsValue)

  ruleForm.value.dynamicFieldsValue = "";
};

// gis查询
const setGisSearchSubmit = () => {
  // console.log('gis查询', ruleForm.value.searchType, ruleForm.value.dynamicFieldsValue)

  // 当输入内容时才派发事件
  if (ruleForm.value.dynamicFieldsValue !== "") {
    searchCriteriaList.value.forEach((item) => {
      switch (ruleForm.value.searchType) {
        case item.prop:
          // 根据定义的名称派发事件
          mittBus.emit(item.eventName, ruleForm.value.dynamicFieldsValue);
          break;
      }
    });
  }
};

// 获取下拉框数据接口
const getSelectDatyAsync = async (queryString) => {
  let gisData = null;

  // 小区名称
  if (ruleForm.value.searchType === "name") {
    let params = {
      name: queryString,
    };
    gisData = await apiCommon(gisApi.queryCellListByName, params);

    gisData.data.forEach((item) => {
      item.value = item.name;
    });
  }
  // 站点名称名称
  if (ruleForm.value.searchType === "name1") {
    let params = {
      name1: queryString,
    };
    gisData = await apiCommon(gisApi.queryCellListByName1, params);

    gisData.data.forEach((item) => {
      item.value = item.name1;
    });
  }

  return gisData.data;
};

// 获取下拉框数据
const querySearch = async (queryString, cb) => {
  searchCriteriaList.value.forEach(async (item) => {
    // 识别当前搜索条件
    if (item.prop === ruleForm.value.searchType) {
      // 如果不需要模糊搜索不显示下拉框
      if (!item.isShowSelect) {
        cb([]);
      } else {
        if (queryString !== "") {
          getSelectDatyAsync(queryString).then((gisData) => {
            // console.log(gisData)
            cb(gisData);
          });
        } else {
          cb([]);
        }
      }
    }
  });
};

// 搜索框下拉选择
const selectGisSearchSubmit = (val) => {
  // console.log('搜索框下拉选择', val)

  mittBus.emit("selectGisSearchSubmit", val);
};
</script>

<style lang="scss" scoped>
.el-popper.is-pure {
  .auto_cellname_item_wrap {
    // background: #f00;
    border-bottom: solid 1px #efefef;
    // padding-bottom: 10px;

    span {
      display: block;
      margin-top: -15px;
    }
  }
}
</style>
```

## vue3设置全局变量
```js
app.config.globalProperties.msg = 'hello'

onMounted(() => {
    // 通过getCurrentInstance().appContext访问全局属性
    const { msg } = getCurrentInstance().appContext.config.globalProperties
    console.log('msg', msg)
})
```

## vue3解析excel
- uploadtools
```vue
<template>
    <el-upload class="upload_wrap" multiple :limit="limitNum" :file-list="fileList" :auto-upload="false"
        :before-remove="beforeRemove" :on-exceed="handleExceed" :on-preview="handlePreview" :on-change="changeFile">
        <el-button>点击上传</el-button>
        <template #tip>
            <div class="el-upload__tip">
                <slot name="tip"></slot>
            </div>
        </template>
    </el-upload>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { ElMessage } from 'element-plus';

// poxy对象
const { proxy } = getCurrentInstance();

// 子组件自定义事件
const emit = defineEmits(['verifyFileType', 'getFile'])

const fileList = ref([])
const limitNum = ref(1)

// 删除文件之前的钩子
const beforeRemove = (file) => {
    return proxy.$modal.confirm(
        `确定移除 ${file.name} ?`
    ).then(
        () => true,
        () => false
    )
}

// 限制提示
const handleExceed = () => {
    ElMessage.warning(`当前限制选择 ${limitNum.value} 个文件`)
}

// 点击文件
const handlePreview = file => {
    console.log("点击文件", file)
}

// 校验文件类型
const verifyFileType = (file, next) => {
    emit('verifyFileType', file, flag => {
        if (!flag) {
            fileList.value = fileList.value.pop()
        }

        next(flag)
    })
}

// 文件改变后触发
const changeFile = file => {
    let flag = verifyFileType(file, flag => {
        if (flag) {
            emit('getFile', file)
        }
    })
}
</script>

<style lang="scss" scoped>
.upload_wrap {
    width: 275px;

    :deep .el-upload-list {
        max-height: 100px;
        overflow-y: auto;
    }
}
</style>
```
- 使用
```vue
<template>
  <section>
    <upload-tool @verifyFileType="verifyFileType" @getFile="getFile">
      <template #tip>
        <span>请上传xls或者xlsx格式</span>
      </template>
    </upload-tool>

    <div class="detail_wrap">
      <div class="detail_cont" v-if="JSON.stringify(excelResData) !== '[]'" v-for="(item, index) in excelResData"
        :key="index">
        <h3>{{ item.sheetName }}</h3>
        <div class="table_detail" v-html="dealExcel(item.sheetList)"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import * as XLSX from 'xlsx';

const excelResData = ref([])

const readFile = (file) => {
  return new Promise((resolve) => {
    let reader = new FileReader()
    reader.readAsBinaryString(file)
    reader.onload = (ev) => {
      resolve(ev.target?.result)
    }
  })
}

const sheetToTable = sheet => {
  // 创建一个<table>元素
  var table = document.createElement('table');
  // table.setAttribute('border', '1');
  // 遍历XLSX.utils.sheet_to_json的结果
  sheet.forEach(function (row) {
    // 创建一个<tr>元素
    var tr = document.createElement('tr');
    // 遍历每一行的键值对
    for (var key in row) {
      // 创建一个<td>元素
      var td = document.createElement('td');
      // 设置<td>元素的文本
      td.appendChild(document.createTextNode(row[key]));
      // 将<td>元素添加到<tr>元素中
      tr.appendChild(td);
    }
    // 将<tr>元素添加到<table>元素中
    table.appendChild(tr);
  });
  // 将<table>元素添加到HTML文档中
  return table
  // document.body.appendChild(table);
}

const verifyFileType = (file, next) => {
  if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
    ElMessage({
      message: "上传格式不正确，请上传xls或者xlsx格式！",
      type: "error",
    });
    next(false)
    return
  }
  next(true)
}

const getFile = async (file) => {
  let dataBinary = await readFile(file.raw);
  let workbook = XLSX.read(dataBinary, { type: 'binary', cellDates: true });

  workbook.SheetNames.forEach(SheetName => {
    // workbook.Sheets[SheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[SheetName], { range: 1, header: 1, defval: '' })
    workbook.Sheets[SheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[SheetName], { header: 1, defval: '' })
  })

  for (let key in workbook.Sheets) {
    excelResData.value.push({
      sheetName: key,
      sheetList: workbook.Sheets[key]
    })
  }
};

const dealExcel = (sheetList) => {
  return sheetToTable(sheetList).outerHTML
}
</script>

<style lang="scss" scoped>
.detail_wrap {
  padding: 20px;
  width: 95%;
  height: 80vh;
  border: solid 1px #ccc;
  margin: 0 auto;
  overflow: auto;

  .detail_cont {
    &:not(:last-child) {
      margin-bottom: 50px;
    }

    h3 {
      margin-bottom: 10px;
    }

    :deep .table_detail {
      table {
        tbody {
          tr {
            &:first-child {
              background-color: #a3a3a3;
            }

            &:not(:first-child) {
              &:nth-child(odd) {
                background-color: rgb(206, 206, 206);
              }
            }
          }
        }

        td {
          padding: 5px;
          min-width: 100px;
          border: solid 1px #efefef;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
```

## vue3的计算属性
```js
import { computed } from 'vue'
const indicator = computed(() => {
  if (JSON.stringify(props.chartData) === '[]') {
    return [  //配置各个维度的最大值
      { name: '', max: 0 },
    ]
  }
  return props.chartData.map(item => {
    return {
      name: item.name,
      max: 100
    }
  })
})
```

## vue3的监听
```js
// setoption解构传参用这种监听
/* watch(
  props.chartData,
  (val) => {
    setOption(val)
  },
  { deep: true }
) */
watch(() => props.chartData, val => {
  setOption(val)
})
```

## 全屏
```js
let isFullscreen = false  // 是否全屏

export const setFullScreen = (falg, next) => {
  if (!falg) {
    // 全屏
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  } else {
    // 退出全屏
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  next()
}

watch(() => isFullscreen.value, () => {
  setTimeout(() => {
    nextTick(() => {
      refLeftPage.value && refLeftPage.value.resetChart()
      refCenterPage.value && refCenterPage.value.resetChart()
      refRightPage.value && refRightPage.value.resetChart()
    })
  }, 500)
})

// 监听全屏状态修改标识
const setFullScreenFlag = (e) => {
  window.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
      // console.log('进入全屏模式');
      isFullscreen.value = true
    } else {
      // console.log('退出全屏模式');
      isFullscreen.value = false
    }
  });
}

<div class="title" @click="setFullScreen(isFullscreen, () => { isFullscreen = !isFullscreen })">
```

## 在el-dialog中添加锚点
```vue
 <!-- 内容 -->
<template #DialogContainer>
    <div class="dialog_wrap">
        <div class="steps">
            <ul>
                <li v-for="(item, index) in title_list" :key="index">
                    <span ref="spans" :style="{ color: activeStep === index ? '#1987e1' : '#000000' }"
                        @click="jump(index)">
                        <i class="el-icon-thumb"></i>{{ item.title }}
                    </span>
                </li>
            </ul>
        </div>

        <div class="result" @scroll="onScroll">
            <div class="scroll-item"><span>第一项项</span></div>
            <div class="scroll-item"><span>第二项项</span></div>
            <div class="scroll-item"><span>第三项项</span></div>
            <div class="scroll-item"><span>第四项项</span></div>
            <div class="scroll-item"><span>第五项项</span></div>
            <div class="scroll-item"><span>第六项项</span></div>
        </div>
    </div>
</template>

<script setup>
let activeStep = 0
let title_list = [
    { title: '第一项项' },
    { title: '第二项项' },
    { title: '第三项项' },
    { title: '第四项项' },
    { title: '第五项项' },
    { title: '第六项项' },
]

const jump = (index) => {
    var items = document.querySelectorAll(".scroll-item");
    for (var i = 0; i < items.length; i++) {
        if (index === i) {
            items[i].scrollIntoView({
                block: "start",//默认跳转到顶部
                behavior: "smooth"//滚动的速度
            });
        }
    }
}
const onScroll = (e) => {
    let scrollItems = document.querySelectorAll(".scroll-item");
    for (let i = scrollItems.length - 1; i >= 0; i--) {
        // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
        let judge =
            e.target.scrollTop >= scrollItems[i].offsetTop - scrollItems[0].offsetTop;
        if (judge) {
            activeStep = i;
            break;
        }
    }
}
</script>

<style lang="scss" scoped>
.el-dialog {
  overflow: hidden;

  .steps {
    background-color: #fff;
    max-height: calc(-16px + 100vh);
    position: fixed;
    width: 98px;
    top: 90px;
    right: 2%;

    ul {
      list-style: none;
      padding-left: 5px;
      margin: 12px 0;
    }

    li {
      margin: 7px 5px;

      span {
        cursor: pointer;

        &:hover {
          color: #88bcec !important;
        }

        i {
          margin-right: 5px;
        }
      }
    }
  }

  .result {
    position: absolute;
    left: 10px;
    top: 54px;
    bottom: 70px;
    right: 0;
    padding: 0;
    overflow-y: scroll;

    .scroll-item {
      width: 100%;
      height: 500px;
      margin-top: 20px;
      background: rgb(137, 238, 238);

      >span {
        font-size: 20px;
      }

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        height: 500px;
      }
    }
  }

  .el-dialog__footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
```

## 选项卡点击恢复到初始状态
```js
const jump = (index, e) => {
    // 侧边栏样式
    let titleDom = document.querySelectorAll(".anchor_wrap ul li")
    titleDom.forEach((item, i) => {
        item.classList.remove('selected')
    })
    if (index && e) {
        e.target.parentNode.classList.add('selected')
    } else {
        titleDom[0].classList.add('selected')
    }

    // 滚动
    let items = document.querySelectorAll(".scroll-item");
    if (!index) {
        items[0].scrollIntoView({
            block: "start", // 默认跳转到顶部
            behavior: "smooth" // 滚动的速度
        });

        return
    }
    for (var i = 0; i < items.length; i++) {
        if (index === i) {
            items[i].scrollIntoView({
                block: "start", // 默认跳转到顶部
                behavior: "smooth" // 滚动的速度
            });
        }
    }
}

const show = (val) => {
    nextTick(() => {
        setTimeout(() => {
            jump()
        }, 300);
    })
};
```

## 插槽传值
- 父组件
```vue
<template>
    <section class="overview_num_box">
        <h3>{{ title }}</h3>

        <slot :scoreNum="scoreNum"></slot>
    </section>
</template>

<script setup>
const scoreNum = ref(0)
</script>
```
- 子组件
```js
<overview-num-box :title="'今日平均分'">
    <template v-slot:default="slotProps">
        <p>{{ slotProps.scoreNum }}分</p>
    </template>
</overview-num-box>
```

## dialog-info
```vue
<template>
  <el-dialog :width="dialogWidth" v-model="showDialog" :close-on-click-modal="false" :modal-append-to-body="false"
    :close-on-press-escape="false" @closed="closeDialog">
    <template #header>
      <slot name="DialogTitle"></slot>
    </template>
    <div class="container">
      <slot name="DialogContainer"></slot>
    </div>
    <template #footer v-if="isShowFotter">
      <span class="dialog-footer">
        <slot name="extendBtn"></slot>
        <el-button @click="showDialog = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";

// 自定义事件
const emit = defineEmits(["closeDialog"]);

const props = defineProps({
  isShowFotter: {
    type: Boolean,
    default: true,
  },
});

let dialogWidth = '75%'

const showDialog = ref(false);

// 可以通过这个方法动态设置宽度
const setDialogWidth = (width) => {
  dialogWidth = width;
}
const closeDialog = () => {
  // console.log('closeDialog')
  emit('closeDialog')
}

/**
 * 父组件调弹框显示方法
 */
const show = () => {
  showDialog.value = true;
};
const hide = () => {
  showDialog.value = false;
};

defineExpose({ show, hide, setDialogWidth });
</script>
```
```vue
<template>
    <dialog-info ref="refDialogInfo" class="dialog_info_wrap" :isShowFotter="false" @closeDialog="closeDialog">
        <!-- 标题 -->
        <template #DialogTitle>
            <span>{{ title }}</span>
        </template>
        <!-- 内容 -->
        <template #DialogContainer>
            <div class="dialog_wrap">
                <slot></slot>
            </div>
        </template>
    </dialog-info>
</template>

<script setup>
import { ref, nextTick, defineProps, onMounted } from "vue";
import { ElMessage } from "element-plus";

// 自定义事件
const emit = defineEmits(["closeDialog"]);

const props = defineProps({
    title: {
        type: String,
        default: '',
    }
})

const refDialogInfo = ref(null)

/**
 * 业务
 */
const show = (val) => {
    refDialogInfo.value.show();
    // refDialogInfo.value.setDialogWidth('30%');
};
const closeDialog = () => {
    // console.log('关闭');
    emit('closeDialog');
}

defineExpose({
    show,
});
</script>
```