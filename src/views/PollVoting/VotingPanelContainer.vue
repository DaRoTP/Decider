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
      @activate-poll="startPoll"
    />
    <PollConclusion v-else-if="participationStatus === 'ENDED'" />
    <template v-else-if="participationStatus === 'ACTIVE'">
      <component
        v-if="true"
        :is="PollVotingComponent"
        :options="options"
        :meta="meta"
        v-model:submittingData="submittingData"
        @confirm="() => (participationStatus = 'SUMMARY')"
      />
    </template>
    <template v-else-if="participationStatus === 'SUMMARY'">
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

type PollParticipationType = "ACTIVE" | "SUMMARY" | "INACTIVE" | "ENDED";

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
    const options = ref<IOption[][] | IOption[]>([]);
    const meta = ref({});

    const participationStatus = ref<PollParticipationType>("INACTIVE");
    const submittingData = ref<Record<string, number>>({});

    const { isLoading, call: getPollByIdCall } = getPollByIdService(
      props.pollId
    );
    const { call: getOPtionsCall } = getPollOptionsByIdService(props.pollId);

    onMounted(async () => {
      const res = await getPollByIdCall();
      title.value = res.title;
      type.value = res.type;
      if (res.meta) meta.value = res.meta;
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

    const startPoll = async () => {
      const resOptions = await getOPtionsCall();
      options.value = resOptions;
      submittingData.value = resOptions.reduce(
        (acc, option) => ({ ...acc, [`${option.name}`]: 0 }),
        {}
      );
      participationStatus.value = "ACTIVE";
    };

    const onSubmitHandler = () => {
      console.log("SUBMITTING DATA => ", submittingData.value);
      participationStatus.value = "ENDED";
    };

    return {
      title,
      meta,
      PollVotingComponent,
      PollSummaryComponent,
      endDate,
      isLoading,
      options,
      participationStatus,
      submittingData,
      onSubmitHandler,
      startPoll,
    };
  },
});
</script>
