<template>
  <div>
    <h1 class="text-lg font-bold text-primary">Poll Results</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { viewNames } from "@/router/views";

export default defineComponent({
  name: viewNames.POLL_RESULTS,
  props: {
    pollId: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
