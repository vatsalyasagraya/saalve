import React from "react";
import "./solution.css"
import img3 from './images/img1.png'

export const Solution = () => {
  return (
    <div id="Solution" className="solution">
      <h1>Solution</h1>
      <hr/>
      <div className='first'>
            <img src={img3} alt="nothin" className="photo-sol"/>
            <div className="text-sol">
                <p>Are you a business with surplus food? Join us to cut your food waste - all while finding new customers and saving sunk costs. We want India to think differently about throwing food.</p>
            </div>
        </div>
        <div className="button">
        <div className="wrapper">
          <a href="https://forms.gle/yRf1fqdjBoFUqDVn9" target="_blank" rel="noopener noreferrer"><span>For Businesses</span></a>
        </div>
        <div className="wrapper">
          <a href="https://forms.gle/uScThYtoPdJEig3EA" target="_blank" rel="noopener noreferrer"><span>For Customers</span></a>
        </div>
        </div>
    </div>
  );
};

export default Solution;