import React from 'react';
import './Home.css'; // Import the CSS file
import ProfilePic from "./Pics/ProfilePic.jpeg"; // Adjust path if needed

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-box">
        <div className="profile-pic">
          <img src={ProfilePic} alt="Aniqa Gora" /> {/* Profile picture */}
        </div>
        <div className="profile-info">
          <p>Hello! I'm</p>
          <h1>Aniqa Gora</h1>
          <p style={{ color: '#002f6c', textDecoration: 'underline' }}>
            A  Website designer
          </p>
          <p>
            specializing in modern, responsive designs using HTML5, CSS, JavaScript, Bootstrap, and React.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
