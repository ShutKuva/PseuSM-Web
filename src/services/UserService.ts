import User from "../interfaces/User";
import LoginUser from "../interfaces/LoginUser";
import { setToken } from "./TokenService";
import { api, setHeader } from "./ApiService";
import { AccessToken } from "../interfaces/AccessToken";
import RegisterUser from "../interfaces/RegisterUser";

export const getUser: (id?: number) => Promise<User | undefined> = async (
  id?: number
) => {
  try {
    const response =
      (await api.get<User>(`users/${id ? id.toString() : "current"}`)) ??
      undefined;
    return response?.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const loginUser: (
  user: LoginUser
) => Promise<AccessToken | undefined> = async (user: LoginUser) => {
  try {
    const response =
      (await api.post<AccessToken>("auth/login", user)) ?? undefined;

    if (response) {
      setToken(response.data);
    }

    return response?.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const registerUser: (
  user: RegisterUser
) => Promise<AccessToken | undefined> = async (user) => {
  try {
    const formUserData = new FormData();

    formUserData.append("name", user.name);
    formUserData.append("login", user.login);
    formUserData.append("password", user.password);
    formUserData.append("avatar", user.avatar);

    const response =
      (await api.post<AccessToken>("auth/register", formUserData)) ?? undefined;

    if (response) {
      setToken(response.data);
    }

    return response?.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const refreshToken: () => Promise<
  AccessToken | undefined
> = async () => {
  const response = (await api.get<AccessToken>("auth/refresh")) ?? undefined;

  if (response) {
    setHeader("Authrization", response.data.accessToken);
  }

  return response?.data;
};
