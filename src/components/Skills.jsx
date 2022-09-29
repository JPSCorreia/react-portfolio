import React from 'react'
import {SiCss3, SiExpress, SiHtml5, SiRedux, SiJavascript, SiNodedotjs, SiReact, SiPostgresql} from 'react-icons/si'
import RotatingGlobe from './RotatingGlobe.jsx'
import { HiChevronDown } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import Scroller from './Scroller';
import { useMediaQuery } from 'react-responsive';


const Skills = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div
      id="skills"
      className="w-[90%] m-auto h-screen items-center flex flex-col" // w-[90%] m-auto md:h-screen p-2 flex flex-col justify-between md:pt-16 pt-12 mt-24
    >
      <div
        className="max-w-[1240px] w-full h-full p-2 mx-auto flex flex-col justify-center md:justify-center items-center"
        data-aos="fade-right"
        data-aos-anchor="#skills"
        data-aos-duration="400"
      >
        <div className="flex flex-col w-full">
          <p className="text-xl tracking-widest uppercase text-[#67E8F9] header-text-top">
            Skills
          </p>
          <h2
            className="pt-2 text-gray-200 font-bold header-text-bottom tracking-wide"
            data-aos="fade-right"
            data-aos-anchor="#skills"
            data-aos-duration="400"
          >
            What I Can Do
          </h2>
          <div className="max-w-[1240px] w-full h-full mx-auto flex flex-col items-center main-with-globe">
            <div className="rotating-globe width-[20vw] height-[20vh]">
              <RotatingGlobe />
            </div>
            <div className='text-[1.05rem] mt-2'>Experienced with developing in:</div>
            <div className="flex flex-row mt-3 md:mt-8 md:flex-col">
              <div className="flex flex-col mr-1">
                <div className="md:py-2 text-start text-gray-200 flex flex-col md:flex-row mx-auto">
                  <span className="flex items-center mr-3 leading-loose tracking-widest text-sm md:text-2xl">
                    <SiHtml5
                      className="mr-2"
                      color="#dd4b25"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    HTML5
                    <span className="hidden md:inline ml-3 ">-</span>
                  </span>
                  <span className="flex items-center mr-3 leading-loose tracking-widest text-sm md:text-2xl">
                    <SiCss3
                      className="mr-2"
                      color="#2762e9"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    CSS3
                    <span className="hidden md:inline ml-3 ">-</span>
                  </span>
                  <span className="flex items-center justify-start mr-3 leading-loose tracking-widest text-sm md:text-2xl">
                    <SiJavascript
                      className="mr-2"
                      color="#efd81f"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    Javascript
                    <span className="hidden md:inline ml-3 ">-</span>
                  </span>
                  <span className="flex items-center justify-start mr-3 leading-loose tracking-widest text-sm md:text-2xl">
                    <SiNodedotjs
                      className="mr-2"
                      color="#43853d"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    Node.js
                  </span>
                </div>
              </div>
              <div className="flex flex-col ml-1">
                <div className="md:py-2 text-start text-gray-200 flex flex-col md:flex-row mx-auto">
                  <span className="flex items-center mr-3 leading-loose tracking-widest text-sm md:text-2xl">
                    <SiReact
                      className="mr-2"
                      color="#61dafb"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    React.js
                    <span className="hidden md:inline ml-3 ">-</span>
                  </span>
                  <span className="flex items-center mr-3 leading-loose tracking-widest text-sm md:text-2xl">
                    <SiRedux
                      className="mr-2"
                      color="#764abc"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    Redux
                    <span className="hidden md:inline ml-3 ">-</span>
                  </span>
                  <span className="flex items-center mr-3 leading-loose tracking-widest text-sm md:text-2xl">
                    <SiExpress
                      className="mr-2"
                      color="#ffffff"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    Express.js
                    <span className="hidden md:inline ml-3 ">-</span>
                  </span>
                  <span className="flex items-center justify-start mr-3 leading-loose tracking-widest text-sm md:text-2xl">
                    <SiPostgresql
                      className="mr-2"
                      color="#31648d"
                      size={isTabletOrMobile ? 24 : 32}
                    />
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scroller link="#projects" />
    </div>
  );
}

export default Skills

