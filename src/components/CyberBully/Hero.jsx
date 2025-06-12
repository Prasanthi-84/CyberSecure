import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gradient-to-br from-blue-50
    to-indigo-100 py-20 px-4'>
      <div className='max-w-6xl mx-auto text-center'> 
        <h1 className='text-5xl md:text-6xl font-bold text-gray-800 mb-6
        '>End Cyberbullying
           <span>Now</span></h1>
          <p className='text-xl md:text-2xl text-gray-600
          mb-8 max-w-3xl mx-auto'>
         Together, we can create a safer digital world where
          everyone feels respected and protected online.
        </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-indigo-600 hover:bg-indigo-700
            text-white px-8 py-4 rounded-lg font-semibold
            transition-colors '>
              Report an Incident
            </button>
            <button className='border-2 border-indigo-600
            text-indigo-600 hover:bg-indigo-600 hover:text-white
            px-8 py-4 rounded-lg font-semibold transition-colors'>
                    Get Support Now
            </button>
          </div>
      </div>
    </section>
  )
}

export default Hero