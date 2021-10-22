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
import { defineComponent, ref } from "vue";
import Input from "@/components/Inputs/Input.vue";
import CheckBox from "@/components/Inputs/CheckBox.vue";
import DatePicker from "@/components/Inputs/DatePicker.vue";
import { IOption } from "@/types";
import PollOptionManager from "@/components/PollOptions/PollOptionManager.vue";

export default defineComponent({
  name: "CreateBinaryPoll",
  components: {
    Input,
    CheckBox,
    DatePicker,
    PollOptionManager,
  },
  setup() {
    const title = ref<string>("");
    const description = ref<string>("");
    const isLimitedByTime = ref<boolean>(false);
    const pollOptions = ref<IOption[]>([
      { name: "option 1", description: "option one descrition", imageSrc: "" },
      { name: "option 2", description: "option two descrition", imageSrc: "" },
      { name: "option 3", description: "option thre descrition", imageSrc: "" },
      { name: "option 4", description: "option four descrition", imageSrc: "" },
    ]);

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
