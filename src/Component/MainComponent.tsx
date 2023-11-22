import React, { FC } from "react";
import "./style.css";
import videoMain from '../Assests/video1.mp4'
import Portfolio from './Portfolio';
import { windowInnerWidth } from "../Assests/Functions";
const MainComponent: FC = () => {
  return (
    <div className="video_bg" id="Main">
      <video src={videoMain} autoPlay loop muted/>
      <div className="video_bg_content">
      {windowInnerWidth>361?<h1>ALEXANDER IVANTSOV</h1>:<h1>ALEXANDER<br/>IVANTSOV</h1>}
      <h2>FRONTEND DEVELOPER</h2>
        </div>
      
      </div>
  
  );
};
export default MainComponent;
