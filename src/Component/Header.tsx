import  React,{FC}  from 'react';
import { ExperienceLogo, PersonalLogo, PortfolioLogo, StudyLogo,PhoneLogo } from '../Assests/Img';


const Heading:FC=()=>{
    let size=30
    return(
        <div className="heading">
          <a href="#Main"  className="glow-on-hover head-container"><div className='head-img'>{PersonalLogo(size)}</div><div className='head-text'>ABOUT ME</div></a>
          <a href="#Portfolio" className="glow-on-hover head-container"><div className='head-img'>{PortfolioLogo(size)}</div><div className='head-text'>PORTFOLIO</div></a>
          <a href="#Experience" className="glow-on-hover head-container"><div className='head-img'>{ExperienceLogo(size)}</div><div className='head-text'>EXPERIENCE</div></a>
          <a href="#Education" className="glow-on-hover head-container"><div className='head-img'>{StudyLogo(size)}</div><div className='head-text'>QUALIFICATION</div></a>
          <a href="#Contact" className="glow-on-hover head-container"> <div className='head-img'>{PhoneLogo(size)}</div><div className='head-text'>CONTACT INFO</div></a>
        </div>
    )
}
export default Heading; 
