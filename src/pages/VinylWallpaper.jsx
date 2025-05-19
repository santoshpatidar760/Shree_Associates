import React, { useState } from 'react';
import "../styles/StrechCeiling.css";

import img1 from '../assets/wallpaper.jpg';
import img11 from '../assets/wallpaper-11.jpg';
import img12 from '../assets/wallpaper-12.jpeg';

import img2 from '../assets/plain.jpeg';
import img21 from '../assets/plain-21.jpeg';
import img22 from '../assets/plain-22.jpeg';

const products = [
    {
        name: "Pvc Vinyl Wallcovering",
        price: 125,
        unit: "Square Feet",
        image: img1, // main image
        thumbnails: [img1, img11, img12],  // 3 small images for thumbnails
        minOrder: 10000,
        details: {
            "Usage/Application": "Wall Decor",
            Color: "Brown",
            Material: "Vinyl",
            Thickness: "0.5 mm",
            Pattern: "Plain"
        }
    },
    {
        name: "Plain Vinyl Wallcovering",
        price: "125",
        unit: "Square Feet",
        image: img2,
        thumbnails: [img2, img21, img22],
        minOrder: 10000,
        details: {
            "Usage/Application": "Wall Decor",
            Finish: "Matte",
            Waterproof: "Yes",
            "Pattern": "Plain",
            "Usage": "For Wall Coverings",
            "Product Color": "Grey",
            "Product Material": "Vinyl"
        }
    },
];

const VinylWallpaper = () => {
    return (
        <div className="Strech">
            <div className="Strech-header">
                <h2>Vinyl Wallpaper</h2>
                <p>
                    We are a leading Wholesaler of Pvc Vinyl Wallcovering and Plain Vinyl Wallcovering from Indore, India.
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

export default VinylWallpaper;
