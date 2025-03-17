import React from 'react';
import './WelcomeMessage.css';
import logo from '../public/logoF.png'; // Adjust the path if necessary

function WelcomeMessage() {
  return (
    <div className="welcome-message">
      <img src={logo} alt="Fabritech Logo" className="company-logo" />
      <h1>Welcome to Fabritech's Feedback System!</h1>
      <p>Your thoughts and opinions matter to us. Please take a moment to share your feedback below.</p>
      <p>Thank you for helping us improve our services!</p>
    </div>
  );
}

export default WelcomeMessage; 