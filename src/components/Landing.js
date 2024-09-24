import React, { useState } from 'react';
import './Landing.css';

const Landing = ({ navigateTo }) => {
  const [openFAQ, setOpenFAQ] = useState(null); // State to track the currently open FAQ

  // Function to toggle the FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle between opening and closing the FAQ
  };

  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo">Mentor Connect</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#mentors">Top Mentors</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="register-container">
          <button className="register-btn">Register</button>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => navigateTo('mentor-signup')}>Mentor</button>
            <button className="dropdown-btn" onClick={() => navigateTo('mentee-signup')}>Mentee</button>
          </div>
        </div>
      </header>

      <section id="home" className="landing-content">
        <h1>Welcome to Mentor Connect</h1>
        <p>Connect with industry-leading mentors and grow your career with personalized advice and guidance.</p>
        <button className="cta-btn">Get Started</button>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          Mentor Connect is a platform designed to connect mentees with experienced mentors in their field of interest.
          Whether you are looking to grow your skills, advance your career, or simply get expert advice, Mentor Connect
          provides you with the tools to make that happen.
        </p>
        <p>
          Our mentors come from diverse industries including Software Development, Marketing, Data Science, and more.
          With flexible schedules and personalized sessions, Mentor Connect ensures that mentees have access to the
          guidance they need, whenever they need it. We’re here to help you take the next step toward your goals.
        </p>
      </section>

      <section id="features" className="features">
        <h2>Our Features</h2>
        <div className="features-list">
          <div className="feature">
            <h3>Expert Mentors</h3>
            <p>Connect with top professionals across various industries to guide your career growth.</p>
          </div>
          <div className="feature">
            <h3>Flexible Scheduling</h3>
            <p>Book sessions that fit your schedule and availability, offering full flexibility.</p>
          </div>
          <div className="feature">
            <h3>Career Growth</h3>
            <p>Get personalized guidance to grow your skills and achieve your goals faster.</p>
          </div>
        </div>
        <div className="features-list">
          <div className="feature">
            <h3>1-on-1 Video Calling</h3>
            <p>Connect with top professionals across various industries to guide your career growth.</p>
          </div>
          <div className="feature">
            <h3>Flexible Slot Bookings</h3>
            <p>Book sessions that fit your schedule and availability, offering full flexibility.</p>
          </div>
          <div className="feature">
            <h3>Chat Integration</h3>
            <p>Get personalized guidance to grow your skills and achieve your goals faster.</p>
          </div>
        </div>
      </section>

      <section id="mentors" className="top-mentors">
        <h2>Our Top Mentors</h2>
        <div className="mentors-list">
          <div className="mentor">
            <img src="https://via.placeholder.com/150" alt="Mentor 1" />
            <h3>Gnaneswar</h3>
            <p>Software Engineering Expert</p>
          </div>
          <div className="mentor">
            <img src="https://via.placeholder.com/150" alt="Mentor 2" />
            <h3>Sree charan</h3>
            <p>Marketing and Business Strategist</p>
          </div>
          <div className="mentor">
            <img src="https://via.placeholder.com/150" alt="Mentor 3" />
            <h3>Sindhu</h3>
            <p>Data Science Specialist</p>
          </div>
          <div className="mentor">
            <img src="https://via.placeholder.com/150" alt="Mentor 4" />
            <h3>Niharika</h3>
            <p>Cloud Architect</p>
          </div>
          <div className="mentor">
            <img src="https://via.placeholder.com/150" alt="Mentor 5" />
            <h3>Avinash</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="mentor">
            <img src="https://via.placeholder.com/150" alt="Mentor 6" />
            <h3></h3>
            <p>Blockchain Developer</p>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(1)}>
            Who can apply? <span>{openFAQ === 1 ? '-' : '+'}</span>
          </div>
          {openFAQ === 1 && (
            <div className="faq-answer">
              <p>Anyone interested in mentorship can apply. Whether you're a student, a professional, or an enthusiast looking for guidance, you're welcome to join.</p>
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(2)}>
            How do I schedule a meeting with a mentor?<span>{openFAQ === 2 ? '-' : '+'}</span>
          </div>
          {openFAQ === 2 && (
            <div className="faq-answer">
              <p>You can easily schedule a meeting through our automated calendar booking system. Simply select your preferred mentor and choose an available time slot based on their schedule. The system will automatically confirm the booking. For your convenience, we also integrate with tools like Calendly for seamless scheduling.</p>
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(3)}>
          What industries or fields can I find mentors in? <span>{openFAQ === 3 ? '-' : '+'}</span>
          </div>
          {openFAQ === 3 && (
            <div className="faq-answer">
              <p>Our platform features mentors from various industries, including IT, marketing, finance, healthcare, and more. Whether you're looking for career guidance, skill development, or industry insights, you can connect with experts and leaders in your field of interest.





</p>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">Instagram</a>
          </div>
          <div className="contact-button">
            <button>Contact Us</button>
          </div>
        </div>
        <footer>
          <p>© Mentor Connect 2024. All rights reserved.</p>
        </footer>
      </section>
    </div>
  );
};

export default Landing;
