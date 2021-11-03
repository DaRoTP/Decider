<template>
  <nav>
    <ul class="flex gap-2 items-center">
      <li
        v-for="step in pollStepsList"
        :key="step"
        class="
          text-white
          px-3
          py-1
          cursor-pointer
          rounded-md
          shadow-md
          flex
          items-center
          justify-center
        "
        :class="[stepClasses(step)]"
        :style="{ width: '2rem', height: '2rem' }"
        @click="stepClickHandler(step)"
      >
        <fa v-if="isStepChecked(step)" icon="check" />
      </li>
      <strong>{{ `${checkedSteps.length}/${pollStepsList.length}` }}</strong>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

type StepNavType = "NONE" | "BACK" | "ALL";

export default defineComponent({
  name: "PollSteps",
  props: {
    numberOfSteps: {
      type: Number,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
    checkedSteps: {
      type: Array as PropType<number[]>,
      default: () => [],
    },
    stepNavType: {
      type: String as PropType<StepNavType>,
      default: "NONE",
    },
  },
  setup(props, { emit }) {
    const pollStepsList = computed(() => {
      return Array.from({ length: props.numberOfSteps }, (_, i) => i + 1);
    });

    const isStepChecked = (currentStep: number) => {
      return !!props.checkedSteps.find((step) => step === currentStep);
    };

    const stepClasses = (step: number) => {
      const checkedClasses = isStepChecked(step) ? "bg-primary" : "bg-blue-300";
      const currentStepClass =
        props.currentStep === step ? "outline-black" : "";
      return `${checkedClasses} ${currentStepClass}`;
    };

    const stepClickHandler = (step: number) => {
      if (props.stepNavType === "NONE") return;
      if (
        props.stepNavType === "BACK" &&
        !props.checkedSteps.find((item) => item === step)
      )
        return;
      emit("update:currentStep", step);
    };

    return {
      pollStepsList,
      stepClasses,
      isStepChecked,
      stepClickHandler,
    };
  },
});
</script>
