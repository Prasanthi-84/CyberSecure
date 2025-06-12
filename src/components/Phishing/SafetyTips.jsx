import React from 'react';
import { Eye, Mail, Lock, Globe, Shield } from 'lucide-react';

const SafetyTips = () => {
  const safetyTips = [
    {
      icon: <Eye className="w-5 h-5 text-blue-500" />,
      title: "Check the URL carefully",
      description: "Look for misspellings, extra characters, or suspicious domains before clicking."
    },
    {
      icon: <Mail className="w-5 h-5 text-purple-500" />,
      title: "Verify sender information",
      description: "Check if the email address matches the organization's official domain."
    },
    {
      icon: <Lock className="w-5 h-5 text-green-500" />,
      title: "Look for HTTPS",
      description: "Legitimate websites use secure HTTPS connections, especially for sensitive data."
    },
    {
      icon: <Globe className="w-5 h-5 text-orange-500" />,
      title: "Verify through official channels",
      description: "Contact the organization directly through their official website or phone number."
    }
  ];

  return (
    <>
      {/* Safety Tips Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Stay Safe from Phishing
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {safetyTips.map((tip, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Tips */}
      <section className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Security Tips</h3>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Never enter personal information on suspicious websites</li>
              <li>• Use two-factor authentication when available</li>
              <li>• Keep your browser and antivirus software updated</li>
              <li>• Be extra cautious with urgent or threatening messages</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SafetyTips;