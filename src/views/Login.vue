<template>
  <form class="login flex flex-col mx-auto mt-6" @submit.prevent="login">
    <h1 class="text-primary font-bold text-2xl">Login</h1>
    <hr class="my-4" />
    <Input v-model="user.username" label="username" />
    <Input v-model="user.password" label="password" type="password" />
    <div class="flex justify-between gap-2">
      <router-link
        :to="{ name: Views.MAIN.REGISTER }"
        class="self-end text-sm text-gray-400 mt-3 underline"
        >Forgot password
      </router-link>
      <CheckBox v-model="rememberMe" label="Remember me" />
    </div>
    <button
      type="submit"
      class="
        btn-primary
        p-2
        rounded-full
        self-center
        px-6
        my-4
        flex
        items-center
      "
    >
      Login
      <InlineLoader v-if="isLoading" />
    </button>
    <router-link
      class="self-center text-sm text-gray-400 mt-3 underline"
      :to="{ name: Views.MAIN.HOME }"
    >
      Already have an account? Sign in
    </router-link>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Views } from "@/router/viewNames";
import InlineLoader from "@/components/Spinners/InlineLoader.vue";

export default defineComponent({
  name: "Login",
  components: {
    InlineLoader,
  },
  setup() {
    const user = ref<{ username: string; password: string }>({
      username: "",
      password: "",
    });
    const isLoading = ref<boolean>(false);
    const rememberMe = ref(false);
    const store = useStore();
    const router = useRouter();

    const login = async () => {
      isLoading.value = true;
      const res = await store.dispatch("LOGIN", {
        username: user.value.username,
        password: user.value.password,
      });
      isLoading.value = false;
      router.replace({ name: Views.MAIN.DASHBOARD });
    };

    return {
      Views,
      user,
      isLoading,
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
