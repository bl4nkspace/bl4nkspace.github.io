import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import KnownLanguages from './components/KnownLanguages';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <hr />
      <h1 className='title' id='languages'>Languages/Tools I use</h1>
      <hr />
      <KnownLanguages />
      <hr />
      <h1 className='title' id='projects'>My Projects</h1>
      <hr />
      <Projects />
    </>
  )
}

export default App
