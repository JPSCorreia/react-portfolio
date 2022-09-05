import React from 'react'


const ProjectItem = (props) => {
  return (
    <div className='relative flex items-center justify-center cursor-pointer h-auto w-full shadow-xl shadow-[#67E8F9] rounded-xl p-4 group hover:bg-gradient-to-r from-[#0891B2] to-[#67E8F9] '>
    {/* <Link href={`/${props.projectUrl}#${props.projectUrl}`} scroll={false}> */}
    <>
    <img className='rounded-xl group-hover:opacity-40 ' src={props.backgroundImg} alt='/' />
    </>
    {/* </Link> */}
    {/* <Link href={props.projectUrl}> */}
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
    {/* </Link> */}
  </div>
  )
}

export default ProjectItem