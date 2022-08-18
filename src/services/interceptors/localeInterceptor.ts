import { AxiosError, AxiosInstance } from 'axios';
import Router from 'next/router';
import { isServer } from 'lib/isServer';

export function addLocaleInterceptor(api: AxiosInstance): AxiosInstance {
  api.interceptors.request.use(
    (config) => {
      if (isServer()) {
        return { ...config };
      }

      return { ...config, headers: { ...config?.headers, locale: Router.locale } };
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return api;
}
