<template>
  <div class="flex flex-col">
    <h1 class="text-primary font-bold text-xl">Dashboard</h1>
    <hr class="my-4" />
    <div class="flex gap-2 self-center">
      <router-link :to="{ name: 'Create Poll' }">
        <img src="../assets/images/binary.svg" alt="create binary poll" />
      </router-link>
      <router-link :to="{ name: 'Create Poll' }">
        <img src="../assets/images/meter.svg" alt="create meter poll" />
      </router-link>
      <router-link :to="{ name: 'Create Poll' }">
        <img src="../assets/images/select.svg" alt="cretae select poll" />
      </router-link>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h2 class="text-primary font-bold text-xl">Recent polls</h2>
        <hr class="my-2" />
        <div class="flex flex-col gap-2">
          <PollCard
            v-for="poll in recentPolls"
            :key="poll.id"
            :id="poll.id"
            :title="poll.title"
            :isLive="poll.isLive"
          />
        </div>
      </div>
      <div>
        <h2 class="text-primary font-bold text-xl">My polls</h2>
        <hr class="my-2" />
        <div class="flex flex-col gap-2">
          <PollCard
            v-for="poll in myPolls"
            :key="poll.id"
            :id="poll.id"
            :title="poll.title"
            :isLive="poll.isLive"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PollCard from "@/components/PollCard.vue";
import { IPoll } from "@/types";

export default defineComponent({
  components: {
    PollCard,
  },
  setup() {
    const recentPolls = ref<IPoll[]>([
      { id: "1", title: "one", isLive: false },
      { id: "2", title: "two", isLive: false },
      { id: "3", title: "three", isLive: true },
      { id: "4", title: "four", isLive: false },
    ]);

    const myPolls = ref<IPoll[]>([
      { id: "5", title: "five", isLive: true },
      { id: "6", title: "six", isLive: false },
      { id: "7", title: "seven", isLive: true },
      { id: "8", title: "eight", isLive: false },
    ]);

    return {
      recentPolls,
      myPolls,
    };
  },
});
</script>
