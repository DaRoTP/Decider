<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-primary font-bold text-xl">Your Results</h1>
    <div class="flex flex-col gap-1">
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
            <div
              :class="[percetageClasses(val)]"
              class="flex justify-center items-center w-full text-sm font-bold"
            >
              {{ val }}%
            </div>
          </template>
        </PollOption>
        <div
          class="meter-bar"
          :class="[percetageClasses(val)]"
          :style="{ width: `${val}%` }"
        ></div>
      </div>
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

    const percetageClasses = (percentage: number) => {
      if (percentage < 40) return "low-color";
      if (percentage < 70) return "medium-color";
      else return "high-color";
    };

    return {
      sortedList,
      percetageClasses,
    };
  },
});
</script>
<style lang="scss">
.meter-poll-card {
  position: relative;
  .meter-bar {
    height: 0.25rem;
    width: 0;
  }

  .low-color {
    background: rgb(201, 114, 103);
    color: rgb(94, 32, 56);
  }

  .medium-color {
    background: rgb(255, 202, 87);
    color: rgb(95, 59, 11);
  }

  .high-color {
    background: rgb(95, 182, 102);
    color: rgb(227, 255, 229);
  }
}
</style>
