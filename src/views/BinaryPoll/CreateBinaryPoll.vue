<template>
  <form @submit.prevent="createBinaryPollHandler" class="flex flex-col">
    <div class="flex gap-2">
      <Input label="Poll title" v-model="title" />
      <Input label="Poll description" v-model="description" class="flex-1" />
      <button class="btn-primary p-2 rounded-full px-6 my-4">Create</button>
    </div>
    <DatePicker :disabled="!isLimitedByTime" class="self-start">
      <template #label>
        <CheckBox
          v-model="isLimitedByTime"
          class="self-start"
          label="Limited time"
        />
      </template>
    </DatePicker>
    <PollOptionManager v-model:options="pollOptions" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PollOptionManager from "@/components/PollOptions/PollOptionManager.vue";
import { useCreatePoll } from "@/composables";

export default defineComponent({
  name: "CreateBinaryPoll",
  components: {
    PollOptionManager,
  },
  setup() {
    const { title, description, isLimitedByTime, pollOptions } =
      useCreatePoll();

    const createBinaryPollHandler = async () => {
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
      createBinaryPollHandler,
    };
  },
});
</script>
