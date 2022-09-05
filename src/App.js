import Navbar from './components/Navbar'
import Particle from "./components/Particle";
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Scroller from './components/Scroller'
import React from 'react'

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <main>
        <div className='maincontainer'>
          <Main  />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Scroller />
        </div>
      </main>
    </>
  );
}

export default App;
