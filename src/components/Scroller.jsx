import React from 'react'
import { HiChevronDown } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';


const Scroller = (props) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-transparent"
      // data-aos="fade-up"
      // data-aos-anchor="#navbar"
      // data-aos-offset="70"
      // data-aos-duration="100"
      // data-aos-delay="0"
      // data-aos-anchor-placement="top-center"
    >
      <HashLink to={props.link}>
        <div className="cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100">
          <HiChevronDown size={48} />
        </div>
      </HashLink>
    </div>
  );
}

export default Scroller