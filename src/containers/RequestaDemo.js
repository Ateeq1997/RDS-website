import React from 'react';
import './requestademo.css'; // Import the CSS file for styling
import bg2 from '../assets/img/bg-2 1.png';

const Requestademo = () => {
  return (
    <>
   
      <div className="RD-image-container2">
        <img src={bg2} alt="description" className="RD-my-image1" />
        <div className="RD-overlay-content">
          <h1 className="RD-heading3">
            <span className="RD-heading-part11">Leave a </span>
            <span className="RD-heading-part22">message</span>
          </h1>
        </div>
        <div className="form-container">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" id="fullname" name="fullname" placeholder="Full Name" />
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="tel" id="phone" name="phone" placeholder="Phone Number" />
              <input type="text" id="subject" name="subject" placeholder="Subject" />
            </div>
            <div className="form-row">
              <textarea id="message" name="message" placeholder="Message"></textarea>
            </div>
            <div className="form-row submit-row">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Requestademo;
