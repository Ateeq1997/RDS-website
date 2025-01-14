import React from 'react';
// import CustomNavbar from '../components/common/CustomNavbar'; // Import the Navbar component
// import Footer from '../components/common/Footer';
import './practicemanagement.css'; // Import the CSS file for styling

import department3 from '../assets/img/departments-5 1 (2).png';
import copySharp from '../assets/img/copy-sharp.svg';
import imageLock from '../assets/img/image-lock.svg';
import businessCase from '../assets/img/business-case.svg';
import videoCamera from '../assets/img/video-camera.svg';

const Practicemanagement = () => {
  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="PM2-content">
        <h1 className="PM2-nav-heading">Practice Management</h1>
        <p className="PM2-paragraph1">Craft an all-encompassing patient journey with RDS Precision.</p>
      </div>

      <div className="PM2-grid-container">
        <div className="PM2-icon-container1">
          <img src={copySharp} alt="Icon 1" className="PM2-icon" />
          <h3 className="PM2-heading">Patient Appointment</h3>
          <p className="PM2-text">
            The inception of Revenue Cycle Management (RCM) commences with the patient appointment process...
          </p>
        </div>
        <div className="PM2-icon-container1">
          <img src={imageLock} alt="Icon 2" className="PM2-icon" />
          <h3 className="PM2-heading">Secure & easy</h3>
          <p className="PM2-text">
            RDS Precision handles your daily financial operations with advanced capabilities.
          </p>
        </div>
        <div className="PM2-icon-container1">
          <img src={businessCase} alt="Icon 3" className="PM2-icon" />
          <h3 className="PM2-heading">live within minutes</h3>
          <p className="PM2-text">
            RDS Precision efficiently oversees your day-to-day financial operations with state-of-the-art capabilities
          </p>
        </div>
        <div className="PM2-icon-container1">
          <img src={videoCamera} alt="Icon 4" className="PM2-icon" />
          <h3 className="PM2-heading">Great customer care</h3>
          <p className="PM2-text">
            RDS Precision efficiently handles your daily financial operations with state-of-the-art capabilities
          </p>
        </div>
      </div>

      <div className="PM2-text-container">
        <div className="PM2-overlay-content">
          <h1 className="PM2-heading44">
            <span className="PM2-heading-part111">Increase revenue profitability <br /> with acomprehensive practice</span>
            <span className="PM2-heading-part222"><br /> management solution </span>
          </h1>
          <p className="PM2-paragraph21">
            A versatile practice management solution that seamlessly integrates <br /> medical, operational, and financial aspects for unique care organizations. <br />
            Whether you aim to enhance patient care or boost financial returns, RDS <br /> Precision offers the flexibility and accessibility to empower your practice
          </p>
        </div>
        <img src={department3} alt="Your Image" className="PM2-dp-image1" />

        {/* <div class="container-wrapper">
 
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
  <div class="container-item">
    <div class="checkbox-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
      </svg>
    </div>
    <div class="content-container1">
      <p>State Medicare & Mediciad enrollment <br /> including RR Medicare, Tricare, BWC</p>
    </div>
  </div>
</div> */}

      </div>
      <div className="PM2-text-container11">
        <div className="PM2-overlay-content1">
          <h1 className="PM2-heading4">
            <span className="PM2-heading-part111">The Most advanced way Of health <br/> </span>
            <span className="PM2-heading-part222">Care analytics </span>
          </h1>
          <p className="PM2-paragraph21">
          RDS Precision offers a holistic account overview, encompassing appointment requests and upcoming <br /> appointments. 
          The RDS Precision Practice Analytics Dashboard enables you to gauge performance and <br /> access essential data instantly.
          Utilizing Charts, you gain a comprehensive insight into a patient's entire medical history and clinical summary at a glance. This empowers you to establish more meaningful patient connections and enhance treatment planning.
          </p>
          <p className="PM2-paragraph21">
          Utilizing Charts, you gain a comprehensive insight into a patient's entire medical history and clinical <br /> summary at 
          a glance. This empowers you to establish more meaningful patient connections and enhance <br /> treatment planning.
          </p>
        </div>
        </div>
        {/* {/* <Footer /> */}
    </> 
  );
};

export default Practicemanagement;
