import useAPICall from "@/composables/useAPICall";
import {
  binaryPollWithTimeLimit,
  selectPollWithTimeLimit,
  meterPollWithTimeLimit,
  binaryPollOptions,
  meterPollOptions,
  selectPollOptions,
} from "@/data/index";
import { IOptionsReturn, IuseAPICallNoParams, IOption } from "@/types";

export const getPollByIdService = (
  pollId: string
): IuseAPICallNoParams<IOptionsReturn> => {
  const { isLoading, call: apiCall } = useAPICall<IOptionsReturn>({
    method: "GET",
    url: `/poll/${pollId}`,
  });
  const call = () => apiCall(selectPollWithTimeLimit);
  return { isLoading, call };
};

export const getPollOptionsByIdService = (
  pollId: string
): IuseAPICallNoParams<IOption[][]> => {
  const { isLoading, call: apiCall } = useAPICall<IOption[][]>({
    method: "GET",
    url: `/poll/${pollId}/options`,
  });
  const call = () => apiCall(selectPollOptions);
  return { isLoading, call };
};
