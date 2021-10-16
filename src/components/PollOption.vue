<template>
  <li
    class="poll-option flex bg-white p-2 rounded-sm shadow-md gap-2 relative"
    :class="{ selected: isSelected }"
    @click="isSelected = !isSelected"
  >
    <span class="bg-primary text-white px-2 shadow-md rounded-md absolute">
      {{ `${index}.` }}
    </span>
    <img
      v-if="isExapned"
      class="poll-option-image object-cover rounded-sm"
      src="../assets/images/broken-image.svg"
    />
    <div class="flex-1">
      <div
        class="flex items-center cursor-pointer"
        :class="{ 'ml-9': !isExapned }"
      >
        <span class="text-gray-900">{{ name }}</span>
        <fa
          @click.stop="toggleExpand"
          icon="chevron-down"
          class="ml-auto text-xs"
          role="button"
        />
      </div>
      <div v-if="isExapned">
        {{ description }}
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

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
    expand: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    imageSrc: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const isExapned = ref<boolean>(props.expand);
    const isSelected = ref<boolean>(props.selected);

    const toggleExpand = () => {
      isExapned.value = !isExapned.value;
    };

    watch(
      () => props.expand,
      (newVal) => {
        isExapned.value = newVal;
      }
    );

    watch(
      () => props.selected,
      (newVal) => {
        isSelected.value = newVal;
      }
    );

    return {
      isExapned,
      isSelected,
      toggleExpand,
    };
  },
});
</script>

<style lang="scss" scoped>
.poll-option {
  border: solid 2px white;
  &.selected {
    background: rgb(192, 226, 255);
    border-color: $primary;
  }
  &-image {
    height: 5rem;
    width: 7rem;
  }
}
</style>
