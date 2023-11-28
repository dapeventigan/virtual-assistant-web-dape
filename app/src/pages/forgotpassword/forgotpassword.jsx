import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userID, setUserID] = useState("");
  const [message, setMessage] = useState("");
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();
  const navigate = useNavigate();
  console.log(validUrl)

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const verifyEmailUrl = async () => {
      setUserID(param.id);
      try {
        const url = `http://localhost:3001/reset/${param.id}/${param.token}`;
        const data = await Axios.get(url);
        console.log(data);
        if(data.data.message === "nah"){
          setValidUrl(false);
        }else{
          setValidUrl(true);
        }
 
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };

    verifyEmailUrl();
  }, [param, validUrl]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    //EMAIL AND PASSWORD VALIDATE

    if (newPassword !== confirmPassword) {
      setMessage("Password doesn't match.");
    } else if (!/[A-Z]/.test(newPassword)) {
      setMessage("Password must contain at least one uppercase letter.");
    } else if (!/\d/.test(newPassword)) {
      setMessage("Password must contain at least one number.");
    } else if (!/[!@#$%^&*]/.test(newPassword)) {
      setMessage(
        "Password must contain at least one special character (!@#$%^&*)."
      );
    } else if (newPassword.length < 8) {
      setMessage("Password must be at least 8 characters long.");
    } else {
      setMessage("");

      try {
        const formData = new FormData();

        formData.append("password", newPassword);
        formData.append("userID", userID);
        await Axios.post("http://localhost:3001/resetPassword", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        }).then(navigate("/login"));

      } catch (error) {
        setMessage(error.message);
      }
    }
  };

  return (
    <div className="container forgotpassword__container">
      <div className="main__container">
        {validUrl ?   <div className="form__container">
          <h1>Reset your password</h1>
          <form onSubmit={handleResetPassword}>
            <div className="input__container">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <div className="password__container">
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  name="password"
                  required
                />
              </div>
            </div>
            <div className="input__container">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <div className="password__container">
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="password-toggle"
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>
              </div>
            </div>
            {message}
            <button>Cancel</button>
            <button>Submit</button>
          </form>
        </div> : <h1>basta aayusin ko front enmd</h1>}
      
      </div>
    </div>
  );
};

export default ForgotPassword;
