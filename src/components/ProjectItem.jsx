import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react';

const ProjectItem = (props) => {
  return (
    <div className="relative flex items-center justify-center cursor-pointer h-auto w-full shadow-custom3 hover:shadow-[#67E8F9] shadow-[#ffffff]  p-4 group hover:bg-gradient-to-r from-[#0891B2]/80 to-[#67E8F9]/80 ">
      <>
        <img
          className=" group-hover:opacity-20 "
          src={props.backgroundImg}
          alt="/"
        />
      </>
      <div className="absolute">
        <h3 className="absolute translate-x-[-50%] translate-y-[-250%] left-[50%] top-[50%] hidden group-hover:block text-2xl md:text-2xl lg:text-4xl text-white tracking-wider text-center">
          {props.title}
        </h3>
        <p className="absolute translate-x-[-50%] translate-y-[-150%] hidden group-hover:block  text-white text-md md:text-lg lg:text-xl font-bold text-center w-[15rem] ">
          {props.projectType}
        </p>
        <div className="hidden group-hover:block">
          <ButtonGroup isAttached>
            <Button
              variant="outline"
              size="lg"
              className="absolute translate-x-[0%] translate-y-[150%]"
            >
              More Info
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="absolute translate-x-[0%] translate-y-[150%]"
            >
              More Info
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem