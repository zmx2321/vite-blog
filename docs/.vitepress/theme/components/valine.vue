<template>
  <section class="read_num">
    <div>
      <!-- id 将作为查询条件 -->
      <span class="leancloud-visitors" data-flag-title="sss">
        <em class="post-meta-item-text">访问量： </em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <!-- <h3>
      <a href="javascript:;"></a>
      评 论：
    </h3>
    <div id="vcomments"></div> -->
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Valine from "valine";

const path = ref(window.location.pathname);
fileName = path.split("/")[1];

const init = () => {
  /* new Valine({
    el: "#vcomments",
    appId: "wvnzPTX6Bl11I4U3FZ8ehzmx-gzGzoHsz", // your appId
    appKey: "8DeYTNaZ7rFPmSW5D2iwOY5x", // your appKey
    notify: false,
    verify: false,
    path: window.location.pathname,
    visitor: true,
    avatar: "https://zmx2321.github.io/vite-blog/favicon.ico", // (''/mp/identicon/monsterid/wavatar/robohash/retro/hide)
    placeholder: "write here",
  }); */

  // console.log(window.location.pathname);

  var valine = new Valine();

  valine.init({
    el: "#vcomments",
    appId: "PzBRAo1U271H7HJLjo1z72Nd-gzGzoHsz", // your appId
    appKey: "8eVX45J8i5VFTlkejnfBMuhh", // your appKey
    // notify: false,
    // verify: false,
    path: path.value,
    visitor: true,
    avatar: "https://zmx2321.github.io/vite-blog/favicon.ico",
  });

  console.log(valine);
};

onMounted(() => {
  init();
});
/* export default {
  name: "Valine",
  mounted() {
    // require window
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      document.getElementsByClassName("leancloud-visitors")[0].id = window.location.pathname;
      this.window = window;
      window.AV = require("leancloud-storage");
    }

    new Valine({
      el: "#vcomments",
      appId: "PzBRAo1U271H7HJLjo1z72Nd-gzGzoHsz", // your appId
      appKey: "8eVX45J8i5VFTlkejnfBMuhh", // your appKey
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true,
      avatar: "mm",
      placeholder: "write here",
    });
  },
}; */
</script>

<style lang="scss" scoped>
.read_num {
  margin-bottom: 16px;
  border-bottom: 2px solid #eaecef;
  padding-bottom: 10px;
  text-indent: 0em;
}
</style>
