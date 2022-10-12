import React from 'react'

const ProjectImage = (props) => {
  return (
    <>
        <img
          className="absolute left-0 h-[20vh] lg:h-[30vh] w-[100%] z-10 object-cover opacity-50"
          src={props.backgroundImageURL}
          alt="/"
          // data-aos="fade-in"
          // data-aos-anchor={props.AOSAnchor}
          data-aos-duration="400"
        />  
    </>
  )
}

export default ProjectImage