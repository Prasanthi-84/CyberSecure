import { AlertTriangle, Loader2 } from 'lucide-react'
import React from 'react'

const ActionButtons = ({onAnalyze,onClear,isAnalyzing,hasText}) => {
  return (
    <div className='flex space-x-3'>
        <button
          onClick={onAnalyze}
          disabled={!hasText || isAnalyzing}
          className='flex-1 flex items-center justify-center
          space-x-2 bg-blue-600 hover:bg-blue-700 
          disabled:bg-gray-400 disabled:cursor-not-allowed
          text-white font-medium py-3 px-6 rounded-l-lg
          transition-colors duration-200'
        >
           {isAnalyzing ?(
            <>
            <Loader2 className='w-4 h-4 animate-spin'/>
            <span>Analyzing...</span>
            </>
           ):(
            <>
           <AlertTriangle className='w-4 h-4'/><span>Analyze News</span>
           </>
           )}
        </button>
        <button
        onClick={onClear}
        disabled={!hasText || isAnalyzing}
        className='px-6 py-3 border border-gray-300 
        hover:border-gray-400 disabled:border-gray-200
        disabled:text-gray-400 disabled:cursor-not-allowed
        text-gray-700 font-medium rounded-lg transition-colors
        duration-200'
        >
          Clear
        </button>
    </div>
  )
}

export default ActionButtons