import { ref, onBeforeUnmount } from "vue";
import { ICall, IuseAPICall, callType } from "@/types/apiCall";

export default function useAPICall<R, B = void>({
  method = "GET",
  token = false,
  url,
}: ICall): IuseAPICall<R, B> {
  const isLoading = ref<boolean>(false);
  const timeout = ref<number | null>(null);

  const call: callType<R, B> = async (data, body) => {
    const headers: Record<string, string> = {};
    if (token) {
      const tokenString = localStorage.getItem("token");
      if (tokenString) headers["Authorizations"] = tokenString;
    }

    console.log(`fetching... Method: ${method} => ${url}`);
    if (body) console.log("width body: ", body);
    isLoading.value = true;
    return new Promise((resolve) => {
      timeout.value = setTimeout(() => {
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
