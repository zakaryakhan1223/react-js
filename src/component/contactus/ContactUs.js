import React from "react";
import "./style.css";
import Button from "../commen/button/Button";
import Footer from "../footer/Footer";
const ContactUs = () => {
  return (
    <div className="contact_Main">
      <div className="contact_main">
        <div className="text_side">
          <p style={{ color: " rgb(7, 154, 252)" }}>Contact Us...</p>
          <br />
          <h2>
            Feel free to{" "}
            <span style={{ color: "rgb(7, 154, 252)" }}> get in touch </span>
            <br /> with us.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            cumque.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            earum?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, harum.
          </p>
          <br />
          <Button
            title="Contact Me"
            height="35px"
            width="160px"
            color="white"
            background="rgb(43, 75, 165)"
          />
        </div>
        <div className="image_side">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWZHOKLidZtgPtG_6KiZSYRDz3gFF-mOdrQ&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="footer_main">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
