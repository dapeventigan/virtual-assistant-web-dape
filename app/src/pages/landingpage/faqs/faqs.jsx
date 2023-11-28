import React from "react";
import { MdSchool, MdWork } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

import "./faqs.css";
const FAQs = () => {
  return (
    <section id="faqs">
      <h1>Frequently Asked Questions</h1>
      <div className="container faqs__container">
        <div className="faqs__card">
          <article className="about__card">
            <BsInfoCircle className="about__icon" />
            <h5>TITLE</h5>
          </article>

          <article className="about__card">
            <MdSchool className="about__icon" />
            <h5>TITLE</h5>
          </article>

          <article className="about__card">
            <MdWork className="about__icon" />
            <h5>TITLE</h5>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
