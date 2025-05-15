import React from 'react';
import '../styles/CallIcon.css'; // You can style it here

const CallIcon = () => {
  return (
    <div className="call-container">
      <a href="https://wa.me/+911234567890" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7044/7044732.png"
          alt="Call Icon"
          className="call-icon"
        />
      </a>
    </div>
  );
};

export default CallIcon;
