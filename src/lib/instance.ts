import axios from "axios";
import { BASE_URL } from "./constants";

const token = import.meta.env.VITE_API_KEY;
const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
