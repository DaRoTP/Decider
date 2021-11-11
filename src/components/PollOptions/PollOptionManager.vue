<template>
  <section class="rounded-sm overflow-hidden shadow-md my-5">
    <form
      @submit.prevent="submitHandler"
      class="bg-blue-200 flex gap-4 items-center p-2 pt-5"
    >
      <div class="flex items-center gap-2 flex-1">
        <fa icon="heading" class="text-xl mb-3" />
        <Input v-model="optionName" class="flex-1" />
      </div>
      <div class="flex items-center gap-2 flex-1">
        <fa icon="image" class="text-2xl mb-3" />
        <Input v-model="optionImage" class="flex-1" />
      </div>
      <div class="overflow-hidden" :style="{ maxWidth: '5rem' }">
        <button
          tyle="submit"
          :disabled="!optionName || !optionImage"
          class="btn-primary p-2 px-3 rounded-tr-sm mb-3 transition-all"
          :class="{ '-mr-10': !optionName || !optionImage }"
        >
          <fa icon="check" />
        </button>
      </div>
    </form>
    <ul>
      <span
        class="flex"
        v-for="(option, index) in options"
        :key="option.name"
        @click="selectHandler(option.name, index)"
      >
        <PollOption
          class="flex-1"
          :name="option.name"
          :imageSrc="option.imageSrc"
          :index="index + 1"
          :selected="selectedOption === option.name"
          :showContentRight="selectedOption === option.name"
        >
          <template #content-right>
            <button
              class="bg-red-400 text-white w-full h-full"
              @click="removeOptionHandler(index)"
            >
              <fa icon="trash" />
            </button>
          </template>
        </PollOption>
      </span>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { IOption } from "@/types";
import PollOption from "./PollOption.vue";

export default defineComponent({
  name: "PollOptionManager",
  components: {
    PollOption,
  },
  props: {
    options: {
      type: Array as PropType<IOption[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const optionName = ref<string>("");
    const optionImage = ref<string>("");
    const selectedOption = ref<string>("");

    const selectHandler = (name: string, index: number) => {
      if (selectedOption.value === name) {
        optionName.value = "";
        optionImage.value = "";
        selectedOption.value = "";
      } else {
        selectedOption.value = name;
        optionName.value = props.options[index].name;
        optionImage.value = props.options[index].imageSrc || "";
      }
    };

    const addOptionHandler = () => {
      const newOption = {
        name: optionName.value,
        imageSrc: optionImage.value,
      };
      emit("update:options", [...props.options, newOption]);
      optionName.value = "";
      optionImage.value = "";
    };

    const editOptionHandler = () => {
      const optionIndex = props.options.findIndex(
        (option) => option.name === selectedOption.value
      );
      if (optionIndex > -1) {
        const tempOptions = props.options;
        tempOptions[optionIndex].name = optionName.value;
        tempOptions[optionIndex].imageSrc = optionImage.value;
        emit("update:options", tempOptions);
        optionName.value = "";
        optionImage.value = "";
      }
    };

    const removeOptionHandler = (optionIdnex: number) => {
      const updatedOptions = props.options;
      updatedOptions.splice(optionIdnex, 1);
      emit("update:options", updatedOptions);
    };

    const submitHandler = () => {
      return selectedOption.value ? editOptionHandler() : addOptionHandler();
    };

    return {
      optionName,
      optionImage,
      selectedOption,
      selectHandler,
      submitHandler,
      removeOptionHandler,
    };
  },
});
</script>
