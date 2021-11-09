<template>
  <div class="flex flex-col">
    <div
      class="bg-blue-100 -mx-3 flex flex-col transition-all overflow-hidden"
      :style="{ maxHeight: '20rem' }"
      :class="{ 'config-hide': isMinimized }"
    >
      <slot />
    </div>
    <button
      @click="isMinimized = !isMinimized"
      class="
        bg-blue-200
        text-primary
        rounded-xl
        text-sm
        px-2
        py-1
        -mt-2
        self-center
        shadow-sm
      "
    >
      <fa icon="sliders-h" />
      Config
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PollConfiguration",
  setup() {
    const isMinimized = ref<boolean>(true);
    return {
      isMinimized,
    };
  },
});
</script>

<style scoped>
.config-hide {
  max-height: 0 !important;
}
</style>
