import React from 'react';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyan-500" />
            <span className="text-xl font-bold gradient-text">CyberSecure</span>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex space-x-8">
            <a href="/home" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Home
            </a>
            <a href="/features" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-cyan-600 transition-colors">
              About
            </a>
             <a href="/fakenews" className="text-gray-700 hover:text-cyan-600 transition-colors">
              FakeNewsDetector
            </a>
             <a href="/phishing" className="text-gray-700 hover:text-cyan-600 transition-colors">
              PhishingDetector
            </a>
             <a href="/cyberbullying" className="text-gray-700 hover:text-cyan-600 transition-colors">
              CyberBullying
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
