import React, { useState } from "react";
// If you don't use lucide-react, you can remove these icons or use <span> icons instead
import { AlertCircle, Upload } from "lucide-react";

const initialState = {
  name: "",
  email: "",
  incident: "",
  anonymous: false,
  evidenceFiles: [],
};

 const  ReportIncident=()=> {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFileUpload = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setForm((prev) => ({
        ...prev,
        evidenceFiles: [...prev.evidenceFiles, ...files],
      }));
    }
  };

  const handleSubmit = async () => {
    if (!form.incident.trim()) {
      setErrorMsg("Please describe the incident.");
      return;
    }
    setErrorMsg("");
    setSubmitting(true);
    setSuccessMsg("");
    try {
      // Replace this with your API logic
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSuccessMsg("Incident reported. Thank you for helping us keep our community safe.");
      setForm(initialState);
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Report Cyberbullying Incident
          </h2>
          <p className="text-lg text-gray-600">
            Help us maintain a safe and supportive environment by reporting incidents.
          </p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-xl">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your name"
                  disabled={submitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="your@email.com"
                  disabled={submitting}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Incident Description <span className="text-red-600">*</span>
              </label>
              <textarea
                value={form.incident}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, incident: e.target.value }))
                }
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Describe what happened, including dates, platforms, and any usernames involved..."
                disabled={submitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Attach Evidence (Optional)
              </label>
              <label className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                {typeof Upload === "function" ? <Upload className="h-5 w-5 text-red-600" /> : <span>📎</span>}
                <span className="text-red-600 font-medium">Add File</span>
                <input
                  type="file"
                  accept="image/*,video/*,.pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  multiple
                  disabled={submitting}
                />
              </label>
              {form.evidenceFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Selected files:</p>
                  <div className="space-y-1">
                    {form.evidenceFiles.map((file, idx) => (
                      <div key={idx} className="text-sm text-gray-500 flex items-center">
                        {typeof Upload === "function" ? <Upload className="h-4 w-4 mr-2" /> : <span className="mr-2">📎</span>}
                        {file.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="anonymous"
                checked={form.anonymous}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, anonymous: e.target.checked }))
                }
                className="mr-3 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                disabled={submitting}
              />
              <label htmlFor="anonymous" className="text-gray-700">
                Report anonymously
              </label>
            </div>
            {errorMsg && (
              <div className="text-red-600 bg-red-50 rounded-lg px-4 py-2 flex items-center gap-2">
                {typeof AlertCircle === "function" ? <AlertCircle className="h-5 w-5" /> : <span>⚠️</span>} {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="text-green-700 bg-green-50 rounded-lg px-4 py-2">{successMsg}</div>
            )}
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className={`w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${
                submitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Reporting..." : "Report Incident"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReportIncident;