import React from 'react'
import Main from './Main'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Scroller from './Scroller'


const Home = () => {
  return (
    <main className='maincontainer'>
      <Main  />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Scroller />
    </main>
  )
}

export default Home