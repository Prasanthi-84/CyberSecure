import React, { useState } from "react";
import { Camera, Video, FileText, Upload } from "lucide-react"; 
const initialState = {
  name: "",
  email: "",
  story: "",
  anonymous: false,
  mediaFiles: [],
};

export default function ShareYourStory() {
  const [storyForm, setStoryForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFileUpload = (e) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setStoryForm((prev) => ({
      ...prev,
      mediaFiles: [...prev.mediaFiles, ...files],
    }));
  };

  const handleStorySubmit = async () => {
    if (!storyForm.story.trim()) {
      setErrorMsg("Please share your story before submitting.");
      return;
    }
    setErrorMsg("");
    setSubmitting(true);
    setSuccessMsg("");
    try {
      // Replace this with your API logic if needed
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSuccessMsg("Thank you for sharing your story!");
      setStoryForm(initialState);
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <section id="share" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Share Your Story
          </h2>
          <p className="text-xl text-gray-600">
            Your experience can help others feel less alone and inspire positive change.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  value={storyForm.name}
                  onChange={(e) =>
                    setStoryForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  value={storyForm.email}
                  onChange={(e) =>
                    setStoryForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                  disabled={submitting}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Story <span className="text-pink-600">*</span>
              </label>
              <textarea
                value={storyForm.story}
                onChange={(e) =>
                  setStoryForm((prev) => ({ ...prev, story: e.target.value }))
                }
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Share your experience, how you overcame challenges, or advice for others..."
                disabled={submitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Add Media (Optional)
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                  <Camera className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-600 font-medium">Add Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    multiple
                    disabled={submitting}
                  />
                </label>
                <label className="flex items-center space-x-2 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                  <Video className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-600 font-medium">Add Video</span>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={submitting}
                  />
                </label>
                <label className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                  <FileText className="h-5 w-5 text-green-600" />
                  <span className="text-green-600 font-medium">Add Document</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={submitting}
                  />
                </label>
              </div>
              {storyForm.mediaFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Selected files:</p>
                  <div className="space-y-1">
                    {storyForm.mediaFiles.map((file, idx) => (
                      <div key={idx} className="text-sm text-gray-500 flex items-center">
                        <Upload className="h-4 w-4 mr-2" />
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
                checked={storyForm.anonymous}
                onChange={(e) =>
                  setStoryForm((prev) => ({
                    ...prev,
                    anonymous: e.target.checked,
                  }))
                }
                className="mr-3 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                disabled={submitting}
              />
              <label htmlFor="anonymous" className="text-gray-700">
                Share this story anonymously
              </label>
            </div>
            {errorMsg && (
              <div className="text-red-600 bg-red-50 rounded-lg px-4 py-2">{errorMsg}</div>
            )}
            {successMsg && (
              <div className="text-green-700 bg-green-50 rounded-lg px-4 py-2">{successMsg}</div>
            )}
            <button
              onClick={handleStorySubmit}
              disabled={submitting}
              className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${
                submitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Sharing..." : "Share Your Story"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}