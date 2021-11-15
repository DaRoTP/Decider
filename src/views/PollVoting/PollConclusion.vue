<template>
  <div class="flex items-center justify-center gap-5">
    <div class="flex flex-col">
      <h1 class="text-primary font-bold text-xl">Thank You for voting!</h1>
      <p class="text-primary">
        Results are going to be available once voting is finished. We will send
        you a notification once votinig is finished
      </p>
      <template v-if="!$store.state.isAuth">
        <Input v-model="email" label="email" class="mt-4" />
        <button class="btn-primary rounded-md p-2 px-3 self-end">
          <fa icon="envelope" class="mr-2" />
          Submit
        </button>
      </template>
      <router-link
        :to="{ name: Views.VOTING_PANNEL.RESULTS, params: { pollId } }"
        class="btn-primary p-2 rounded-md px-6 my-6 self-center"
      >
        <fa icon="file-alt" class="mr-2" />
        See results
      </router-link>
    </div>
    <img
      src="../../assets/images/cerification.svg"
      class="max-w-sm object-contain"
      alt="thank you"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Views } from "@/router/viewNames";
import { useRoute } from "vue-router";

export default defineComponent({
  name: Views.VOTING_PANNEL.CONCLUSION,
  setup() {
    const route = useRoute();

    const { pollId } = route.params;
    const email = ref<string>("");

    return {
      Views,
      pollId,
      email,
    };
  },
});
</script>

<style scoped></style>
