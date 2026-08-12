import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>BL4NK_SPACE</h1>
        <p>Aspiring developer</p>
        <a href="#projects" className="hero-btn">
          View my projects
        </a>
      </div>
    </div>
  );
};

export default Hero;