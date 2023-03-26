import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const jobDiscriptions = req.body.jobDiscriptions || "";
  const name = req.body.name || "";
  if (jobDiscriptions.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid content",
      },
    });
    return;
  }
  if (name.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "What you want to generate?",
      },
    });
    return;
  }

  try {
    // use text-davinci-003 and lower model

    // const completion = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: generatePrompt(jobDiscriptions),
    //   temperature: 0,
    //   max_tokens: 2048,
    // });
    // res.status(200).json({ result: completion.data.choices[0].text });
    // console.log(completion.data.choices[0].text);

    // use gpt-3.5 and higher model
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: generatePrompt(jobDiscriptions, name) }],
      temperature: 0,
    });
    res
      .status(200)
      .json({ result: completion?.data?.choices?.[0]?.message?.content });
  } catch (error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(jobDiscriptions: string, name: string) {
  const capitalizedJD =
  jobDiscriptions[0].toUpperCase() + jobDiscriptions.slice(1).toLowerCase();
  const generateName = name==="coverletter" ? "cover letter" : name;
  return `Create a ${generateName} in the same language as the job description:
  ${capitalizedJD}`;
}
