import React from "react";

import "./style.css";
import Logo from "../../image/log.svg";
import Link from "../links/Link";

const Footer = () => {
  return (
    <div>
      <div className="footer1">
        <img src={Logo} alt="/" />
      </div>
      <br />
      <br />
      <div className="links_main">
        <Link title="Home" />
        <Link title="About" />
        <Link title="Contact Us" />
        <Link title="Blog" />
        <Link title="Reviwes" />
      </div><br />
      <hr />
      <div className="links_image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTMcmZ2gnh3ncjDNIKJeHkWd-CIUc9jr34A&usqp=CAU"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakTGQoOUTaXujreeoBqgkOyJ2cic5BNhdFA&usqp=CAU"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmoL1LTbpfYIUESfynbDeyeltNJQZRoTafw&usqp=CAU"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_q9wi6FmGi_iIrmr5zC2-EcuYRZxRkpPDlw&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};
export default Footer;
