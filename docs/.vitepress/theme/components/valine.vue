<template>
  <section class="leancloud_wrap">
    <div class="visitor_cont" id="visitor" :data-flag-title="fileName"></div>
    <div class="comments_wrap">
      <h3>评 论：</h3>
      <div id="vcomments" file-name></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Valine from "valine";

const valine = new Valine();
const path = window.location.pathname;
const fileName = ref(path.split("/")[path.split("/").length - 1]);

const props = defineProps({
  isShowComments: {
    type: Boolean,
    default: true,
  },
});

const init = () => {
  valine.init({
    el: "#vcomments",
    appId: "wvnzPTX6Bl11I4U3FZ8ehzmx-gzGzoHsz", // your appId
    appKey: "8DeYTNaZ7rFPmSW5D2iwOY5x", // your appKey
    path,
    visitor: true,
    avatar: "mm",
    placeholder: "快来发表评论吧 ~",
  });
};

onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.leancloud_wrap {
  .comments_wrap {
    h3 {
      margin-bottom: 20px;
    }

    /* #vcomments {
    } */
  }
}
</style>
