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
import TableTops from './pages/TableTops';
import VinylWallpaper from './pages/vinylWallpaper';
import Aluminium from './pages/Aluminium';
import Corian from './pages/Corian';
import CorianRailing from './pages/CorianRailing';
import CorianKitchen from './pages/CorianKitchen';
import MirrorFrame from './pages/MirrorFrame';


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
        <Route path="/stretch-ceiling" element={<StrechCeiling />} />
        <Route path="/Table-tops" element={<TableTops />} />
        <Route path="/vinyl-wallpaper" element={<VinylWallpaper />} />
        <Route path="/aluminum-louvers" element={<Aluminium />} /> 
        <Route path="/corian-stool" element={<Corian />} />
        <Route path="/corian-railing" element={<CorianRailing />} />
        <Route path="/corian-kitchen-top" element={<CorianKitchen />} />
        <Route path="/mirror-frame" element={<MirrorFrame />} /> 
      </Routes>
      <Footer />
      <ScrollToUp />
      <CallIcon />
      <WhatsAppIcon />
    </>
  );
};

export default App;
