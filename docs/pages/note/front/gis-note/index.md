---
pageClass: site-layout
---

<site-list v-for="model in siteData" :key="model.title" :title="model.title" :data="model.items" />
<script setup>
// 网址导航页面的数据
import siteData from "../../../../site/data/mapUrl.js";
// import siteData from "./data/mapUrl.js";
</script>