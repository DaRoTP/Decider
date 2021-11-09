<template>
  <PollConfiguration>
    <div class="flex gap-6 my-4 mx-3">
      <div class="flex gap-2 items-center">
        <Switch v-model="isLimitedByTime" label="Time Limited" />
        <span
          class="text-gray-600 text-xs self-end mb-3"
          :style="{ maxWidth: '10rem' }"
        >
          A limited time poll is available only until specified time
        </span>
        <DatePicker :disabled="!isLimitedByTime" class="mt-4" />
      </div>
      <div class="flex gap-2">
        <Switch v-model="isLiveResult" label="Live Results" />
        <span
          class="text-gray-600 text-xs self-end mb-3"
          :style="{ maxWidth: '10rem' }"
        >
          Show users live results when they finished the poll
        </span>
      </div>
    </div>
  </PollConfiguration>
  <div class="flex gap-2">
    <Input label="Poll title" v-model="title" />
    <Input label="Poll description" v-model="description" class="flex-1" />
  </div>
  <PollOptionManager v-model:options="pollOptions" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Views } from "@/router/viewNames";
import PollOptionManager from "@/components/PollOptions/PollOptionManager.vue";
import { useCreatePoll } from "@/composables";
import PollConfiguration from "@/components/PollConfiguration.vue";

export default defineComponent({
  name: Views.CREATE_POLL.METER,
  components: {
    PollConfiguration,
    PollOptionManager,
  },
  setup() {
    const {
      title,
      description,
      isLimitedByTime,
      isLiveResult,
      pollOptions,
      createPollHandler,
    } = useCreatePoll({ type: "METER" });

    return {
      title,
      description,
      isLimitedByTime,
      pollOptions,
      isLiveResult,
      createPollHandler,
    };
  },
});
</script>
