import React from 'react';
import GridContainer1 from '../components/common/GridContainer1';
import './healthcaredigitalmarketing.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import pngwing from '../assets/img/pngwing.png';
import bg2 from '../assets/img/bg-2 1.png';
import department from '../assets/img/departments-5.png';

const HealthcareDigitalMarketing = () => {
    const navigate = useNavigate();
    const handleContainerClick = (path) => {
      console.log('Icon container clicked');
      navigate(path); // Use navigate function here
    };
  return (
    <>
  
      <div className="HDM-content">
        <h1 className="HDM-nav-heading">Healthcare Digital <br/>Marketing</h1>
        <p className="HDM-paragraph1">Comprehensive Revenue Cycle Management (RCM) Services by RDS</p>
      </div>
      <div className="HDM-main-container1">
        <h1 className="HDM-heading2">
          <span className="HDM-heading-part1">What we can accomplish </span>
          <span className="HDM-heading-part2">together</span>
        </h1>
        <div className="HDM-grid-container">
          <div className="HDM-icon-container">
            <p className="HDM-text">Healthcare <br/>Search Engine <br/>Optimisation</p>
          </div>
          <div className="HDM-icon-container">
            <p className="HDM-text">Healthcare<br/> PPC <br/>management</p>
          </div>
          <div className="HDM-icon-container">
            <p className="HDM-text">Healthcare <br/>social media<br/> advertisement</p>
          </div>
          <div className="HDM-icon-container">
            <p className="HDM-text">Healthcare <br/> conversion rate <br/> optimise</p>
          </div>
          <div className="HDM-icon-container">
            <p className="HDM-text">Healthcare <br/>reputation <br/> management</p>
          </div>
        </div>
        <div className="HDM-gradient-container">
          <img src={pngwing} alt="Your Image" className="HDM-background-image" />
          <div className="HDM-container-wrapper">
            <h2 className="HDM-container-heading">Cutting-edge AI-powered healthcare <br/> digital marketing</h2>
            <div className="HDM-text-upper">
              <p>
                We focus on attracting more engaging leads and enhancing patient engagement<br/> through our digital
                healthcare marketing strategies. Our team of dedicated healthcare <br/> digital marketing experts
                specializes in building and optimizing SEO and PPC <br/> campaigns, significantly boosting your
                website's visibility on major search engines.
              </p>
            </div>
          </div>
        </div>
        <div className='HDM-grid'>
        <GridContainer1  handleContainerClick={handleContainerClick}/>
        </div>
        <div className="HM-image-container12">
          <img src={bg2} alt="description" className="HM-my-image1" />
          <div className="HM-overlay-content">
            <h1 className="HM-heading3">
              <span className="HM-heading-part11">We don't only promise <br /> results,</span>
              <span className="HM-heading-part22"> we prove them. </span>
            </h1>
            <p className="HM-paragraph2">
            A complete healthcare marketing solution <br />
At RDS Precision, we focus on crafting a patient-centered strategy tailored to your practice.<br /> 
Our team will evaluate your business needs within the current digital landscape and <br /> 
recommend the most effective digital marketing strategies to help your healthcare <br />
 business thrive
            </p>
            <img src={department} alt="Your Image" className="HM-dp-image" />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default HealthcareDigitalMarketing ;
