import React from "react";
import '../styles/CardSection.css';
import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.jpeg';
import card3 from '../assets/card3.jpeg';

const cardData = [
  {
    title: "CORIAN MANDIR / CORIAN TEMPLE DESIGNS",
    description: "Corian Mandir / Corian Temple Designs The Ipure Interior offers a unique collection of Corian",
    image: card2,
  },
  {
    title: "BAR COUNTERS",
    description: "Bar Counters The Ipure Interior offers a unique collection of Corian Solid Surface Temples/Mandir which",
    image: card1,
  },
  {
    title: "3D ART WORK WITH BACKLIGHT",
    description: "3D Art Work with Backlight The Ipure Interior offers a designer collection of Beautiful “Art",
    image: card3,
  },
];

const CardSection = () => {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="card" style={{ backgroundImage: `url(${card.image})` }}>
          <div className="card-overlay">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="btn">READ MORE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
