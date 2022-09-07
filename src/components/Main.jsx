/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {SiExpress, SiReact, SiPostgresql} from 'react-icons/si'
import RotatingGlobe from './RotatingGlobe.jsx'

const Main = () => {

  return (
    <div id='home' className='w-[90%] m-auto md:h-screen text-center p-2 flex items-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center main-with-globe'>
        <div className='rotating-globe' >
          <RotatingGlobe  />
        </div>
        <div className='flex flex-col main home-intro'>
          <h1 
            className='pb-2 text-gray-100 text-start text-3xl sm:text-4xl lg:text-6xl whitespace-nowrap' 
            data-aos='fade-right' 
            data-aos-anchor='#home'
          >
            Hi, I'm <span className='text-[#67E8F9]'>João Correia</span><span className='text-gray-100'>,</span>
          </h1>
          <h1 className='pb-6 text-gray-100 text-start text-3xl sm:text-4xl lg:text-6xl whitespace-nowrap' data-aos='fade-right' data-aos-anchor='#home'>
            web developer.
          </h1>
          <div className='flex flex-col' data-aos='fade-up' data-aos-anchor='#home'>
            <div className='py-2 text-start text-gray-200 flex flex-col md:flex-row'>
              <span className='flex items-center mr-2 whitespace-nowrap leading-loose tracking-widest text-lg'>Full Stack Developer<span className='hidden md:inline ml-3'>-</span>
              </span>
              <span className='flex items-center mr-3 leading-loose tracking-widest text-lg'>
                <SiReact  className='mr-2' color='#61dafb' size={32} />
                React.js 
                <span className='hidden md:inline ml-3 '>-</span>
              </span>
              <span className='flex items-center mr-3 leading-loose tracking-widest text-lg'>
                <SiExpress className='mr-2' color='#ffffff' size={32} />
                Express.js 
                <span className='hidden md:inline ml-3 '>-</span>
              </span>
              <span className='flex items-center justify-start mr-3 leading-loose tracking-widest text-lg'>
                <SiPostgresql  className='mr-2' color='#31648d' size={32} />
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
    </div>
  )
}

export default Main