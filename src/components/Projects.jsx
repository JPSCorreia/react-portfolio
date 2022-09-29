import React from 'react'
import ProjectItem from './ProjectItem'
import tldreddit from '../assets/projects/tldreddit.png'
import emporium from '../assets/projects/emporium.png'
import { NavLink } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import Scroller from './Scroller';

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-[90%] m-auto md:h-screen items-center flex flex-col"
    >
      <div className="max-w-[1240px] w-full h-full p-2 mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <p
            className="text-xl tracking-widest uppercase text-[#67E8F9] header-text-top"
            data-aos="fade-right"
            data-aos-anchor="#projects"
            data-aos-duration="400"
          >
            Projects
          </p>
          <h2
            className="py-2 mb-10 header-text-bottom"
            data-aos="fade-right"
            data-aos-anchor="#projects"
            data-aos-duration="400"
          >
            What I've Built
          </h2>
          <div
            className="grid md:grid-cols-2 gap-12"
            data-aos="fade-in"
            data-aos-anchor="#projects"
            data-aos-duration="400"
          >
            <NavLink to={'/emporium'}>
              <ProjectItem
                title="Emporium"
                projectType="Full Stack Project"
                backgroundImg={emporium}
                projectUrl="emporium"
              />
            </NavLink>
            <NavLink to={'/tldreddit'}>
              <ProjectItem
                title="TLDReddit"
                projectType="React Project"
                backgroundImg={tldreddit}
                projectUrl="tldreddit"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div id="contact-top"></div>
      <Scroller link="#contact" />
    </div>
  );
}

export default Projects