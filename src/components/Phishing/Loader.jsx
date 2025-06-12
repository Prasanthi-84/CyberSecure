import React from 'react'

const Loader = ({text="Loading"}) => {
  return (
    <div className='flex items-center justify-center space-x-2'>
        <div className='animate-spin rounded-full h-5 w-5
        border-b-2 border-white'>
        </div>
              <span>{text}</span>
    </div>
  )
}

export default Loader