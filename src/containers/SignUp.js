import React, { useState } from 'react';
import './loginpage.css';  // For custom styling
import './signup.css';  // For custom styling
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo01 from '../assets/img/logo.svg';
import Signupimg from '../assets/img/signup-img.svg';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="left-side2">
        <div className="logo1">
          <img src={logo01} alt="Logo" />
          <h1>RDS Precision Billing</h1>
        </div>
        <img src={Signupimg} alt="Heart Illustration" className="signup-image" />
      </div>

      <div className="right-side">
        <h1>Sign Up</h1>
        <p>Enter details to create your account </p>

        <form className="login-form">
          {/* Username field */}
          <div className="form-group">
            <label>
              Username <span className="mandatory">*</span>
            </label>
            <div className="input-container">
              <input type="text" placeholder="Enter your username" required />
              <span className="icon">👤</span> {/* Replace with your actual icon */}
            </div>
          </div>

          {/* Email field */}
          <div className="form-group">
            <label>
              Email <span className="mandatory">*</span>
            </label>
            <div className="input-container">
              <input type="email" placeholder="Enter your email address" required />
              <span className="icon">📧</span> {/* Replace with your actual icon */}
            </div>
          </div>

          {/* Password field */}
          <div className="form-group">
            <label>
              Password <span className="mandatory">*</span>
            </label>
            <div className="input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
              />
              <span className="icon" onClick={togglePasswordVisibility}>👁️</span>
            </div>
          </div>

          <div className="form-group confirm-password">
            <label>
              Confirm Password <span className="mandatory01">*</span>
            </label>
            <div className="input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password again"
                required
              />
              <span className="icon" onClick={togglePasswordVisibility}>👁️</span>
            </div>
          </div>
          <p>Already Registered? <a href="/login">Login</a></p>
          {/* Login Button */}
          <button type="submit" className="login-btn animated-btn2">Register</button>

          {/* Social Login Icons */}
          <div className="social-login">
            <p>OR</p>
            <div className="social-icons">
              <span className="icon-wrapper"><FaGoogle /></span>
              <span className="icon-wrapper"><FaFacebookF /></span>
              <span className="icon-wrapper"><FaTwitter /></span>
              <span className="icon-wrapper"><FaLinkedinIn /></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
