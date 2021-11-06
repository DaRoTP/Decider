<template>
  <div class="flex flex-col gap-2">
    <div
      v-for="(option, index) in options"
      :key="option.name"
      class="bg-white shadow-lg rounded-sm overflow-hidden"
    >
      <div class="flex gap-2 relative">
        <span
          class="
            text-white
            p-1
            bg-primary
            absolute
            rounded-md
            ml-1
            mt-1
            shadow-md
            text-xs
          "
          >{{ selectedOptions[index] }}%</span
        >
        <img
          class="object-cover"
          :style="{ width: '6rem' }"
          :src="option.imageSrc"
          alt=""
        />
        <span class="flex-1 flex-wrap">{{ option.name }}</span>
      </div>
      <div class="relative" :style="{ height: '0.25rem' }">
        <span class="bg-gray-400 w-full h-full absolute left-0" />
        <span
          class="bg-primary absolute h-full left-0"
          :style="{
            width: `${choicePercentage(selectedOptions[index])}%`,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IOption } from "@/types";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: Views.POLL_SUMMARY.METER,
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
    const choicePercentage = (number: number) => {
      return number;
    };
    return {
      choicePercentage,
    };
  },
});
</script>
