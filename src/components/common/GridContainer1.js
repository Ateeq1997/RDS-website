// src/components/common/GridContainer1.js

import React from 'react';
import './gridcontainer1.css'; // Import CSS for styling

// Import images with the correct file names
import IsolationMode from '../../assets/img/Isolation_Mode.svg';
import IsolationMode3 from '../../assets/img/Isolation_Mode3.svg';
import IsolationMode4 from '../../assets/img/Isolation_Mode4.svg';
import IsolationMode2 from '../../assets/img/Isolation_Mode2.svg';
import IsolationMode5 from '../../assets/img/Isolation_Mode5.svg';
import Layer from '../../assets/img/Layer.svg';

const GridContainer1 = ({ handleContainerClick }) => {
  return (
    <div className="grid-container">
      <div className="icon-container"  onClick={() => handleContainerClick('/revenue-cycle-management')}>
        <img src={IsolationMode} alt="Icon 1" className="icon" />
        <h3 className="heading">Revenue Cycle Management</h3>
        <p className="text">
          Enhancing Financial Performance and Reducing Operational Costs in Service Delivery
        </p>
      </div>
      <div className="icon-container" onClick={handleContainerClick}>
        <img src={IsolationMode3} alt="Icon 2" className="icon" />
        <h3 className="heading">Hipaa Management</h3>
        <p className="text">
          Ensure the integrity of protected health information with diligent administration of HIPAA regulations.
        </p>
      </div>
      <div className="icon-container" onClick={() => handleContainerClick('/patient-experience-management')}>
        <img src={IsolationMode4} alt="Icon 3" className="icon" />
        <h3 className="heading">Patient Experience Management</h3>
        <p className="text">
          Contemporary Patient Experience Enhancement: RDS Real-Time Feedback System for Ongoing Healthcare Experience Assessment.
        </p>
      </div>
      <div className="icon-container" onClick={() => handleContainerClick('/healthcare-digital-marketing')}>
        <img src={IsolationMode2} alt="Icon 4" className="icon" />
        <h3 className="heading">Healthcare Digital Marketing</h3>
        <p className="text">
          Enhancing Service Profitability and Reducing Administrative Costs through Strategic Healthcare Digital Marketing.
        </p>
      </div>
      <div className="icon-container" onClick={() => handleContainerClick('/healthcare-analytics')}>
        <img src={IsolationMode5} alt="Icon 5" className="icon" />
        <h3 className="heading">Healthcare Analytics</h3>
        <p className="text">
          Optimizing Service Profitability and Streamlining Administrative Efficiency through Advanced Healthcare Analytics.
        </p>
      </div>
      <div className="icon-container">
        <img src={Layer} alt="Icon 6" className="icon" />
        <h3 className="heading">Electronic Health Record</h3>
        <p className="text">
          Enhancing Service Profitability and Administrative Efficiency through Electronic Health Records (EHR) Implementation.
        </p>
      </div>
    </div>
  );
};

export default GridContainer1;
