import React from 'react'
import Navbar from './components/Phishing/Navbar'
import Footer from './components/Landing/Footer'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <div>
        <Navbar/>
        <main className='flex-1 p-4'>
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default layout