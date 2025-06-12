import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ToolCard = ({ icon: Icon, title, description, color, delay, isVisible,link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`tool-card relative h-80 perspective-1000 transition-all duration-500 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br ${color} p-8 border-2 border-white/20 backdrop-blur-sm`}>
          <div className="flex flex-col items-center text-center h-full justify-center">
            <div className="bg-white/20 backdrop-blur-md w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-white/90 leading-relaxed">{description}</p>
          </div>
        </div>
        
        {/* Back */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-white shadow-2xl p-8 border border-gray-200`}>
          <div className="flex flex-col h-full justify-center items-center text-center">
            <Icon className={`h-12 w-12 mb-4 ${color.includes('red') ? 'text-red-500' : color.includes('orange') ? 'text-orange-500' : 'text-green-500'}`} />
            <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Try?</h4>
            <p className="text-gray-600 mb-6">Experience advanced protection with our intuitive tools.</p>
            <Link
             to={link}
             className={`inline-block px-6 py-3
              rounded-xl text-white font-semibold 
              transition-all duration-300 hover:scale-105
               ${color.includes('red') ? 'bg-red-500 hover:bg-red-600' 
               : color.includes('orange') ? 
               'bg-orange-500 hover:bg-orange-600'
                : 'bg-green-500 hover:bg-green-600'}`} >
                 Try This Tool
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;