import React from 'react'


const ProjectItem = (props) => {
  return (
    <div className='relative flex items-center justify-center cursor-pointer h-auto w-full shadow-custom3 shadow-[#67E8F9]  p-4 group hover:bg-gradient-to-r from-[#0891B2] to-[#67E8F9] '>
    <>
    <img className=' group-hover:opacity-20 ' src={props.backgroundImg} alt='/' />
    </>
    <div className='absolute'>
      <h3 className='absolute translate-x-[-50%] translate-y-[-250%] left-[50%] top-[50%] hidden group-hover:block text-2xl md:text-2xl lg:text-4xl text-white tracking-wider text-center'>
       {props.title}
      </h3>
      <p className='absolute translate-x-[-50%] translate-y-[-150%] hidden group-hover:block  text-white text-md md:text-lg lg:text-xl font-bold text-center w-[15rem] '>
        {props.projectType}
      </p>
      <p className='absolute translate-x-[-50%] translate-y-[0%] mt-5 hidden group-hover:block p-3 text-center rounded-lg bg-white text-[#121212] font-bold text-md md:text-md lg:text-lg cursor-pointer w-[10rem] '>
        More Info
      </p>
    </div>
  </div>
  )
}

export default ProjectItem