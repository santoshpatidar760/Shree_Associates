import React, { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/ShreeAssociateslogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set isMobile state based on screen width
  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Check screen size on initial load
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-container">
      <div className="top-bar">
        <div className="logo-section">
          <img src={logo} alt="Shree Associates Logo" className="logo-img" />
        </div>
        <div className="contact-section">
          <div className="contact-item">
            <Mail className="icon" />
            <div>
              <div className="contact-label">Email Us</div>
              <div className="contact-gmail">@gmail.com</div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="contact-item">
            <Phone className="icon" />
            <div>
              <div className="contact-label">
                Call Us Now For <br /> Booking
              </div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="contact-item">
            <div className="contact-info">+91-1234567890 | +91-1234567890</div>
          </div>
        </div>
      </div>

      <div className="polygon-decorator"></div>

      {/* Bottom navigation bar for large screens */}
      {!isMobile && (
        <div className="bottom-nav large-screen-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>About Shree Associates</NavLink>
          <NavLink to="/product" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Our Products</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Contact</NavLink>
        </div>
      )}

      {/* Toggle Button (Hamburger Icon) for small screens */}
      {isMobile && (
        <div className="menu-toggle" onClick={toggleMenu}>
        <h3 className="toggle-menu">Menu</h3>
        <span className="toggle-icon">☰</span>
      </div>
      
      )}

      {/* Mobile Menu (Toggle on small screens) */}
      {isMobile && (
        <div className={`bottom-nav mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>About</NavLink>
          <NavLink to="/product" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Products</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Contact</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
