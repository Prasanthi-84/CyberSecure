import React from 'react'

const StatBar = ({text}) => {

  const wordCount=text.trim() ?text.trim().split(/\s+/).length:0;
  const charCount=text.length;
  return (
    <div className='flex justify-between items-center px-2 py-4
      bg-gray-50 rounded-lg text-sm text-gray-600 '>
      <div className='flex space-x-4'>
        <span>Words:<span className='font-medium'>{wordCount}</span></span>
        <span>Characters:<span className='font-medium'>{charCount}</span></span>
      </div>
      <div className='text-xs'>
        {wordCount <10 && wordCount >0 &&(
          <span className='text-amber-600' >Consider adding more content for better analysis</span>
        )}
      </div>
    </div>
  )
}

export default StatBar