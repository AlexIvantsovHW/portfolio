import React, { FC } from "react";
import "./style.css";
import videoMain from '../Assests/video1.mp4'
import { windowInnerWidth } from "../Assests/Functions";
const MainComponent: FC = () => {
  return (
    <div className="video_bg" id="Main">
      <video src={videoMain} autoPlay loop muted/>
      <div className="video_bg_content">
      {windowInnerWidth>361?<h1>ALEXANDER IVANTSOV</h1>:<h1>ALEXANDER<br/>IVANTSOV</h1>}
      <h2>FULLSTACK DEVELOPER</h2>
        </div>
      
      </div>
  
  );
};
export default MainComponent;
