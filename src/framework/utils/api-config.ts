import axios from "axios";

const { VITE_API_URL, VITE_API_VERSION, VITE_SHOP_NAME } = import.meta.env;

const Api = axios.create({
  baseURL: `${VITE_API_URL}/${VITE_API_VERSION}/${VITE_SHOP_NAME}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
});

Api.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
);

Api.interceptors.response.use(
  (response) => response.data,
  (err) => Promise.reject(err)
);

export default Api;
