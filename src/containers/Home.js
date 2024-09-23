import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import GridContainer1 from '../components/common/GridContainer1';
import './Home.css'; // Import CSS for styling
import { Link, useNavigate} from 'react-router-dom';


// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Import images
import frame3 from '../assets/img/Frame 3.svg';
import micro from '../assets/img/micro.png';
import bg2 from '../assets/img/bg-2 1.png';
import doctor from '../assets/img/doctor.png';
import ellipse from '../assets/img/Ellipse.svg';
import pngwing from '../assets/img/pngwing.png';
import ellipse1 from '../assets/img/review-1.png';
import ellipse2 from '../assets/img/review-2.png';
import logo1 from '../assets/img/logo1.png';
import logo2 from '../assets/img/logo2.png';
import logo3 from '../assets/img/logo3.png';
import logo4 from '../assets/img/logo4.svg';
import logo5 from '../assets/img/logo5.svg';
import logo6 from '../assets/img/logo6.png';
import logo7 from '../assets/img/logo7.png';
import logo8 from '../assets/img/logo8.png';
import IsolationMode4 from '../assets/img/Isolation_Mode4.svg';
import IsolationMode2 from '../assets/img/Isolation_Mode2.svg';
import IsolationMode5 from '../assets/img/Isolation_Mode5.svg';


