<template>
  <div>
    <h1 class="text-primary font-bold text-xl">Create Poll</h1>
    <hr class="my-2" />
    <component :is="createPollComponent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import CreateMeterPoll from "./CreateMeterPoll.vue";
import CreateBinaryPoll from "./CreateBinaryPoll.vue";
import CreateSelectPoll from "./CreateSelectPoll.vue";
import { PollType } from "@/types";

export default defineComponent({
  name: "Create Poll",
  components: {
    CreateMeterPoll,
    CreateBinaryPoll,
    CreateSelectPoll,
  },
  props: {
    type: {
      type: String,
    },
  },
  setup(props) {
    const createPollComponent = computed(() => {
      switch (props.type) {
        case PollType.BINARY:
          return "CreateBinaryPoll";
        case PollType.METER:
          return "CreateMeterPoll";
        case PollType.SELECT:
          return "CreateSelectPoll";
        default:
          return "CreateSelectPoll";
      }
    });
    return {
      createPollComponent,
    };
  },
});
</script>

<style scoped></style>
