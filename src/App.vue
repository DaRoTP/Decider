<template>
  <div class="flex flex-col w-full h-full justify-center">
    <GridSpinner v-if="false" />
    <div v-else class="flex h-full relative">
      <Sidebar v-model:isMinimized="isMinimized">
        <NavItem
          v-for="link in sidebarLinks"
          :key="link.name"
          :to="link.to"
          :icon="link.icon"
          :label="link.name"
        >
          <NavItem
            v-if="link.children"
            v-for="it in link.children"
            :key="it.name"
            :to="it.to"
            :icon="it.icon"
            :label="it.name"
          />
        </NavItem>
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
      <div
        :class="{ minimized: isMinimized }"
        class="main-content flex flex-col p-3 transition-all"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
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

    const isMinimized = ref<boolean>(false);

    const authorizedSidebardLinks = [
      { name: "Home", icon: "home", to: { name: Views.MAIN.DASHBOARD } },
      { name: "My Polls", icon: "poll", to: { name: Views.MAIN.REGISTER } },
      {
        name: "Create Poll",
        icon: "poll",
        children: [
          {
            name: "Binary",
            icon: "network-wired",
            to: { name: Views.CREATE_POLL.BINARY },
          },
          {
            name: "Select",
            icon: "tasks",
            to: { name: Views.CREATE_POLL.SELECT },
          },
          {
            name: "Meter",
            icon: "thermometer-half",
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
      isMinimized,
    };
  },
});
</script>

<style lang="scss">
.main-content {
  width: 100%;
  margin-left: 10rem;
  &.minimized {
    margin-left: 3.25rem;
  }
}
</style>
