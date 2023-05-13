import React from "react";
import { AiOutlineHome, AiFillInfoCircle } from "react-icons/ai";
import { FaBrain, FaUserAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import "./Navbar.scss";
import { Link } from "react-router-dom"
function Navbar() {
  return <>
    <ul className="Navbar">
      <li><Link to="/"><AiOutlineHome className="link"/></Link></li>
      <li><Link to="/skills"><FaBrain className="link" /></Link></li>
      <li><Link to="/projects"><AiFillSetting className="link" /></Link></li>
      <li><Link to="/about"><AiFillInfoCircle className="link" /></Link></li>
      <li><Link to="/contact"><FaUserAlt className="link" /></Link></li>
    </ul>
  </>;
}

export default Navbar;
