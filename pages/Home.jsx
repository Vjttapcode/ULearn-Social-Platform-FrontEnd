import React from "react";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import "../styles/Home.css"; // File CSS để định dạng bố cục trang Home
import { useNavigate } from "react-router-dom";

const Home = () => {
  const username = "Admin"; // Thông tin tên người dùng có thể được lấy từ state hoặc context
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  const samplePost = {
    author: "Dangtongthong",
    avatar:
      "https://i.pinimg.com/736x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg",
    time: "2 hour ago",
    content: "Đây là một trang web mạng xã hội tuyệt vời!",
    image:
      "https://i.pinimg.com/236x/89/fd/dd/89fdddb6c70c1fb290f6b458b6439346.jpg",
  };
  return (
    <div className="home-page">
      {/* Container cho Sidebar và nội dung chính */}
      <div className="home-container">
        {/* Sidebar với thông tin người dùng và các đường dẫn chức năng */}
        <Sidebar username={username} onLogout={handleLogout} />

        {/* Nội dung chính của trang Home */}
        <div className="main-content">
          <div>
            <h2>Welcome, {username}</h2>
          </div>
          <Post {...samplePost} />
        </div>
      </div>
    </div>
  );
};

export default Home;
