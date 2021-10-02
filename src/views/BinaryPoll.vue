<template>
  <div>
    <h1>title</h1>
    <div>
      <span>O</span>
      <span>O</span>
      <span>X</span>
      <span>X</span>
      <span>2/4</span>
    </div>
    <div class="cont">
      <button>ONE</button>
      <button>TWO</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.cont {
  display: flex;
}
</style>
