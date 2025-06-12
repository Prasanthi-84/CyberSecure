import React from 'react'
import { Shield,AlertTriangle,Users } from 'lucide-react';

// Definition Component
const Definition = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What is Cyberbullying?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Cyberbullying is the use of digital communication tools to intimidate, threaten, or harm others. 
            It can happen through social media, messaging apps, gaming platforms, or any online space.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-red-50 border border-red-100">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Harmful Effects</h3>
            <p className="text-gray-600">Can cause anxiety, depression, and long-lasting emotional trauma</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-orange-50 border border-orange-100">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Widespread Impact</h3>
            <p className="text-gray-600">Affects millions of people, especially young adults and teenagers</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-green-50 border border-green-100">
            <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Preventable</h3>
            <p className="text-gray-600">Together we can create awareness and build safer online communities</p>
          </div>
        </div>
      </div>
    </section>
  );
};
  

export default Definition