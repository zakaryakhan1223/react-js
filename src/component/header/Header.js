import React from "react";
import Button from "../commen/button/Button";
import Link from "../links/Link";
import logo from "../../image/log.svg";

import "./style.css";

const Header = () => {
  return (
    <div className="main-Header" id="header_link">
      <div className="header-links">
        <div className="logo-main">
          <img src={logo} alt="Connecting..." />
          <h2>Treact</h2>
        </div>
        <div className="link_main">
          <Link title="Our Track Record" href="#trackRecord" />
          <Link title="Professinol Services" href="#profissonal" />
          <Link title="Our Experties" href="#our_experties" />
          <Link title="Amazing Project" href="#project_gallery" />
        </div>
        <div className="header-button">
          <div className="btn">
            <Button
              title="Hire Us"
              width="100px"
              height="35px"
              color="#fff"
              background="blue"
            />
            <button className="button_fixd">
              <a href="#header_link">TOP</a>
            </button>
          </div>
        </div>
      </div>
      <div className="text-main">
        <div className="text-side">
          <div className="paragraph">
            <div className="animate_start"></div>

            <p style={{ color: "white" }}>
              We have now launched operations in Europe
            </p>
          </div>
          <h2>Hire the best</h2>
          <div className="animat-text">
            <h2>Marketing Team.</h2>
          </div>
          <div className="custumer-btn">
            <Button
              title="Read Custumer Stories"
              height="35px"
              width="180px"
              color="blue"
              background="#fff"
            />
          </div>
        </div>
        <div className="video-side">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLplJMk1EoyjWUsh-F1EyIkvh5Qfx1CeZRkw&usqp=CAU"
              alt=""
              style={{ height: "300px", width: "80%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
