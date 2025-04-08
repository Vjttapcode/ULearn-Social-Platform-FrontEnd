import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

// Hàm xử lý đăng ký
export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, formData);
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    throw error.response.data; // Trả về lỗi từ API
  }
};

// Hàm xử lý đăng nhập
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, {
      email,
      password,
    });
    return response.data; // Trả về dữ liệu từ API (bao gồm token)
  } catch (error) {
    throw error.response.data; // Trả về lỗi từ API
  }
};
