<template>
  <div class="flex flex-col">
    <div
      class="bg-gray-300 -mx-3 flex flex-col transition-all overflow-hidden"
      :style="{ maxHeight: '20rem' }"
      :class="{ 'config-hide': isMinimized }"
    >
      <slot />
    </div>
    <button
      @click="isMinimized = !isMinimized"
      class="bg-gray-600 text-white rounded-lg px-1 self-center"
    >
      Config
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PollConfiguration",
  setup() {
    const isMinimized = ref<boolean>(false);
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
