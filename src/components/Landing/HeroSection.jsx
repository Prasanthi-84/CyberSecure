import React from 'react'
import { Zap,Lock,ArrowRight,Play } from 'lucide-react'
import StatsGrid from '../../data/StatsGrid'
import {stats} from '../../data/stats'
const HeroSection = () => {
  return (
    <section  className='relative min-h-screen flex items-center justify-center overflow-hidden'>
    {/* Background Pulses */}

        <div className='absolute inset-0'>
           <div className='absolute top-1/4 left-1/4 w-96
           bg-cyan-500/20 rounded-full blur-3xl animate-slow'></div> 
        
         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

{/* hero conetnt */}
<div className='relative z-10 max-w-7xl mx-auto px-4 text-center'>
  <div  className='mb-8'>
    <div className='inline-flex items-center px-6 py-3
    rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500
   border  border-cyan-500/30 backdrop:blur-sm mb-8'>
        <Zap className='h-5 w-5 mr-2 text-cyan-400'/>
        <span className='text-cyan-100 font-medium'>AI-Powered CyberSecurity</span>
    </div>
    <h1 className='text-5xl md:text-7xl font-black mb-6 leading-tight'>
         Secure Your<br /><span className="gradient-text">Digital Life</span><br />In Seconds
      </h1>

    <p className='text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto'>
      Learn cybersecurity fundamentals with our interactive
       AI-powered platform designed for beginners. Start your
        digital safety journey today.
      
    </p>
    <div className='flex flex-col sm:flex-row gap-6 justify-center
    items-center mb-16'>
        <button className='"group bg-gradient-to-r from-cyan-500 to-blue-600 text-white
         px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 
        transition-all duration-300 flex items-center'>
            <Lock className='mr-3 h-6 w-6'/>
            Secure My Digital Life Now
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
        </button>

        <a 
          href="https://youtu.be/asTti6y39xI?si=WS1ptG_098Za1CBO" 
          target="_blank" 
         rel="noopener noreferrer"
>
        <button className='group flex items-center text-gray-300
        px-8 py-5 rounded-2xl font-semibold text-lg hover:bg-white/10 
        transition-all duration-300 border border-white/20'>
            <Play className="mr-3 h-6 w-6" />Watch Demo (2 min) 
        </button>
      </a>    
    </div>
    
</div>

  </div>
    </section>
  )
}

export default HeroSection