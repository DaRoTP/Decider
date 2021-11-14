<template>
  <aside
    class="sidebar bg-primary fixed shadow-xl text-white transition-all p-2"
    :class="{ minimized: isMinimized }"
  >
    <header class="flex items-center justify-between px-2">
      <router-link
        :to="{ name: Views.MAIN.HOME }"
        class="font-bold text-lg text-link transition-all"
      >
        <fa icon="chart-pie" />
        <span class="ml-2">DECIDER</span>
      </router-link>
      <fa
        icon="bars"
        @click="$emit('update:isMinimized', !isMinimized)"
        role="button"
      />
    </header>
    <ul class="flex flex-col flex-1 mt-7 gap-3">
      <slot />
    </ul>
    <footer class="my-2">
      <hr class="opacity-20 py-2" />
      <ul class="flex flex-col gap-3 opacity-50">
        <li v-for="link in footerLinks" :key="link.name" class="mx-2">
          <a :href="link.link" class="flex items-center text-xs">
            <strong class="w-5 flex items-center justify-center mr-2">
              <fa :icon="link.icon" />
            </strong>
            <span class="footer-text">{{ link.name }}</span>
          </a>
        </li>
      </ul>
    </footer>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: "Sidebar",
  props: {
    isMinimized: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const footerLinks = [
      { name: "Author @DaRo", icon: "user", link: "#" },
      { name: "Source code", icon: "code", link: "#" },
    ];

    return {
      Views,
      footerLinks,
    };
  },
});
</script>

<style lang="scss">
$sidebar-width: 10rem;
$sidebar-width-minimized: 3.25rem;

.sidebar {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  min-width: $sidebar-width;
  z-index: 10;

  footer span {
    white-space: nowrap;
    overflow: hidden;
    max-width: 10rem;
  }

  &.minimized {
    min-width: $sidebar-width-minimized;
    width: $sidebar-width-minimized;
    .text-link {
      margin-left: -10rem;
    }
    footer .footer-text {
      max-width: 0;
    }
  }
}
</style>
