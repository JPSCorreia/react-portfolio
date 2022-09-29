import React from 'react'
import Main from './Main'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer';


const Home = () => {
  return (
    <main className="maincontainer">
      <Main />
      <div className="h-[5vh]"></div>
      <About />
      <div className="h-[5vh]"></div>
      <Skills />
      <div className="h-[5vh]"></div>
      <Projects />
      <div className="h-[5vh]"></div>
      <Contact />
      <Footer />
    </main>
  );
}

export default Home