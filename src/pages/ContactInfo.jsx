import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-wrapper">
        <div className="contact-info-container">
      <div className="info-section dark-section">
        <FaMapMarkerAlt className="info-icon" />
        <div>
          <h4>A 1/95 WHS Kirti Nagar</h4>
          <p>Timber Market N.D - 15, New Delhi, 110015</p>
        </div>
      </div>

      <div className="info-section pink-section">
        <FaPhoneAlt className="info-icon" />
        <div>
          <h4>9899660340, 8368833703</h4>
          <p>Give us a call</p>
        </div>
      </div>

      <div className="info-section light-pink-section">
        <FaEnvelope className="info-icon" />
        <div>
          <h4>ipurecorian@gmail.com</h4>
          <p>24/7 online support</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactInfo;
