import React, { FC, useEffect, useState } from "react";
import "./style.css";
import { BsTelegram,BsLinkedin } from 'react-icons/bs';
import { PiDeviceMobileFill } from 'react-icons/pi';
import { AiOutlineMail } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';
import { windowInnerWidth } from "../Assests/Functions";
import { motion } from "framer-motion";
const Contact: FC = () => {
  const [displayEmail, setDisplayEmail] = useState<boolean>(false);
  const [displayPhone, setDisplayPhone] = useState<boolean>(false);
  const handleDisplayEmail = () => {setDisplayEmail(!displayEmail);};
  const handleDisplayPhone = () => {setDisplayPhone(!displayPhone);};
  let size: number = windowInnerWidth > 700 ? 90 : 50;
  let avaSize: number = windowInnerWidth > 700 ? 400 : 200;
  let fontSize: number = 15;
  let style={
    color:'white',
    size:50
  }
  
  return (
    <div className="screen slider">
      <motion.div 
        id='Contact'
        className="contact_container"
        initial={{opacity:0,scale:1,y:500}}
        whileInView={{opacity:1,scale:1,y:0}}
        transition={{duration:1.5 }}
      >
      <div className="sub-container">
        <a  href="https://t.me/Alexander_Ivantsov_hw" className="glow-on-hover"><BsTelegram size={style.size} color={style.color} /></a>
      </div>
      <div className="sub-container">
      <div className="glow-on-hover" onClick={handleDisplayPhone}>
      <PiDeviceMobileFill size={style.size} color={style.color}/>
      </div>
      {displayPhone?<p style={{fontSize:fontSize,textAlign:"center"}}>+995591210474</p>:null}
      </div>
      <div className="sub-container">
      <div className="glow-on-hover" onClick={handleDisplayEmail}>
      <AiOutlineMail size={style.size} color={style.color}/>
      </div>
      {displayEmail?<p style={{fontSize:fontSize,textAlign:"center"}}>alexander.ivantsov.hw@gmail.com</p>:null}
      </div>
      <div className="sub-container">
      <a className="glow-on-hover" href='https://www.linkedin.com/in/aleksandr-ivantsov/'>
      <BsLinkedin size={style.size} color={style.color}/>
      </a>
      </div>
      <div className="sub-container">
      <a className="glow-on-hover" href="https://www.codewars.com/users/AlexanderIvantsov">
      <SiCodewars size={style.size} color={style.color}/>
      </a>
      </div>
      </motion.div>
    </div>
  );
};
export default Contact;
