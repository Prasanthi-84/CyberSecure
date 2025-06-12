import React, { useState } from "react";

const helplines = [
  {
    name: "Cyber Crime Helpline (India)",
    phone: "1930",
    url: "https://cybercrime.gov.in/",
  },
  {
    name: "National Commission for Women (NCW) - Online Complaint",
    phone: "",
    url: "https://ncwapps.nic.in/onlinecomplaintsv2/",
  },
  {
    name: "Childline India Foundation",
    phone: "1098",
    url: "https://www.childlineindia.org/",
  },
  {
    name: "iCALL - Tata Institute of Social Sciences",
    phone: "9152987821",
    url: "https://icallhelpline.org/",
  },
  {
    name: "Cyber Peace Foundation",
    phone: "",
    url: "https://www.cyberpeace.org/report-cyber-crime/",
  },
];

export default function TalkToSomeone() {
  const [showList, setShowList] = useState(false);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 min-h-[60vh]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          You're Not Alone — Talk to Someone
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-xl mx-auto">
          If you need to talk, help is available. Reach out confidentially to someone who can listen and support you.
        </p>
        <button
          className="bg-white text-purple-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors"
          onClick={() => setShowList((v) => !v)}
        >
          {showList ? "Hide Support Options" : "Show Support Options"}
        </button>
        {showList && (
          <div className="mt-8 text-left">
            <ul className="space-y-4">
              {helplines.map((hl) => (
                <li key={hl.name} className="bg-white/90 p-4 rounded-lg shadow flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="font-bold text-purple-900">{hl.name}</span>
                    {hl.phone && (
                      <span className="block text-purple-700 mt-1">
                        📞 <a href={`tel:${hl.phone}`} className="underline">{hl.phone}</a>
                      </span>
                    )}
                  </div>
                  <a
                    href={hl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 md:mt-0 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors text-sm font-semibold"
                  >
                    Visit Website
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}