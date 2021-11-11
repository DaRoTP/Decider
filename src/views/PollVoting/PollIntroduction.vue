<template>
  <div class="flex items-center justify-center gap-6">
    <div class="flex flex-col">
      <h1 class="text-primary font-bold text-xxl">this is description</h1>
      <button
        @click="$emit('activate-poll')"
        class="btn-primary p-2 rounded-full px-6 my-6"
      >
        Start Poll
      </button>
    </div>
    <img
      src="../../assets/images/examination.svg"
      alt="examination"
      class="object-cover h-80"
    />
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
