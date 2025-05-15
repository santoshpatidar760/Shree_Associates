import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.jpeg";
import "../styles/Home.css";
import "../styles/Hero.css";

const Hero = () => {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: false,
        pauseOnFocus: false,
      };

  return (
    <div className="slider-container" style={{ position: "relative" }}>
      <Slider {...settings}>
        <div>
          <img
            src={slide1}
            alt="Slide 1"
            style={{ width: "100%", height: "550px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={slide2}
            alt="Slide 2"
            style={{ width: "100%", height: "550px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={slide3}
            alt="Slide 3"
            style={{ width: "100%", height: "550px", objectFit: "cover" }}
          />
        </div>
      </Slider>

      <div className="slider-overlay">
        <h2 className="head">we are a Proprietorship engaged as the Wholesaler Of Stretch Ceiling, Corian Mandir Etc.</h2>
        <button onClick={() => (window.location.href = '/product')}>view details</button>
      </div>
    </div>
  )
}

export default Hero
