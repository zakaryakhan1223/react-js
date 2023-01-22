import React from "react";
import Button from "../commen/button/Button";

import "./style.css";

const Project = () => {
  return (
    <div id="project_gallery">
      <div className="project-Main" >
        <div className="project-image">
          <div className="project-card1">
            <img src={require("../../image/image1.jpeg")} alt="" />
            <div className="project-text1">
              <p style={{ color: "#8832E6" }}>Tesla Inc.</p>
              <p style={{ color: "gray" }}>Ad Campaign</p>
            </div>
            <h2 style={{ color: "#12566B" }}>
              Personalized Ad Campaign
              <br /> using Google AdWords
            </h2>
            <div className="project-text2">
              <p style={{ color: "gray" }}>90 DAYS CAMPAIGN</p>
              <p style={{ color: "gray" }}>NEW YORK</p>
            </div>
            <br />
            <Button
              height="35px"
              width="80%"
              title="Read Case Study"
              color="white"
              background="#8832E6"
            />
          </div>
          <div className="project-card2">
            <img src={require("../../image/image1.jpeg")} alt="" />
            <div className="project-text1">
              <p style={{ color: "#8832E6" }}>Tesla Inc.</p>
              <p style={{ color: "gray" }}>Ad Campaign</p>
            </div>
            <h2 style={{ color: "#12566B" }}>
              Personalized Ad Campaign
              <br /> using Google AdWords
            </h2>
            <div className="project-text2">
              <p style={{ color: "gray" }}>180 DAY CAMPAIGN</p>
              <p style={{ color: "gray" }}>PALO ALTO</p>
            </div>
            <br />
            <Button
              height="35px"
              width="80%"
              title="Read Case Study"
              color="white"
              background="#8832E6"
            />
          </div>
        </div>
        <div className="project-text">
          <div>
            <h4 style={{ color: "#8832E6" }}>Our Portfolio</h4>
            <h2 style={{ color: "#12566B" }}>
              We've done some <br />
              <span style={{ color: "#8832E6" }}>amazing projects.</span>
            </h2>
            <p style={{ color: "gray" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore
              <br /> magna aliqua enim ad minim veniam.
            </p>
            
          </div>
          <div className="icon-view">
            <a href="/">View all Projects ......</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
