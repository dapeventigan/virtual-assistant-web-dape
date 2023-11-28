import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";

const ApplyHome = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/applyuserdashboard").then((res) => {
      if (res.data !== "User not found") {
        setUserDetails(res.data);
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleLogout = (e) => {
    e.preventDefault();

    Cookies.remove("token");
    window.location.reload();
    navigate("/");
  };

  return (
    <div>
      <h1>Apply User Dashboard</h1>
      {userDetails && (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>
            Full Name:{" "}
            {`${userDetails.fname} ${userDetails.mname} ${userDetails.lname}`}
          </p>
          <p>City: {userDetails.cityName}</p>
        </div>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ApplyHome;
