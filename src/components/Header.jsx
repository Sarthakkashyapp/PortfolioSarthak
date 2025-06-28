import React from 'react'
import {motion, useScroll} from 'motion/react';

const Header = () => {

  const {scrollYProgress} = useScroll();
  
  return (
    <>
    <motion.div
      className='bg-blue-800 h-1.5 xl:h-2.5 w-full origin-left fixed top-0 left-0' 
       style={{
         scaleX: scrollYProgress
       }}
    >
    </motion.div>
    <hr className='border-white border-6 '/>
        <div className='flex justify-evenly mx-auto items-center w-full h-28'>
            <div className='text-blue-800 inline-block bg-clip-text text-[34px] xl:text-5xl font-semibold xl:px-24 font-["Architects_Daughter"]'>Sarthak Kashyap</div>
            <div className=' text-white lg:flex justify-evenly gap-12 text-2xl hidden' style={{fontFamily: 'monospace'}}>
                <a href="#about" className='hover:underline'>about</a>
                <a href="#projects" className='hover:underline'>projects</a>
                <a href="#skills" className='hover:underline'>skills</a>
                <a href="#experience" className='hover:underline'>Exp</a>
                <a href="#contact" className='hover:underline'>contact</a>
            </div>
            <div className='text-white lg:hidden text-3xl cursor-pointer'>
                ☰
            </div>
        </div>
    <hr className='border-white'/>
    </>
  )
}

export default Header
