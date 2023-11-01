import React from "react";
import Lottie from "lottie-react";
import {Link} from "react-router-dom";
import "./header.css";
import HeaderLogo from "../../../assets/header_logo.json";

const header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="title__container">
          <div className="title__contents">
            <h2>Effortless Efficiency,</h2>
            <h2>Empowered by</h2>
            <h1 className="animate-charcter"> Virtual Assistants</h1>
            <div className="title__button">
              <Link to="/applyregister" className="btn btn-primary">Apply Now</Link>
              <Link to="/joinregister" className="btn btn-primary">Join Now</Link>
            </div>
          </div>
        </div>

        <div className="header__logo">
          <Lottie animationData={HeaderLogo} className="animated__logo" />
        </div>
      </div>
    </header>
  );
};

export default header;
