import React from 'react';
// import CustomNavbar from '../components/common/CustomNavbar'; // Import the Navbar component

import './medicalbilling.css'; // Import the CSS file for styling

import line from '../assets/img/Rectangle 182.png';
import bg2 from '../assets/img/bg-2 1.png';

const Medicalbilling = () => {
  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="MB-content">
        <h1 className="MB-nav-heading">Medical <br/> Billing</h1>
        <p className="MB-paragraph1">Medical billing streamlines reimbursement by translating healthcare <br/>services  into codes, submitting claims to insurers....
        </p>
      </div>


      <div className="MB-text-container">
        <div className="MB-overlay-content">
          <h1 className="MB-heading4">
            <span className="MB-heading-part111">Medical </span>
            <span className="MB-heading-part222">Billing</span>
          </h1>
          </div>
          <div className="MB-container">
  <ul className="MB-list">
    <li className="MB-text-content">
      <img src={line} alt="Line" className="MB-line-image1" />
      <h2>Patient Registration</h2>
    </li>
    <li className="MB-text-content">
      <img src={line} alt="Line" className="MB-line-image2" />
      <h2>Documentation and Coding</h2>
    </li>
    <li className="MB-text-content">
      <img src={line} alt="Line" className="MB-line-image3" />
      <h2>Claim Preparation and Submission</h2>
    </li>
    <li className="MB-text-content">
      <img src={line} alt="Line" className="MB-line-image4" />
      <h2>Payment Posting</h2>
    </li>
    <li className="MB-text-content">
      <img src={line} alt="Line" className="MB-line-image5" />
      <h2>Reimbursement and Reporting</h2>
    </li>
  </ul>
</div>


          </div>
          <div className="MB-image-container2">
        <img src={bg2} alt="description" className="MB-my-image2" />
          <div className="MB-overlay-content2">
            <h1 className="MB-heading4">
              <span className="MB-heading-part111">Where We Can</span>
              <span className="MB-heading-part222"> Help You? </span>
            </h1>
            <p className="MB-paragraph2">
              We handle everything from the process of submitting and following up on claims with <br/> health insurance
              companies to receive payment for services rendered by a healthcare <br/> provider or medical billing company.
            </p>
          </div>
        </div>
         
    </>
  );
};

export default Medicalbilling;
