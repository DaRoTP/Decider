<template>
  <form class="login" @submit.prevent="login">
    <h1>Login</h1>
    <input v-model="username" name="username" type="text" />
    <input v-model="password" name="username" type="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("LOGIN", {
        username: this.username,
        password: this.password,
      });
    },
  },
});
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
}
</style>
