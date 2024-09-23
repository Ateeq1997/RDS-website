import React, { useState } from 'react';
import GridContainer2 from '../components/common/GridContainer2';
import GridContainer1 from '../components/common/GridContainer1';
import { Button } from 'react-bootstrap';
import './credentialing.css'; // Import the CSS file for styling
import {useNavigate} from 'react-router-dom';

import bg2 from '../assets/img/bg-2 1.png';
import pngwing from '../assets/img/pngwing.png';
import department6 from '../assets/img/departments-5 3.png';
import department10 from '../assets/img/departments-5 1 (4).png';
import department11 from '../assets/img/departments-5 5 (2).png';
import IsolationMode4 from '../assets/img/Isolation_Mode4.svg';
import IsolationMode2 from '../assets/img/Isolation_Mode2.svg';
import IsolationMode5 from '../assets/img/Isolation_Mode5.svg';


const Credentialing = () => {
  const navigate = useNavigate(); // Define the navigate function

  const handleContainerClick = (path) => {
    console.log('Icon container clicked');
    navigate(path); // Use navigate function here
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
      <div className="C-content">
        <h1 className="C-nav-heading">Credentialing</h1>
        <p className="C-paragraph1">
          Medical billing streamlines reimbursement by translating healthcare <br/> services into codes, submitting claims to insurers....
        </p>
      </div>

        <div className="C-overlay-content1">
          <h1 className="C-heading3">
            <span className="C-heading-part11">Credentialing and Enrollment Made <br/> Twice as</span>
            <span className="C-heading-part22"> Fast and Easy</span>
          </h1>
        </div>
  <div className='C-grid1'>
      <GridContainer2 />
      </div>
      <div className="C-image-container2">
        <img src={bg2} alt="description" className="C-my-image1" />
        <div className="C-overlay-content2">
          <h1 className="C-heading0">
            <span className="C-heading-part11">We rapidly enroll providers into <br/> premium </span>
            <span className="C-heading-part22"> payer networks</span>
          </h1>
          <p className="C-paragraph201">
          Credentialing, also referred to as insurance or doctor credentialing, is a <br/> process that verifies the qualifications, skills, and legitimacy of <br/>healthcare providers. This ensures that providers possess the necessary <br/>licenses, certifications, and education required to deliver healthcare<br/> services to patients.
          </p>
      
          <img src={department6} alt="Your Image" className="C-dp-image" />
          </div>
        </div>
       
      <div className="C-gradient-container">
  <img src={pngwing} alt="Background Image" className="C-background-image" />
  <div className="C-overlay"></div> 
  <div className="C-content-wrapper">
    <div className="C-text-content">
      <h1 className="C-heading41">
        <span className="C-heading-part1111">We rapidly enroll providers into <br/> premium payer networks</span>
      </h1>
      <p className="C-paragraph2011">
          Credentialing, also referred to as insurance or doctor credentialing, is a  process that <br/> verifies the qualifications, skills, and legitimacy of healthcare providers. This ensures that <br/> providers possess the necessary licenses, certifications, and education required to <br/> deliver healthcare services to patients.
          </p> 
    </div>
    <div class="C-container-wrapper1">
  <div class="C-container-box">
    <h2>Surveying the provider
    </h2>
    <p>Our credentialing process starts with an extensive survey carried out by our credentialing specialists. This involves thorough <br/> interviews with providers to collect crucial information, including license numbers, educational history, demographics, and<br/> professional background.</p>
  </div>
  <div class="C-container-box">
    <h2>Choosing the insurance company</h2>
    <p>Our medical credentialing services help providers strategically select insurance partners that align with their practice goals <br/> and license type. We also assist in finalizing insurance panels based on the practice location.</p>
  </div>
  <div class="C-container-box">
    <h2>CAQH Enrollment and Management</h2>
    <p>We handle CAQH application submissions, manage ProView accounts, and maintain up-to-date credentials <br/> for seamless primary source verification. Additionally, we assist with payer credentialing submissions to <br/> ensure </p>
  </div>
  <div class="C-container-box">
    <h2>Ensure Fast Credentialing Approval
    </h2>
    <p>Although the typical timeline is 60-120 days, our provider credentialing experts take proactive steps to accelerate the process.<br/> Our team engages in weekly interactions with payers, advocating for the rapid processing and endorsement of your <br/> credentialing applications.</p>
  </div>
  <div class="C-container-box">
    <h2>In-Network Enrollment</h2>
    <p>Once credentialing is complete, your application moves to the contract phase. During this phase, you may be offered an in-<br/>network contract that includes fee schedules and eligible CPT billing codes. We address closed panel challenges and<br/> advocate through appeals to secure your inclusion.</p>
  </div>
  <div class="C-container-box">
    <h2>Winning you Hospital Privileges Application</h2>
    <p>As credentialing wraps up, our active involvement persists. We assist you in gaining all necessary hospital privileges: whether <br/>it’s admitting, courtesy, or surgical rights.
    </p>
  </div>
  <div class="C-container-box">
    <h2>Ongoing Monitoring and Updates</h2>
    <p>Our ongoing monitoring guarantees that your company's credentials are always up to date, preventing any lapses in<br/>certification. Our team of experts carefully tracks credentialing expiration dates and performs thorough daily and weekly <br/>reviews to ensure your active status is maintained without interruption.</p>
  </div>
</div>
  </div>
</div>
<div className="C-text-container1">
        <h1 className="C-heading45">
          <span className="C-heading-part111">Comprehensive Healthcare <br/> </span>
          <span className="C-heading-part222">Credentialing Support</span>
        </h1>
        <div class="C-left-side-content">
  <div class="C-content-block">
    <h2 class="C-content-heading">Medicare and Medicaid Provider Enrollment</h2>
    <p class="C-content-paragraph">We enroll healthcare providers in Medicare and Medicaid programs, the largest health <br/> insurance programs in the US, which collectively cover millions of Americans.</p>
  </div>
  <div class="C-content-block">
    <h2 class="C-content-heading">Commercial Insurance Credentialing</h2>
    <p class="C-content-paragraph">We credential providers with commercial insurance payers such as Aetna and Humana, <br/> which are private health insurers offering various plans and networks. </p>
  </div>
  <div class="C-content-block">
    <h2 class="C-content-heading">Here are some rephrased versions of "NPI Registration (Type 1 and Type 2)</h2>
    <p class="C-content-paragraph">Our credentialing solutions help individual providers (Type 1) and <br/>organizations (Type 2) with obtaining and updating their National Provider<br/> Identifier (NPI),</p>
  </div>
</div>
        <img src={department10} alt="Your Image" className="C-dp-image131" />
      </div>
      <div className="C-image-container21">
        <img src={bg2} alt="description" className="C-my-image1" />
        <div className="C-overlay-content11">
        <div class="C-left-side-content">
  <div class="C-content-block">
    <h2 class="C-content-heading">CAQH Registration and Maintenance</h2>
    <p class="C-content-paragraph">We assist providers in distinguishing themselves from their competitors. Our credentialing specialists <br/>handle the registration</p>
  </div>
  <div class="C-content-block">
    <h2 class="C-content-heading">CR DMEPOS Enrollment</h2>
    <p class="C-content-paragraph">Providers using our credentialing service can enroll in the Medicare DMEPOS program, which covers <br/>items such as wheelchairs, oxygen equipment, braces, and diabetic supplies.</p>
  </div>
  <div class="C-content-block">
    <h2 class="C-content-heading">Hospital Privileges</h2>
    <p class="C-content-paragraph">We facilitate physicians with obtaining and renewing their hospital privileges, which are the rights and <br/>responsibilities granted by a hospital to a provider to practice within its facilities.</p>
  </div>
</div>
<img src={department6} alt="Your Image" className="C-dp-image1" />
          </div>
        </div>

        <div className="C-text-container11">
        <div class="C-left-side-content1">
  <div class="C-content-block">
    <h2 class="C-content-heading">Contract Negotiation</h2>
    <p class="C-content-paragraph">We enroll healthcare providers in Medicare and Medicaid programs, the largest health <br/> insurance programs in the US, which collectively cover millions of Americans.</p>
  </div>
  <div class="C-content-block">
    <h2 class="C-content-heading">Revalidation & Re-Credentialing</h2>
    <p class="C-content-paragraph">Our medical insurance credentialing service manages every physician’s revalidating and <br/> re-credentialing enrollment process</p>
  </div>
  <div class="C-content-block">
    <h2 class="C-content-heading">Reimbursement Issues Audit</h2>
    <p class="C-content-paragraph">Our credentialing and privileging specialists audit reimbursement issues, such as underpayments,<br/> denials, delays, or errors from insurance payers. Providers also get accounts receivable (AR) follow up <br/> services to help collect outstanding payments from payers</p>
  </div>
</div>
        <img src={department10} alt="Your Image" className="C-dp-image119" />
      </div>
      <div className="C-image-container211">
        <img src={bg2} alt="description" className="C-my-image1" />
        <div className="C-overlay-content11">
        <div class="C-left-side-content">
  <div class="C-content-block">
    <h2 class="C-content-heading">Providers State License</h2>
    <p class="C-content-paragraph">We assist providers in distinguishing themselves from their competitors. Our credentialing specialists <br/>handle the registration</p>
  </div>
  <div class="C-content-block">
    <h2 class="C-content-heading">DEA Certificate & Renewal</h2>
    <p class="C-content-paragraph">BellMedEx medical credentialing experts help providers with obtaining and renewing their <br/>Drug Enforcement Administration (DEA) certificate, which is a registration that authorizes them to prescribe <br/>controlled substances in the US.</p>
  </div>
  <div class="C-content-block">
    <h2 class="C-content-heading">CLIA Registration</h2>
    <p class="C-content-paragraph">Providers using our physician credentialing services get help with registering their laboratory under the <br/> Clinical Laboratory Improvement Amendments (CLIA), which are federal standards that regulate laboratory <br/> testing performed on human specimens.</p>
  </div>
</div>
<img src={department6} alt="Your Image" className="C-dp-image11" />
          </div>
        </div>
        <div className="C-text-container111">
        <h1 className="C-heading451">
          <span className="C-heading-part111">BellMedEx Premier Credentialing <br/> </span>
          <span className="C-heading-part222">Services Nationwide</span>
        </h1>

    <p class="C-content-paragraph12">Looking for the best credentialing solutions by credentialing specialist companies near you? <br/> With over a decade of experience, BellMedEx is the best provider credentialing company for <br/> practices across all 50 states of the USA. 
</p>
    <p class="C-content-paragraph12">We start by thoroughly assessing your specific practice needs and the requirements of your <br/> state and the payers you want to work with. From there, we leverage our extensive payer <br/> contracts and relationships to compile and verify all necessary documents, licenses, certifications, <br/> insurance, and more to meet each payer’s distinct criteria.</p>

        <img src={department11} alt="Your Image" className="C-dp-image112" />
      </div>
      <div className="C-text-container">
        <div className="C-overlay-content">
          <h1 className="C-heading4">
            <span className="C-heading-part111">Credentialing and Payer Enrollment Services <br/> For All </span>
            <span className="C-heading-part222">Healthcare Organizations</span>
          </h1>
        
        </div>
        <div className='C-grid'>
        <GridContainer1  handleContainerClick={handleContainerClick}/>
        </div>
        <div>
      {showContainers && (
        <div className="C-grid-container">
          <div className="C-icon-container">
            <img src={IsolationMode4} alt="Icon 3" className="C-icon" />
            <h3 className="C-heading">Practice Management</h3>
            <p className="C-text">
              Optimize Administrative Efficiency Appointment Scheduling with Cutting-Edge Front Office Software for Seamless Practice Operations
            </p>
          </div>
          <div className="C-icon-container">
            <img src={IsolationMode2} alt="Icon 4" className="C-icon" />
            <h3 className="C-heading">Business Intelligence</h3>
            <p className="C-text">
              Utilize data analytics to unlock valuable business insights, empowering informed decision-making. Drive strategic success by harnessing the power of data-driven strategies.
            </p>
          </div>
          <div className="C-icon-container">
            <img src={IsolationMode5} alt="Icon 5" className="C-icon" />
            <h3 className="C-heading">Workforce Augmentation</h3>
            <p className="C-text">
              Accelerate your expansion by leveraging the expertise of on-demand professionals and the efficiency of automation.
            </p>
          </div>
        </div>
      )}
       {!showContainers && (
    <div className="C-center-page">
      <Button className="C-Btn-custom" onClick={handleViewAllClick}>
        View all
      </Button>
    </div>
  )}
   {showContainers && (
    <div className="C-center-page">
            <Button className="C-Btn-custom1" onClick={handleShowLessClick}>
              Show less
            </Button>
            </div>
          )}
    </div>
        </div>

    </>
  );
};

export default Credentialing;
