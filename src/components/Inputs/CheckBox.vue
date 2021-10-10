<template>
  <div
    role="button"
    class="checkbox flex items-center justify-center gap-2"
    @click="selectCheckBoxHandler"
  >
    <input :checked="modelValue" type="checkbox" />
    <label class="text-primary text-sm capitalize select-none">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ComonInputProps } from "./props";

export default defineComponent({
  props: {
    ...ComonInputProps,
    modelValue: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const selectCheckBoxHandler = () => {
      emit("update:modelValue", !props.modelValue);
    };
    return { selectCheckBoxHandler };
  },
});
</script>
