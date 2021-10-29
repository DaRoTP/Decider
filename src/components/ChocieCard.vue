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
      <div class="gradient-change"></div>
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

  .gradient-change {
    width: 100%;
    height: 50%;
    background: $primary;
    background: linear-gradient(0deg, $primary 0%, rgba(0, 212, 255, 0) 100%);
    position: absolute;
    bottom: 0;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    padding: 0;
    .gradient-change {
      height: 25%;
    }
  }
}
</style>
