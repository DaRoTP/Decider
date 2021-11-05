import useAPICall from "@/composables/useAPICall";
import {
  IuseAPICallWithPayload,
  IuseAPICallNoParams,
  IUserReturn,
  ILoginPayload,
  IRegisterReturn,
  IRegisterPayload,
  IAuthenticationReturn,
} from "@/types";
import {
  userRegisterReturn,
  isAuthenticatedReturnTrue,
  isAuthenticatedReturnFalse,
  userReturn,
} from "@/data";

export const LoginService = (): IuseAPICallWithPayload<
  IUserReturn,
  ILoginPayload
> => {
  const { isLoading, call: apiCall } = useAPICall<IUserReturn, ILoginPayload>({
    method: "POST",
    url: "/login",
  });
  const call = (payload: ILoginPayload) => apiCall(userReturn, payload);
  return { isLoading, call };
};

export const RegisterService = (): IuseAPICallWithPayload<
  IRegisterReturn,
  IRegisterPayload
> => {
  const { isLoading, call: apiCall } = useAPICall<
    IRegisterReturn,
    IRegisterPayload
  >({
    method: "POST",
    url: "/register",
  });
  const call = (payload: IRegisterPayload) =>
    apiCall(userRegisterReturn, payload);
  return { isLoading, call };
};

export const isAuthenticatedService =
  (): IuseAPICallNoParams<IAuthenticationReturn> => {
    const { isLoading, call: apiCall } = useAPICall<IAuthenticationReturn>({
      method: "GET",
      url: "/isAuthenticated",
      token: true,
    });
    const token = localStorage.getItem("token");
    const call = () => apiCall(token ? isAuthenticatedReturnTrue : isAuthenticatedReturnFalse);
    return { isLoading, call };
  };
