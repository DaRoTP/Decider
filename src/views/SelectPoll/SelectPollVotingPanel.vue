<template>
  <section class="flex flex-col">
    <header class="flex justify-between mb-2">
      <div v-if="!meta" class="flex gap-2 items-center">
        <strong class="text-primary text-xl">
          {{ selectedOptions.length }}/4
        </strong>
        <span class="text-xs text-gray-500" :style="{ maxWidth: '5rem' }">
          you can select max {{ meta?.maxChoice || "2" }}
        </span>
      </div>
      <button class="btn-primary px-2 py-1 shadow-md rounded-md">Submit</button>
    </header>
    <PollOption
      v-for="(option, index) in options"
      :key="option.name"
      :name="option.name"
      :imageSrc="option.imageSrc"
      :index="index"
      @click="toggleSelectOption(option.name)"
      :selected="selectedOptions.includes(option.name)"
      :showContentRight="selectedOptions.includes(option.name)"
      :style="{ minWidth: '30rem' }"
    >
      <template #content-right>
        <div
          class="bg-primary text-white w-full flex justify-center items-center"
        >
          <fa icon="check" />
        </div>
      </template>
    </PollOption>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRef, PropType } from "vue";
import PollOption from "@/components/PollOptions/PollOption.vue";
import { IOption } from "@/types";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: Views.VOTING_PANNEL.SELECT,
  components: {
    PollOption,
  },
  props: {
    options: {
      type: Array as PropType<IOption[]>,
      required: true,
    },
    submittingData: {
      type: Array as PropType<string[]>,
      required: true,
    },
    meta: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const selectedOptions = toRef(props, "submittingData");

    const toggleSelectOption = (optionName: string) => {
      const optionIndex = selectedOptions.value.findIndex(
        (name) => name === optionName
      );
      if (optionIndex > -1) {
        return selectedOptions.value.splice(optionIndex, 1);
      }
      selectedOptions.value.push(optionName);
      emit("update:submittingData", selectedOptions.value);
    };

    return {
      selectedOptions,
      toggleSelectOption,
    };
  },
});
</script>

<style scoped></style>
