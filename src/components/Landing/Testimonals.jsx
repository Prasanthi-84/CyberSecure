import React, { useEffect, useState } from 'react'
import {Star} from 'lucide-react'
const Testimonals = ({testimonals =[]}) => {

    const [currentSlide,setCurrentSlide]=useState(0)

   useEffect(()=>{
    if(testimonals.length === 0) return;
    const timer=setInterval(()=>{
        setCurrentSlide((prev)=>(prev+1)%testimonals.length)
    },4000)
    return ()=>clearInterval(timer);
   },[testimonals.length])

  return (
    <section  id="testimonials" className="py-24 bg-gradient-to-r from-gray-900 to-black">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              <span 
                className="text-white">
                    Trusted by
                </span> 
                <span className="gradient-text">
                Early Adopters</span> 
            </h2>
            <p className="text-xl text-gray-300">
            Feedback from our beta community and security 
            enthusiasts</p>
        </div>



        <div className='relative max-w-4xl mx-auto'>
         <div className='bg-white/5 backdrop-blur-xl
         rounded-3xl border border-white/10 p-12 text-center'>
            < div className='flex justify-center mb-6'>
                {[...Array(testimonals[currentSlide].rating)]
                .map((_,i)=>(
                    <Star key={i}
                    className="h-6 w-6 text-yellow-400 fill-current"/>
                ))}
           </div>

            <blockquote 
            className='text-2xl text-white mb-8 leading-relaxed '>
                "{testimonals[currentSlide].content}"
            </blockquote>

            <div>
                <div className='font-bold text-lg text-cyan-400'>
                    {testimonals[currentSlide].name}</div>
                <div className='text-gray-400'>
                    {testimonals[currentSlide].role}</div>
            </div>
            </div>

            <div>
                {testimonals.map((_,index)=>{
                    <button
                    key={index}
                    onClick={()=>setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all
                        duration-300
                         ${index === currentSlide ?
                            'bg-cyan-400':'bg-white/30'

                        }`}
                        />
                })}
            </div>
         </div>
        </div>
        
    </section>
  )
}

export default Testimonals