import React from 'react';
import './About.css'; // Import the CSS file
import ProfilePic from "./Pics/ProfilePic.jpeg"; // Adjust path if needed

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm Aniqa Gora, a passionate website designer and frontend developer. With a strong foundation in HTML5, CSS, JavaScript, and React.js, I specialize in creating modern, responsive designs that deliver excellent user experiences.
          </p>
          <p>
            My journey in web development started with a fascination for design and technology. Over the years, I've honed my skills through various projects, each one enhancing my understanding of creating clean, functional, and visually appealing websites.
          </p>
          <p>
            When I'm not coding, you might find me exploring new design trends, reading tech blogs, or enjoying a cup of coffee. I'm always eager to learn and grow, both professionally and personally.
          </p>
        </div>
        <div className="about-image">
          <img src={ProfilePic} alt="Aniqa Gora" /> {/* Replace with your profile picture */}
        </div>
      </div>
    </div>
  );
};

export default About;
