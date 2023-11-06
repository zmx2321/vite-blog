<template>
  <section class="inside-section">
    <iframe :src="url" frameborder="0" width="100%" :height="height"></iframe>
  </section>
</template>

<script setup>
const props = defineProps({
  url: String,
  height: {
    type: String,
    default: 400,
  },
});
</script>
<style lang="scss" scoped></style>
