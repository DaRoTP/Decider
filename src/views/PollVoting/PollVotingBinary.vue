<template>
  <div class="flex flex-col">
    <PollSteps
      class="my-4 self-center"
      :numberOfSteps="options.length"
      v-model:currentStep="currentStep"
      :checkedSteps="checkedSteps"
      stepNavType="BACK"
    />
    <div class="flex gap-2 justify-center">
      <ChoiceCard
        :title="options[currentStep - 1][0]?.name"
        :imageSrc="options[currentStep - 1][0]?.imageSrc"
        @click="clickOptionHandler(options[currentStep - 1][1]?.name)"
      />
      <ChoiceCard
        :title="options[currentStep - 1][1]?.name"
        :imageSrc="options[currentStep - 1][1]?.imageSrc"
        @click="clickOptionHandler(options[currentStep - 1][1]?.name)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { viewNames } from "@/router/views";
import ChoiceCard from "@/components/ChocieCard.vue";
import PollSteps from "@/components/PollSteps.vue";
import { IOption } from "@/types";

export default defineComponent({
  name: viewNames.POLL_VOTING_BINARY,
  components: {
    ChoiceCard,
    PollSteps,
  },
  setup() {
    const currentStep = ref<number>(1);
    const checkedSteps = ref<number[]>([]);
    const options = ref<IOption[][]>([[]]);
    const selecteOptions = ref<string[]>([]);

    onMounted(() => {
      const data: IOption[][] = [
        [
          {
            name: "jeden",
            description: "dwa description",
            imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
          },
          {
            name: "dwa",
            description: "dwa description",
            imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
          },
        ],
        [
          {
            name: "trzy",
            description: "dwa description",
            imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
          },
          {
            name: "cztery",
            description: "dwa description",
            imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
          },
        ],
        [
          {
            name: "piec",
            description: "dwa description",
            imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
          },
          {
            name: "szesc",
            description: "dwa description",
            imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
          },
        ],
      ];

      options.value = data;
    });

    const submitHandler = () => {
      console.log("SUBMITTING");
      console.log(selecteOptions.value);
    };

    const clickOptionHandler = (optionName: string) => {
      console.log("click");
      selecteOptions.value.push(optionName);
      if (currentStep.value === options.value.length) {
        return submitHandler();
      }
      checkedSteps.value.push(currentStep.value);
      currentStep.value += 1;
    };

    return {
      currentStep,
      options,
      checkedSteps,
      clickOptionHandler,
    };
  },
});
</script>

<style scoped></style>
