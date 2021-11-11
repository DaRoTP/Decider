<template>
  <section class="flex flex-col">
    <header class="flex justify-between mb-2">
      <div v-if="meta && meta.maxChoice" class="flex gap-2 items-center">
        <strong class="text-primary text-xl">
          {{ selectedOptions.length }}/{{ meta.maxChoice }}
        </strong>
        <span class="text-xs text-gray-500" :style="{ maxWidth: '5.5rem' }">
          you can select max {{ meta.maxChoice }} options
        </span>
      </div>
      <button
        @click="$emit('confirm')"
        class="btn-primary px-2 py-1 shadow-md rounded-md ml-auto"
      >
        Confirm
      </button>
    </header>
    <PollOption
      v-for="(option, index) in options"
      :key="option.name"
      :name="option.name"
      :imageSrc="option.imageSrc"
      :index="index"
      @click="toggleSelectOption(option.name)"
      :selected="submittingData.includes(option.name)"
      :showContentRight="submittingData.includes(option.name)"
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
import { defineComponent, PropType } from "vue";
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

    const toggleSelectOption = (optionName: string) => {
      if (
        !props.meta ||
        !props.meta?.maxChoice ||
        props.meta?.maxChoice === 1
      ) {
        if (
          props.submittingData.length > 0 &&
          props.submittingData[0] === optionName
        ) {
          return emit("update:submittingData", []);
        } else {
          return emit("update:submittingData", [optionName]);
        }
      }

      if (props.submittingData.includes(optionName)) {
        return emit(
          "update:submittingData",
          props.submittingData.filter((item) => item !== optionName)
        );
      }
      if (props.meta && props.submittingData.length >= props.meta.maxChoice) {
        return;
      }
      emit("update:submittingData", [...props.submittingData, optionName]);
    };

    return {
      toggleSelectOption,
    };
  },
});
</script>
