import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Technologies() {
  const techs = [
    "Javascript", "React", "Next.js", "Node.js", "Express",
    "MongoDB", "PostgreSQL", "TailwindCSS", "Git", "Github",
    "Docker", "REST API's", "Prisma"
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <hr id='skills' className='border-white border-1 mt-22' />
      <div className='flex flex-col items-center justify-center text-white text-center xl-mt-20 mt-16 font-[inter]'>

        <div className='flex flex-col gap-2 mx-4'>
          <p className='xl:text-5xl text-4xl font-semibold'>
            My Tech <i className='text-cyan-800'>Arsenal</i>
          </p>
          <i className='xl:text-2xl text-lg'>A quick look at the stack behind my work.</i>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16 mx-6'>
          {techs.map((tech, index) => {
            const isSelected = selectedIndex === index;

            return (
              <motion.div
                key={index}
                onClick={() =>
                  setSelectedIndex(prev => (prev === index ? null : index))
                }
                whileHover={{ scale: 1.05 }}
                animate={{ scale: isSelected ? 1.05 : 1 }}
                transition={{ duration: 0.01, ease: 'easeInOut' }}
                className={`
                  xl:px-20 px-10 py-5 rounded-xl border-white border-2 text-center text-white cursor-pointer 
                  transition-all duration-200 
                  ${isSelected
                    ? 'bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800'
                    : 'bg-white/10 hover:bg-gradient-to-r hover:from-cyan-800 hover:via-blue-400 hover:to-cyan-800'}
                `}
              >
                {tech}
              </motion.div>
            );
          })}
        </div>

      </div>
    </>
  );
}

export default Technologies;
