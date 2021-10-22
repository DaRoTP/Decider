import { ref, Ref } from "vue";
import { IOption } from "@/types";

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
  const pollOptions = ref<IOption[]>([
    { name: "option 1", description: "option one descrition", imageSrc: "" },
    { name: "option 2", description: "option two descrition", imageSrc: "" },
    { name: "option 3", description: "option thre descrition", imageSrc: "" },
    { name: "option 4", description: "option four descrition", imageSrc: "" },
  ]);

  return {
    title,
    description,
    isLimitedByTime,
    pollOptions,
  };
}
