import React from 'react'
import {stats} from './stats';

const StatsGrid = () => (
  
    <div className='grid grid-cols-2 md:grid-cols-4 gap-8
    max-w-4xl mx-auto'>

    {stats.map((stats,index)=>(
        <div key={index}className='text-center'>
            <div className='text-3xl md:text-4xl font-bold
            text-cyan-400 mb-2'>
                {stats.number}
            </div>
            <div className='text-white/80 text-lg'>
                {stats.label}
            </div>
            </div>
    ))}
    </div>
  
);

export default StatsGrid