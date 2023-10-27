<template>
  {{ fileName }}
</template>

<script setup>
import { ref } from "vue";

let fileName = ref("");

if (typeof window !== "undefined") {
  const path = window.location.pathname;
  fileName.value = path.split("/")[path.split("/").length - 1].split(".")[0];
}

/* let path

const path = window.location.pathname;
const fileName = ref(path.split("/")[path.split("/").length - 1].split(".")[0]); */
</script>

<style lang="scss" scoped></style>
