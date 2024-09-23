import React from 'react';
// import CustomNavbar from '../components/common/CustomNavbar'; // Import the Navbar component
import GridContainer2 from '../components/common/GridContainer2';
import './accountreceivables.css'; // Import the CSS file for styling
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import bg2 from '../assets/img/bg-2 1.png';


const Accountreceivables = () => {
  // const navigate = useNavigate();

  // const handleContainerClick = () => {
  //   // Handle the click event
  //   console.log('Icon container clicked');
  //   navigate('/');
  // };
  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="AR-content">
        <h1 className="AR-nav-heading">Account Receivables A/R</h1>
        <p className="AR-paragraph1">
        Medical billing streamlines reimbursement by translating healthcare <br/>services into codes, submitting claims to insurers....

        </p>
      </div>
      <div className='AR-grid'>
      <GridContainer2 />
      </div>
      <div className="AR-image-container2">
          <img src={bg2} alt="description" className="AR-my-image1" />
          <div className="AR-overlay-content">
            <h1 className="AR-heading3">
              <span className="AR-heading-part11">The most advanced way of health <br/></span>
              <span className="AR-heading-part22">  Care analytics</span>
            </h1>
            <p className="AR-paragraph2">
            RDS Precision offers an all-encompassing view of your account, encompassing <br/> appointment requests and upcoming appointments. 
            Our RDS Precision Practice <br/> Analytics Dashboard equips you with the tools to quantify success and immediate <br/> access to essential data.
            </p>
            <p className="AR-paragraph3" >
            Through our Charts feature, you gain a holistic snapshot of a patient's entire medical <br/> history and clinical summary at a single glance.
             This allows for more meaningful patient <br/> interactions and the ability to plan more effective treatments.
            </p>

          </div>
      </div>
    

    </>
    
  );
};

export default Accountreceivables;
