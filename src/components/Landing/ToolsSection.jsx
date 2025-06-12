import React from 'react';
import { Eye, Mail, Users } from 'lucide-react';
import ToolCard from './ToolCard';

const ToolsSection = ({ isVisible }) => {
  const tools = [
    {
      icon: Eye,
      title: "AI Fake News Detector",
      description: "Advanced machine learning algorithms analyze content credibility in real-time, protecting you from misinformation.",
      color: "from-red-500 to-pink-600",
      delay: 0,
      link:"/fakenews"
    },
    {
      icon: Mail,
      title: "Smart Phishing Shield",
      description: "Intelligent email analysis that detects sophisticated phishing attempts before they reach your inbox.",
      color: "from-orange-500 to-red-500",
      delay: 200,
      link:"/phishing"
    },
    {
      icon: Users,
      title: "Cyberbullying Guardian",
      description: "Comprehensive protection and education tools to recognize, prevent, and respond to online harassment.",
      color: "from-green-500 to-teal-500",
      delay: 400,
      link:"/cyberbullying"
    }
  ];

  return (
    <section id="tools" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Revolutionary</span> <span className="gradient-text">Security Tools</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience next-generation cybersecurity with our AI-powered detection tools. Hover over each card to explore.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12" >
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              color={tool.color}
              delay={tool.delay}
              isVisible={isVisible}
              link={tool.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;