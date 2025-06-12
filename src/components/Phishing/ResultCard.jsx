import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, AlertCircle } from 'lucide-react';

const ResultCard = ({ result, showResult }) => {
  const getRiskStyle = (level) => {
    switch(level) {
      case 'safe':
        return {
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-800',
          icon: <CheckCircle className="w-6 h-6 text-green-500" />
        };
      case 'suspicious':
        return {
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-800',
          icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />
        };
      case 'phishing':
        return {
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800',
          icon: <XCircle className="w-6 h-6 text-red-500" />
        };
      default:
        return {
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          textColor: 'text-gray-800',
          icon: <AlertCircle className="w-6 h-6 text-gray-500" />
        };
    }
  };

  if (!result) return null;

  return (
    <section className={`mb-12 transition-all duration-500 ${showResult ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
      <div className={`rounded-lg border-2 p-6 ${getRiskStyle(result.riskLevel).bgColor} ${getRiskStyle(result.riskLevel).borderColor}`}>
        <div className="flex items-center space-x-3 mb-4">
          {getRiskStyle(result.riskLevel).icon}
          <h3 className={`text-2xl font-bold ${getRiskStyle(result.riskLevel).textColor}`}>
            {result.riskLevel.charAt(0).toUpperCase() + result.riskLevel.slice(1)}
          </h3>
          <span className={`text-sm font-medium ${getRiskStyle(result.riskLevel).textColor}`}>
            ({result.confidence}% confidence)
          </span>
        </div>
        
        <div className={`${getRiskStyle(result.riskLevel).textColor} mb-4`}>
          {result.riskLevel === 'safe' && (
            <p className="text-lg">This content appears to be legitimate and safe.</p>
          )}
          {result.riskLevel === 'suspicious' && (
            <p className="text-lg">This content shows some warning signs. Exercise caution.</p>
          )}
          {result.riskLevel === 'phishing' && (
            <p className="text-lg">High risk detected! This appears to be a phishing attempt.</p>
          )}
        </div>

        <div>
          <h4 className={`font-semibold mb-2 ${getRiskStyle(result.riskLevel).textColor}`}>
            Detection Details:
          </h4>
          <ul className="space-y-1">
            {result.reasons.map((reason, index) => (
              <li key={index} className={`flex items-start space-x-2 ${getRiskStyle(result.riskLevel).textColor}`}>
                <span className="text-sm mt-0.5">•</span>
                <span className="text-sm">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResultCard;