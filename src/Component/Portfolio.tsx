import React, { FC } from "react";
import "./style.css";
import videoMain from "../Assests/video2.mp4";
import { motion } from "framer-motion";
const Portfolio: FC = () => {
  
  return (
      <div className="video_bg" id="Portfolio">
        <video src={videoMain} autoPlay loop muted/>
        <div className="video_bg_content">
        <motion.h1
        initial={{opacity:0,scale:1}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:3.5 }}
        >PORTFOLIO</motion.h1>
          </div>
        
        </div>
    
    );
};
export default Portfolio;
