import React from 'react';
import aboutimg from '../assets/slide2.png';
import img1 from '../assets/service1.jpeg';
import img2 from '../assets/service2.jpg';
import img3 from '../assets/service3.png';
import img4 from '../assets/service4.jpeg';
import img5 from '../assets/service5.jpg';
import img6 from '../assets/service6.jpg';

import "../styles/ServicesShree.css";

const ServicesShree = () => {
  const reasons = [
    {
      img: img1,
      text: '1. We have Multiple Teams of Expert & Experienced Fabricators, 3D Designers.'
    },
    {
      img: img2,
      text: '2. We have Our Own Factory with CNC Machines, Latest Tools & Technologies.'
    },
    {
      img: img3,
      text: '3. We Deliver All Over India.'
    },
    {
      img: img4,
      text: '4. We have International Import & Export License, consequently we can supply in Abroad as well.'
    },
    {
      img: img5,
      text: '5. Best Quality with Satisfaction & Happiness Guaranteed.'
    },
    {
      img: img6,
      text: '6. We offer 1000+ Beautiful Designs which we can customize for you.'
    },
  ];

  return (
    <div>
      <div className="image-container">
        <img className="about-img" src={aboutimg} alt="about-img" />
        <h2>Services <span>We</span> Provide</h2>
        <p>
          Check out some of the latest and most impressive projects from iPure, and get an idea of how they can make your design dreams a reality.
          We are the leading manufacturers of the Customized Corian Temples or Any Type of Corian Work...
        </p>
      </div>

      <div className="why-choose-container">
        <h2>WHY CHOOSE SHREE ASSOCIATES?</h2>
        {reasons.map((reason, index) => (
          <div className={`why-choose-row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`} key={index}>
            <div className="why-choose-image">
              <img src={reason.img} alt={`Reason ${index + 1}`} />
            </div>
            <div className="why-choose-text">
              <q><em>{reason.text}</em></q>
            </div>
          </div>
        ))}

        <div className="social-icons-section">
          <p>Follow & Contact Us:</p>
          <div className="social-iconss">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShree;
