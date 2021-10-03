<template>
  <li class="nav-item">
    <router-link v-if="to" :to="to" class="flex flex-nowrap items-center">
      <fa :icon="icon" class="mr-1" />
      <span class="sidebar-text flex-nowrap whitespace-nowrap">
        {{ label }}
      </span>
    </router-link>
    <button v-else @click="clickItem" class="flex flex-nowrap items-center">
      <fa :icon="icon" class="mr-2" />
      <span class="sidebar-text whitespace-nowrap">
        {{ label }}
      </span>
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
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
    const clickItem = () => emit("click");

    return {
      clickItem,
    };
  },
});
</script>

<style lang="scss">
.nav-item {
  & > .router-link-active {
    text-decoration: underline;
  }
}
</style>
