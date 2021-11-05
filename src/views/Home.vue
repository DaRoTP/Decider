<template>
  <div class="home">
    <h1>Hello there</h1>
    <p>this is a welcome page</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Views } from "@/router/viewNames";

export default defineComponent({
  name: Views.MAIN.HOME,
});
</script>
