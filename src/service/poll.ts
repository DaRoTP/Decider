import useAPICall from "@/composables/useAPICall";
import { binaryPollWithTimeLimit } from "@/data/index";
import { IOptionsReturn, IuseAPICall } from "@/types/apiCall";
import { Ref } from "vue";

interface IuseAPICallNotParams<T> extends IuseAPICall<T> {
  isLoading: Ref<boolean>;
  call: () => Promise<T>;
}

export const getPollService = (): IuseAPICallNotParams<IOptionsReturn> => {
  const { isLoading, call: apiCall } = useAPICall<IOptionsReturn>({
    method: "GET",
    url: "http:getPolls",
  });
  const call = () => apiCall(binaryPollWithTimeLimit);
  return { isLoading, call };
};
