import AsyncStorage from "@react-native-async-storage/async-storage";

import { ASYNC_STORAGE_TOKEN } from "src/constants";
import { storeData, retrieveData, removeData } from "src/helpers";

export const getToken = (): Promise<string | null> =>
  retrieveData(ASYNC_STORAGE_TOKEN) as String;

export const setToken = (token: string): Promise<void> =>
  storeData(ASYNC_STORAGE_TOKEN, token);

export const clearToken = (): Promise<void> => removeData(ASYNC_STORAGE_TOKEN);
