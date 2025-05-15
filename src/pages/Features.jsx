import React from "react";
import "../styles/Features.css"; 
import mandirImage from "../assets/mandir.jpg"; // Replace with actual image path
import { FaTools, FaDollarSign, FaHome, FaAward, FaSmile, FaCalendarAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaTools />,
    title: "Maintenance Support",
    description: "We provide maintenance support..."
  },
  {
    icon: <FaDollarSign />,
    title: "Reasonable Price",
    description: "Consequently we supply products on manufacturer price."
  },
  {
    icon: <FaHome />,
    title: "Interior Expertise",
    description: "Expertise in all sorts of 2D/3D Corian Work & have our own factory in Delhi."
  },
  {
    icon: <FaAward />,
    title: "Quality Materials",
    description: "We make our Products using excellent quality material which is Fire Resistant, Termite Proof, Durable, Seamless, Dust Resistant, Easy to Maintain."
  },
  {
    icon: <FaSmile />,
    title: "Satisfaction Guaranteed",
    description: "With our design Experts & Quality work we assured Customer Satisfaction & Happiness."
  },
  {
    icon: <FaCalendarAlt />,
    title: "10+ years experience",
    description: "We have Experienced team with excellent Industry record & our products are made under the guidance of best industry."
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <h2><span className="black">Our</span> <span className="pink">Features</span></h2>
      <div className="features-wrapper">
        <div className="features-image">
          <img src={mandirImage} alt="Mandir" />
        </div>
        <div className="features-list">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
