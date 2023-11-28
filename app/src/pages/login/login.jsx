import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //PASSWORD
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  Axios.defaults.withCredentials = true;
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await Axios.post("http://localhost:3001/login", {
        email,
        password,
      }).then((res) => {
        if (res.data.status === "ok") {
          if (res.data.role === "admin") {
            navigate("/admindashboard");
          } else if (res.data.role === "applyUser") {
            navigate("/applyhome");
          } else {
            navigate("/joinhome");
          }
        } else {
        }
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="container login__container">
      <div className="main__container">
        <div className="form__container">
          <form onSubmit={handleLogin}>
            <div className="insideform__container">
              <h2>Login</h2>
              <div className="input__container">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  className="input__form"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input__container">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <div className="password__container">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="password-toggle"
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </button>
                </div>
              </div>
              <div className="forgotpassword__container">
                <Link to="/resetpasswordverify">Forgot Password</Link>
              </div>
              {error && <div>{error}</div>}
              <div className="button__container">
                <button>Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
