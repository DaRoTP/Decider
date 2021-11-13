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

@mixin card-slide($name, $translate-x, $rotate) {
  @keyframes #{$name} {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX($translate-x) rotate($rotate);
    }
  }
}

@include card-slide(image-slide, -4rem, -10deg);
@include card-slide(card-1-slide, -2rem, -2deg);
@include card-slide(card-2-slide, 0, 4deg);

.meter-option-card {
  position: relative;
  width: $card-width + 6.5rem;
  height: $card-height + 4rem;

  %card {
    top: 2rem;
    right: 1rem;
    width: $card-width;
    height: $card-height;
    position: absolute;
  }
  img {
    @extend %card;
    z-index: 3;
    animation: image-slide 0.5s forwards 0.1s;
  }
  .card-1 {
    @extend %card;
    z-index: 2;
    background: rgb(223, 225, 247);
    animation: card-1-slide 0.5s forwards 0.1s;
  }
  .card-2 {
    @extend %card;
    z-index: 1;
    background: rgb(176, 180, 231);
    animation: card-2-slide 0.5s forwards 0.1s;
  }
}
</style>
