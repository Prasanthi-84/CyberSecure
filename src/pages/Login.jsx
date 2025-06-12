import React from 'react'
import {SignIn} from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className='h-screen flex items-center justify-center
    bg-black'>
        <SignIn path='/login' routing="path"/>
    </div>
  )
}

export default Login