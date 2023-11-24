import React, { FC, useState } from "react";
import "./style.css";
import { PortfolioData } from "../Assests/PortfolioData";
import { motion } from "framer-motion";
import { windowInnerWidth } from "../Assests/Functions";

interface CardType{
  img:string,
  title:string,
  description:string,
  link:string,
  y?:number,
  delay?:number
}


const Card=(props:CardType)=>{
  return(
    <motion.div  
      className="container"   
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:1.5,delay:props.delay }}
    >
          <div className="card">
            <div className="front">
              <img src={props.img} />
                        </div>
            <div className="back">
             <a href={props.link} ><h2 className="glow-on-hover">{props.title}</h2></a> 
              <p>{props.description}</p>
            </div>
          </div>
        </motion.div >
  )
}
const ExperienceList: FC = () => {
  const [display, setDisplay] = useState(true);
  const [status, setStatus] = useState(false);
  const handleDisplay = () => {
    setDisplay(!display);
    setStatus(!status);
  };
  let CardList=PortfolioData.map((e,i)=>{return( 
    <Card 
      img={e.img} title={e.title} 
      description={e.description} link={e.link}
      y={i%2===0?500:-500} delay={i*0.25}
      />)})
  const size: number = 70;
  return (
    <div className="portfolio-container slider">
      <div className="screen_media_img">
      <div className="card-container">
       <div style={{width:'100%'}}> <h1 style={{textAlign:"center"}}>PROJECT LIST</h1></div>
      {CardList}
      </div>
      </div>
    </div>
  );
};
export default ExperienceList;
