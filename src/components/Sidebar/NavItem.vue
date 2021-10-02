<template>
  <li class="sidebar__navitem">
    <slot name="button">
      <button @click="clickItem">{{ label }}</button>
    </slot>
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
