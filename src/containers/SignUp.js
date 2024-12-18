import React, { useState } from 'react';
import './loginpage.css';  // For custom styling
import './signup.css';  // For custom styling
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo01 from '../assets/img/logo.svg';
import Signupimg from '../assets/img/signup-img.svg';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className="L-login-container">
      <div className="L-left-side2">
        <div className="L-logo1">
          <img src={logo01} alt="Logo" />
          <h1>RDS Precision Billing</h1>
        </div>
        <img src={Signupimg} alt="Heart Illustration" className="signup-image" />
      </div>

      <div className="L-right-side">
        <h1>Sign Up</h1>
        <p>Enter details to create your account </p>

        <form className="L-login-form">
          {/* Username field */}
          <div className="L-form-group">
            <label>
              Username <span className="L-mandatory">*</span>
            </label>
            <div className="L-input-container">
              <input type="text" placeholder="Enter your username" required />
              <span className="L-icon">👤</span> {/* Replace with your actual icon */}
            </div>
          </div>

          {/* Email field */}
          <div className="L-form-group">
            <label>
              Email <span className="L-mandatory">*</span>
            </label>
            <div className="L-input-container">
              <input type="email" placeholder="Enter your email address" required />
              <span className="L-icon">📧</span> {/* Replace with your actual icon */}
            </div>
          </div>

    <div>
      {/* Password field */}
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
            className={`L-icon ${showPassword ? '' : 'hidden'}`} // Apply 'line-through' class when the password is visible
            onClick={togglePasswordVisibility}
          >
    {showPassword ? '👁️' : '👁️'} {/* Same icon; cross effect added via CSS */}
          </span>
        </div>
      </div>

      {/* Confirm Password field */}
      <div className="L-form-group confirm-password">
        <label style={{ marginLeft: '-220px' }}>
          Confirm Password <span className="L-mandatory">*</span>
        </label>
        <div className="L-input-container">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Enter your password again"
            required
          />
          <span
            className={`L-icon ${showConfirmPassword ? '' : 'hidden'}`} // Apply 'line-through' class when the confirm password is visible
            onClick={toggleConfirmPasswordVisibility}
          >
            {showPassword ? '👁️' : '👁️'} {/* Same icon; cross effect added via CSS */}
          </span>
        </div>
      </div>
    </div>
    
          <p>Already Registered? <Link to="/login">Login</Link></p>
          {/* Login Button */}
          <button type="submit" className="L-login-btn animated-btn2">Register</button>

          {/* Social Login Icons */}
          <div className="L-social-login">
            <p>OR</p>
            <div className="L-social-icons">
              <span className="L-icon-wrapper"><FaGoogle /></span>
              <span className="L-icon-wrapper"><FaFacebookF /></span>
              <span className="L-icon-wrapper"><FaTwitter /></span>
              <span className="L-icon-wrapper"><FaLinkedinIn /></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
