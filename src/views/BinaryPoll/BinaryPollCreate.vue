<template>
  <PollConfiguration>
    <div class="flex gap-6 my-4 mx-3">
      <div class="flex gap-2 items-center">
        <Switch v-model="isTimeLimited" label="Time Limited" />
        <span
          class="text-gray-600 text-xs self-end mb-3"
          :style="{ maxWidth: '10rem' }"
        >
          A limited time poll is available only until specified time
        </span>
        <DatePicker :disabled="!isTimeLimited" class="mt-4" />
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
  name: Views.CREATE_POLL.BINARY,
  components: {
    PollConfiguration,
    PollOptionManager,
  },
  setup() {
    const { title, description, isLimitedByTime, pollOptions } =
      useCreatePoll();
    const isTimeLimited = ref<boolean>(false);
    const isLiveResult = ref<boolean>(false);

    const createPollHandler = async () => {
      const data = {
        title: title.value,
        description: description.value,
        isLimitedByTime: isLimitedByTime.value,
        options: pollOptions.value,
      };
      console.log("SUBMITING POLL");
      console.log(data);
    };

    return {
      title,
      description,
      isLimitedByTime,
      pollOptions,
      isTimeLimited,
      isLiveResult,
      createPollHandler,
    };
  },
});
</script>
