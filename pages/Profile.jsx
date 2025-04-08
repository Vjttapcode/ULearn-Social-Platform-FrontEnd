import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";
import React, { useState, useEffect } from "react";
import { fetchUserData, updateUserData } from "../services/profileService";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    bio: "",
    university: "",
    avatar: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lấy dữ liệu người dùng khi component được render
  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    getUserData();
  }, []);

  // Xử lý cập nhật thông tin người dùng
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await updateUserData(userData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Xử lý tải ảnh đại diện mới
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="profilePage">
      <div className="profileContainer">
        <Sidebar />
        <div className="profileContent">
          <div>
            <h2>Account Setting</h2>
          </div>
          <div
            className="profile-page"
            style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}
          >
            {/* <h1 style={{ textAlign: "center" }}>Profile Settings</h1> */}

            <form onSubmit={handleSubmit}>
              {/* Avatar */}
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src={userData.avatar || "https://via.placeholder.com/150"}
                    alt="Avatar"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      border: "2px solid #ddd",
                      objectFit: "cover",
                    }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    style={{ display: "none" }}
                    id="avatar-upload"
                  />
                  <label
                    htmlFor="avatar-upload"
                    style={{ cursor: "pointer", color: "#007bff" }}
                  >
                    Upload New
                  </label>
                </div>
              </div>

              {/* Name */}
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="form-input"
                />
              </div>

              {/* Bio */}
              <div>
                <label>Bio</label>
                <textarea
                  value={userData.bio}
                  onChange={(e) =>
                    setUserData({ ...userData, bio: e.target.value })
                  }
                  placeholder="Write something about yourself"
                  className="form-input"
                />
              </div>

              {/* University */}
              <div>
                <label>University</label>
                <input
                  type="text"
                  value={userData.university}
                  onChange={(e) =>
                    setUserData({ ...userData, university: e.target.value })
                  }
                  placeholder="Enter your university"
                  className="form-input"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
