import React, { FC, useEffect, useState } from "react";
import "./style.css";
import {
  Ava,
  CSSLogo,
  CoreLogo,
  FigmaLogo,
  GrapQLLogo,
  HTMLlogo,
  IELTSlogo,
  JSLogo,
  NextJSlogo,
  NodeJS,
  ReactLogo,
  SQLLogo,
  TSlogo,
  TailWindLogo,
} from "../Assests/Img";
import { windowInnerWidth } from "../Assests/Functions";
import { motion } from "framer-motion";
const AboutMe: FC = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const handleDisplay = () => {
    setDisplay(true);
  };
  let size: number = windowInnerWidth > 700 ? 70 : 50;
  let avaSize: number = windowInnerWidth > 700 ? 400 : 200;
  let fontSize: number = 70;

  return (
    <div className="about-container slider">
      <div className="about-subcontainer">
        <div className="top-container">
          <img src="https://i.postimg.cc/85mXxWNn/11zon-cropped.png" />
          <div>
            <ul>
              <h1>Who's this guy?</h1>
              <li className="li1">I'm a Fullstack Developer.</li>
              <li className="li2">
                I have serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences.
              </li>
              <li className="li3">
                Former Senior Reservoir Engineer in the oil and gas industry
                (2018-2023).
              </li>
              <li className="li4">
                Completed full development cycles for 5 apps and developed
                client-side for 4 other projects.
              </li>
              <li className="li5">Currently I live in Limassol, Cyprus.</li>
            </ul>
          </div>
        </div>
        <div className="bottom-container">
          <motion.div className="bottom-container">
            <div className="software">
              <h2>SOFTWARE</h2>
            </div>
            <div className="software_container">
              <div className="anim1">{ReactLogo(size)}</div>
              <div className="anim2">{TSlogo(size)}</div>
              <div className="anim2">{JSLogo(size)}</div>
              <div className="anim3">{HTMLlogo(size)}</div>
              <div className="anim4">{CSSLogo(size)}</div>
              <div className="anim5">{FigmaLogo(size)}</div>
              <div className="anim6">{NodeJS(size)}</div>
              <div className="anim7">{SQLLogo(size)}</div>
              <div className="anim8">{IELTSlogo(size)}</div>
              <div className="anim9">{NextJSlogo(size)}</div>
              <div className="anim10">{GrapQLLogo(size)}</div>
              <div className="anim10">{CoreLogo(size)}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
