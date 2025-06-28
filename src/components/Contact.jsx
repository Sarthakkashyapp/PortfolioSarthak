import React from 'react'

function Contact() {
  return (
    <>
    <hr id='contact' className='border-white border-1 mt-22'/>
    <div  className='flex flex-col items-center justify-center text-white text-center xl:mt-20 mt-16 font-[inter]'>
      <div className='flex flex-col gap-2 mx-4 xl:mb-6 mb-2'>
        <p className='xl:text-5xl text-4xl font-semibold'><i className='text-cyan-800'>Contact</i> Me</p>
        <i className='xl:text-2xl text-lg'>Available for freelance, internships, full-time, and coffee chats</i>
      </div>

      <div className='flex xl:flex-row flex-col justify-evenly my-12 xl:mx-42 mx-12 gap-8 xl:gap-0'>

        <div className='xl:w-1/2 w-full xl:text-start text-center xl:px-10 md:px-16 '>
          <p className='text-xl'>
              I'am always excited to connect with curious minds and creative teams who are building something meaningful.  
          <br /><br />
              Whether you have an exciting project in mind, want to collaborate, or just want to say hello — feel free to reach out!  
          <br /><br />
              I'm currently open to freelance projects, internships, full-time roles, or even a casual coffee chat about tech, startups, or anything creative.  
          <br /><br />
              Drop me a message using the form or connect with me on social media — I’ll get back to you as soon as possible. Looking forward to hearing from you!
          </p>
        </div>  

        <div className="w-full xl:w-1/4 flex justify-center mt-4 xl:mt-0">
          <div className=' w-fit  border-2 border-white rounded-xl'>
            <form 
              action="">
                <div className='flex flex-col gap-4 p-8 text-start'>
                  <label>Name</label>
                  <input 
                    className='bg-white/10 border-2 border-white rounded-sm h-8'
                    type="text" 
                  />
                  <label>Email</label>
                  <input 
                    className='bg-white/10 border-2 border-white rounded-sm h-8'
                    type="text" 
                  />
                  <label>Message</label>
                  <textarea 
                    className='bg-white/10 border-2 border-white rounded-sm h-12'
                    type="textarea" 
                    rows="4"
                  >  
                  </textarea>
                  <button className='bg-blue-600 w-20 h-10 rounded-sm mt-4 hover:cursor-pointer'>
                    Send
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hr className='border-white border-1 mt-14'/>
    </>
  )
}

export default Contact
