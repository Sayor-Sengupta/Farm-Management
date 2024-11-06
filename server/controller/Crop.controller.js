import axios from "axios";

export const cropPredict = async (req, res) => {
  const { soil, region, humidity, temperature, rainfall } = req.body;

  const prompt = `region: ${region}, soil: ${soil}, temperature: ${temperature} degree celsius, humidity: ${humidity}%, rainfall: ${rainfall} mm. Recommend me the crops that can be grown in India following the given conditions. Write max 5 crop name with a 1  line short explaination and dont add any other thing other that the crop and explaination and if also tell the best time to plant and if u thing the soil type doesnt exist in that case write "cannot grow using the following condition  " and also tell why in 1 short line and if u think any property is wrong tell that as well all 1 line short  .`;

  try {
    console.log("Using API Key:", process.env.GEMINI_API_KEY);

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Full Response:", JSON.stringify(response.data, null, 2));

    if (response.data.candidates && response.data.candidates.length > 0) {
      const candidate = response.data.candidates[0];

      const generatedText = candidate.content.parts[0].text.trim();

      const cleanText = generatedText
        .replace(/\*\*/g, "") // Remove all the ** characters
        .split("\n") // Split the response by line
        .map((line) => line.trim()) // Trim any extra spaces
        .filter((line) => line !== ""); // Remove any empty lines

      // Now you can create a short explanation for each crop
      const cropRecommendations = cleanText.map((line) => {
        const [cropName, ...description] = line.split(":");
        return {
          crop: cropName.trim(),
          description: description.join(":").trim(),
        };
      });

      // Send the cleaned response with crop recommendations
      res.json({ predictions: cropRecommendations });
  } else {
      res.status(500).json({ message: "No candidates found in the response." });
    }
  } catch (error) {
    if (error.response) {
      console.log("Error response:", error.response.data);
    }
    console.log("Error message:", error.message);
    res
      .status(500)
      .json({ message: "Error predicting crop", error: error.message });
  }
};