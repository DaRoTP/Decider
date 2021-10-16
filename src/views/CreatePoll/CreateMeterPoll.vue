<template>
  <div class="create-meter-poll flex flex-col">
    <div class="flex gap-2">
      <Select
        v-model="meterPollType"
        label="Meter Type"
        :options="['Percentage', 'Integer', 'Decimal']"
        class="flex-grow justify-end"
      />
      <div class="flex flex-col flex-grow justify-end">
        <CheckBox class="self-start" label="Limited time" />
        <DatePicker />
      </div>
      <div class="flex flex-col mb-3">
        <button class="btn-primary p-2 rounded-full self-center px-6 my-4">
          Create
        </button>
        <span :style="{ maxWidth: '15rem' }">
          Once you click create you will not be able to edit this poll
        </span>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">
        <button
          @click="isOptionsListMinimized = !isOptionsListMinimized"
          type="button"
          class="flex items-center gap-1 self-end"
        >
          <template v-if="isOptionsListMinimized">
            Compress <fa icon="compress" />
          </template>
          <template v-else>Expand <fa icon="expand" /></template>
        </button>
        <ul class="flex flex-col gap-2">
          <POllOption
            v-for="(option, index) in pollOptions"
            :key="option.name"
            :index="index + 1"
            :name="option.name"
            :description="option.description"
            :expand="!isOptionsListMinimized"
            @click="selectOption(option)"
          />
        </ul>
      </div>
      <form class="flex flex-col gap-2">
        <Input label="Poll title" v-model="currentOption.name" />
        <TextArea
          label="Poll description"
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
          type="submit"
          class="btn-primary p-2 rounded-full self-end px-6 my-4"
        >
          Add Option
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DatePicker from "@/components/Inputs/DatePicker.vue";
import CheckBox from "@/components/Inputs/CheckBox.vue";
import Select from "@/components/Inputs/Select.vue";
import Input from "@/components/Inputs/Input.vue";
import TextArea from "@/components/Inputs/TextArea.vue";
import POllOption from "@/components/PollOption.vue";

type MeterPollType = "PERCENTAGE" | "INTEGER" | "DECIMAL";

export default defineComponent({
  name: "Create Meter Poll",
  components: {
    Input,
    TextArea,
    DatePicker,
    CheckBox,
    Select,
    POllOption,
  },
  setup() {
    const meterPollTypeOptions = [
      { label: "Percentage", value: "PERCENTAGE" },
      { label: "Integer", value: "INTEGER" },
      { label: "Decimal", value: "DECIMAL" },
    ];
    const meterPollType = ref<MeterPollType | null>(null);

    const pollOptions = ref([
      { name: "option 1", description: "option one descrition", imageSrc: "" },
      { name: "option 2", description: "option two descrition", imageSrc: "" },
      { name: "option 3", description: "option thre descrition", imageSrc: "" },
      { name: "option 4", description: "option four descrition", imageSrc: "" },
    ]);

    const isOptionsListMinimized = ref<boolean>(true);

    const currentOption = ref({ name: "", description: "", imageSrc: "" });

    const selectOption = (data: any) => {
      const { name, description, imageSrc } = data;
      currentOption.value = { name, description, imageSrc };
    };

    return {
      meterPollTypeOptions,
      meterPollType,
      pollOptions,
      isOptionsListMinimized,
      selectOption,
      currentOption,
    };
  },
});
</script>
