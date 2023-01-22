import React from "react";
import Mediacard from "../mediacards/MediaCards";
import gellery1 from "../../image/gallery1.avif";
import gellery2 from "../../image/gallery2.avif";
import gellery3 from "../../image/gallery3.avif";

import "./style.css";

const Media = () => {
  return (
    <div>
      <div className="cardss">
        <Mediacard
          img={gellery1}
          title="SEO"
          h2="Optimizing your website for your main keyword
"
        p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
        <Mediacard
          img={gellery2}
          title="Advertising"
          h2="Creating The perfect advertisement campaign
"
        p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
        <Mediacard
          img={gellery3}
          title="Social Media"
          h2="Efficient management of your social media assets
"
        p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
      </div>
    </div>
  );
};
export default Media;
