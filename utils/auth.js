import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getUser = () => {
  const userData = localStorage.getItem("user");
  if (!userData) {
    return null;
  }
  try {
    const user = JSON.parse(userData);
    if (!user.token || !user.email) {
      return null;
    }
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};
