<template>
  <div class="flex flex-col">
    <PollSteps
      class="my-4 self-center"
      :numberOfSteps="3"
      v-model:currentStep="currentStep"
      :checkedSteps="checkedSteps"
      stepNavType="BACK"
    />
    <template v-if="options.length > 0">
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
        v-if="currentStep === options.length"
        @click="submitHandler"
        class="btn-primary p-2 rounded-full px-6 my-4 self-end"
      >
        Submit
      </button>
      <button
        v-else
        @click="nextOptionHandler"
        class="btn-primary p-2 rounded-full px-6 my-4 self-end"
      >
        Next
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import PollSteps from "@/components/PollSteps.vue";
import { IOption } from "@/types";
import { viewNames } from "@/router/views";

export default defineComponent({
  name: viewNames.POLL_VOTING_METER,
  components: {
    PollSteps,
  },
  setup() {
    const currentStep = ref<number>(1);
    const checkedSteps = ref<number[]>([]);
    const options = ref<IOption[]>([]);
    const meterValue = ref<number[]>([]);

    onMounted(() => {
      const data: IOption[] = [
        {
          name: "one some title",
          description: "description for this thing",
          imageSrc: "dwdwd",
        },
        {
          name: "two pther title",
          description: "description for dwdwd lorem4g",
          imageSrc: "dwdwd",
        },
        {
          name: "three my ttilte jes",
          description: "descrlorem efe fef ",
          imageSrc: "dwdwd",
        },
      ];

      options.value = data;
      meterValue.value = data.map(() => 0);
    });

    const nextOptionHandler = () => {
      checkedSteps.value.push(currentStep.value);
      currentStep.value += 1;
    };

    const submitHandler = () => {
      console.log("Submitting");
      console.log(meterValue.value);
    };

    return {
      currentStep,
      checkedSteps,
      options,
      meterValue,
      nextOptionHandler,
      submitHandler,
    };
  },
});
</script>

<style scoped></style>
