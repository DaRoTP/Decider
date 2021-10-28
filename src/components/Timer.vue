<template>
  <div class="flex gap-2">
    <div v-if="timeDiff.days !== undefined">
      <span>{{ timeDiff.days }}</span
      ><strong>d</strong>
    </div>
    <div v-if="timeDiff.hours !== undefined">
      <span>{{ timeDiff.hours }}</span
      ><strong>h</strong>
    </div>
    <div v-if="timeDiff.minutes !== undefined">
      <span>{{ timeDiff.minutes }}</span
      ><strong>m</strong>
    </div>
    <div v-if="timeDiff.seconds !== undefined">
      <span>{{ timeDiff.seconds }}</span
      ><strong>s</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, onMounted } from "vue";
import { secondsToDhms, ITime } from "@/utils/timeDiff";

export default defineComponent({
  name: "Timer",
  props: {
    endDate: {
      type: Date,
      required: true,
    },
  },
  setup(props, { emit }) {
    const timeDiff = ref<ITime>({});
    const timeout = ref<number | null>(null);

    const differenceTime = () => {
      const dateDiff = props.endDate.valueOf() - new Date().valueOf();
      timeDiff.value = secondsToDhms(dateDiff / 1000);
      if (timeDiff.value.seconds === undefined && timeout.value !== null) {
        emit("end-timer", true);
        clearInterval(timeout.value);
      }
    };

    onMounted(() => {
      differenceTime();
      if (
        timeDiff.value.days === undefined &&
        timeDiff.value.seconds !== undefined
      ) {
        // initial delay is 1s
        let delayTime = 1000;
        // if "hours" is not empty set interval for 1 minute
        if (timeDiff.value.hours !== undefined) delayTime = 60000;
        timeout.value = setInterval(differenceTime, delayTime);
      }
    });
    onUnmounted(() => {
      if (timeout.value !== null) clearInterval(timeout.value);
    });

    return {
      timeDiff,
    };
  },
});
</script>

<style scoped></style>
