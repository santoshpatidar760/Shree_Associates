import React, { useState } from 'react';
import "../styles/StrechCeiling.css";

import img1 from '../assets/railing.jpg';
import img11 from '../assets/White Corian Acrylic Solid Surface Railing (1).jpg';
import img12 from '../assets/White Corian Acrylic Solid Surface Railing.jpg';

const products = [
    {
        name: "White Corian Acrylic Solid Surface Railing",
        price: 950,
        unit: "Square Feet",
        image: img1, // main image
        thumbnails: [img1, img11, img12],  // 3 small images for thumbnails
        minOrder: 10000,
        details: {
            Thickness: "8 mm",
            Color: "White",
            Material: "Corian",
            Shape: "Rectangular",
            "Surface Finish": "Polished",
            Usage: "To Keep People Or Vehicles From Falling Off The Bridge"
        }
    }
];

const CorianRailing = () => {
    return (
        <div className="Strech">
            <div className="Strech-header">
                <h2>Corian Railing</h2>
                <p>
                    Offering you a complete choice of products which include White Corian Acrylic Solid Surface Railing.
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

export default CorianRailing;
