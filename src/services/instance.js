import axios from "axios";

function getAccessToken() {
  return localStorage.getItem("token");
}

getAccessToken();

const instance = axios.create({
  baseURL: process.env.MIX_API_URL,
  timeout: 30000
});

export default instance;
