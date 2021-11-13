<template>
  <div class="meter-option-card">
    <img :src="imageSrc" alt="" />
    <div class="card-1"></div>
    <div class="card-2"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MeterOptionCard",
  props: {
    imageSrc: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped></style>
