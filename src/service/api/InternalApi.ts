import axios, { AxiosInstance } from 'axios';

const InternalApi: AxiosInstance = axios.create({
  baseURL: process.env.INTERNAL_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

InternalApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const errorResponse = error.response;

    return Promise.reject(errorResponse);
  },
);

export default InternalApi;
