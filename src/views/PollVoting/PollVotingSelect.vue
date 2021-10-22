<template>
  <div>
    <PollSteps
      :numberOfSteps="5"
      v-model:currentStep="currentStep"
      :checkedSteps="checkedSteps"
    />
    <button @click="nextStepHandler">next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PollSteps from "@/components/PollSteps.vue";

export default defineComponent({
  name: "PollVotingSelect",
  components: {
    PollSteps,
  },
  setup() {
    const currentStep = ref<number>(1);
    const checkedSteps = ref<number[]>([]);

    const nextStepHandler = () => {
      checkedSteps.value.push(currentStep.value);
      currentStep.value = currentStep.value + 1;
    };

    return {
      checkedSteps,
      currentStep,
      nextStepHandler,
    };
  },
});
</script>

<style scoped></style>
