<template>
  <li class="nav-item overflow-hidden">
    <router-link v-if="to" :to="to">
      <fa :icon="icon" class="mr-2" />
      <span class="sidebar-text font-bold flex-nowrap whitespace-nowrap">
        {{ label }}
      </span>
    </router-link>
    <button v-else @click="clickItem">
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
  & > * {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    &:hover {
      background: darken($primary, 5%);
    }
  }

  & > .router-link-active {
    color: $primary;
    background: white;
  }
}
</style>
