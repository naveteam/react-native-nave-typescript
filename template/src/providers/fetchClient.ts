import axios from 'axios';

import { getToken } from 'src/utils';

const provider = axios.create({
  baseURL: 'YOUR API URL'
});

provider.interceptors.request.use(async ({ headers, ...config }) => {
  const token = await getToken();

  return {
    ...config,
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

provider.interceptors.response.use(
  response => response?.data,
  err => Promise.reject(err?.response?.data)
);

export default provider;
