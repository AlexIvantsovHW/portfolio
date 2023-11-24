import React, { useRef, RefObject, useState, useEffect } from "react";
import MainComponent from "./Component/MainComponent";
import Portfolio from "./Component/Portfolio";
import Experience from "./Component/Experience";
import Education from "./Component/Education";
import "./Component/style.css";
import AboutMe from "./Component/AboutMe";
import PortfolioList from "./Component/PortfolioList";
import ExperienceList from "./Component/ExperienceList";
import EducationList from "./Component/EducationList";
import Heading from "./Component/Header";
import Contact from "./Component/Contact";


function App() {
  return (
    <div className="wrapper">
      <div className="page">
        <Heading/>
        <MainComponent />
        <AboutMe />
        <Portfolio />
        <ExperienceList />
        <Experience />
        <PortfolioList />
        <Education />
        <EducationList/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
