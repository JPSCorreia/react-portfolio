import React from 'react'
import {SiCss3, SiExpress, SiHtml5, SiRedux, SiJavascript, SiNodedotjs, SiReact, SiGithub, SiPostgresql} from 'react-icons/si'

const Skills = () => {

  return (
    <div id='skills' className='w-[90%] m-auto h-screen p-2  pb-0 pt-30 md:pt-38 mt-32'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#67E8F9]' data-aos='fade-right' data-aos-anchor='#skills'>Skills</p>
        <h2 className='py-4' data-aos='fade-right' data-aos-anchor='#skills'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-3 md:gap-12 gap-6' data-aos='fade-in' data-aos-anchor='#skills'>
          <div className='p-2 py-3 sm:p-4 shadow-lg shadow-[#67E8F9] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiHtml5 color='#dd4b25' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-lg shadow-[#67E8F9] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiCss3 background-color='red' color='#2762e9' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-lg shadow-[#67E8F9] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiJavascript color='#efd81f' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>Javascript</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-lg shadow-[#67E8F9] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
              <SiNodedotjs color='#43853d' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>Node.js</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-lg shadow-[#67E8F9] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
              <SiExpress color='#ffffff' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>Express.js</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-lg shadow-[#67E8F9] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiReact color='#61dafb' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>React</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-lg shadow-[#67E8F9] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiRedux color='#764abc'size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>Redux</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-lg shadow-[#67E8F9] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiPostgresql color='#31648d'size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className='p-2 py-3 sm:p-4 shadow-lg shadow-[#67E8F9] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiGithub color='#ffffff' size={32} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-xs sm:text-lg mr-2 sm:mr-0'>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

