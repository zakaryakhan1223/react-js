import React from "react";
import "./style.css";

const Question = () => {
  return (
    <div>
      <div className="question_main">
        <div className="question_image_side">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWZHOKLidZtgPtG_6KiZSYRDz3gFF-mOdrQ&usqp=CAU" alt="" />
        </div>
        <div className="question_msg_side">
        <h4
            style={{
              color: "rgb(82, 8, 167)",
            }}
          >
            FAQ s
          </h4>
          <h2 style={{ color: "#09302E" }}>
            DO you have
            <span style={{ color: "rgb(82, 8, 167)" }}> Questions?</span>
            <br />
            
          </h2>
          <p>
            Here are what some of our amazing customers are saying about our
            marketing
            <br /> professionals. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br /><br />
          <h3>Is lunch provide free of cost?</h3>
          <h3>Do you have 2 Bedroom suites?</h3>
          <h3>Are Wi-Fi costs included in the price?</h3>
          <h3>Where can I reach you for support?</h3>
        </div>
      </div>
    </div>
  );
};

export default Question;
