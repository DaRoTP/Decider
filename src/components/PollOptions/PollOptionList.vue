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
        :selected="isOptionSelected(option.name)"
        :key="option.name"
        :imageSrc="option.imageSrc"
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
    selectedOptions: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  setup(props) {
    const isOptionsListMinimized = ref<boolean>(true);
    const isOptionSelected = (optionName: string) => {
      return !!props.selectedOptions.find((name) => name === optionName);
    };

    return {
      isOptionsListMinimized,
      isOptionSelected,
    };
  },
});
</script>

<style scoped></style>
