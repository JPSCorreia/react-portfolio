/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import profile from '../assets/profile.png'
import Scroller from './Scroller'
import { HiChevronDown } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';

const About = () => {

  return (
    <div
      id="about"
      className="w-[90%] m-auto h-screen items-center flex flex-col text-sm sm:text-[16px]" // pt-20 pb-24 md:pt-16 mt-64
    >
      <div
        className="max-w-[1240px] w-full h-full p-2 mx-auto flex flex-col justify-center items-center mt-24 sm:mt-0"
        data-aos="fade-right"
        data-aos-anchor="#about"
        data-aos-duration="400"
        data-aos-delay="100"
      >
        <div className="flex flex-col w-full">
          <p className="text-xl tracking-widest uppercase  text-[#67E8F9] header-text-top">
            About Me
          </p>
          <h2
            className="pt-2 text-gray-200 font-bold header-text-bottom tracking-wide"
            // data-aos="fade-right"
            // data-aos-delay="0"
            // data-aos-anchor="#about"
            // data-aos-duration="400"
          >
            Who I am
          </h2>
          <div className="flex flex-row">
            <div
              className="pt-4 flex flex-col"
              data-aos="fade-right"
              data-aos-anchor="#about"
              data-aos-duration="400"
            >
              <img
                className="animated-image mt-1 w-[16vh] block sm:hidden rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#ffffff] hover:shadow-[#67E8F9] mx-auto hover:scale-110 ease-in duration-200 justify-center items-center "
                src={profile}
                alt="/"
              />
              <p className="mt-6 pb-0 sm:pb-2 text-gray-200 leading-5 sm:leading-6">
                Since I was a child I've had a passion for science, technology
                and programming so I was always well-versed in computers and the
                newer technologies, but it wasn't until 2020 that I saw the
                opportunity to try and start a career as a web developer.{' '}
              </p>
              <p className="mt-4 text-gray-200 leading-5 sm:leading-6">
                I started with Javascript, HTML and CSS as foundations for web
                development and quickly found myself learning more advanced
                frameworks such as React.js, how to operate a full stack
                application using Node.js, Express.js and PostgreSQL and
                building multiple projects so I could learn more about these
                technologies.
              </p>
            </div>

            <img
              className="animated-image ml-8 w-[192px] hidden sm:inline-block rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#ffffff] hover:shadow-[#67E8F9] m-auto hover:scale-110 ease-in duration-200 justify-center items-center "
              src={profile}
              alt="/"
            />
          </div>
        </div>
      </div>
      {/* <Scroller link="#skills" /> */}
      <div
        className="flex flex-col mx-auto items-center justify-center bg-transparent"
        // data-aos="fade-up"
        // data-aos-anchor="#about"
        // data-aos-offset="100"
        // data-aos-duration="400"
        // data-aos-delay="100"
        // // data-aos-anchor-placement="top-center"
      >
        <HashLink to="#skills">
          <div className="cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100">
            <HiChevronDown size={48} />
          </div>
        </HashLink>
      </div>
    </div>
  );
}

export default About