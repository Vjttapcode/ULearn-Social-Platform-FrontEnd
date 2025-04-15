import React, { useState } from "react";
import "../styles/CompleteProfile.css";
import { postInfo } from "../services/postUserInfo";
import { uploadImage } from "../services/imageService";
import { Navigate, useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!avatar) {
      setMessage("User must insert an avatar!");
      return;
    }
    try {
      const imageResponse = await uploadImage(avatar);
      const imageId = imageResponse.imageId;
      if (!imageId) {
        setMessage("The server cannot process the picture you inserted");
        return;
      }

      const userInfo = {
        name: name,
        bio: bio,
        university: university,
        imageId: imageId,
      };

      const userResponse = await postInfo(userInfo);
      setMessage("Successfully");
      localStorage.setItem("user", userInfo);
      navigate("/signin");
    } catch (error) {
      setMessage(`There is an error occur: ${error.message}`);
    }
  };
  return (
    <div className="userinfo">
      <h1>Introduce yourself</h1>
      {message && <p className="message">{message}</p>}
      <div encType="multipart/form-data">
        <form onSubmit={handleSubmit}>
          <div className="userfill">
            <label htmlFor="avatar">Insert your favourite photo</label>
            <br />
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            <label htmlFor="name">What should people call you?</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <label htmlFor="university">Where are you studying now?</label>
            <br />
            <input
              type="text"
              id="university"
              name="university"
              placeholder="University"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              required
            ></input>
            <label htmlFor="bio">
              What will you tell everyone about yourself
            </label>
            <br />
            <textarea
              id="bio"
              name="bio"
              placeholder="Biography"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
export default CompleteProfile;
