import React from 'react'
import ProjectItem from './ProjectItem'
import tldreddit from '../assets/projects/tldreddit.png'
import emporium from '../assets/projects/emporium.png'
import { NavLink } from 'react-router-dom';

const Projects = () => {
  return (
    <div id="projects" className="w-[90%] m-auto md:h-screen p-2  mt-48">
      <div className="max-w-[1240px] flex flex-col justify-center h-full mx-auto px-2 py-16">
        <p
          className="text-xl tracking-widest uppercase text-[#67E8F9] header-text-top"
          data-aos="fade-right"
          data-aos-anchor="#projects"
        >
          Projects
        </p>
        <h2
          className="py-2 mb-10 header-text-bottom"
          data-aos="fade-right"
          data-aos-anchor="#projects"
        >
          What I've Built
        </h2>
        <div
          className="grid md:grid-cols-2 gap-12"
          data-aos="fade-in"
          data-aos-anchor="#projects"
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
      <div id="contact-top"></div>
    </div>
  );
}

export default Projects