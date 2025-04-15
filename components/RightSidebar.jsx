import React, { useState, useEffect } from "react";
// Nếu bạn sử dụng React Router, có thể thay <a> thành <Link> từ 'react-router-dom'
import "../styles/Rightsidebar.css";

const RightSidebar = () => {
  const [documents, setDocuments] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    // Giả lập API call để lấy danh sách tài liệu
    const fetchDocuments = async () => {
      // Thay thế bằng API call thực tế (fetch, axios, ...)
      const docs = [
        { id: 1, title: "Tài liệu React Basics", link: "/docs/react-basics" },
        { id: 2, title: "Hướng dẫn CSS Layout", link: "/docs/css-layout" },
        { id: 3, title: "Thực hành NodeJS", link: "/docs/nodejs-practice" },
      ];
      setDocuments(docs);
    };

    // Giả lập API call để lấy danh sách người dùng online
    const fetchOnlineUsers = async () => {
      // Thay thế bằng API call thực tế để lấy dữ liệu người dùng online
      const users = [
        { id: 1, name: "Nguyễn Văn A", avatar: "/avatars/avatar1.jpg" },
        { id: 2, name: "Trần Thị B", avatar: "/avatars/avatar2.jpg" },
        { id: 3, name: "Lê Văn C", avatar: "/avatars/avatar3.jpg" },
      ];
      setOnlineUsers(users);
    };

    fetchDocuments();
    fetchOnlineUsers();
  }, []);

  return (
    <aside className="right-sidebar">
      <div className="sidebar-section document-section">
        <h3>Tài liệu</h3>
        <ul>
          {documents.map((doc) => (
            <li key={doc.id}>
              {/* Nếu dùng React Router, có thể sử dụng <Link to={doc.link}>{doc.title}</Link> */}
              <a href={doc.link} className="doc-link">
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section online-users-section">
        <h3>Người dùng online</h3>
        <ul>
          {onlineUsers.map((user) => (
            <li key={user.id} className="user-item">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <span className="user-name">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;
