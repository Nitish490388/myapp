import React from "react";
import img from "../../assets/pic.jpg";
import "./Image.scss";

function Image() {
  return <div className="img">
    <img src={img} alt="an img" />
    <div class="box"></div>
  </div>;
}

export default Image;
