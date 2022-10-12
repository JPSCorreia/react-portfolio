import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import MovingText from 'react-moving-text';
import { NavLink } from 'react-router-dom';

const SideScroller = (props) => {
  return (
    // <div
    //   className="flex flex-col items-center justify-center bg-transparent cursor-pointer hover:text-[#67E8F9] mt-2 z-500"
    // >
    //   <HashLink to={props.link}>
    //     <MovingText
    //       className="space-mono flex flex-col items-center ease-in duration-100 text-md tracking-wide "
    //       type="pulse"
    //       duration="750ms"
    //       delay="0s"
    //       direction="alternate-reverse"
    //       timing="ease-in-out"
    //       iteration="infinite"
    //       fillMode="none"
    //     >
    //       <div className=" hover:text-[#67E8F9] hover:scale-110 mb-4">
    //         { props.toLeft? <HiChevronLeft size={48} /> : <HiChevronRight size={48} /> }
    //       </div>
    //     </MovingText>
    //   </HashLink>
    // </div>
    <HashLink to={props.navLinkToBack}>
<div className={props.classProp}>
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
  { props.toLeft? <HiChevronLeft className="hover:text-[#67E8F9] hover:scale-110 ease-in duration-100" size={48} /> : <HiChevronRight className="hover:text-[#67E8F9] hover:scale-110 ease-in duration-100" size={48} /> }
  </MovingText>
  </div>

</HashLink>
  );
}

export default SideScroller


