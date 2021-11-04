<template>
  <div class="flex flex-col">
    <h1 class="text-primary font-bold text-xl">
      {{ options[currentStep - 1].name }}
    </h1>
    <p class="text-primary">{{ options[currentStep - 1].description }}</p>
    <div class="flex gap-2">
      <div class="flex gap-1 items-center">
        <Input type="number" v-model="meterValue[currentStep - 1]" />
        <span>%</span>
      </div>
      <Slider
        class="flex-grow"
        v-model="meterValue[currentStep - 1]"
        :min="0"
        :max="100"
      />
    </div>
    <button
      @click="nextStepHandler"
      class="btn-primary p-2 rounded-full px-6 my-4 self-end"
    >
      Next
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, PropType } from "vue";
import { IOption } from "@/types";
import { viewNames } from "@/router/views";

export default defineComponent({
  name: viewNames.POLL_VOTING_METER,
  props: {
    options: {
      type: Array as PropType<IOption[]>,
      required: true,
    },
    submittingData: {
      type: Array as PropType<number[]>,
      required: true,
    },
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const meterValue = toRef(props, "submittingData");
    emit(
      "update:submittingData",
      props.options.map(() => 0)
    );

    const nextStepHandler = () => {
      emit("change:step", props.currentStep + 1);
      emit("update:submittingData", meterValue.value);
    };

    return {
      meterValue,
      nextStepHandler,
    };
  },
});
</script>

<style scoped></style>
