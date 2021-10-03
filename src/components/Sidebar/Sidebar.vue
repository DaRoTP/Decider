<template>
  <nav class="sidebar flex flex-col align-center p-3">
    <fa icon="bars" class="self-end" @click="minimizeToggle" role="button" />
    <header class="flex flex-col my-4">
      <router-link class="" :to="{ name: 'Home' }">
        <h1 class="font-bold flex justify-center items-center">
          <fa icon="chart-pie" class="mr-1" />DESIDER
        </h1>
      </router-link>
    </header>
    <ul class="flex flex-col items-center gap-4 mt-3">
      <template v-if="isAuth">
        <NavItem
          :to="{ name: viewNames.DASHBOARD }"
          icon="home"
          label="Dahsboard"
        />
        <NavItem
          :to="{ name: viewNames.DASHBOARD }"
          icon="poll"
          label="My Polls"
        />
      </template>
      <template v-else>
        <NavItem
          :to="{ name: viewNames.LOGIN }"
          icon="sign-in-alt"
          label="Login"
        />
        <NavItem
          :to="{ name: viewNames.REGISTER }"
          icon="edit"
          label="Register"
        />
      </template>
    </ul>
    <footer class="mt-auto">
      <ul class="flex flex-col items-center gap-2">
        <NavItem @click="logout" icon="sign-out-alt" label="Log out" />
        <NavItem icon="cog" label="Settings" />
      </ul>
      <hr class="my-3" />
      <ul class="flex flex-col items-center gap-2 opacity-50">
        <li>
          <i class="flex text-xs"
            ><fa icon="user" class="mr-1" /> Author @DaRo</i
          >
        </li>
        <li>
          <i class="flex text-xs"
            ><fa icon="code" class="mr-1" /> Source code</i
          >
        </li>
      </ul>
    </footer>
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
