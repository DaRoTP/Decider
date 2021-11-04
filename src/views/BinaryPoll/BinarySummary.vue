<template>
  <div class="flex flex-col items-center">
    <div
      v-for="(step, indx) in options"
      :key="`${step[0].name}-${step[1].name}`"
      class="flex gap-2"
    >
      <span
        v-for="option in step"
        :key="option.name"
        :class="{ 'font-bold': selectedOptions[indx] === option.name }"
        >{{ option.name }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IOption } from "@/types";

export default defineComponent({
  name: "BinarySummary",
  props: {
    options: {
      type: Array as PropType<IOption[][]>,
      required: true,
    },
    selectedOptions: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
