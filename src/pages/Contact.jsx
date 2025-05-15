import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/Contact.css';
import aboutimg from '../assets/slide2.png';

const Contact = () => {
  const socialLinks = [
    { Icon: FaFacebookF, label: 'Facebook', href: '#' },
    { Icon: FaTwitter, label: 'Twitter', href: '#' },
    { Icon: FaYoutube, label: 'YouTube', href: '#' },
    { Icon: FaInstagram, label: 'Instagram', href: '#' },
    { Icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  ];

  return (
    <div>
      <div className="image">
        <img className="img" src={aboutimg} alt="about-img" />
        <h2>Our Products</h2>
      </div>

      <div className="contact">
        {/* Contact Form */}
        <div className="contact-form">
          <form className="form-fields">
            <div>
              <label className="form-label">Your Name (required)</label>
              <input type="text" className="form-input" required />
            </div>
            <div>
              <label className="form-label">Your Mobile Number (required)</label>
              <input type="text" className="form-input" required />
            </div>
            <div>
              <label className="form-label">Your Message</label>
              <textarea className="form-textarea" required />
            </div>
            <button type="submit" className="form-button">SEND</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-infor">
          <h2 className="contact-infor-title">Get In Touch</h2>

          <div className="contact-infor-list">
            <div className="contact-items">
              <h3 className="contact-items-title">Contact Us</h3>
            </div>
            <div className="contact-items">
              <Phone className="contact-icons" size={20} />
              <span>+91-9899660340, +91-8368833703</span>
            </div>

            <div className="contact-items">
              <Mail className="contact-icons" size={20} />
              <span>ipurecorian@gmail.com</span>
            </div>

            <div className="contact-items">
              <MapPin className="contact-icons" size={20} />
              <span>
               172 B, Surya Dev Nagar, Futi Kothi Road, Sudama Nagar, Indore-452009, Madhya Pradesh, India
              </span>
            </div>
          </div>

          <h3 className="follow-us-title">Follow Us</h3>

          <div className="social-icons">
            {socialLinks.map(({ Icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                className="social-icon"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
