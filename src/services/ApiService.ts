import axios from "axios";

if (!process.env.REACT_APP_MAIN_API) {
  throw new Error("Unable to get API reference");
}

const api = axios.create({
  baseURL: process.env.REACT_APP_MAIN_API,
});

const setHeader = (name: string, value: string) => {
  api.defaults.headers[name] = value;
};

export { api, setHeader };
