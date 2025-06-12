import React from 'react'
import { Video } from 'lucide-react';
// Video Section Component
const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Learn & Recognize
          </h2>
          <p className="text-lg text-gray-600">
            Educational resources to help you identify and respond to cyberbullying
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
              <Video className="w-16 h-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How to Recognize Cyberbullying
              </h3>
              <p className="text-gray-600 mb-4">
                Learn the warning signs and different forms of online harassment and bullying behavior.
              </p>
              <a href='https://youtu.be/dkG00Czb4ho?si=AH9y7XOVth6VXXf2'>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors">
                Watch Video
              </button></a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
              <Video className="w-16 h-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How to Report & Get Help
              </h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guide on reporting incidents and accessing support resources.
              </p>
              <a href='https://youtu.be/rZkNRyweiGk?si=-HXUpPmo3BMhO3XH'>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors">
                Watch Video
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default VideoSection