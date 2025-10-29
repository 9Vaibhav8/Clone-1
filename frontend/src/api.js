import axios from "axios";

const API = axios.create({ baseURL: "https://clone-1-4j4p.onrender.com/api" });

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("firebaseToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const fetchUserProfile = () => API.get("/users/profile");
