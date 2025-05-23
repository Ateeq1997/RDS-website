import React from 'react';
// import CustomNavbar from '../components/common/CustomNavbar'; // Import the Navbar component
// import Footer from '../components/common/Footer';

import './denialmanagement.css'; // Import the CSS file for styling

import bg2 from '../assets/img/bg-2 1.png';
import department6 from '../assets/img/departments-5 3.png';
import department11 from '../assets/img/departments-5 5 (2).png';
import layer from '../assets/img/Layer_1.svg';

const Denialmanagement = () => {
  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="DM-content">
        <h1 className="DM-nav-heading">Denial Management</h1>
        <p className="DM-paragraph1">
        Medical billing streamlines reimbursement by translating healthcare <br/>services into codes, submitting claims to insurers....

        </p>
      </div>
      <div className="DM-text-container111">
        <h1 className="DM-heading451">
          <span className="DM-heading-part111">What is Denial Management </span>
          <span className="DM-heading-part222"><br/> in Healthcare?</span>
        </h1>
        <p className="DM-content-paragraph12">
        Denial management is often confused with Rejection Management. Rejected <br/>Claims are claims that have not made it to the payer's adjudication system on <br/> account of errors. The billers must correct and resubmit these claims. Denied <br/> Claims, on the other hand, are claims that a payer has adjudicated and denied <br/>the payment.
        </p>
        <p className="DM-content-paragraph12">
        Healthcare organizations should be concerned about both rejected claims and <br/> denied claims. The claims rejection management process provides an <br/> understanding of the claim's issues and an opportunity to correct the problems. <br/> Denied Claims represent lost revenue or delayed revenue (if the claim gets paid <br/> after appeals).
        </p>
        <img src={department11} alt="Your Image" className="DM-dp-image112" />
      </div>
        
      <div className="DM-image-container2">
        <img src={bg2} alt="description" className="DM-my-image1" />
        <img src={department6} alt="Your Image" className="DM-dp-image" />
        <div className="DM-overlay-content1">
        
          <h1 className="DM-heading4">
            <span className="DM-heading-part111">Our Denial Management </span>
            <span className="DM-heading-part222"><br/>Service  Offering</span>
          </h1>
          <p className="DM-paragraph201">
          Medical Billing Wholesalers' denial management team has seasoned <br/> professionals who:
          </p>
          <div class="arrow-paragraphs">
          
  <div class="arrow-item">
  <div className="DM-arrow1">→</div>
    <p class="paragraph-text">Investigate the reason for every denied claim</p>
  </div>
  <div class="arrow-item">
  <div className="DM-arrow1">→</div>
    <p class="paragraph-text">Focus on resolving the issue</p>
  </div>
  <div class="arrow-item">
  <div className="DM-arrow1">→</div>
    <p class="paragraph-text">Resubmit the request to the insurance company</p>
  </div>
  <div class="arrow-item">
  <div className="DM-arrow1">→</div>
    <p class="paragraph-text">File appeals where required</p>
  </div>
</div>
          
        </div>
      </div>
      <div className="DM-overlay-content13">
          <h1 className="DM-heading43">
            <span className="DM-heading-part111">Reducing Denials Through </span>
            <span className="DM-heading-part222"><br/> Analytics</span>
          </h1>
          <p className="DM-paragraph2013">
          Different component processes within the revenue cycle chain can result in claim <br/> denials. Often, denial issues are practice-specific or facility-specific. We <br/> understand the trends in claim denials and launch an iterative process to reduce <br/>them based on specific causes.
          </p>
          </div>
          <div className="background-container">
        <img src={bg2} alt="description" className="DM-background-image" />
        <div className="overlay">
        <div class="content">
          <h1 className="DM-heading42">
            <span className="DM-heading-part111">Proce</span>
            <span className="DM-heading-part222">ss</span>
          </h1>
          </div>

          <img src={layer} alt="Your Image" className="DM-dp-image123" />
          </div>
          </div>
  
    </>
  );
};

export default Denialmanagement;
