import React, { useState } from 'react';
// import CustomNavbar from '../components/common/CustomNavbar'; // Import the Navbar component
// import Footer from '../components/common/Footer';
import './medicalcoding.css'; // Import the CSS file for styling

import bg2 from '../assets/img/bg-2 1.png';
import pngwing from '../assets/img/pngwing.png';
import department5 from '../assets/img/departments-5 2 (1).png';
import department6 from '../assets/img/departments-5 3.png';
import department7 from '../assets/img/departments-5 4 (1).png';
import department8 from '../assets/img/departments-5 3 (1).png';
import department9 from '../assets/img/departments-5 5 (1).png';
import group1 from '../assets/img/Group (2).svg';
import group2 from '../assets/img/Group (3).svg';
import group3 from '../assets/img/Group (4).svg';
import group4 from '../assets/img/Group (5).svg';
import group5 from '../assets/img/Group (6).svg';


const Medicalcoding = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <>
      {/* <CustomNavbar /> */}
      <div className='MC-main'>
      <div className="MC-content">
        <h1 className="MC-nav-heading">Medical <br/> Coding</h1>
        <p className="MC-paragraph1">
          Accurate and efficient medical coding is the backbone of successful medical billing.
        </p>
      </div>

      <div className="MC-text-container1">
        <h1 className="MC-heading5">
          <span className="MC-heading-part111">Why Choose Our Medical </span>
          <span className="MC-heading-part222">Coding <br />Services?</span>
        </h1>
        <h1 className="MC-heading5">
          <span className="MC-heading-part111">Certified </span>
          <span className="MC-heading-part222">Expertise:</span>
        </h1>
        <p className="MC-paragraph21">
        Our coders are certified by the American Academy of Professional Coders (AAPC) and <br/> the  American Health Information Management Association (AHIMA). They possess <br/> extensive experience across various medical specialties. Accuracy and Compliance: <br/> We adhere to the latest coding guidelines and regulations, including ICD-10-CM/PCS, <br/> CPT, and HCPCS codes. Our meticulous approach ensures  your practice remains <br/> compliant and reduces the risk of audits.
        </p>
        <img src={department5} alt="Your Image" className="MC-dp-image14" />
      </div>

      <div className="MC-image-container2">
        <img src={bg2} alt="description" className="MC-my-image1" />
        <img src={department6} alt="Your Image" className="MC-dp-image" />
        <div className="MC-overlay-content1">
          <h1 className="MC-heading4">
            <span className="MC-heading-part111">Payment</span>
            <span className="MC-heading-part222"> -Posting</span>
          </h1>
          <p className="MC-paragraph201">
            Upon receipt of payments from insurance companies, our payment posting <br/> team ensures accurate posting of  payments against the corresponding claims. <br/> Our advanced reconciliation processes help identify discrepancies and ensure <br/>that payments are posted correctly, minimizing revenue leakage.
          </p>
         
        </div>
       
      </div>
      <div className="MC-text-container13">
        <h1 className="MC-heading5">
          <span className="MC-heading-part111">Accuracy and </span>
          <span className="MC-heading-part222">Compliance</span>
        </h1>
        <p className="MC-paragraph21">
         We adhere to the latest coding guidelines and regulations, including <br /> ICD-10-CM/PCS, CPT, and HCPCS codes. Our meticulous approach ensures <br /> your practice remains compliant 
        </p>
        <img src={department7} alt="Your Image" className="MC-dp-image13" />
      </div>
      <div className="MC-gradient-container">
  <img src={pngwing} alt="Background Image" className="MC-background-image" />
  <div className="MC-overlay"></div> 
  <div className="MC-content-wrapper">
  <img src={department8} alt="Department Image" className="MC-dp-image2" />
    <div className="MC-text-content">
      <h1 className="MC-heading7">
        <span className="MC-heading-part11112">Specialized Knowledge</span>
      </h1>
      <p className="MC-paragraph2011">
      Upon receipt of payments from insurance companies, our payment posting <br/> team ensures accurate posting of payments 
      against the corresponding <br/> claims. Our advanced reconciliation processes help identify discrepancies and <br/>
      ensure that payments are posted correctly, minimizing revenue leakage
      </p>
    </div>
   
  </div>
