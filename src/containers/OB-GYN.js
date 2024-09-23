import React, { useState } from 'react';
// import CustomNavbar from '../components/common/CustomNavbar'; // Import the Navbar component
// import Footer from '../components/common/Footer';

import './ob-gyn.css'; // Import the CSS file for styling

import bg2 from '../assets/img/bg-2 1.png';
import department11 from '../assets/img/department1.png';
import department12 from '../assets/img/department2.png';

const Obgyn = () => {
  const [showMore, setShowMore] = useState(false); // State to manage text visibility

  const toggleText = () => {
    setShowMore(!showMore); // Toggles between showing more or less
  };
  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="OB-content">
        <h1 className="OB-nav-heading">OB/GYN</h1>
        <p className="OB-paragraph1">
        Comprehensive Revenue Cycle Management (RCM) Services by RDS
        </p>
      </div>
     
        <div className="OB-overlay-content1">
          <h1 className="OB-heading4">
          <span className="OB-heading-part11">Advanced-based RCM services <br/> for</span>
            <span className="OB-heading-part22"> OB/ GYN practices.</span>
          </h1>
          <p className="OB-paragraph201">
          OB/GYN professionals require a partner that understands their unique needs,<br/> offering comprehensive support that spans from advanced reporting and <br/> analytics to efficient billing and precisely timed appointment scheduling._ _ is <br/> dedicated to meeting these needs with a level of sophistication that sets a new <br/> standard in the field.
          </p>
        </div>
        <img src={department11} alt="Your Image" className="OB-dp-image" />
      
 
       
        <div className="OB-image-container2">
      <img src={bg2} alt="description" className="OB-my-image1" />
      <div className="OB-overlay-content12">
        <h1 className="OB-heading44">
          <span className="OB-heading-part11">Consider the highlights of </span>
          <span className="OB-heading-part222">our service: </span>
        </h1>
        <p className="OB-paragraph2014">
          We boast a remarkable 99% first-pass claim acceptance rate, ensuring
          <br /> that nearly all claims are processed smoothly right from the outset.
          <br /> Our success rate in resolving denied claims at the first attempt is also
          <br /> impressively close to 99%, highlighting our expertise in navigating the
          <br /> complexities of claim resolution. We handle both in-network and out-of-network claims with ease,
          <br /> adapting to your specific billing requirements.
        </p>
        
        {/* Conditionally render the rest of the text below */}
        {showMore && (
          <p className="OB-paragraph-more">
            Our approach significantly enhances workflow and practice management,
            <br /> tailored specifically to the rhythms and demands of OB/GYN practices.
            <br /> We offer detailed OB/GYN reports and analyses, providing deep insights
            <br /> into your practice’s operations and opportunities for growth.
            <br /> Our scheduling system is designed with OB/GYN practices in mind,
            <br /> ensuring that your workflow is as efficient as possible.
            <br /> Our practice management system is crafted to cater specifically to the
            <br /> needs of gynecologists and nurse practitioners in women's health,
            <br /> offering 24/7 access from any location with internet connectivity,
            <br /> whether you're at home, in the hospital, or elsewhere.
          </p>
        )}

      </div>
      <div className='OB-button'>
  <button
    className={`OB-cta-button ${showMore ? "OB-show-less-button" : "OB-read-more-button"} animated-btn`}
    onClick={toggleText}
  >
    {showMore ? 'Show Less' : 'Read More'}
  </button>
</div>

      <img src={department12} alt="Your Image" className="OB-dp-image1" />
    </div>

        <div className="OB-overlay-content11">
            <h1 className="OB-heading34">
            <span className="OB-heading-part11">Integrating a billing system can enhance your<br /> professional image and</span>
            <span className="OB-heading-part2222">service quality</span>
            </h1>
            <p className="OB-paragraph23">
            By partnering with OB/GYN billing specialists, you can elevate your practice in several key areas
            </p>
            </div>
            <div class="OB-container-wrapper2">
 
 <div class="OB-container-item2">
   <div class="OB-checkbox-container2">
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
       <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
     </svg>
   </div>
   <div class="OB-content-container2">
     <p> Core billing services</p>
   </div>
 </div>
 <div class="OB-container-item2">
   <div class="OB-checkbox-container2">
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
       <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
     </svg>
   </div>
   <div class="OB-content-container2">
     <p>  Core billing services</p>
   </div>
 </div>

 <div class="OB-container-item2">
   <div class="OB-checkbox-container2">
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
       <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
     </svg>
   </div>
   <div class="OB-content-container2">
     <p>  Core billing services</p>
   </div>
 </div>
 <div class="OB-container-item2">
   <div class="OB-checkbox-container2">
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
       <path d="M16.0003 31.8337C7.25558 31.8337 0.166992 24.7451 0.166992 16.0003C0.166992 7.25558 7.25558 0.166992 16.0003 0.166992C24.7451 0.166992 31.8337 7.25558 31.8337 16.0003C31.8337 24.7451 24.7451 31.8337 16.0003 31.8337ZM16.0003 28.667C19.3597 28.667 22.5816 27.3325 24.957 24.957C27.3325 22.5816 28.667 19.3597 28.667 16.0003C28.667 12.6409 27.3325 9.4191 24.957 7.04364C22.5816 4.66818 19.3597 3.33366 16.0003 3.33366C12.6409 3.33366 9.4191 4.66818 7.04364 7.04364C4.66818 9.4191 3.33366 12.6409 3.33366 16.0003C3.33366 19.3597 4.66818 22.5816 7.04364 24.957C9.4191 27.3325 12.6409 28.667 16.0003 28.667ZM14.4217 22.3337L7.70366 15.6156L9.94249 13.3767L14.4217 17.856L23.3787 8.89907L25.6175 11.1379L14.4217 22.3337Z" fill="#076AFF"/>
     </svg>
   </div>
   <div class="OB-content-container2">
     <p> Core billing services</p>
   </div>
 </div>

 </div>
          
          <p className="OB-paragraph231">
          To boost your team's capabilities and streamline operations, ___ offers revenue cycle management solutions aimed at <br/> enhancing your practice's financial health.
            </p>
    </>
  );
};

export default Obgyn;
