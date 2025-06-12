import React, { useState, useCallback } from 'react';
import TextInput from '../components/FakeNews/TextInput';
import StatBar from '../components/FakeNews/StatBar';
import ActionButtons from '../components/FakeNews/ActionButtons';
import ResultBox from '../components/FakeNews/ResultBox';
import { analyzeText } from '../services/analysisService';
const FakeNewsDetector = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = useCallback(async () => {
    if (!text.trim()) return;
    
    setIsAnalyzing(true);
    setError('');
    setResult(null);
    
    try {
      const analysisResult = await analyzeText(text);
      setResult(analysisResult);
    } catch (err) {
      setError('Failed to analyze the content. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  }, [text]);

  const handleClear = useCallback(() => {
    setText('');
    setResult(null);
    setError('');
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault();
      handleAnalyze();
    }
  }, [handleAnalyze]);

  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
    // Clear previous results when text changes significantly
    if (result && Math.abs(e.target.value.length - text.length) > 10) {
      setResult(null);
      setError('');
    }
  }, [text, result]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fake News Detector
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Analyze news content for credibility using advanced detection algorithms. 
            Paste any news article or claim to check its reliability.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <TextInput
            value={text}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            placeholder="Paste news content here to analyze its credibility..."
          />
          
          <StatBar text={text} />
          
          <ActionButtons
            onAnalyze={handleAnalyze}
            onClear={handleClear}
            isAnalyzing={isAnalyzing}
            hasText={text.trim().length > 0}
          />
          
          <ResultBox
            result={result}
            error={error}
            isAnalyzing={isAnalyzing}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>This is a demo application. Results are for educational purposes only.</p>
          <p>Always verify important news through multiple reliable sources.</p>
        </div>
      </div>
    </div>
  );
};

export default FakeNewsDetector;