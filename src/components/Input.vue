<template>
  <div class="app-input flex flex-col" :class="{ 'in-valid': !error }">
    <slot name="label">
      <label class="text-primary" :class="[errorTextStyle]">{{ label }}</label>
    </slot>
    <input
      :type="type"
      :required="required"
      :value="modelValue"
      class="bg-white shadow-md rounded-sm p-2 my-1"
      :class="[errorTextStyle]"
      @input="$emit($event.target.value)"
    />
    <span class="h-3 text-red-700">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

type InputTypes = "text" | "password" | "number";

export default defineComponent({
  name: "Input",
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String as PropType<InputTypes>,
      default: "text",
    },
    error: {
      type: String,
    },
    modelValue: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const errorTextStyle = props.error ? "text-red-700" : "";
    return { errorTextStyle };
  },
});
</script>

<style lang="scss" scoped>
.app-input {
  input:focus {
    outline-color: $primary;
    outline-offset: 2px;
  }
}
</style>
