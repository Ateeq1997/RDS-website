import React from 'react';
import './loginpage.css';  // For custom styling
import './signup.css';  // For custom styling
import Resetimg from '../assets/img/reset-img.svg';

const Resetpassword = () => {

  return (
    <div className="login-container">
      <div className="left-side2">
        <img src={Resetimg} alt="Forget Illustration" className="reset-image" />
      </div>

      <div className="right-side">
        <h2>Reset Password</h2>
        <p>Let Us Help You</p>

          {/* Email field */}
          <div className="form-group">
            <label>
              Email <span className="mandatory">*</span>
            </label>
            <div className="input-container">
              <input type="email" placeholder="Enter your registered email address" required />
              <span className="icon">📧</span> 
            </div>
          </div>

       
          <button type="submit" className="login-btn animated-btn2 reset-password-btn">
  Reset My Password
</button>

          <p><a href="/login">Login?</a></p>

          </div>
          </div>
    
  );
};

export default Resetpassword;
