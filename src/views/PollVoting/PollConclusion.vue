<template>
  <div class="">
    <h1 class="text-primary font-bold text-lg">
      Thanks for participating in the poll
    </h1>
    <router-link
      :to="{ name: Views.VOTING_PANNEL.RESULTS, params: { pollId } }"
      class="btn-primary p-2 rounded-full px-6 my-4 self-center"
    >
      See results
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Views } from "@/router/viewNames";
import { useRoute } from "vue-router";

export default defineComponent({
  name: Views.VOTING_PANNEL.CONCLUSION,
  setup() {
    const route = useRoute();
    const { pollId } = route.params;
    return {
      Views,
      pollId,
    };
  },
});
</script>

<style scoped></style>
