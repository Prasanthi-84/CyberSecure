import React from 'react'
import Hero from '../components/CyberBully/Hero'
import Definition from '../components/CyberBully/Definition'
import VideoSection from '../components/CyberBully/VideoSection'
import ShareYourStory from '../components/CyberBully/ShareStory'
import Chatbot from "../components/CyberBully/Chatbot"
import CallToAction from '../components/CyberBully/CallToAction'


const CyberBully = () => {
  return (
    <div>
        <Hero/>
        <Definition/>
        <VideoSection/>
        <ShareYourStory/>
        <Chatbot/>
        <CallToAction/>
        

    </div>
  )
}

export default CyberBully