import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Subscribe from './pages/subscribe';
import Events from './pages/events';
import Videos from './pages/videos';

import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let newImages = [];
    for(let i = 0; i <= 10; i++) {
      const newImage = `https://backgroundphotos.s3.us-east-2.amazonaws.com/photos/${i}.jpeg`;
      newImages.push(newImage);
    }
    setImages(newImages);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <Router>
      <div className="background-slider">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <div 
                className="slide-image" 
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="App">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
