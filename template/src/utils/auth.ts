import AsyncStorage from '@react-native-community/async-storage';

import { ASYNC_STORAGE_TOKEN } from 'src/constants';

export const getToken = (): Promise<string | null> => AsyncStorage.getItem(ASYNC_STORAGE_TOKEN);

export const setToken = (token: string): Promise<void> =>
  AsyncStorage.setItem(ASYNC_STORAGE_TOKEN, token);

export const clearToken = (): Promise<void> => AsyncStorage.removeItem(ASYNC_STORAGE_TOKEN);
