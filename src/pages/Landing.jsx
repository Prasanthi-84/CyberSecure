import React, { useEffect, useState } from 'react'

//styles
import '../styles/animation.css';

import Navbar from '../components/Landing/Navbar';
import HeroSection from '../components/Landing/HeroSection';
import ToolsSection from '../components/Landing/ToolsSection';
import Testimonals from '../components/Landing/Testimonals';
//data
import {stats} from '../data/stats'
import { testimonials } from '../data/testimonials';
import Footer from '../components/Landing/Footer';


import { useUser,useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const {user}=useUser();
    const {signOut}=useClerk();
    const navigate=useNavigate();
    
const [isVisible,setIsVisible]=useState({})


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
    


      <Navbar >
        {user ?(
          <button onClick={()=> signOut(()=>navigate('/login'))}
          >
          
              Logout
          </button>
        ):
        (
          <button onClick={()=>navigate('/signup')}
          >
            Sign Up
          </button>
        )
      }
      </Navbar>
      <HeroSection stats={stats} />
      <ToolsSection isVisible={true}/>
      <Testimonals testimonals={testimonials}/>
      <Footer/>

      </div>
    
  )
}

export default Landing