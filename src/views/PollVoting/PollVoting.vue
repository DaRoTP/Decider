<template>
  <GridSpinner v-if="isLoading" class="self-center" />
  <section v-else class="flex flex-col">
    <header class="flex justify-between">
      <h1 class="text-primary font-bold text-xl">{{ title }}</h1>
      <Timer v-if="endDate" :endDate="endDate" />
    </header>
    <hr class="my-2" />
    <PollStart
      v-if="participationStatus === 'INACTIVE'"
      @activate-poll="activatePollHandler"
    />
    <PollEnd v-else-if="participationStatus === 'ENDED'" />
    <template v-else-if="participationStatus === 'ACTIVE'">
      <div class="flex flex-col my-4">
        <PollSteps
          class="self-center"
          :numberOfSteps="options.length"
          v-model:currentStep="currentStep"
          :checkedSteps="checkedSteps"
          stepNavType="BACK"
        />
        <button
          v-if="
            checkedSteps.length === options.length &&
            currentStep <= options.length
          "
          class="btn-primary p-2 rounded-full px-6 my-4 self-end"
          @click="currentStep = options.length + 1"
        >
          back to summary
        </button>
      </div>
      <component
        v-if="currentStep <= options.length"
        :is="PollVotingComponent"
        :currentStep="currentStep"
        :options="options"
        v-model:submittingData="submittingData"
        @change:step="stepChangeHandler"
      />
      <template v-else>
        <button
          @click="onSubmitHandler"
          class="btn-primary p-2 rounded-full px-6 my-4"
        >
          submit
        </button>
        <component
          :is="PollSummaryComponent"
          :options="options"
          :selectedOptions="submittingData"
        />
      </template>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { PollTypes, IOption } from "@/types";
import { viewNames } from "@/router/views";
import { getPollByIdService, getPollOptionsByIdService } from "@/service/poll";

import Timer from "@/components/Timer.vue";
import GridSpinner from "@/components/Spinners/GridSpinner.vue";
import PollSteps from "@/components/PollSteps.vue";

import PollVotingSelect from "./PollVotingSelect.vue";
import PollVotingMeter from "./PollVotingMeter.vue";
import PollVotingBinary from "./PollVotingBinary.vue";

import PollStart from "./PollStart.vue";
import PollEnd from "./PollEnd.vue";

import BinarySummary from "./BinarySummary.vue";
import MeterSummary from "./MeterSummary.vue";
import SelectSummary from "./SelectSummary.vue";

type PollParticipationType = "ACTIVE" | "INACTIVE" | "ENDED";

export default defineComponent({
  name: viewNames.POLL_VOTING,
  components: {
    PollVotingSelect,
    PollVotingMeter,
    PollVotingBinary,
    BinarySummary,
    MeterSummary,
    SelectSummary,
    PollStart,
    PollEnd,
    PollSteps,
    Timer,
    GridSpinner,
  },
  props: {
    pollId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const title = ref<string>("");
    const type = ref<PollTypes>();
    const endDate = ref<Date>();

    const currentStep = ref<number>(1);
    const checkedSteps = ref<number[]>([]);

    const options = ref<IOption[][] | IOption[]>([]);

    const participationStatus = ref<PollParticipationType>("INACTIVE");

    const submittingData = ref<string[] | number[] | string[][]>([]);

    const { call } = getPollByIdService(props.pollId);
    const { isLoading, call: callGetOptions } = getPollOptionsByIdService(
      props.pollId
    );

    onMounted(async () => {
      const res = await call();
      title.value = res.title;
      type.value = res.type;
      if (res.endDate) endDate.value = new Date(res.endDate);

      const resOptions = await callGetOptions();
      options.value = resOptions;
    });

    const PollVotingComponent = computed(() => {
      if (type.value === "SELECT") return viewNames.POLL_VOTING_SELECT;
      if (type.value === "METER") return viewNames.POLL_VOTING_METER;
      if (type.value === "BINARY") return viewNames.POLL_VOTING_BINARY;
      return null;
    });

    const PollSummaryComponent = computed(() => {
      if (type.value === "SELECT") return "SelectSummary";
      if (type.value === "METER") return "MeterSummary";
      if (type.value === "BINARY") return "BinarySummary";
      return null;
    });

    const checkedStepsHandler = () => {
      if (type.value === "BINARY") {
        return (submittingData.value as string[])
          .filter((option) => option !== "")
          .map((_, indx) => indx + 1);
      }
      if (type.value === "METER") {
        const checkStepList: number[] = new Array(currentStep.value);
        for (let i = 0; i < currentStep.value; ++i) checkStepList[i] = i + 1;
        return checkStepList;
      }
      if (type.value === "SELECT") {
        return (submittingData.value as string[][])
          .map((selected, index) => (selected.length !== 0 ? index + 1 : -1))
          .filter((item) => item > -1);
      }
      return [];
    };

    const stepChangeHandler = (step: number) => {
      currentStep.value = step;
      checkedSteps.value = checkedStepsHandler();
    };

    const activatePollHandler = () => {
      participationStatus.value = "ACTIVE";
    };

    const onSubmitHandler = () => {
      console.log("SUBMITTING DATA => ", submittingData.value);
      participationStatus.value = "ENDED";
    };

    return {
      title,
      PollVotingComponent,
      PollSummaryComponent,
      endDate,
      isLoading,
      options,
      currentStep,
      checkedSteps,
      participationStatus,
      submittingData,
      onSubmitHandler,
      activatePollHandler,
      stepChangeHandler,
    };
  },
});
</script>
