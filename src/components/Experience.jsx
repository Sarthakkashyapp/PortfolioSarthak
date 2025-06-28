import React from 'react'

function Experience() {
  return (
    <>
    <hr id='experience' className='border-white border-1 mt-22'/>
    <div className='flex flex-col items-center justify-center text-white text-center xl:mt-20 mt-16 font-[inter]'>
      <div className='flex flex-col gap-2 mx-4'>
        <p className='xl:text-5xl text-4xl font-semibold'><i className='text-cyan-800'>Journey</i> So Far</p>
        <i className='xl:text-2xl text-lg'>Snapshots of where I’ve learned, grown, and contributed.</i>
      </div>

      <div className='w-full flex flex-col items-center justify-center mt-16 mx-6 gap-6 md:px-6 px-1.5'>
        <div className='flex flex-row items-center justify-between border-2 border-white rounded-xl w-full max-w-5xl px-3 lg:px-12 py-6 hover:bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0) transition-transform duration-200 shadow-gray-500 hover:shadow-lg'>
            <p className='text-sm xl:text-xl'>Sept 2024 - Nov 2024</p>
            <div className='flex flex-col gap-2 items-end'>
              <p className='xl:text-2xl text-xl'>iDesign.market</p>
              <p className='text-gray-500'>Frontend Intern</p>
            </div>
        </div>
        <div className='flex flex-row items-center justify-between border-2 border-white rounded-xl w-full max-w-5xl px-3 lg:px-12 py-6 hover:bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0) transition-transform duration-200 shadow-gray-500 hover:shadow-lg'>
            <p className='text-sm xl:text-xl'>Oct 2024 - Nov 2024</p>
            <div className='flex flex-col gap-2 items-end'>
              <p className='xl:text-2xl text-xl'>Hacktoberfest</p>
              <p className='text-gray-500'>Contributor</p>
            </div>
        </div>
        <div className='flex flex-row items-center justify-between border-2 border-white rounded-xl w-full max-w-5xl px-3 lg:px-12 py-6 hover:bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0) transition-transform duration-200 shadow-gray-500 hover:shadow-lg'>
            <p className='text-sm xl:text-xl text-wrap'>Oct 2024 - Nov 2024</p>
            <div className='flex flex-col gap-2 items-end'>
              <p className='xl:text-2xl text-xl'>GSSOC Extd</p>
              <p className='text-gray-500'>Contributor</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Experience
