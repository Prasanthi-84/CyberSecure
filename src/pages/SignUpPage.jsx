import React from 'react'
import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return (
    <div className='h-screen flex items-center
    justify-center bg-black'>
        <SignUp path="/signup" routing="path"/>
    </div>
  )
}

export default SignUpPage