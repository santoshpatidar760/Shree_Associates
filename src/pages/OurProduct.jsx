import React from 'react';
import "../styles/OurProducts.css";

import img1 from '../assets/stretch.jpeg';
import img2 from '../assets/0.5mm.jpeg';
import img3 from '../assets/bed.jpeg';
import img4 from '../assets/printed.jpeg';
import img5 from '../assets/tops.jpg';
import img6 from '../assets/rectangular.jpeg';
import img7 from '../assets/center.jpeg';
import img8 from '../assets/wallpaper.jpg';
import img9 from '../assets/plain.jpeg';
import img10 from '../assets/aluminum.jpg';
import img11 from '../assets/stool.jpg';
import img12 from '../assets/railing.jpg';
import img13 from '../assets/kitchen.jpg';
import img14 from '../assets/frame.jpg';
import img15 from '../assets/card2.jpeg';
import img16 from '../assets/basin.jpeg';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    title: "Stretch Ceiling",
    link: "/stretch-ceiling",
    description: "We are a leading Wholesaler of PVC Stretch Ceiling, 0.5mm Printed Stretch Ceiling, PVC Bed Room Stretch Ceiling, Printed Stretch Ceiling and Stretch Ceiling 3D Galaxy from Indore, India.",
    products: [
      { src: img1, title: "PVC Stretch Ceiling" },
      { src: img2, title: "0.5mm Printed Stretch Ceiling" },
      { src: img3, title: "PVC Bed Room Stretch Ceiling" },
      { src: img4, title: "Printed Stretch Ceiling" },
    ]
  },
  {
    title: "Table Tops",
    link: "/Table-tops",
    description: "Wholesaler of a wide range of products which include Lg Corian Acrylic Solid Surface, Rectangular White Corian Table Top and Corian Top Center Table.",
    products: [
      { src: img5, title: "Lg Corian Acrylic Solid Surface" },
      { src: img6, title: "Rectangular White Corian Table Top" },
      { src: img7, title: "Corian Top Center Table" },
    ]
  },
  {
    title: "Vinyl Wallpaper",
    link: "/vinyl-wallpaper",
    description: "We are a leading Wholesaler of Pvc Vinyl Wallcovering and Plain Vinyl Wallcovering from Indore, India.",
    products: [
      { src: img8, title: "PVC Vinyl Wallpaper" },
      { src: img9, title: "Plain Vinyl Wallcovering" },
    ]
  },
  {
    title: "Aluminum Louvers",
    link: "/aluminum-louvers",
    description: "Our product range includes a wide range of Grey Aluminium Louvers Panel.",
    products: [
      { src: img10, title: "Grey Aluminium Louver Panel" },
    ]
  },
  {
    title: "Corian Stool",
    link: "/corian-stool",
    description: "We are a leading Wholesaler of White Corian Side Table from Indore, India.",
    products: [
      { src: img11, title: "White Corian Side Stool" },
    ]
  },
  {
    title: "Corian Railing",
    link: "/corian-railing",
    description: "Offering you a complete choice of products which include White Corian Acrylic Solid Surface Railing.",
    products: [
      { src: img12, title: "White Corian Acrylic Solid Surface Railing" },
    ]
  },
  {
    title: "Corian Solid Surface Kitchen Top",
    link: "/corian-kitchen-top",
    description: "Leading Wholesaler of Corian Solid Surface Kitchen Top from Indore.",
    products: [
      { src: img13, title: "Corian Solid Surface Kitchen Top" },
    ]
  },
  {
    title: "Mirror Frame",
    link: "/mirror-frame",
    description: "Pioneers in the industry, we offer Corian Solid Surface Mirror Frame from India.",
    products: [
      { src: img14, title: "Corian Solid Surface Mirror Frame" },
    ]
  },
  {
    title: "Corian Mandir",
    link: "/corian-mandir",
    description: "We are a leading Wholesaler of Solid Surface Corian Temple from Indore, India.",
    products: [
      { src: img15, title: "Solid Surface Corian Temple" },
    ]
  },
  {
    title: "Wash Basin",
    link: "/wash-basin",
    description: "Offering you a complete choice of products which include Corian Solid Surface Wash Basin.",
    products: [
      { src: img16, title: "Corian Solid Surface Wash Basin" },
    ]
  },
];

const OurProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="product-img">
      {sections.map((section, idx) => (
        <div className="product-contain" key={idx}>
          <div className="section-header">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>

          <div className="ceiling-products-grid">
            {section.products.map((item, index) => (
              <div className="ceiling-product-card" key={index}>
                <div className="ceiling-image-wrapper">
                  <img src={item.src} alt={item.title} />
                </div>
                <p className="ceiling-title">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="view-details-button-wrapper">
            <button
              className="view-details-button"
              onClick={() => navigate(section.link)}
            >
              View more details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurProduct;
