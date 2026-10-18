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
      <section id='languages'>
        <h1 className='title' id='languages'>Languages/Tools I use</h1>
       <KnownLanguages />
      </section>
      <hr />
      <section id='projects'>
        <h1 className='title'>My Projects</h1>
        <Projects />
      </section>
    </>
  )
}

export default App
