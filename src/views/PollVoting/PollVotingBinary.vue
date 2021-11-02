<template>
  <div v-if="!areAllStepsCompleted" class="flex gap-2 justify-center">
    <ChoiceCard
      :title="options[currentStep - 1][0]?.name"
      :imageSrc="options[currentStep - 1][0]?.imageSrc"
      @click="clickOptionHandler(options[currentStep - 1][0]?.name)"
    />
    <ChoiceCard
      :title="options[currentStep - 1][1]?.name"
      :imageSrc="options[currentStep - 1][1]?.imageSrc"
      @click="clickOptionHandler(options[currentStep - 1][1]?.name)"
    />
  </div>
  <div v-else class="flex flex-col items-center">
    <button
      @click="submitHandler"
      class="btn-primary p-2 rounded-full px-6 my-4"
    >
      submit
    </button>
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
import { defineComponent, ref, PropType, computed } from "vue";
import { viewNames } from "@/router/views";
import ChoiceCard from "@/components/ChocieCard.vue";
import { IOption } from "@/types";

export default defineComponent({
  name: viewNames.POLL_VOTING_BINARY,
  components: {
    ChoiceCard,
  },
  props: {
    options: {
      type: Array as PropType<IOption[][]>,
      required: true,
    },
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const checkedSteps = ref<number[]>([]);
    const selectedOptions = ref<string[]>([]);

    selectedOptions.value = props.options.map(() => "");

    const areAllStepsCompleted = computed(
      () => "" !== selectedOptions.value.find((item) => item === "")
    );

    const submitHandler = () => {
      console.log("SUBMITTING");
      console.log(selectedOptions.value);
    };

    const clickOptionHandler = (optionName: string) => {
      selectedOptions.value[props.currentStep - 1] =
        selectedOptions.value[props.currentStep - 1] !== optionName
          ? optionName
          : "";

      const completeStepsIndexes: number[] = selectedOptions.value
        .filter((option) => option !== "")
        .map((_, indx) => indx + 1);

      if (props.currentStep === props.options.length)
        return emit("change:checkedStepList", completeStepsIndexes);

      emit("change:step", props.currentStep + 1);
      emit("change:checkedStepList", completeStepsIndexes);
    };

    return {
      checkedSteps,
      selectedOptions,
      areAllStepsCompleted,
      clickOptionHandler,
      submitHandler,
    };
  },
});
</script>

<style scoped></style>
