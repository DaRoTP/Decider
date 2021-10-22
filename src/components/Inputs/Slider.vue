<template>
  <InputGroup :label="label" :subText="error" class="radio-group">
    <template #label>
      <slot name="label" />
    </template>
    <template #input>
      <input
        type="range"
        :required="required"
        :min="min"
        :max="max"
        :value="modelValue"
        :placeholder="placeholder"
        :disbaled="disabled"
        class="bg-white shadow-md rounded-sm p-2"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>
  </InputGroup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputGroup from "./InputGroup.vue";
import { ComonInputProps } from "./props";

export default defineComponent({
  name: "Slider",
  components: {
    InputGroup,
  },
  props: {
    ...ComonInputProps,
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
