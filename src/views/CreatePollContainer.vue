<template>
  <div>
    <h1 class="text-primary font-bold text-xl">Create Poll</h1>
    <hr class="my-2" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: Views.CREATE_POLL.CONTAINER,
  setup() {
    return {};
  },
});
</script>
