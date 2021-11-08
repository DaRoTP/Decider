import { ref, Ref } from "vue";
import { IOption } from "@/types";
import { meterPollOptions } from "@/data";

interface IuseCreatePoll {
  title: Ref<string>;
  description: Ref<string>;
  isLimitedByTime: Ref<boolean>;
  pollOptions: Ref<IOption[]>;
}

export default function useCreatePoll(): IuseCreatePoll {
  const title = ref<string>("");
  const description = ref<string>("");
  const isLimitedByTime = ref<boolean>(false);
  const pollOptions = ref<IOption[]>(meterPollOptions);

  return {
    title,
    description,
    isLimitedByTime,
    pollOptions,
  };
}
