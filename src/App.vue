<template>
  <div class="flex flex-col w-full h-full">
    <GridSpinner v-if="false" class="self-center top-1/2" />
    <div v-else class="flex h-full">
      <Sidebar />
      <div class="main-content flex flex-col p-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import GridSpinner from "@/components/Spinners/GridSpinner.vue";

export default defineComponent({
  name: "App",
  components: {
    Sidebar,
    GridSpinner,
  },
  setup() {
    const store = useStore();
    store.dispatch("IS_AUTH");
  },
});
</script>

<style scoped>
.main-content {
  flex-grow: 1;
}
</style>
