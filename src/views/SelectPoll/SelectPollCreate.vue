<template>
  <PollConfiguration>
    <div class="flex p-4 gap-4">
      <div class="flex gap-2">
        <Switch v-model="isLiveResult" label="Live Results" />
        <span class="text-gray-600 text-xs" :style="{ maxWidth: '8rem' }">
          Show users live results when they finished the poll
        </span>
      </div>
      <div class="flex gap-2">
        <Switch v-model="isLimitedByTime" label="Time Limited" />
        <span class="text-gray-600 text-xs" :style="{ maxWidth: '8rem' }">
          A limited time poll is available only until specified time
        </span>
      </div>
      <div class="flex gap-2">
        <Switch v-model="isMultiChoice" label="Multi choice" />
        <span class="text-gray-600 text-xs" :style="{ maxWidth: '8rem' }">
          A limited time poll is available only until specified time
        </span>
      </div>
    </div>
  </PollConfiguration>
  <div class="flex gap-2">
    <Input label="Poll title" v-model="title" />
    <Input label="Poll description" v-model="description" class="flex-1" />
  </div>
  <div class="flex gap-4">
    <div
      class="overflow-hidden transition-all h-0"
      :class="{ 'h-16': isLimitedByTime }"
    >
      <DatePicker
        label="Poll end date"
        v-model="endDate"
        :disabled="!isLimitedByTime"
      />
    </div>
    <div
      class="overflow-hidden transition-all flex gap-2 h-0"
      :class="{ 'h-16': isMultiChoice }"
    >
      <Slider
        label="Max Choice"
        v-model="maxChoice"
        :min="1"
        :max="pollOptions.length"
      />
      <Input class="mt-5" v-model="maxChoice" :style="{ maxWidth: '2rem' }" />
    </div>
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
  name: Views.CREATE_POLL.SELECT,
  components: {
    PollConfiguration,
    PollOptionManager,
  },
  setup() {
    const { createPollHandler: createPoll, ...params } = useCreatePoll({
      type: "SELECT",
    });
    const isMultiChoice = ref<boolean>(false);
    const maxChoice = ref<number>(1);

    const createPollHandler = () => createPoll({ maxChoice: maxChoice.value });

    return {
      ...params,
      maxChoice,
      isMultiChoice,
      createPollHandler,
    };
  },
});
</script>
