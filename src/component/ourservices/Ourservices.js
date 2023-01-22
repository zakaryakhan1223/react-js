import React from "react";
import Cards from "../card/Cards";

import "./style.css";

const Ourservices = () => {
  return (
    <div>
      <div className="ourservices_main" id="profissonal">
        <div className="ourservices_text">
          <h2
            style={{
              color: "rgb(44, 44, 85)",
            }}
          >
            Our Professional{" "}
            <span style={{ color: " rgb(44, 9, 199)" }}>Services</span>
          </h2>
        </div>
        <div className="our-cards3">
          <Cards img='https://treact.owaiskhan.me/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg'
          h2='Ads Management'
          p='We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.

          '
          />
          <Cards img='https://treact.owaiskhan.me/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg' 
          h2='Video Markiting'
          p='We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.

          '/>
          <Cards img='https://treact.owaiskhan.me/static/media/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg'
          h2='Customer Relation'
          p='We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.

          '/>
        </div><br />
        <div className="cardtwo-3">
        <Cards img='https://treact.owaiskhan.me/static/media/reliable-icon.1367510a8f0a1bec76dc425d25f92f43.svg'
          h2='Pruduct OutReach'
          p='We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.

          '/>
        <Cards img='https://treact.owaiskhan.me/static/media/fast-icon.dbb971a73d4805d2fc3bcdacdb55beba.svg'
          h2='PR Campaigen'
          p='We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.

          '/>
        <Cards img='https://treact.owaiskhan.me/static/media/simple-icon.673b7e1750b2a4ef32907fc164828d00.svg'
          h2='Pruduct Expansion'
          p='We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.

          '/>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
