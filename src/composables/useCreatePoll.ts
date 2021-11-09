import { ref, Ref } from "vue";
import { IOption, PollTypes } from "@/types";
import { meterPollOptions } from "@/data";
import { createPollService } from "@/service";

interface IuseCreatePoll {
  title: Ref<string>;
  endDate: Ref<string>;
  description: Ref<string>;
  isLimitedByTime: Ref<boolean>;
  isLiveResult: Ref<boolean>;
  pollOptions: Ref<IOption[]>;
  createPollHandler: createPollHandler;
  isLoading: Ref<boolean>;
}

type createPollHandler = (additionData?: Record<string, any>) => void;

export default function useCreatePoll({
  type,
}: {
  type: PollTypes;
}): IuseCreatePoll {
  const title = ref<string>("");
  const description = ref<string>("");
  const endDate = ref<string>("");
  const isLimitedByTime = ref<boolean>(false);
  const isLiveResult = ref<boolean>(false);
  const pollOptions = ref<IOption[]>(meterPollOptions);

  const { isLoading, call } = createPollService();

  const createPollHandler: createPollHandler = async (additionData = {}) => {
    const data = {
      type,
      title: title.value,
      description: description.value,
      isLimitedByTime: isLimitedByTime.value,
      isLiveResult: isLiveResult.value,
      options: pollOptions.value,
      endDate: endDate.value,
      ...additionData,
    };
    await call(data);
  };

  return {
    title,
    description,
    endDate,
    isLimitedByTime,
    pollOptions,
    isLiveResult,
    isLoading,
    createPollHandler,
  };
}
