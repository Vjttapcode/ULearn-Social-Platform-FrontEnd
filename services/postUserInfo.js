import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const postInfo = async (userInfo) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user-info/post-user-info`,
      userInfo,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
