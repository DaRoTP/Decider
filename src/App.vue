<template>
  <div class="flex flex-col w-full h-full">
    <GridSpinner v-if="isLoading" class="self-center top-1/2" />
    <div v-else class="flex h-full">
      <Sidebar />
      <div class="main-content flex flex-col p-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { isAuthenticatedService } from "@/service";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import GridSpinner from "@/components/Spinners/GridSpinner.vue";

export default defineComponent({
  name: "App",
  components: {
    Sidebar,
    GridSpinner,
  },
  setup() {
    // const store = useStore();
    const { isLoading, call } = isAuthenticatedService();
    const store = useStore();
    onMounted(async () => {
      const res = await call();
      console.log(res);
      if (res.isAuthenticated) {
        store.dispatch("LOGIN", res.user);
      } else {
        store.dispatch("LOGOUT");
      }
    });
    return {
      isLoading,
    };
  },
});
</script>

<style scoped>
.main-content {
  flex-grow: 1;
}
</style>
