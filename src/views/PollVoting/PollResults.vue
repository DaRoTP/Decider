<template>
  <div>
    <h1 class="text-lg font-bold text-primary">Poll Results</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: Views.VOTING_PANNEL.RESULTS,
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
