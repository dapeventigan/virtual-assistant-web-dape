import React from "react";

import LogoIcon from "../../../assets/logo_sample.png";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="containter footer__container">
        <div className="footer__contents">
          <img src={LogoIcon} alt="" className="footer__logo" />
          <div className="footer__links">
            <div className="links__content">
              <a href="">FAQs</a>
              <a href="">Contact Support</a>
              <a href="">Careers</a>
              <a href="">Press Inquiries</a>
            </div>

            <div className="links__content">
              <a href="">Executive Assistant</a>
              <a href="">Corporate Careers</a>
              <a href="">Security Measures</a>
            </div>
          </div>
          <div className="footer__socials">
            <BsTwitter />
            <BsLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
