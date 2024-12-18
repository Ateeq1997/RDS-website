import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css';  // For custom styling
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo01 from '../assets/img/logo.svg';
import Heart from '../assets/img/login-heart-img.svg';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

  return (
    <div className="L-login-container">
      <div className="L-left-side">
        <div className="L-logo">
          <img src={logo01} alt="Cliniva Logo" />
          <h1>RDS Precision Billing</h1>
        </div>
        <img src={Heart} alt="Heart Illustration" className="heart-image" />
      </div>

      <div className="L-right-side">
        <h2>Welcome to RDS Precision Billing</h2>
        <p>Need an account? <Link to="/signup">Sign Up</Link></p>

        <div className="L-role-buttons">
  <button className="L-role-btn admin animated-btn1">Admin</button>
  <button className="L-role-btn doctor animated-btn1">Doctor</button>
  <button className="L-role-btn patient animated-btn1">Patient</button>
</div>


        <form className="L-login-form">
        <h1>Sign in</h1>
        <div className="L-form-group">
  <label>
    Username <span className="L-mandatory">*</span>
  </label>
  <div className="L-input-container">
    <input type="email" placeholder="Enter your username" required />
    <span className="L-icon">👤</span> {/* Replace with your actual icon */}
  </div>
</div>

<div className="L-form-group">
  <label>
    Password <span className="L-mandatory">*</span>
  </label>
  <div className="L-input-container">
    <input
      type={showPassword ? 'text' : 'password'}
      placeholder="Enter your password"
      required
    />
    <span
      className={`L-icon ${showPassword ? '' : 'hidden'}`} // Apply 'hidden' class when the password is hidden
      onClick={togglePasswordVisibility}
    >
      {showPassword ? '👁️' : '👁️'} {/* Same icon; cross effect added via CSS */}
    </span>
  </div>
</div>





          <div className="L-actions">
            <label>
              <input type="checkbox" className="L-custom-checkbox"/> Remember me
            </label>
            <Link to="/resetpassword">Forgot Password?</Link>
          </div>

          <button type="submit" className="L-login-btn animated-btn2">Login</button>

          <div className="L-social-login">
  <p>OR</p>
  <div className="L-social-icons">
    <span className="L-icon-wrapper">
      <FaGoogle />
    </span>
    <span className="L-icon-wrapper">
      <FaFacebookF />
    </span>
    <span className="L-icon-wrapper">
      <FaTwitter />
    </span>
    <span className="L-icon-wrapper">
      <FaLinkedinIn />
    </span>
  </div>
</div>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
