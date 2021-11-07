<template>
  <button
    @click="$emit('update:modelValue', !modelValue)"
    :style="{ width: '4rem', height: '2rem' }"
    class="bg-primary rounded-md p-1 relative"
    :class="{ 'bg-gray-400': !modelValue }"
  >
    <span
      :style="{
        width: '1.8rem',
        height: '1.4rem',
        transform: modelValue ? 'translate(1.6rem)' : '',
      }"
      class="
        bg-white
        rounded-sm
        shadow-sm
        grid
        place-items-center
        transition-all
      "
    >
      <fa v-if="modelValue" icon="check" class="text-primary text-xs" />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Switch",
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  setup() {
    return {};
  },
});
</script>
