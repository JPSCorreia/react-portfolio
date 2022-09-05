/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { HashLink } from 'react-router-hash-link';
import profile from '../assets/profile.png'

const About = () => {

  return (
    <div id='about' className='w-[90%] m-auto md:h-screen p-2 flex items-center pt-44 md:pt-16 mt-32'>
      <div className='max-w-[1240px] m-auto sm:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p 
            className='uppercase text-xl tracking-widest text-[#67E8F9]' 
            data-aos='fade-right'
            data-aos-anchor='#about'
          >
            About
          </p>
          <h2 className='py-4 text-gray-200' data-aos='fade-right' data-aos-delay='0' data-aos-anchor='#about'>
            Who I am
          </h2>
          <div data-aos='fade-right' data-aos-anchor='#about'>
          <p className='pb-2 text-gray-200'>
          Since I was a child I've had a passion for science, technology and programming so I was always well-versed in computers and the newer technologies, but it wasn't until 2020 that I saw the opportunity to try and start a career as a web developer.           </p>
          <p className='py-2 text-gray-200' >
          I started with Javascript, HTML and CSS as foundations for web development and quickly found myself learning more advanced frameworks such as React.js, how to operate a full stack application using Node.js, Express.js and PostgreSQL and building multiple projects so I could learn more about these technologies.          </p>
          <HashLink to='#projects'>
            <p className='py-2 cursor-pointer text-gray-200 underline hover:text-[#67E8F9] hover:scale-110 whitespace-nowrap w-[0%] ease-in duration-200'>Check out some of my projects </p>
          </HashLink>
          </div>
        </div>
        <div 
          className='hidden w-50 h-48 sm:inline-block rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#67E8F9] m-auto hover:scale-110 ease-in duration-200 justify-center items-center' 
          data-aos='fade-left' 
          data-aos-anchor='#about'
        >
            <img 
              className='animated-image'
              src={profile}
              alt="/"
              width='192'
              height='192'
            />
          </div>
      </div>
    </div>
  )
}

export default About