import Sidebar from "@/components/Side Bar/Sidebar";
import axios from "axios";
import React, { useState } from "react";

const FarmingContent = ({ data }) => {
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

  const sections = text.split("\n\n");

  return (
    <div className="farming-content p-4 bg-green-200  rounded-3xl shadow mt-4 overflow-y-auto max-h-[400px] scrollbar scrollbar-thumb-rose-400 scrollbar-track-red-600">
      {sections.map((section, index) => {
        if (section.startsWith("**") && section.includes(":")) {
          const [heading, ...content] = section.split(":");
          return (
            <div key={index} className="mb-4">
              <h2 className="font-bold text-lg">
                {heading.replace(/\*\*/g, "").trim()}
              </h2>
              <p className="mt-2">{content.join(":").trim()}</p>
            </div>
          );
        }

        return (
          <p key={index} className="text-base mt-2">
            {section}
          </p>
        );
      })}
    </div>
  );
};

const YieldAnalysis = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setResult(null);
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/crop/analyze",
        {
          prompt,
        }
      );

      setResult({
        candidates: [
          {
            content: {
              parts: [{ text: response.data.analysis }],
            },
          },
        ],
      });
      console.log(response.data.analysis);
    } catch (err) {
      setError("Failed to fetch yield analysis.");
      console.error(err.message, err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-cSkin h-screen overflow-hidden rounded-lg shadow-lg flex flex-row">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="divider divider-horizontal py-10 divider-success w-1"></div>
      <div className="p-10 flex-1">
        <h1 className="text-2xl font-bold mb-4">Yield Analysis</h1>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter details about your farm, soil, weather, etc."
          className="w-full h-32 p-2 border rounded mb-4 bg-white border-black resize-none"
        />
        <button
          onClick={handleAnalyze}
          className={`px-4 py-2 text-white rounded ${
            loading ? "bg-green-300" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        {result && (
          <div className="mt-4 overflow-y-auto max-h-96 scrollbar scrollbar-thumb-rose-400 scrollbar-track-red-600">
            <h2 className="font-bold text-lg mb-2">Analysis Result:</h2>

            <FarmingContent data={result} />
          </div>
        )}
        {error && <div className="mt-4 text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default YieldAnalysis;
