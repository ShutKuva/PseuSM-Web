import { HubConnectionBuilder } from "@microsoft/signalr";

if (!process.env.REACT_APP_MAIN_API) {
  throw new Error("Unable to get API reference");
}

export const createConnection = (relativePath: string) => {
  const connection = new HubConnectionBuilder()
    .withUrl(process.env.REACT_APP_MAIN_API_URL + relativePath, {})
    .build();

  connection.onclose = (error) => {
    console.log(error);
  };

  return connection;
};
