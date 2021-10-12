<template>
  <InputGroup
    :label="label"
    :subText="error"
    class="input"
    :class="{ 'in-valid': !error }"
  >
    <template #input>
      <textarea
        v-model="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="bg-white shadow-md rounded-sm p-2 resize-none"
      />
    </template>
  </InputGroup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputGroup from "./InputGroup.vue";
import { ComonInputProps } from "./props";

export default defineComponent({
  name: "TextArea",
  components: {
    InputGroup,
  },
  props: {
    ...ComonInputProps,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
