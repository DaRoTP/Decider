<template>
  <GridSpinner v-if="isLoading" class="self-center top-1/3" />
  <section v-else class="flex flex-col">
    <header
      class="flex justify-between bg-white -mx-3 -mt-3 mb-4 p-3 shadow-sm"
    >
      <h1 class="text-primary font-bold text-xl">{{ title }}</h1>
      <div class="flex items-center gap-2">
        <p class="text-gray-600 text-xs" :style="{ maxWidth: '12rem' }">
          Please submit this poll before the time runs out
        </p>
        <Timer v-if="endDate" :endDate="endDate" />
      </div>
    </header>
    <PollIntroduction
      v-if="participationStatus === 'INACTIVE'"
      @activate-poll="activatePollHandler"
    />
    <PollConclusion v-else-if="participationStatus === 'ENDED'" />
    <template v-else-if="participationStatus === 'ACTIVE'">
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
          class="btn-primary p-2 rounded-full px-6 my-4 self-center"
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
import {
  defineComponent,
  defineAsyncComponent,
  ref,
  computed,
  onMounted,
} from "vue";
import { PollTypes, IOption } from "@/types";
import { Views } from "@/router/viewNames";
import { getPollByIdService, getPollOptionsByIdService } from "@/service/poll";

import Timer from "@/components/Timer.vue";
import GridSpinner from "@/components/Spinners/GridSpinner.vue";

const SelectPollVotingPanel = defineAsyncComponent(
  () => import("@/views/SelectPoll/SelectPollVotingPanel.vue")
);
const MeterPollVotingPanel = defineAsyncComponent(
  () => import("@/views/MeterPoll/MeterPollVotingPanel.vue")
);
const BinaryPollVotingPanel = defineAsyncComponent(
  () => import("@/views/BinaryPoll/BinaryPollVotingPanel.vue")
);

const PollConclusion = defineAsyncComponent(
  () => import("@/views/PollVoting/PollConclusion.vue")
);
const PollIntroduction = defineAsyncComponent(
  () => import("@/views/PollVoting/PollIntroduction.vue")
);

const BinaryPollSummary = defineAsyncComponent(
  () => import("@/views/BinaryPoll/BinaryPollSummary.vue")
);
const MeterPollSummary = defineAsyncComponent(
  () => import("@/views/MeterPoll/MeterPollSummary.vue")
);
const SelectPollSummary = defineAsyncComponent(
  () => import("@/views/SelectPoll/SelectPollSummary.vue")
);

type PollParticipationType = "ACTIVE" | "INACTIVE" | "ENDED";

export default defineComponent({
  name: Views.VOTING_PANNEL.CONTAINER,
  components: {
    SelectPollVotingPanel,
    MeterPollVotingPanel,
    BinaryPollVotingPanel,
    BinaryPollSummary,
    MeterPollSummary,
    SelectPollSummary,
    PollIntroduction,
    PollConclusion,
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

    const submittingData = ref<string[] | number[]>([]);

    const { isLoading, call: getPollByIdCall } = getPollByIdService(
      props.pollId
    );
    const { call: getOPtionsCall } = getPollOptionsByIdService(props.pollId);

    onMounted(async () => {
      const res = await getPollByIdCall();
      title.value = res.title;
      type.value = res.type;
      if (res.endDate) endDate.value = new Date(res.endDate);
    });

    const PollVotingComponent = computed(() => {
      if (type.value === "SELECT") return Views.VOTING_PANNEL.SELECT;
      if (type.value === "METER") return Views.VOTING_PANNEL.METER;
      if (type.value === "BINARY") return Views.VOTING_PANNEL.BINARY;
      return null;
    });

    const PollSummaryComponent = computed(() => {
      if (type.value === "SELECT") return Views.POLL_SUMMARY.SELECT;
      if (type.value === "METER") return Views.POLL_SUMMARY.METER;
      if (type.value === "BINARY") return Views.POLL_SUMMARY.BINARY;
      return null;
    });

    const checkedStepsHandler = () => {
      console.log(submittingData.value);
      if (type.value === "BINARY") {
        return (submittingData.value as string[])
          .filter((option) => option !== "")
          .map((_, indx) => indx + 1);
      }
      if (type.value === "METER") {
        const checkStepList: number[] = new Array(currentStep.value - 1);
        for (let i = 0; i < currentStep.value - 1; ++i)
          checkStepList[i] = i + 1;
        return checkStepList;
      }
      return [];
    };

    const stepChangeHandler = (step: number) => {
      currentStep.value = step;
      checkedSteps.value = checkedStepsHandler();
    };

    const activatePollHandler = async () => {
      const resOptions = await getOPtionsCall();
      options.value = resOptions;
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
