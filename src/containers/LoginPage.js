import React, { useState } from 'react';
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
    <div className="login-container">
      <div className="left-side">
        <div className="logo">
          <img src={logo01} alt="Cliniva Logo" />
          <h1>RDS Precision Billing</h1>
        </div>
        <img src={Heart} alt="Heart Illustration" className="heart-image" />
      </div>

      <div className="right-side">
        <h2>Welcome to RDS Precision Billing</h2>
        <p>Need an account? <a href="/Signup">Sign Up</a></p>

        <div className="role-buttons">
  <button className="role-btn admin animated-btn1">Admin</button>
  <button className="role-btn doctor animated-btn1">Doctor</button>
  <button className="role-btn patient animated-btn1">Patient</button>
</div>


        <form className="login-form">
        <h1>Sign in</h1>
        <div className="form-group">
  <label>
    Username <span className="mandatory">*</span>
  </label>
  <div className="input-container">
    <input type="email" placeholder="Enter your username" required />
    <span className="icon">👤</span> {/* Replace with your actual icon */}
  </div>
</div>

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
    <span className="icon" onClick={togglePasswordVisibility}>👁️</span> {/* Replace with your actual eye icon */}
  </div>
</div>



          <div className="actions">
            <label>
              <input type="checkbox" className="custom-checkbox"/> Remember me
            </label>
            <a href="/resetpassword">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn animated-btn2">Login</button>

          <div className="social-login">
  <p>OR</p>
  <div className="social-icons">
    <span className="icon-wrapper">
      <FaGoogle />
    </span>
    <span className="icon-wrapper">
      <FaFacebookF />
    </span>
    <span className="icon-wrapper">
      <FaTwitter />
    </span>
    <span className="icon-wrapper">
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
