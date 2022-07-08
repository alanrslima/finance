import axios, { AxiosInstance } from "axios";
import { getCookies } from "cookies-next";
import { addAuthInterceptor } from "services/interceptors/authInterceptor";
import { addCSRFInterceptor } from "services/interceptors/csrfInterceptor";
import { addLocaleInterceptor } from "services/interceptors/localeInterceptor";
import { addTokenInterceptor } from "services/interceptors/tokenInterceptor";

export function createApi(ctx = undefined): AxiosInstance {
  const cookies = getCookies(ctx);

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

const fetchCSRF = async () => {
  const csrfApi = createApi();
  const response = await csrfApi.get(`/csrf-cookie`, { withCredentials: true });
  return response?.data;
};

export function setupApiClient(ctx = undefined): AxiosInstance {
  const apiInstance = createApi(ctx);

  addTokenInterceptor(apiInstance, ctx);
  addLocaleInterceptor(apiInstance);
  addCSRFInterceptor(apiInstance, fetchCSRF);
  addAuthInterceptor(apiInstance, ctx);

  return apiInstance;
}

export const api = setupApiClient();

export const getApiInstance = (ctx) => {
  if (ctx) return setupApiClient(ctx);
  return api;
};
