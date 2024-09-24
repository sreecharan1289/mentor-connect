import React from 'react';
import './MenteeLogin.css';

const MentorLogin = ({ navigateTo }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Redirect to dashboard after successful login
    navigateTo('mentor-dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <p>Don’t have an account yet? <span onClick={() => navigateTo('mentor-signup')} className="signup-link">Sign Up</span></p>
        
        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" required />
          
          <label>Password</label>
          <input type="password" placeholder="Enter 6 characters or more" required />
          <div className="form-options">
            <span className="forgot-password">Forgot Password?</span>
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me"> Remember me</label>
            </div>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="orlog">or login with</p>
        <div className="social-login">
          <button className="google-btn">Google</button>
          <button className="facebook-btn">Facebook</button>
        </div>
      </div>
      <div className="login-illustration">
        <img src="/login-signup-illustration.jpg" alt="Login Illustration" />
      </div>
    </div>
  );
};

export default MentorLogin;
