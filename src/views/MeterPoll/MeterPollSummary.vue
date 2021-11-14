<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-primary font-bold text-xl">Your Results</h1>
    <div
      class="meter-poll-card"
      v-for="({ option, val }, index) in sortedList"
      :key="option.name"
    >
      <PollOption
        :name="option.name"
        :imageSrc="option.imageSrc"
        :index="index + 1"
        :showContentRight="true"
      >
        <template #content-right>
          <div class="flex justify-center items-center w-full text-sm">
            {{ val }}%
          </div>
        </template>
      </PollOption>
      <div class="meter-bar"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { IOption } from "@/types";
import { Views } from "@/router/viewNames";
import PollOption from "@/components/PollOptions/PollOption.vue";

export default defineComponent({
  name: Views.POLL_SUMMARY.METER,
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
    const sortedList = computed(() => {
      return props.options
        .map((option) => ({ option, val: props.submittingData[option.name] }))
        .sort((a, b) => b.val - a.val);
    });

    return {
      sortedList,
    };
  },
});
</script>
<style lang="scss">
.meter-poll-card {
  position: relative;
  .meter-bar {
    height: 0.25rem;
    width: 50%;
    background: red;
  }
}
</style>
