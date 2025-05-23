import React, { useState } from 'react';
import './requestademo.css';
import bg2 from '../assets/img/bg-2 1.png';

const Requestademo = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any field is empty
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setSuccessMessage('Please fill in all the fields.');
      setPopupVisible(true);  // Show the popup
      setTimeout(() => {
        setPopupVisible(false); // Hide the popup after 5 seconds
      }, 5000);
      return; // Prevent form submission if validation fails
    }
  
    try {
      // Send form data to the backend
      const response = await fetch('https://backend.rdsprecisionbilling.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSuccessMessage('Your message has been sent. We will get back to you shortly!');
        setPopupVisible(true);  // Show the popup
        setFormData({
          fullname: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
  
        // Hide the popup after 5 seconds
        setTimeout(() => {
          setPopupVisible(false);
        }, 5000);
      } else {
        setSuccessMessage('Failed to send your message. Please try again later.');
        setPopupVisible(true);  // Show the popup
        setTimeout(() => {
          setPopupVisible(false);
        }, 5000);
      }
    } catch (error) {
      setSuccessMessage('An error occurred. Please try again later.');
      setPopupVisible(true);  // Show the popup
      setTimeout(() => {
        setPopupVisible(false);
      }, 5000);
    }
  };
  

  return (
    <>
      {/* Popup Notification */}
      {popupVisible && (
        <div className="popup-message">
          <p>{successMessage}</p>
        </div>
      )}
      
      <div className="RD-image-container2">
        <img src={bg2} alt="description" className="RD-my-image1" />
        <div className="RD-overlay-content">
          <h1 className="RD-heading3">
            <span className="RD-heading-part11">Leave a </span>
            <span className="RD-heading-part22">message</span>
          </h1>
        </div>
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleInputChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-row submit-row">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Requestademo;
