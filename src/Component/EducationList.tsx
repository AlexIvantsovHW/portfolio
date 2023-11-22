import React, { FC } from "react";
import "./style.css";
import { HWLogo, ItransitionLogo, JSLogo, PythonLogo, SQLLogo, StepickLogo, TPULogo, UdemyLogo, WebDebLogo } from '../Assests/Img';
import { windowInnerWidth } from "../Assests/Functions";
import { motion } from "framer-motion";
let size:number=50;

const EducationList: FC = () => {
  return (
    <div className="screen slider">
      <div className="screen_media_img">
      <div className="qualification-container">
      <motion.div 
        className="list-title"
        initial={{opacity:1,scale:0,}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1 }}
        >
        {HWLogo(size)}{windowInnerWidth>1094?<h2> Heriot-Watt University</h2>:<h2>HWU</h2>}
        {windowInnerWidth>327?<div className="list-programm">{windowInnerWidth>1094?<p>M.Sc. in Petroleum engineering</p>:(windowInnerWidth>594?<p>M.Sc. in PE</p>:null)}</div>:null}
        </motion.div>
        <motion.div 
        className="list-title"
        initial={{opacity:1,scale:0,}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1,delay:0.3 }}
        >
        {TPULogo(size)}{windowInnerWidth>1094?<h2> Tomsk Polytechnic University</h2>:<h2>TPU</h2>}
        <div className="list-programm">{windowInnerWidth>1094?<p>Master's degree in Petroleum Engineering</p>:(windowInnerWidth>594?<p>M.Sc. in PE</p>:null)}</div>
        </motion.div>
        <motion.div 
        className="list-title"
        initial={{opacity:1,scale:0,}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1,delay:0.6 }}
        >
        {ItransitionLogo(size)} <h2> Itransition</h2>
        <div className="list-programm">{(windowInnerWidth>594?<p>Commercial Software Development</p>:null)}</div>  
      </motion.div>
      <motion.div 
        className="list-title"
        initial={{opacity:1,scale:0,}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1,delay:0.9 }}
        >{UdemyLogo(size)}
       <h2> Udemy</h2>
       <div className="list-programm">{(windowInnerWidth>594?<p>Web development bootcamp</p>:null)}</div>
      </motion.div>
      <motion.div 
        className="list-title"
        initial={{opacity:1,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1,delay:1.2 }} style={{display:'flex',}}>
        {StepickLogo(size)} <h2> Stepick</h2>
        {(windowInnerWidth>594?<>
          <div className="list-programm" style={{margin:'5px'}}>{WebDebLogo(size*0.8)} {SQLLogo(size*0.8)} {JSLogo(size*0.8)} {PythonLogo(size*0.8)}</div>
          </>
        :null)}
      </motion.div>
      </div>
      </div>
      </div>
  );
};
export default EducationList;
