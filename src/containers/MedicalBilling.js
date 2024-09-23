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
    <div className="MB-text-content">
    <img src={line} alt="Line" class="MB-line-image1" />
    <div className="MB-text">
        <h2>Patient Registration:</h2>
        <p className='MB-para' >The process begins with patient registration, where all demographic and insurance information is collected.Our 
          streamlined approach ensures that all necessary details are <br/> accurately recorded, minimizing errors and delays in the
           billing process. We utilize  advanced software systems to efficiently capture and verify patient information, ensuring <br/> compliance
            with HIPAA regulations regarding patient privacy.</p>
    </div>
    </div>
    <div className="MB-text-content">
    <img src={line} alt="Line" class="MB-line-image2" />
    <div className="MB-text">
        <h2>Documentation and Coding:</h2>
        <p>After the patient's visit, healthcare providers document the services provided and diagnoses made during the encounter. Our
         continuous training and stays updated with the latest <br/> coding guidelines ...</p>
    </div>
    </div>
    <div className="MB-text-content">
    <img src={line} alt="Line" class="MB-line-image3" />
    <div className="MB-text">
        <h2>Claim Preparation and Submission:</h2>
        <p>Once the coding is complete, our billing team prepares the insurance claims using the coded information. We utilize electronic
           claim  submission whenever possible to expedite <br/> the process</p>
    </div>
    </div>
    <div className="MB-text-content">
    <img src={line} alt="Line" class="MB-line-image4" />
    <div className="MB-text">
        <h2>Payment Posting:</h2>
        <p>Upon receipt of payments from insurance companies, our payment posting team ensures accurate posting of payments against the 
         corresponding claims. Our advanced <br/> reconciliation processes help identify discrepancies and ensure that payments are posted
          correctly, minimizing revenue leakage.</p>
    </div>
    </div>
    <div className="MB-text-content">
    <img src={line} alt="Line" class="MB-line-image5" />
    <div className="MB-text">
        <h2>Reimbursement and Reporting:</h2>
        <p>Finally, once claims are processed and reimbursed, our system generates detailed reports to track key performance metrics 
          such as reimbursement rates, denial rates, and days in <br/>accounts receivable. These reports provide valuable insights
           into the financial health of the practice and help identify areas for improvement in billing and revenue cycle management.</p>
    </div>
    </div>
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
