<template>
  <GridSpinner v-if="isLoading" class="self-center" />
  <section v-else class="flex flex-col">
    <header class="flex justify-between">
      <h1 class="text-primary font-bold text-xl">{{ title }}</h1>
      <Timer v-if="endDate" :endDate="endDate" />
      <hr class="my-2" />
    </header>
    <template>
      <PollStart
        v-if="participationStatus === 'INACTIVE'"
        @activate-poll="activatePollHandler"
      />
      <component
        v-else-if="participationStatus === 'ACTIVE'"
        :is="PollVotingComponent"
      />
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { viewNames } from "@/router/views";
import { PollType } from "@/types";
import Timer from "@/components/Timer.vue";
import PollVotingSelect from "./PollVotingSelect.vue";
import PollVotingMeter from "./PollVotingMeter.vue";
import PollVotingBinary from "./PollVotingBinary.vue";
import PollStart from "./PollStart.vue";
import GridSpinner from "@/components/Spinners/GridSpinner.vue";
import { getPolls } from "@/service/poll";

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
    const data = {
      title: "Some poll that I don't care about",
      descirpion:
        "this is some randome lorem ipsum that I also don't really care about ok thats it about this description or about this poll",
      endDate: "2021-10-29T20:18",
      resultPreview: true,
      userVoted: false,
      type: PollType.BINARY,
    };

    const optionData = [];

    const title = ref<string>("");
    const type = ref<PollType>();
    const endDate = ref<Date>();

    const participationStatus = ref<PollParticipationType>("INACTIVE");

    const { isLoading, call } = getPolls();

    onMounted(async () => {
      const res = await call();
      console.log("RES ", res);
      title.value = data.title;
      type.value = data.type;
      endDate.value = new Date(data.endDate);
    });

    const PollVotingComponent = computed(() => {
      switch (type.value) {
        case PollType.SELECT:
          return viewNames.POLL_VOTING_SELECT;
        case PollType.METER:
          return viewNames.POLL_VOTING_METER;
        case PollType.BINARY:
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
