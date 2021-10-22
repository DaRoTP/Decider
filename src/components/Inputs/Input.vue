<template>
  <InputGroup
    :label="label"
    :subText="error"
    class="app-input"
    :class="{ 'in-valid': !error }"
    :classLabel="errorTextStyle"
    :classSubText="errorTextStyle"
  >
    <template #label>
      <slot name="label" />
    </template>
    <template #input>
      <input
        :type="type"
        :required="required"
        :value="modelValue"
        :placeholder="placeholder"
        class="bg-white shadow-md rounded-sm p-2"
        :class="[errorTextStyle]"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </template>
  </InputGroup>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import InputGroup from "./InputGroup.vue";
import { ComonInputProps } from "./props";

type InputTypes = "text" | "password" | "number";

export default defineComponent({
  name: "Input",
  components: {
    InputGroup,
  },
  props: {
    ...ComonInputProps,
    modelValue: {
      type: [String, Number],
    },
    type: {
      type: String as PropType<InputTypes>,
      default: "text",
    },
  },
  setup(props) {
    const errorTextStyle = computed(() => (props.error ? "text-red-700" : ""));
    return { errorTextStyle };
  },
});
</script>

<style lang="scss" scoped>
.app-input {
  input {
    &:focus {
      outline-color: $primary;
      outline-offset: 2px;
    }
    &::placeholder {
      font-style: italic;
    }
  }
}
</style>
