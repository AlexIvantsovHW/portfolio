import  React,{FC}  from 'react';
import { windowInnerWidth } from '../Assests/Functions';
import { ExperienceLogo, PersonalLogo, PortfolioLogo, StudyLogo,PhoneLogo } from '../Assests/Img';

const Heading:FC=()=>{
    let size=30
    return(
        <div className="heading">

          <a href="#Main"  className="glow-on-hover" >{windowInnerWidth>594?'ABOUT ME'.toUpperCase():PersonalLogo(size)}</a>
          <a href="#Portfolio" className="glow-on-hover">{windowInnerWidth>594?'PORTFOLIO'.toUpperCase():PortfolioLogo(size)}</a>       
          <a href="#Experience" className="glow-on-hover">{windowInnerWidth>594?'EXPERIENCE'.toUpperCase():ExperienceLogo(size)}</a>
          <a href="#Education" className="glow-on-hover">{windowInnerWidth>594?'qualification'.toUpperCase():StudyLogo(size)}</a>
          <a href="#Contact" className="glow-on-hover">{windowInnerWidth>594?'contact info'.toUpperCase():PhoneLogo(size)}</a>
        </div>
    )
}
export default Heading; 