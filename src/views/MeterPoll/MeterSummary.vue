<template>
  <div>
    <p v-for="(option, index) in options" :key="option.name">
      <span>{{ option.name }}: </span>
      <strong>{{ selectedOptions[index] }}</strong>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IOption } from "@/types";

export default defineComponent({
  name: "MeterSummary",
  props: {
    options: {
      type: Array as PropType<IOption[]>,
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
