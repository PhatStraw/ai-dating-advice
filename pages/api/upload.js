require('dotenv').config()
const OpenAI = require('openai');
// Initialize the OpenAI API with your API key
const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

export default function handler(req, res) {
  if (req.method === 'POST') {
    const imagesToOpenAi = req.body.map((base64String) => {
      return {
        type: "image_url",
        image_url: { url: base64String },
      };
    })
    openai.chat.completions
      .create({
        model: "gpt-4-vision-preview",
        max_tokens: 3000,
        messages: [
          {
            role: "system",
            content:
              "You are a helpful dating profile grading and tuning assistant.",
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "How can I Improve my profile? If you can't help, respond with 'No'.",
              },
              ...imagesToOpenAi,
            ],
          },
        ],
      })
      .then((response) => {
        const feedback = response.choices[0].message.content
        if(feedback === 'No') {
          res.sendStatus(400);
          return
        }
        res.sendStatus(201);
      })
      .catch((error) => {
        console.error(error);
      });
    return
  }
}