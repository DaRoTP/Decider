<template>
  <form class="login" @submit.prevent="login">
    <h1 class="text-primary font-bold text-xl">Login</h1>
    <hr class="my-4" />
    <Input v-model="username" label="username" />
    <Input v-model="password" label="password" type="password" />
    <div class="flex justify-between gap-2">
      <router-link
        :to="{ name: 'Register' }"
        class="self-end text-sm text-gray-400 mt-3 underline"
        >Forgot password
      </router-link>
      <CheckBox v-model="rememberMe" label="Remember me" />
    </div>
    <button type="submit" class="btn-primary p-2 rounded-full self-center px-6">
      Login
    </button>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { Input, CheckBox } from "@/components/Inputs";

export default defineComponent({
  name: "Login",
  components: {
    Input,
    CheckBox,
  },
  data() {
    return {
      username: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    login() {
      const store = useStore();

      store.dispatch("LOGIN", {
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
