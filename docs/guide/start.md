---
pageClass: site-layout
---

<h3 style='padding: 0 0 10px 8px; cursor: pointer;'>博客快捷导航</h3>

<site-list v-for="model in siteData" :key="model.title" :title="model.title" :data="model.items" />
<script setup>
// 网址导航页面的数据
import siteData from "../.vitepress/theme/model/guideSiteData.js";
</script>