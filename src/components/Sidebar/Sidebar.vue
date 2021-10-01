<template>
  <nav class="sidebar">
    <header class="sidebar__header">
      <h1>Decider</h1>
    </header>
    <ul class="sidebar__body">
      <template v-if="isAuth">
        <NavItem :to="{ name: viewNames.DASHBOARD }" label="Dahsboard" />
        <NavItem :to="{ name: viewNames.DASHBOARD }" label="My Polls" />
      </template>
      <template v-else>
        <NavItem :to="{ name: viewNames.LOGIN }" label="Login" />
        <NavItem :to="{ name: viewNames.REGISTER }" label="Register" />
        <NavItem :to="{ name: viewNames.REGISTER }" label="Log out" />
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
      isAuth: false,
    };
  },
  methods: {
    logout(): void {
      console.log("loggin out");
    },
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  background: rgb(60, 60, 201);
}
</style>
