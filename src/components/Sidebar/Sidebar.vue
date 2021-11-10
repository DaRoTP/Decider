<template>
  <nav
    class="sidebar flex flex-col align-center p-2"
    :class="{ minimized: isMinimized }"
  >
    <header class="flex items-center justify-between text-xl my-2">
      <router-link :to="{ name: Views.MAIN.HOME }">
        <h1 class="font-bold flex justify-center items-center overflow-hidden">
          <fa icon="chart-pie" class="mr-1" />
          <span>DESIDER</span>
        </h1>
      </router-link>
      <fa icon="bars" @click="minimizeToggle" role="button" />
    </header>
    <ul class="flex flex-col gap-4 mt-3 flex-grow p-1">
      <slot />
    </ul>
    <footer>
      <hr class="my-3 opacity-20" />
      <ul class="flex flex-col gap-2 opacity-50">
        <li>
          <a href="#" class="flex text-xs">
            <fa icon="user" class="mr-1" />
            <span>Author @DaRo</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex text-xs">
            <fa icon="code" class="mr-1" />
            <span>Source code</span>
          </a>
        </li>
      </ul>
    </footer>
  </nav>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: "Sidebar",
  setup() {
    const isMinimized = ref(false);

    const minimizeToggle = () => {
      isMinimized.value = !isMinimized.value;
    };

    return { Views, isMinimized, minimizeToggle };
  },
});
</script>

<style lang="scss">
$sidebar-width: 12rem;
$sidebar-width-minimized: 3.7rem;
$sidebar-transition: all 0.2s ease-in-out;

.sidebar {
  background: $primary;
  height: 100%;
  color: white;
  width: $sidebar-width;
  transition: $sidebar-transition;
  overflow: hidden;
  header h1 {
    transition: $sidebar-transition;
  }

  &.minimized {
    width: $sidebar-width-minimized;

    header h1 {
      width: 0;
    }
    .nav-item {
      span {
        opacity: 0;
      }
    }
  }
}
</style>
