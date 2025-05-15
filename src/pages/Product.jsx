import React from 'react';
import aboutimg from '../assets/slide2.png';
import "../styles/OurProducts.css";
import OurProduct from './OurProduct';

const Product = () => {
  return (
    <div className="product">
      <div className="image-container">
        <img className="about-img" src={aboutimg} alt="about-img" />
        <h2>Our Products</h2>
        <p>
          Check out some of the latest and most impressive projects from iPure, and get an idea of how they can make your design dreams a reality.
          We are the leading manufacturers of Customized Corian Temples or Any Type of Corian Work, such as Bed, Kitchen, Bar Counter, Wall Panel, Bathroom, Office Interior, etc.
        </p>
      </div>
      <OurProduct />
    </div>
  );
};

export default Product;
