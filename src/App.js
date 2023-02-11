import React from "react";
import "./style.css";

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Sec1 from "./Components/Main"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"


export default function App() {
  return (
    <BrowserRouter>

    <header>
    <Navbar />
    </header>
    <div>
    
      <Routes>
        <Route path="/" element={<Sec1 />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}
