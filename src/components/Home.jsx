import React from 'react'
import Main from './Main'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'



const Home = () => {
  return (
    <main className="maincontainer flex flex-col max-w-screen">
      <Main />
      <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <About />
      <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <Skills />
      <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <Projects />
      <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
      <Contact />
    </main>
  );
}

export default Home