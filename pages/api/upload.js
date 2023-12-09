const OpenAI = require("openai");
import { NextResponse } from "next/server";

// Initialize the OpenAI API with your API key
const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export default async function handler(req) {
  if (req.method === "POST") {
    try {
      const data = await req.json();
      console.log(data)
      const imagesToOpenAi = data.map((base64String) => {
        return {
          type: "image_url",
          image_url: { url: base64String },
        };
      });
      const response = await openai.chat.completions.create({
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
      });

      const feedback = response.choices[0].message.content;
      console.log(feedback);
      if (feedback === "No") {
        return NextResponse.json(
          { error: "No feedback provided" },
          { status: 400 }
        );
      }
      return NextResponse.json({ feedback }, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error }, { status: 401 });
    }
  }
}