import React, { useState } from 'react'
import InputForm from '../components/Phishing/InputForm';
import ResultCard from '../components/Phishing/ResultCard';
import SafetyTips from '../components/Phishing/SafetyTips';
import { detectPhishing } from '../utils/detectPhishing';


const PhysingDetector = () => {
  const [inputText,setInputText]=useState('');
  const [isAnalyzing,setIsAnalyzing]=useState(false);
  const [result,setResult]=useState(null)
  const [showResult,setShowResult]=useState(false);


  const  handleDetect=async()=>{
    if(inputText.trim()){
      setIsAnalyzing(true)
      setShowResult(false)
      setResult(null)

      try{
        const detectionResult=await detectPhishing(inputText.trim())
        setResult(detectionResult)
        setIsAnalyzing(false)
        setTimeout(()=>setShowResult(true),100)
      }
      catch(error){
        console.error('Detection failed:',error)
        setIsAnalyzing(false)
      }
    }

    
  }
    const handleScanUrl=async()=>{
      const sampleUrl="http://suspicious-bank.bit.ly/verify-account-urgent"
      setInputText(sampleUrl)
      setIsAnalyzing(true)
      setShowResult(false)
      setResult(null)


      try{
        const detectionResult=await detectPhishing(sampleUrl)
        setResult(detectionResult)
        setIsAnalyzing(false)
        setTimeout(()=>setShowResult(true),100)
      }
      catch(error){
        console.error('Dectection failed:',error)
        setIsAnalyzing(false)
      }
    }
  
  
  

  return (
    <div className='min-h-screen bg-white'>
   <section className='bg-gray-50 py-16'>
    <div className='max-w-4xl mx-auto px-4 text-center'>
      <h1 className='text-4xl md:text-5xl font-bold
      text-gray-900 mb-5'>
         Detect Phishing Links Easily
      </h1>
      <p className='text-xl text-gray-600 mb-8
      max-w-2xl mx-auto'>
        Use smart AI to identify and block suspicious 
        URLs and emails. 
        Protect yourself from cyber threats with our 
        advanced detection system.
      </p>
      <button
     onClick={handleScanUrl}
      className='bg-blue-600 text-white px-8 py-3
      rounded-lg font-semibold hover:bg-blue-700
      focus:outline-none focus:ring-2 focus:ring-blue-500
      focus:ring-offset-2 transition-colors'>
        Scan URL
      </button>
    </div>
    
   </section>

    <main className='max-w-4xl mx-auto px-4 py-12'>
            <InputForm
               inputText={inputText}
                setInputText={setInputText}
               isAnalyzing={isAnalyzing}
               onDetect={handleDetect}
               onScanUrl={handleScanUrl}/>

            <ResultCard
              result={result}
              showResult={showResult}/>

              <SafetyTips/>
    </main>
   
   </div>
  )
}
export default PhysingDetector;