const HomeComponent = () => {
  const navigate = useNavigate(); // Define the navigate function


  const handleButtonClick = () => {
    navigate('/specialities'); // This should navigate to the /specialities page
};

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
  const handleClick = () => {
    navigate('/pricing');
  };

  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="H-content">
        <h1 className="H-nav-heading">Emphasize <br/> Your Expertise</h1>
        <p className="H-paragraph1">Reclaim your time for patient care by using RDS Precision to handle <br/>your medical billing</p>
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Find your speciality
  </button>
  <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/oncology">Oncology</Link></li>
        <li><Link className="dropdown-item" to="/obgyn">OB/GYN</Link></li>
        <li><Link className="dropdown-item" to="/cardiology">Cardiology</Link></li>
        <li><Link className="dropdown-item" to="/dermatology">Dermatology</Link></li>
      </ul>
</div>

<button className="H-primary-button" onClick={handleButtonClick}>
                See all Specialities
            </button>
        <img src={micro} alt="description" className="H-micro-image" />
      </div>

      <div className="H-main-container1">
        <h1 className="H-heading2">
          <span className="heading-part1">RDS Precision </span>
          <span className="heading-part2">Billing</span>
        </h1>
<div className='Home1-grid'>
        <GridContainer1  handleContainerClick={handleContainerClick}/>
        </div>
        <div>
      {showContainers && (
        <div className="Home-grid-container">
          <div className="H-icon-container">
            <img src={IsolationMode4} alt="Icon 3" className="H-icon" />
            <h3 className="H-heading">Practice Management</h3>
            <p className="H-text">
              Optimize Administrative Efficiency Appointment Scheduling with Cutting-Edge Front Office Software for Seamless Practice Operations
            </p>
          </div>
          <div className="H-icon-container">
            <img src={IsolationMode2} alt="Icon 4" className="H-icon" />
            <h3 className="H-heading">Business Intelligence</h3>
            <p className="H-text">
              Utilize data analytics to unlock valuable business insights, empowering informed decision-making. Drive strategic success by harnessing the power of data-driven strategies.
            </p>
          </div>
          <div className="H-icon-container">
            <img src={IsolationMode5} alt="Icon 5" className="H-icon" />
            <h3 className="H-heading">Workforce Augmentation</h3>
            <p className="H-text">
              Accelerate your expansion by leveraging the expertise of on-demand professionals and the efficiency of automation.
            </p>
          </div>
        </div>
      )}
       {!showContainers && (
    <div className="center-page">
      <Button className="Btn-custom animated-btn" onClick={handleViewAllClick}>
        View all
      </Button>
    </div>
  )}
   {showContainers && (
            <Button className="Btn-custom animated-btn" onClick={handleShowLessClick}>
              Show less
            </Button>
          )}
    </div>
    <div className="Home-image-container2">
    <img src={bg2} alt="background" className="Home-bg-image" />
    <div className="Home-overlay-content">
        <img src={doctor} alt="Doctor" className="Home-doctor-image" />
        
        <div className="HDM-heading-container">
            <h1 className="HDM-heading3">
                <span className="heading-part11">We take Immense Pride in our  <br/> Statistical</span>
                <span className="heading-part223"><br/> Achievements</span>
            </h1>
        </div>

        <div className="HDM-content-container">
            <div className="HDM-ellipse-line-container">
                <svg className="small-line" xmlns="http://www.w3.org/2000/svg" width="3" height="400" fill="none">
                    <path d="M1 0V310" stroke="#076AFF" strokeWidth="3" />
                </svg>
                <img src={ellipse} alt="circle" className="ellipse" />
                <img src={ellipse} alt="circle" className="ellipse" />
                <img src={ellipse} alt="circle" className="ellipse" />
                <img src={ellipse} alt="circle" className="ellipse" />
                <img src={ellipse} alt="circle" className="ellipse" />
            </div>
            
            <div className="HDM-text-container">
                <p className="bullet-point">Efficient and Expedient Billing Processes:</p>
                <p className="bullet-point">Tailored Client-Centric Methodologies:</p>
                <p className="bullet-point">Delivering Tailored and Adaptive Strategies:</p>
                <p className="bullet-point">Robust Data Security Protocols:</p>
                <p className="bullet-point">Elevating Coding Accuracy and Workforce Efficiency:</p>
                <button className="Btn-custom1 animated-btn" onClick={handleClick}>
      Get a Quote
    </button>
            </div>
        </div>
    </div>
</div>


        <div className="H-gradient-container">
          <img src={pngwing} alt="Your Image" className="H-background-image" />
          <div className="H-container-wrapper">
            {/* <div className="H-text-22">
              <p>Client Testimonial</p>
            </div> */}
            <h2 className="H-container-heading">Our Clients Love us</h2>         
            <div className="H-container-with-text1">
              <div className="H-text-container">
                <div className="H-text-upper">
                  <p>Their team is excellent. I hardly have to follow-up with them.It's like a seamless operation</p>
                </div>
                <div className="H-text-lower">
                  <img src={ellipse1} alt="Your Image1" className="H-profile-image" />
                  <p className="H-Paragraph12">
                    <span className="H-paragraph-part1">Dr. Sidarth Prasad</span>
                  </p>
                </div>
              </div>
            </div> 
             <div className="H-container-with-text2">
              <div className="H-text-container">
                <div className="H-text-upper">
                  <p>RDS is really an all-in-one solution. The customer service is amazing too.</p>
                </div>
                <div className="H-text-lower">
                  <img src={ellipse2} alt="Your Image1" className="H-profile-image1" />
                  <p className="H-Paragraph12">
                    <span className="H-paragraph-part11"> Dr. Hashim</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="H-container">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
        </div>
        <div className="main-container2">
          <div className="center-content">
            <h1 className="heading22">
              <span className="heading-part1">Serving the most advanced providers in the </span>
              <span className="heading-part2">US</span>
            </h1>
            <p className="description">Empowering healthcare providers nationwide, we specialize in maximizing reimbursements for 
              unpaid <br /> claims. Below is a selection of some of the leading insurance companies we work with.</p>
          </div>
          <div className="logo-grid">
            <div className="logo-item">
              <img src={logo1} alt="Your Image1" className="logo-image" />
            </div>
            <div className="logo-item">
              <img src={logo2} alt="Your Image1" className="logo-image" />
            </div>
            <div className="logo-item">
              <img src={logo3} alt="Your Image1" className="logo-image" />
            </div>
            <div className="logo-item">
              <img src={logo4} alt="Your Image1" className="logo-image" />
            </div>
            <div className="logo-item">
              <img src={logo5} alt="Your Image1" className="logo-image" />
            </div>
            <div className="logo-item">
              <img src={logo6} alt="Your Image1" className="logo-image" />
            </div>
            <div className="logo-item">
              <img src={logo7} alt="Your Image1" className="logo-image" />
            </div>
            <div className="logo-item">
              <img src={logo8} alt="Your Image1" className="logo-image" />
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default HomeComponent;
