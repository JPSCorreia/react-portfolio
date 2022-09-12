import React from 'react'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { HashLink } from 'react-router-hash-link';
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Scroller = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-8 bg-transparent' id='scroller'>

    <HashLink to='#' >
     <div className='p-6 m-1 mt-4 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
      <HiOutlineChevronDoubleUp size={30} />
     </div>
    </HashLink>
    <div className='flex justify-start py-1 items-center'>
      
                    <div className='rounded-full bg-[#67E8F9]  shadow-[#67E8F9]  p-2 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                      <FaLinkedinIn size={24} color={'#121212'}/>
                    </div>
                    <div className='rounded-full bg-[#67E8F9]  shadow-[#67E8F9] p-2 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                      <FaGithub size={24} color={'#121212'}/>
                    </div>
                    <div className='rounded-full bg-[#67E8F9] color-[#121212] shadow-[#67E8F9] p-2 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                      <AiOutlineMail size={24} color={'#121212'}/>
                    </div>
                    <div className='rounded-full bg-[#67E8F9]  shadow-[#67E8F9] p-2 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                      <BsFillPersonLinesFill size={24} color={'#121212'}/>
                    </div>
                  </div>
                  <p className='mt-4 '>© 2022 João Correia</p>
  </div>
  )
}

export default Scroller