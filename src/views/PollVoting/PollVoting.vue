<template>
  <div class="flex flex-col">
    <h1 class="text-primary font-bold text-xl">{{ title }}</h1>
    <hr class="my-2" />
    <component :is="PollVotingComponent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { viewNames } from "@/router/views";
import { PollType } from "@/types";
import PollVotingSelect from "./PollVotingSelect.vue";

export default defineComponent({
  name: viewNames.POLL_VOTING,
  components: {
    PollVotingSelect,
  },
  props: {
    pollId: {
      type: String,
    },
  },
  setup() {
    const title = ref<string>("Test title");
    const type = ref<PollType>(PollType.SELECT);

    const PollVotingComponent = computed(() => {
      switch (type.value) {
        case PollType.SELECT:
          return "PollVotingSelect";
        default:
          return "PollVotingSelect";
      }
    });
    return {
      title,
      PollVotingComponent,
    };
  },
});
</script>

<style scoped></style>
