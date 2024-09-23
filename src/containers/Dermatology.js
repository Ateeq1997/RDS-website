import React from 'react';
import './dermatology.css'; // Import the CSS file for styling

import bg2 from '../assets/img/bg-2 1.png';
import Group3 from '../assets/img/Group 148.svg';
import ellipse from '../assets/img/Ellipse.svg';
import department14 from '../assets/img/departments-5 5 (3).png';

const Dermatology = () => {
  return (
    <>
      <div className="D-content">
        <h1 className="D-nav-heading">Dermatology</h1>
        <p className="D-paragraph1">
        Comprehensive Revenue Cycle Management (RCM) Services by RDS
        </p>
      </div>
     
      <div className="D-overlay-content1">
          <h1 className="D-heading44">
            <span className="D-heading-part11">Comprehensive management of the revenue <br/>cycle tailored specifically for </span>
            <span className="D-heading-part22">dermatology <br/>practices</span>
          </h1>
          <img src={Group3} alt="description" className="D-my-image1" />
        </div>
        

        <div className="D-image-container2">
          <img src={bg2} alt="description" className="D-my-image2" />
          <div className="D-overlay-content">
            <h1 className="D-heading335">
              <span className="heading-part110">Such </span>
              <span className="heading-part220"> as:</span>
            </h1>
            <div class="D-ellipse-line-container">
                <svg class="D-small-line" xmlns="http://www.w3.org/2000/svg" width="3" height="400" fill="none">
                    <path d="M1 0V310" stroke="#076AFF" strokeWidth="3" />
                </svg>
                <img src={ellipse} alt="circle" class="D-ellipse" />
                <img src={ellipse} alt="circle" class="D-ellipse" />
                <img src={ellipse} alt="circle" class="D-ellipse" />
                <img src={ellipse} alt="circle" class="D-ellipse" />
                <img src={ellipse} alt="circle" class="D-ellipse" />
            </div>
            <div class="D-text-container">
                <p class="D-bullet-point">Insurance verification.</p>
                <p class="D-bullet-point">Automated coding for encounters.</p>
                <p class="D-bullet-point">Automated posting of payments.</p>
                <p class="D-bullet-point">This comprehensive approach ensures a seamless and optimized .</p>
                <p class="D-bullet-point">Financial workflow for your practice.</p>
                <button class="D-primary-button-2">Get a Quote</button>
                <img src={department14} alt="description" className="D-my-image3" />
            </div>
             
          </div>
        </div>
      
    </>
  );
};

export default Dermatology;
