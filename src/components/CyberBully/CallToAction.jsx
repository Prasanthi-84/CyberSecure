import React from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Don't Suffer in Silence
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          If you're experiencing cyberbullying, know that you're not alone. 
          Take action now and get the support you deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors"
            onClick={() => navigate("/report-incident")}
          >
            Report Incident Now
          </button>
          
          <button 
          className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors"
          onClick={()=>navigate("/TalkToSomeone")}>
            Talk to Someone
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;