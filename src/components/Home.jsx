import React from "react";
import CardSection from "../pages/CardSection";
import Services from "../pages/Services";
import Features from "../pages/Features";
import ContactInfo from "../pages/ContactInfo";
import Hero from "../pages/Hero";


const Home = () => {

  return (
    <>
    <Hero/>
    <CardSection/>
    <Services />
    <Features />
    <ContactInfo />
    </>
  );
};

export default Home;
