import { ACCESS_TOKEN } from "../constants/GlobalConstants";
import { AccessToken } from "../interfaces/AccessToken";
import { setHeader } from "./ApiService";

const jwtToken = localStorage.getItem(ACCESS_TOKEN);

if (jwtToken) {
  setHeader("Authorization", `Bearer ${jwtToken}`);
}

export const setToken = (token: AccessToken) => {
  localStorage.setItem(ACCESS_TOKEN, token.accessToken);
  setHeader("Authorization", `Bearer ${token.accessToken}`);
};

export const getToken: () => AccessToken | undefined = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  if (!token) {
    return undefined;
  }

  return {
    accessToken: token,
  };
};
