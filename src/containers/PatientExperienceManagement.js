import React from 'react';
// import CustomNavbar from '../components/common/CustomNavbar'; // Import the Navbar component
// import Footer from '../components/common/Footer';
import './patientexperiencemanagement.css'; // Import the CSS file for styling
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom


import bg2 from '../assets/img/bg-2 1.png';
import department1 from '../assets/img/departments-5 1 (1).png';
import department2 from '../assets/img/departments-5 2.png';
import department3 from '../assets/img/departments-5 5.png';
import department4 from '../assets/img/departments-5 4.png';

const Patientexperiencemanagement = () => {
    // const navigate = useNavigate();

    
    //   navigate('/patient-experience-management');

  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="PE-content">
        <h1 className="PE-nav-heading">Patient experience <br/> management</h1>
        <p className="PE-paragraph1">Craft an all-encompassing patient journey with RDS Precision.
        </p>
      </div>
      <div className="PE-overlay-content">
            <h1 className="PE-heading3">
              <span className="PE-heading-part11">Grow your practice by end-to-end patient <br/></span>
              <span className="PE-heading-part22">  experience</span>
            </h1>
            <p className="PE-paragraph2">
            RDS Precision offers an all-encompassing view of your account, encompassing <br/> appointment requests and upcoming appointments. 
            Our RDS Precision Practice <br/> Analytics Dashboard equips you with the tools to quantify success and immediate <br/> access to essential data.
            </p>
            <p className="PE-paragraph3" >
            Through our Charts feature, you gain a holistic snapshot of a patient's entire medical <br/> history and clinical summary at a single glance.
             This allows for more meaningful patient <br/> interactions and the ability to plan more effective treatments.
            </p>

          </div>
          <div className="PE-grid-container">
          <div className="PE-icon-container">
            <p className="PE-text">Create <br/> Patient <br/>experience</p>
          </div>
          <div className="PE-icon-container">
            <p className="PE-text">Distinguish <br/>areas of <br/>excellence..</p>
          </div>
          <div className="PE-icon-container">
            <p className="PE-text">Formulate <br/>enhancement <br/>strategies</p>
          </div>
          <div className="PE-icon-container">
            <p className="PE-text">Assets for<br/> suggested <br/>transformation</p>
          </div>
          <div className="PE-icon-container">
            <p className="PE-text">Evaluate the <br/>efficacy of  <br/>enhancement</p>
          </div>
          <div className="PE-icon-container">
            <p className="PE-text">Commend <br/>patient <br/>achievements</p>
          </div>
        </div>
        <div className="PE-overlay-content1">
  <div className="PE-text-container">
    <h1 className="PE-heading4">
      <span className="PE-heading-part111">Book An appointment that’s <br /> convenient</span>
      <span className="PE-heading-part222"> For You. </span>
    </h1>
    <p className="PE-paragraph21">
      Healthcare systems globally, in collaboration with government agencies and <br /> innovative 
      startups, are increasingly developing and providing telehealth solution <br /> With our service,
      you can conveniently consult with one of our friendly and well- <br />informed doctors online, 
      no matter your location or how hectic your schedule <br /> may be.
    </p>
  </div>
  <img src={department1} alt="Your Image" className="PE-dp-image" />
</div>
<div className="PE-overlay-content2">
  <div className="PE-text-container1">
    <h1 className="PE-heading5">
      <span className="PE-heading-part111">Make your practice more <br /> worhwhile </span>
      <span className="PE-heading-part222">& rewarding </span>
    </h1>
    <p className="PE-paragraph211">
    To be an exemplary healthcare provider, alignment with the organization's <br />
    values and vision, along with the necessary resources for effective delivery, is<br />
     crucial. RDS Precision stands as the optimal tool and service for maximizing the <br />
      profitability of your practice. With over six years of demonstrated expertise,<br />
       Carevma is a trusted partner for complex health systems
    </p>
  </div>
  <img src={department2} alt="Your Image" className="PE-dp-image1" />
</div>

   
      
        <div className="PE-image-container2">
          <img src={bg2} alt="description" className="PE-my-image1" />
          <div className="PE-overlay-content3">
            <h1 className="PE-heading3">
              <span className="PE-heading-part11">An explosive way to empower your practice <br/> as a</span>
              <span className="PE-heading-part22"> healthcare provider</span>
            </h1>
            <p className="PE-paragraph2">
            RDS Precision offers an all-encompassing view of your account, encompassing <br/> appointment requests and upcoming appointments. 
            Our RDS Precision Practice <br/> Analytics Dashboard equips you with the tools to quantify success and immediate <br/> access to essential data.
            </p>
            <div class="PE-container-row">
  <div class="PE-container">
    <div class="PE-icon-wrapper">
      <div class="PE-icon">
        <div class="PE-inner-icon"></div>
        <div class="PE-inner-icon"></div>
      </div>
    </div>
    <div class="PE-icon-text">Eligibility <br/>verification</div>
  </div>
  <div class="PE-container">
    <div class="PE-icon-wrapper">
      <div class="PE-icon">
        <div class="PE-inner-icon"></div>
        <div class="PE-inner-icon"></div>
      </div>
    </div>
    <div class="PE-icon-text">Coverage <br/> detection</div>
  </div>
  <div class="PE-container">
    <div class="PE-icon-wrapper">
      <div class="PE-icon">
        <div class="PE-inner-icon"></div>
        <div class="PE-inner-icon"></div>
      </div>
    </div>
    <div class="PE-icon-text">Cause of <br/> claims denial</div>
  </div>
  <div class="PE-container">
    <div class="PE-icon-wrapper">
      <div class="PE-icon">
        <div class="PE-inner-icon"></div>
        <div class="PE-inner-icon"></div>
      </div>
    </div>
    <div class="PE-icon-text">Patient <br/> estimation</div>
  </div>
</div>
          </div>    
      </div>
      <div className="PE-overlay-content1">
  <div className="PE-text-container">
    <h1 className="PE-heading4">
      <span className="PE-heading-part111">Make your practice more <br/> worhwhile </span>
      <span className="PE-heading-part222">& rewarding</span>
    </h1>
    <p className="PE-paragraph21">
    To be an exemplary healthcare provider, alignment with the organization's values <br/>  and vision, along with the necessary resources for effective delivery, is crucial.<br/>  RDS Precision stands as the optimal tool and service for maximizing the <br/>  profitability of your practice. With over six years of demonstrated expertise,<br/>  Carevma is a trusted partner for complex health systems
    </p>
  </div>
  <img src={department3} alt="Your Image" className="PE-dp-image" />
</div>
<div className="PE-image-container2">
          <img src={bg2} alt="description" className="PE-my-image1" />
          <div className="PE-overlay-content33">
            <h1 className="PE-heading3">
              <span className="PE-heading-part11">Create a superior patient experience by </span>
              <span className="PE-heading-part22">faster claims</span>
            </h1>
            <p className="PE-paragraph2">
            Our adaptable, consultative strategy, along with our comprehensive suite of services and a dedicated <br/> back-office team, directly aligns with your 
            requirements and delivers technological solutions.
            </p>
            <p className="PE-paragraph3" >
            Our Insurance Claims Management and Reimbursement services are designed to boost collections and <br/> optimize you
            </p>
            </div>
            </div>
            <div className="PE-overlay-content2">
  <div className="PE-text-container1">
    <h1 className="PE-heading5">
      <span className="PE-heading-part111">Chat with our care team <br/> anytime </span>
      <span className="PE-heading-part222">you need to </span>
    </h1>
    <p className="PE-paragraph212">
    To be an exemplary healthcare provider, alignment with the organization's <br />
    values and vision, along with the necessary resources for effective delivery, is<br />
     crucial. RDS Precision stands as the optimal tool and service for maximizing the <br />
      profitability of your practice. With over six years of demonstrated expertise,<br />
       Carevma is a trusted partner for complex health systems
    </p>
  </div>
  <img src={department4} alt="Your Image" className="PE-dp-image1" />
</div>
     
    </>
  );
};

export default Patientexperiencemanagement;
