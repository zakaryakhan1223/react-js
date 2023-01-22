import React from "react";

import "./style.css";

const Link = (props) => {
  return (
    <div className="links-props">
      <a href={props.href}>
        {props.title} <img src={props.img} alt="" />
      </a>
    </div>
  );
};
export default Link;
