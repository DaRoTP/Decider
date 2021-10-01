<template>
  <div class="App">
    <sidebard />
    <router-view />
  </div>
</template>

<script>
import Sidebard from "./components/Sidebar/Sidebar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  components: {
    Sidebard,
  },
  data() {
    return {
      isAuth: false,
    };
  },
});
</script>

<style lang="scss">
.App {
  display: flex;
}
</style>
