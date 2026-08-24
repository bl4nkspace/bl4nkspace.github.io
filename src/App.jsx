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
      <hr />
      <h1 className='title'>My Projects</h1>
      <hr />
      <Projects />
    </>
  )
}

export default App
