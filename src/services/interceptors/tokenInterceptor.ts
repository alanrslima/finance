import { AxiosError, AxiosInstance } from 'axios';
import { getSession } from 'next-auth/react';

export function addTokenInterceptor(api: AxiosInstance, ctx): AxiosInstance {
  api.interceptors.request.use(
    async (config) => {
      try {
        /** @param {import("types/session").Session} Session */
        const session = await getSession(ctx);

        if (!session) {
          return { ...config };
        }

        return {
          ...config,
          headers: { ...config?.headers, Authorization: `Bearer ${session?.token}` },
        };
      } catch {
        return { ...config };
      }
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return api;
}
