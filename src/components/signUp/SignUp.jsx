/* eslint-disable react/prop-types */
import './SignUp.css'


const SignUp = ({ openLogin }) => {
    return (
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder='Enter Name' className="input-field" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder='Enter Email' className="input-field" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder='Enter Password' className="input-field" />
          </div>
          <div className="form-group">
            <button type="submit" className="signup-button">Sign Up</button>
          </div>
        </form>
        <div className="login-section">
          <span>Already have an account? </span>
          <button onClick={openLogin} className="login-button">Login</button>
        </div>
      </div>
    );
  };
  
  export default SignUp;
  