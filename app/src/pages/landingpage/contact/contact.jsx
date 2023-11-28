import React from "react";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import PhoneImage from '../../../assets/phone.png'
import {Link} from "react-router-dom";

import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__card">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            porro quo tempora sunt, deleniti eum sequi dolorum ullam consectetur
            atque.
          </p>

          <div className="contact__details">
            <div className="contact__info">
              <ImLocation className="contact__icon" />
              <h3>Address: </h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
            </div>
            <div className="contact__info">
              <FaPhoneAlt className="contact__icon" />
              <h3>Phone: </h3>
              <h4>+63922021298 </h4>
            </div>
            <div className="contact__info">
              <GrMail className="contact__icon" />
              <h3>Email: </h3>
              <h4>sample.email@gmail.com </h4>
            </div>
            
            <div className="contact__button">
              <Link to="/joinregister" className="ased">
                Join Us
              </Link>
            </div>
          </div>
        </div>
        <div className="phone__image">
            <img src={PhoneImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
