import { ref, onBeforeUnmount } from "vue";
import { ICall, IuseAPICall, callType } from "@/types/apiCall";

export default function useAPICall<R, B = void>({
  method = "GET",
  url,
}: ICall): IuseAPICall<R, B> {
  const isLoading = ref<boolean>(true);
  const timeout = ref<number | null>(null);

  const call: callType<R, B> = async (data, body) => {
    console.log(`fetching... Method: ${method} => ${url}`);
    if (body) console.log("width body: ", body);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        isLoading.value = false;
      }, 1000);
    });
  };

  onBeforeUnmount(() => {
    if (timeout.value !== null) clearTimeout(timeout.value);
  });

  return {
    isLoading,
    call,
  };
}
