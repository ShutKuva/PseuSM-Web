import { SearchResult } from "../interfaces/SearchResult";
import { api } from "./ApiService";

export const search = async (searchString: string) => {
  const data = (await api.get<SearchResult>(`search?search=${searchString}`))
    .data;

  return data;
};
