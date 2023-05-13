import React from "react";
import "./Image2.scss";
import img from "../../assets/pic.jpg";

function Image2() {
  return <div className="img2">
    <div className="box">
        <div className="content">
            <img src={ img } alt="img"/>
        </div>
    </div>
  </div>;
}

export default Image2;
