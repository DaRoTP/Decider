<template>
  <div>
    <h1 class="text-primary font-bold text-xl">Create Poll</h1>
    <hr class="my-2" />
    <CreateMeterPoll />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateMeterPoll from "@/views/CreatePoll/CreateMeterPoll.vue";

export default defineComponent({
  name: "Create Poll",
  components: {
    CreateMeterPoll,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
