import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Đảm bảo đường dẫn đúng
import LoginPage from "../pages/LoginPage";
import Profile from "../pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
