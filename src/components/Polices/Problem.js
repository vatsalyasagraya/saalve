import React from "react";
import img2 from './images/img2.png';
import "./problem.css"


export const Problem = () => {
  return (
    <div id="Problem" className="problem">
      <h1>Problem</h1>
      <hr/>
      <div className="box">
            <div className="box1">
                
                <p className="para"><span className="main">The economic loss of food waste costs India <b>$12 Billion.</b></span>
                <br/><br/>If we all stop wasting edible food, it would be the equivalent of taking one in four cars off the road. Think about the kind of impact we want to leave before leaving this planet. A small change in habit of saving food can save our future generations, environment, and our money.</p>
            </div>

            <div className="badi">
                <img className="ind" src={img2} alt="alt"/>
            </div>
            
        </div>
    </div>
  );
};

export default Problem;