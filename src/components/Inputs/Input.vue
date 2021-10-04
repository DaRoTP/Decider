<template>
  <InputGroup
    :label="label"
    :subText="error"
    class="input"
    :class="{ 'in-valid': !error }"
    :classLabel="errorTextStyle"
    :classSubText="errorTextStyle"
  >
    <template #input>
      <input
        :type="type"
        :required="required"
        :value="modelValue"
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

type InputTypes = "text" | "password" | "number";

export default defineComponent({
  name: "Input",
  components: {
    InputGroup,
  },
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
    const errorTextStyle = computed(() => (props.error ? "text-red-700" : ""));
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
