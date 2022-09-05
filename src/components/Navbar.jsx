/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaHome, FaUserCircle, FaGraduationCap, FaEye} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HashLink } from 'react-router-hash-link';
import jcorreia from '../assets/jcorreia-fullstackdev-2.png';


function Navbar() {

  useEffect(() => {
    Aos.init({
      duration: 400,
      // debounceDelay: 50, 
      // once: false,
      easing: 'ease-in',
      mirror: true,
      // offset: 100
    });
  }, [])

  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {

    const handleShadow = () => {
      if (window.scrollY >= 1) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }

    window.addEventListener('scroll', handleShadow)

  }, [])

  // 
  return (
    <div className={shadow? 'fixed w-full h-20 bg-[#121212]/70 shadow-[#121212] z-[9999]' : 'bg-[#121212]/70 shadow-[#121212] fixed w-full h-20 z-[9999]'}>
      <div className="flex justify-between items-center w-full h-full px-2 ml-3">
        <img
          src={jcorreia}
          alt="/"
          width='215'
          height='40'
          className=''
        />
      <div>
          <ul className='hidden lg:flex uppercase mr-4'>
            <HashLink to='#'>
              <li className='w-[100px] hover:shadow-custom pl-6 pr-6 ml-2 text-center p-3 text-xl hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaHome className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Home</span></div></li>
            </HashLink>
            <HashLink to='/#about'>
              <li className='w-[100px] hover:shadow-custom pl-6 pr-6 ml-2  p-3 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 '><div className='flex flex-col flex-center'><FaUserCircle className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>About</span></div></li>
            </HashLink>
            <HashLink to='/#skills'>
              <li className='w-[100px] hover:shadow-custom pl-6 pr-6 ml-2  p-3 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaGraduationCap className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Skills</span></div></li>
            </HashLink>
            <HashLink to='/#projects'>
              <li className='w-[100px] hover:shadow-custom pl-6 pr-6 ml-2  p-3 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaEye className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Projects</span></div></li>
            </HashLink>
            <HashLink to='/#contact'>
              <li className='w-[100px] hover:shadow-custom pl-6 pr-6 p-3 ml-2  text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><GrMail className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Contact</span></div></li>
            </HashLink>
          </ul>
          <div onClick={handleNav} className='lg:hidden rounded-full mr-[1rem] cursor-pointer p-2 mt-1 hover:shadow-sm hover:shadow-[#67E8F9] hover:scale-110 hover:text-[#67E8F9] ease-in duration-200'>
            {nav? <AiOutlineClose className='ease-in duration-200' size={32} /> : <AiOutlineMenu className='ease-in duration-200' size={32} /> }
          </div>
        </div>
      </div>
      <div className={nav? '' : ''}>
        <div 
          className={ 
            nav
            ? 'p-0 shadow-sm lg:hidden fixed h-screen right-0 top-20 sidebar sm:w-20 md:w-20 lg:w-20 bg-[#121212] ease-in duration-200 bg-[#121212]/70' 
            : 'p-0 shadow-sm shadow-[#67E8F9] fixed h-screen right-[-50%] top-20 sidebar ease-in duration-200 bg-[#121212]/70'
          }
        >
          <div> 
            <div className=''>
              <ul className='flex flex-col uppercase justify-center align-center mt-6'>
                <HashLink to='#'>
                <li onClick={handleNav} className='w-[100%] hover:shadow-custom ml-[3px] py-3 mt-6 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaHome className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Home</span></div></li>
                </HashLink>
                <HashLink to='/#about'>
                <li onClick={handleNav} className='w-[100%] hover:shadow-custom ml-[3px] py-3 mt-6 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 '><div className='flex flex-col flex-center'><FaUserCircle className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>About</span></div></li>
                </HashLink>
                <HashLink to='/#skills'>
                <li onClick={handleNav} className='w-[100%] hover:shadow-custom ml-[3px] py-3 mt-6 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaGraduationCap className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Skills</span></div></li>
                </HashLink>
                <HashLink to='/#projects'>
                <li onClick={handleNav} className='w-[100%] hover:shadow-custom ml-[2px] py-3 mt-6 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaEye className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Projects</span></div></li>
                </HashLink>
                <HashLink to='/#contact'>
                <li onClick={handleNav} className='w-[100%] hover:shadow-custom ml-[3px] py-3 mt-6 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><GrMail className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Contact</span></div></li>
                </HashLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
