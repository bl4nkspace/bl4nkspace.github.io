import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <hr />
      <section id='about'>
        <h1 className='title'>About me</h1>
        <About />
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
