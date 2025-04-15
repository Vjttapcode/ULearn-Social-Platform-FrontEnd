import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/get-current-user`);
    return response.data.userInfo;
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};
