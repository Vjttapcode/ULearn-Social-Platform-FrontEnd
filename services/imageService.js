import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function uploadImage(avatar) {
  const formData = new FormData();
  formData.append("image", avatar);
  try {
    const response = await axios.post(`${API_BASE_URL}/image/post`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error upload image: ", error);
    return error.response.data;
  }
}
