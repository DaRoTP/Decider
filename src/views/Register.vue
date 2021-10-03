<template>
  <h1 class="text-primary font-bold text-xl">Register</h1>
  <hr class="my-4" />
  <div class="flex">
    <form class="register flex-1" @submit.prevent="registerHandler">
      <Input v-model="username" label="username" type="text" />
      <Input v-model="password" label="password" type="password" />
      <Input v-model="matchingPassword" label="matching password" type="password" />
      <button class="btn-primary p-2 rounded-full self-end px-6" type="submit">Next</button>
      <a class="self-end text-sm text-gray-400 mt-2 underline" href="#">Already ahve an account? Sign in</a>
    </form>
    <img class="flex-1" src="../assets/images/registration-image.svg" alt="registration image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "@/components/Input.vue";

export default defineComponent({
  name: "Register",
  components: {
    Input,
  },
  setup() {
    const username = ref("");
    const password = ref("");
    const matchingPassword = ref("");

    const registerHandler = () => {
      console.log("register ...", username, password);
    };

    return {
      username,
      password,
      matchingPassword,
      registerHandler,
    };
  },
});
</script>

<style>
.register {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  padding: 4rem;
}
</style>
