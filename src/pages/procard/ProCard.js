import React from "react";
import "./ProCard.scss";
import Img1 from "../../assets/usercrowd website.png";
import Img2 from "../../assets/web piano.png"

function ProCard() {
  return (<div className="grid">
    <div className="card">
      <div className="img">
        <img src={Img1} alt="img" />
      </div>
      <h3>Userclowd clone</h3>
      <p> A website made with html and css.
      </p>
    </div>
    <div className="card">
      <div className="img">
        <img src={Img2} alt="img" />
      </div>
      <h3>Piano app</h3>
      <p> Html, css, javascript app with audio sound controll functionality.
      </p>
    </div>
  </div>);
}

export default ProCard;
