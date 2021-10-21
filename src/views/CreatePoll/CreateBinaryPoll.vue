<template>
  <form @sumbit.prevent="createBinaryPollHandler">
    <div class="flex gap-2">
      <Input label="Poll title" v-model="title" />
      <Input label="Poll description" v-model="description" class="flex-1" />
      <button class="btn-primary p-2 rounded-full px-6 my-4">Create</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "@/components/Inputs/Input.vue";

export default defineComponent({
  name: "Create Binary Poll",
  components: {
    Input,
  },
  setup() {
    const title = ref<string>("");
    const description = ref<string>("");

    const createBinaryPollHandler = () => {
      const data = {
        title: title.value,
        description: description.value,
      };
      console.log("SUBMITING POLL");
      console.log(data);
    };
    return {
      title,
      description,
      createBinaryPollHandler,
    };
  },
});
</script>
