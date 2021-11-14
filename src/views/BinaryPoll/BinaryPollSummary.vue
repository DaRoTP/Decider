<template>
  <div class="flex flex-col">
    <h1 class="text-primary text-xl font-bold">Yuor Results</h1>
    <div class="poll-card-cont">
      <PollOption
        v-for="(option, index) in results"
        :key="option.name"
        :name="option.name"
        :imageSrc="option.imageSrc"
        :index="index + 1"
        :showContentRight="index < 3"
      >
        <template v-if="index < 3" #content-right>
          <div class="medal-container flex justify-center items-center w-full">
            <fa icon="medal" />
          </div>
        </template>
      </PollOption>
    </div>
    <button
      v-if="!showFullList"
      @click="() => (showFullList = true)"
      class="text-sm underline text-gray-600 mt-2"
    >
      Show full list
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, PropType } from "vue";
import { IOption } from "@/types";
import { Views } from "@/router/viewNames";
import PollOption from "@/components/PollOptions/PollOption.vue";

export default defineComponent({
  name: Views.POLL_SUMMARY.BINARY,
  components: {
    PollOption,
  },
  props: {
    options: {
      type: Array as PropType<IOption[]>,
      required: true,
    },
    submittingData: {
      type: Object as PropType<Record<string, number>>,
      required: true,
    },
  },
  setup(props) {
    const showFullList = ref<boolean>(false);

    const sortedList = computed(() => {
      return props.options
        .map((option) => ({ option, val: props.submittingData[option.name] }))
        .sort((a, b) => b.val - a.val)
        .map(({ option }) => option);
    });

    const results = computed(() => {
      return showFullList.value
        ? sortedList.value
        : sortedList.value.slice(0, 10);
    });
    return {
      sortedList,
      showFullList,
      results,
    };
  },
});
</script>

<style lang="scss">
$winning-card-height: 3rem;
$colors: (
  1 rgb(255, 246, 196) rgb(175, 126, 21) rgb(255, 213, 27),
  2 rgb(210, 241, 255) rgb(49, 78, 102) rgb(101, 154, 207),
  3 rgb(255, 209, 196) rgb(58, 23, 23) rgb(182, 101, 81)
);

.poll-card-cont {
  @for $i from 1 through 3 {
    .poll-option:nth-child(#{$i}) {
      height: $winning-card-height;
    }
  }
  .medal-container {
    width: $winning-card-height;
  }
  @each $index, $bg, $darker, $lighter in $colors {
    .poll-option:nth-child(#{$index}) {
      background: $bg;
      color: $darker;
      .poll-option-index {
        @if (lightness($darker) > 30) {
          color: rgb(27, 27, 27);
        } @else {
          color: white;
        }
        background: $lighter;
      }
      .medal-container {
        color: $darker;
        background: $lighter;
      }
    }
  }
}
</style>
