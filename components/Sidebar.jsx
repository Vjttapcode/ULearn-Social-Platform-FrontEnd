import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css"; // Đảm bảo file CSS này nằm đúng đường dẫn

const Sidebar = ({ username, onLogout }) => {
  return (
    <aside className="sidebar">
      <div className="sidebarLogo">
        <a href="/home">ULearn</a>
      </div>
      <div className="sidebar-user">
        <p>
          Xin chào, <strong>{username}</strong>
        </p>
        <button onClick={onLogout} className="logout-btn">
          Đăng xuất
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/profile">User Profile</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/new-post">Posts</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
