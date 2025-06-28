import React from 'react'
import { projectData } from '../data/Projects.js';
import { IoLogoGithub } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

const Projects= () => {
  return (
    <>
    <hr id='projects' className='border-white border-1 mt-10'/>
    <div className='flex flex-col items-center justify-center text-white text-center xl:mt-20 mt-16 font-[inter]'>

      <div className='flex flex-col gap-2 mx-4'>
        <p className='xl:text-5xl text-4xl font-semibold'>Crafted with <i className='text-cyan-800'>Passion</i>, Built with <i className='text-cyan-800'>Purpose</i></p>
        <i className='xl:text-2xl text-lg'>A display of projects shaped by learning, curiosity, and passion</i>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white xl:mt-20 mt-16 mx-6">
        {projectData.map((project, index) => (
        <div key={project.id} className=" p-6 rounded-2xl border-2 border-white space-y-4">
         <div className='rounded-lg overflow-hidden hover:scale-105 transition-transform duration-400'>
          <img src={project.image} alt=""  />
         </div> 
          <h3 className="text-lg font-semibold uppercase pt-4 text-start">{project.title}</h3>
          <hr className='border-white border-1'/>
          <p className="text-sm xl:text-base text-start text-gray-400">
            {project.desc}
          </p>
          <div className='flex flex-row items-center justify-center gap-6 mt-10'>
            <a href={project.github}>
                <FiGithub  className='w-12 h-12 hover:scale-105 transition-transform duration-200'/>
            </a>
            <a href={project.livelink}>
              <TbExternalLink className='w-12 h-14 hover:scale-110 transition-transform duration-200'/>
            </a>
          </div>
        </div>
         ))}
      </div>
      
    </div>
    </>
  )
}

export default Projects
