<template>
  <InputGroup
    :label="label"
    :subText="error"
    class="app-input"
    :class="{ 'in-valid': !error }"
  >
    <template #input>
      <button
        @click="$emit('update:modelValue', !modelValue)"
        :style="{ width: '3rem', height: '1.5rem' }"
        class="bg-primary rounded-md p-1 relative shadow-md"
        :class="{ 'bg-gray-400': !modelValue }"
      >
        <span
          :style="{
            width: '1rem',
            height: '1rem',
            transform: modelValue ? 'translate(1.5rem)' : '',
          }"
          class="
            bg-white
            rounded-sm
            shadow-sm
            grid
            place-items-center
            transition-all
          "
        >
          <fa v-if="modelValue" icon="check" class="text-primary text-xs" />
        </span>
      </button>
    </template>
  </InputGroup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputGroup from "./InputGroup.vue";
import { ComonInputProps } from "./props";

export default defineComponent({
  name: "Switch",
  components: {
    InputGroup,
  },
  props: {
    ...ComonInputProps,
    modelValue: {
      type: Boolean,
    },
  },
  setup() {
    return {};
  },
});
</script>
