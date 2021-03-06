import Axios from "axios";
import { useState } from "react";
console.log(process.env.NODE_ENV);
export function useApi(config) {
  const baseURL =
    (config && config.baseURL) ||
    (process.env.NODE_ENV === "development"
      ? `${process.env.REACT_APP_DEV_API_PROTOCOL}://${process.env.REACT_APP_DEV_API_HOST}`
      : `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}`);

  console.log(baseURL);

  return Axios.create({
    baseURL: baseURL,
    timeout: 120000,
    headers: { "Content-Type": "application/json" },
  });
}

export const AXIOS_STATUS = {
  IDLE: 0,
  LOADING: 1,
  ERROR: 2,
  FINISHED: 3,
};

export default function useAxios() {
  const [status, setStatus] = useState(AXIOS_STATUS.IDLE);
  const reset = () => setStatus(AXIOS_STATUS.IDLE);
  const api = useApi();
  api.interceptors.request.use(
    (config) => {
      setStatus(AXIOS_STATUS.LOADING);
      return config;
    },
    (error) => {
      setStatus(AXIOS_STATUS.ERROR);
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      setStatus(AXIOS_STATUS.FINISHED);

      return response;
    },
    (error) => {
      setStatus(AXIOS_STATUS.ERROR);
      return Promise.reject(error);
    }
  );

  return [status, api, reset];
}

export function useHttpMethod(method) {
  const [status, api] = useAxios();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const baseFn = function (url, requestData) {
    return api[method](url, requestData)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  };
  return {
    loading: status === AXIOS_STATUS.LOADING,
    send: baseFn,
    data,
    error,
  };
}

export function useHttpGet() {
  return useHttpMethod("get");
}

export function useHttpPost() {
  return useHttpMethod("post");
}
