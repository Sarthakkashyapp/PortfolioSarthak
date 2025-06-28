import React from 'react'
import {motion} from 'framer-motion'

function Technologies() {
  return (
    <>
    <hr id='skills' className='border-white border-1 mt-22'/>
    <div className='flex flex-col items-center justify-center text-white text-center xl-mt-20 mt-16 font-[inter]'>

      <div className='flex flex-col gap-2 mx-4'>
        <p className='xl:text-5xl text-4xl font-semibold'>My Tech <i className='text-cyan-800'>Arsenal</i></p>
        <i className='xl:text-2xl text-lg'>A quick look at the stack behind my work.</i>
      </div>

      <div 
       className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16 mx-6'>
        <div className='xl:px-20 py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            Javascript
        </div>
        <div className='xl:px-20 px-10 py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            React
        </div>
        <div className='xl:px-20  py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            Next.js
        </div>
        <div className='xl:px-20  py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            Node.js
        </div>
        <div className='xl:px-20  py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            Express
        </div>
        <div className='xl:px-20  py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            MongoDB
        </div>
        <div className='xl:px-20  py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            PostgreSQL
        </div>
        <div className='xl:px-20 py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            TailwindCSS
        </div>
        <div className='xl:px-20 px-10 py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            Git
        </div>
        <div className='xl:px-20 px-10 py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            Github
        </div>
        <div className='xl:px-20  py-5 rounded-xl border-white border-2 text-center bg-white/10 hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            Docker
        </div>
        <div className='xl:px-20 py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            REST API's
        </div>
        <div className='xl:px-20 py-5 rounded-xl border-white border-2 text-center bg-white/10  hover:scale-105 hover:bg-gradient-to-r from-cyan-800 via-blue-400 to-cyan-800 transition-transform duration-200'>
            Prisma
        </div>
      </div>
    </div>
    </>
  )
}

export default Technologies
