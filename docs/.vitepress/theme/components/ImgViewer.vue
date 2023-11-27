<template>
  <section class="img_viewer">
    <img :src="src" :alt="alt" @click="getImgView" />

    <el-dialog v-model="dialogVisible" :title="imgName" width="100%" height="100%">
      <img :src="src" :alt="alt" @click="getImgView" />

      <!-- <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template> -->
    </el-dialog>
  </section>
</template>
<script setup>
import { ref } from "vue";

const dialogVisible = ref(false);
const imgName = ref(props.src.substring(props.src.lastIndexOf("/") + 1, props.src.length));

const props = defineProps({
  src: String,
  alt: String,
});

const getImgView = () => {
  //   console.log("getImgView");

  dialogVisible.value = true;
};
</script>
<style lang="scss" scoped>
.img_viewer {
  &, cursor: pointer;

  img {
    cursor: pointer;
  }

  ::v-deep(.el-dialog) {
    margin: 0;
    width: 100%;
    height: 100%;
    min-height: 300px;

    .el-dialog__header {
      position: fixed;
      top: 0;
      left: 0;
      padding-right: 0;
      margin-right: 0;
      width: 99.5%;
      background: #ffffff;
      box-shadow: -5px 3px 6px 3px #e1e1e1;

      .el-dialog__headerbtn {
        top: 3px;
      }
    }

    .el-dialog__body {
      padding: 65px 0 0 0;
      background: #fff;
    }
  }
}
</style>
