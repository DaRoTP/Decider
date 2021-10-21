<template>
  <form @sumbit.prevent="createBinaryPollHandler">
    <div class="flex gap-2">
      <Input label="Poll title" v-model="title" />
      <Input label="Poll description" v-model="description" class="flex-1" />
      <button class="btn-primary p-2 rounded-full px-6 my-4">Create</button>
    </div>
    <div class="flex flex-col items-start">
      <CheckBox
        v-model="isLimitedByTime"
        class="self-start"
        label="Limited time"
      />
      <DatePicker :disabled="!isLimitedByTime" />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <PollOptionList
        :options="pollOptions"
        :selectedOption="currentOption.name"
        @option-click="selectOption"
      />
      <div class="flex flex-col gap-2">
        <Input label="Option Title" v-model="currentOption.name" />
        <TextArea
          label="Option Description"
          v-model="currentOption.description"
        />
        <div class="grid grid-cols-3 gap-2">
          <Input
            placeholder="http://image-host.com/image..."
            label="Image link"
            class="col-start-1 col-end-3"
            v-model="currentOption.imageSrc"
          />
          <img
            class="shadow-md rounded-md object-cover w-full"
            :style="{ height: '4rem' }"
            src="../../assets/images/broken-image.svg"
          />
        </div>
        <button
          v-if="isNewOption"
          type="submit"
          class="btn-primary p-2 rounded-full self-end px-6 my-4"
          :disabled="!currentOption.name"
          @click="addOptionToList"
        >
          Add Option
        </button>
        <div v-else class="flex gap-2 justify-end">
          <button
            class="bg-gray-600 p-2 rounded-full justify-end px-6 my-4"
            type="button"
            @click="removeOptionFromList"
          >
            Remove
          </button>
          <button
            type="button"
            class="btn-primary p-2 rounded-full self-end px-6 my-4"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Input from "@/components/Inputs/Input.vue";
import TextArea from "@/components/Inputs/TextArea.vue";
import CheckBox from "@/components/Inputs/CheckBox.vue";
import DatePicker from "@/components/Inputs/DatePicker.vue";
import PollOptionList from "@/components/PollOptions/PollOptionList.vue";
import { IOption } from "@/types";

export default defineComponent({
  name: "Create Binary Poll",
  components: {
    Input,
    TextArea,
    CheckBox,
    DatePicker,
    PollOptionList,
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

    const currentOption = ref<IOption>({
      name: "",
      description: "",
      imageSrc: "",
    });

    const isNewOption = computed(() => {
      return !pollOptions.value.find(
        (option) => option.name === currentOption.value.name
      );
    });

    const createBinaryPollHandler = () => {
      const data = {
        title: title.value,
        description: description.value,
      };
      console.log("SUBMITING POLL");
      console.log(data);
    };

    const selectOption = (data: IOption) => {
      const { name, description, imageSrc } = data;

      if (name === currentOption.value.name)
        return (currentOption.value = {
          name: "",
          description: "",
          imageSrc: "",
        });
      currentOption.value = { name, description, imageSrc };
    };

    const addOptionToList = () => {
      pollOptions.value.push(currentOption.value);
      currentOption.value = { name: "", description: "", imageSrc: "" };
    };

    const removeOptionFromList = () => {
      pollOptions.value = pollOptions.value.filter(
        (option) => option.name !== currentOption.value.name
      );
      currentOption.value = { name: "", description: "", imageSrc: "" };
    };

    return {
      title,
      description,
      isLimitedByTime,
      pollOptions,
      currentOption,
      isNewOption,
      createBinaryPollHandler,
      selectOption,
      addOptionToList,
      removeOptionFromList,
    };
  },
});
</script>
