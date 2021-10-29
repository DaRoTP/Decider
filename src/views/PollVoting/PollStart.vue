<template>
  <div>
    <h1 class="text-primary font-bold text-xxl">this is description</h1>
    <button class="btn-primary p-2 rounded-full px-6 my-4 self-end">
      Start Poll
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PollVotingStart",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
