<template>
  <InputGroup :label="label">
    <template #input>
      <select class="shadow-md rounded-sm p-2">
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </template>
  </InputGroup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ComonInputProps } from "./props";
import InputGroup from "./InputGroup.vue";

export default defineComponent({
  name: "Select",
  components: {
    InputGroup,
  },
  props: {
    ...ComonInputProps,
    options: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
