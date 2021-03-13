import http from "./instance";
import { handleHttpError } from "./httpHelpers";

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
    .post("/auth/logout", null, { skipAuthRefresh: true })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return handleHttpError(e);
    });
}

export function getUserDataService() {
  return http
    .get("/auth/me")
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return handleHttpError(e);
    });
}
