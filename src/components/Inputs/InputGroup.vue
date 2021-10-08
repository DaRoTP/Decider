<template>
  <div class="input-group flex flex-col gap-1">
    <slot name="label">
      <label class="text-primary text-sm capitalize" :class="[classLabel]">{{
        label
      }}</label>
    </slot>
    <slot name="input" />
    <slot name="subText">
      <span class="h-3 text-sm text-red-700" :class="[subTextLabel]">{{
        subText
      }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
    },
    subText: {
      type: String,
    },
    classLabel: {
      type: String,
      default: "",
    },
    subTextLabel: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>
