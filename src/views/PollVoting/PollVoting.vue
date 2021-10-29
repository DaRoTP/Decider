<template>
  <div class="flex flex-col">
    <div class="flex justify-between">
      <h1 class="text-primary font-bold text-xl">{{ title }}</h1>
      <Timer :endDate="endDate" />
    </div>
    <hr class="my-2" />
    <component :is="PollVotingComponent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { viewNames } from "@/router/views";
import { PollType } from "@/types";
import Timer from "@/components/Timer.vue";
import PollVotingSelect from "./PollVotingSelect.vue";
import PollVotingMeter from "./PollVotingMeter.vue";

export default defineComponent({
  name: viewNames.POLL_VOTING,
  components: {
    PollVotingSelect,
    PollVotingMeter,
    Timer,
  },
  props: {
    pollId: {
      type: String,
    },
  },
  setup() {
    const title = ref<string>("Test title");
    const type = ref<PollType>(PollType.METER);
    const endDate = ref<Date>(new Date("2021-10-29T20:18"));

    const PollVotingComponent = computed(() => {
      switch (type.value) {
        case PollType.SELECT:
          return "PollVotingSelect";
        case PollType.METER:
          return "PollVotingMeter";
        default:
          return "PollVotingSelect";
      }
    });
    return {
      title,
      PollVotingComponent,
      endDate,
    };
  },
});
</script>

<style scoped></style>
