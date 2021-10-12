<template>
  <li class="poll-option flex bg-white p-2 rounded-sm shadow-md gap-2 relative">
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
        @click="toggleExpand"
        class="flex items-center cursor-pointer"
        :class="{ 'ml-9': !isExapned }"
      >
        <span class="text-gray-900">{{ name }}</span>
        <fa icon="chevron-down" class="ml-auto text-xs" role="button" />
      </div>
      <div v-if="isExapned">
        {{ description }}
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

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

    const toggleExpand = () => {
      isExapned.value = !isExapned.value;
    };

    return {
      isExapned,
      toggleExpand,
    };
  },
});
</script>

<style scoped>
.poll-option-image {
  height: 5rem;
  width: 7rem;
}
</style>
