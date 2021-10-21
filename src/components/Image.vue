<template>
  <img :src="src" @error="imageLoadError" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    defaultImage: {
      type: String,
      default: "../assets/images/broken-image.svg",
    },
  },
  setup(props) {
    const imageLoadError = (e: any) => {
      e.target.src = props.defaultImage;
    };
    return {
      imageLoadError,
    };
  },
});
</script>

<style scoped></style>
