export interface ILoginPayload {
  username: string;
  password: string;
}

export interface IRegisterPayload {
  username: string;
  password: string;
  matchingPassword: string;
}

export interface IUserReturn {
  username: string;
}

export interface IRegisterReturn {
  message: string;
}

export interface IAuthenticationReturn {
  message: string;
  user?: { username: string };
  isAuthenticated: boolean;
}
