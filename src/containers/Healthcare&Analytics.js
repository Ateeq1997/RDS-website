import React from 'react';
import GridContainer2 from '../components/common/GridContainer2';
import './healthcareanalytics.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom


import bg2 from '../assets/img/bg-2 1.png';


const HealthcareAnalytics = () => {
    const navigate = useNavigate();

    const handleContainerClick = () => {
      // Handle the click event
      console.log('Icon container clicked');
      navigate('/healthcare-analytics');
    };
  return (
    <>
      <div className="HA-content">
        <h1 className="HA-nav-heading">Healthcare & Analytics</h1>
        <p className="HA-paragraph1">Medical billing streamlines reimbursement by translating healthcare <br/> services into codes, submitting claims to insurers....
        </p>
      </div>
      <div className='HCA-grid'>
      <GridContainer2 handleContainerClick={handleContainerClick} />
      </div>
        <div className="HA-image-container2">
          <img src={bg2} alt="description" className="HA-my-image1" />
          <div className="HA-overlay-content">
            <h1 className="HA-heading3">
              <span className="HA-heading-part11">The most advanced way of health <br/></span>
              <span className="HA-heading-part22">  Care analytics</span>
            </h1>
            <p className="HA-paragraph2">
            RDS Precision offers an all-encompassing view of your account, encompassing <br/> appointment requests and upcoming appointments. 
            Our RDS Precision Practice <br/> Analytics Dashboard equips you with the tools to quantify success and immediate <br/> access to essential data.
            </p>
            <p className="HA-paragraph3" >
            Through our Charts feature, you gain a holistic snapshot of a patient's entire medical <br/> history and clinical summary at a single glance.
             This allows for more meaningful patient <br/> interactions and the ability to plan more effective treatments.
            </p>

          </div>
      </div>
    </>
  );
};

export default HealthcareAnalytics;
