<template>
  <div class="flex gap-2 justify-center">
    <ChoiceCard
      :title="leftOption.name"
      :imageSrc="leftOption.imageSrc"
      :selected="submittingData[currentStep - 1] === leftOption.name"
      @click="clickOptionHandler(options[currentStep - 1][0]?.name)"
    />
    <ChoiceCard
      :title="rightOption.name"
      :imageSrc="rightOption.imageSrc"
      :selected="submittingData[currentStep - 1] === rightOption.name"
      @click="clickOptionHandler(rightOption.name)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef, PropType, computed } from "vue";
import { viewNames } from "@/router/views";
import ChoiceCard from "@/components/ChocieCard.vue";
import { IOption } from "@/types";

export default defineComponent({
  name: viewNames.POLL_VOTING_BINARY,
  components: {
    ChoiceCard,
  },
  props: {
    options: {
      type: Array as PropType<IOption[][]>,
      required: true,
    },
    submittingData: {
      type: Array as PropType<string[]>,
      required: true,
    },
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const checkedSteps = ref<number[]>([]);
    const selectedOptions = toRef(props, "submittingData");

    emit(
      "update:submittingData",
      props.options.map(() => "")
    );

    const leftOption = computed(() => props.options[props.currentStep - 1][0]);
    const rightOption = computed(() => props.options[props.currentStep - 1][1]);

    const clickOptionHandler = (optionName: string) => {
      if (selectedOptions.value[props.currentStep - 1] !== optionName) {
        emit("change:step", props.currentStep + 1);
      }

      selectedOptions.value[props.currentStep - 1] =
        selectedOptions.value[props.currentStep - 1] === optionName
          ? ""
          : optionName;

      emit("update:submittingData", selectedOptions.value);
    };

    return {
      checkedSteps,
      leftOption,
      rightOption,
      clickOptionHandler,
    };
  },
});
</script>

<style scoped></style>
