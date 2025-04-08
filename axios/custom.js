import axios from "axios";

// Cấu hình axios
export const apiClient = axios.create({
  baseURL: "http://localhost:8080/api", // Thay bằng URL API thực tế
  headers: {
    "Content-Type": "application/json",
  },
});
