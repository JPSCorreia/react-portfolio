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
        className="max-w-[1240px] w-full h-full mx-auto flex flex-col justify-top md:justify-center items-center mt-20 md:mt-0 about-container"
        data-aos="fade-right"
        data-aos-anchor="#about"
        data-aos-duration="400"
        data-aos-delay="100"
      >
        <div className="flex flex-col w-full">
          <p className="text-lg md:text-xl tracking-widest text-[#67E8F9] header-text-top uppercase">
            About
          </p>
          <div
            className="mt-1 text-gray-200 tracking-wide text-2xl md:text-3xl space-mono font-normal mb-4"
            // data-aos="fade-right"
            // data-aos-delay="0"
            // data-aos-anchor="#about"
            // data-aos-duration="400"
          >
            Who I am
          </div>
          <div className="flex flex-row">
            <div
              className="flex flex-col"
              // data-aos="fade-right"
              // data-aos-anchor="#about"
              // data-aos-duration="400"
            >
              <img
                className="animated-image mt-1 w-[18vh] block sm:hidden rounded-full ring-2 ring-[#67E8F9]/20 shadow-lg shadow-[#ffffff] hover:shadow-[#67E8F9] mx-auto hover:scale-110 ease-in duration-200 justify-center items-center "
                src={profile}
                alt="/"
              />
              {/* <div class="about__StyledPic-sc-1ownso9-2 iTdkQf">
                <div class="wrapper">
                  <div data-gatsby-image-wrapper="" class="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                    <div style="max-width: 500px; display: block;">
                      <img 
                        alt="" 
                        role="presentation" 
                        aria-hidden="true" 
                        src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" 
                        style="max-width: 100%; display: block; position: static;"
                      />
                    </div>
                    <div aria-hidden="true" data-placeholder-image="" style="opacity: 0; transition: opacity 500ms linear 0s; background-color: rgb(232, 232, 232); position: absolute; inset: 0px; object-fit: cover;">
                    </div> */}
                    {/* <source 
                      type="image/avif" 
                      srcset="/static/30a645f7db6038f83287d0c6042d3b2b/aebc8/me.avif 125w,/static/30a645f7db6038f83287d0c6042d3b2b/6b255/me.avif 250w, /static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif 500w" 
                      sizes="(min-width: 500px) 500px, 100vw"
                    >
                    <source 
                      type="image/webp" 
                      srcset="/static/30a645f7db6038f83287d0c6042d3b2b/4155f/me.webp 125w, /static/30a645f7db6038f83287d0c6042d3b2b/02deb/me.webp 250w, /static/30a645f7db6038f83287d0c6042d3b2b/1ee78/me.webp 500w" 
                      sizes="(min-width: 500px) 500px, 100vw"
                    > */}
                    {/* <img 
                      width="500" 
                      height="500" 
                      data-main-image="" 
                      sizes="(min-width: 500px) 500px, 100vw" 
                      decoding="async" 
                      src="/static/30a645f7db6038f83287d0c6042d3b2b/25f3c/me.jpg" 
                      srcset="/static/30a645f7db6038f83287d0c6042d3b2b/2dd75/me.jpg 125w, /static/30a645f7db6038f83287d0c6042d3b2b/754ad/me.jpg 250w, /static/30a645f7db6038f83287d0c6042d3b2b/25f3c/me.jpg 500w" 
                      alt="Headshot" 
                      style="object-fit: cover; opacity: 1;"
                    />
                    <noscript></noscript>
                  </div>
                </div>
              </div> */}
              <p className="mt-6 pb-0 sm:pb-2 text-gray-200 leading-5 sm:leading-6 about-text-1">
                Since I was a child I've had a passion for science, technology
                and programming so I was always well-versed in computers and the
                newer technologies, but it wasn't until 2020 that I saw the
                opportunity to try and start a career as a web developer.{' '}
              </p>
              <p className="mt-4 text-gray-200 leading-5 sm:leading-6 about-text-2">
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
      <Scroller link="#skills" />
    </div>
  );
}

export default About