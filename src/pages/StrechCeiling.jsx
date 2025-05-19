import React, { useState } from 'react';
import "../styles/StrechCeiling.css";
import img1 from "../assets/PVC Stretch Ceiling (1).jpg";
import img2 from "../assets/0.5mm Printed Stretch Ceiling.jpg";
import img3 from "../assets/PVC Bed Room Stretch Ceiling.jpg";
import img4 from "../assets/Printed Stretch Ceiling.jpg";
import img5 from "../assets/Stretch Ceiling 3D Galaxy.jpg";
import img6 from "../assets/PVC Film Coated 3D Infinity Stretch Ceiling.jpg";
import img7 from "../assets/Printed Stretch Ceiling (1).jpg";
import img8 from "../assets/Stretched Fabric Ceiling.jpg";

import img11 from "../assets/PVC Stretch Ceiling (2).jpg";
import img12 from "../assets/PVC Stretch Ceiling.jpg";
import img21 from "../assets/0.5mm Printed Stretch Ceiling (3).jpg";
import img22 from "../assets/0.5mm Printed Stretch Ceiling (4).jpg";
import img31 from "../assets/PVC Bed Room Stretch Ceiling (1).jpg";
import img32 from "../assets/PVC Bed Room Stretch Ceiling (2).jpg";
import img41 from "../assets/Pinted.jpg";
import img42 from "../assets/Pinted2.jpeg"; 
import img51 from "../assets/3d galaxy.jpg";
import img52 from "../assets/3D-form.jpg";
import img61 from "../assets/pvc fil.jpeg";
import img62 from "../assets/pvc film.jpeg";
import img71 from "../assets/roman.jpg";
import img72 from "../assets/craig.jpg";
import img81 from "../assets/cole.jpg";
import img82 from "../assets/declan.jpg";

const products = [
    {
    name: "PVC Stretch Ceiling",
    price: 550,
    unit: "Square Feet",
    image: img1, // main image
    thumbnails: [img1, img11, img12],  // 3 small images for thumbnails
    minOrder: 10000,
    details: {
      Material: "PVC",
      "Surface Treatment": "Film Coated",
      Type: "Concealed Grid",
      Thickness: "1 mm",
      Color: "Blue And White",
      Pattern: "Printed"
    }
  },
    {
        name: "0.5mm Printed Stretch Ceiling",
        price: 550,
        unit: "Square Feet",
        image: img2,
        thumbnails: [img2, img21, img22],
        minOrder: 10000,
        details: {
            Material: "PVC",
            "Surface Treatment": "Film Coated",
            Type: "Concealed Grid",
            Thickness: "1 mm",
            Color: "Blue And White",
            Pattern: "Printed"
        }
    },
    {
        name: "PVC Bed Room Stretch Ceiling",
        price: 550,
        unit: "Square Feet",
        image: img3,
        thumbnails: [img3, img31, img32],
        minOrder: 10000,
        details: {
            Material: "PVC",
            "Surface Treatment": "Film Coated",
            Type: "Concealed Grid",
            Thickness: "1 mm",
            Color: "Blue And White",
            Pattern: "Printed"
        }
    },
    {
        name: "Printed Stretch Ceiling",
        price: 550,
        unit: "Square Feet",
        image: img4,
        thumbnails: [img4, img41, img42],
        minOrder: 10000,
        details: {
            Material: "PVC",
            "Surface Treatment": "Film Coated",
            Type: "Concealed Grid",
            Thickness: "1 mm",
            Color: "Blue And White",
            Pattern: "Printed"
        }
    },
    {
        name: "Stretch Ceiling 3D Galaxy",
        price: 550,
        unit: "Square Feet",
        image: img5,
        thumbnails: [img5, img51, img52],
        minOrder: 10000,
        details: {
            Material: "PVC",
            "Surface Treatment": "Film Coated",
            Type: "Concealed Grid",
            Thickness: "1 mm",
            Color: "Blue And White",
            Pattern: "Printed"
        }
    },
    {
        name: "PVC Film Coated 3D Infinity Stretch Ceiling",
        price: 550,
        unit: "Square Feet",
        image: img6,
        thumbnails: [img6, img61, img62],
        minOrder: 10000,
        details: {
            Material: "PVC",
            "Surface Treatment": "Film Coated",
            Type: "Concealed Grid",
            Thickness: "1 mm",
            Color: "Blue And White",
            Pattern: "Printed"
        }
    },
    {
        name: "Printed Stretch Ceiling",
        price: 550,
        unit: "Square Feet",
        image: img7,
        thumbnails: [img7, img71, img72],
        minOrder: 10000,
        details: {
            Material: "PVC",
            "Surface Treatment": "Film Coated",
            Type: "Concealed Grid",
            Thickness: "1 mm",
            Color: "Blue And White",
            Pattern: "Printed"
        }
    },
    {
        name: "Stretched Fabric Ceiling",
        price: 550,
        unit: "Square Feet",
        image: img8,
        thumbnails: [img8, img81, img82],
        minOrder: 10000,
        details: {
            Material: "PVC",
            "Surface Treatment": "Film Coated",
            Type: "Concealed Grid",
            Thickness: "1 mm",
            Color: "Blue And White",
            Pattern: "Printed"
        }
    }
];

const StrechCeiling = () => {
  return (
    <div className="Strech">
      <div className="Strech-header">
        <h2>Stretch Ceiling</h2>
        <p>
          We are a leading Wholesaler of PVC Stretch Ceiling, 0.5mm Printed Stretch
          Ceiling, PVC Bed Room Stretch Ceiling, Printed Stretch Ceiling, Stretch Ceiling
          3D Galaxy and PVC Film Coated 3D Infinity Stretch Ceiling from Indore, India.
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

export default StrechCeiling;
