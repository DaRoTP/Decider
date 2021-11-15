<template>
  <div class="flex flex-col items-center">
    <PollSteps
      :numberOfSteps="options.length"
      :currentStep="currentStep"
      :checkedSteps="checkedSteps"
      stepNavType="BACK"
    />
    <div class="flex flex-col mt-4">
      <MeterOptionCard v-if="show" :imageSrc="currentOption.imageSrc" />
      <div class="my-3">
        <h1 class="text-primary font-bold text-xl text-center">
          {{ currentOption.name }}
        </h1>
        <p class="text-primary text-center">{{ currentOption.description }}</p>
      </div>
      <div class="flex gap-2">
        <div class="flex gap-1 items-center">
          <Input type="number" v-model="meterValue" />
          <span>%</span>
        </div>
        <Slider class="flex-grow" v-model="meterValue" :min="1" :max="100" />
      </div>
      <button
        v-if="meterValue !== 0"
        @click="nextStepHandler"
        class="btn-primary p-2 rounded-md px-6 my-4 self-end"
      >
        {{ currentStep >= options.length ? "Confirm" : "Next" }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, PropType } from "vue";
import { IOption } from "@/types";
import { Views } from "@/router/viewNames";
import PollSteps from "@/components/PollSteps.vue";
import MeterOptionCard from "@/components/MeterOptionCard.vue";

export default defineComponent({
  name: Views.VOTING_PANNEL.METER,
  components: {
    PollSteps,
    MeterOptionCard,
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
    const currentStep = ref<number>(1);
    const currentOption = computed(() => props.options[currentStep.value - 1]);
    const meterValue = ref<number>(
      props.submittingData[currentOption.value.name]
    );
    const show = ref<boolean>(true);

    const checkedSteps = computed(() =>
      Object.values(props.submittingData)
        .map((val, index) => (val <= 0 ? -1 : index + 1))
        .filter((item) => item > -1)
    );

    const nextStepHandler = () => {
      emit("update:submittingData", {
        ...props.submittingData,
        [currentOption.value.name]: meterValue.value,
      });
      show.value = false;
      setTimeout(() => {
        show.value = true;
      }, 500);
      if (currentStep.value >= props.options.length) {
        return emit("confirm");
      }

      currentStep.value += 1;
      meterValue.value = props.submittingData[currentOption.value.name];
    };

    return {
      meterValue,
      currentStep,
      checkedSteps,
      currentOption,
      show,
      nextStepHandler,
    };
  },
});
</script>
