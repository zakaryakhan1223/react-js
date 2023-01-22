import React from "react";
import Button from "../commen/button/Button";

import "./style.css";

const MediaCard = (props) => {
  return (
    <div>
      <div className="media_cards">
        <img src={props.img} alt="/" />
        <p>{props.title}</p>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
        <Button title='Read Post' height='30px' width='100px' color='white' background='rgb(43, 75, 165)'/>
      </div>
    </div>
  );
};
export default MediaCard;
