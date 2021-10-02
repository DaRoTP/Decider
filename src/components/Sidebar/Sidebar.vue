<template>
  <nav class="sidebar">
    <header class="sidebar__header">
      <fa icon="bars" @click="minimizeToggle" role="button" />
      <router-link class="sidebar__title" :to="{ name: 'Home' }">
        <h1><fa icon="home" />DESIDER</h1>
      </router-link>
    </header>
    <ul class="sidebar__body">
      <template v-if="isAuth">
        <NavItem :to="{ name: viewNames.DASHBOARD }" label="Dahsboard" />
        <NavItem :to="{ name: viewNames.DASHBOARD }" label="My Polls" />
        <NavItem @click="logout" label="Log out" />
      </template>
      <template v-else>
        <NavItem :to="{ name: viewNames.LOGIN }" label="Login" />
        <NavItem :to="{ name: viewNames.REGISTER }" label="Register" />
      </template>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { viewNames } from "@/router/views";
import NavItem from "./NavItem.vue";

export default defineComponent({
  name: "Sidebar",
  components: {
    NavItem,
  },
  data() {
    return {
      viewNames,
      isMinimized: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT");
    },
    minimizeToggle() {
      this.isMinimized = !this.isMinimized;
    },
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth;
    },
  },
});
</script>

<style lang="scss" scoped>
$sidebar-width: 10rem;

.sidebar {
  background: $primary;
  height: 100%;
  color: white;
  width: $sidebar-width;
}
</style>
