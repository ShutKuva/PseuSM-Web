import { HubConnectionBuilder, MessageHeaders } from "@microsoft/signalr";
import { getToken } from "./TokenService";

if (!process.env.REACT_APP_MAIN_API) {
  throw new Error("Unable to get API reference");
}

export const createConnection = (relativePath: string) => {
  const token = getToken();
  if (token) {
    const connection = new HubConnectionBuilder()
      .withUrl(process.env.REACT_APP_MAIN_API_URL + relativePath, {
        headers: {
          Authorization: token.accessToken,
        },
      })
      .build();
    return connection;
  }

  return undefined;
};
