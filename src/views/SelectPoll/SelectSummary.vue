<template>
  <div>Here is Asumary for this thing</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IOption } from "@/types";

export default defineComponent({
  name: "SelectSummary",
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
