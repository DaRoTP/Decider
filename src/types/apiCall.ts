import { Method } from "axios";
import { Ref } from "vue";

export interface ICall {
  method?: Method;
  url: string;
}

export type callType<R, B = void> = (data: R, body?: B) => Promise<R>;

export interface IuseAPICall<R, B = void> {
  isLoading: Ref<boolean>;
  call: callType<R, B>;
}

export interface IOptionsReturn {
  title: string;
  descirpion?: string;
  endDate?: string;
  resultPreview: boolean;
  userVoted: boolean;
  type: string;
}
