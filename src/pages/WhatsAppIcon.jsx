import React from 'react';
import '../styles/WhatsAppIcon.css'; // You can style it here

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-container">
      <a href="https://wa.me/+911234567890" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp Icon"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
