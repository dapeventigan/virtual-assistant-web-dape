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
              <a href="www.facebook.com">FAQs</a>
              <a href="www.facebook.com">Contact Support</a>
              <a href="www.facebook.com">Careers</a>
              <a href="www.facebook.com">Press Inquiries</a>
            </div>

            <div className="links__content">
              <a href="www.facebook.com">Executive Assistant</a>
              <a href="www.facebook.com">Corporate Careers</a>
              <a href="www.facebook.com">Security Measures</a>
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
