// src/components/common/GridContainer2.js

import React from 'react';
import './gridcontainer2.css'; // Import CSS for styling

// Import images
import StarsOutline from '../../assets/img/stars-outline.svg';
import Heart from '../../assets/img/heart.svg';
import JoinOnlineMeeting from '../../assets/img/join-online-meeting.svg';
import Camera from '../../assets/img/camera.svg';
import SettingLine from '../../assets/img/setting-line.svg';

const GridContainer2 = () => {
  return (
    <div className="grid-container2">
      <div className="icon-container">
        <img src={StarsOutline} alt="Icon 1" className="icon" />
        <h3 className="heading">Patient Appointment</h3>
        <p className="text">The inception of Revenue Cycle Management (RCM) commences with the patient appointment process...</p>
      </div>
      <div className="icon-container">
        <img src={Heart} alt="Icon 2" className="icon" />
        <h3 className="heading">Eligibility & Benefits Verification</h3>
        <p className="text">Following the appointment, we conduct a thorough review of the patient's insurance coverage to confirm whether the services...</p>
      </div>
      <div className="icon-container">
        <img src={JoinOnlineMeeting} alt="Icon 3" className="icon" />
        <h3 className="heading">Medical Transcription</h3>
        <p className="text">Medical transcription involves the transformation of recorded services into medical records...</p>
      </div>
      <div className="icon-container">
        <img src={Camera} alt="Icon 4" className="icon" />
        <h3 className="heading">Medical Coding</h3>
        <p className="text">Medical coding involves a comprehensive review of medical records, where medical coders translate...</p>
      </div>
      <div className="icon-container">
        <img src={SettingLine} alt="Icon 5" className="icon" />
        <h3 className="heading">Charge Entry & Billing</h3>
        <p className="text">Charge entry and billing encompass the gathering of all necessary information required to...</p>
      </div>
      <div className="icon-container">
        <img src={Heart} alt="Icon 6" className="icon" />
        <h3 className="heading">Claim Submission</h3>
        <p className="text">Claim submission is the next step following charge entry, where the claim form is forwarded to the insurance company...</p>
      </div>
    </div>
  );
};

export default GridContainer2;
