import React, { useState } from 'react';
import './MentorDashboard.css';
import MentorSchedule from './MentorSchedule'; // Import the schedule component
import Appointments from './Appointments';
import Support from './Support';
import Feedback from './Feedback';

const MentorDashboard = ({ mentorProfile, navigateTo }) => {
  const [activeSection, setActiveSection] = useState('dashboard'); // Control what to display

  const {
    mentorImage = '/default-image.png',
    firstName = 'Mentor',
    lastName = '',
    primaryLanguage = 'English',
    streamOfInterest = 'General',
    experience = 0,
    currentRole = 'Role'
  } = mentorProfile;

  return (
    <div className="mentor-dashboard-container">
      <header className="mentor-dashboard-header">
        <div className="mentor-photo">
          <img src={mentorImage} alt={`${firstName} ${lastName}`} onClick={() => { /* Hide/Show Sidebar */ }} />
        </div>
        <h1>Mentor Dashboard</h1>
        <div className="current-date">
  {new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })}
</div>

      </header>

      <aside className="mentor-dashboard-sidebar">
        <ul>
          <li onClick={() => setActiveSection('timetable')}>Timetable</li>
          <li onClick={() => setActiveSection('appointments')}>Appointments</li>
          <li onClick={() => setActiveSection('support')}>Support</li>
          <li onClick={() => setActiveSection('feedback')}>Feedback</li>
        </ul>
        <button className="logout-btn" onClick={() => navigateTo('mentor-login')}>Logout</button>
      </aside>

      <main className="mentor-dashboard-content">
        {activeSection === 'dashboard' && (
          <div>
            <h2>Welcome, {firstName} {lastName}</h2>
            <div className="mentor-info-box">
              <p><strong>Primary Language:</strong> {primaryLanguage}</p>
              <p><strong>Stream of Interest:</strong> {streamOfInterest}</p>
              <p><strong>Experience:</strong> {experience} years</p>
              <p><strong>Current Role:</strong> {currentRole}</p>
            </div>
          </div>
        )}

        {activeSection === 'timetable' && <MentorSchedule />} {/* Show MentorSchedule when 'Timetable' is clicked */}

        {activeSection === 'appointments' && <Appointments/>}{/* Show MentorSchedule when 'Appointments' is clicked */}
        {activeSection === 'support' && <Support />} {/* Render the Support component */}

        {activeSection === 'feedback' && <Feedback />}
      </main>
    </div>
  );
};

export default MentorDashboard;
