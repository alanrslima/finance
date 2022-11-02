import { AxiosError, AxiosInstance } from 'axios';
import { ERROR_CODE_CSRF_INVALID } from 'config/constants';

type QueueProps = { onSuccess: () => void; onFailure: (err: AxiosError) => void };

export function addCSRFInterceptor(api: AxiosInstance, fetcher: any): void {
  let isFetching = false;
  let failedCSRFRequestQueue: QueueProps[] = [];

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError): Promise<unknown> => {
      if (process.browser && error?.response?.data?.code === ERROR_CODE_CSRF_INVALID) {
        const originalConfig = error.config;

        if (!isFetching) {
          isFetching = true;

          fetcher()
            .then(() => {
              failedCSRFRequestQueue?.forEach((request) => request.onSuccess());
              failedCSRFRequestQueue = [];
            })
            .catch((err: AxiosError) => {
              failedCSRFRequestQueue?.forEach((request) => request.onFailure(err));
              failedCSRFRequestQueue = [];
            })
            .finally(() => {
              isFetching = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedCSRFRequestQueue.push({
            onSuccess: () => {
              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }
      return Promise.reject(error);
    }
  );
}
