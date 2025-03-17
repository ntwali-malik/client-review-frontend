import React from 'react';
import './WelcomeMessage.css';

function WelcomeMessage() {
  return (
    <div className="welcome-message">
      <img src={`${process.env.PUBLIC_URL}/logoF.png`} alt="Fabritech Logo" className="company-logo" />
      <h1>Welcome to Fabritech's Feedback System!</h1>
      <p>Your thoughts and opinions matter to us. Please take a moment to share your feedback below.</p>
      <p>Thank you for helping us improve our services!</p>
    </div>
  );
}

export default WelcomeMessage; 