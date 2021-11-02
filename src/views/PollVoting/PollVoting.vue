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
    <template v-else-if="participationStatus === 'ACTIVE'">
      <PollSteps
        class="my-4 self-center"
        :numberOfSteps="options.length"
        v-model:currentStep="currentStep"
        :checkedSteps="checkedSteps"
        stepNavType="BACK"
      />
      <component
        :is="PollVotingComponent"
        :currentStep="currentStep"
        :options="options"
        @change:step="(step) => (currentStep = step)"
        @change:checkedStepList="(list) => (checkedSteps = list)"
      />
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

type PollParticipationType = "ACTIVE" | "INACTIVE" | "ENDED";

export default defineComponent({
  name: viewNames.POLL_VOTING,
  components: {
    PollVotingSelect,
    PollVotingMeter,
    PollVotingBinary,
    PollStart,
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

    const options = ref<IOption[][]>([[]]);

    const participationStatus = ref<PollParticipationType>("INACTIVE");

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

    const activatePollHandler = () => {
      participationStatus.value = "ACTIVE";
    };

    return {
      title,
      PollVotingComponent,
      endDate,
      isLoading,
      options,
      currentStep,
      checkedSteps,
      participationStatus,
      activatePollHandler,
    };
  },
});
</script>

<style scoped></style>
