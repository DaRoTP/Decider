<template>
  <div class="">
    <h1 class="text-primary font-bold text-lg">
      Thanks for participating in the poll
    </h1>
    <router-link
      :to="{ name: viewNames.POLL_RESULTS, params: { pollId } }"
      class="btn-primary p-2 rounded-full px-6 my-4 self-center"
    >
      See results
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { viewNames } from "@/router/views";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "EndView",
  setup() {
    const route = useRoute();
    const { pollId } = route.params;
    return {
      viewNames,
      pollId,
    };
  },
});
</script>

<style scoped></style>
