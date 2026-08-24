import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div id="projects">
        <h2>My Projects</h2>
        <Projects />
      </div>
    </>
  )
}

export default App
