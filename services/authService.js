import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Hàm xử lý đăng ký
export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Hàm xử lý đăng nhập
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