</div>
<div className="MC-text-container2">
        <h1 className="MC-heading5">
          <span className="MC-heading-part111">Reimbursement and <br/> </span>
          <span className="MC-heading-part222">Reporting</span>
        </h1>
        <p className="MC-paragraph21">
        Finally, once claims are processed and reimbursed, our system generates detailed <br/> reports to track key performance metrics such as reimbursement rates,  denial rates,<br/> and days in accounts receivable. These reports provide valuable insights into the <br/> financial health of the practice and help identify areas for improvement in billing <br/> and revenue cycle management.
        </p>

        <img src={department9} alt="Your Image" className="MC-dp-image1" />
      </div>
      <div className="MC-image-container2">
      <img src={bg2} alt="description" className="MC-my-image1" />
      <div className="MC-overlay-content2">
          <h1 className="MC-heading452">
            <span className="MC-heading-part111">Our Medical Coding</span>
            <span className="MC-heading-part222"> Services</span>
          </h1>
          </div>
          <div className="three-containers-row">
  <div className="white-container">
    <h2 className="container-heading">ICD-10-CM/PCS Coding</h2>
    <p className="container-paragraph">Comprehensive coding for diagnoses and inpatient procedures. Regular updates to incorporate the latest changes in ICD-10 codes.</p>
  </div>
  <div className="white-container">
    <h2 className="container-heading">CPT and HCPCS Coding</h2>
    <p className="container-paragraph">Accurate coding for outpatient services, medical procedures, and supplies. Ensuring compliance with the latest CPT and HCPCS code sets.</p>
  </div>
  <div className="white-container">
    <h2 className="container-heading">Auditing and Compliance</h2>
    <p className="container-paragraph">Regular internal audits to ensure coding accuracy and adherence to regulations. Preparation for external audits and assistance with audit responses.</p>
  </div>
</div>
      </div>
      <div className="MC-text-container1">
      <h1 className="MC-heading455">
        <span className="MC-heading-part111">Benefits of Our Medical Coding</span>
        <span className="MC-heading-part222"> Services</span>
      </h1>
      
      <div className="left-side-content">
        <div className="content-block">
          <h2 className="content-heading">Enhanced Reimbursement</h2>
          <p className="content-paragraph">Accurate coding ensures that your claims are processed efficiently, <br/> leading to timely and appropriate reimbursements.</p>
        </div>
        <div className="content-block">
          <h2 className="content-heading">Accuracy and Compliance</h2>
          <p className="content-paragraph">We adhere to the latest coding guidelines and regulations,<br/> including ICD-10-CM/PCS, CPT, and HCPCS codes.</p>
        </div>
        
            <div className="content-block">
              <h2 className="content-heading">Improved Efficiency</h2>
              <p className="content-paragraph">Our services streamline your billing process, allowing <br/> your staff to focus on patient care.</p>
            </div>
            {showFullText && (
          <>
            <div className="content-block">
              <h2 className="content-heading">Compliance Assurance</h2>
              <p className="content-paragraph">We keep your practice compliant with the ever-changing regulations,<br/> safeguarding you from penalties and audits.</p>
            </div>
            <div className="content-block">
              <h2 className="content-heading">Reimbursement and Reporting</h2>
              <p className="content-paragraph">
                Finally, Once claims are processed and reimbursed, our system generates <br/> detailed reports to track key performance metrics such as reimbursement <br/> rates, denial rates, and days in accounts receivable. These reports provide <br/> valuable insights into the financial health of the practice and help identify <br/> areas for improvement in billing and revenue cycle management.
              </p>
            </div>
          </>
        )}
        
        <button className="primary-button" onClick={toggleText}>
          {showFullText ? 'Show Less' : 'Read More'}
        </button>
      </div>

      <img src={department9} alt="Your Image" className="MC-dp-image11" />
    </div>
      <div class="outer-container">
      <h1 className="MC-heading4441">
            <span className="MC-heading-part111">Our </span>
            <span className="MC-heading-part222">Process</span>
          </h1>
  <div class="inner-container">
    <div class="content-box">
    <div class="step-box with-rounded-border">
      <h3 class="content-heading1">Data Collection</h3>
      <p class="content-paragraph1">We gather all necessary medical records .</p>
    </div>
    <img src={group1} alt="Arrow" class="arrow-image1"/>
    </div>
    <div class="content-box">
    <div class="step-box with-rounded-border">
      <h3 class="content-heading1">Coding Assignment</h3>
      <p class="content-paragraph1">Our certified coders assign the appropriate ICD-10, CPT</p>
    </div>
    <img src={group2} alt="Arrow" class="arrow-image2"/>
    </div>
    <div class="content-box">
    <div class="step-box with-rounded-border">
      <h3 class="content-heading1">Submission</h3>
      <p class="content-paragraph1">Once verified, the coded records are submitted</p>
    </div>
    <img src={group3} alt="Arrow" class="arrow-image3"/>
    </div>
    <div class="content-box">
    <div class="step-box with-rounded-border">
      <h3 class="content-heading1">Quality Check</h3>
      <p class="content-paragraph1">Each coded record undergoes a rigorous quality </p>
    </div>
    <img src={group4} alt="Arrow" class="arrow-image4"/>
    </div>
    <div class="content-box">
    <div class="step-box with-rounded-border">
      <h3 class="content-heading1">Feedback and Reporting</h3>
      <p class="content-paragraph1">We provide detailed reports and feedback</p>
    </div>
    <img src={group5} alt="Arrow" class="arrow-image5"/>
    </div>
  </div>
  </div>
  </div>

{/* <Footer /> */}

    </>
    
  );
};

export default Medicalcoding;
