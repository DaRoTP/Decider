<template>
  <div class="choice-card-wrapper flex flex-col items-center justify-center">
    <div
      class="
        choice-card
        shadow-md
        rounded-md
        cursor-pointer
        relative
        overflow-hidden
        h-full
        w-full
      "
    >
      <img :src="imageSrc" class="h-full object-cover" />
      <h1 class="text-white font-bold absolute bottom-1 w-full text-center">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChocieCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.choice-card-wrapper {
  height: 22rem;
  width: 20rem;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    padding: 0;
  }
}
</style>
