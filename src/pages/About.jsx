import React from "react";
import "../styles/About.css";
import { Handshake, Clapperboard, UserRoundCheck } from "lucide-react";
import aboutimg from "../assets/slide2.png";
const About = () => {
  return (
    <div className="about">
      <div className="image-container">
        <img className="about-img" src={aboutimg} alt="about-img" />
        <h2>About Shree associates</h2>
        <p>
          iPure is the leading manufacturers of the Customized Corian Temples or
          Any Type of Corian Work (Bed, Kitchen, Bar Counter, Wall Panel,
          Bathroom, Office Interior, or any type of Interior or Exterior work).
          The concept of ‘Ipure Interior’, is to provide some true contemporary
          mandir concepts along with very unique pooja ghar accessories which
          are easily affordable by everyone. It’s a unique store which will be
          first choice of customers seeking anything they want for a home
          mandir. The endeavour is to be a single point solution under one roof
          for everything to do with a home pooja mandir.
        </p>
      </div>
      <section className="how-we-work">
        <h2 className="section-title">How We Work</h2>
        <div className="work-steps">
          <div className="step">
          <Handshake className="icon" />
            <h3>Meet</h3>
            <p>
              Meet our expert design team and let them know your requirements.
            </p>
          </div>
          <div className="step">
          <Clapperboard className="icon" />
            <h3>Made Designs</h3>
            <p>Designed exclusively to suit you and your home.</p>
          </div>
          <div className="step">
          <UserRoundCheck className="icon" />
            <h3>Delivery & Installation</h3>
            <p>By our professional and expert logistic partners.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
