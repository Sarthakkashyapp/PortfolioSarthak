import React, { useState } from 'react'
import { experienceData } from '../data/experience'
import { motion } from 'framer-motion';

function Experience() {
  
  const[selectedIndex, setselectedIndex] = useState(null);

  const handleIndex = (id) => {
    setselectedIndex(prev => (prev === id ? null : id))
  }

  return (
    <>
    <hr id='experience' className='border-white border-1 mt-22'/>
    <div className='flex flex-col items-center justify-center text-white text-center xl:mt-20 mt-16 font-[inter]'>
      <div className='flex flex-col gap-2 mx-4'>
        <p className='xl:text-5xl text-4xl font-semibold'><i className='text-cyan-800'>Journey</i> So Far</p>
        <i className='xl:text-2xl text-lg'>Snapshots of where I’ve learned, grown, and contributed.</i>
      </div>

      <motion.div className='w-full flex flex-col items-center justify-center mt-16 mx-6 gap-6 md:px-6 px-1.5'>
        {experienceData.map((experience) => (
          <div key={experience.id} className={`flex flex-row items-center justify-between border-2 border-white rounded-xl w-full max-w-5xl px-3 lg:px-12 py-6 
           ${selectedIndex === experience.id ? 'bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0) transition-transform duration-200 shadow-gray-500 shadow-lg': 
           'hover:bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0) transition-transform duration-200 shadow-gray-500 hover:shadow-lg'}`} 
            onClick={() => handleIndex(experience.id)}>
            <p className='text-sm xl:text-xl'>{experience.date}</p>
            <div className='flex flex-col gap-2 items-end'>
              <p className='xl:text-2xl text-xl'>{experience.name}</p>
              <p className='text-gray-500'>{experience.role}</p>
            </div>
        </div>
        ))}
      </motion.div>
    </div>
    </>
  )
}

export default Experience
