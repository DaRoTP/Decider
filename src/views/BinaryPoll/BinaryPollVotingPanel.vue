<template>
  <section class="flex flex-col gap-4 items-center">
    <PollSteps
      :numberOfSteps="currentOptions.length"
      :currentStep="currentStep"
      :checkedSteps="checkedSteps"
      stepNavType="BACK"
    />
    <div class="flex gap-2">
      <ChoiceCard
        class="left-choice-card transition-all"
        :class="[chocieCardSelectedClass(rightOption.name)]"
        :title="rightOption.name"
        :imageSrc="rightOption.imageSrc"
        @click="selectOptionHandler(rightOption.name)"
        @mouseenter="() => (hoverOverOption = rightOption.name)"
        @mouseleave="() => (hoverOverOption = '')"
      />
      <ChoiceCard
        class="right-choice-card transition-all"
        :class="[chocieCardSelectedClass(leftOption.name)]"
        :title="leftOption.name"
        :imageSrc="leftOption.imageSrc"
        @click="selectOptionHandler(leftOption.name)"
        @mouseenter="() => (hoverOverOption = leftOption.name)"
        @mouseleave="() => (hoverOverOption = '')"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed } from "vue";
import { Views } from "@/router/viewNames";
import ChoiceCard from "@/components/ChocieCard.vue";
import PollSteps from "@/components/PollSteps.vue";
import { IOption } from "@/types";
import { generatePairList, shuffle } from "@/utils";

export default defineComponent({
  name: Views.VOTING_PANNEL.BINARY,
  components: {
    ChoiceCard,
    PollSteps,
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
  },
  setup(props, { emit }) {
    const selectedOptions = ref<string[]>([]);
    const currentOptions = ref<[IOption, IOption][]>([]);
    const currentStep = ref<number>(1);
    const hoverOverOption = ref<string>("");

    currentOptions.value = generatePairList<IOption>(
      shuffle<IOption>(props.options)
    );

    const leftOption = computed(
      () => currentOptions.value[currentStep.value - 1][0]
    );
    const rightOption = computed(
      () => currentOptions.value[currentStep.value - 1][1]
    );

    const checkedSteps = computed(() => {
      return selectedOptions.value.map(
        (item) =>
          currentOptions.value.findIndex(
            ([opt1, opt2]) => opt1.name === item || opt2.name === item
          ) + 1
      );
    });

    const chocieCardSelectedClass = (optionName: string) => {
      if (hoverOverOption.value === "") return "";
      return hoverOverOption.value === optionName
        ? "selected-choice-card"
        : "not-selected-choice-card";
    };

    const selectOptionHandler = (optionName: string) => {
      let optionPoints = props.submittingData[optionName];
      if (selectedOptions.value[currentStep.value - 1] === optionName) {
        selectedOptions.value[currentStep.value - 1] = "";
        optionPoints -= 1;
      } else {
        selectedOptions.value[currentStep.value - 1] = optionName;
        currentStep.value += 1;
        optionPoints += 1;
      }
      const updatedData = {
        ...props.submittingData,
        [optionName]: optionPoints,
      };
      emit("update:submittingData", updatedData);

      if (currentOptions.value.length === 1) {
        return emit("confirm");
      }

      if (currentStep.value > currentOptions.value.length) {
        // reset current step
        currentStep.value = 1;
        // filter selected options
        const selectedOptionList = props.options.filter(({ name }) =>
          selectedOptions.value.includes(name)
        );
        currentOptions.value = generatePairList<IOption>(
          shuffle<IOption>(selectedOptionList)
        );
        // reset selected options
        selectedOptions.value = [];
      }
    };

    return {
      currentStep,
      currentOptions,
      selectedOptions,
      leftOption,
      rightOption,
      checkedSteps,
      hoverOverOption,
      selectOptionHandler,
      chocieCardSelectedClass,
    };
  },
});
</script>

<style lang="scss">
$translate-x: 3rem;
$scale-up: 1.02;
$scale-down: 0.8;
.selected-choice-card {
  &.right-choice-card {
    transform: scale($scale-up) translateX(-$translate-x);
    z-index: 2;
  }
  &.left-choice-card {
    transform: scale($scale-up) translateX($translate-x);
    z-index: 2;
  }
}

.not-selected-choice-card {
  opacity: 0.6;
  &.right-choice-card {
    transform: scale($scale-down) translateX(-$translate-x);
    z-index: 0;
  }
  &.left-choice-card {
    transform: scale($scale-down) translateX($translate-x);
    z-index: 0;
  }
}
</style>
