# vue2工作积累

## 1. vue引入图片无法加载问题
在vue的js引入图片，就需要使用require（“路径”）进来
    - `<img :src=" require('../../assets/images/url/icon' + (index+1) + '.png') " alt="">`

## 2. vue中拖拽
### 2.1. 自定义指令 - 拖拽
```html
<!-- 自定义指令绑定元素 -->
<button v-drag>拖拽</button>
```
```js
export default {
    name: "",

    // 自定义指令 - 拖拽
    directives:{
        drag(el, bindings){
            el.onmousedown = function(e){
                var disx = e.pageX - el.offsetLeft;
                var disy = e.pageY - el.offsetTop;
                document.onmousemove = function (e){
                    el.style.left = e.pageX - disx+'px';
                    el.style.top = e.pageY - disx+'px';
                }
                document.onmouseup = function(){
                    document.onmousemove = document.onmouseup = null;
                }
            }
        }
    },
}
```

### 2.2. 通过事件触发 - 拖拽
```html
<div class="xxclass" ref="xxref" @mousedown="mouseDownHandleelse($event)" @mouseup="mouseUpHandleelse($event)"></div>
```
```js
export default {
  name: 'zhinengjifang',
  data () {
    return {
      moveDataelse: {
        x: null,
        y: null
      }
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  components: {
  },
  methods: {
    mouseDownHandleelse (event) {
      this.moveDataelse.x = event.pageX - this.$refs.xxref.offsetLeft
      this.moveDataelse.y = event.pageY - this.$refs.xxref.offsetTop
      event.currentTarget.style.cursor = 'move'
      window.onmousemove = this.mouseMoveHandleelse
    },
    mouseMoveHandleelse (event) {
      let moveLeft = event.pageX - this.moveDataelse.x + 'px'
      let moveTop = event.pageY - this.moveDataelse.y + 'px'
      this.$refs.xxref.style.left = moveLeft
      this.$refs.xxref.style.top = moveTop
    },
    mouseUpHandleelse (event) {
      window.onmousemove = null
      event.currentTarget.style.cursor = 'move'
      console.log('鼠标松开了')
    }
  }
}
```
```css
.xxclass{
    height: 200px;
    width: 400px;
    position: fixed;
    top: 150px;
    left: 550px;
    cursor: pointer;
}
```

## 3. 在eslint模式下，全局变量报错
```js
/* global qs */
console.log(qs.stringify(this.loginForm));
```

## 4. vuex存储对象基本用法
```js
// 主入口文件/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        user,
    },
    getters,
})

export default store

// store.js
const user = {
    state: {
        userRes: {},  // 存储登陆后用户值
    },

    mutations: {
        // 获取登录后用户信息
        SET_USER_RES: (state, userRes)=> {
        state.userRes = userRes;
        }
    }
}

// vue组件中
const userInfo = res.data.data;

// 将用户信息存入vuex中
this.$store.commit('SET_USER_RES', userInfo);

console.log(this.$store.state.user.userRes);
```

## 5. element 有搜索框input筛选的树形菜单
```js
//this.$refs.tree.getCheckedNodes()   //树选中的值
//this.$refs.tree.getCheckedKeys()  //树选中的id
//this.$refs.tree.setCurrentKey(id);//默认高亮
default-expand-all  				--默认展开全部
highlight-current   				--高亮
:filter-node-method="filterNode" 	--筛选input
:expand-on-click-node="false"   	--点击图标才展开
node-key="id"      					--getCheckedKeys必须绑定id
:props="{          					-- 格式化可写在标签内
    label: 'name',
    value:'id',
}"
```

```html
<div class="tree-box">
    <span class="tree-title">标题</span>
    <el-input
        placeholder="请输入"
        v-model="treeList.filterText"
        suffix-search="el-icon-date">
    </el-input>
    <el-tree
        class="filter-tree"
        :data="treeList.treeData"
        :props="treeList.treeProps"
        default-expand-all
        :expand-on-click-node="false"
        highlight-current
        :filter-node-method="filterNode"
        ref="tree"
        @node-click="treeClick">
    </el-tree>
</div>
```

