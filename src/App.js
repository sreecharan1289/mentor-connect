import React, { useState } from 'react';
import Landing from './components/Landing';
import MentorSignup from './components/MentorSignup';
import MentorLogin from './components/MentorLogin';
import MenteeSignup from './components/MenteeSignup';
import MenteeLogin from './components/MenteeLogin';
import MentorDetails from './components/MentorDetails';
import MentorDashboard from './components/MentorDashboard';
import MentorSchedule from './components/MentorSchedule'; // Updated component name
import Appointments from './components/Appointments'; // Add Appointments component

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [mentorProfile, setMentorProfile] = useState({});

  const navigateTo = (page, profileData = {}) => {
    if (page === 'mentor-dashboard') {
      setMentorProfile(profileData);
    }
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'landing' && <Landing navigateTo={navigateTo} />}
      {currentPage === 'mentor-signup' && <MentorSignup navigateTo={navigateTo} />}
      {currentPage === 'mentor-login' && <MentorLogin navigateTo={navigateTo} />}
      {currentPage === 'mentee-signup' && <MenteeSignup navigateTo={navigateTo} />}
      {currentPage === 'mentee-login' && <MenteeLogin navigateTo={navigateTo} />}
      {currentPage === 'mentor-details' && <MentorDetails navigateTo={navigateTo} setMentorProfile={setMentorProfile} />}
      {currentPage === 'mentor-dashboard' && <MentorDashboard mentorProfile={mentorProfile} navigateTo={navigateTo} />}
      {currentPage === 'mentor-schedule' && <MentorSchedule navigateTo={navigateTo} />} {/* Updated navigation */}
      {currentPage === 'appointments' && <Appointments navigateTo={navigateTo} />} {/* Render the Appointments component */}
    </div>
  );
}

export default App;
