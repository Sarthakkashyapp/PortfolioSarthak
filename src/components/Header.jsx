import React, { useEffect, useState } from 'react'
import {motion, useScroll} from 'framer-motion';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { GoProjectSymlink } from "react-icons/go";
import { GrUserExpert } from "react-icons/gr";
import { IoMan } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { SiHyperskill } from "react-icons/si";

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

            <div className= {`fixed top-0 right-0 h-screen w-full bg-[#0a0a0a] text-white shadow-lg p-6 z-[99] transform transition-transform duration-300 ease-in-out
                ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}> 

                <div className='flex justify-end' >
                  <button className='w-10 h-10 text-xl border-1 rounded-full border-white bg-white/10' onClick={handleMenu}>✕</button>
                </div>

                <ul className="flex flex-col items-center gap-6 text-2xl mt-8 font-mono">
                  <li>
                    <a href="#about" className='flex flex-row gap-2' onClick={handleMenu}>
                      <IoMan className='mt-1.5 w-5 h-5 flex items-center justify-center'/>
                      <p>about</p>
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className='flex flex-row gap-2' onClick={handleMenu}>
                      <GoProjectSymlink className='mt-2 w-5 h-5 flex items-center justify-center'/>
                      <p>projects</p>
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className='flex flex-row gap-2' onClick={handleMenu}>
                      <SiHyperskill  className='mt-1.5 w-5 h-5 flex items-center justify-center'/>
                      <p>skills</p>
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className='flex flex-row gap-2' onClick={handleMenu}>
                      <GrUserExpert className='mt-1.5 w-5 h-5 flex items-center justify-center'/>
                      <p>experience</p>
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className='flex flex-row gap-2' onClick={handleMenu}>
                      <GrContact className='mt-2 w-5 h-5 flex items-center justify-center'/>
                      <p>contact</p>
                    </a>
                  </li>
                </ul>


                <ul className='flex flex-row justify-center items-center gap-4 m-12'>
                  <li>
                    <a href="https://www.linkedin.com/in/sarthak-kashyapp/">
                      <button className='w-10 h-10 border-2 border-blue-800 rounded-full bg-white/10 flex items-center justify-center'>
                        <FaLinkedinIn className='text-white lg:hidden text-xl cursor-pointer'/>
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Sarthakkashyapp">
                      <button  className='w-10 h-10 border-2 border-blue-800 rounded-full bg-white/10 flex items-center justify-center'>
                        <FiGithub className='text-white lg:hidden text-xl cursor-pointer'/>
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/sarthak_kash">
                      <button className='w-10 h-10 border-2 border-blue-800 rounded-full bg-white/10 flex items-center justify-center'>
                        <FaXTwitter className='text-white lg:hidden text-xl cursor-pointer'/>
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="https://Sarthakkashyap2621@gmail.com">
                      <button className='w-10 h-10 border-2 border-blue-800 rounded-full bg-white/10 flex items-center justify-center'>
                        <MdOutlineEmail  className='text-white lg:hidden text-xl cursor-pointer'/>
                      </button>
                    </a>
                  </li>
                </ul>
            </div>
        </div>
    <hr className='border-white'/>
    </>
  )
}

export default Header
