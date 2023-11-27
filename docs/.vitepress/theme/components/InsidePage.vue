<template>
  <section class="inside-section">
    <iframe :src="url" frameborder="0" :width="width" :height="height" :style="style"></iframe>
  </section>
</template>

<script setup>
defineProps({
  url: String,
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "400",
  },
  style: {
    type: String,
    default: "",
  },
});
</script>
