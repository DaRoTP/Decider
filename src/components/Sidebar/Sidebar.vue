<template>
  <nav
    class="sidebar flex flex-col align-center p-3"
    :class="{ minimized: isMinimized }"
  >
    <fa icon="bars" class="self-end" @click="minimizeToggle" role="button" />
    <header class="flex flex-col my-4">
      <router-link
        :to="{ name: isAuth ? Views.MAIN.DASHBOARD : Views.MAIN.HOME }"
      >
        <h1 class="font-bold flex justify-center items-center">
          <fa icon="chart-pie" class="mr-1" />
          <span class="sidebar-text">DESIDER</span>
        </h1>
      </router-link>
    </header>
    <ul class="flex flex-col gap-4 mt-3 flex-grow p-1">
      <template v-if="isAuth">
        <NavItem
          :to="{ name: Views.MAIN.DASHBOARD }"
          icon="home"
          label="Dahsboard"
        />
        <NavItem
          :to="{ name: Views.MAIN.DASHBOARD }"
          icon="poll"
          label="My Polls"
        />
        <NavItem
          @click="logout"
          icon="sign-out-alt"
          label="Log out"
          class="mt-auto"
        />
        <NavItem icon="cog" label="Settings" />
      </template>
      <template v-else>
        <NavItem
          :to="{ name: Views.MAIN.LOGIN }"
          icon="sign-in-alt"
          label="Login"
        />
        <NavItem
          :to="{ name: Views.MAIN.REGISTER }"
          icon="edit"
          label="Register"
        />
      </template>
    </ul>
    <footer>
      <hr class="my-3 opacity-20" />
      <ul class="flex flex-col items-center gap-2 opacity-50">
        <li>
          <a href="#" class="flex text-xs">
            <fa icon="user" class="mr-1" />
            <span class="sidebar-text">Author @DaRo</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex text-xs">
            <fa icon="code" class="mr-1" />
            <span class="sidebar-text">Source code</span>
          </a>
        </li>
      </ul>
    </footer>
  </nav>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { Views } from "@/router/viewNames";
import NavItem from "./NavItem.vue";

export default defineComponent({
  name: "Sidebar",
  components: {
    NavItem,
  },
  setup() {
    const store = useStore();
    const isMinimized = ref(false);

    const logout = () => {
      store.dispatch("LOGOUT");
    };

    const minimizeToggle = () => {
      isMinimized.value = !isMinimized.value;
    };

    const isAuth = computed(() => store.state.isAuth);

    return { Views, isMinimized, isAuth, logout, minimizeToggle };
  },
});
</script>

<style lang="scss">
$sidebar-width: 11rem;
$sidebar-width-minimized: 3rem;

.sidebar {
  background: $primary;
  height: 100%;
  color: white;
  min-width: $sidebar-width;
  transition: all 500ms;
  overflow: hidden;

  &.minimized {
    min-width: $sidebar-width-minimized;
    .sidebar-text {
      display: none;
    }
  }
}
</style>
