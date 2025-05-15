import React from "react";
import "../styles/Footer.css";
import g1 from "../assets/table.jpeg";
import g2 from "../assets/mirror.jpeg";
import g3 from "../assets/ceiling.jpg";
import g4 from "../assets/mandir.jpg";
import g5 from "../assets/basin.jpeg";
import g6 from "../assets/corian.jpeg";
import logo from "../assets/ShreeAssociateslogo.png";

const Footer = () => {
  const galleryImages = [g1, g2, g3, g4, g5, g6];
  return (
    <footer>
        <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="" />
          <p>
            shree is the leading manufacturers of the Customized Corian Temples
            or Any Type of Corian Work Bed, Kitchen, Bar Counter, Wall Panel,
            Bathroom, Office Interior, or any type of Interior or Exterior work.
          </p>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#about">About shree Interior</a>
            </li>
            <li>
              <a href="#choose">Why Choose Shree?</a>
            </li>
            <li>
              <a href="#mandir">Corian Mandir / Corian Temple Designs</a>
            </li>
          </ul>
        </div>
        <div className="footer-section gallery">
          <h3>Project Gallery</h3>
          <div className="gallery-images">
            {galleryImages.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      </div>
      <div className="footer-down">
      <div className="footer-content">
        <p>© 2020 iPureInterior. | All Rights Reserved.</p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
