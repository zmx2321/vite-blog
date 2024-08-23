# 封装一个公共的dialog组件
> 在每次使用dialog,特别只是显示基本信息的时候,每次都写dialog十分累赘,于是封装一个公共的dialog组件,方便以后使用

## 创建组件
> 创建组件`@/components/global/DialogInfo.vue`
- 我们之前讲到过,不需要引入可以直接使用组件的方式,我们希望这种弹窗组件不需要引入,直接就可以在各个组件使用
- 具体使用方法可以移步前文 -> [封装一个全局导出功能](/pages/note/front/project-note/project1/project1-note-2) 查阅

## 组件内容
- DialogInfo.vue
```vue
<template>
  <el-dialog :width="dialogWidth" v-model="showDialog" :close-on-click-modal="false" :modal-append-to-body="false" :close-on-press-escape="false">
    <template #header>
      <slot name="DialogTitle"></slot>
    </template>
    <div class="container">
      <slot name="DialogContainer"></slot>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <slot name="extendBtn"></slot>
        <el-button @click="showDialog = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";

let dialogWidth = '75%'

const showDialog = ref(false);

// 可以通过这个方法动态设置宽度
const setDialogWidth = (width) => {
  dialogWidth = width;
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

## 使用组件
> - 我们在业务代码中使用这个组件
> - 一般来说,弹窗组件都是独立出来,并在业务代码中引入使用
> - 比如我们需要创建一个详情按钮弹窗
- 业务代码中引入
```vue
<el-button link type="primary" size="small" @click="getIndexDialog(scope.row)">详情</el-button>

<script setup name="xxxx">
import IndexDialogInfo from './components/indexDialogInfo.vue'
const refIndexDialogInfo = ref(null)

const getIndexDialog = (row) => {
    // console.log('详情', row)

    refIndexDialogInfo.value.show(row);
}
</script>
```
- `indexDialogInfo.vue`弹窗组件,即直接使用封装组件
```vue
<template>
    <dialog-info ref="refIndexDialogInfo" class="dialog_info_wrap">
        <!-- 标题 -->
        <template #DialogTitle>
            <span>xxxxx</span>
        </template>
        
        <!-- 内容 -->
        <template #DialogContainer>
            <div class="dialog_cont">
            </div>
        </template>

        <!-- 按钮扩展 -->
        <template #extendBtn>
            <el-button type="primary" @click="submit">提交</el-button>
        </template>
    </dialog-info>
</template>

<script setup>
import { ref } from "vue";

const refIndexDialogInfo = ref(null);

/**
 * 业务
 */
const show = (val) => {
    refIndexDialogInfo.value.show();
    refIndexDialogInfo.value.setDialogWidth('30%');  // 设置宽度
};

// 提交
const submit = () => {
    // console.log('提交');    
};

defineExpose({
    show,
});
</script>

<style lang="scss" scoped>
.dialog_info_wrap {
    .dialog_cont {}
}
</style>
```