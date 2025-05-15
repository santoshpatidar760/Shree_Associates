import React from 'react';
import "../styles/StrechCeiling.css";
import img1 from "../assets/PVC Stretch Ceiling (1).jpg";
import img2 from "../assets/0.5mm Printed Stretch Ceiling.jpg";
import img3 from "../assets/PVC Bed Room Stretch Ceiling.jpg";
import img4 from "../assets/Printed Stretch Ceiling.jpg";
import img5 from "../assets/Stretch Ceiling 3D Galaxy.jpg";
import img6 from "../assets/PVC Film Coated 3D Infinity Stretch Ceiling.jpg";
import img7 from "../assets/Printed Stretch Ceiling (1).jpg";
import img8 from "../assets/Stretched Fabric Ceiling.jpg";


const products = [
    {
        name: "PVC Stretch Ceiling",
        price: 550,
        unit: "Square Feet",
        image: img1,
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
        <div className='Strech'>
            <div className='Strech-header'>
                <h2>Stretch Ceiling</h2>
                <p>
                    We are a leading Wholesaler of PVC Stretch Ceiling, 0.5mm Printed Stretch Ceiling,
                    PVC Bed Room Stretch Ceiling, Printed Stretch Ceiling, Stretch Ceiling 3D Galaxy and
                    PVC Film Coated 3D Infinity Stretch Ceiling from Indore, India.
                </p>
            </div>

            <div className="product-container">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-left">
                            <img src={product.image} alt={product.name} className="main-image" />
                            <button className="photos-button">Get More Photos</button>
                        </div>

                        <div className="product-right">
                            <h2>{product.name}</h2>
                            <p className="price">
                                ₹ {product.price} <span>/ {product.unit}</span> &nbsp;
                                <a href="#" className="latest-price">Get Latest Price</a>
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
                ))}
            </div>
        </div>
    );
};

export default StrechCeiling;
