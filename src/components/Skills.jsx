import React from 'react'
import {SiCss3, SiExpress, SiHtml5, SiRedux, SiJavascript, SiNodedotjs, SiReact, SiGithub, SiPostgresql} from 'react-icons/si'
import RotatingGlobe from './RotatingGlobe.jsx'

const Skills = () => {

  return (
    // <div id='skills' className='w-[90%] m-auto h-screen p-2  pb-0 pt-30 md:pt-38 mt-32'>
    //   <div className='max-w-[1240px] mx-auto flex  flex-col justify-center h-full'>
    //     <p className='text-xl tracking-widest uppercase text-[#67E8F9]' data-aos='fade-right' data-aos-anchor='#skills'>Skills</p>
    //     <h2 className='py-2 mb-6' data-aos='fade-right' data-aos-anchor='#skills'>What I Can Do</h2>
    //     <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center main-with-globe'>
    //       <div className='rotating-globe justify-center items-center m-auto h-screen flex ' >
    //         <RotatingGlobe />
    //       </div>
    //     </div>
      <div id='skills' className='w-[90%] m-auto md:h-screen p-2'>
        <div className='max-w-[1240px] flex flex-col mx-auto px-2 pt-20'>
        <p className='text-xl tracking-widest uppercase text-[#67E8F9]' data-aos='fade-right' data-aos-anchor='#skills'>Skills</p>
        <h2 className='pt-2' data-aos='fade-right' data-aos-anchor='#skills'>What I Can Do</h2>
        </div>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col items-center main-with-globe'>
          <div className='rotating-globe' >
            <RotatingGlobe  />
          </div>
          <div className='flex flex-row md:flex-col' >
          <div className='flex flex-col mr-1'>
            
            <div className='py-2 text-start text-gray-200 flex flex-col md:flex-row mx-auto'>
              <span className='flex items-center mr-3 leading-loose tracking-widest text-md md:text-2xl mb-1'>
              <SiHtml5 className='mr-2' color='#dd4b25' size={32} />
                HTML5
                <span className='hidden md:inline ml-3 '>-</span>
              </span>
              <span className='flex items-center mr-3 leading-loose tracking-widest text-md md:text-2xl mb-1'>
              <SiCss3 className='mr-2' color='#2762e9' size={32} />
                CSS3
                <span className='hidden md:inline ml-3 '>-</span>
              </span>
              <span className='flex items-center justify-start mr-3 leading-loose tracking-widest text-md md:text-2xl mb-1'>
              <SiJavascript className='mr-2' color='#efd81f' size={32} />
                Javascript
                <span className='hidden md:inline ml-3 '>-</span>
              </span>
              <span className='flex items-center justify-start mr-3 leading-loose tracking-widest text-md md:text-2xl mb-1'>
              <SiNodedotjs className='mr-2' color='#43853d' size={32} />
                Node.js 
              </span>
            </div>
          </div>
          <div className='flex flex-col ml-1'>
            
            <div className='py-2 text-start text-gray-200 flex flex-col md:flex-row mx-auto'>
              <span className='flex items-center mr-3 leading-loose tracking-widest text-lg md:text-2xl'>
                <SiReact  className='mr-2' color='#61dafb' size={32} />
                React.js 
                <span className='hidden md:inline ml-3 '>-</span>
              </span>
              <span className='flex items-center mr-3 leading-loose tracking-widest text-lg md:text-2xl'>
              <SiRedux className='mr-2' color='#764abc'size={32} />
                Redux
                <span className='hidden md:inline ml-3 '>-</span>
              </span>
              <span className='flex items-center mr-3 leading-loose tracking-widest text-lg md:text-2xl'>
                <SiExpress className='mr-2' color='#ffffff' size={32} />
                Express.js 
                <span className='hidden md:inline ml-3 '>-</span>
              </span>
              <span className='flex items-center justify-start mr-3 leading-loose tracking-widest text-lg md:text-2xl'>
                <SiPostgresql  className='mr-2' color='#31648d' size={32} />
                PostgreSQL 
              </span>
            </div>
          </div>
          </div>
        {/* <div className='grid grid-cols-2 lg:grid-cols-3 md:gap-12 gap-6 mt-4' data-aos='fade-in' data-aos-anchor='#skills'>
          <div className='p-2 py-3 sm:p-4 shadow-custom2 shadow-[#67E8F9] hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiHtml5 color='#dd4b25' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-custom2 shadow-[#67E8F9]  hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiCss3 background-color='red' color='#2762e9' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-custom2 shadow-[#67E8F9] hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiJavascript color='#efd81f' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>Javascript</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-custom2 shadow-[#67E8F9] hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
              <SiNodedotjs color='#43853d' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>Node.js</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-custom2 shadow-[#67E8F9] hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
              <SiExpress color='#ffffff' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>Express.js</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-custom2 shadow-[#67E8F9] hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiReact color='#61dafb' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>React</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-custom2 shadow-[#67E8F9] hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiRedux color='#764abc'size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>Redux</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-custom2 shadow-[#67E8F9] hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiPostgresql color='#31648d'size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-custom2 shadow-[#67E8F9] hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiGithub color='#ffffff' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>Github</h3>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Skills

