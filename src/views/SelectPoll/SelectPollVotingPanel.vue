<template>
  <section class="flex flex-col mx-auto mt-4">
    <header class="flex justify-between mb-2">
      <div v-if="meta && meta.maxChoice" class="flex gap-2 items-center">
        <strong class="text-primary text-xl">
          {{ numberOfSelectedOPtions }}/{{ meta.maxChoice }}
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
      :index="index + 1"
      @click="toggleSelectOption(option.name)"
      :selected="!!submittingData[option.name]"
      :showContentRight="!!submittingData[option.name]"
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
import { defineComponent, computed, PropType } from "vue";
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
      type: Object as PropType<Record<string, number>>,
      required: true,
    },
    meta: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const numberOfSelectedOPtions = computed(() =>
      Object.values(props.submittingData).reduce((acc, item) => acc + item)
    );

    const toggleSelectOption = (optionName: string) => {
      if (
        !props.meta ||
        !props.meta?.maxChoice ||
        props.meta?.maxChoice === 1
      ) {
        if (
          numberOfSelectedOPtions.value > 0 &&
          props.submittingData[optionName] === 1
        ) {
          return emit("update:submittingData", {
            ...props.submittingData,
            [optionName]: 0,
          });
        } else {
          return emit("update:submittingData", {
            ...props.submittingData,
            [optionName]: 1,
          });
        }
      }

      if (props.submittingData[optionName] === 1) {
        return emit("update:submittingData", {
          ...props.submittingData,
          [optionName]: 0,
        });
      }
      if (props.meta && numberOfSelectedOPtions.value >= props.meta.maxChoice) {
        return;
      }
      return emit("update:submittingData", {
        ...props.submittingData,
        [optionName]: 1,
      });
    };

    return {
      numberOfSelectedOPtions,
      toggleSelectOption,
    };
  },
});
</script>
