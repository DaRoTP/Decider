<template>
  <form class="login flex flex-col mx-auto mt-6" @submit.prevent="login">
    <h1 class="text-primary font-bold text-2xl">Login</h1>
    <hr class="my-4" />
    <Input v-model="username" label="username" />
    <Input v-model="password" label="password" type="password" />
    <div class="flex justify-between gap-2">
      <router-link
        :to="{ name: viewNames.REGISTER }"
        class="self-end text-sm text-gray-400 mt-3 underline"
        >Forgot password
      </router-link>
      <CheckBox v-model="rememberMe" label="Remember me" />
    </div>
    <button
      type="submit"
      class="btn-primary p-2 rounded-full self-center px-6 my-4"
    >
      Login
    </button>
    <router-link
      class="self-center text-sm text-gray-400 mt-3 underline"
      :to="{ name: viewNames.HOME }"
    >
      Already have an account? Sign in
    </router-link>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Input from "@/components/Inputs/Input.vue";
import CheckBox from "@/components/Inputs/CheckBox.vue";
import { viewNames } from "@/router/views";

export default defineComponent({
  name: "Login",
  components: {
    Input,
    CheckBox,
  },
  setup() {
    const username = ref("");
    const password = ref("");
    const rememberMe = ref(false);
    const store = useStore();

    const login = () => {
      store.dispatch("LOGIN", {
        username,
        password,
      });
    };

    return {
      viewNames,
      username,
      password,
      rememberMe,
      login,
    };
  },
});
</script>

<style>
.login {
  max-width: 25rem;
}
</style>
