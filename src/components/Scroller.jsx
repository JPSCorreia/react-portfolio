import React from 'react'
import { HiChevronDown } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import MovingText from 'react-moving-text';

const Scroller = (props) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-transparent cursor-pointer hover:text-[#67E8F9] mt-2 z-500"
      // data-aos="fade-up"
      // data-aos-anchor="#navbar"
      // data-aos-offset="70"
      // data-aos-duration="100"
      // data-aos-delay="0"
      // data-aos-anchor-placement="top-center"
    >
      <HashLink to={props.link}>
        <MovingText
          className="space-mono flex flex-col items-center ease-in duration-100 text-md tracking-wide "
          type="pulse"
          duration="750ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease-in-out"
          iteration="infinite"
          fillMode="none"
        >
          {props.fromMain ? 'scroll down' : ''}
          <div className=" hover:text-[#67E8F9] hover:scale-110 mb-4">
            <HiChevronDown size={48} />
          </div>
        </MovingText>
      </HashLink>
    </div>
  );
}

export default Scroller