import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { prompt } = req.body;
      console.log("prompt", prompt);

      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        {
          prompt: prompt,
          max_tokens: 50,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
        }
      );

      const data = response.data.choices[0].text;
      console.log("data", data);

      res.status(200).json({ data: data });
    } catch (error) {
      console.error("Error in GPT API request:", error.message); // Log the error message
      console.error("Error response data:", error.response.data); // Log the error response data
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
