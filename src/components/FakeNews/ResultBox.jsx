import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { 
  CLASSIFICATION_TYPES, 
  CLASSIFICATION_MESSAGES, 
  CLASSIFICATION_TITLES, 
  CLASSIFICATION_COLORS 
} from '../../utils/constants';

const ResultBox = ({ result, error, isAnalyzing }) => {
  const getResultIcon = (classification) => {
    switch (classification) {
      case CLASSIFICATION_TYPES.LIKELY_FAKE:
        return <XCircle className="w-6 h-6" />;
      case CLASSIFICATION_TYPES.QUESTIONABLE:
        return <AlertTriangle className="w-6 h-6" />;
      case CLASSIFICATION_TYPES.LIKELY_REAL:
        return <CheckCircle className="w-6 h-6" />;
      default:
        return <AlertTriangle className="w-6 h-6" />;
    }
  };
//analysis is running
  if (isAnalyzing) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
          <div>
            <h3 className="text-lg font-medium text-blue-900">Analyzing Content...</h3>
            <p className="text-blue-700 text-sm">Please wait while we check the credibility of this news.</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center space-x-3">
          <XCircle className="w-5 h-5 text-red-600" />
          <div>
            <h3 className="text-lg font-medium text-red-900">Analysis Failed</h3>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <AlertTriangle className="w-8 h-8 text-gray-400 mx-auto mb-3" />
        <h3 className="text-lg font-medium text-gray-600">No Analysis Yet</h3>
        <p className="text-gray-500 text-sm">Enter some news content above and click "Analyze News" to get started.</p>
      </div>
    );
  }

  const color = CLASSIFICATION_COLORS[result.classification] || 'gray';
  const bgColor = `bg-${color}-50`;
  const borderColor = `border-${color}-200`;
  const textColor = `text-${color}-900`;
  const iconColor = `text-${color}-600`;

  return (
    <div className={`${bgColor} ${borderColor} border rounded-lg p-6`}>
      <div className="flex items-start space-x-4">
        <div className={iconColor}>
          {getResultIcon(result.classification)}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className={`text-xl font-bold ${textColor}`}>
                {CLASSIFICATION_TITLES[result.classification] || 'Unknown'}
              </h3>
              <p className={`text-sm ${textColor.replace('900', '700')} mt-1`}>
                Credibility Score: {result.score}/100 (Confidence: {result.confidence}%)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="text-center p-3 bg-white rounded-md">
              <div className="text-lg font-bold text-gray-900">{result.details.wordCount}</div>
              <div className="text-xs text-gray-600">Words Analyzed</div>
            </div>
            <div className="text-center p-3 bg-white rounded-md">
              <div className="text-lg font-bold text-gray-900">{result.details.suspiciousKeywords}</div>
              <div className="text-xs text-gray-600">Suspicious Keywords</div>
            </div>
            <div className="text-center p-3 bg-white rounded-md">
              <div className="text-lg font-bold text-gray-900">{result.details.sources}</div>
              <div className="text-xs text-gray-600">Sources Found</div>
            </div>
            <div className="text-center p-3 bg-white rounded-md">
              <div className="text-lg font-bold text-gray-900">
                {result.details.factChecked ? 'Yes' : 'No'}
              </div>
              <div className="text-xs text-gray-600">Fact Checked</div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white rounded-md">
            <h4 className="font-medium text-gray-900 mb-2">Analysis Summary</h4>
            <p className="text-sm text-gray-700">
              {CLASSIFICATION_MESSAGES[result.classification] || 'Unknown classification'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;