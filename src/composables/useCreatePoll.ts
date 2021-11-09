import { ref, Ref } from "vue";
import { IOption, PollTypes } from "@/types";
import { meterPollOptions } from "@/data";

interface IuseCreatePoll {
  title: Ref<string>;
  description: Ref<string>;
  isLimitedByTime: Ref<boolean>;
  isLiveResult: Ref<boolean>;
  pollOptions: Ref<IOption[]>;
  createPollHandler: createPollHandler;
}

type createPollHandler = (additionData?: Record<string, any>) => void;

export default function useCreatePoll({
  type,
}: {
  type: PollTypes;
}): IuseCreatePoll {
  const title = ref<string>("");
  const description = ref<string>("");
  const isLimitedByTime = ref<boolean>(false);
  const isLiveResult = ref<boolean>(false);
  const pollOptions = ref<IOption[]>(meterPollOptions);

  const createPollHandler: createPollHandler = async (additionData = {}) => {
    const data = {
      type,
      title: title.value,
      description: description.value,
      isLimitedByTime: isLimitedByTime.value,
      isLiveResult: isLiveResult.value,
      options: pollOptions.value,
      ...additionData,
    };
    console.log("SUBMITING POLL");
    console.log(data);
  };

  return {
    title,
    description,
    isLimitedByTime,
    pollOptions,
    isLiveResult,
    createPollHandler,
  };
}
