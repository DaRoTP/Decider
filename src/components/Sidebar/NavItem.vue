<template>
  <li class="sidebar__navitem">
    <router-link :to="to">{{ label }}</router-link>
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
  },
});
</script>

<style></style>
