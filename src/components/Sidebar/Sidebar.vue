<template>
  <nav class="sidebar">
    <header class="sidebar__header">
      <router-link :to="{ name: 'Home' }">
        <h1>Decider</h1>
      </router-link>
    </header>
    <ul class="sidebar__body">
      <template v-if="isAuth">
        <NavItem :to="{ name: viewNames.DASHBOARD }" label="Dahsboard" />
        <NavItem :to="{ name: viewNames.DASHBOARD }" label="My Polls" />
        <button @click="logout">Log out</button>
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
    };
  },
  methods: {
    logout(): void {
      this.$store.dispatch("LOGOUT");
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
.sidebar {
  background: rgb(60, 60, 201);
  height: 100%;
}
</style>
