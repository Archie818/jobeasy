import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from 'next';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req:NextApiRequest, res:NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid animal",
      }
    });
    return;
  }

  try {
    // const completion = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: generatePrompt(animal),
    //   temperature: 0,
    //   max_tokens: 2048,
    // });
    // res.status(200).json({ result: completion.data.choices[0].text });
    // console.log(completion.data.choices[0].text);
    // use gpt-3.5-turbo
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: generatePrompt(animal) }
      ],
      temperature: 0,
    });
    res.status(200).json({ result: completion?.data?.choices?.[0]?.message?.content });
    // console.log(completion.data.choices[0].message.content);

  } catch(error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(animal: string) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    return `Help me generate a cover letter in the same language as the job description.
    ${capitalizedAnimal}`
}