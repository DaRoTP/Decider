<template>
  <li class="sidebar__navitem">
    <button @click="clickItem">
      <fa :icon="icon" />
      {{ label }}
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
  methods: {
    clickItem() {
      if (this.to) {
        this.$router.push(this.to);
      }
      this.$emit("click");
    },
  },
});
</script>

<style></style>
