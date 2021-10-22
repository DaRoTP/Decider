<template>
  <form @submit.prevent="submitForm" class="create-meter-poll flex flex-col">
    <div class="flex gap-2">
      <Input label="Poll title" v-model="title" />
      <Input label="Poll description" v-model="description" class="flex-1" />
      <button class="btn-primary p-2 rounded-full px-6 my-4">Create</button>
    </div>
    <div class="flex gap-2">
      <Select
        v-model="meterPollType"
        label="Meter Type"
        :options="['Percentage', 'Integer', 'Decimal']"
        class="flex-grow justify-end"
      />
      <div class="flex flex-col flex-grow justify-end">
        <CheckBox
          v-model="isLimitedByTime"
          class="self-start"
          label="Limited time"
        />
        <DatePicker :disabled="!isLimitedByTime" />
      </div>
      <span :style="{ maxWidth: '15rem' }" class="self-end mb-4">
        Once you click create you will not be able to edit this poll
      </span>
    </div>
    <PollOptionManager v-model:options="pollOptions" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DatePicker from "@/components/Inputs/DatePicker.vue";
import CheckBox from "@/components/Inputs/CheckBox.vue";
import Select from "@/components/Inputs/Select.vue";
import Input from "@/components/Inputs/Input.vue";
import { IOption, MeterPollTypes } from "@/types";
import PollOptionManager from "@/components/PollOptions/PollOptionManager.vue";

export default defineComponent({
  name: "CreateMeterPoll",
  components: {
    Input,
    DatePicker,
    CheckBox,
    Select,
    PollOptionManager,
  },
  setup() {
    const title = ref<string>("");
    const description = ref<string>("");
    const isLimitedByTime = ref<boolean>(false);
    const meterPollTypeOptions = [
      { label: "Percentage", value: "PERCENTAGE" },
      { label: "Integer", value: "INTEGER" },
      { label: "Decimal", value: "DECIMAL" },
    ];
    const meterPollType = ref<MeterPollTypes>("PERCENTAGE");

    const pollOptions = ref<IOption[]>([
      { name: "option 1", description: "option one descrition", imageSrc: "" },
      { name: "option 2", description: "option two descrition", imageSrc: "" },
      { name: "option 3", description: "option thre descrition", imageSrc: "" },
      { name: "option 4", description: "option four descrition", imageSrc: "" },
    ]);

    const submitForm = () => {
      const data = {
        title: title.value,
        description: description.value,
        isLimitedByTime: isLimitedByTime.value,
        meterPollType: meterPollType.value,
        options: pollOptions.value,
      };
      console.log("SUBMITING NEW POLL");
      console.log(data);
    };

    return {
      meterPollTypeOptions,
      meterPollType,
      pollOptions,
      title,
      description,
      isLimitedByTime,
      submitForm,
    };
  },
});
</script>
