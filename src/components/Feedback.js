import React, { useState } from 'react';
import './Feedback.css'; // Assuming you want to style the form

const Feedback = () => {
  const [ratings, setRatings] = useState({
    videoCalling: 0,
    appointmentScheduling: 0,
    websiteInterface: 0,
    customerSupport: 0,
    userExperience: 0, // New feedback question
    responseTime: 0, // New feedback question
  });

  const [additionalFeedback, setAdditionalFeedback] = useState('');

  const handleRatingChange = (category, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { ratings, additionalFeedback });
    // Perform submission logic here
  };

  return (
    <div className="feedback-container">
      <h2>Provide Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        {/* Video Calling Quality */}
        <div className="feedback-item">
          <p>Video Calling Quality:</p>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`star ${ratings.videoCalling > i ? 'filled' : ''}`}
              onClick={() => handleRatingChange('videoCalling', i + 1)}
            >
              &#9733;
            </span>
          ))}
        </div>

        {/* Appointment Scheduling */}
        <div className="feedback-item">
          <p>Appointment Scheduling:</p>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`star ${ratings.appointmentScheduling > i ? 'filled' : ''}`}
              onClick={() => handleRatingChange('appointmentScheduling', i + 1)}
            >
              &#9733;
            </span>
          ))}
        </div>

        {/* Website Interface */}
        <div className="feedback-item">
          <p>Website Interface:</p>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`star ${ratings.websiteInterface > i ? 'filled' : ''}`}
              onClick={() => handleRatingChange('websiteInterface', i + 1)}
            >
              &#9733;
            </span>
          ))}
        </div>

        {/* Customer Support */}
        <div className="feedback-item">
          <p>Customer Support:</p>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`star ${ratings.customerSupport > i ? 'filled' : ''}`}
              onClick={() => handleRatingChange('customerSupport', i + 1)}
            >
              &#9733;
            </span>
          ))}
        </div>

        {/* User Experience (New) */}
        <div className="feedback-item">
          <p>User Experience:</p>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`star ${ratings.userExperience > i ? 'filled' : ''}`}
              onClick={() => handleRatingChange('userExperience', i + 1)}
            >
              &#9733;
            </span>
          ))}
        </div>

        {/* Response Time (New) */}
        <div className="feedback-item">
          <p>Response Time:</p>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`star ${ratings.responseTime > i ? 'filled' : ''}`}
              onClick={() => handleRatingChange('responseTime', i + 1)}
            >
              &#9733;
            </span>
          ))}
        </div>

        {/* Additional Feedback Text Field */}
        <div className="feedback-item">
          <label htmlFor="additionalFeedback">Additional Feedback:</label>
          <textarea
            id="additionalFeedback"
            rows="4"
            value={additionalFeedback}
            onChange={(e) => setAdditionalFeedback(e.target.value)}
            placeholder="Your comments..."
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
