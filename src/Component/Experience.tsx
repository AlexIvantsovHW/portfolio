import React, { FC } from "react";
import "./style.css";
import videoMain from "../Assests/video4.mp4";
import { motion } from "framer-motion";
const Experience: FC = () => {
  return (
    <div className="video_bg" id="Experience">
      <video src={videoMain} autoPlay loop muted />
      <div className="video_bg_content">
        <motion.h1
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{ color: "#0a02342c" }}
        >
          EXPERIENCE
        </motion.h1>
      </div>
    </div>
  );
};
export default Experience;
