import React from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css';  // For custom styling
import './signup.css';  // For custom styling
import Resetimg from '../assets/img/reset-img.svg';

const Resetpassword = () => {

 return (
  <div className="L-login-container">
    <div className="L-left-side2">
      <img src={Resetimg} alt="Forget Illustration" className="reset-image" />
    </div>

    <div className="L-right-side">
      <h2>Reset Password</h2>
      <p>Let Us Help You</p>

      <div className="L-form-group">
        <label>
          Email <span className="L-mandatory">*</span>
        </label>
        <div className="L-input-container">
          <input type="email" placeholder="Enter your registered email address" required />
          <span className="L-icon">📧</span>
        </div>
      </div>

      <button type="submit" className="L-login-btn animated-btn2 reset-password-btn">
        Reset My Password
      </button>

      <p><Link to="/login">Login?</Link></p>
    </div>
  </div>
);
};

export default Resetpassword;
