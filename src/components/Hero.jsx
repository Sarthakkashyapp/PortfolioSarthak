import React, { useState } from 'react';
import Sarthakimage from '../assets/SarthakGhibli.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <section id='about' className='flex flex-col xl:flex-row min-h-screen items-center justify-between mx-auto xl:px-42 md:px-24 px-4 py-10 xl:py-16 xl:gap-25 gap-10'>
      
      <div
        onClick={() => setIsTapped(prev => !prev)}
        className='w-full xl:w-1/2 flex justify-center xl:mt-4 mt-2 relative group md:px-0 px-4 cursor-pointer'
      >
        <motion.img 
          src={Sarthakimage} 
          alt="" 
          className={`duration-300 border-2 rounded-2xl md:h-full md:w-full h-[400px] object-cover
            ${isTapped
              ? 'border-blue-800 grayscale-0 '
              : 'border-white group-hover:border-blue-800 group-active:border-blue-800'}
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
        />

        <div className={`text-white absolute inset-0 bg-opacity-50 flex flex-col items-start justify-end transition-opacity duration-300
          ${isTapped
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100 group-active:opacity-100'}
          xl:pb-10 xl:pr-60 lg:pb-10 lg:pr-132 md:pb-8 md:pr-72 pb-6 pl-10 font-[inter]`}
        >
          <p className="xl:text-2xl md:text-2xl text-xl font-bold mr-4 md:mr-0">Sarthak Kashyap</p>
          <p className="xl:text-xl md:text-xl text-lg font-semibold">Full Stack Engineer</p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='w-full xl:w-1/2 text-white flex flex-col justify-start items-start gap-4 max-w-[600px] mx-auto xl:mx-0 lg:px-0 px-8 font-[Inter]'
      >
        <h2 className='xl:text-[32px] text-2xl font-medium'>
          Hi, I'm Sarthak Kashyap — a final year Computer Science Engineering undergraduate at Maharaja Surajmal Institute of Technology, New Delhi.
        </h2>
        <p className='xl:text-lg text-gray-400'>
          I'm a passionate developer with a strong foundation in Java and JavaScript, experienced in building full-stack apps using the MERN stack and Next.js. I'm also exploring DevOps to deepen my understanding of deployment and infrastructure, while staying curious about new technologies and open to collaboration.
        </p>
        <p className='xl:text-lg text-gray-400'>
          Welcome to my portfolio — feel free to explore my work, and if you're interested in collaborating or have freelance opportunities in mind, don't hesitate to reach out. Let's build something impactful together!
        </p>
      </motion.div>
      
    </section>
  );
};

export default Hero;
