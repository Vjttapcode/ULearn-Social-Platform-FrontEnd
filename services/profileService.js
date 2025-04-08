import { apiClient } from "../axios/custom";

// Lấy thông tin người dùng
export const fetchUserData = async () => {
  try {
    const response = await apiClient.get("/get-user-info"); // Endpoint lấy dữ liệu người dùng
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postUserData = async (userData) => {
  try {
    const response = await apiClient.post("/post-user-info", { userData });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
// Cập nhật thông tin người dùng
export const updateUserData = async (data) => {
  try {
    const response = await apiClient.put("/update-user-info", data); // Endpoint cập nhật dữ liệu người dùng
    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};
