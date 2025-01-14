import React from 'react';
import './Footer.css'; // Make sure the CSS file path is correct
import { Link } from 'react-router-dom';
// import DemoIcon from '../../assets/img/foundation_results-demographics.png';
// import SalesIcon from '../../assets/img/material-symbols-light_nest-connect-outline.png';
// import ChatIcon from '../../assets/img/bi_chat-fill.png';
// import AnalysisIcon from '../../assets/img/icon-park.png';
import Logo from '../../assets/img/logo-01 1.svg';
import FacebookIcon from '../../assets/img/facebook 1.svg';
import InstagramIcon from '../../assets/img/instagram 1.svg';
import TwitterIcon from '../../assets/img/twitter 1.svg';
import LinkedinIcon from '../../assets/img/linkedin 1.svg';
import vector1 from '../../assets/img/Vector.png';
import group from '../../assets/img/Group.svg';
import vector2 from '../../assets/img/Vector-2.png';
import vector3 from '../../assets/img/Vector-3.svg';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Footer Top Section */}
            {/* <div className="footer-top">
      <h2 className="footer-top-heading">Ready to Talk?</h2>
      <div className="footer-buttons">
        
        <Link to="/requestademo" className="footer-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="footer-icon-container">
            <img src={DemoIcon} alt="Demo Icon" className="footer-icon" />
          </div>
          <span  className="footer-button-text">Schedule a Demo</span>
        </Link>
        
        <Link to="/requestademo" className="footer-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="footer-icon-container">
            <img src={SalesIcon} alt="Sales Icon" className="footer-icon" />
          </div>
          <span  className="footer-button-text">Connect with Sales</span>
        </Link>
        
        <Link to="/requestademo" className="footer-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="footer-icon-container">
            <img src={ChatIcon} alt="Chat Icon" className="footer-icon" />
          </div>
          <span  className="footer-button-text">Chat with Us</span>
        </Link>
        
        <Link to="/requestademo" className="footer-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="footer-icon-container">
            <img src={AnalysisIcon} alt="Analysis Icon" className="footer-icon" />
          </div>
          <span className="footer-button-text">Request an Analysis</span>
        </Link>

      </div>
    </div> */}
            {/* Footer Main Section */}
            <div className="footer-main">
                <div className="footer-content">
                    <div className="company-info">
                    <Link to="/" className="company-logo-heading">
  <img src={Logo} alt="Company Logo" className="company-logo" />
  <h3 className="company-name">RDS Precision Billing</h3>
</Link>

                        <div className="social-icons">
                            <div className="social-logo">
                                <img src={FacebookIcon} alt="Facebook" />
                            </div>
                            <div className="social-logo">
                                <img src={InstagramIcon} alt="Instagram" />
                            </div>
                            <div className="social-logo">
                                <img src={TwitterIcon} alt="Twitter" />
                            </div>
                            <div className="social-logo">
                                <img src={LinkedinIcon} alt="LinkedIn" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="services">
                            <h3>Services</h3>
                            <ul>
                            <li><Link to="/revenue-cycle-management" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Revenue Cycle Management</Link></li>
                                <li><Link to="/healthcare-digital-marketing" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Healthcare Digital Marketing</Link></li>
                                <li><Link to="/healthcare-analytics" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Healthcare Analytics</Link></li>
                                <li><Link to="/patient-experience-management" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Patient Experience Management</Link></li>
                                <li><Link to="/practice-management" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Practice Management</Link></li>
                            </ul>
                        </div>
                        <div className="legal-notice">
                            <h3>Legal notice</h3>
                            <ul>
                                <li><Link to="/requestademo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Privacy Policy</Link></li>
                                <li><Link to="/requestademo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Non-Discrimination</Link></li>
                                <li><Link to="/requestademo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="explore">
                            <h3>Explore</h3>
                            <ul>
                            <li>
  <a href="https://calendly.com/app/login" 
    target="_blank" 
    rel="noopener noreferrer">
    Book a Call
  </a>
</li>
                       <li><Link to="/requestademo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>News</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <hr className="footer-line" />
                <p>Copyright © 2024, All Rights Reserved</p>
                <div className="footer-images-container">
                   
                <img src={vector1} alt="Background Vector 1" className="back-image1" /> 
                    <img src={group} alt="Background Vector 2" className="back-image2" />
                    <img src={vector2} alt="Background Vector 3" className="back-image3" />
                    <img src={vector3} alt="Background Vector 4" className="back-image5" />
                    </div>
                    
                </div>
        </footer>
    );
};

export default Footer;
