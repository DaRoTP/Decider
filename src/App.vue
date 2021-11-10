<template>
  <div class="flex flex-col w-full h-full">
    <GridSpinner v-if="false" class="self-center top-1/2" />
    <div v-else class="flex h-full">
      <Sidebar>
        <NavItem
          v-for="link in sidebarLinks"
          :key="link.name"
          :to="link.to"
          :icon="link.icon"
          :label="link.name"
        />
        <template v-if="$store.state.isAuth">
          <NavItem
            @click="$store.dispatch('LOGOUT')"
            icon="sign-out-alt"
            label="Log Out"
            class="mt-auto"
          />
          <NavItem
            icon="cog"
            label="Settings"
            :to="{ name: Views.MAIN.SETTINGS }"
          />
        </template>
      </Sidebar>
      <div class="main-content flex flex-col p-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import NavItem from "@/components/Sidebar/NavItem.vue";
import GridSpinner from "@/components/Spinners/GridSpinner.vue";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: "App",
  components: {
    Sidebar,
    GridSpinner,
    NavItem,
  },
  setup() {
    const store = useStore();
    store.dispatch("IS_AUTH");

    const authorizedSidebardLinks = [
      { name: "Home", icon: "home", to: { name: Views.MAIN.DASHBOARD } },
      { name: "My Polls", icon: "poll", to: { name: Views.MAIN.REGISTER } },
      {
        name: "Create Poll",
        icon: "poll",
        children: [
          {
            name: "Binary",
            icon: "poll",
            to: { name: Views.CREATE_POLL.BINARY },
          },
          {
            name: "Select",
            icon: "poll",
            to: { name: Views.CREATE_POLL.SELECT },
          },
          {
            name: "Meter",
            icon: "poll",
            to: { name: Views.CREATE_POLL.METER },
          },
        ],
      },
    ];

    const unauthorizedSidebardLinks = [
      { name: "Login", icon: "sign-in-alt", to: { name: Views.MAIN.LOGIN } },
      { name: "Register", icon: "edit", to: { name: Views.MAIN.REGISTER } },
    ];

    const sidebarLinks = computed(() => {
      return store.state.isAuth
        ? authorizedSidebardLinks
        : unauthorizedSidebardLinks;
    });

    return {
      sidebarLinks,
      Views,
    };
  },
});
</script>

<style scoped>
.main-content {
  flex-grow: 1;
}
</style>
