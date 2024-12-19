import React from 'react';
import './Education.css'; // Import the CSS file

const Education = () => {
  return (
    <div className="education-container">
      <h1>My Education</h1>
      <div className="education-list">
        <div className="education-item">
          <h2>Bachelor in Computer Science</h2>
          <p>University of Engineering and Technology</p>
          <p>Graduated: 2021-2025</p>
          <p>Description: Specialized in software development and web technologies.</p>
        </div>
        <div className="education-item">
          <h2>ICS</h2>
          <p>Punjab College</p>
          <p>Graduated: 2019-2021</p>
        </div>
        <div className="education-item">
          <h2>Matriculation in Science</h2>
          <p>The Punjab Girls High School</p>
          <p>Graduated: 2017</p>
        </div>
      </div>
      <br />
      {/* Courses Section */}
      <div className="courses-section">
        <h1>Relevant Courses</h1>
        <div className="education-item">
          <h2>Website designing using Wordpress</h2>
          <p>CTTC (Christian Technical Training College)</p>
          <p>2023</p>
        </div>
        <div className="education-item">
          <h2>WordPress Development</h2>
          <p>DigiSkills, Pakistan</p>
          <p>2023</p>
        </div>
        <div className="education-item">
          <h2>Freelancing</h2>
          <p>DigiSkills, Pakistan</p>
          <p>2023</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
