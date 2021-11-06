<template>
  <div class="flex flex-col items-center gap-2">
    <div
      v-for="(step, indx) in options"
      :key="`${step[0].name}-${step[1].name}`"
      class="
        grid grid-cols-2
        bg-white
        w-full
        overflow-hidden
        rounded-sm
        shadow-md
      "
    >
      <span class="flex gap-2 relative">
        <img
          class="object-cover"
          :style="{ width: '6rem', height: '4rem' }"
          :src="step[0].imageSrc"
        />
        {{ step[0].name }}
        <div
          v-if="selectedOptions[indx] === step[0].name"
          class="bg-gray-400 absolute w-full h-full opacity-50"
        ></div>
      </span>
      <span class="flex gap-2 relative">
        <img
          class="object-cover"
          :style="{ width: '6rem', height: '4rem' }"
          :src="step[1].imageSrc"
        />
        {{ step[1].name }}
        <div
          v-if="selectedOptions[indx] === step[1].name"
          class="bg-gray-400 absolute w-full h-full opacity-50"
        ></div>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IOption } from "@/types";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: Views.POLL_SUMMARY.BINARY,
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
