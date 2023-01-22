import React from "react";

import "./style.css";

const Button = (props) => {
  return <div className="header-btn" style={{height:props.height,width:props.width,border:props.border,color:props.color,background:props.background,}}>
    {props.title}
  </div>;
};
export default Button;
