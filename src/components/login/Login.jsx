/* eslint-disable react/prop-types */
// import React from 'react'
import './Login.css'


const Login = ({ openSignUp }) => {
    return (
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder='Enter Email' className="input-field" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder='Enter Password' className="input-field" />
          </div>
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>
        <div className="signup-section">
          <span>Dont have an account? </span>
          <button onClick={openSignUp} className="signup-button">Sign Up</button>
        </div>
      </div>
    );
  };
  
  export default Login;
  
