<template>
  <div class="flex flex-col items-center">
    <button
      class="btn-primary p-2 rounded-full px-6 my-4"
      @click="nextStepHandler"
      :disabled="selectedOptions[currentStep - 1]?.length === 0"
    >
      next
    </button>
    <div class="flex flex-col items-center">
      <PollOptionList
        :options="options[currentStep - 1]"
        :selectedOptions="selectedOptions[currentStep - 1]"
        :style="{ width: '20rem' }"
        @option-click="toggleSelectOption"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, PropType } from "vue";
import PollOptionList from "@/components/PollOptions/PollOptionList.vue";
import { IOption } from "@/types";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: Views.VOTING_PANNEL.SELECT,
  components: {
    PollOptionList,
  },
  props: {
    options: {
      type: Array as PropType<IOption[]>,
      required: true,
    },
    submittingData: {
      type: Array as PropType<string[][]>,
      required: true,
    },
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const selectedOptions = toRef(props, "submittingData");
    emit(
      "update:submittingData",
      props.options.map(() => [])
    );

    const toggleSelectOption = (option: IOption) => {
      const optionIndex = selectedOptions.value[
        props.currentStep - 1
      ].findIndex((name) => name === option.name);
      if (optionIndex > -1) {
        return selectedOptions.value[props.currentStep - 1].splice(
          optionIndex,
          1
        );
      }
      selectedOptions.value[props.currentStep - 1].push(option.name);
      emit("update:submittingData", selectedOptions.value);
    };

    const nextStepHandler = () => {
      emit("change:step", props.currentStep + 1);
    };

    return {
      selectedOptions,
      nextStepHandler,
      toggleSelectOption,
    };
  },
});
</script>

<style scoped></style>
