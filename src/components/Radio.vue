<template>
  <div v-for="option in options" :key="option" class="flex gap-2">
    <input
      :value="option"
      @change="$emit('update:modelValue', $event.target.value)"
      :name="name"
      type="radio"
    />
    <label :for="option">{{ option }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Radio",
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: null,
    },
    modelValue: {
      type: String,
      default: null,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
