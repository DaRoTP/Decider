<template>
  <li class="nav-item relative">
    <router-link v-if="to" :to="to">
      <fa :icon="icon" />
      <span class="nav-item-text">
        {{ label }}
      </span>
    </router-link>
    <span v-else class="cursor-pointer flex flex-col items-start">
      <a @click="clickHandler" class="flex items-center w-full">
        <fa :icon="icon" />
        <span class="nav-item-text flex-1">
          {{ label }}
        </span>
        <fa v-if="!!$slots.default" icon="caret-down" class="ml-auto mr-0" />
      </a>
      <ul
        v-if="!!$slots.default"
        class="dropdown-list overflow-hidden flex flex-col w-full"
        :class="{ 'h-0': dropdownMinimized }"
      >
        <slot />
      </ul>
    </span>
    <span class="tooltip absolute text-sm">{{ label }}</span>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { RouteLocationRaw } from "vue-router";

export default defineComponent({
  name: "NavItem",
  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      type: Object as PropType<RouteLocationRaw>,
    },
    icon: {
      type: String,
      default: "list",
    },
  },
  setup(_, { emit }) {
    const dropdownMinimized = ref<boolean>(false);

    const clickHandler = () => {
      emit("click");
      dropdownMinimized.value = !dropdownMinimized.value;
    };

    return {
      dropdownMinimized,
      clickHandler,
    };
  },
});
</script>

<style lang="scss">
.nav-item {
  & > * {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
    &:hover {
      background: darken($primary, 5%);
    }
    .nav-item-text {
      font-weight: bold;
      white-space: nowrap;
      margin-left: 0.6rem;
    }
  }

  & > .router-link-active {
    color: $primary;
    background: white;
  }
  .tooltip {
    background: rgba(rgb(4, 0, 61), 0.75);
    left: 0;
    top: 0.1rem;
    transform: translateX(3rem);
    white-space: nowrap;
    display: none;
  }
  .dropdown-list > * {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
}
.sidebar.minimized {
  .nav-item {
    &:hover .tooltip {
      display: block;
    }
    .nav-item-text {
      opacity: 0;
    }
  }
}
</style>
