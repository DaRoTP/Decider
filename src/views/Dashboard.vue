<template>
  <div>
    <h1>Dashboard</h1>
    <router-link :to="{ name: 'Create Poll' }">Binary vote</router-link>
    <div>
      <h2>Recent polls</h2>
      <PollCard />
      <PollCard />
      <PollCard />
      <PollCard />
    </div>
  </div>
</template>

<script>
import PollCard from "@/components/PollCard.vue";
export default {
  components: {
    PollCard,
  },
  name: "Dashboard",
};
</script>

<style></style>
