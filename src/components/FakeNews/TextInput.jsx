import React from 'react'

const TextInput = ({value,onChange,onKeyDown,placeholder}) => {


  return (
    <div className='w-full'>
    <label htmlFor="newsText"
    className='block text-sm font-medium text-gray-700 mb-2' >
            Enter News Content to Analyze
        </label>
        <textarea
        id="newsText"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className='w-full h-48 p-4 border border-gray-300 rounded-lg
        focus:ring-2 focus:ring-blue-500 focus:border-transparent
           resize-none text-sm leading-relaxed'
        rows={8}/>
        <p className='text-xs text-gray-500 mt-1'>
            Press Ctrl+Enter to analyze quickly</p>
    </div>
  )
}

export default TextInput;