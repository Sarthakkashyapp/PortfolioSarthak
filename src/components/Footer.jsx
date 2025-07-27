import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import resumeicon from "../assets/resumecv.png";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div className="flex flex-col xl:flex-row justify-between items-center h-auto xl:h-28 px-6 xl:px-26 py-6 font-[inter] space-y-6 xl:space-y-0">
      <div className='text-white text-xl'>
        <p>Made by <strong><i className='text-blue-800 xl:text-2xl'>Sarthak kashyap ⚡</i></strong></p>
      </div>
      <div className='text-white text-lg flex xl:gap-10 gap-6'>
        <a href="https://www.linkedin.com/in/sarthak-kashyapp/" className='hover:underline'>
          <p className='lg:block hidden'>LinkedIn</p>
          <FaLinkedinIn className='text-white lg:hidden text-3xl cursor-pointer'/>
        </a>
        <a href="https://drive.google.com/file/d/1B96tjWaXwX-TfF5Tqn6S5dGTNbaktioZ/view?usp=sharing" className='hover:underline'>
          <p className='lg:block hidden'>Resume</p>
          <img src={resumeicon} alt="icon" className='invert brightness-0 lg:hidden text-3xl cursor-pointer h-7.5 w-8 hover:scale-105'/>
        </a>
        <a href="https://Sarthakkashyap2621@gmail.com" className='hover:underline'>
          <p className='lg:block hidden'>Email</p>
          <MdOutlineEmail  className='text-white lg:hidden text-3xl cursor-pointer hover:scale-105'/>
        </a>
        <a href="https://github.com/Sarthakkashyapp" className='hover:underline'>
          <p className='lg:block hidden'>Github</p>
          <FiGithub className='text-white lg:hidden text-3xl cursor-pointer hover:scale-105'/>
        </a>
        <a href="https://x.com/sarthak_kash" className='hover:underline'>
          <p className='lg:block hidden'>X</p>
          <FaXTwitter className='text-white lg:hidden text-3xl cursor-pointer hover:scale-105'/>
        </a>
      </div>
    </div>
    <hr className='border-white border-6'/>
    </>
  )
}

export default Footer
