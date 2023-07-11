import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { LOCAL_STORAGE_KEYS } from "../../constants/LocalStorageKeys";
import { authService } from "../auth";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://studapi.teachmeskills.by",
});

let isRequest = false;

const noAuthCode = 401;

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (token && config.headers.Authorization !== null) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    isRequest = false;

    return response;
  },
  async (error) => {
    if (error instanceof AxiosError) {
      const originalRequest = error.config as InternalAxiosRequestConfig<any>;

      if (error.response?.status === noAuthCode) {
        if (!isRequest) {
          const refresh = localStorage.getItem(
            LOCAL_STORAGE_KEYS.REFRESH_TOKEN
          );

          if (refresh) {
            isRequest = true;

            const { data } = await authService.refreshAccessToken(refresh);

            localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, data.access);

            return api(originalRequest);
          } else {
            localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
            localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
          }
        } else {
          localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
          localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
        }
      }
    }

    console.dir(error);

    if (!error.__CANCEL__) {
      toast.error(error?.response?.data?.detail ?? error?.message ?? "Error");
    }

    return Promise.reject(error);
  }
);

/* 
-> 401 Error 
-> check Refresh Token in local storage 
-> request new access token by refresh token
-> store new access token in local storage 
-> repeat failed request 
*/

export { api };
