import React from "react";
import { useState } from "react";
import vaLogo from "../../../assets/logo_sample.png";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { links } from "../../../assets/data";
import {Link} from "react-router-dom";

import "./navbar.css";

const NavbarHome = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

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
          <div className="navbar__button">
            <Link to="/login" className="btn btn-primary">Login</Link>
          </div>
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
