
// import axios from "axios";
// import { API_BASE_URL_API } from "../../../../../config";

// const API = axios.create({
//   baseURL: API_BASE_URL_API, 
// });

// // Attach token automatically
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default API;
import axios from "axios";
import { API_BASE_URL_API } from "../../../../../config";
import { toast } from "react-toastify";

// Create axios instance
const API = axios.create({
  baseURL: API_BASE_URL_API,
});

// Request interceptor: attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: handle 401 globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token missing or expired
      toast.error("Session expired! Please login again.");
      localStorage.removeItem("token");
      setTimeout(() => {
        window.location.href = "/login"; // redirect to login
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export default API;
