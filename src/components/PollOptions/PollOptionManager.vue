<template>
  <div class="grid grid-cols-2 gap-4">
    <PollOptionList
      :options="options"
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
</template>

<script lang="ts">
import { defineComponent, ref, toRef, PropType, computed } from "vue";
import PollOptionList from "@/components/PollOptions/PollOptionList.vue";
import { IOption } from "@/types";

export default defineComponent({
  name: "PollOptionManager",
  components: {
    PollOptionList,
  },
  props: {
    options: {
      type: Array as PropType<IOption[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const currentOption = ref<IOption>({
      name: "",
      description: "",
      imageSrc: "",
    });

    const options = toRef(props, "options");

    const isNewOption = computed(() => {
      return !options.value.find(
        (option) => option.name === currentOption.value.name
      );
    });

    const addOptionToList = () => {
      options.value.push(currentOption.value);
      emit("update:options", options.value);
      currentOption.value = { name: "", description: "", imageSrc: "" };
    };

    const removeOptionFromList = () => {
      options.value = options.value.filter(
        (option) => option.name !== currentOption.value.name
      );
      emit("update:options", options.value);
      currentOption.value = { name: "", description: "", imageSrc: "" };
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

    return {
      currentOption,
      isNewOption,
      addOptionToList,
      removeOptionFromList,
      selectOption,
    };
  },
});
</script>
