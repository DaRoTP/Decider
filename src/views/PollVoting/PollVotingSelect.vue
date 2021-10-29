<template>
  <div class="flex flex-col items-center">
    <PollSteps
      class="my-4"
      :numberOfSteps="options.length"
      v-model:currentStep="currentStep"
      :checkedSteps="checkedSteps"
      stepNavType="BACK"
    />
    <button
      class="btn-primary p-2 rounded-full px-6 my-4"
      v-if="options.length == currentStep"
      @click="submitSelectedOptions"
    >
      Submit
    </button>
    <button
      v-else
      class="btn-primary p-2 rounded-full px-6 my-4"
      @click="nextStepHandler"
      :disabled="selectedOptions[currentStep - 1].length === 0"
    >
      next
    </button>
    <div class="flex flex-col items-center">
      <PollOptionList
        :options="currentOptions"
        :selectedOptions="selectedOptions[currentStep - 1]"
        :style="{ width: '20rem' }"
        @option-click="toggleSelectOption"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import PollSteps from "@/components/PollSteps.vue";
import PollOptionList from "@/components/PollOptions/PollOptionList.vue";
import { IOption } from "@/types";
import { viewNames } from "@/router/views";

export default defineComponent({
  name: viewNames.POLL_VOTING_SELECT,
  components: {
    PollSteps,
    PollOptionList,
  },
  setup() {
    const currentStep = ref<number>(1);
    const checkedSteps = ref<number[]>([]);
    const selectedOptions = ref<string[][]>([[]]);
    const options = ref<IOption[][]>([]);

    onMounted(() => {
      const fetchedOptions = [
        [
          { name: "jeden", description: "jeden description" },
          { name: "dwa", description: "jeden description" },
          { name: "tezy", description: "jeden description" },
          { name: "cztery", description: "jeden description" },
        ],
        [
          { name: "cztery", description: "jeden description" },
          { name: "piec", description: "jeden description" },
          { name: "szesc", description: "jeden description" },
          { name: "siedem", description: "jeden description" },
        ],
        [
          { name: "osiem", description: "jeden description" },
          { name: "dzieiwc", description: "jeden description" },
          { name: "dzieisiec", description: "jeden description" },
          { name: "jedenyscie", description: "jeden description" },
        ],
      ];
      options.value = fetchedOptions;
      selectedOptions.value = fetchedOptions.map(() => []);
    });

    const currentOptions = computed(() => {
      return options.value[currentStep.value - 1];
    });

    const toggleSelectOption = (option: IOption) => {
      const optionIndex = selectedOptions.value[
        currentStep.value - 1
      ].findIndex((name) => name === option.name);
      if (optionIndex > -1) {
        return selectedOptions.value.splice(optionIndex, 1);
      }
      selectedOptions.value[currentStep.value - 1].push(option.name);
    };

    const nextStepHandler = () => {
      checkedSteps.value.push(currentStep.value);
      currentStep.value = currentStep.value + 1;
    };

    const submitSelectedOptions = () => {
      console.log("SUBMITED");
      console.log(selectedOptions.value);
    };

    return {
      checkedSteps,
      currentStep,
      options,
      selectedOptions,
      currentOptions,
      nextStepHandler,
      toggleSelectOption,
      submitSelectedOptions,
    };
  },
});
</script>

<style scoped></style>
