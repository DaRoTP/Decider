<template>
  <sidebard />
  <div class="main-content">
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
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      const user = {
        username: "user1",
      };
      this.$store.dispatch("LOGIN", user);
      this.$router.replace({ name: "Dashboard" });
    } else {
      this.$store.dispatch("LOGOUT");
    }
  },
});
</script>

<style lang="scss">
.main-content {
  flex-grow: 1;
}
</style>
