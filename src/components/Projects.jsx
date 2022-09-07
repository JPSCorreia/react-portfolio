import React from 'react'
import ProjectItem from './ProjectItem'
import tldreddit from '../assets/projects/tldreddit.png'
import emporium from '../assets/projects/emporium.png'

const Projects = () => {
  return (
    <div id='projects' className='w-[90%] m-auto h-screen pt-16 mt-32'>
      <div className='max-w-[1240px] flex flex-col justify-center h-full mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#67E8F9]' data-aos='fade-right' data-aos-anchor='#projects'>Projects</p>
        <h2 className='py-4' data-aos='fade-right' data-aos-anchor='#projects'>What I have Built</h2>
        <div className='grid md:grid-cols-2 gap-8' data-aos='fade-in' data-aos-anchor='#projects'>
          
          <ProjectItem 
            title='Emporium' 
            projectType='Full Stack Project' 
            backgroundImg={emporium} 
            projectUrl='emporium' 
          />

          <ProjectItem 
            title='TLDReddit' 
            projectType='React Project' 
            backgroundImg={tldreddit} 
            projectUrl='tldreddit' 
          />
          
        </div>
      </div>
      <div id='contact-top'></div>
    </div>
  )
}

export default Projects