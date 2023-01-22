import React from "react";
import Button from "../commen/button/Button";

import "./style.css";

const Trackrecord = () => {
  return (
    <div id="trackRecord">
      <div className="record-Main">
        <div className="record-image">
          <div className="record-Image1">
            <img
              src={require("../../image/image.png")}
              alt="/"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="record-Image2">
            <img
              src={require("../../image/image2.png")}
              alt="/"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </div>
        <div className="record-Text">
          <h3 style={{ color: "rgb(82, 8, 167)" }}>Our Track Record</h3>
          <h2>We have been doing this<br/> 
          sinse <span style={{ color: "rgb(82, 8, 167)" }}>1999.</span>
          
          </h2>
          
          <p
            style={{
              color: "rgb(44, 44, 85)",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            Corporis vero laboriosam, voluptatibus, quidem nostrum, <br />
            adipisci laborum asperiores officiis ad unde voluptates <br />
            nisi enim. Omnis odit, aliquid esse commodi modibr
            <br /> corporis!
          </p>
          <div className="recordlink-Main">
            <div className="record-links">
              <p>2282+</p>
              <p>3282+</p>
              <p>1000+</p>
            </div>
            <div className="record-link">
              <p>Clients</p>
              <p>Projects</p>
              <p>Awards</p>
            </div>
          </div><br />
          <Button height='35px' width='120px' title='Learn More' border='None' color="#fff"
              background="blue"/>
        </div>
      </div>
    </div>
    


  );
};
export default Trackrecord;
