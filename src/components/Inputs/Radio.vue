<template>
  <InputGroup :label="label" :subText="error" class="radio-group">
    <template #input>
      <div class="flex gap-2" :class="{ 'flex-row': inline }">
        <div
          v-for="option in options"
          :key="option"
          class="flex gap-1 items-center cursor-pointer"
          @click="$emit('update:modelValue', option)"
        >
          <input
            :value="option"
            :name="name"
            type="radio"
            :checked="option === modelValue"
          />
          <label>{{ option }}</label>
        </div>
      </div>
    </template>
  </InputGroup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputGroup from "./InputGroup.vue";

export default defineComponent({
  name: "Radio",
  components: {
    InputGroup,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: null,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      defualt: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
