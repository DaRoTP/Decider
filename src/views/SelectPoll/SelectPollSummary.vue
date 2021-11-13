<template>
  <h1 class="text-primary font-bold text-xl mb-4">
    {{ `Your choice${selectedOptions.length > 1 ? "s" : ""}` }}
  </h1>
  <PollOption
    v-for="(option, index) in selectedOptions"
    :key="option.name"
    :name="option.name"
    :imageSrc="option.imageSrc"
    :index="index + 1"
  />
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { IOption } from "@/types";
import { Views } from "@/router/viewNames";
import PollOption from "@/components/PollOptions/PollOption.vue";

export default defineComponent({
  name: Views.POLL_SUMMARY.SELECT,
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
    const selectedOptions = computed(() =>
      props.options.filter(({ name }) => props.submittingData[name] === 1)
    );
    return {
      selectedOptions,
    };
  },
});
</script>

<style scoped></style>
