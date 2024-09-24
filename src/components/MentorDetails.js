import React, { useState } from 'react';
import './MentorDetails.css';

const MentorDetails = ({ navigateTo }) => {
  const [step, setStep] = useState(1);

  // Mentor's details stored in variables
  const [mentorData, setMentorData] = useState({
    firstName: '',
    lastName: '',
    primaryLanguage: '',
    streamOfInterest: '',
    experience: '',
    currentRole: '',
    qualification: '',
    mentorImage: null // For image file storage
  });

  // Go to the next step in the form
  const nextStep = () => setStep(step + 1);

  // Go to the previous step in the form
  const prevStep = () => setStep(step - 1);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMentorData({
      ...mentorData,
      [name]: value
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    setMentorData({
      ...mentorData,
      mentorImage: URL.createObjectURL(e.target.files[0]) // Create an image preview URL
    });
  };

  // Handle form submission and pass the data to the MentorDashboard
  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to the dashboard and pass the mentor's data
    navigateTo('mentor-dashboard', mentorData);
  };

  return (
    <div className="mentor-details-container">
      <div className="mentor-details-form">
        <div className="progress-bar">
          <span className={step >= 1 ? 'active' : ''}>1</span>
          <span className={step >= 2 ? 'active' : ''}>2</span>
          <span className={step >= 3 ? 'active' : ''}>3</span>
          <span className={step >= 4 ? 'active' : ''}>4</span>
          <span className={step >= 5 ? 'active' : ''}>5</span>
        </div>

        {/* Step 1: Personal Details */}
        {step === 1 && (
          <div className="step">
            <h2>Personal Details</h2>
            <form>
              <label>First Name*</label>
              <input type="text" name="firstName" value={mentorData.firstName} onChange={handleInputChange} required />

              <label>Middle Name</label>
              <input type="text" name="middleName" onChange={handleInputChange} />

              <label>Last Name*</label>
              <input type="text" name="lastName" value={mentorData.lastName} onChange={handleInputChange} required />

              <label>Primary Language*</label>
              <input type="text" name="primaryLanguage" value={mentorData.primaryLanguage} onChange={handleInputChange} required />

              <label>Stream of Interest*</label>
              <input type="text" name="streamOfInterest" value={mentorData.streamOfInterest} onChange={handleInputChange} required />

              <button type="button" onClick={nextStep}>Next</button>
            </form>
          </div>
        )}

        {/* Step 2: Gender and Birth */}
        {step === 2 && (
          <div className="step">
            <h2>Gender Identity & Birth</h2>
            <form>
              <label>Gender Identity*</label>
              <select name="gender" value={mentorData.gender} onChange={handleInputChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <label>Date of Birth*</label>
              <input type="date" name="dob" value={mentorData.dob} onChange={handleInputChange} required />

              <label>Country*</label>
              <input type="text" name="country" value={mentorData.country} onChange={handleInputChange} required />

              <label>State/UT*</label>
              <input type="text" name="state" value={mentorData.state} onChange={handleInputChange} required />

              <div className="form-navigation">
                <button type="button" onClick={prevStep}>Previous</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Experience */}
        {step === 3 && (
          <div className="step">
            <h2>Experience</h2>
            <form>
              <label>Overall Years of Experience*</label>
              <input type="number" name="experience" min="0" value={mentorData.experience} onChange={handleInputChange} required />

              <label>Current Position/Role*</label>
              <input type="text" name="currentRole" value={mentorData.currentRole} onChange={handleInputChange} required />

              <div className="form-navigation">
                <button type="button" onClick={prevStep}>Previous</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </form>
          </div>
        )}

        {/* Step 4: Education & Declaration */}
        {step === 4 && (
          <div className="step">
            <h2>Education & Declaration</h2>
            <form>
              <label>Highest Qualification*</label>
              <input type="text" name="qualification" value={mentorData.qualification} onChange={handleInputChange} required />

              <div className="declaration">
                <input type="checkbox" id="declaration" required />
                <label htmlFor="declaration">I declare that all information is true and accurate.*</label>
              </div>

              <div className="form-navigation">
                <button type="button" onClick={prevStep}>Previous</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </form>
          </div>
        )}

        {/* Step 5: File Upload */}
        {step === 5 && (
          <div className="step">
            <h2>File Upload</h2>
            <form onSubmit={handleSubmit}>
              <label>Identity(Aadhar)*</label>
              <input type="file" required />

              <label>Certificate of Highest Qualification*</label>
              <input type="file" required />

              <label>Photograph*</label>
              <input type="file" onChange={handleImageUpload} required />

              <div className="form-navigation">
                <button type="button" onClick={prevStep}>Previous</button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorDetails;
