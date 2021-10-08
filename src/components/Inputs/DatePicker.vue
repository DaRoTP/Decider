<template>
  <InputGroup
    :label="label"
    :subText="error"
    class="date-picker"
    :class="{ 'in-valid': !error }"
  >
    <template #input>
      <input
        type="date"
        :value="modelValue"
        class="bg-white shadow-md rounded-sm p-2"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>
  </InputGroup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputGroup from "./InputGroup.vue";

export default defineComponent({
  name: "DatePicker",
  components: {
    InputGroup,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
