<template>
  <PollConfiguration>
    <div class="flex gap-2">

      <Input label="Poll title" v-model="title" />
      <Input label="Poll description" v-model="description" class="flex-1" />
    </div>
  </PollConfiguration>
  <div class="flex gap-2">
    <Switch v-model="isTimeLimited" />
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
    const { title, description, isLimitedByTime, pollOptions } = useCreatePoll();
    const isTimeLimited = ref<boolean>(false);

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
      createPollHandler,
    };
  },
});
</script>
