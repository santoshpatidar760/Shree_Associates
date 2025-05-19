import React, { useState } from 'react';
import "../styles/StrechCeiling.css";

import img1 from '../assets/aluminum.jpg';
import img11 from '../assets/Grey Aluminium Louvers Panel (1).jpg';
import img12 from '../assets/Grey Aluminium Louvers Panel.jpg';

const products = [
    {
        name: "Grey Aluminium Louvers Panel",
        price: 200,
        unit: "Square Feet",
        image: img1, // main image
        thumbnails: [img1, img11, img12],  // 3 small images for thumbnails
        minOrder: 10000,
        details: {
            Color: "White",
            Shape: "Rectangular",
            "Usage/Application": "Table",
            Finish: "Polished",
            "Product Material": "Corian",
            Thickness: "10 mm"
        }
    }
];

const Aluminium = () => {
    return (
        <div className="Strech">
            <div className="Strech-header">
                <h2>Aluminium louvers</h2>
                <p>
                   Our product range includes a wide range of Grey Aluminium Louvers Panel.                
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

export default Aluminium;
