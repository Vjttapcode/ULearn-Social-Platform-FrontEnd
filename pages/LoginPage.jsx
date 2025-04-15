import { useState } from "react";
import "../styles/SignIn.css";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { getCurrentUser } from "../services/getCurrentUser";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    container.classList.add("active");
  };

  const handleLogin = () => {
    container.classList.remove("active");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      localStorage.setItem("accessToken", response.token);
      const user = await getCurrentUser();
      if (user && user.userInfo) {
        navigate("/home");
      } else {
        navigate("/completeprofile");
      }
    } catch (error) {
      setErrorMessage(error.message || "Login failed!");
    }
  };
  return (
    <>
      <section>
        <div className="container" id="container">
          <Signup />
          <div className="form-container sign-in">
            <form onSubmit={handleSubmit}>
              <h1>Sign In</h1>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#">Forget Your Password?</a>
              <button type="submit">Sign In</button>
              {errorMessage && <p>{errorMessage}</p>}
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className="hidden" id="login" onClick={handleLogin}>
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, ULearner!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button
                  className="hidden"
                  id="register"
                  onClick={handleRegister}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginPage;
