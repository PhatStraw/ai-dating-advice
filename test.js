require('dotenv').config()

const OpenAI = require('openai');
const fs = require('fs');
// Initialize the OpenAI API with your API key
const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"],
  });

// Path to your image
const imagePath = './example-1.png';
const imagePath2 = './example-2.png';

// Read the image file
const image = fs.readFileSync(imagePath);
const image2 = fs.readFileSync(imagePath2);

// Convert the image data to base64
const base64Image = Buffer.from(image).toString('base64');
const base64Image2 = Buffer.from(image2).toString('base64');

// Use the OpenAI API to analyze the image
//Example 1
// openai.chat.completions.create({
//   model: 'gpt-4-vision-preview',
//   max_tokens: 3000,
//   messages: [
//     {
//       role: 'system',
//       content: 'You are a helpful dating profile grading and tuning assistant.'
//     },
//     {
//       role: 'user',
//       "content": [
//         {
//           "type": "text",
//           "text": "How can I Improve my profile?"
//         },
//         { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image}` } }
//     ]
//     }
//   ]
// }).then(response => {
//   console.log( response.choices[0].message.content);
// }).catch(error => {
//   console.error(error);
// });

//Example 2
openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    max_tokens: 3000,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful dating profile grading and tuning assistant.'
      },
      {
        role: 'user',
        "content": [
          {
            "type": "text",
            "text": "How can I Improve my conversation?"
          },
          { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image2}` } }
      ]
      }
    ]
  }).then(response => {
    console.log( response.choices[0].message.content);
  }).catch(error => {
    console.error(error);
  });