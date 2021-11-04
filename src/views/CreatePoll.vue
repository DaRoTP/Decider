<template>
  <div>
    <h1 class="text-primary font-bold text-xl">Create Poll</h1>
    <hr class="my-2" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Create Poll",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
