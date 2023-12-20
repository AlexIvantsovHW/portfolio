import React, { FC } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { WorkList } from "../Assests/WorkList";

interface WorkCardPropsType {
  size: number;
  title?: string;
  description?: string;
  date?: string;
  role?: string;
  img?: string;
  arrStack?: string[];
  x?: number;
  delay?: number;
}

const WorkCard = (props: WorkCardPropsType) => {
  let stekList = props.arrStack;
  return (
    <motion.div 
    className="work-card-container"
    initial={{opacity:0,scale:1,x:props.x}}
      whileInView={{opacity:1,scale:1,x:0}}
      transition={{duration:1.5,delay:props.delay }}
    >
      <div className="left-card">
        <div className="logo">
          <img src={props.img} height={props.size} width={props.size} />
        </div>
        <div className="title">
          <h2>
            {props.title}
            
            {props.date}
          </h2>
        </div>
      </div>
      <div className="right-card">
      <div className="descreption">
        <p>{props.role}{props.description}</p>
      </div>
      <div className="container-bottom">
      {stekList===undefined?null:stekList.map((e)=>{return (<img src={e} height={'30px'} width={'30px'}/>)})}
    </div>
      </div>
    </motion.div>
  );
};

const PortfolioList: FC = () => {
  let size: number = 70;
  let CardList = WorkList.map((e, i) => {
    return (
      <WorkCard
        size={size}
        img={e.img}
        description={e.description}
        title={e.title}
        arrStack={e.arrStack}
        x={i % 2 === 0 ? 300 : -300}
        delay={i * 0.15}
      />
    );
  });
  return (
    <div className="screen_experience slider">
      <div className="screen_container">{CardList}</div>
    </div>
  );
};
export default PortfolioList;

/*
<motion.div 
      className="work-container"
      initial={{opacity:0,scale:1,x:props.x}}
      whileInView={{opacity:1,scale:1,x:0}}
      transition={{duration:1.5,delay:props.delay }}
      >
    <div className="container-top">
    <div className="work-logo">
    <img src={props.img} height={props.size} width={props.size}/>
    </div>
    <div className="work-title"><h2>{props.title}{props.role}{props.date}</h2></div>
    <div className="work-descreption"><p>
          {props.description}
        </p></div>
    </div>
    <div className="container-bottom">
      {stekList===undefined?null:stekList.map((e)=>{return (<img src={e} height={'30px'} width={'30px'}/>)})}
    </div>
  </motion.div>
*/
