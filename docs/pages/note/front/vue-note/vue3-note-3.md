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