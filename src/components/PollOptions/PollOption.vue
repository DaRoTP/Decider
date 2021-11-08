<template>
  <li
    class="poll-option bg-white flex items-center cursor-pointer"
    :class="{ selected: selected }"
    @click="$emit('upadte:selected', !selected)"
  >
    <span
      class="
        poll-option-index
        bg-primary
        text-white
        rounded-md
        flex
        items-center
        justify-center
        mx-2
        text-xs
      "
    >
      {{ index }}.
    </span>
    <span class="mx-2 flex-1">{{ name }}</span>
    <img :src="imageSrc" class="object-cover" />
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Poll Option",
  props: {
    index: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    imageSrc: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
$image-width: 6rem;
$image-height: 2.5rem;
$option-transition: width 0.1s ease-in-out;

.poll-option {
  border: solid 1px rgb(233, 236, 248);
  &::before {
    content: "";
    background: $primary;
    height: 100%;
    width: 0;
    transition: $option-transition;
  }
  &-index {
    min-width: 1.5rem;
    height: 1.5rem;
  }
  img {
    height: $image-height;
    width: $image-width;
  }
  &.selected {
    background: rgb(230, 236, 245);
    &::before {
      width: 0.25rem;
    }
  }
}
</style>
