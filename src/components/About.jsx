/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import profile from '../assets/profile.png'
import { Heading } from '@chakra-ui/react'

const About = () => {

  return (
    <div id='about' className='w-[90%] m-auto md:h-screen p-2 flex items-center pt-20 pb-24 md:pt-16 mt-32'>
      <div 
        className='max-w-[1240px] mx-auto flex justify-between' 
        data-aos='fade-right'
        data-aos-anchor='#about'
      >
        <div 
          className='flex flex-col '             
        >
          <p 
            className='uppercase text-xl tracking-widest text-[#67E8F9]' 
          >
            About Me
          </p>
          <Heading as='h2' className='pt-2 text-gray-200 font-bold' data-aos='fade-right' data-aos-delay='0' data-aos-anchor='#about'>
            Who I am
          </Heading>
          {/* <h2 className='pt-2 text-gray-200 font-bold' data-aos='fade-right' data-aos-delay='0' data-aos-anchor='#about'>
            Who I am
          </h2> */}
          <div className='flex flex-row' >
          <div className='pt-10' data-aos='fade-right' data-aos-anchor='#about'>
          <img 
              className='animated-image w-[160px] block sm:hidden rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#67E8F9] mx-auto mb-8 hover:scale-110 ease-in duration-200 justify-center items-center '
              src={profile}
              alt="/"

            />
          <p className='pb-2 text-gray-200'>
          Since I was a child I've had a passion for science, technology and programming so I was always well-versed in computers and the newer technologies, but it wasn't until 2020 that I saw the opportunity to try and start a career as a web developer.           </p>
          <p className='py-2 text-gray-200' >
          I started with Javascript, HTML and CSS as foundations for web development and quickly found myself learning more advanced frameworks such as React.js, how to operate a full stack application using Node.js, Express.js and PostgreSQL and building multiple projects so I could learn more about these technologies.          
          </p>
          </div>
     
          <img 
              className='animated-image ml-8 w-[192px] hidden sm:inline-block rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#67E8F9] m-auto hover:scale-110 ease-in duration-200 justify-center items-center '
              src={profile}
              alt="/"

            />

          </div>
        </div>
        {/* <div 
          className='hidden h-[100%] w-[440px] sm:inline-block rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#67E8F9] m-auto hover:scale-110 ease-in duration-200 justify-center items-center ml-12' 
          // data-aos='fade-left' 
          // data-aos-anchor='#about'
        > */}
            {/* <img 
              className='animated-image hidden h-[100%] w-[440px] sm:inline-block rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#67E8F9] m-auto hover:scale-110 ease-in duration-200 justify-center items-center ml-12'
              src={profile}
              alt="/"
              width='192'
              height='192'
            /> */}
          {/* </div> */}
      </div>
    </div>
  )
}

export default About