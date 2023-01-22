import React from "react";
import Button from "../commen/button/Button";
import Image from "../imageprops/Image";
import logo from "../../image/Experties.svg";

import "./style.css";

const Experties = () => {
  return (
    <div>
      <div className="Experties_Main" id="our_experties">
        <div className="experties_Text">
          <div className="text-side">
            <h4
              style={{
                color: "rgb(82, 8, 167)",
              }}
            >
              Our Experties
            </h4>
            <h2 style={{ color: "#09302E" }}>
              We have the most
              <br />
              <span style={{ color: "rgb(82, 8, 167)" }}>Professional</span>
              Markiting
              <br />
              team.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis
              <br /> voluptatibus reprehenderit ipsam doloribus expedita autem
              voluptate, corporis nulla? Ducimus quo deleniti iusto corporis
              soluta velit inventore aut repellat hic expedita.
            </p>
          </div>
          <div className="experties-link">
            <div className="pro-link">
              <Image
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10Llz42vIX7bHIccqXQ7-3nOQS9-yoUVe2w&usqp=CAU"
                height="20px"
                width="20px"
              />
              <Image
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAl9itmYZfXTmMZ2OGS1FpZG6LPgcjSwfbg&usqp=CAU"
                height="20px"
                width="20px"
              />
            </div>
            <div className="pro-text">
              <h5>
                Professionalism
                <br />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
              </h5>
              <h5>
                Affordable <br />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
              </h5>
            </div>
          </div>
          <br />
          <br />
          <div className="button-experties">
            <Button
              height="30px"
              width="140px"
              title="See Our Portfolio"
              color="white"
              background="rgb(82, 8, 167)"
            />
          </div>
        </div>
        <div className="experties_images">
          <img src={logo} alt="Connecting..." />
        </div>
      </div>
    </div>
  );
};

export default Experties;
