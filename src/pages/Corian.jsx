import React, { useState } from 'react';
import "../styles/StrechCeiling.css";

import img1 from '../assets/stool.jpg';
import img11 from '../assets/White Corian Side Table.jpg';
import img12 from '../assets/corian-stool.jpeg';

const products = [
    {
        name: "White Corian Side Table",
        price: 450,
        unit: "Square Feet",
        image: img1, // main image
        thumbnails: [img1, img11, img12],  // 3 small images for thumbnails
        minOrder: 10000,
        details: {
            "Finish Type": "Polished",
            Size: "3x2 feet (LXW)",
            Type: "Indoor",
            Color: "White",
            Material: "Corian",
            Usage: "Provide Extra Seating And Are Easily Tucked Away When They're Not Needed",
            Thickness: "16 mm"
        }
    }
];

const Corian = () => {
    return (
        <div className="Strech">
            <div className="Strech-header">
                <h2>Corian Stool</h2>
                <p>
                    We are a leading Wholesaler of White Corian Side Table from Indore, India.
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

export default Corian;
