import React from "react";
import "./Skills.scss";
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiJavascript1, DiJava } from "react-icons/di"
import { BsFillBootstrapFill } from "react-icons/bs"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiExpress, SiMongodb } from "react-icons/si"

function Skills() {
  return <div className="container">
    <div className="box">
      <AiFillHtml5 className="icon"/>
      <h3>HTML</h3>
    </div>
    <div className="box">
      <DiCss3 className="icon" />
      <h3>CSS</h3>
    </div>
    <div className="box">
      <DiJavascript1 className="icon" />
      <h3>Javascript</h3>
    </div>
    <div className="box">
      <DiJava className="icon" />
      <h3>Java</h3>
    </div>
    <div className="box">
      <BsFillBootstrapFill className="icon" />
      <h3>Bootstrap</h3>
    </div>
    <div className="box">
      <FaReact className="icon" />
      <h3>React</h3>
    </div>
    <div className="box">
      <FaNodeJs className="icon" />
      <h3>NodeJS</h3>
    </div>
    <div className="box">
      <SiExpress className="icon" />
      <h3>Exprss.js</h3>
    </div>
    <div className="box">
      <SiMongodb className="icon" />
      <h3>MongoDB</h3>
    </div>
  </div>;
}

export default Skills;
