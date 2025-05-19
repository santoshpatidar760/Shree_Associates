import React, { useState } from 'react';
import "../styles/StrechCeiling.css";

import img1 from '../assets/tops.jpg';
import img11 from '../assets/table-11.jpg';
import img12 from '../assets/table-12.jpg';

import img2 from '../assets/rectangular.jpeg';
import img21 from '../assets/corian-solidtop.jpeg';
import img22 from '../assets/corian-top.jpeg';

import img3 from '../assets/center.jpeg';
import img31 from '../assets/table-31.jpg';
import img32 from '../assets/table-32.jpg';
const products = [
  {
    name: "Lg Corian Acrylic Solid Surface",
    price: 650,
    unit: "Square Feet",
    image: img1, // main image
    thumbnails: [img1, img11, img12],  // 3 small images for thumbnails
    minOrder: 1000,
    details: {
      Color: "White",
      Shape: "Rectangular",
      "Usage/Application": "Table",
      Finish: "Polished",
      "Product Material": "Corian",
      Thickness: "10 mm"
    }
  },
  {
    name: "Rectangular White Corian Table Top",
    price: 750,
    unit: "Square Feet",
    image: img2,
    thumbnails: [img2, img21, img22],
    minOrder: 1000,
    details: {
      Color: "White",
      Shape: "Rectangular",
      "Usage/Application": "Restaurant",
      Finish: "Polished",
      "Product Material": "Corian",
      Thickness: "12 mm"
    }
  },
  {
    name: "Corian Top Center Table",
    price: 650,
    unit: "Square Feet",
    image: img31,
    thumbnails: [img3, img31, img32],
    minOrder: 1000,
    details: {
      Color: "White",
      Size: "5x3 Feet",
      Shape: "Rectangular",
      "Usage/Application": "Table Tops",
      Finish: "Polish",
      "Product Material": "Corian",
      Thickness: "10 mm"
    }
  },
];

const TableTops = () => {
  return (
    <div className="Strech">
      <div className="Strech-header">
        <h2>Table Tops</h2>
        <p>
          Wholesaler of a wide range of products which include Lg Corian Acrylic Solid Surface, Rectangular White Corian Table Top and Corian Top Center Table.        
        </p>
      </div>

      <div className="product-container">
        {products.map((product, index) => {
          const [mainImage, setMainImage] = useState(product.image);

          return (
            <div className="product-card" key={index}>
              <div className="product-left">
                <img src={mainImage} alt={product.name} className="main-image" />

                {/* Thumbnails below the main image */}
                <div className="thumbnail-container">
                  {(product.thumbnails || []).map((thumb, i) => (
                    <img
                      key={i}
                      src={thumb}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      className="thumbnail"
                      onClick={() => setMainImage(thumb)}
                    />
                  ))}
                </div>
                <button className="photos-button">Get More Photos</button>
              </div>

              <div className="product-right">
                <h2>{product.name}</h2>
                <p className="price">
                  ₹ {product.price} <span>/ {product.unit}</span> &nbsp;
                  <a href="#" className="latest-price">
                    Get Latest Price
                  </a>
                </p>
                <p className="min-order">
                  Minimum Order Quantity: <strong>{product.minOrder} {product.unit}</strong>
                </p>

                <table className="product-details">
                  <tbody>
                    {Object.entries(product.details).map(([key, value], i) => (
                      <tr key={i}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="desc">{product.name}</p>
                <button className="interest-button">Yes, I am interested!</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableTops;
