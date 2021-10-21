<template>
  <div class="flex flex-col gap-2">
    <button
      @click="isOptionsListMinimized = !isOptionsListMinimized"
      type="button"
      class="flex items-center gap-1 self-end"
    >
      <template v-if="isOptionsListMinimized">
        Compress <fa icon="compress" />
      </template>
      <template v-else>Expand <fa icon="expand" /></template>
    </button>
    <ul class="flex flex-col gap-2">
      <PollOption
        v-for="(option, index) in options"
        :selected="selectedOption === option.name"
        :key="option.name"
        :index="index + 1"
        :name="option.name"
        :description="option.description"
        :expand="!isOptionsListMinimized"
        @click="$emit('option-click', option)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { IOption } from "@/types";
import PollOption from "./PollOption.vue";

export default defineComponent({
  name: "Option List",
  components: {
    PollOption,
  },
  props: {
    options: {
      type: Array as PropType<IOption[]>,
      default: () => [],
    },
    selectedOption: {
      type: String,
    },
  },
  setup() {
    const isOptionsListMinimized = ref<boolean>(true);
    return {
      isOptionsListMinimized,
    };
  },
});
</script>

<style scoped></style>
