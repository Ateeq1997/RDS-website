import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import GridContainer2 from '../components/common/GridContainer2'; // Updated path
// import CustomNavbar from '../components/common/CustomNavbar'; // Import the Navbar component
// import Footer from '../components/common/Footer';
import './Revenuecycle.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import bg2 from '../assets/img/bg-2 1.png';
import StarsOutline from '../assets/img/stars-outline.svg';
import Heart from '../assets/img/heart.svg';
import JoinOnlineMeeting from '../assets/img/join-online-meeting.svg';
import Camera from '../assets/img/camera.svg';
import SettingLine from '../assets/img/setting-line.svg';

const RevenueCycleManagement = () => {
  const navigate = useNavigate();

  const handleContainerClick = () => {
    // Handle the click event
    console.log('Icon container clicked');
    navigate('/revenue-cycle-management');
  };

  const [showContainers, setShowContainers] = useState(false);

  const handleViewAllClick = () => {
    setShowContainers(true);
  };
  const handleShowLessClick = () => {
    setShowContainers(false);
  };
  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="content2">
        <h1 className="nav-heading2">Revenue Cycle <br/> Management (RCM)</h1>
        <p className="paragraph123">Comprehensive Revenue Cycle Management (RCM) Services by RDS</p>
      </div>
      <div className="main-container12">
        <h1 className="heading22">
          <span className="heading-part12">The Comprehensive & Adaptable Revenue <br /> Cycle Management </span>
          <span className="heading-part23">RCM solution</span>
        </h1>
        <p className="paragraph22">
          Our Consultative Flexibility, Full-Spectrum Services, and Specialized Back-Office Team Are Tailored to <br />
          Address Your Unique Requirements. Allow Us to Enhance Your Medical Group's Profitability and Alleviate <br />
          Administrative Challenges.
        </p>
        <div className='RC-grid'>
        <GridContainer2 handleContainerClick={handleContainerClick} />
        </div>
        <div>
      {showContainers && (
        <div className="R-grid-container2">
          <div className="H-icon-container">
            <img src={Camera} alt="Icon 3" className="H-icon" />
            <h3 className="H-heading">Claim Rejection</h3>
            <p className="H-text">
              Claim rejections may occur for various reasons. Medical billing professionals carefully examine and rectify rejected claims before resubmitting them to the insurance company
            </p>
          </div>
          <div className="H-icon-container">
            <img src={SettingLine} alt="Icon 4" className="H-icon" />
            <h3 className="H-heading">Payment and posting</h3>
            <p className="H-text">
              Payment and posting involve adhering to approved payment guidelines for claims. Once a claim is approved, the insurance company sends a payment along with an Explaination of Benefits (EOB) 
            </p>
          </div>
          <div className="H-icon-container">
            <img src={Heart} alt="Icon 5" className="H-icon" />
            <h3 className="H-heading">Secondary Claim submission </h3>
            <p className="H-text">
             Secondary claim submission becomes necessary because the patient's primary insurance typically does not cover 100% of the allowed amount. In this case, the medical biller proceeds to submit the claim
            </p>
          </div>
          <div className="H-icon-container">
            <img src={Camera} alt="Icon 5" className="H-icon" />
            <h3 className="H-heading">Denial management</h3>
            <p className="H-text">
             Denial management is a crucial part of the revenue cycle, although it may seem seamless. Numerous claims are denied for various reasons, and it falls upon the expertise of medical billing professionals.
            </p>
          </div>
          <div className="H-icon-container">
            <img src={SettingLine} alt="Icon 5" className="H-icon" />
            <h3 className="H-heading">Medical appeals</h3>
            <p className="H-text">
             Medical appeals come into play when an insurance company denies a claim, and medical billers operate within the framework of regulatory guidelines for claim denials.
            </p>
          </div>
          <div className="H-icon-container">
            <img src={Heart} alt="Icon 5" className="H-icon" />
            <h3 className="H-heading">Refunds(insurance and patient)</h3>
            <p className="H-text">
            Refunds (for both insurance and patients) in medical billing involve the process of returning money to either the patient or the insurance company. This can be categorized into Patient Refunds and insurance Refunds 
            </p>
          </div>
        </div>
      )}
     {!showContainers && (
    <div className="center-page2">
      <Button className="R-Btn-custom" onClick={handleViewAllClick}>
        View all
      </Button>
    </div>
  )}
   {showContainers && (
            <div className="center-page">
              <Button className="R-Btn-custom1" onClick={handleShowLessClick}>
                Show less
              </Button>
            </div>
          )}
    </div>
        <div className="image-container2">
        <img src={bg2} alt="description" className="my-image2" />
          <div className="overlay-content2">
            <h1 className="heading31">
              <span className="heading-part31">Where We Can</span>
              <span className="heading-part32"> Help You? </span>
            </h1>
            <p className="paragraph2">
              We handle everything from the process of submitting and following up on claims with health insurance <br />
              companies to receive payment for services rendered by a healthcare provider or medical billing company.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default RevenueCycleManagement;
