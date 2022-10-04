import React from 'react'
import Main from './Main'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer';


const Home = () => {
  return (
    <main className="maincontainer max-w-screen">
      <Main />
      <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <About />
      <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <Skills />
      <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <Projects />
      <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <Contact />
      <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <Footer />
    </main>
  );
}

export default Home