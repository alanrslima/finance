import { AxiosError, AxiosInstance } from 'axios';
import StatusCodes from 'http-status-codes';
import { getCookies } from 'cookies-next';
import { AUTH_REFRESH_TOKEN_NAME, AUTH_TOKEN_NAME, ERROR_CODE_TOKEN_EXPIRED } from 'config/constants';
import { RefreshTokenResponse } from 'types/refreshToken';
import { clearAuthCookies, setAuthCookies } from '../auth/authCookies';

type QueueProps = { onSuccess: (successToken: string) => void; onFailure: (err: AxiosError) => void };

export function addAuthInterceptor(api: AxiosInstance, ctx = undefined): void {
  let isRefreshing = false;
  let failedRequestQueue: QueueProps[] = [];
  let cookies = null;

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError): Promise<unknown> => {
      if (error?.response?.status === StatusCodes.UNAUTHORIZED) {
        cookies = getCookies(ctx);

        if (error?.response?.data?.code === ERROR_CODE_TOKEN_EXPIRED) {
          const refreshToken = cookies[AUTH_REFRESH_TOKEN_NAME];
          const token = cookies[AUTH_TOKEN_NAME];

          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            // eslint-disable-next-line no-param-reassign
            api.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;

            api
              .post<RefreshTokenResponse>('/auth/refresh', {
                token,
              })
              .then((response) => {
                const { token: newToken, refreshToken: newRefreshToken } = response?.data || {};

                setAuthCookies(newToken, newRefreshToken, ctx);

                // eslint-disable-next-line no-param-reassign
                api.defaults.headers.common.Authorization = `Bearer ${newToken}`;

                failedRequestQueue?.forEach((request) => request.onSuccess(newToken));
                failedRequestQueue = [];
              })
              .catch((err) => {
                failedRequestQueue?.forEach((request) => request.onFailure(err));
                failedRequestQueue = [];

                clearAuthCookies();
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestQueue.push({
              onSuccess: (successToken: string) => {
                const newConfig = {
                  ...originalConfig,
                  headers: {
                    ...originalConfig.headers,
                    Authorization: `Bearer ${successToken}`,
                  },
                };
                resolve(api(newConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        }
      }
      return Promise.reject(error);
    }
  );
}
