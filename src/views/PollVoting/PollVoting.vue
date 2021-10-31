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
    <component
      v-else-if="participationStatus === 'ACTIVE'"
      :is="PollVotingComponent"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { viewNames } from "@/router/views";
import { PollTypes } from "@/types";
import Timer from "@/components/Timer.vue";
import PollVotingSelect from "./PollVotingSelect.vue";
import PollVotingMeter from "./PollVotingMeter.vue";
import PollVotingBinary from "./PollVotingBinary.vue";
import PollStart from "./PollStart.vue";
import GridSpinner from "@/components/Spinners/GridSpinner.vue";
import { getPollService } from "@/service/poll";

type PollParticipationType = "ACTIVE" | "INACTIVE" | "ENDED";

export default defineComponent({
  name: viewNames.POLL_VOTING,
  components: {
    PollVotingSelect,
    PollVotingMeter,
    PollVotingBinary,
    PollStart,
    Timer,
    GridSpinner,
  },
  props: {
    pollId: {
      type: String,
    },
  },
  setup() {
    const optionData = [];

    const title = ref<string>("");
    const type = ref<PollTypes>();
    const endDate = ref<Date>();

    const participationStatus = ref<PollParticipationType>("INACTIVE");

    const { isLoading, call } = getPollService();

    onMounted(async () => {
      const res = await call();
      console.log("RES ", res);
      title.value = res.title;
      type.value = res.type;
      if (res.endDate) endDate.value = new Date(res.endDate);
    });

    const PollVotingComponent = computed(() => {
      switch (type.value) {
        case "SELECT":
          return viewNames.POLL_VOTING_SELECT;
        case "METER":
          return viewNames.POLL_VOTING_METER;
        case "BINARY":
          return viewNames.POLL_VOTING_BINARY;
        default:
          return viewNames.POLL_VOTING_SELECT;
      }
    });

    const activatePollHandler = () => {
      participationStatus.value = "ACTIVE";
    };

    return {
      title,
      PollVotingComponent,
      endDate,
      isLoading,
      participationStatus,
      activatePollHandler,
    };
  },
});
</script>

<style scoped></style>
