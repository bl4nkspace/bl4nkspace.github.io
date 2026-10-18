import { useLenis } from "lenis/react";
import React from 'react';
import './Hero.css';

const Hero = () => {
  const lenis = useLenis();

  return (
    <main className="hero">
      <div className="hero-content">
        <h1>BL4NK_SPACE</h1>
        <p>Aspiring developer</p>
        <a 
          href="#projects" 
          className="hero-btn" 
          onClick={(e) => {
            e.preventDefault();
            lenis?.scrollTo("#projects");
          }}
        >
          View my projects
        </a>
      </div>
    </main>
  );
};

export default Hero;