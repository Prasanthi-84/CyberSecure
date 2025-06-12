
import { Loader,Search } from 'lucide-react'
import React from 'react'

const InputForm = ({inputText,setInputText,isAnalyzing,
    onDetect,onScanUrl}) => {
  return (
    <section className='mb-12' >
        <div className='bg-white rounded-lg border border-gray-200 p-6'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>Check URL or Email content</h2>
            <div>
              <label htmlFor="input"
              className='block text-sm font-medium text-gray-700 mb-2'>
                Paste suspicious URL or email content
              </label>
              <textarea 
              id="input"
              value={inputText}
              onChange={(e)=>setInputText(e.target.value)}
              placeholder='https://suspicious-website.com or paste email content here...'
              className='w-full px-4 py-3 border border-gray-300
              rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
              resize-none'
              rows={4}/>
            </div>
            <div className='flex gap-4'>
              <button
              onClick={onDetect}
              disabled={isAnalyzing||!inputText.trim()}
              className='flex-1 bg-blue-600 text-white
              py-3 px-6 rounded-lg font-semibold hover:bg-blue-700
              focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors'
              >

                {isAnalyzing ?(
                  <div className='flex items-center justify-center
                  space-x-2 animate-pulse'> 
                  <Loader className='w-5 h-5 animate-spin'/>
                  <span>Analyzing...</span>
                  </div>

                ):(
                  <div className='flex items-center justify-center space-x-2'>
                    <Search className='w-5 h-5'/>
                    <span>Detect</span>
                  </div>
                )}
              </button>
              <button
              onClick={onScanUrl}
              disabled={isAnalyzing}
              className='bg-gray-600 text-white py-3 px-6
              rounded-lg font-semibold hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-gray-500 
              focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors'>
               Demo Scan
              </button>
              
            </div>
        </div>
    </section>
  )
}

export default InputForm