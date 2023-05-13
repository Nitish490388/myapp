import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import "./App.scss"

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <div className="nav-bar"><Navbar /></div>
    
  </div>;
}

export default App;