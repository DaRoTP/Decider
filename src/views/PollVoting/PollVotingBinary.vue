<template>
  <div v-if="currentStep <= options.length" class="flex gap-2 justify-center">
    <ChoiceCard
      :title="leftOption.name"
      :imageSrc="leftOption.imageSrc"
      :selected="selectedOptions[currentStep - 1] === leftOption.name"
      @click="clickOptionHandler(options[currentStep - 1][0]?.name)"
    />
    <ChoiceCard
      :title="rightOption.name"
      :imageSrc="rightOption.imageSrc"
      :selected="selectedOptions[currentStep - 1] === rightOption.name"
      @click="clickOptionHandler(rightOption.name)"
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

    const leftOption = computed(() => props.options[props.currentStep - 1][0]);
    const rightOption = computed(() => props.options[props.currentStep - 1][1]);

    const submitHandler = () => {
      emit("submit", selectedOptions.value);
      console.log("SUBMITTING");
    };

    const clickOptionHandler = (optionName: string) => {
      if (selectedOptions.value[props.currentStep - 1] !== optionName) {
        emit("change:step", props.currentStep + 1);
      }

      selectedOptions.value[props.currentStep - 1] =
        selectedOptions.value[props.currentStep - 1] === optionName
          ? ""
          : optionName;

      const completeStepsIndexes: number[] = selectedOptions.value
        .filter((option) => option !== "")
        .map((_, indx) => indx + 1);
      emit("change:checkedStepList", completeStepsIndexes);
    };

    return {
      checkedSteps,
      selectedOptions,
      leftOption,
      rightOption,
      clickOptionHandler,
      submitHandler,
    };
  },
});
</script>

<style scoped></style>
