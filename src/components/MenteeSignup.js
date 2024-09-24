import React, { useState } from 'react';
import './MenteeSignup.css';

const MentorSignup = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', formData);
    // Redirect to MentorDetails after successful signup
    navigateTo('mentor-details'); // Use the navigateTo function to go to the next page
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <p>Already have an account? <span onClick={() => navigateTo('mentor-login')} className="login-link">Login</span></p>
        
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input 
            type="text" 
            placeholder="Your full name" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleInputChange} 
            required 
          />

          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="you@example.com" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
          
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter 6 characters or more"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required 
          />
          
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p>or sign up with</p>
        <div className="social-login">
          <button className="google-btn">Google</button>
          <button className="facebook-btn">Facebook</button>
        </div>
      </div>
      <div className="signup-illustration">
        <img src="/login-signup-illustration.jpg" alt="Signup Illustration" />
      </div>
    </div>
  );
};

export default MentorSignup;
