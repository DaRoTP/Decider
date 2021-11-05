<template>
  <div>
    <h1 class="text-primary font-bold text-xxl">this is description</h1>
    <button
      @click="$emit('activate-poll')"
      class="btn-primary p-2 rounded-full px-6 my-4 self-end"
    >
      Start Poll
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: Views.VOTING_PANNEL.INTRODUCTION,
  setup() {
    return {};
  },
});
</script>
