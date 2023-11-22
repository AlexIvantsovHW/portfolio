import React, { FC, useEffect, useState } from "react";
import "./style.css";
import {
  Ava,
  CSSLogo,
  FigmaLogo,
  HTMLlogo,
  IELTSlogo,
  JSLogo,
  NodeJS,
  ReactLogo,
  SQLLogo,
  TSlogo,
} from "../Assests/Img";
import { windowInnerWidth } from "../Assests/Functions";
import { motion } from "framer-motion";
const AboutMe: FC = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const handleDisplay = () => {
    setDisplay(true);
  };
  let size: number = windowInnerWidth > 700 ? 90 : 50;
  let avaSize: number = windowInnerWidth > 700 ? 400 : 200;
  let fontSize: number = 70;

  return (
    <div className="screen slider">
      <div className="personal_container">
        <motion.div 
           viewport={{ once: true }}
          className="upper-container"
          initial={{opacity:0,scale:0,x:-500}}
          whileInView={{opacity:1,scale:1,x:0}}
          transition={{duration:1.5 }}
          >
          <div>{Ava(avaSize)}</div>
          <ul>
            <h1
              style={{
                color: "#c6c6ff",
                fontSize: `${fontSize}px`,
                textAlign: "center",
              }}
            >
              Who's this guy?
            </h1>
            <li className="li1">
              I'm a Front-End Developer with basic Backend knowledge.
            </li>
            <li className="li2">
              I have serious passion for UI effects, animations and creating
              intuitive, dynamic user experiences.
            </li>
            <li className="li3">
              Former Senior Reservoir Engineer in the oil and gas industry
              (2018-2023).
            </li>
            <li className="li4">Let's make something special.</li>
            <li className="li5">Currently I live in Batumi, Georgia.</li>
          </ul>
        </motion.div>
        <motion.div 
        viewport={{ once: true }}
          className="bottom-container"
          initial={{opacity:0,scale:0,x:500}}
          whileInView={{opacity:1,scale:1,x:0}}
          transition={{duration:1.5,delay:1 }}
          >
          <div className="software">
            <h1>SOFTWARE</h1>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default AboutMe;