import React, { useEffect, useState } from 'react'
import {motion, useScroll} from 'motion/react';

const Header = () => {
  const[menuOpen, setMenuOpen] = useState(false)
  const {scrollYProgress} = useScroll();

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if(menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])
  
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
            <div className='text-white lg:hidden text-3xl cursor-pointer' onClick={handleMenu}>
                ☰
            </div>

            <div className= {`fixed top-0 right-0 h-screen w-50 bg-[#0a0a0a] text-white rounded-sm shadow-lg p-6 z-[99] transform transition-transform duration-300 ease-in-out
                ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}> 

                <div className='flex justify-end' >
                  <button className='text-3xl' onClick={handleMenu}>✕</button>
                </div>

                <ul className="flex flex-col gap-6 text-xl mt-8 font-mono">
                  <li><a href="#about" onClick={handleMenu}>about</a></li>
                 <li><a href="#projects" onClick={handleMenu}>projects</a></li>
                 <li><a href="#skills" onClick={handleMenu}>skills</a></li>
                <li><a href="#experience" onClick={handleMenu}>exp</a></li>
                <li><a href="#contact" onClick={handleMenu}>contact</a></li>
                </ul>
            </div>
        </div>
    <hr className='border-white'/>
    </>
  )
}

export default Header
