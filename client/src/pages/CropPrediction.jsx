import React, { useState } from "react";
import axios from "axios";
import Sidebar from "@/components/Side Bar/Sidebar";

const CropPrediction = () => {
  const [region, setRegion] = useState("");
  const [soil, setSoil] = useState("");
  const [humidity, setHumidity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState([]);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!soil || !humidity || !temperature || !rainfall) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/crop/predict",
        {
          soil,
          humidity,
          temperature,
          rainfall,
          region,
        }
      );
      console.log(response.data);

      setPrediction(response.data.predictions);
    } catch (error) {
      setError("Error predicting crop. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full bg-cSkin h-screen overflow-hidden rounded-lg shadow-lg flex flex-row ">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="divider divider-horizontal py-10  divider-success w-1"></div>

      <div className="flex flex-row gap-10 px-40  items-center justify-between">
        {" "}
        <form onSubmit={handleSubmit} className="w-1/2">
          <div className="mb-4">
            <label className="block text-gray-700 pb-1">Region</label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-[300px] p-2 bg-white border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 p-1">Soil Type</label>
            <input
              type="text"
              value={soil}
              onChange={(e) => setSoil(e.target.value)}
              className="w-[300px] p-2 bg-white border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 p-1">Humidity (%)</label>
            <input
              type="number"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              className="w-[300px] p-2 bg-white border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 p-1">Temperature (°C)</label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="w-[300px] p-2 border bg-white border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 p-1">Rainfall </label>
            <input
              type="text"
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
              className="w-[300px] p-2 border bg-white border-gray-300 rounded"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-center mb-4 p-1">{error}</p>
          )}

          <button
            type="submit"
            className="w-[300px] btn btn-outline text-black p-2 rounded bg-cyan-200 hover:bg-blue-600 disabled:bg-gray-300"
            disabled={loading}
          >
            {loading ? "Loading..." : "Predict Crop"}
          </button>
        </form>{" "}
        <div>
          {" "}
          {prediction.length > 0 && !loading ? (
            <div className="mt-6 p-4 bg-green-50 rounded-md border border-black ">
              <h3 className="text-xl font-semibold text-center">Recommended Crops:</h3>
              {prediction.map((crop, index) => (
                <div key={index} className="mt-2">
                  <p className="text-lg font-semibold">{crop.crop}</p>
                  <p>{crop.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <>
              {" "}
              <div className="mt-6 p-4 bg-green-50 rounded-md border h-[470px] w-[460px] border-black ">
                <h3 className="text-xl font-semibold text-center">Recommended Crops</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropPrediction;