```js
data() {
    return {
        treeList:{
            filterText:"",//树形菜单搜索框
            treeData:[],//树形菜单
            treeProps: {         //树形菜单格式化
                label: 'name',
                value:'id',
            }
        },
    }
}
//this.$refs.tree.getCheckedNodes()   //树选中的值
//this.$refs.tree.getCheckedKeys()  //树选中的id
//this.$refs.personTree.setCurrentKey(id);//默认高亮
//树点击
treeClick(data){
    console.log(data)
},
// 过滤树表单内容
filterNode(value, data) {
    if (!value) return true;
    return data.name.indexOf(value) !== -1;
},
watch: {
    // 监听树的搜索框
    'treeList.filterText'(val) {
        this.$refs.tree.filter(val);
    }
},
```

```css
.tree-box{
    width: 268px;
    height: 310px;
    border: solid 1px #e9e9e9;
    border-radius: 4px;
    margin-right: 20px;
    float: left;
    .tree-title{
        display: block;
        color: #666666;
        font-size: 14px;
        background-color: #f1f2f4;
        border-radius: 4px 4px 0 0;
        text-indent: 18px;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .el-input{
        display: inherit;
        margin: 10px auto;
        width: 90%;
    }
    .el-tree{
        margin: 10px auto;
        height: 200px;
        width: 90%;
        /*background: #000;*/
        overflow: auto;
    }
}
```

## 6. 路由跳转，参数在url
```js
// 跳转页面
jumpPage() {
    this.$router.push({  
    path: '/message-module/approval',  
    // name: 'approval',
    query: {   
        jumpCurr: this.chkApproval.current,   
    }  
    })  
},

if(this.$route.query.jumpCurr !== undefined) {
    this.activeName = this.$route.query.jumpCurr;
}
```

## 7. 在element配置上传文件
```html
<el-upload
        class="upload_wrap"
        ref="upload"
        limit="1"
        :action="uploadUrl"
        :before-remove="beforeRemoveFile"
        :on-exceed="handleExceed"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
        :on-change="changeFile">
    <el-button slot="trigger" type="text">选取文件</el-button>
</el-upload>

<script type="">
computed: {
    uploadUrl() {
        return (
            "https://jsonplaceholder.typicode.com/posts/"
        );
    },
},

// 文件上传
// 删除文件后操作
handleRemove(file, fileList) {
    console.log(file, fileList);
},

// 删除文件之前的钩子
beforeRemoveFile(file) {
    if (this.isCheck) {
    this.isCheck = false;
    return true;
    }
    return this.$confirm(`确定移除 ${file.name}？`);
},

// 限制提示
handleExceed() {
    this.$message.warning(`文件超出上限`);
},

// 点击获取文件信息
handlePreview(file) {
    console.log("点击获取文件信息", file);
},

// 文件改变后触发
changeFile(file, fileList) {
    console.log(file, fileList);
},
</script>
```

## 8. 在element表格编辑
```html
<el-table :data="tableData" border @cell-dblclick="celledit">
<el-table-column type="index" ></el-table-column>

<el-table-column prop="date" label="日期" width="180">
    <template slot-scope="scope">
    <el-date-picker v-if="scope.row.date.edit"
        v-model="scope.row.date.value"
        ref="date"
        style="width: 100%"
        type="date"
        value-format="yyyy-MM-dd"
        @blur="scope.row.date.edit = false">
    </el-date-picker>
    <span v-else>{{ scope.row.date.value }}</span>
    </template>
</el-table-column>

<el-table-column prop="name" label="姓名" width="180" edit="false">
    <template slot-scope="scope">
    <el-input v-if="scope.row.name.edit"
        ref="name"
        v-model="scope.row.name.value"
        style="width: 100%"
        @blur="scope.row.name.edit = false">
    </el-input>
    <span v-else>{{ scope.row.name.value }}</span>
    </template>
</el-table-column>

<el-table-column prop="address" width="260" label="地址">
    <template slot-scope="scope">
    <el-input v-if="scope.row.address.edit"
        ref="address"
        v-model="scope.row.address.value"
        style="width: 100%"
        @blur="scope.row.address.edit = false">
    </el-input>
    <span v-else>{{ scope.row.address.value }}</span>
    </template>
</el-table-column>
</el-table>

<script type="">
data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        edit: false
      }],
    }
}

//表格数据格式化成我们想要的数据
/* {
    date: {
    value: '',
    edit: false//编辑状态
    }
} */
formatData(){
    this.tableData.forEach(item => {
    for(let key in item) {
        item[key] = {
        value: item[key],
        edit: false
        }
    }
    })
    console.log(this.tableData)
},
celledit(row, column, cell, event){
    if(row[column.property]){
    row[column.property].edit = true
    setTimeout(() => {
        this.$refs[column.property].focus()
    }, 20)
    }
    
}
</script>
```

