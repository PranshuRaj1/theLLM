import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const pretext = `The answer to this query should be first explained in 5 points which are easly readable and then a paragraph should explain the query in breif in 200 words.
  Use Brief Description: to start the description about the topic `;

export async function getGroqChatCompletion(message) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: message + pretext,
      },
    ],
    model: "llama3-70b-8192",
  });
}
