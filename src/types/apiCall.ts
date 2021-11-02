import { Method } from "axios";
import { Ref } from "vue";

export interface ICall {
  method?: Method;
  url: string;
}

export type callType<R, B = void> = (data: R, body?: B) => Promise<R>;

export type callTypeNoParams<R> = () => Promise<R>;

export interface IuseAPICall<R, B = void> {
  isLoading: Ref<boolean>;
  call: callType<R, B>;
}

export interface IuseAPICallNoParams<R> {
  isLoading: Ref<boolean>;
  call: callTypeNoParams<R>;
}
