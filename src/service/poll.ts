import useAPICall from "@/composables/useAPICall";
import {
  IOptionsReturn,
  IuseAPICallNoParams,
  IuseAPICallWithPayload,
  IOption,
} from "@/types";
import {
  binaryPollWithTimeLimit,
  selectPollWithTimeLimit,
  meterPollWithTimeLimit,
  binaryPollOptions,
  meterPollOptions,
  selectPollOptions,
} from "@/data/index";

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
): IuseAPICallNoParams<IOption[] | IOption[][]> => {
  const { isLoading, call: apiCall } = useAPICall<IOption[] | IOption[][]>({
    method: "GET",
    url: `/poll/${pollId}/options`,
  });
  const call = () => apiCall(selectPollOptions);
  return { isLoading, call };
};

interface ICreatePollPayload {
  type: string;
  title: string;
  description?: string;
  isLimitedByTime: boolean;
  isLiveResult: boolean;
  options: IOption[];
  endDate?: string;
  maxChoice?: number;
}

interface ICreatePollReturn {
  id: string;
  name: string;
  description: string;
}

const createPollReturn = {
  id: "69",
  name: "New test poll",
  description: "some test description hello there", 
};

export const createPollService = (): IuseAPICallWithPayload<
  ICreatePollReturn,
  ICreatePollPayload
> => {
  const { isLoading, call: apiCall } = useAPICall<
    ICreatePollReturn,
    ICreatePollPayload
  >({
    method: "POST",
    url: `/poll/`,
  });
  const call = (payload: ICreatePollPayload) => apiCall(createPollReturn, payload);
  return { isLoading, call };
};
