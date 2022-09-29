/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {SiExpress, SiReact, SiPostgresql} from 'react-icons/si'
// import RotatingGlobe from './RotatingGlobe.jsx'
import Scroller from './Scroller'


const Main = () => {

  return (
      <div
        id="home"
        className="w-[90%] m-auto h-screen text-center flex items-center home-page flex-col"
      >
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center text-zone">
          <div className="flex flex-col main home-intro mt-48 sm:mt-48">
            <h1
              className="pb-2 text-start text-4xl lg:text-6xl whitespace-nowrap home-text tracking-wide"
              data-aos="fade-right"
              data-aos-anchor="#home"
              data-aos-duration="400"
            >
              Hi, I'm{' '}
              <span className="text-[#67E8F9] tracking-wide home-text">
                João Correia
              </span>
              <span className="home-text">,</span>
            </h1>
            <h1
              className="pb-8 text-start text-4xl lg:text-6xl whitespace-nowrap home-text tracking-wide"
              data-aos="fade-right"
              data-aos-anchor="#home"
              data-aos-duration="400"
            >
              Web Developer.
            </h1>
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-anchor="#home"
              data-aos-duration="400"
            >
              <div className="py-2 text-start flex flex-col md:flex-row">
                <span className="flex items-center mr-2 whitespace-nowrap leading-loose tracking-widest text-lg">
                  Full Stack Developer
                  <span className="hidden md:inline ml-3">-</span>
                </span>
                <span className="flex items-center mr-3 leading-loose tracking-widest text-lg">
                  <SiReact className="mr-2" color="#61dafb" size={32} />
                  React.js
                  <span className="hidden md:inline ml-3 ">-</span>
                </span>
                <span className="flex items-center mr-3 leading-loose tracking-widest text-lg">
                  <SiExpress className="mr-2" color="#ffffff" size={32} />
                  Express.js
                  <span className="hidden md:inline ml-3 ">-</span>
                </span>
                <span className="flex items-center justify-start mr-3 leading-loose tracking-widest text-lg">
                  <SiPostgresql className="mr-2" color="#31648d" size={32} />
                  PostgreSQL
                </span>
              </div>
            </div>
            {/* <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
              <FaLinkedinIn size={30}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
              <FaGithub size={30}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
              <AiOutlineMail size={30}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
              <BsFillPersonLinesFill size={30}/>
            </div>
          </div> */}
          </div>
        </div>
        <Scroller link="#about" />
      </div>
  );
}

export default Main