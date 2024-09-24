import React from 'react';
import './Support.css'; // Import your CSS for Support

const Support = () => {
  const userId = Math.floor(Math.random() * 1000000); // Generate a unique user ID
  const randomPhone = '8074357050'; // Random phone number
  const randomEmail = 'mentor.support@example.com'; // Random email

  return (
    <div className="support-container">
      <h2>Support</h2>
      <div className="support-info">
        <div className="support-item">
          <i className="fas fa-id-badge"></i> {/* Icon for User ID */}
          <span><strong>Unique User ID:</strong> {userId}</span>
        </div>
        <div className="support-item">
          <i className="fas fa-phone"></i> {/* Icon for Phone */}
          <span><strong>Phone:</strong> {randomPhone}</span>
        </div>
        <div className="support-item">
          <i className="fas fa-envelope"></i> {/* Icon for Email */}
          <span><strong>Email:</strong> {randomEmail}</span>
        </div>
      </div>
    </div>
  );
};

export default Support;
