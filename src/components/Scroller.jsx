import React from 'react'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { HashLink } from 'react-router-hash-link';

const Scroller = () => {
  return (
    <div className='flex justify-center mb-8 bg-transparent' id='scroller'>
    <HashLink to='#' >
     <div className='p-6 m-1 mt-4 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
      <HiOutlineChevronDoubleUp size={30} />
     </div>
    </HashLink>
  </div>
  )
}

export default Scroller