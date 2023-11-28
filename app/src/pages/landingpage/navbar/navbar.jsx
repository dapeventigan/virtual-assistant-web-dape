import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import vaLogo from "../../../assets/logo_sample.png";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { links } from "../../../assets/data";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import "./navbar.css";

const NavbarHome = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loginLocation, setLoginLocation] = useState("");
  const navigate = useNavigate();

  console.log(userDetails);

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/verifylogin").then((res) => {
      try {
        if (res.data !== "User not found") {
          console.log(res.data);
          setUserDetails(res.data);
          setIsUserLoggedIn(true);
          if (res.data.role === "admin") {
            setLoginLocation("/admindashboard");
          } else if (res.data.role === "applyUser") {
            setLoginLocation("/applyhome");
          } else if (res.data.role === "joinUser") {
            setLoginLocation("/joinhome");
          } else {
            Cookies.remove("token");
            window.location.reload();
            setLoginLocation("/");
          }
        } else {
          setIsUserLoggedIn(false);
          navigate("/");
        }
      } catch (error) {
        //TODO: Will add popup error that you've been logged out
        console.log(error);
        Cookies.remove("token");
        window.location.reload();
        setLoginLocation("/");
      }
    });
  }, [navigate]);

  return (
    <nav>
      <div className="container navbar__container">
        <div className="navbar__contents">
          <div className="navbar__logo">
            <a href="#header" onClick={() => setisNavOpen(false)}>
              <img src={vaLogo} alt="" />
            </a>
          </div>
          <div className="navbar__link">
            <ul
              className={`navbar__links ${
                isNavOpen ? "show__nav" : "hide__nav"
              }`}
            >
              {links.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <a
                      href={path}
                      onClick={() => setisNavOpen((prev) => !prev)}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {isUserLoggedIn ? (
            <Link to={loginLocation} className="btn btn-primary">
              Logged In
            </Link>
          ) : (
            <div className="navbar__button">
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </div>
          )}

          <button
            className="btn__bars"
            onClick={() => setisNavOpen((prev) => !prev)}
          >
            {isNavOpen ? <MdOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
