import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-mock-interview-k2fi.onrender.com/api",
});

export default api;