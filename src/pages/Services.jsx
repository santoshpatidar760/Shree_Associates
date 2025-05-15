import React from "react";
import "../styles/Services.css";
import stretch from "../assets/stretch.jpeg";
import top from "../assets/tops.jpg";
import wallpaper from "../assets/wallpaper.jpg";
import aluminum from "../assets/aluminum.jpg";
import stool from "../assets/stool.jpg";
import railing from "../assets/railing.jpg";
import kitchen from "../assets/kitchen.jpg";
import frame from "../assets/frame.jpg";

const services = [
  {
    title: "Stretch Ceiling",
    image: stretch,
    links: [
      { label: "PVC Stretch Ceiling", url: "#" },
    ],
  },
  {
    title: "Table Tops",
    image: top,
    links: [
      { label: "Lg Corian Acryclic Solid Surface", url: "#" },
    ],
  },
  {
    title: "Vinyl Wallpaper",
    image: wallpaper,
    links: [
      { label: "Pvc Vinyl Wallcovering", url: "#" },
    ],
  },
  {
    title: "Aluminum Louvers",
    image: aluminum,
    links: [
      { label: "Grey Aluminum Louvers Panel", url: "#" },
    ],
  },
  {
    title: "Corian Stool",
    image: stool,
    links: [
      { label: "White Corian Side Table", url: "#" },
    ],
  },
  {
    title: "Corian Railing",
    image: railing,
    links: [
      { label: "White Corian Acrylic Solid Surface", url: "#" },
    ],
  },
  {
    title: "Corian Kitchen Top",
    image: kitchen,
    links: [
      { label: "Corian Solid Surface Kitchen Top", url: "#" },
    ],
  },
  {
    title: "Mirror Frame",
    image: frame,
    links: [
      { label: "Corian Solid Surface Mirror Frame", url: "#" },
    ],
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>Products & Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>
              <span className="highlight">{service.title.split(".")[0]}</span>
              {service.title.includes(".")
                ? service.title.substring(service.title.indexOf(".") + 1)
                : ""}
            </h3>
            <div className="service-links">
              {service.links.map((link, i) => (
                <a href={link.url} key={i} className="service-link">
                  {link.label}
                </a>
              ))}
            </div>
            <button className="view-button">View Details</button>
          </div>
        ))}
      </div>
      <button className="view-complete"
       onClick={() => (window.location.href = '/OurProduct')}
      >View Complete Range
      </button>
    </div>
  );
};

export default Services;
