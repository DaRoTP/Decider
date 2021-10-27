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
      <strong>{{ `${currentStep}/${pollStepsList.length}` }}</strong>
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
      return isStepChecked(step) ? "bg-primary" : "bg-blue-300";
    };

    const stepClickHandler = (step: number) => {
      console.log(props.stepNavType);
      if (props.stepNavType === "NONE") return;
      if (props.stepNavType === "BACK" && step >= props.currentStep) return;
      emit("update:currentStep", step);
      console.log("clicked => ", step);
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
