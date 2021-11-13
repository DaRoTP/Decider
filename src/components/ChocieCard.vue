<template>
  <div class="choice-card-wrapper cursor-pointer">
    <div class="choice-card-image-wrapper">
      <img :src="imageSrc" class="h-full object-cover shadow-md" />
    </div>
    <h1 class="font-bold text-center">
      {{ title }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChocieCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    imageSrc: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
$rounded: 0.7rem;
$lighter-primary: #2247E7;

.choice-card-wrapper {
  position: relative;
  border-radius: $rounded;
  .choice-card-image-wrapper {
    background: white;
    height: 20rem;
    width: 25rem;
    position: relative;
    display: block;
    border-radius: $rounded;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 0 0 $primary;
      transition: all 0.1s ease-in-out;
      border-radius: $rounded;
    }
    img {
      border-radius: $rounded;
    }
  }
  h1 {
    font-size: 1.2rem;
    transition: all 0.1s ease-in-out;
    position: absolute;
    width: 100%;
    color: $primary;
  }

  &:hover {
    box-shadow: 0 0 10px 3px rgba($lighter-primary, 0.6);
    .choice-card-image-wrapper::after {
      // box-shadow: inset 0 0 0 0.5rem $lighter-primary;
    }
    h1 {
      color: $lighter-primary;
    }
  }
}
</style>
