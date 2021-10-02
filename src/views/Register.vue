<template>
  <form class="register" @submit.prevent="register">
    <h1>Register</h1>
    <input v-model="username" name="username" type="text" />
    <input v-model="password" name="username" type="password" />
    <button type="submit">Register</button>
  </form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    register() {
      console.log("register ...", this.username, this.password);
    },
  },
});
</script>

<style>
.register {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
}
</style>
