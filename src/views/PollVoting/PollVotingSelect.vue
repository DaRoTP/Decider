<template>
  <div class="flex flex-col items-center">
    <PollSteps
      class="my-4"
      :numberOfSteps="5"
      v-model:currentStep="currentStep"
      :checkedSteps="checkedSteps"
      stepNavType="BACK"
    />
    <button
      class="btn-primary p-2 rounded-full px-6 my-4"
      @click="nextStepHandler"
    >
      next
    </button>
    <div class="flex flex-col items-center">
      <PollOptionList
        :options="options"
        :selectedOptions="selectedOptions"
        :style="{ width: '20rem' }"
        @option-click="toggleSelectOption"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PollSteps from "@/components/PollSteps.vue";
import PollOptionList from "@/components/PollOptions/PollOptionList.vue";
import { IOption } from "@/types";

export default defineComponent({
  name: "PollVotingSelect",
  components: {
    PollSteps,
    PollOptionList,
  },
  setup() {
    const currentStep = ref<number>(1);
    const checkedSteps = ref<number[]>([]);
    const selectedOptions = ref<string[]>([]);
    const options = ref<IOption[]>([
      { name: "jeden", description: "jeden description" },
      { name: "dwa", description: "jeden description" },
      { name: "tezy", description: "jeden description" },
      { name: "cztery", description: "jeden description" },
    ]);

    const toggleSelectOption = (option: IOption) => {
      const optionIndex = selectedOptions.value.findIndex(
        (name) => name === option.name
      );
      if (optionIndex > -1) {
        return selectedOptions.value.splice(optionIndex, 1);
      }
      selectedOptions.value.push(option.name);
    };

    const nextStepHandler = () => {
      checkedSteps.value.push(currentStep.value);
      currentStep.value = currentStep.value + 1;
    };

    return {
      checkedSteps,
      currentStep,
      options,
      selectedOptions,
      nextStepHandler,
      toggleSelectOption,
    };
  },
});
</script>

<style scoped></style>
