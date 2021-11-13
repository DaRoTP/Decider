<template>
  <div class="meter-option-card">
    <img
      class="object-cover shadow-md rounded-md"
      :src="imageSrc"
      alt="option"
    />
    <div class="card-1 shadow-md rounded-md"></div>
    <div class="card-2 shadow-md rounded-md"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MeterOptionCard",
  props: {
    imageSrc: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss">
$card-width: 22rem;
$card-height: 22rem;
.meter-option-card {
  position: relative;
  width: $card-width + 6.5rem;
  height: $card-height + 4rem;

  %card {
    top: 1rem;
    left: 1rem;
    width: $card-width;
    height: $card-height;
    position: absolute;
  }
  img {
    @extend %card;
    z-index: 3;
    transform: rotate(-3deg);
  }
  .card-1 {
    @extend %card;
    background: rgb(223, 225, 247);
    transform: rotate(10deg) translateX(4rem);
  }
  .card-2 {
    @extend %card;
    transform: rotate(4deg) translateX(2rem);
    background: rgb(176, 180, 231);
  }
}
</style>
