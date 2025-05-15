import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './pages/Product';
import About from './pages/About';
import Services from './pages/ServicesShree';
import Contact from './pages/Contact';
import ScrollToUp from './pages/ScrollToUp';
import WhatsAppIcon from './pages/WhatsappIcon';
import CallIcon from './pages/CallIcon';
import OurProduct from './pages/OurProduct';
import StrechCeiling from './pages/StrechCeiling';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourproduct" element={<OurProduct />} />
        <Route path="/StrechCeiling" element={<StrechCeiling />} />
      </Routes>
      <Footer />
      <ScrollToUp />
      <CallIcon />
      <WhatsAppIcon />
    </>
  );
};

export default App;