## 9. 在vue中compute的值改变，iframe无法渲染
```html
<iframe :src="url" frameborder="0" :key="index"></iframe>

computed: {
    dashboardUrl(){
        return `url`
    }
},

check() {
    console.log("查询", this.filterData);

    this.index++
},
```

## 10. 在js中使用vue router
```js
/*
vue封装的公共方法js中使用router，页面可能报错

可在js中添加
*/

import Router from 'vue-router'
import router from '../router'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}

// 引用
router.push('/path')
```

## 11. scss全局使用
```js
css: {
    loaderOptions: {
        sass: {
            prependData: `@import "./src/assets/css/global.scss";`,
        },
    },
},
```

## 12. el-date-picker
```html
<el-date-picker
    v-model="time"
    type="datetimerange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    value-format="yyyy-MM-dd HH:mm"
    format="yyyy-MM-dd HH:mm" 
    @change="changeTime"
>
</el-date-picker>
```

## 13. 带参跳转
```js
// 使用params必须使用name
// 跳转之后页面 url后面不会拼接参数 , 但是刷新页面id 会消失
this.$router.push({
    // path: '/shop/contract/viewContract',
    name: 'viewContract',
    params: {
        handleStatus: '查看'
    }
})
console.log("123", this.$route.params.handleStatus)

// 使用query
// query类似 get, 跳转之后页面 url后面会拼接参数,类似?id=1, 非重要性的可以这样传
this.$router.push({
    path: '/shop/contract/viewContract',
    query: {
        handleStatus: '查看'
    }
})
console.log("123", this.$route.query.handleStatus)
```

## 14. el-tree单选
```js
@check="handleCheckChange"

// 单选
handleCheckChange(data) {
console.log(data)
var labvalojb = data; //暂存选中节点
// console.log(data);
this.$refs.sendTree.setCheckedKeys([]); //删除所有选中节点
this.$refs.sendTree.setCheckedNodes([labvalojb]); //选中已选中节点

if(this.subStatus === "single") {}
},

.el-tree .el-tree-node .is-leaf + .el-checkbox .el-checkbox__inner{display: inline-block;}
.el-tree .el-tree-node .el-checkbox .el-checkbox__inner{display: none;}
```

## 15. 根据某个字段合并单元格
```js
export default {
    data() {
        return {
            spanArr: [],//用于存放每一行记录的合并数
        }
    },
    create() {
        // 请求之后
        this.getSpanArr(this.tableData)
    },
    methods: {
        // 表格操作
        getSpanArr(data) {
        // console.log(data)

        // data就是我们从后台拿到的数据
        for (var i = 0; i < data.length; i++) {
            if (i === 0) {
            this.spanArr.push(1);
            this.pos = 0;
            } else {
            // 判断当前元素与上一个元素是否相同
            if (data[i].businessId === data[i - 1].businessId) {
                this.spanArr[this.pos] += 1;
                this.spanArr.push(0);
            } else {
                this.spanArr.push(1);
                this.pos = i;
            }
            }
            // console.log(this.spanArr);
        }
        },
        // 合并 label
        fixTable({ rowIndex, columnIndex }) {
        if (columnIndex === 0 || columnIndex === 1) {
            const _row = this.spanArr[rowIndex];
            const _col = _row > 0 ? 1 : 0;
            // console.log(`rowspan:${_row} colspan:${_col}`);
            return {
                // [0,0] 表示这一行不显示， [2,1]表示行的合并数
                rowspan: _row,
                colspan: _col
            };
        }
        },
    }
}

```

