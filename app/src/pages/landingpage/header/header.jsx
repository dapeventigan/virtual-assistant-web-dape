import React, { useState, useEffect } from "react";
import Axios from "axios";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import "./header.css";
import HeaderLogo from "../../../assets/header_logo.json";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/verifylogin").then((res) => {
      if (res.data !== "User not found") {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="title__container">
          <div className="title__contents">
            <h2>Effortless Efficiency,</h2>
            <h2>Empowered by</h2>
            <h1 className="animate-charcter"> Virtual Assistants</h1>
            {isUserLoggedIn ? (
              <></>
            ) : (
              <div className="title__button">
                <Link to="/applyregister" className="btn btn-primary">
                  Apply Now
                </Link>
                <Link to="/joinregister" className="btn btn-primary">
                  Join Now
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="header__logo">
          <Lottie animationData={HeaderLogo} className="animated__logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
