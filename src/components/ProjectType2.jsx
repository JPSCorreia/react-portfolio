import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { IoPlay } from 'react-icons/io5';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import TLDRedditTechnologies from './TLDRedditTechnologies';
import EmporiumTechnologies from './EmporiumTechnologies';
import ProjectImage from './ProjectImage';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectType = (props) => {

  useEffect(() => {
    AOS.init({
      // delay: 100,
      easing: 'ease-in',
      duration: 0,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div id={props.projectId} className="w-full ">
      <div
        className="w-screen h-[20vh] lg:h-[30vh] relative shadow-lg shadow-[#67E8F9] rounded-xl" /*top-20 */
      >
        {/* <img
          className="absolute left-0 h-[20vh] lg:h-[30vh] w-[100%] z-10 object-cover opacity-50"
          src={props.backgroundImageURL}
          alt="/"
          data-aos="fade-in"
          data-aos-anchor={props.AOSAnchor}
          data-aos-duration="1000"
        /> */}
        <ProjectImage backgroundImageURL={props.backgroundImageURL} AOSAnchor={props.AOSAnchor} />
        <div className="absolute left-0 w-full top-[20] h-[20vh] lg:h-[30vh] bg-[#121212]/70 z-10"></div>
        <HashLink to="/#projects">
          <div className="absolute top-[94%] z-10 p-6 max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <p
              className="text-xl tracking-widest uppercase header-text-top text-[#67E8F9] hover:underline underline-offset-4 mb-2 "
              data-aos="fade-right"
              data-aos-duration="400"
            >
              Projects
            </p>
          </div>
        </HashLink>
      </div>
      <NavLink to={props.navLinkToBack}>
        <div className="flex-row flex-start justify-start hidden 2xl:flex absolute top-[65%] left-[5%] ">
          <ChevronLeftIcon
            className="hover:text-[#67E8F9] hover:scale-110 ease-in duration-100"
            w={12}
            h={12}
          />
        </div>
      </NavLink>
      <NavLink to={props.navLinkToNext}>
        <div className="flex-row flex-start justify-start hidden 2xl:flex absolute top-[65%] left-[92%] ">
          <ChevronRightIcon
            className="hover:text-[#67E8F9] hover:scale-110 ease-in duration-100"
            w={12}
            h={12}
          />
        </div>
      </NavLink>
      <div className="max-w-[1240px] mx-auto p-6 grid  gap-8 "> {/* lg:grid-cols-5 */}
        <div className=""> {/* col-span-1 */}
          <h2
            className="pb-2 mb-4"
            data-aos="fade-right"
            data-aos-anchor={props.AOSAnchor}
            data-aos-duration="400"
          >
            {props.projectTitle}
          </h2>
          <p
            data-aos="fade-right"
            data-aos-anchor={props.AOSAnchor}
            data-aos-duration="400"
          >
            {props.projectParagraphOne}
          </p>
          <br />
          <p
            data-aos="fade-right"
            data-aos-anchor={props.AOSAnchor}
            data-aos-duration="400"
          >
            {props.projectParagraphTwo}
          </p>
        </div>
        {props.projectId === 'tldreddit' ? <TLDRedditTechnologies /> : ''}
        {props.projectId === 'emporium' ? <EmporiumTechnologies AOSAnchor={props.AOSAnchor} /> : ''}
        <div
          className="flex flex-row"
          data-aos="fade-up"
          data-aos-anchor={props.AOSAnchor}
          data-aos-duration="400"
        >
          <a href={props.exampleLink} target="_blank" rel="noreferrer noopener">
            <Button
              leftIcon={<IoPlay />}
              color="#ffffff"
              variant="outline"
              className="flex flex-center text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100 w-[7rem]"
              size="lg"
            >
              Demo
            </Button>
          </a>
          <a href={props.githubLink} target="_blank" rel="noreferrer noopener">
            <Button
              leftIcon={<FaGithub />}
              color="#ffffff"
              variant="outline"
              className="flex flex-center ml-2 text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100 w-[7rem] "
              size="lg"
            >
              Code
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectType


