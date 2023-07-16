import axios from "axios";

const useApi = () => {
  const api = axios.create();
  api.defaults.baseURL = "https://ecommerce.udemig.dev/api/v2/";
  api.defaults.headers["accept"] = "application/json";
  return api;
};

export default useApi;
