import React from 'react';
// import CustomNavbar from '../components/common/CustomNavbar'; // Import the Navbar component
// import Footer from '../components/common/Footer';
import './pricing.css'; // Import the CSS file for styling


import bg2 from '../assets/img/bg-2 1.png';


const Pricing = () => {

  return (
    <>
      <div className="P-image-container2">
          <img src={bg2} alt="description" className="P-my-image1" />
          <div className="P-overlay-content">
            <h1 className="P-heading3">
              <span className="P-heading-part11">Our Pricing </span>
              <span className="P-heading-part22">Plans</span>
            </h1>
          </div>
          <div class="pricing-section">


  <div class="pricing-container">
   
    <div class="pricing-card">
    <h2>3% Billing Plan</h2>
    <p>Our basic billing plan includes the following services:</p>
    <ul>
    <li>Basic demographic & charge entry</li>
        <li>Payment posting</li>
        <li>Accounts receivable tracking</li>
        <li>Claim submission</li>
        <li>Appeals for denied claims</li>
        <li>Follow-up on outstanding claims</li>
        <li>Standard reporting from your billing software</li>
        <li>Basic patient inquiries support</li>
    </ul>
    <button class="choose-btn">Choose Plan</button>
</div>
    
<div class="pricing-card">
    <h2>5% Billing Plan</h2>
    <p>Our premium billing plan includes the following services:</p>
    <ul>
    <li>Advanced demographic & charge entry</li>
        <li>Eligibility verification & benefits check</li>
        <li>Detailed payment posting</li>
        <li>Complete accounts receivable follow-up</li>
        <li>Claim submission with validation</li>
        <li>Handling appeals & faster denied claims resolution</li>
        <li>Customized monthly/annual reports with insights</li>
        <li>Full patient statements & inquiries management</li>
    </ul>
    <button class="choose-btn">Choose Plan</button>
</div>

  </div>
</div>

      </div>
    
    </>
    
  );
};

export default Pricing;
