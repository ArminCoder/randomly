import http from "./instance";
import { handleHttpError } from "./httpHelpers";

function getAccessToken() {
  return localStorage.getItem("token");
}

function axiosConfig() {
  return { headers: { Authorization: `token ${getAccessToken()}` } };
}

export function loginService(data) {
  return http
    .post("https://randomlyapi.symphony.is/api/auth/login/", data, {
      skipAuthRefresh: true
    })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return handleHttpError(e);
    });
}

export function registerService(data) {
  return http
    .post("https://randomlyapi.symphony.is/api/auth/signup/", data)
    .then(res => {
      return res.data;
    })
    .catch(e => {
      return handleHttpError(e);
    });
}

export function logoutService() {
  return http
    .post(
      "https://randomlyapi.symphony.is/api/auth/logout/",
      null,
      axiosConfig()
    )
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return handleHttpError(e);
    });
}

export function getInfluencers(page = "?page=1") {
  return http
    .get(
      `https://randomlyapi.symphony.is/api/influencer/${page}`,
      axiosConfig()
    )
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return handleHttpError(e);
    });
}

export function followInfluencer(id) {
  const data = {
    user: id
  };
  return http
    .post(
      "https://randomlyapi.symphony.is/api/followings/",
      data,
      axiosConfig()
    )
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return handleHttpError(e);
    });
}
