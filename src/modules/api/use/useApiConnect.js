const token = localStorage.getItem("token");
import axios from "axios";

export const useApiConnect = () => {
  var axiosImage = axios.create({
    baseURL: `http://${process.env.VUE_APP_BACK_API_URL}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
  var axiosWithoutToken = axios.create({
    baseURL: `http://${process.env.VUE_APP_BACK_API_URL}`,
  });
  var axiosInstance = axios.create({
    baseURL: `http://${process.env.VUE_APP_BACK_API_URL}`,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  async function get(endpoint) {
    return axiosInstance.get(endpoint);
  }

  async function post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  }

  async function put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  }
  async function patch(endpoint, body) {
    return axiosInstance.patch(endpoint, body);
  }

  async function delet(endpoint) {
    return axiosInstance.delete(endpoint);
  }

  async function postimage(endpoint, body) {
    return axiosImage.post(endpoint, body);
  }

  async function getWithoutToken(endpoint) {
    console.log(endpoint);
    return endpoint;
    // return axiosWithoutToken.get(endpoint);
  }

  async function postWithoutToken(endpoint, body) {
    return axiosWithoutToken.post(endpoint, body);
  }

  async function putWithoutToken(endpoint, body) {
    return axiosWithoutToken.put(endpoint, body);
  }

  return {
    get,
    post,
    put,
    patch,
    delet,
    getWithoutToken,
    postWithoutToken,
    putWithoutToken,
    postimage,
  };
};