## 16. 重置
- `this.queryParams = this.$options.data.call(this).queryParams`

## 17. 监听vuex状态
```js
// store
const state = {
  isFixNav: false
}

const mutations = {
  SET_NAV_FIX: (state, isFixNav) => {
    state.isFixNav = isFixNav
  }
}

const actions = {
  getNavFix({ commit }, isFixNav) {
    commit('SET_NAV_FIX', isFixNav)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

// layout
import store from '@/store'

let timer = setTimeout(() => {
  let main = document.querySelector('.app-main')
  let nav = document.querySelector('.navbar_wrap')
  // console.log(main, nav)

  // 滚动条监听
  document.addEventListener('scroll', (e)=> {
    console.log(e.target.scrollTop)

    if(!main || !nav) {
      return
    }

    if(e.target.scrollTop > 100) {
      main.classList.add('fixed')
      nav.classList.add('fixed')

      // logo
      store.dispatch('xjp/getNavFix', true)
      // console.log(store.getters.isFixNav)
      // console.log(store)
    } else {
      main.classList.remove('fixed')
      nav.classList.remove('fixed')

      // logo
      store.dispatch('xjp/getNavFix', false)
    }
  }, true);

  clearTimeout(timer)
}, 300);

// vue
import { mapGetters } from 'vuex'

watch: {
    // 监听vux的nav
    isFixNav(val) {
      console.log("123475", val)
      this.navStatus = val
    }
  },
  computed: {
    ...mapGetters([
      'isFixNav'
    ]),
  },

<img src="@/assets/logo/logo1.png" alt="" v-if="!navStatus">
<img src="@/assets/logo/logo.png" alt="" v-else>
```

## 18. 国际化表单校验不生效
```html
<template>
  <div id="app">
    <router-view v-if="isActiveRoute" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActiveRoute: true
    }
  },
  methods: {
    reload() {
      this.isActiveRoute = false;
      this.$nextTick( () => {
        this.isActiveRoute = true;
      })
    }
  },
  watch: {
    '$i18n.locale'(newVal, oldVal) {
      if(newVal != oldVal) {
        this.reload()
      }
    }
  }
}
</script>
```

## element-ui中禁用某些日期
```js
// 季报
quarterlyPicker(startMonth, endMonth) {
    console.log("季报");
    let startMonthArr = startMonth.split("-");
    let endMonthArr = endMonth.split("-");

    // 开始月份
    this.pickerOptionsStartDate = {
        disabledDate(time) {
        return (time.getTime() !== new Date(startMonthArr[0], 1) - 8.64e7) && 
                (time.getTime() !== new Date(startMonthArr[0], 4) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 7) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 10) - 8.64e7);
        },
    };

    // 结束月份
    this.pickerOptionsEndDate = {
        disabledDate(time) {
        return (time.getTime() !== new Date(startMonthArr[0], 3) - 8.64e7) && 
                (time.getTime() !== new Date(startMonthArr[0], 6) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 9) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 12) - 8.64e7);
        },
    };
},

this.quarterlyPicker(this.generatingReportData.startMonth, this.generatingReportData.endMonth);
```

## 40. 下拉框禁用
```js
/*<el-form-item label="转审" prop="transferId">
<el-select v-model="approvalOperationData.transferId" placeholder="请选择被转审人" clearable>
    <el-option v-for="(item, index) in userList" :label="item.label" :value="item.value" :key="index" :disabled="item.disabled"></el-option>
</el-select>
</el-form-item>*/

this.userList.find(userItem=> {
    if(row.createUser === userItem.value) {
        userItem.disabled = true;
    }
});
```