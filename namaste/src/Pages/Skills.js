import React from 'react';
import './Skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-list">
        <div className="skill">
          <h2>HTML5</h2>
          <p>Expert in creating semantic and accessible web content.</p>
        </div>
        <div className="skill">
          <h2>CSS3</h2>
          <p>Proficient in designing responsive and visually appealing layouts.</p>
        </div>
        <div className="skill">
          <h2>JavaScript</h2>
          <p>Experienced in writing dynamic and interactive client-side scripts.</p>
        </div>
        <div className="skill">
          <h2>React.js</h2>
          <p>Skilled in building modern, single-page applications with React.</p>
        </div>
        <div className="skill">
          <h2>Bootstrap</h2>
          <p>Competent in using Bootstrap for fast and responsive design.</p>
        </div>
        {/* Add more skills as needed */}
      </div>
    </div>
  );
};

export default Skills;
